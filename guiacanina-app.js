/**
 * GUÍACANINA - APLICACIÓN JAVASCRIPT
 * Gestión de la interfaz, búsqueda, filtros, favoritos, detalles de razas
 */

// ========================================
// VARIABLES GLOBALES
// ========================================

let currentFilter = 'all';
let searchTerm = '';
let favorites = [];
let deferredPrompt = null;

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🐕 GuíaCanina - Iniciando...');
    
    // Cargar favoritos del localStorage
    loadFavorites();
    
    // Inicializar interfaz
    initializeUI();
    
    // Renderizar razas
    renderBreeds();
    
    // PWA Install
    initializePWA();
    
    // Event Listeners
    setupEventListeners();
    
    console.log(`✅ ${BREEDS_DATABASE.length} razas cargadas`);
});

// ========================================
// INICIALIZACIÓN UI
// ========================================

function initializeUI() {
    // Actualizar contador de favoritos
    updateFavoritesCount();
    
    // Ocultar loading
    const loading = document.getElementById('loading');
    if (loading) loading.classList.add('hidden');
}

// ========================================
// FAVORITOS
// ========================================

function loadFavorites() {
    const stored = localStorage.getItem('guiacanina_favorites');
    if (stored) {
        try {
            favorites = JSON.parse(stored);
        } catch (e) {
            favorites = [];
        }
    }
}

function saveFavorites() {
    localStorage.setItem('guiacanina_favorites', JSON.stringify(favorites));
    updateFavoritesCount();
}

function toggleFavorite(breedId) {
    const index = favorites.indexOf(breedId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(breedId);
    }
    saveFavorites();
    
    // Actualizar UI si estamos en vista de favoritos
    const favSection = document.getElementById('favoritesSection');
    if (favSection && !favSection.classList.contains('hidden')) {
        renderFavorites();
    }
}

function isFavorite(breedId) {
    return favorites.includes(breedId);
}

function updateFavoritesCount() {
    const countElement = document.querySelector('.fav-count');
    if (countElement) {
        countElement.textContent = favorites.length;
    }
}

// ========================================
// RENDERIZADO DE RAZAS
// ========================================

function renderBreeds() {
    const grid = document.getElementById('breedsGrid');
    const noResults = document.getElementById('noResults');
    
    if (!grid) return;
    
    // Filtrar razas
    let filteredBreeds = BREEDS_DATABASE.filter(breed => {
        // Filtro por categoría
        if (currentFilter !== 'all' && breed.categoria !== currentFilter) {
            return false;
        }
        
        // Filtro por búsqueda
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            const nombre = breed.nombre.toLowerCase();
            const alternativos = breed.nombresAlternativos?.join(' ').toLowerCase() || '';
            const tamaño = breed.tamaño.toLowerCase();
            
            if (!nombre.includes(term) && !alternativos.includes(term) && !tamaño.includes(term)) {
                return false;
            }
        }
        
        return true;
    });
    
    // Mostrar/ocultar mensaje de sin resultados
    if (filteredBreeds.length === 0) {
        grid.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    } else {
        grid.classList.remove('hidden');
        noResults.classList.add('hidden');
    }
    
    // Renderizar cards
    grid.innerHTML = filteredBreeds.map(breed => createBreedCard(breed)).join('');
    
    // Event listeners para las cards
    attachBreedCardListeners();
}

function createBreedCard(breed) {
    const isFav = isFavorite(breed.id);
    const patrimonioMexicano = breed.esPatrimonioMexicano ? `
        <div class="breed-card-badge">🇲🇽 Patrimonio Mexicano</div>
    ` : '';
    
    return `
        <div class="breed-card" data-breed-id="${breed.id}">
            <div class="breed-card-image">
                ${breed.imagen}
            </div>
            ${patrimonioMexicano}
            <div class="breed-card-content">
                <div class="breed-card-header">
                    <h3 class="breed-card-name">${breed.nombre}</h3>
                    ${breed.origen?.pais ? `<span class="breed-card-flag">${getCountryFlag(breed.origen.pais)}</span>` : ''}
                </div>
                <span class="breed-card-size">${breed.tamaño}</span>
                <p class="breed-card-desc">${breed.temperamento?.personalidad || 'Perro encantador'}</p>
                <div class="breed-card-stats">
                    <span class="breed-stat">⚡ ${breed.temperamento?.nivelEnergia || 'Media'}</span>
                    <span class="breed-stat">🕐 ${breed.esperanzaVida || '12-15 años'}</span>
                </div>
            </div>
            <button class="btn-favorite-card ${isFav ? 'favorited' : ''}" data-breed-id="${breed.id}" onclick="event.stopPropagation(); toggleFavoriteFromCard('${breed.id}')">
                ${isFav ? '❤️' : '🤍'}
            </button>
        </div>
    `;
}

function getCountryFlag(pais) {
    if (pais.includes('🇲🇽') || pais.includes('México')) return '🇲🇽';
    if (pais.includes('China')) return '🇨🇳';
    if (pais.includes('Alemania')) return '🇩🇪';
    if (pais.includes('Rusia')) return '🇷🇺';
    if (pais.includes('Francia')) return '🇫🇷';
    if (pais.includes('Inglaterra') || pais.includes('Reino Unido')) return '🇬🇧';
    return '🌍';
}

function attachBreedCardListeners() {
    const cards = document.querySelectorAll('.breed-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const breedId = card.dataset.breedId;
            showBreedDetail(breedId);
        });
    });
}

function toggleFavoriteFromCard(breedId) {
    toggleFavorite(breedId);
    
    // Actualizar el botón
    const btn = document.querySelector(`[data-breed-id="${breedId}"].btn-favorite-card`);
    if (btn) {
        const isFav = isFavorite(breedId);
        btn.textContent = isFav ? '❤️' : '🤍';
        btn.classList.toggle('favorited', isFav);
    }
}

// ========================================
// DETALLE DE RAZA
// ========================================

function showBreedDetail(breedId) {
    const breed = BREEDS_DATABASE.find(b => b.id === breedId);
    if (!breed) return;
    
    const detailView = document.getElementById('breedDetailView');
    const mainView = document.getElementById('mainView');
    const content = document.getElementById('breedDetailContent');
    
    // Renderizar contenido
    content.innerHTML = renderBreedDetail(breed);
    
    // Mostrar vista
    mainView.classList.add('hidden');
    detailView.classList.remove('hidden');
    
    // Actualizar botón de favorito
    updateDetailFavoriteButton(breedId);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function renderBreedDetail(breed) {
    const isFav = isFavorite(breed.id);
    
    return `
        <div class="detail-hero">
            <div class="detail-hero-image">${breed.imagen}</div>
            <h1 class="detail-title">${breed.nombre}</h1>
            ${breed.nombresAlternativos ? `
                <p class="detail-subtitle">También conocido como: ${breed.nombresAlternativos.join(', ')}</p>
            ` : ''}
            <div class="detail-tags">
                ${breed.origen?.pais ? `<span class="detail-tag flag">${getCountryFlag(breed.origen.pais)}</span>` : ''}
                <span class="detail-tag">${breed.tamaño}</span>
                <span class="detail-tag">⚡ ${breed.temperamento?.nivelEnergia || 'Media'}</span>
                ${breed.esPatrimonioMexicano ? `<span class="detail-tag">🇲🇽 Patrimonio Mexicano</span>` : ''}
            </div>
        </div>
        
        <!-- Origen -->
        ${renderOrigenSection(breed)}
        
        <!-- Temperamento -->
        ${renderTemperamentoSection(breed)}
        
        <!-- Etapas de Vida -->
        ${renderEtapasVidaSection(breed)}
        
        <!-- Alimentación -->
        ${renderAlimentacionSection(breed)}
        
        <!-- Salud -->
        ${renderSaludSection(breed)}
        
        <!-- CUIDADOS DE BAÑO Y ESTÉTICA (Sección crítica con BotaniCan) -->
        ${renderCuidadosBañoSection(breed)}
        
        <!-- Tips Específicos -->
        ${renderTipsSection(breed)}
        
        <!-- Alertas Críticas -->
        ${renderAlertasSection(breed)}
        
        <!-- Salud Pública -->
        ${renderSaludPublicaSection(breed)}
        
        <!-- Costo de Mantenimiento -->
        ${renderCostoMantenimientoSection(breed)}
        
        <!-- BotaniCan Footer -->
        ${renderBotaniCanFooter()}
    `;
}

function renderOrigenSection(breed) {
    if (!breed.origen) return '';
    
    return `
        <div class="detail-section">
            <h2>🌍 Origen e Historia</h2>
            <p><strong>País de origen:</strong> ${breed.origen.pais}</p>
            ${breed.origen.epoca ? `<p><strong>Época:</strong> ${breed.origen.epoca}</p>` : ''}
            ${breed.origen.historia ? `<p>${breed.origen.historia}</p>` : ''}
            ${breed.origen.curiosidad ? `
                <div class="alert-box alert-info">
                    <strong>💡 Curiosidad:</strong>
                    <p>${breed.origen.curiosidad}</p>
                </div>
            ` : ''}
            ${breed.origen.mitologia ? `<p><strong>Mitología:</strong> ${breed.origen.mitologia}</p>` : ''}
            ${breed.origen.reconocimiento ? `<p><strong>Reconocimientos:</strong> ${breed.origen.reconocimiento}</p>` : ''}
            ${breed.valorCultural ? `
                <div class="alert-box alert-success">
                    <strong>🏆 Valor Cultural</strong>
                    <p>${breed.valorCultural.importancia}</p>
                    ${breed.valorCultural.orgullo ? `<p>${breed.valorCultural.orgullo}</p>` : ''}
                </div>
            ` : ''}
        </div>
    `;
}

function renderTemperamentoSection(breed) {
    if (!breed.temperamento) return '';
    
    const t = breed.temperamento;
    return `
        <div class="detail-section">
            <h2>🐕 Temperamento y Personalidad</h2>
            <p><strong>Personalidad:</strong> ${t.personalidad}</p>
            <p><strong>Nivel de energía:</strong> ${t.nivelEnergia}</p>
            ${t.adiestramiento ? `<p><strong>Adiestramiento:</strong> ${t.adiestramiento}</p>` : ''}
            ${t.ladridos ? `<p><strong>Ladridos:</strong> ${t.ladridos}</p>` : ''}
            
            ${t.sociabilidad ? `
                <h3>Sociabilidad</h3>
                <ul>
                    ${t.sociabilidad.conHumanos ? `<li><strong>Con humanos:</strong> ${t.sociabilidad.conHumanos}</li>` : ''}
                    ${t.sociabilidad.conNiños ? `<li><strong>Con niños:</strong> ${t.sociabilidad.conNiños}</li>` : ''}
                    ${t.sociabilidad.conPerros ? `<li><strong>Con otros perros:</strong> ${t.sociabilidad.conPerros}</li>` : ''}
                    ${t.sociabilidad.conExtraños ? `<li><strong>Con extraños:</strong> ${t.sociabilidad.conExtraños}</li>` : ''}
                </ul>
            ` : ''}
            
            ${t.caracteristicas && t.caracteristicas.length > 0 ? `
                <h3>Características Distintivas</h3>
                <ul>
                    ${t.caracteristicas.map(c => `<li>${c}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `;
}

function renderEtapasVidaSection(breed) {
    if (!breed.etapasVida) return '';
    
    const etapas = breed.etapasVida;
    return `
        <div class="detail-section">
            <h2>📅 Etapas de Vida</h2>
            <p><strong>Esperanza de vida:</strong> ${breed.esperanzaVida || '12-15 años'}</p>
            
            ${etapas.cachorro ? `
                <h3>🐶 Cachorro (${etapas.cachorro.edad})</h3>
                <ul>
                    ${etapas.cachorro.cuidados.map(c => `<li>${c}</li>`).join('')}
                </ul>
            ` : ''}
            
            ${etapas.adulto ? `
                <h3>🐕 Adulto (${etapas.adulto.edad})</h3>
                <ul>
                    ${etapas.adulto.cuidados.map(c => `<li>${c}</li>`).join('')}
                </ul>
            ` : ''}
            
            ${etapas.senior ? `
                <div class="alert-box alert-warning">
                    <strong>👴 Etapa Senior / Geriátrica (${etapas.senior.edad})</strong>
                    <p>Esta etapa requiere cuidados especiales:</p>
                    <ul>
                        ${etapas.senior.cuidados.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                    ${etapas.senior.enfermedadesComunes ? `
                        <p><strong>Enfermedades comunes en seniors:</strong></p>
                        <ul>
                            ${etapas.senior.enfermedadesComunes.map(e => `<li>${e}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            ` : ''}
        </div>
    `;
}

function renderAlimentacionSection(breed) {
    if (!breed.alimentacion) return '';
    
    const a = breed.alimentacion;
    return `
        <div class="detail-section">
            <h2>🍖 Alimentación y Nutrición</h2>
            ${a.tipoAlimento ? `<p><strong>Tipo de alimento:</strong> ${a.tipoAlimento}</p>` : ''}
            ${a.calorias ? `<p><strong>Calorías:</strong> ${a.calorias}</p>` : ''}
            
            ${a.comidas ? `
                <h3>Frecuencia de Comidas</h3>
                <ul>
                    ${a.comidas.cachorro ? `<li><strong>Cachorro:</strong> ${a.comidas.cachorro}</li>` : ''}
                    ${a.comidas.adulto ? `<li><strong>Adulto:</strong> ${a.comidas.adulto}</li>` : ''}
                    ${a.comidas.senior ? `<li><strong>Senior:</strong> ${a.comidas.senior}</li>` : ''}
                </ul>
            ` : ''}
            
            ${a.alertas && a.alertas.length > 0 ? `
                <div class="alert-box alert-warning">
                    <strong>⚠️ Alertas Alimentarias</strong>
                    <ul>
                        ${a.alertas.map(alert => `<li>${alert}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${a.prohibido && a.prohibido.length > 0 ? `
                <div class="alert-box alert-critical">
                    <strong>🚫 Alimentos Prohibidos</strong>
                    <ul>
                        ${a.prohibido.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${a.suplementos && a.suplementos.length > 0 ? `
                <h3>Suplementos Recomendados</h3>
                <ul>
                    ${a.suplementos.map(s => `<li>${s}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `;
}

function renderSaludSection(breed) {
    return `
        <div class="detail-section">
            <h2>🏥 Salud</h2>
            
            ${breed.problemasCongenitos && breed.problemasCongenitos.length > 0 ? `
                <div class="alert-box alert-critical">
                    <strong>🧬 Problemas Congénitos</strong>
                    <ul>
                        ${breed.problemasCongenitos.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${breed.saludComun && breed.saludComun.length > 0 ? `
                <h3>Problemas de Salud Comunes</h3>
                <ul>
                    ${breed.saludComun.map(s => `<li>${s}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `;
}

function renderCuidadosBañoSection(breed) {
    if (!breed.cuidadosBañoEstetica) return '';
    
    const cuidados = breed.cuidadosBañoEstetica;
    let html = `<div class="detail-section">
        <h2>🛁 Cuidados de Baño y Estética Canina</h2>
        <p><strong>Tipo de pelaje:</strong> ${cuidados.tipoPelaje || 'Variable'}</p>`;
    
    // SECCIÓN CRÍTICA: pH Canino (Universal)
    html += `
        <div class="alert-box alert-critical">
            <strong>⚠️ pH DE LA PIEL CANINA - INFORMACIÓN CRÍTICA</strong>
            <p><strong>pH Humano:</strong> 5.5 (ácido) | <strong>pH Canino:</strong> 6.2-7.4 (neutro-alcalino)</p>
            <p>La piel del perro es 3-5 veces más delgada y delicada que la humana. Productos con pH incorrecto destruyen la barrera protectora natural.</p>
            <p style="margin-top:10px;"><strong>🚫 PRODUCTOS PROHIBIDOS:</strong></p>
            <ul>
                <li><strong>Jabón de trastes/lavaplatos:</strong> EXTREMADAMENTE PELIGROSO - Formulado para cortar grasa, causa resequedad extrema, grietas, dermatitis química, dolor. Lamido = intoxicación.</li>
                <li><strong>Shampoo humano:</strong> pH 5.5 demasiado ácido, reseca piel, elimina aceites protectores, causa irritación y dermatitis.</li>
                <li><strong>Detergente para ropa:</strong> TÓXICO - Quemaduras químicas, alergias severas, problemas respiratorios.</li>
                <li><strong>Jabón Zote/Roma:</strong> pH extremo alcalino (9-11), resequedad extrema, descamación, grietas.</li>
            </ul>
            <p style="margin-top:10px;"><strong>💡 Realidad:</strong> Lo barato sale caro. Usar productos inadecuados = $2,000-$5,000 MXN en tratamientos veterinarios.</p>
        </div>
    `;
    
    // RASURADO PROHIBIDO (Solo razas de doble capa)
    if (cuidados.rapadoProhibido) {
        html += `
            <div class="alert-box alert-critical">
                <strong>🚨 ${cuidados.rapadoProhibido.titulo}</strong>
                <p>${cuidados.rapadoProhibido.mitoMortal}</p>
                <p><strong>${cuidados.rapadoProhibido.realidad}</strong></p>
                
                <p style="margin-top:10px;"><strong>Consecuencias del rasurado:</strong></p>
                <ul>
                    ${cuidados.rapadoProhibido.razonesProhibicion.map(r => `<li>${r}</li>`).join('')}
                </ul>
                
                <p style="margin-top:10px;"><strong>✅ Lo que SÍ debes hacer:</strong></p>
                <ul>
                    ${cuidados.rapadoProhibido.loQueDebesHacer.map(h => `<li>${h}</li>`).join('')}
                </ul>
                
                <p style="margin-top:10px;"><strong>${cuidados.rapadoProhibido.advertencia}</strong></p>
            </div>
        `;
    }
    
    // Pliegues faciales (Pug, Bulldog, etc.)
    if (cuidados.cuidadoCritico?.pliegues) {
        const pliegues = cuidados.cuidadoCritico.pliegues;
        html += `
            <div class="alert-box alert-warning">
                <strong>⚠️ LIMPIEZA DE PLIEGUES FACIALES - ${pliegues.frecuencia}</strong>
                <p><strong>Procedimiento:</strong></p>
                <ul>
                    ${pliegues.procedimiento.map(p => `<li>${p}</li>`).join('')}
                </ul>
                <p style="margin-top:10px;"><strong>Consecuencias de no limpiar:</strong> ${pliegues.consecuencias}</p>
            </div>
        `;
    }
    
    // Cuidados especiales piel sin pelo (Xolo)
    if (cuidados.variedadSinPelo) {
        const sinPelo = cuidados.variedadSinPelo;
        html += `
            <div class="alert-box alert-info">
                <strong>💧 Cuidados Especiales - Piel Sin Pelo</strong>
                <ul>
                    ${sinPelo.cuidadosPiel.map(c => `<li>${c}</li>`).join('')}
                </ul>
                <p><strong>Frecuencia de baño:</strong> ${sinPelo.baño.frecuencia}</p>
            </div>
        `;
    }
    
    // Cepillado
    if (cuidados.cepillado) {
        html += `<h3>🖌️ Cepillado</h3>`;
        
        if (typeof cuidados.cepillado === 'object' && cuidados.cepillado.frecuencia) {
            html += `<p><strong>Frecuencia:</strong></p><ul>`;
            if (cuidados.cepillado.frecuencia.normal) html += `<li>Normal: ${cuidados.cepillado.frecuencia.normal}</li>`;
            if (cuidados.cepillado.frecuencia.temporadaMuda) html += `<li>Temporada de muda: ${cuidados.cepillado.frecuencia.temporadaMuda}</li>`;
            if (cuidados.cepillado.frecuencia.verano) html += `<li>Verano: ${cuidados.cepillado.frecuencia.verano}</li>`;
            html += `</ul>`;
            
            if (cuidados.cepillado.herramientas) {
                html += `<p><strong>Herramientas necesarias:</strong></p><ul>`;
                cuidados.cepillado.herramientas.forEach(h => {
                    if (typeof h === 'object') {
                        html += `<li><strong>${h.nombre}:</strong> ${h.funcion}${h.obligatorio ? ' (OBLIGATORIO)' : ''}</li>`;
                    } else {
                        html += `<li>${h}</li>`;
                    }
                });
                html += `</ul>`;
            }
        }
    }
    
    // Baño
    if (cuidados.baño) {
        html += `<h3>🚿 Baño</h3>`;
        html += `<p><strong>Frecuencia:</strong> ${cuidados.baño.frecuencia}</p>`;
        
        if (cuidados.baño.proceso) {
            html += `<p><strong>Proceso:</strong></p><ul>`;
            cuidados.baño.proceso.forEach(p => html += `<li>${p}</li>`);
            html += `</ul>`;
        }
    }
    
    // BOTANICAN (Integración natural)
    if (cuidados.botanican) {
        const bc = cuidados.botanican;
        
        // Nueva estructura con recomendaciones array
        if (bc.recomendaciones && bc.recomendaciones.length > 0) {
            bc.recomendaciones.forEach(rec => {
                html += `
                    <div class="botanican-section">
                        <h3>🧴 ${rec.producto}</h3>
                        <span class="badge">${rec.prioridad}</span>
                        <p>${rec.porque}</p>
                        
                        ${rec.beneficios && rec.beneficios.length > 0 ? `
                            <p><strong>Beneficios:</strong></p>
                            <ul>
                                ${rec.beneficios.map(b => `<li>${b}</li>`).join('')}
                            </ul>
                        ` : ''}
                        
                        <a href="${rec.link}" target="_blank" class="btn-primary">Ver Producto</a>
                        <button onclick="compartirProducto('${breed.nombre}', '${rec.producto}', '${rec.link}')" class="btn-share" style="margin-left:0.5rem">📤 Compartir</button>
                    </div>
                `;
            });
        }
        // Estructura vieja (fallback)
        else if (bc.recomendado) {
            html += `
                <div class="botanican-section">
                    <h3>🧴 Recomendación: ${bc.recomendado}</h3>
                    <p>${bc.porque}</p>
                    <a href="${bc.link}" target="_blank" class="btn-primary">Ver Productos BotaniCan</a>
                    <button onclick="compartirProducto('${breed.nombre}')" class="btn-share" style="margin-left:0.5rem">📤 Compartir</button>
                </div>
            `;
        }
    }
    
    html += `</div>`;
    return html;
}

function renderTipsSection(breed) {
    if (!breed.tipsEspecificos || breed.tipsEspecificos.length === 0) return '';
    
    return `
        <div class="detail-section">
            <h2>💡 Tips Específicos de la Raza</h2>
            <ul>
                ${breed.tipsEspecificos.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
    `;
}

function renderAlertasSection(breed) {
    if (!breed.alertasCriticas || breed.alertasCriticas.length === 0) return '';
    
    return `
        <div class="detail-section">
            <div class="alert-box alert-critical">
                <strong>🚨 Alertas Críticas de Salud</strong>
                <ul>
                    ${breed.alertasCriticas.map(alert => `<li>${alert}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

function renderSaludPublicaSection(breed) {
    if (!breed.saludPublica) return '';
    
    const sp = breed.saludPublica;
    return `
        <div class="detail-section">
            <h2>🦠 Responsabilidad y Salud Pública</h2>
            
            ${sp.contaminacionFecal ? `
                <div class="alert-box alert-warning">
                    <strong>⚠️ Contaminación Fecal - Riesgos para Humanos</strong>
                    
                    ${sp.contaminacionFecal.peligros ? `
                        <p><strong>Peligros:</strong></p>
                        <ul>
                            ${sp.contaminacionFecal.peligros.map(p => `<li>${p}</li>`).join('')}
                        </ul>
                    ` : ''}
                    
                    ${sp.contaminacionFecal.responsabilidades ? `
                        <p><strong>Tus Responsabilidades:</strong></p>
                        <ul>
                            ${sp.contaminacionFecal.responsabilidades.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    ` : ''}
                    
                    ${sp.contaminacionFecal.legislacion ? `
                        <p><strong>Legislación:</strong> ${sp.contaminacionFecal.legislacion}</p>
                    ` : ''}
                </div>
            ` : ''}
            
            ${sp.desparasitacion ? `
                <h3>💊 Desparasitación</h3>
                <p><strong>Frecuencia adulto:</strong> ${sp.desparasitacion.adulto || 'Cada 3 meses'}</p>
                <p><strong>Importancia:</strong> ${sp.desparasitacion.importancia}</p>
            ` : ''}
        </div>
    `;
}

function renderCostoMantenimientoSection(breed) {
    if (!breed.costoMantenimiento) return '';
    
    const costo = breed.costoMantenimiento;
    return `
        <div class="detail-section">
            <h2>💰 Costo de Mantenimiento</h2>
            <p><strong>Nivel general:</strong> ${costo.nivel}</p>
            <ul>
                ${costo.veterinario ? `<li><strong>Veterinario:</strong> ${costo.veterinario}</li>` : ''}
                ${costo.alimentacion ? `<li><strong>Alimentación:</strong> ${costo.alimentacion}</li>` : ''}
                ${costo.aseo ? `<li><strong>Aseo:</strong> ${costo.aseo}</li>` : ''}
                ${costo.medicamentos ? `<li><strong>Medicamentos:</strong> ${costo.medicamentos}</li>` : ''}
                ${costo.extras ? `<li><strong>Extras:</strong> ${costo.extras}</li>` : ''}
            </ul>
            ${costo.prevencion ? `<p class="alert-info">${costo.prevencion}</p>` : ''}
        </div>
    `;
}

function renderBotaniCanFooter() {
    return `
        <div class="botanican-section">
            <h3>🧴 ¿Por qué BotaniCan?</h3>
            <p>Recomendamos productos <strong>BotaniCan Shampoo</strong> por:</p>
            <ul>
                <li>✅ Fórmula natural con ingredientes botánicos</li>
                <li>✅ pH 7.0 balanceado específicamente para piel canina</li>
                <li>✅ Sin químicos agresivos ni fragancias artificiales</li>
                <li>✅ Respeta los aceites naturales protectores</li>
                <li>✅ Apto para baños frecuentes sin resecar</li>
                <li>✅ Línea completa para diferentes necesidades</li>
            </ul>
            <p><strong>⚠️ Recuerda:</strong> NUNCA uses shampoo humano, jabón de trastes, o detergentes en tu perro. Estos productos causan daño severo a su piel y pueden generar costos veterinarios de miles de pesos.</p>
            <a href="https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009" target="_blank" class="btn-primary">Visitar BotaniCan</a>
        </div>
    `;
}

function updateDetailFavoriteButton(breedId) {
    const btn = document.getElementById('favoriteToggle');
    if (btn) {
        const isFav = isFavorite(breedId);
        btn.classList.toggle('favorited', isFav);
        btn.dataset.breedId = breedId;
    }
}

// ========================================
// FAVORITOS VIEW
// ========================================

function renderFavorites() {
    const favGrid = document.getElementById('favoritesGrid');
    const noFavMessage = document.getElementById('noFavorites');
    
    if (favorites.length === 0) {
        favGrid.innerHTML = '';
        noFavMessage.style.display = 'block';
        return;
    }
    
    noFavMessage.style.display = 'none';
    
    const favBreeds = BREEDS_DATABASE.filter(b => favorites.includes(b.id));
    favGrid.innerHTML = favBreeds.map(breed => createBreedCard(breed)).join('');
    attachBreedCardListeners();
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            renderBreeds();
        });
    }
    
    // Filtros
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderBreeds();
        });
    });
    
    // Botón Favoritos (Header)
    const favoritesBtn = document.getElementById('favoritesBtn');
    if (favoritesBtn) {
        favoritesBtn.addEventListener('click', () => {
            document.getElementById('mainView').classList.add('hidden');
            document.getElementById('favoritesSection').classList.remove('hidden');
            renderFavorites();
        });
    }
    
    // Cerrar Favoritos
    const closeFavorites = document.getElementById('closeFavorites');
    if (closeFavorites) {
        closeFavorites.addEventListener('click', () => {
            document.getElementById('favoritesSection').classList.add('hidden');
            document.getElementById('mainView').classList.remove('hidden');
            renderBreeds();
        });
    }
    
    // Botón Back en detail
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            document.getElementById('breedDetailView').classList.add('hidden');
            document.getElementById('mainView').classList.remove('hidden');
        });
    }
    
    // Favorito toggle en detail
    const favoriteToggle = document.getElementById('favoriteToggle');
    if (favoriteToggle) {
        favoriteToggle.addEventListener('click', () => {
            const breedId = favoriteToggle.dataset.breedId;
            if (breedId) {
                toggleFavorite(breedId);
                updateDetailFavoriteButton(breedId);
            }
        });
    }
    
    // Modal About
    const aboutLink = document.getElementById('aboutLink');
    const aboutModal = document.getElementById('aboutModal');
    if (aboutLink && aboutModal) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            aboutModal.classList.remove('hidden');
        });
        
        const closeModal = aboutModal.querySelector('.btn-close-modal');
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                aboutModal.classList.add('hidden');
            });
        }
        
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) {
                aboutModal.classList.add('hidden');
            }
        });
    }
}

// ========================================
// PWA
// ========================================

function initializePWA() {
    // Install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        const installBanner = document.getElementById('installBanner');
        const installBtn = document.getElementById('installBtn');
        const closeBanner = document.getElementById('closeBanner');
        
        // Mostrar banner si no se instaló antes
        const installed = localStorage.getItem('petcare_installed');
        if (!installed && installBanner) {
            installBanner.classList.remove('hidden');
        }
        
        if (installBtn) {
            installBtn.addEventListener('click', async () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    const { outcome } = await deferredPrompt.userChoice;
                    
                    if (outcome === 'accepted') {
                        localStorage.setItem('petcare_installed', 'true');
                    }
                    
                    deferredPrompt = null;
                    installBanner.classList.add('hidden');
                }
            });
        }
        
        if (closeBanner) {
            closeBanner.addEventListener('click', () => {
                installBanner.classList.add('hidden');
            });
        }
    });
    
    // Detectar instalación
    window.addEventListener('appinstalled', () => {
        localStorage.setItem('petcare_installed', 'true');
        console.log('✅ PetCare Pro instalado');
    });
}

// ========================================
// UTILIDADES
// ========================================

console.log('🐕 PetCare Pro cargado correctamente');

// ============================================
// FUNCIÓN COMPARTIR
// ============================================

async function compartirRaza(breed) {
    const texto = `🐕 *${breed.nombre}* - GuíaCanina

${breed.esPatrimonioMexicano ? '🇲🇽 Raza Mexicana Patrimonio Cultural\n\n' : ''}📊 Datos:
• Tamaño: ${breed.tamaño}
• Esperanza: ${breed.esperanzaVida}
• Energía: ${breed.temperamento.nivelEnergia}

${breed.cuidadosBañoEstetica?.botanican ? `🧴 Shampoo recomendado:
${breed.cuidadosBañoEstetica.botanican.recomendado}

🛒 Ver producto:
${breed.cuidadosBañoEstetica.botanican.link}

` : ''}📲 Conoce más razas en:
https://guiacanina.vercel.app`;

    try {
        if (navigator.share) {
            await navigator.share({
                title: `GuíaCanina - ${breed.nombre}`,
                text: texto
            });
        } else {
            await navigator.clipboard.writeText(texto);
            alert('📋 Copiado al portapapeles');
        }
    } catch (err) {
        console.log('Error compartiendo:', err);
    }
}

async function compartirProducto(breedName, producto, link) {
    const texto = `🧴 *Shampoo BotaniCan recomendado*

Para: ${breedName}
Producto: ${producto}

🛒 Comprar directo:
${link}

📱 Más info en GuíaCanina:
https://guiacanina.vercel.app`;

    try {
        if (navigator.share) {
            await navigator.share({
                title: `BotaniCan - ${producto}`,
                text: texto
            });
        } else {
            await navigator.clipboard.writeText(texto);
            alert('📋 Link copiado al portapapeles');
        }
    } catch (err) {
        console.log('Error compartiendo:', err);
    }
}


// ============================================
// NAVEGACIÓN
// ============================================

function showHome() {
    // Recargar página completa
    location.reload();
}

function showGuiaShampoos() {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.nav-btn')[1].classList.add('active');
    document.getElementById('mainView').innerHTML = renderGuiaShampoos();
}

function showEsteticas() {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.nav-btn')[2].classList.add('active');
    document.getElementById('mainView').innerHTML = renderEsteticas();
}

// About modal
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('aboutLink');
    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('aboutModal').classList.remove('hidden');
        });
    }
});

function closeAbout() {
    document.getElementById('aboutModal').classList.add('hidden');
}

// ============================================
// COMPARTIR APP
// ============================================

async function compartirApp() {
    const texto = '🐕 *GuíaCanina* - Tu referencia completa para el cuidado de tu perro\n\n✅ 21 razas con información detallada\n✅ Recomendaciones BotaniCan Shampoo\n✅ Guía de productos por raza\n✅ Directorio de estéticas caninas\n\n📱 Descarga GRATIS:\nhttps://guiacanina.vercel.app';

    try {
        if (navigator.share) {
            await navigator.share({
                title: 'GuíaCanina - Tu referencia completa para el cuidado de tu perro',
                text: texto
            });
        } else {
            await navigator.clipboard.writeText(texto);
            alert('📋 Link copiado al portapapeles');
        }
    } catch (err) {
        console.log('Error:', err);
    }
}
