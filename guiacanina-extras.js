// ============================================
// ESTETICAS CANINAS Y GUÍA DE SHAMPOOS
// ============================================

const ESTETICAS_CANINAS = [
    {
        nombre: "Spa Canino Coyoacán",
        ciudad: "Ciudad de México",
        colonia: "Coyoacán",
        servicios: ["Baño", "Corte", "Uñas", "Productos BotaniCan"],
        whatsapp: "5535104900",
        ubicacion: "https://maps.google.com/?q=19.350,-99.162",
        usaBotaniCan: true,
        verificado: true
    },
    {
        nombre: "Pet Grooming Santa Fe",
        ciudad: "Ciudad de México",
        colonia: "Santa Fe",
        servicios: ["Spa completo", "BotaniCan", "Corte raza"],
        whatsapp: "5535104900",
        ubicacion: "https://maps.google.com/?q=19.360,-99.260",
        usaBotaniCan: true,
        verificado: true
    },
    {
        nombre: "Estética Canina Roma",
        ciudad: "Ciudad de México",
        colonia: "Roma Norte",
        servicios: ["Baño", "Corte", "Spa", "BotaniCan"],
        whatsapp: "5535104900",
        ubicacion: "https://maps.google.com/?q=19.415,-99.160",
        usaBotaniCan: true,
        verificado: false
    }
];

const GUIA_SHAMPOOS = [
    {
        nombre: "Kit para Casos Leves a Severos",
        precio: "$559",
        para: "Dermatitis atópica (DAC), problemas severos de piel",
        razas: ["French Bulldog", "Pug", "Bulldog Inglés", "Shar Pei", "West Highland"],
        link: "https://botanican.ecwid.com/Kit-para-Casos-Leves-a-Severos-1-Litro-c-u-p351400867",
        icono: "📦",
        color: "#ef4444"
    },
    {
        nombre: "Shampoo Relajante Lavanda",
        precio: "$175",
        para: "Perros seniors, nerviosos, hiperactivos, dolor articular",
        razas: ["Chihuahua senior", "Schnauzer ansioso", "Labrador hiperactivo"],
        link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-Relajante-Lavanda-1-Litro-p94401423",
        icono: "💜",
        color: "#a855f7"
    },
    {
        nombre: "Shampoo Suave e Hidratante 7en1",
        precio: "$210",
        para: "Piel seca, sensible, sin pelo, necesita hidratación",
        razas: ["Xoloitzcuintle", "Shih Tzu", "Yorkie", "Maltés", "Chihuahua"],
        link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
        icono: "💧",
        color: "#3b82f6"
    },
    {
        nombre: "Shampoo Verde 7en1",
        precio: "$200",
        para: "Uso normal, repelente pulgas/hongos, perros activos",
        razas: ["Pastor Alemán", "Golden Retriever", "Labrador", "Beagle", "Calupoh"],
        link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
        icono: "🌿",
        color: "#10b981"
    },
    {
        nombre: "Shampoo Cero Nudos 2en1",
        precio: "$150",
        para: "Pelo largo propenso a enredos y nudos",
        razas: ["Golden Retriever", "Maltés (pelo largo)"],
        link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
        icono: "✨",
        color: "#fbbf24"
    },
    {
        nombre: "Shampoo Pelo Blanco",
        precio: "$150",
        para: "Razas blancas o con manchas blancas",
        razas: ["Maltés", "West Highland", "Bull Terrier"],
        link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-Especial-para-Pelo-Blanco-1-Litro-p94401479",
        icono: "⚪",
        color: "#f1f5f9"
    },
    {
        nombre: "Shampoo Nogal Pelo Negro",
        precio: "$150",
        para: "Pelo oscuro con realce de color natural",
        razas: ["Schnauzer Negro", "Labrador Negro", "Rottweiler"],
        link: "https://botanican.ecwid.com/Shampoo-Nogal-Bot%C3%A1nico-especial-para-Pelo-Negro-1-Litro-p94305970",
        icono: "⚫",
        color: "#0f172a"
    }
];

// Render Estéticas
function renderEsteticas() {
    return `
        <div class="esteticas-view">
            <div class="esteticas-header">
                <h2>💇 Estéticas Caninas Recomendadas</h2>
                <p>Estéticas que usan Productos BotaniCan</p>
            </div>
            
            <div class="esteticas-grid">
                ${ESTETICAS_CANINAS.map(est => `
                    <div class="estetica-card">
                        <div class="estetica-header">
                            <h3>🏪 ${est.nombre}</h3>
                            ${est.verificado ? '<span class="badge-verificado">✅ Verificado</span>' : ''}
                        </div>
                        
                        <div class="estetica-info">
                            <p><strong>📍 Ubicación:</strong> ${est.colonia}, ${est.ciudad}</p>
                            <p><strong>🧴 Servicios:</strong> ${est.servicios.join(', ')}</p>
                            ${est.usaBotaniCan ? '<p class="usa-botanican">✅ Usa Productos BotaniCan</p>' : ''}
                        </div>
                        
                        <div class="estetica-actions">
                            <a href="https://wa.me/52${est.whatsapp}" target="_blank" class="btn-whatsapp">
                                📞 WhatsApp
                            </a>
                            <a href="${est.ubicacion}" target="_blank" class="btn-mapa">
                                📍 Mapa
                            </a>
                            <button onclick="compartirEstetica('${est.nombre}')" class="btn-compartir">
                                📤 Compartir
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="add-estetica-banner">
                <h3>¿Tienes una estética canina?</h3>
                <p>Usa productos BotaniCan y aparece aquí</p>
                <a href="https://wa.me/525535104900?text=Quiero%20aparecer%20en%20Gu%C3%ADaCanina" target="_blank" class="btn-primary">
                    Contactar para listar tu estética
                </a>
            </div>
        </div>
    `;
}

// Render Guía Shampoos
function renderGuiaShampoos() {
    return `
        <div class="guia-shampoos-view">
            <div class="guia-header">
                <h2>🧴 Guía de Shampoos BotaniCan</h2>
                <p>Encuentra el shampoo perfecto para tu perro</p>
            </div>
            
            <div class="shampoos-grid">
                ${GUIA_SHAMPOOS.map(shampoo => `
                    <div class="shampoo-card" style="border-left: 4px solid ${shampoo.color}">
                        <div class="shampoo-header">
                            <span class="shampoo-icono">${shampoo.icono}</span>
                            <h3>${shampoo.nombre}</h3>
                            <span class="shampoo-precio">${shampoo.precio}</span>
                        </div>
                        
                        <div class="shampoo-info">
                            <p><strong>Para:</strong> ${shampoo.para}</p>
                            <p><strong>Razas:</strong> ${shampoo.razas.join(', ')}</p>
                        </div>
                        
                        <div class="shampoo-actions">
                            <a href="${shampoo.link}" target="_blank" class="btn-primary">
                                🛒 Ver Producto
                            </a>
                            <button onclick="compartirShampoo('${shampoo.nombre}')" class="btn-compartir-sm">
                                📤
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="profesionales-banner">
                <h3>💼 ¿Tienes una estética canina o spa?</h3>
                <p>Descubre presentaciones profesionales de GALÓN y 10 LITROS</p>
                <a href="https://botanican.ecwid.com/SHAMPOOS-PARA-SPA-&-ESTETICA-c153060502" target="_blank" class="btn-secondary">
                    Ver Catálogo Profesional →
                </a>
            </div>
        </div>
    `;
}

// Funciones compartir
async function compartirEstetica(nombre) {
    const est = ESTETICAS_CANINAS.find(e => e.nombre === nombre);
    if (!est) return;
    
    const texto = `💇 *Estética Canina Recomendada*

🏪 ${est.nombre}
📍 ${est.colonia}, ${est.ciudad}

${est.verificado ? '✅ Verificado por GuíaCanina\n' : ''}✅ Usa productos BotaniCan

📞 WhatsApp: ${est.whatsapp}
📍 ${est.ubicacion}

🐕 Descubre más en:
https://guiacanina.vercel.app`;

    try {
        if (navigator.share) {
            await navigator.share({ title: est.nombre, text: texto });
        } else {
            await navigator.clipboard.writeText(texto);
            alert('📋 Copiado al portapapeles');
        }
    } catch (err) {
        console.log('Error:', err);
    }
}

async function compartirShampoo(nombre) {
    const shampoo = GUIA_SHAMPOOS.find(s => s.nombre === nombre);
    if (!shampoo) return;
    
    const texto = `🧴 *${shampoo.nombre}* - BotaniCan

${shampoo.precio}

Para: ${shampoo.para}

Razas ideales: ${shampoo.razas.join(', ')}

🛒 Ver producto:
${shampoo.link}

📱 Más info en GuíaCanina:
https://guiacanina.vercel.app`;

    try {
        if (navigator.share) {
            await navigator.share({ title: shampoo.nombre, text: texto });
        } else {
            await navigator.clipboard.writeText(texto);
            alert('📋 Copiado al portapapeles');
        }
    } catch (err) {
        console.log('Error:', err);
    }
}
