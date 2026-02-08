/**
 * GUÍACANINA - BASE DE DATOS DE RAZAS
 * Información completa sobre 23 razas de perros
 * Incluye: Origen, temperamento, salud, alimentación, cuidados, BotaniCan, salud pública
 * 
 * RAZAS INCLUIDAS:
 * - Mexicanas: Chihuahua, Xoloitzcuintle, Calupoh
 * - Pequeñas: Pug, Teckel, Yorkshire Terrier, Pomerania, Shih Tzu, Maltés, Schnauzer Miniatura
 * - Medianas: Beagle, Bulldog Francés, Bulldog Inglés, Boxer, Dálmata
 * - Grandes: Husky Siberiano, Golden Retriever, Labrador Retriever, Pastor Alemán, Rottweiler, Border Collie, Poodle
 * - Mestizos: Criolla
 */

const breedsData = [

// ============================================
// RAZAS MEXICANAS (Patrimonio Cultural)
// ============================================

{
    id: "chihuahua",
    nombre: "Chihuahua",
    nombresAlternativos: ["Chihuahueño", "Chi"],
    categoria: "mexicanas",
    imagen: "🐕",
    tamaño: "Pequeñas",
    esPatrimonioMexicano: true,
    
    origen: {
        pais: "México 🇲🇽",
        estado: "Chihuahua",
        epoca: "Civilización Tolteca (siglo IX)",
        historia: "Descendiente del Techichi, perro sagrado de los toltecas y aztecas. Se creía que guiaban las almas al inframundo. Descubierto por americanos en Chihuahua en 1850s. Es la raza de perro más pequeña del mundo y un símbolo de México. Los aztecas los consideraban sagrados y los usaban en ceremonias religiosas.",
        curiosidad: "Hay teoría que los Chihuahuas eran usados como 'camas calientes' por las antiguas civilizaciones mexicanas debido a su temperatura corporal alta."
    },
    
    pesoIdeal: {
        adulto: "1.5-3 kg (estándar FCI)",
        miniatura: "500g-1.5kg (no reconocido oficialmente, problemas de salud)",
        alerta: "⚠️ Menos de 1.5kg = 'Teacup' = NO SALUDABLE, muchos problemas"
    },
    
    esperanzaVida: "14-18 años (una de las razas más longevas)",
    
    temperamento: {
        personalidad: "Valiente, leal, territorial, 'perro grande en cuerpo pequeño'",
        nivelEnergia: "Alto",
        sociabilidad: {
            conHumanos: "Extremadamente leal a UNA persona (pueden ser posesivos)",
            conNiños: "⚠️ NO recomendado para niños pequeños (muy frágil, puede morder si se siente amenazado)",
            conPerros: "Prefiere otros Chihuahuas, puede retar a perros grandes",
            conExtraños: "Desconfiado, ladrador"
        },
        adiestramiento: "Difícil (terco, 'síndrome de perro pequeño')",
        ladridos: "Muy alto - Excelente alarma",
        caracteristicas: [
            "Síndrome de Napoleón (se cree grande)",
            "Tiembla cuando tiene frío, miedo o emoción",
            "Muy protector de su dueño",
            "Puede ser agresivo si no se socializa",
            "Prefiere el calor (es mexicano, odia el frío)"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "Socialización CRÍTICA desde 8 semanas",
                "4-5 comidas pequeñas al día (prevenir hipoglucemia)",
                "Proteger mollera si está abierta",
                "Evitar contacto con perros grandes",
                "Vacunación completa obligatoria"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "3 comidas pequeñas al día",
                "Ejercicio moderado (15-20 min)",
                "Control dental estricto",
                "Protección del frío (suéter en invierno)",
                "Chequeo veterinario anual"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Alimento senior (menos calorías)",
                "Chequeos cada 6 meses",
                "Suplementos para articulaciones",
                "Vigilar problemas cardíacos",
                "Mantener caliente (más sensible al frío)",
                "Cuidado dental intensivo",
                "Ambiente sin escaleras"
            ],
            enfermedadesComunes: [
                "Problemas cardíacos (soplos)",
                "Artritis",
                "Problemas dentales severos",
                "Colapso traqueal",
                "Demencia canina"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas toy/pequeñas",
        calorias: "40 cal/kg peso corporal",
        comidas: {
            cachorro: "4-5 veces al día",
            adulto: "3 veces al día",
            senior: "3 veces pequeñas al día"
        },
        alertas: [
            "⚠️ Hipoglucemia (azúcar baja) - Común en cachorros y 'teacup'",
            "Comidas pequeñas y frecuentes son críticas",
            "Siempre tener miel o jarabe Karo a mano (emergencia hipoglucemia)",
            "NO dar comida humana",
            "Evitar: chocolate, uvas, cebolla, ajo, aguacate, xilitol",
            "Croquetas pequeñas para mandíbula pequeña"
        ],
        suplementos: [
            "Glucosamina (articulaciones)",
            "Omega 3 (piel y pelaje)",
            "Probióticos (digestión sensible)"
        ]
    },
    
    problemasCongenitos: [
        "Mollera abierta (fontanela) - cráneo no cierra completamente (⚠️ CRÍTICO)",
        "Hidrocefalia",
        "Luxación de rótula",
        "Problemas cardíacos (soplos, válvula mitral)",
        "Hipoglucemia (especialmente cachorros y 'teacup')",
        "Colapso traqueal",
        "Problemas dentales (boca pequeña, dientes apiñados)",
        "Epilepsia"
    ],
    
    saludComun: [
        "Problemas dentales (PRINCIPAL PROBLEMA)",
        "Luxación de rótula (cojera)",
        "Colapso traqueal (tos)",
        "Soplos cardíacos",
        "Hipoglucemia en cachorros",
        "Alergias de piel",
        "Ojos secos",
        "Sensibilidad al frío extremo"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Corto o Largo (dos variedades)",
        variedades: {
            peloCorto: "Pelo liso, brillante, pegado al cuerpo",
            peloLargo: "Pelo suave, flecos en orejas, cola plumosa"
        },
        
        cepillado: {
            peloCorto: {
                frecuencia: "1-2 veces por semana",
                herramientas: ["Guante de goma", "Cepillo de cerdas suaves"]
            },
            peloLargo: {
                frecuencia: "3-4 veces por semana",
                herramientas: ["Cepillo slicker", "Peine de metal"]
            }
        },
        
        baño: {
            frecuencia: "Cada 3-4 semanas",
            temperatura: "Tibia (el Chihuahua se enfría rápido)",
            secado: "SECAR COMPLETAMENTE con toalla + secadora baja (evitar frío)"
        },
        
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Suave e Hidratante 7en1",
            prioridad: "Principal",
            porque: "El Chihuahua tiene piel muy sensible y delicada por su tamaño pequeño. Este shampoo hipoalergénico es perfecto: no irrita, hidrata profundamente sin resecar, y es suave para su pelaje corto. Ideal para su piel fina que requiere cuidado delicado.",
            beneficios: [
                "Hipoalergénico - ideal para piel sensible",
                "Hidratación sin resecar",
                "pH 7.0 balanceado",
                "No irrita piel delicada",
                "Aromaterapia calmante"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
            uso: "Cada 3-4 semanas"
        }
    ],
    
    alertaParasitos: {
        titulo: "⚠️ ¿Tu Chihuahua tiene pulgas o garrapatas?",
        descripcion: "Por su tamaño pequeño y cercanía al suelo durante paseos, los Chihuahuas son vulnerables a pulgas y garrapatas.",
        recomendacion: {
            producto: "Shampoo Verde Botánico 7en1",
            porque: "Repelente natural que protege hasta 14 días contra pulgas, garrapatas y ácaros. Seguro para razas pequeñas.",
            beneficios: [
                "Repele pulgas/garrapatas 14 días",
                "Antibacterial + Antifúngico",
                "Seguro para perros pequeños",
                "100% Natural - sin tóxicos"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
            protocolo: "Usar Verde para baño completo, o alternar: Verde una semana, Suave la siguiente."
        }
    }
    },
    
    tipsEspecificos: [
        "🧥 USAR SUÉTER EN INVIERNO - Se enfría fácilmente (menos de 15°C)",
        "⚠️ NUNCA dejarlo solo con perros grandes (puede ser atacado)",
        "✅ Socializarlo desde cachorro (evitar agresividad)",
        "✅ Proteger mollera si está abierta (evitar golpes en cabeza)",
        "✅ Comidas pequeñas frecuentes (prevenir hipoglucemia)",
        "✅ Cuidado dental DIARIO (cepillado)",
        "🚫 NO tratarlo como bebé (causa problemas de comportamiento)",
        "✅ Entrenamiento firme y consistente desde cachorro",
        "✅ Arnés en lugar de collar (protege tráquea)",
        "✅ Escaleras o rampa para cama/sofá (evitar saltos)"
    ],
    
    alertasCriticas: [
        "🚨 Convulsiones + debilidad = EMERGENCIA (hipoglucemia - dar miel)",
        "🚨 Tos seca persistente = Colapso traqueal - VET",
        "🚨 Golpe en cabeza con mollera abierta = EMERGENCIA",
        "⚠️ Temblor excesivo sin frío = Revisar (estrés, dolor)",
        "⚠️ 'Teacup' Chihuahuas = Evitar (problemas graves de salud)",
        "⚠️ Cojera repentina = Luxación de rótula"
    ],
    
    saludPublica: {
        contaminacionFecal: {
            peligros: [
                "🦠 Toxocara canis (parásito que causa ceguera en niños)",
                "🦠 Giardia (diarrea en humanos)",
                "🦠 Salmonella, E. coli (intoxicaciones)",
                "🦠 Ancylostoma (penetra piel humana)"
            ],
            responsabilidades: [
                "✅ SIEMPRE recoger heces (en casa y calle)",
                "✅ Usar bolsas biodegradables",
                "✅ Desechar en bote de basura",
                "✅ Desparasitar cada 3 meses",
                "✅ No permitir defecación en áreas infantiles",
                "✅ Lavar manos después de recoger"
            ],
            legislacion: "Multas de $500-$2,000 MXN por no recoger heces. Es salud pública, no solo limpieza."
        },
        desparasitacion: {
            cachorro: "Cada 2 semanas hasta 3 meses, luego mensual hasta 6 meses",
            adulto: "Cada 3 meses DE POR VIDA",
            senior: "Cada 3 meses",
            importancia: "Protege a tu perro Y a tu familia"
        }
    },
    
    costoMantenimiento: {
        nivel: "Medio",
        veterinario: "Frecuente (raza con problemas dentales y cardíacos)",
        alimentacion: "Baja (come muy poco)",
        aseo: "Bajo (fácil en casa)",
        medicamentos: "Variable (dental puede ser costoso)"
    }
},

// ============================================
{
    id: "xoloitzcuintle",
    nombre: "Xoloitzcuintle",
    nombresAlternativos: ["Xolo", "Perro Azteca", "Perro Pelón Mexicano", "Mexican Hairless Dog"],
    categoria: "mexicanas",
    imagen: "🐕",
    tamaño: "Pequeñas/Medianas/Grandes (3 tamaños)",
    esPatrimonioMexicano: true,
    
    origen: {
        pais: "México 🇲🇽",
        epoca: "Más de 3,000 años (civilizaciones olmeca, maya, azteca)",
        historia: "Una de las razas más antiguas del mundo y patrimonio cultural de México desde 2016. Su nombre viene del náhuatl: 'Xolotl' (dios azteca de la muerte) + 'itzcuintli' (perro). Los aztecas creían que guiaban las almas al Mictlán (inframundo). Considerado sagrado, aparece en arte prehispánico. Estuvo al borde de la extinción pero se recuperó en el siglo XX. Es el símbolo viviente de la herencia cultural mexicana.",
        mitologia: "Se creía que tenían poderes curativos, su temperatura corporal alta (40°C) se usaba para aliviar dolores. En ceremonias aztecas, eran sacrificados para acompañar a los muertos.",
        reconocimiento: "🏆 Patrimonio Cultural de la Ciudad de México (2016). Mascota oficial de los Diablos Rojos del México y Club Universidad Nacional."
    },
    
    pesoIdeal: {
        mini: "25-35 cm, 2-7 kg",
        intermedio: "36-45 cm, 7-14 kg",
        estandar: "46-60 cm, 14-25 kg"
    },
    
    variedades: {
        sinPelo: "90% - Piel suave, puede tener poco pelo en cabeza, pies y cola",
        conPelo: "10% - Pelaje corto completo (gen recesivo)"
    },
    
    esperanzaVida: "12-15 años",
    
    temperamento: {
        personalidad: "Tranquilo, alerta, inteligente, primitivo",
        nivelEnergia: "Medio",
        sociabilidad: {
            conHumanos: "Leal a la familia, reservado con extraños",
            conNiños: "Buena si se socializa temprano",
            conPerros: "Buena, puede ser dominante",
            conExtraños: "Distante, observador, buen guardián"
        },
        adiestramiento: "Alto - Muy inteligente",
        ladridos: "Moderado (solo cuando es necesario)",
        caracteristicas: [
            "Raza primitiva (instintos fuertes)",
            "Excelente perro guardián",
            "Hipoalergénico (variedad sin pelo)",
            "Temperatura corporal más alta que otras razas (40°C)",
            "Muy atlético y ágil",
            "Necesita liderazgo firme",
            "Sensible emocionalmente"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "Socialización temprana (puede ser tímido)",
                "Proteger piel del sol (variedad sin pelo)",
                "3-4 comidas al día",
                "Hidratación de piel desde cachorro",
                "Vacunación completa"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "2 comidas balanceadas",
                "Ejercicio diario (30-45 min)",
                "Hidratación de piel 2-3 veces/semana (sin pelo)",
                "Protección solar en verano",
                "Suéter en invierno",
                "Chequeo anual"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Alimento senior",
                "Chequeos cada 6 meses",
                "Mayor cuidado de piel (más delicada)",
                "Suplementos para articulaciones",
                "Ejercicio moderado",
                "Protección térmica aumentada"
            ],
            enfermedadesComunes: [
                "Artritis",
                "Problemas dentales (variedad sin pelo)",
                "Piel seca",
                "Cataracts"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium de alta proteína (raza activa)",
        calorias: "Metabolismo rápido, necesita proteína de calidad",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día"
        },
        alertas: [
            "Evitar alergias alimentarias (puede afectar piel)",
            "Proteína animal de calidad como primer ingrediente",
            "Sin colorantes ni conservadores artificiales",
            "Agua fresca siempre disponible"
        ]
    },
    
    problemasCongenitos: [
        "Dentición incompleta (variedad sin pelo) - Genéticamente ligado a falta de pelo",
        "Puede faltar premolares y molares",
        "Sensibilidad a temperatura extrema (sin pelo)"
    ],
    
    saludComun: [
        "Acné juvenil (variedad sin pelo)",
        "Quemaduras solares (sin pelo sin protección)",
        "Hipotermia en invierno sin protección",
        "Problemas dentales (por dentición incompleta)",
        "Generalmente raza MUY saludable (una de las más sanas)",
        "Piel seca o grasosa (requiere balance)"
    ],
    
    cuidadosBañoEstetica: {
        variedadSinPelo: {
            tipoPiel: "Piel expuesta y delicada",
            cuidadoCritico: true,
            
            baño: {
                frecuencia: "Cada 7-14 días (más frecuente que otras razas)",
                porque: "Acumulación de sebo en piel sin pelo",
                proceso: [
                    "Agua tibia",
                    "Shampoo hipoalergénico suave",
                    "Masaje suave (exfoliación natural)",
                    "Enjuague completo",
                    "Secar completamente",
                    "Aplicar aceite natural (coco o almendras) después"
                ]
            },
            
            cuidadosPiel: [
                "⚠️ PIEL EXPUESTA = Cuidados especiales",
                "Hidratación 2-3 veces por semana",
                "Protector solar SPF 30+ en verano (piel clara)",
                "Suéter en invierno (menos de 15°C)",
                "Exfoliación mensual suave",
                "Limpiar acumulación de sebo regularmente",
                "Revisar acné (especialmente adolescentes)",
                "NO exponer al sol directo en horas pico"
            ],
            
            problemasComunes: [
                "Acné canino (especialmente cachorros/adolescentes)",
                "Piel seca (requiere hidratación constante)",
                "Piel grasosa (si no se baña regularmente)",
                "Quemaduras solares",
                "Irritación por frío"
            ],
            
            botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Suave e Hidratante 7en1",
            prioridad: "ESENCIAL - Obligatorio",
            porque: "El Xoloitzcuintle SIN pelo tiene piel desnuda expuesta 24/7 al ambiente. Requiere hidratación CONSTANTE y profunda. Sin este shampoo especializado, su piel se reseca, agrieta, descama y desarrolla dermatitis severa. Es INDISPENSABLE para mantener su piel saludable, elástica y protegida del sol y la resequedad.",
            beneficios: [
                "Hidratación profunda y constante",
                "Previene resequedad extrema",
                "Protege piel desnuda",
                "Reduce descamación",
                "Aromaterapia calmante",
                "Ideal para piel sin pelo"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
            uso: "Cada 2-3 semanas + aplicar aceite hidratante entre baños"
        }
    ],
    
    alertaParasitos: {
        titulo: "⚠️ Xolos sin pelo = MUY vulnerables a picaduras",
        descripcion: "Sin pelo que los proteja, los Xolos están extremadamente expuestos a picaduras de mosquitos, pulgas y otros insectos.",
        recomendacion: {
            producto: "Shampoo Verde Botánico 7en1",
            porque: "Repelente natural que crea barrera protectora en piel desnuda. Protege contra insectos por 14 días.",
            link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
            protocolo: "Alternar: Verde una semana (repelente), Suave la siguiente (hidratación)."
        }
    },
    
    alertaProblemasPiel: {
        titulo: "🚨 XOLO = ALTA PROPENSIÓN A PROBLEMAS DE PIEL",
        estadistica: "Piel desnuda sin protección - múltiples problemas comunes",
        
        sintomasComunes: [
            "Resequedad extrema y descamación",
            "Acné canino (puntos negros)",
            "Quemaduras solares",
            "Piel agrietada",
            "Hiperpigmentación (manchas oscuras)",
            "Dermatitis de contacto"
        ],
        
        problemasComunes: {
            solar: "Quemaduras solares - Expuesto sin protección",
            acne: "Acné canino - Común en Xolos jóvenes",
            resequedad: "Resequedad extrema - Piel desnuda pierde humedad",
            contacto: "Dermatitis de contacto - Sensible a todo lo que toca"
        },
        
        solucion: {
            producto: "Kit Botánico (Verde + Suave)",
            porque: "Tratamiento completo para piel desnuda: Verde limpia/desinfecta sin resecar. Suave hidrata profundamente. Esencial para Xolos con problemas de piel.",
            link: "https://botanican.ecwid.com/Kit-para-Casos-Leves-a-Severos-1-Litro-c-u-p351400867",
            protocolo: "1º Verde (limpiar zonas afectadas) + 2º Suave (hidratar toda la piel). Semanal.",
            adicional: "⚠️ CRÍTICO: Protector solar diario + ropa UV en verano + hidratación entre baños"
        }
    }
    },
    
    tipsEspecificos: [
        "🧥 Suéter OBLIGATORIO en invierno (variedad sin pelo)",
        "☀️ Protector solar SPF 30+ en verano (piel expuesta)",
        "✅ Hidratación de piel 2-3 veces por semana",
        "✅ Socialización temprana (tendencia a ser reservado)",
        "✅ Ejercicio diario moderado-intenso (raza atlética)",
        "✅ Revisar dientes regularmente (dentición especial)",
        "✅ Baños más frecuentes que otras razas (control sebo)",
        "🇲🇽 Orgullo mexicano - Educar sobre su historia",
        "✅ Ambiente controlado (sin extremos de temperatura)",
        "✅ Liderazgo firme pero amable (raza inteligente)"
    ],
    
    alertasCriticas: [
        "🚨 Quemaduras solares = DOLOR severo, riesgo cáncer de piel",
        "🚨 Hipotermia en invierno = Peligro de muerte",
        "⚠️ Acné severo = Puede infectarse, VET",
        "⚠️ Piel muy seca o muy grasosa = Ajustar cuidados",
        "✅ Temperatura corporal más alta es NORMAL (no fiebre)"
    ],
    
    valorCultural: {
        importancia: "Símbolo viviente de las culturas prehispánicas de México",
        conservacion: "Raza rescatada de la extinción en el siglo XX",
        responsabilidad: "Quien tiene un Xolo tiene un pedazo de la historia de México",
        orgullo: "Mascota oficial de equipos mexicanos y patrimonio cultural"
    },
    
    saludPublica: {
        contaminacionFecal: {
            peligros: [
                "🦠 Mismos parásitos que otras razas (Toxocara, Giardia, etc.)",
                "🦠 Importante recoger heces siempre"
            ],
            responsabilidades: [
                "✅ Recoger heces obligatorio",
                "✅ Desparasitar cada 3 meses",
                "✅ Higiene post-limpieza"
            ]
        },
        desparasitacion: {
            frecuencia: "Cada 3 meses toda la vida",
            importancia: "Protección familiar y comunitaria"
        }
    },
    
    costoMantenimiento: {
        nivel: "Medio",
        veterinario: "Bajo (raza muy saludable)",
        alimentacion: "Media (come según tamaño)",
        aseo: "Medio (cuidados especiales de piel sin pelo)",
        extras: "Protector solar, aceites hidratantes, ropa térmica"
    }
},

// ============================================
// RAZAS PEQUEÑAS
// ============================================

{
    id: "pug",
    nombre: "Pug",
    nombresAlternativos: ["Carlino", "Doguillo", "Mops"],
    categoria: "pequeñas",
    imagen: "🐕",
    tamaño: "Pequeñas",
    
    origen: {
        pais: "China",
        epoca: "400 a.C.",
        historia: "Criado como perro de compañía para la realeza china. Su nombre 'Pug' viene del latín 'pugnus' (puño) por la forma de su cara. En Europa se llamó 'Carlino' en honor al actor italiano Carlino que usaba máscara similar. Llegó a Europa en el siglo XVI con comerciantes holandeses y se volvió favorito de la aristocracia."
    },
    
    pesoIdeal: {
        adultoMacho: "6.3-8 kg",
        adultoHembra: "6-7.5 kg",
        alerta: "Muy propenso a obesidad - Control estricto"
    },
    
    esperanzaVida: "12-15 años",
    
    temperamento: {
        personalidad: "Payaso encantador, sociable, obstinado",
        nivelEnergia: "Bajo-Medio",
        sociabilidad: {
            conHumanos: "Excelente - Adora la compañía humana",
            conNiños: "Muy buena - Paciente y juguetón",
            conPerros: "Buena - Generalmente amigable",
            conExtraños: "Amigable - No es buen perro guardián"
        },
        adiestramiento: "Medio - Inteligente pero terco",
        ladridos: "Moderado",
        caracteristicas: [
            "Extremadamente apegado a sus dueños",
            "Ronca y resopla mucho (braquicéfalo)",
            "Le encanta dormir (12-14 horas al día)",
            "Puede ser terco pero ansioso por complacer",
            "Sensible al tono de voz",
            "Ojos expresivos irresistibles"
        ]
    },
    
    problemasCongenitos: [
        "Síndrome braquicéfalo (cara chata) - Dificultad respiratoria SEVERA",
        "Estenosis de narinas (fosas nasales estrechas)",
        "Paladar elongado",
        "Luxación de rótula",
        "Displasia de cadera",
        "Encefalitis del Pug (PDE) - Enfermedad genética fatal",
        "Entropión (párpados hacia dentro)",
        "Úlceras corneales (ojos saltones)"
    ],
    
    saludComun: [
        "Problemas respiratorios (ronquidos, jadeo excesivo) - PRINCIPAL PROBLEMA",
        "Obesidad - SEGUNDO PROBLEMA MÁS COMÚN",
        "Infecciones en pliegues faciales (levaduras, hongos)",
        "Problemas oculares (úlceras, ojos secos)",
        "Alergias de piel",
        "Infecciones de oído",
        "Golpe de calor (MUY sensible al calor)",
        "Problemas dentales"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Corto, doble capa, muda MUCHO",
        
        cuidadoCritico: {
            pliegues: {
                frecuencia: "DIARIO - Absolutamente necesario",
                procedimiento: [
                    "Limpiar pliegues de cara, cuello y cola con toallita húmeda o gasa",
                    "Secar completamente (humedad = hongos/levaduras)",
                    "Revisar enrojecimiento, mal olor, secreción",
                    "Aplicar polvo especializado si hay humedad excesiva"
                ],
                consecuencias: "⚠️ Si no se limpian: dermatitis, infecciones fúngicas, levaduras, mal olor, dolor, infecciones severas que requieren antibióticos"
            }
        },
        
        cepillado: {
            frecuencia: "Diario (para controlar muda)",
            herramientas: ["Guante de goma", "Cepillo de cerdas suaves"],
            beneficio: "Reduce pelo en casa, distribuye aceites naturales"
        },
        
        baño: {
            frecuencia: "Cada 3-4 semanas",
            proceso: [
                "Limpiar pliegues ANTES del baño",
                "Agua tibia (NUNCA caliente - sobrecalentamiento)",
                "Shampoo hipoalergénico",
                "Atención especial a pliegues durante baño",
                "Enjuague completo",
                "Secar COMPLETAMENTE cada pliegue"
            ]
        },
        
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Suave e Hidratante 7en1",
            prioridad: "Principal",
            porque: "El Pug tiene piel MUY sensible y pliegues faciales profundos que acumulan humedad, bacterias y levaduras. Este shampoo hipoalergénico limpia suavemente los pliegues sin irritar, hidrata profundamente y previene infecciones. Reduce significativamente el mal olor característico de los pliegues.",
            beneficios: [
                "Hipoalergénico para piel sensible",
                "Limpia pliegues sin irritar",
                "Previene infecciones fúngicas",
                "Reduce mal olor",
                "Hidratación profunda",
                "No irrita ojos saltones"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
            uso: "Cada 3-4 semanas + limpieza diaria de pliegues con toallita húmeda"
        }
    ],
    
    alertaProblemasPiel: {
        titulo: "🚨 PUG = ALTAMENTE PROPENSO A PROBLEMAS EN PLIEGUES Y PIEL",
        estadistica: "Los pliegues faciales son caldo de cultivo para hongos y bacterias",
        
        sintomasComunes: [
            "Mal olor en pliegues faciales",
            "Enrojecimiento en pliegues",
            "Rascado de cara",
            "Secreción en pliegues",
            "Costras o piel oscura en pliegues",
            "Lamido excesivo de patas"
        ],
        
        problemasComunes: {
            pliegues: "Dermatitis en pliegues - Humedad acumulada causa infecciones",
            levaduras: "Infecciones por levaduras (Malassezia) - Olor a 'Fritos'",
            alergias: "Alergias alimentarias - Común en la raza",
            atopica: "Dermatitis atópica - Piel muy sensible"
        },
        
        solucion: {
            producto: "Kit Botánico (Verde + Suave)",
            porque: "Tratamiento completo para Pugs con problemas de piel. Verde desinfecta pliegues y elimina hongos/bacterias. Suave hidrata y calma irritación. Protocolo probado en miles de Pugs.",
            link: "https://botanican.ecwid.com/Kit-para-Casos-Leves-a-Severos-1-Litro-c-u-p351400867",
            protocolo: "1º Verde (limpiar pliegues a fondo, tallar suavemente) + 2º Suave (hidratar y calmar). Secar MUY bien pliegues. Cada 3 días si hay infección activa.",
            critico: "⚠️ LIMPIEZA DIARIA DE PLIEGUES es OBLIGATORIA - Toallita húmeda + secar completamente. El baño solo NO es suficiente."
        }
    }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas pequeñas, control de peso",
        alertaCritica: "⚠️ CRÍTICO: Muy propenso a obesidad - Medir porciones estrictamente",
        comidas: {
            adulto: "2 veces al día - Porciones medidas",
            senior: "2 veces al día - Porciones reducidas"
        },
        prohibido: [
            "NO dar comida humana (especialmente grasosa)",
            "Evitar: chocolate, uvas, cebolla, ajo, aguacate",
            "Snacks no más del 10% de calorías diarias",
            "Sus ojos grandes + cara chata = le dan todo lo que pida - RESISTIR"
        ],
        suplementos: [
            "Omega 3 para piel y pelaje",
            "Glucosamina para articulaciones",
            "Probióticos (estómago sensible)"
        ]
    },
    
    tipsEspecificos: [
        "🌡️ NUNCA sacar en horas de calor (8am-6pm) - Puede morir por golpe de calor",
        "🚫 NO ejercicio intenso - Problemas respiratorios severos",
        "✅ Paseos temprano en mañana o tarde-noche (frescos)",
        "✅ Siempre agua fresca disponible",
        "✅ Ambiente con aire acondicionado en verano (CRÍTICO)",
        "✅ Arnés en lugar de collar (protege cuello y tráquea)",
        "✅ Limpiar pliegues DIARIAMENTE sin falta",
        "✅ Vigilar peso semanalmente",
        "✅ Revisar ojos diariamente (limpiar lagañas)",
        "✅ Entretenimiento mental (juguetes de inteligencia - no ejercicio excesivo)"
    ],
    
    alertasCriticas: [
        "🚨 Jadeo excesivo + encías moradas/azules = EMERGENCIA (golpe de calor)",
        "🚨 Ojo rojo, nublado o lloroso = VET URGENTE (úlcera corneal)",
        "🚨 Olor fétido en pliegues + rascado = Infección",
        "🚨 Dificultad para respirar acostado = Posible cirugía de paladar necesaria",
        "🚨 Cojera repentina = Luxación de rótula",
        "⚠️ Sobrepeso = Agrava TODOS los problemas de salud"
    ],
    
    saludPublica: {
        desparasitacion: {
            frecuencia: "Cada 3 meses",
            importancia: "Protección familiar"
        },
        contaminacionFecal: {
            responsabilidades: [
                "✅ Recoger heces siempre",
                "✅ Bolsas biodegradables",
                "✅ Desechar correctamente"
            ]
        }
    },
    
    costoMantenimiento: {
        nivel: "Medio-Alto",
        veterinario: "Frecuente (raza con muchos problemas)",
        alimentacion: "Media (come poco pero alimento premium)",
        aseo: "Bajo (baño en casa, pero limpieza diaria pliegues)",
        medicamentos: "Alto (alergias, problemas respiratorios)"
    }
},

{
    id: "calupoh",
    nombre: "Calupoh",
    nombresAlternativos: ["Perro Lobo Mexicano"],
    categoria: "mexicanas",
    imagen: "🐺",
    tamaño: "Grandes",
    esPatrimonioMexicano: true,
    
    origen: {
        pais: "México 🇲🇽",
        estado: "Nacional",
        epoca: "1999 (raza moderna)",
        historia: "El Calupoh es una raza mexicana moderna desarrollada desde 1999 por la UNAM mediante cruza controlada entre perros y lobos grises mexicanos. Reconocida por la FCM en 2011. Su nombre proviene del náhuatl 'calli' (casa) y 'ohtli' (camino). Creada para conservar genética del lobo mexicano en un animal domesticable.",
        curiosidad: "Es la única raza canina del mundo reconocida oficialmente con genética de lobo mexicano. Tiene entre 2-5% de genes de lobo."
    },
    
    pesoIdeal: {
        macho: "25-45 kg",
        hembra: "25-40 kg"
    },
    
    esperanzaVida: "12-14 años",
    
    temperamento: {
        personalidad: "Leal, inteligente, reservado, protector, fuerte instinto de manada",
        nivelEnergia: "Muy Alto",
        sociabilidad: {
            conHumanos: "Leal extremo con su familia, desconfiado con extraños",
            conNiños: "⚠️ Supervisión estricta - No para niños pequeños",
            conPerros: "Dominante, necesita jerarquía clara",
            conExtraños: "Reservado, territorial"
        },
        adiestramiento: "Difícil - Solo para dueños experimentados",
        ladridos: "Bajo - Prefiere aullar",
        caracteristicas: [
            "Fuerte instinto de manada",
            "Requiere liderazgo firme",
            "NO para dueños primerizos",
            "Extremadamente inteligente",
            "Puede aullar como lobo",
            "Muy territorial"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización CRÍTICA desde 8 semanas",
                "Entrenamiento profesional OBLIGATORIO",
                "4 comidas al día alta proteína",
                "Contacto con otros perros supervisado",
                "Establecer jerarquía desde inicio"
            ]
        },
        adulto: {
            edad: "18 meses-8 años",
            cuidados: [
                "2-3 horas ejercicio diario MÍNIMO",
                "Entrenamiento continuo",
                "Dieta alta en proteína animal",
                "Espacio amplio requerido",
                "Chequeos anuales"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado",
                "Suplementos articulaciones",
                "Chequeos cada 6 meses",
                "Mantener estimulación mental"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium alta proteína (35-40% proteína animal)",
        calorias: "Según actividad: 1800-2500 cal/día",
        comidas: {
            cachorro: "4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día"
        },
        alertas: [
            "Prefiere carne fresca o dieta BARF",
            "Evitar cereales como ingrediente principal",
            "Agua siempre disponible",
            "NO comida humana",
            "Huesos carnosos crudos buenos para dientes"
        ],
        suplementos: [
            "Glucosamina (articulaciones)",
            "Omega 3",
            "Condroitina"
        ]
    },
    
    problemasCongenitos: [
        "Displasia de cadera (como razas grandes)",
        "Problemas digestivos (sistema sensible)",
        "Torsión gástrica (riesgo bajo-moderado)"
    ],
    
    saludComun: [
        "Displasia de cadera",
        "Sensibilidad digestiva",
        "Alergias alimentarias si dieta incorrecta"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa densa, pelo semi-largo similar a lobo",
        
        cepillado: {
            frecuencia: "3-4 veces por semana, diario en época de muda",
            herramientas: ["Cepillo slicker", "Rastrillo para subpelo", "Peine de metal"],
            nota: "Muda intensa 2 veces al año"
        },
        
        baño: {
            frecuencia: "Cada 2-3 meses (NO bañar en exceso)",
            temperatura: "Tibia",
            secado: "Secar completamente"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Calupoh es un perro de trabajo con doble capa muy densa que requiere limpieza profunda. Como raza activa criada para trabajo al aire libre, necesita protección contra parásitos. El Verde limpia a fondo, repele pulgas/garrapatas por 14 días, y mantiene su pelaje fuerte y brillante sin eliminar aceites protectores naturales.",
                    beneficios: [
                        "Limpieza profunda doble capa",
                        "Repele parásitos 14 días",
                        "Mantiene aceites naturales",
                        "Antibacterial + Antifúngico",
                        "Ideal para perros de trabajo",
                        "Brillo natural"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 6-8 semanas (no bañar mucho - elimina protección natural)"
                },
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Complementario",
                    porque: "Su doble capa densa se enreda fácilmente, especialmente en temporada de muda. El acondicionador facilita remover subpelo muerto y previene nudos.",
                    beneficios: [
                        "Facilita cepillado de doble capa",
                        "Previene nudos en subpelo",
                        "Ayuda en temporada de muda",
                        "Pelo manejable"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Alternar con Verde, especialmente en temporada de muda"
                }
            ],
            
            alertaParasitos: {
                titulo: "⚠️ Calupoh = Perro de trabajo - Alta exposición a parásitos",
                descripcion: "El Calupoh es una raza de trabajo que pasa mucho tiempo en exteriores y ambientes naturales. Alto riesgo de garrapatas, pulgas y ácaros.",
                recomendacion: {
                    producto: "Shampoo Verde Botánico 7en1 - YA RECOMENDADO",
                    porque: "El Verde ya incluye protección antiparasitaria de 14 días. Úsalo regularmente para mantener protección constante.",
                    protocolo: "Baño con Verde cada 6-8 semanas garantiza protección continua. Revisar pelaje después de actividades en campo."
                }
            }
        },
        
        alertasProductos: {
            prohibido: [
                "🚫 Shampoos humanos (pH incorrecto)",
                "🚫 Productos con fragancias artificiales fuertes",
                "🚫 Baños muy frecuentes (elimina aceites protectores)"
            ],
            consecuencias: "Puede causar piel seca, pérdida de brillo, irritación"
        }
    },
    
    tipsEspecificos: [
        "🐺 NO es un perro para principiantes - Requiere experiencia",
        "🏃 MÍNIMO 2-3 horas ejercicio diario",
        "👥 Socialización temprana CRÍTICA",
        "🏠 NO apto para departamento - Necesita espacio amplio",
        "🍖 Dieta alta en proteína animal, evita cereales",
        "🦴 Huesos carnosos crudos para mantener dientes",
        "❄️ Tolera muy bien el frío, sensible a calor extremo",
        "🎓 Entrenamiento con refuerzo positivo, NUNCA violencia",
        "⚠️ Requiere liderazgo firme y consistente"
    ],
    
    alertasCriticas: [
        "🚨 NO para dueños sin experiencia",
        "🚨 Requiere entrenamiento profesional obligatorio",
        "⚠️ Puede ser territorial y dominante",
        "⚠️ Supervisión con niños pequeños SIEMPRE"
    ],
    
    saludPublica: {
        esPotencialmentePeligroso: false,
        requiereLicencia: true,
        restricciones: "Requiere registro especial FCM. Algunos seguros lo consideran raza de riesgo por genética de lobo.",
        contaminacionFecal: {
            peligros: ["Mismo que otras razas - parásitos zoonóticos"],
            responsabilidades: [
                "✅ Recoger heces siempre",
                "✅ Desparasitación cada 3 meses",
                "✅ Control veterinario estricto"
            ]
        },
        desparasitacion: {
            cachorro: "Mensual hasta 6 meses",
            adulto: "Cada 3 meses",
            senior: "Cada 3 meses"
        }
    },
    
    costoMantenimiento: {
        nivel: "Alto",
        veterinario: "Medio (generalmente sanos)",
        alimentacion: "Alta (come mucho, requiere proteína premium)",
        aseo: "Medio",
        entrenamiento: "Alto (profesional requerido)"
    }
},


{
    id: "teckel",
    nombre: "Teckel",
    nombresAlternativos: ["Dachshund", "Perro Salchicha", "Wiener Dog"],
    categoria: "pequeñas",
    imagen: "🌭",
    tamaño: "Pequeñas",
    
    origen: {
        pais: "Alemania",
        epoca: "Siglo XV",
        historia: "Criado específicamente para cazar tejones ('Dachs' = tejón en alemán). Su cuerpo largo y patas cortas le permitían entrar en madrigueras. Es valiente y tenaz, características necesarias para enfrentar tejones bajo tierra."
    },
    
    pesoIdeal: {
        miniatura: "4-5 kg",
        estandar: "7-9 kg",
        alerta: "⚠️ CRÍTICO: Controlar peso estrictamente - Cada kilo extra daña la columna"
    },
    
    esperanzaVida: "12-16 años",
    
    temperamento: {
        personalidad: "Valiente, terco, cariñoso, curioso",
        nivelEnergia: "Media-Alta",
        sociabilidad: {
            conHumanos: "Muy leal a familia",
            conNiños: "Buena con supervisión (puede morder si se le trata bruscamente)",
            conPerros: "Variable (puede ser territorial)",
            conExtraños: "Desconfiado, ladrador"
        },
        adiestramiento: "Medio-Difícil (terco, instinto de caza fuerte)",
        ladridos: "Alto - Voz fuerte para perro pequeño",
        caracteristicas: [
            "Valentía extrema (se enfrenta a animales más grandes)",
            "Instinto de cazador (excava, persigue)",
            "Terco pero inteligente",
            "Ladra mucho (alerta)",
            "Apegado a un miembro de la familia"
        ]
    },
    
    problemasCongenitos: [
        "Enfermedad del disco intervertebral (IVDD) - PRINCIPAL PREOCUPACIÓN",
        "Problemas de columna por estructura alargada",
        "Hernias discales",
        "Luxación de rótula",
        "Problemas dentales",
        "Epilepsia (algunos linajes)"
    ],
    
    saludComun: [
        "Obesidad (afecta gravemente la columna) - PROBLEMA #1",
        "Problemas de espalda y hernias discales - PROBLEMA #2",
        "Diabetes si hay sobrepeso",
        "Problemas cardíacos en edad avanzada",
        "Problemas dentales"
    ],
    
    cuidadosBañoEstetica: {
        tiposPelaje: {
            peloCorto: "Pelo corto, liso, brillante",
            peloLargo: "Pelo largo sedoso, flecos en orejas y cola",
            peloDuro: "Pelo áspero tipo alambre"
        },
        
        cepillado: {
            peloCorto: "Semanal con guante de goma",
            peloLargo: "2-3 veces por semana con slicker",
            peloDuro: "Semanal + stripping profesional 2 veces/año"
        },
        
        baño: {
            frecuencia: "Cada 4-6 semanas",
            cuidadoEspecial: "Proteger columna - No levantar por abdomen",
            proceso: [
                "Agua tibia",
                "Shampoo hipoalergénico",
                "Secar bien (especialmente pelo largo)",
                "NUNCA dejar en superficies altas (puede saltar y lastimarse)"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Teckel es muy activo, explorador y su cuerpo largo está muy cerca del suelo, lo que lo expone constantemente a suciedad, barro y parásitos. El Verde limpia profundamente, repele pulgas/garrapatas que son comunes en esta raza, y mantiene su pelaje brillante y saludable.",
                    beneficios: [
                        "Limpieza profunda de suciedad",
                        "Repele pulgas/garrapatas 14 días",
                        "Ideal para perros bajos",
                        "Antibacterial",
                        "Mantiene brillo natural"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 4-6 semanas"
                }
            ],
            
            alertaParasitos: {
                titulo: "⚠️ Teckel = Cuerpo largo y bajo - Muy expuesto a parásitos",
                descripcion: "Por su cuerpo largo pegado al suelo, los Teckels están en contacto directo con pasto, tierra y vegetación donde viven pulgas y garrapatas.",
                recomendacion: {
                    producto: "Shampoo Verde Botánico 7en1 - YA RECOMENDADO",
                    porque: "El Verde ya incluye protección antiparasitaria. Úsalo regularmente para mantener a tu Teckel protegido.",
                    protocolo: "Baño cada 4-6 semanas con Verde. Revisar abdomen y patas después de paseos en áreas verdes."
                }
            }
        },
        
        alertasProductos: {
            prohibido: [
                "🚫 NUNCA shampoo humano",
                "🚫 NUNCA jabón de trastes",
                "🚫 Productos que resequen piel"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium con glucosamina para articulaciones",
        calorias: "40-50 cal/kg peso corporal",
        alertaCritica: "⚠️ CRÍTICO: Mantener peso ideal estrictamente - Cada kilo extra = 10x más riesgo de problemas de columna",
        comidas: "2 veces al día - Porciones medidas",
        suplementos: [
            "Glucosamina (articulaciones y discos)",
            "Condroitina",
            "Omega 3"
        ]
    },
    
    tipsEspecificos: [
        "🚫 NUNCA permitir subir/bajar escaleras - CARGAR siempre",
        "🚫 Evitar saltos desde altura (camas, sillones)",
        "✅ Usar rampa para acceso a cama/sofá",
        "✅ Mantener peso ideal estrictamente",
        "✅ Ejercicio moderado en superficies planas",
        "✅ Arnés en lugar de collar para paseos",
        "🚫 NO levantar por abdomen - Sostener pecho y trasero",
        "✅ Cama ortopédica para soporte de columna",
        "✅ Evitar pisos resbalosos (puede lastimar columna)",
        "✅ Socializar bien (tiende a morder si se asusta)"
    ],
    
    alertasCriticas: [
        "🚨 Si arquea la espalda o llora al moverse: VET INMEDIATO (hernia discal)",
        "🚨 Parálisis en patas traseras: EMERGENCIA VETERINARIA (cirugía urgente)",
        "🚨 Arrastra patas traseras: URGENCIA",
        "⚠️ Cojera o dolor al tocar espalda: Revisar con vet",
        "⚠️ Cada kilo extra = Riesgo exponencial de parálisis"
    ],
    
    saludPublica: {
        desparasitacion: {
            frecuencia: "Cada 3 meses",
            importancia: "Protección familiar"
        },
        contaminacionFecal: {
            responsabilidades: ["Recoger heces siempre", "Bolsas biodegradables"]
        }
    },
    
    costoMantenimiento: {
        nivel: "Medio-Alto",
        veterinario: "Puede ser muy alto (cirugías de columna $20,000-$80,000 MXN)",
        alimentacion: "Media",
        aseo: "Bajo-Medio (depende del tipo de pelo)",
        prevencion: "Invertir en prevención (peso ideal, rampa) = Ahorro en cirugías"
    }
},

// ============================================
// RAZAS GRANDES - DOBLE CAPA NÓRDICA
// ============================================

{
    id: "husky-siberiano",
    nombre: "Husky Siberiano",
    nombresAlternativos: ["Siberian Husky"],
    categoria: "grandes",
    imagen: "🐺",
    tamaño: "Grandes",
    
    origen: {
        pais: "Siberia, Rusia",
        epoca: "Más de 3,000 años",
        historia: "Criado por el pueblo Chukchi en Siberia para tirar trineos en condiciones árticas extremas. Su sistema de doble capa y resistencia son resultado de siglos de adaptación al frío extremo."
    },
    
    pesoIdeal: {
        macho: "20-27 kg",
        hembra: "16-23 kg"
    },
    
    esperanzaVida: "12-15 años",
    
    temperamento: {
        personalidad: "Amigable, independiente, activo, juguetón",
        nivelEnergia: "MUY ALTA - Necesita mucho ejercicio",
        sociabilidad: {
            conHumanos: "Muy amigable (NO buen perro guardián)",
            conNiños: "Excelente - Paciente y juguetón",
            conPerros: "Muy buena (criado para trabajar en manada)",
            conExtraños: "Amigable con todos"
        },
        adiestramiento: "Difícil (independiente, terco)",
        ladridos: "Bajo - Pero AÚLLA mucho",
        caracteristicas: [
            "Artista del escape (excava, salta vallas)",
            "Mucha energía - Necesita correr diario",
            "Aúlla en lugar de ladrar",
            "Instinto de presa alto (no para gatos pequeños)",
            "Amigable hasta con intrusos",
            "Muy social con otros perros"
        ]
    },
    
    problemasCongenitos: [
        "Displasia de cadera",
        "Cataratas juveniles",
        "Distrofia corneal",
        "Hipotiroidismo",
        "Deficiencia de zinc"
    ],
    
    saludComun: [
        "Generalmente raza saludable",
        "Problemas de piel si no se cuida pelaje",
        "Alergias alimentarias",
        "Displasia de cadera en edad avanzada"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa nórdica (subpelo + pelo externo)",
        
        estructuraPelaje: {
            subpelo: "Denso, lanoso - Aislamiento térmico",
            peloExterno: "Largo, liso - Protección contra agua, viento, UV",
            funcion: "Sistema de termorregulación bidireccional: Mantiene calor en invierno, PROTEGE del calor en verano"
        },
        
        rapadoProhibido: {
            nivel: "🚨 CRÍTICO - DAÑO PERMANENTE 🚨",
            titulo: "NUNCA, JAMÁS, BAJO NINGUNA CIRCUNSTANCIA RAPAR O CORTAR EL PELAJE",
            
            razonesProhibicion: [
                "1. PÉRDIDA DE TERMORREGULACIÓN (tendrá MÁS calor sin su pelo)",
                "2. QUEMADURAS SOLARES SEVERAS",
                "3. GOLPE DE CALOR (sin aislamiento)",
                "4. DAÑO PERMANENTE AL FOLÍCULO PILOSO",
                "5. CAMBIO EN TEXTURA DEL PELAJE (puede no volver a crecer igual)",
                "6. PÉRDIDA DE PROTECCIÓN UV → CÁNCER DE PIEL",
                "7. DERMATITIS Y PROBLEMAS DE PIEL",
                "8. DAÑO PSICOLÓGICO (ansiedad, depresión)"
            ],
            
            mitoMortal: "❌ MITO: 'Le doy rasurada en verano para que no tenga calor'",
            realidad: "🔥 REALIDAD: Al raparlo le QUITAS su aire acondicionado natural. El perro tendrá MÁS CALOR sin su capa aislante. Es como quitarle el techo a una casa y esperar que esté más fresca.",
            
            consecuenciasRapado: {
                inmediatas: [
                    "Quemaduras solares en 20-30 minutos",
                    "Piel enrojecida, ampollas, dolor severo",
                    "Golpe de calor (sin regulación)",
                    "Shock térmico"
                ],
                medioPlazo: [
                    "Alopecia post-rasurado (pelo no vuelve a crecer correctamente)",
                    "Pelo crece desigual, textura de 'algodón'",
                    "Pérdida del color original",
                    "Picazón extrema",
                    "Infecciones de piel"
                ],
                largoPlazo: [
                    "Daño permanente a folículos",
                    "Pelaje nunca vuelve a su estado original",
                    "Riesgo de cáncer de piel",
                    "Problemas crónicos de termorregulación"
                ]
            },
            
            loQueDebesHacer: [
                "✅ CEPILLADO FRECUENTE (diario en temporada de muda)",
                "✅ Remover subpelo muerto con rastrillo",
                "✅ Baños regulares para eliminar pelo suelto",
                "✅ NUNCA cortar o rapar",
                "✅ Máximo: emparejar ligeramente pelo de patas (estético)",
                "✅ Aire acondicionado, sombra y agua en verano"
            ],
            
            advertencia: "⚠️ Si un estilista te sugiere rapar a tu Husky 'para el verano' = CAMBIAR DE ESTILISTA INMEDIATAMENTE. Es ignorancia profesional grave.",
            
            excepcionUnica: "ÚNICA excepción médica: Orden veterinaria por cirugía o problema dermatológico severo"
        },
        
        cepillado: {
            critico: true,
            frecuencia: {
                normal: "3-4 veces por semana",
                temporadaMuda: "DIARIO (primavera y otoño) - Muda EXTREMA",
                verano: "Diario (remover subpelo para ayudar a refrescar)"
            },
            
            herramientas: [
                {
                    nombre: "Rastrillo para subpelo (undercoat rake)",
                    funcion: "Elimina subpelo muerto sin dañar pelo externo",
                    obligatorio: true
                },
                {
                    nombre: "Cepillo slicker",
                    funcion: "Desenreda y elimina pelo suelto"
                },
                {
                    nombre: "Peine de metal",
                    funcion: "Acabado, detecta nudos"
                },
                {
                    nombre: "Furminator (con moderación)",
                    funcion: "Eliminación profunda - NO usar en exceso"
                }
            ],
            
            proceso: [
                "1. Rociar con agua o acondicionador",
                "2. Rastrillo de subpelo: movimientos largos",
                "3. Slicker brush: toda la superficie",
                "4. Peine: verificar nudos",
                "5. Recoger TODA la bola de pelo (será MUCHA)"
            ],
            
            consecuenciasNoCepillar: [
                "Nudos y colchones de pelo",
                "Subpelo muerto atrapa calor (peor en verano)",
                "Dermatitis por humedad atrapada",
                "Hot spots (puntos calientes infectados)",
                "Olor fuerte a perro mojado"
            ],
            
            beneficios: [
                "Termorregulación óptima",
                "Pelaje brillante y saludable",
                "Menos pelo en casa (aún así será mucho)",
                "Detección temprana de problemas",
                "Vínculo con tu perro"
            ]
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas (NO más frecuente - elimina aceites)",
            
            proceso: [
                "1. CEPILLAR ANTES del baño (eliminar nudos)",
                "2. Agua tibia (NUNCA caliente)",
                "3. Mojar completamente hasta la piel (repele agua)",
                "4. Shampoo para doble capa",
                "5. Masajear hasta la piel (no solo superficie)",
                "6. Enjuagar MUY BIEN (residuos = irritación)",
                "7. Acondicionador opcional",
                "8. Secar con toalla",
                "9. Secadora a temperatura baja/media",
                "10. Cepillar mientras seca"
            ],
            
            secado: {
                critico: "Secar COMPLETAMENTE, especialmente subpelo",
                porque: "Subpelo húmedo = caldo de cultivo para hongos",
                metodos: [
                    "Toallas absorbentes",
                    "Secadora a baja temperatura",
                    "Cepillar durante secado"
                ]
            }
        },
        
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Cero Nudos 2en1",
            prioridad: "Principal",
            porque: "El Husky Siberiano tiene doble capa MUY densa que se enreda y enmaraña fácilmente, especialmente durante la muda intensa (2 veces al año). El acondicionador integrado facilita enormemente el cepillado, reduce la formación de nudos y mantiene el subpelo saludable. ESENCIAL durante temporada de muda.",
            beneficios: [
                "Desenreda doble capa densa",
                "Facilita cepillado profundo",
                "Reduce nudos hasta 80%",
                "Ayuda a remover subpelo muerto",
                "Mantiene brillo natural",
                "Esencial en temporada de muda"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
            uso: "Cada 8-10 semanas (NO bañar mucho - elimina aceites protectores naturales)"
        },
        {
            producto: "Shampoo Verde Botánico 7en1",
            prioridad: "Complementario",
            porque: "Para Huskies muy activos, sucios o con exposición a parásitos. Limpieza profunda sin eliminar aceites naturales esenciales.",
            beneficios: [
                "Limpieza profunda",
                "Protección antiparasitaria",
                "Respeta aceites naturales"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
            uso: "Alternar con Cero Nudos si muy sucio o activo"
        }
    ],
    
    alertaParasitos: {
        titulo: "⚠️ Husky = Necesita MUCHO ejercicio - Exposición a parásitos",
        descripcion: "Los Huskies necesitan 2+ horas de ejercicio intenso diario. Mucho tiempo en exteriores = exposición a pulgas y garrapatas.",
        recomendacion: {
            producto: "Shampoo Verde Botánico 7en1",
            porque: "Si tu Husky pasa mucho tiempo afuera, alterna con Verde para protección antiparasitaria.",
            link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
            protocolo: "Alternar: Cero Nudos un mes, Verde el siguiente."
        }
    },
    
    notaCritica: {
        titulo: "⚠️ IMPORTANTE: NO bañar Huskies con frecuencia",
        razon: "Su doble capa tiene aceites naturales que lo protegen del frío extremo. Baños frecuentes eliminan estos aceites.",
        recomendacion: "Bañar solo cada 8-10 semanas o cuando realmente esté sucio. Cepillado frecuente es MÁS importante que baños."
    }
    },
    
    alimentacion: {
        tipoAlimento: "Premium alto en proteína (raza activa)",
        cantidad: "Menos de lo esperado para su tamaño (metabolismo eficiente)",
        comidas: "2 veces al día",
        agua: "Abundante siempre disponible"
    },
    
    tipsEspecificos: [
        "🏃 Ejercicio INTENSO diario obligatorio (mínimo 1 hora)",
        "🐕 Considerar canicross, bikejoring, trineo",
        "🔒 Valla de 2+ metros (saltan alto)",
        "✅ Reforzar jardín (excavan para escapar)",
        "🚫 NUNCA rapar el pelaje",
        "✅ Cepillado diario en muda es NO NEGOCIABLE",
        "❄️ Ama el frío, ODIA el calor (aire acondicionado en verano)",
        "✅ Socialización con otros perros",
        "⚠️ NO apto para vida sedentaria"
    ],
    
    alertasCriticas: [
        "🚨 NUNCA rapar - Daño permanente",
        "⚠️ Calvas o cambios en pelaje = VET",
        "⚠️ Piel enrojecida post-baño = Shampoo inadecuado",
        "🚨 Golpe de calor (jadeo extremo) = EMERGENCIA",
        "✅ Si escapa (frecuente) = Microchip obligatorio"
    ],
    
    saludPublica: {
        desparasitacion: {
            frecuencia: "Cada 3 meses",
            importancia: "Perro grande = heces grandes = Mayor riesgo"
        },
        contaminacionFecal: {
            responsabilidades: [
                "✅ Recoger heces SIEMPRE (son grandes)",
                "✅ Bolsas reforzadas",
                "✅ Desechar correctamente",
                "✅ Multas aplican igual"
            ]
        }
    },
    
    costoMantenimiento: {
        nivel: "Alto",
        veterinario: "Medio (generalmente saludable)",
        alimentacion: "Alta (come bastante)",
        aseo: "Alto (mucho cepillado, baños grandes)",
        extras: "Alto (necesita mucho ejercicio, actividades)"
    },
    
    noRecomendadoPara: [
        "Personas sedentarias",
        "Climas muy calurosos sin aire acondicionado",
        "Departamentos pequeños",
        "Personas sin experiencia con perros",
        "Si no puedes ejercitarlo 1+ hora diaria"
    ]
},

// ============================================
// MÁS RAZAS IMPORTANTES
// ============================================

{
    id: "golden-retriever",
    nombre: "Golden Retriever",
    nombresAlternativos: ["Golden"],
    categoria: "grandes",
    imagen: "🦮",
    tamaño: "Grandes",
    origen: { pais: "Escocia", historia: "Criado en siglo XIX para cobrar aves de caza en terreno difícil" },
    pesoIdeal: { macho: "29-34 kg", hembra: "25-29 kg" },
    esperanzaVida: "10-12 años",
    temperamento: {
        personalidad: "Amigable, confiable, cariñoso, inteligente",
        nivelEnergia: "Alta",
        sociabilidad: { conHumanos: "Excelente", conNiños: "Excelente", conPerros: "Muy buena" },
        ladridos: "Moderado"
    },
    problemasCongenitos: ["Displasia de cadera", "Displasia de codo", "Cataratas", "Problemas cardíacos", "Cáncer (alta incidencia)"],
    saludComun: ["Obesidad", "Problemas de piel/oído", "Alergias"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa larga",
        cepillado: { frecuencia: { normal: "Diario", temporadaMuda: "2 veces al día" }},
        baño: { frecuencia: "Cada 6-8 semanas" },
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Cero Nudos 2en1",
            prioridad: "Principal",
            porque: "Su pelaje largo, denso y propenso a nudos requiere un shampoo con acondicionador integrado. Facilita enormemente el cepillado diario obligatorio, reduce tiempo de secado y evita nudos dolorosos. El Golden tiene doble capa que se enreda fácilmente si no se usa acondicionador. Sin este producto, el cepillado se vuelve una tortura para el perro.",
            beneficios: [
                "Desenreda desde primera aplicación",
                "Facilita cepillado diario",
                "Reduce nudos hasta 80%",
                "Pelo suave y manejable",
                "Brillo natural dorado",
                "Ahorra tiempo en grooming"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
            uso: "Cada 4-6 semanas",
            aplicacion: "Aplicar generosamente, masajear 3-5 minutos, enjuagar muy bien"
        },
        {
            producto: "Shampoo Suave e Hidratante 7en1",
            prioridad: "Complementario",
            porque: "El Golden tiene piel sensible MUY propensa a alergias y dermatitis. Este shampoo hipoalergénico reduce comezón desde la primera aplicación, hidrata profundamente la doble capa y calma irritaciones. Ideal para alternar con Cero Nudos o usar exclusivamente si el perro presenta alergias activas.",
            beneficios: [
                "Hipoalergénico - ideal para piel sensible",
                "Reduce comezón desde 1ra aplicación",
                "Hidratación profunda (doble capa)",
                "Aromaterapia calmante",
                "Previene resequedad",
                "Fortalece pelo (reduce caída)"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
            uso: "Alternar con Cero Nudos, o usar exclusivo si hay alergias",
            aplicacion: "Masajear suavemente, dejar actuar 2-3 minutos en zonas irritadas"
        }
    ],
    
    alertaParasitos: {
        titulo: "⚠️ ¿Tu Golden tiene pulgas, garrapatas o ácaros?",
        descripcion: "Los Golden Retriever son perros muy activos que AMAN el agua y pasan mucho tiempo al aire libre, lo que los expone más a parásitos. Si notas rascado excesivo, pulgas visibles o irritación por picaduras:",
        recomendacion: {
            producto: "Shampoo Verde Botánico 7en1",
            porque: "Repelente natural que protege hasta 14 días contra pulgas, garrapatas y ácaros. Además es antibacterial, antifúngico y cicatrizante - perfecto si el Golden se ha lastimado rascándose. Se puede usar en combinación con Cero Nudos o Suave.",
            beneficios: [
                "Repele pulgas/garrapatas 14 días",
                "Elimina parásitos existentes",
                "Antibacterial + Antifúngico",
                "Cicatriza heridas por rascado",
                "100% Natural - sin químicos tóxicos",
                "Hipoalergénico"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
            protocolo: "Usar Verde primero (limpiar y repeler parásitos), luego Cero Nudos o Suave (hidratar y acondicionar). O alternar: Verde una semana, Cero Nudos/Suave la siguiente.",
            uso: "Cada 2 semanas durante temporada de parásitos (primavera-otoño)"
        }
    },
    
    alertaProblemasPiel: {
        titulo: "🚨 GOLDEN RETRIEVER = RAZA ALTAMENTE PROPENSA A PROBLEMAS DE PIEL",
        estadistica: "60-80% de Golden Retrievers tendrán algún problema de piel en su vida. Es la consulta veterinaria #1 en esta raza.",
        
        sintomasComunes: [
            "Rascado excesivo constante (cara, patas, axilas, orejas, abdomen, cola)",
            "Piel enrojecida, inflamada o con manchas oscuras (hiperpigmentación)",
            "Lamido obsesivo de patas (especialmente entre dedos)",
            "Mal olor en piel (a 'Fritos', 'levadura' o 'perro mojado' sin estar mojado)",
            "Caída excesiva de pelo en parches o zonas específicas",
            "Piel seca, escamosa, con costras o 'caspa' abundante",
            "Infecciones recurrentes de oídos (otitis) - 3+ veces al año",
            "Zonas sin pelo (alopecia)",
            "Piel grasosa o con exceso de sebo",
            "Granitos, pústulas o 'hot spots' (zonas húmedas rojas)",
            "Se despierta en la noche para rascarse",
            "Frotar cara contra muebles/alfombra"
        ],
        
        problemasComunes: {
            dac: {
                nombre: "DAC - Dermatitis Atópica Canina (Alergia crónica)",
                descripcion: "Reacción alérgica a polen, ácaros del polvo, moho, alimentos. La piel se inflama y pica constantemente. Es una enfermedad CRÓNICA que requiere manejo de por vida.",
                sintomas: "Rascado crónico año completo, piel roja, infecciones recurrentes, lamido de patas obsesivo",
                prevalencia: "15-20% de Goldens - UNA DE LAS RAZAS MÁS AFECTADAS"
            },
            hongos: {
                nombre: "Hongos / Infección por Levaduras (Malassezia)",
                descripcion: "Hongo que ama la humedad. EXTREMADAMENTE común en Goldens porque les ENCANTA el agua y nadan frecuentemente.",
                sintomas: "Olor intenso a 'Fritos' o 'levadura', piel grasosa, rascado intenso en orejas y patas, piel oscura",
                zonas: "Orejas (otitis crónica), entre dedos, axilas, pliegues de piel, abdomen",
                prevalencia: "MUY MUY común en Goldens - especialmente los que nadan regularmente"
            },
            hotspots: {
                nombre: "Hot Spots (Dermatitis Húmeda Aguda)",
                descripcion: "Zonas de piel infectadas que aparecen RÁPIDAMENTE (en horas). Muy dolorosas y húmedas. El Golden se rasca/lame obsesivamente empeorando la herida.",
                sintomas: "Parche rojo, húmedo, sin pelo, que aparece súbitamente. Muy doloroso al tocar.",
                causa: "Común en Goldens después de nadar, en época de calor, o por alergias. El pelo largo retiene humedad.",
                prevalencia: "Muy común en verano y en Goldens que nadan"
            },
            bacteriana: {
                nombre: "Infección Bacteriana (Pioderma)",
                descripcion: "Bacterias que infectan la piel. A menudo es SECUNDARIA a alergias o rascado - el Golden se lastima rascándose y las bacterias invaden.",
                sintomas: "Pústulas, costras, mal olor intenso, piel húmeda, círculos rojos",
                prevalencia: "Común después de que el Golden se rasca y se lastima por alergias"
            },
            seborrea: {
                nombre: "Seborrea (Exceso de grasa)",
                descripcion: "Producción excesiva de sebo. Piel y pelo muy grasosos con caspa abundante.",
                sintomas: "Pelo grasoso al tacto, caspa visible, mal olor, piel grasosa",
                prevalencia: "Algunos Goldens tienen tendencia genética a seborrea"
            }
        },
        
        porqueKitBotanico: {
            titulo: "¿Por qué el Kit Botánico funciona para TODOS estos problemas?",
            explicacion: "El Kit Botánico (Verde + Suave) NO es solo para DAC - trata TODO tipo de problema de piel porque combina doble acción:",
            
            verdeBotanico: {
                nombre: "VERDE = Limpia, Desinfecta, Cicatriza, Mata",
                trata: [
                    "✅ Hongos/Levaduras (Malassezia) - Antifúngico natural potente",
                    "✅ Bacterias (Pioderma) - Antibacterial",
                    "✅ Parásitos externos - Antiparasitario",
                    "✅ Infecciones severas - Desinfectante profundo",
                    "✅ Seborrea - Desengrasante natural",
                    "✅ Hot spots - Cicatrizante + Antibacterial"
                ],
                ingredientes: "Aceites de Cítricos, Aloe Vera, Aceite de Coco, Manzanilla, Vitamina E"
            },
            
            suaveBotanico: {
                nombre: "SUAVE = Hidrata, Calma, Repara, Alivia",
                trata: [
                    "✅ Comezón - Alivio INMEDIATO desde 1ra aplicación",
                    "✅ Inflamación - Antiinflamatorio natural",
                    "✅ Piel seca/escamosa - Hidratación PROFUNDA",
                    "✅ Dolor - Analgésico natural",
                    "✅ Estrés del perro - Aromaterapia calmante (Lavanda)",
                    "✅ Regeneración de piel - Pro-vitaminas"
                ],
                ingredientes: "Aloe Vera, Avena, Aceite de Almendras, Manzanilla, Lavanda, Vitamina E"
            },
            
            sinergiaTotal: "🔥 VERDE + SUAVE JUNTOS = Tratamiento COMPLETO que ataca la CAUSA (desinfecta, mata hongos/bacterias) Y alivia los SÍNTOMAS (calma, hidrata, reduce comezón). Por eso funciona donde otros shampoos fallan."
        },
        
        solucion: {
            producto: "Kit Botánico (Verde + Suave) - 1 Litro de cada",
            porque: "Tratamiento natural y completo para TODO problema de piel en Golden Retriever. Más de 3,000 casos documentados de Goldens, Labradores, Bulldogs y otras razas con problemas de piel curados o significativamente controlados. Sin esteroides, sin antibióticos, sin químicos tóxicos. Protocolo probado específicamente en Goldens.",
            
            casosQueResuelve: [
                "✅ DAC / Dermatitis Atópica Canina",
                "✅ Hongos / Malassezia (olor a 'Fritos')",
                "✅ Sarna (Demodécica y Sarcóptica)",
                "✅ Infecciones bacterianas (Pioderma)",
                "✅ Seborrea (piel/pelo grasoso)",
                "✅ Hot Spots (dermatitis húmeda)",
                "✅ Dermatitis de contacto",
                "✅ Alergias alimentarias (síntomas en piel)",
                "✅ Eczema",
                "✅ Infecciones post-natación",
                "✅ Dermatitis por humedad"
            ],
            
            beneficios: [
                "Trata la CAUSA (Verde) y los SÍNTOMAS (Suave) simultáneamente",
                "Desinfecta y cicatriza profundamente (Verde)",
                "Hidrata y calma comezón INMEDIATA (Suave)",
                "Reduce inflamación desde 1ra aplicación",
                "Sin esteroides - sin efectos secundarios",
                "Sin antibióticos - no genera resistencia",
                "Resultados visibles en 1-2 semanas",
                "3,000+ casos exitosos documentados",
                "100% Natural - uso seguro frecuente",
                "Ahorro vs tratamientos veterinarios continuos"
            ],
            
            link: "https://botanican.ecwid.com/Kit-para-Casos-Leves-a-Severos-1-Litro-c-u-p351400867",
            
            protocoloUso: {
                titulo: "Protocolo de uso Kit Botánico para Golden Retriever:",
                pasos: [
                    "1️⃣ VERDE: Baño completo con agua tibia. Aplicar Verde Botánico, tallar MÁS en zonas afectadas (axilas, patas, abdomen, orejas). Dejar actuar 3-5 minutos.",
                    "2️⃣ ENJUAGAR: Enjuagar MUY MUY bien el Verde. Debe salir agua transparente.",
                    "3️⃣ SUAVE: Aplicar Suave SOLO en zonas afectadas/irritadas. Masajear suavemente 2-3 minutos. NO aplicar en todo el cuerpo si no es necesario.",
                    "4️⃣ ENJUAGAR: Enjuagar muy bien.",
                    "5️⃣ SECAR: Secar completamente con toalla limpia. IMPORTANTE: Secar bien entre dedos y orejas (zonas de humedad)."
                ],
                frecuencia: {
                    severo: "Casos SEVEROS (rascado constante, heridas abiertas, mal olor intenso): Cada 2-3 días la primera semana. Luego ir espaciando según mejoría.",
                    moderado: "Casos MODERADOS (rascado frecuente, piel roja, algo de mal olor): 2 veces por semana las primeras 2 semanas. Luego semanal.",
                    leve: "Casos LEVES (rascado ocasional, piel ligeramente irritada): 1 vez por semana hasta control.",
                    mantenimiento: "MANTENIMIENTO (una vez controlado): Cada 10-14 días para prevenir recaídas. Muchos dueños lo usan de por vida para evitar que vuelva el problema."
                },
                notasImportantes: [
                    "⚠️ En casos MUY severos, usa el Kit en ZONAS AFECTADAS mientras usas otro shampoo para el resto del cuerpo",
                    "⚠️ NO suspender tratamiento apenas mejore - continuar hasta control total",
                    "⚠️ Si el Golden nada mucho, usar el Kit después de cada baño en río/mar",
                    "⚠️ Puedes usar solo Verde o solo Suave según necesidad, pero la combinación da mejores resultados"
                ]
            },
            
            testimonios: "Miles de dueños de Golden Retriever con problemas crónicos de piel han reportado mejoría significativa o curación completa. Busca 'BotaniCan Golden Retriever' en redes sociales para ver casos reales con fotos de antes/después.",
            
            importante: "⚠️ El Kit Botánico NO reemplaza tratamiento veterinario en casos severos. Úsalo como complemento natural muy efectivo. Si la DAC o infección es muy severa, consulta a tu veterinario para posible combinación con medicamentos. Muchos veterinarios ya recomiendan BotaniCan como parte del tratamiento integral."
        },
        
        cuandoUsarKit: {
            titulo: "¿Cuándo usar el Kit Botánico vs shampoos individuales?",
            usaKit: [
                "✅ Tu Golden se rasca TODO EL TIEMPO",
                "✅ Tiene mal olor constante en piel",
                "✅ Piel roja, inflamada o con heridas",
                "✅ Se lame las patas obsesivamente",
                "✅ Infecciones de oído recurrentes (3+ al año)",
                "✅ Ya probaste otros shampoos sin resultado",
                "✅ El veterinario diagnóstico DAC, hongos, o dermatitis",
                "✅ Tiene hot spots recurrentes",
                "✅ Nada frecuentemente y desarrolla infecciones"
            ],
            usaIndividual: [
                "Usar solo Cero Nudos: Si tu Golden está SANO, solo necesitas facilitar el cepillado",
                "Usar solo Suave: Si tiene piel sensible pero SIN infección activa",
                "Usar solo Verde: Si solo necesitas protección antiparasitaria"
            ]
        }
    }
    },
    tipsEspecificos: [
        "✅ Ejercicio diario 1+ hora",
        "✅ Ama el agua (natación excelente)",
        "🚫 NUNCA rapar su pelaje",
        "✅ Cepillado diario obligatorio"
    ],
    alertasCriticas: ["🚨 Bultos o masas = VET inmediato (alta incidencia cáncer)", "⚠️ Control de peso estricto"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Alto", veterinario: "Alto (problemas genéticos comunes)" }
},

{
    id: "labrador-retriever",
    nombre: "Labrador Retriever",
    nombresAlternativos: ["Labrador", "Lab"],
    categoria: "grandes",
    imagen: "🦮",
    tamaño: "Grandes",
    origen: { pais: "Canadá (Terranova)", historia: "Originalmente ayudaba a pescadores" },
    pesoIdeal: { macho: "29-36 kg", hembra: "25-32 kg" },
    esperanzaVida: "10-12 años",
    temperamento: {
        personalidad: "Amigable, activo, gentil, inteligente",
        nivelEnergia: "Muy Alta",
        sociabilidad: { conHumanos: "Excelente", conNiños: "Excelente", conPerros: "Excelente" }
    },
    problemasCongenitos: ["Displasia de cadera/codo", "Obesidad genética", "Atrofia progresiva retina"],
    saludComun: ["OBESIDAD (problema #1)", "Problemas articulares", "Oído (aman agua)"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa corta",
        cepillado: { frecuencia: { normal: "2-3 veces/semana", temporadaMuda: "Diario" }},
        baño: { frecuencia: "Cada 6-8 semanas o después de nadar" },
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Verde Botánico 7en1",
            prioridad: "Principal",
            porque: "El Labrador Retriever ADORA el agua, se mete a ríos/lagos/mar constantemente, se ensucia mucho y necesita limpieza profunda. El Verde penetra su capa impermeable especial, limpia a fondo (elimina barro, algas, sal), repele parásitos acuáticos y terrestres, y mantiene los aceites naturales que lo protegen del agua fría. Perfecto para su estilo de vida acuático.",
            beneficios: [
                "Penetra capa impermeable",
                "Limpieza profunda post-natación",
                "Elimina barro, algas, sal marina",
                "Repele parásitos 14 días",
                "Mantiene aceites protectores naturales",
                "Antibacterial (previene infecciones post-agua)",
                "Controla olor característico Labrador"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
            uso: "Cada 6-8 semanas (baño regular) + baño adicional después de nadar en agua sucia"
        },
        {
            producto: "Shampoo Suave e Hidratante 7en1",
            prioridad: "Complementario",
            porque: "Labradores son MUY propensos a alergias, dermatitis y hongos por humedad. Si presenta comezón, irritación, piel roja o mal olor (levaduras), cambiar a Suave. Calma inmediatamente y trata la causa.",
            beneficios: [
                "Calma alergias",
                "Trata hongos por humedad",
                "Reduce comezón inmediata",
                "Hidrata sin eliminar aceites"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
            uso: "Cambiar a Suave si presenta problemas de piel"
        }
    ],
    
    alertaParasitos: {
        titulo: "⚠️ Labrador = AMA el agua - Alta exposición a parásitos",
        descripcion: "Los Labradores son perros muy activos que adoran el agua (ríos, lagos, mar) y pasan mucho tiempo en exteriores. Alta exposición a pulgas, garrapatas, ácaros y parásitos acuáticos.",
        recomendacion: {
            producto: "Shampoo Verde Botánico 7en1 - YA RECOMENDADO",
            porque: "El Verde ya incluye protección antiparasitaria de 14 días. Esencial para Labs tan activos.",
            protocolo: "Baño regular cada 6-8 semanas con Verde mantiene protección constante. Baño adicional después de nadar en agua sucia/estancada."
        }
    },
    
    alertaProblemasPiel: {
        titulo: "🚨 LABRADOR = ALTAMENTE PROPENSO A PROBLEMAS DE PIEL",
        estadistica: "Similar al Golden - 60-70% tendrán problemas de piel. Especialmente por amor al agua.",
        
        sintomasComunes: [
            "Rascado frecuente",
            "Piel roja después de nadar",
            "Lamido obsesivo de patas",
            "Mal olor a 'Fritos' o 'levadura' (hongos)",
            "Hot spots (común después de nadar)",
            "Infecciones de oído crónicas",
            "Piel grasosa"
        ],
        
        problemasComunes: {
            atopica: "Dermatitis Atópica - Alta prevalencia en Labs",
            hongos: "Hongos por humedad - EXTREMADAMENTE común por natación constante",
            hotspots: "Hot Spots - Aparecen después de nadar si no se seca bien",
            alergias: "Alergias alimentarias - Común en la raza"
        },
        
        solucion: {
            producto: "Kit Botánico (Verde + Suave)",
            porque: "Tratamiento completo para Labs con problemas de piel. Verde elimina hongos post-natación, Suave calma e hidrata. Especialmente efectivo para Labs que nadan mucho.",
            link: "https://botanican.ecwid.com/Kit-para-Casos-Leves-a-Severos-1-Litro-c-u-p351400867",
            protocolo: "1º Verde (desinfectar después de nadar) + 2º Suave (hidratar). Usar después de cada natación en agua sucia, o cada 3-4 días si hay infección activa.",
            adicional: "⚠️ CRÍTICO para Labs: SECAR MUY BIEN después de nadar (especialmente orejas). Humedad = hongos y hot spots."
        }
    }
    },
    tipsEspecificos: [
        "✅ Ejercicio intenso diario (2+ horas)",
        "⚠️ Control de peso CRÍTICO (ama comer)",
        "✅ Natación excelente ejercicio",
        "✅ Secar orejas después de nadar"
    ],
    alertasCriticas: ["⚠️ Obesidad = Mayor problema de la raza", "🚨 Cojera = Displasia"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Alto", alimentacion: "Alta (come mucho)" }
},

{
    id: "pastor-aleman",
    nombre: "Pastor Alemán",
    nombresAlternativos: ["German Shepherd", "Ovejero Alemán"],
    categoria: "grandes",
    imagen: "🐕‍🦺",
    tamaño: "Grandes",
    origen: { pais: "Alemania", historia: "Criado para pastoreo y trabajo policial/militar" },
    pesoIdeal: { macho: "30-40 kg", hembra: "22-32 kg" },
    esperanzaVida: "9-13 años",
    temperamento: {
        personalidad: "Inteligente, leal, valiente, protector",
        nivelEnergia: "Muy Alta",
        sociabilidad: { conHumanos: "Leal a familia", conNiños: "Buena con socialización", conPerros: "Variable" },
        adiestramiento: "Excelente - Muy inteligente"
    },
    problemasCongenitos: ["Displasia de cadera (MUY común)", "Mielopatía degenerativa", "Displasia de codo", "Hinchazón gástrica"],
    saludComun: ["Displasia de cadera", "Problemas digestivos", "Alergias de piel"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa densa",
        cepillado: { frecuencia: { normal: "3-4 veces/semana", temporadaMuda: "Diario (muda MUCHO)" }},
        baño: { frecuencia: "Cada 6-8 semanas" },
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Pastor Alemán tiene doble capa MUY densa que requiere limpieza profunda sin dañar. Como perro de trabajo muy activo (policía, militar, pastoreo), necesita protección antiparasitaria. El Verde limpia a fondo, repele pulgas/garrapatas por 14 días, mantiene su pelaje fuerte y es ideal para su vida laboral intensa.",
                    beneficios: [
                        "Limpieza profunda doble capa densa",
                        "Protección antiparasitaria 14 días",
                        "Mantiene textura y fuerza del pelo",
                        "Antibacterial + Antifúngico",
                        "Ideal para perros de trabajo",
                        "No elimina aceites protectores"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 6-8 semanas"
                },
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Complementario",
                    porque: "Durante época de muda intensa (2 veces al año), el acondicionador ayuda MUCHO a remover el subpelo muerto y facilita el cepillado.",
                    beneficios: [
                        "Facilita remoción de subpelo muerto",
                        "Reduce tiempo de cepillado en muda",
                        "Previene nudos"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Usar específicamente en temporada de muda (primavera y otoño)"
                }
            ],
            
            alertaParasitos: {
                titulo: "⚠️ Pastor Alemán = Perro de trabajo - Alta exposición",
                descripcion: "Perros de trabajo muy activos que pasan mucho tiempo en exteriores, campos, bosques. Alta exposición a garrapatas, pulgas y ácaros.",
                recomendacion: {
                    producto: "Shampoo Verde Botánico 7en1 - YA RECOMENDADO",
                    porque: "El Verde ya incluye protección antiparasitaria esencial para perros de trabajo.",
                    protocolo: "Baño regular cada 6-8 semanas mantiene protección. Revisar pelaje después de trabajo en campo."
                }
            }
        },
        rapadoProhibido: {
            titulo: "NUNCA RAPAR - Doble capa nórdica",
            mitoMortal: "Rapar en verano es DAÑINO",
            realidad: "Su doble capa lo protege del calor Y del frío",
            loQueDebesHacer: ["Cepillado frecuente", "NUNCA rapar"]
        }
    },
    tipsEspecificos: [
        "✅ Ejercicio físico y mental diario",
        "✅ Entrenamiento desde cachorro",
        "⚠️ Alta incidencia displasia - chequeos regulares",
        "🚫 NUNCA rapar pelaje"
    ],
    alertasCriticas: ["🚨 Hinchazón abdominal repentina = EMERGENCIA (torsión gástrica)", "⚠️ Cojera = Displasia"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Alto", veterinario: "Alto (problemas genéticos)" }
},

{
    id: "bulldog-frances",
    nombre: "Bulldog Francés",
    nombresAlternativos: ["Frenchie"],
    categoria: "pequeñas",
    imagen: "🐕",
    tamaño: "Pequeñas",
    origen: { pais: "Francia" },
    pesoIdeal: { adulto: "8-14 kg" },
    esperanzaVida: "10-12 años",
    temperamento: {
        personalidad: "Juguetón, afectuoso, sociable",
        nivelEnergia: "Baja",
        sociabilidad: { conHumanos: "Excelente", conNiños: "Excelente", conPerros: "Buena" }
    },
    problemasCongenitos: ["Síndrome braquicéfalo SEVERO", "Problemas respiratorios", "Problemas de columna", "Problemas de parto (cesárea común)"],
    saludComun: ["Dificultad respiratoria", "Golpe de calor", "Alergias de piel", "Infecciones en pliegues"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Corto",
        cuidadoCritico: {
            pliegues: {
                frecuencia: "DIARIO",
                procedimiento: ["Limpiar pliegues faciales", "Secar completamente"],
                consecuencias: "Hongos, levaduras, infecciones si no se limpian"
            }
        },
        baño: { frecuencia: "Cada 3-4 semanas" },
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Principal",
                    porque: "El Bulldog Francés tiene piel MUY sensible, pliegues faciales y es extremadamente propenso a alergias y dermatitis. Este shampoo hipoalergénico limpia los pliegues sin irritar, hidrata profundamente y previene dermatitis. Calma la comezón común en esta raza.",
                    beneficios: [
                        "Hipoalergénico para piel ultra sensible",
                        "Limpia pliegues suavemente",
                        "Reduce alergias desde 1ra aplicación",
                        "Hidratación profunda",
                        "Calma comezón",
                        "No irrita ojos ni pliegues"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Cada 3-4 semanas + limpieza diaria de pliegues"
                }
            ],
            
            alertaProblemasPiel: {
                titulo: "🚨 BULLDOG FRANCÉS = RAZA #1 EN PROBLEMAS DE PIEL",
                estadistica: "80%+ de Bulldogs Franceses tendrán problemas de piel en su vida",
                problemasComunes: [
                    "Dermatitis Atópica - ALTÍSIMA prevalencia",
                    "Dermatitis en pliegues",
                    "Pioderma (infección bacteriana)",
                    "Infecciones por levaduras",
                    "Hot Spots"
                ],
                solucion: {
                    producto: "Kit Botánico (Verde + Suave)",
                    porque: "Tratamiento ESENCIAL para Bulldogs Franceses con problemas de piel. Verde desinfecta, Suave calma. Miles de Frenchies mejorados.",
                    link: "https://botanican.ecwid.com/Kit-para-Casos-Leves-a-Severos-1-Litro-c-u-p351400867",
                    protocolo: "1º Verde (zonas afectadas) + 2º Suave (irritadas). Cada 2-3 días en casos severos."
                }
            }
        }
    },
    tipsEspecificos: [
        "🌡️ NUNCA ejercicio en calor",
        "✅ Limpiar pliegues DIARIAMENTE",
        "✅ Aire acondicionado en verano",
        "🚫 NO puede nadar (se hunde)",
        "✅ Arnés (no collar)"
    ],
    alertasCriticas: ["🚨 Jadeo extremo + encías azules = EMERGENCIA", "⚠️ NO soporta calor ni frío extremos"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Muy Alto", veterinario: "Muy Alto (muchos problemas)" }
},

{
    id: "bulldog-ingles",
    nombre: "Bulldog Inglés",
    nombresAlternativos: ["English Bulldog"],
    categoria: "medianas",
    imagen: "🐕",
    tamaño: "Medianas",
    origen: { pais: "Inglaterra" },
    pesoIdeal: { macho: "23-25 kg", hembra: "18-23 kg" },
    esperanzaVida: "8-10 años",
    temperamento: {
        personalidad: "Gentil, valiente, calmado",
        nivelEnergia: "Muy Baja",
        sociabilidad: { conHumanos: "Excelente", conNiños: "Excelente" }
    },
    problemasCongenitos: ["Síndrome braquicéfalo EXTREMO", "Displasia de cadera", "Problemas cardíacos", "Dermatitis"],
    saludComun: ["Problemas respiratorios SEVEROS", "Golpe de calor fácil", "Infecciones en pliegues", "Obesidad"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Corto",
        cuidadoCritico: {
            pliegues: {
                frecuencia: "DIARIO - CRÍTICO",
                procedimiento: ["Limpiar TODOS los pliegues (cara, cuello, cola)", "Secar completamente"],
                consecuencias: "Infecciones severas, dermatitis, levaduras"
            }
        },
        baño: { frecuencia: "Cada 3-4 semanas" },
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Principal",
                    porque: "El Bulldog Inglés tiene pliegues PROFUNDOS en todo el cuerpo (no solo cara) y piel extremadamente sensible. Este shampoo limpia suavemente todos los pliegues (faciales, cuello, cola, cuerpo), previene infecciones fúngicas severas y reduce el mal olor intenso. ESENCIAL para su cuidado diario.",
                    beneficios: [
                        "Limpia pliegues profundos",
                        "Previene infecciones fúngicas",
                        "Reduce mal olor intenso",
                        "Hidrata piel en pliegues",
                        "Hipoalergénico",
                        "Suave para piel muy sensible"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Cada 3 semanas + limpieza diaria OBLIGATORIA de TODOS los pliegues"
                }
            ],
            
            alertaProblemasPiel: {
                titulo: "🚨 BULLDOG INGLÉS = MÚLTIPLES PLIEGUES = ALTO RIESGO",
                problemasComunes: [
                    "Dermatitis en pliegues (faciales, cuello, cola, cuerpo)",
                    "Pioderma en pliegues - Infección bacteriana severa",
                    "Infecciones por levaduras",
                    "Hot Spots - Especialmente en pliegue de cola",
                    "Dermatitis Atópica"
                ],
                solucion: {
                    producto: "Kit Botánico (Verde + Suave)",
                    porque: "ESENCIAL para Bulldogs con infecciones en pliegues. Verde desinfecta cada pliegue, Suave hidrata y calma.",
                    link: "https://botanican.ecwid.com/Kit-para-Casos-Leves-a-Severos-1-Litro-c-u-p351400867",
                    protocolo: "1º Verde (limpiar CADA pliegue) + 2º Suave (pliegues irritados). SECAR MUY BIEN. Cada 2-3 días hasta control."
                }
            }
        }
    },
    tipsEspecificos: [
        "🌡️ EXTREMA sensibilidad al calor",
        "✅ Limpiar pliegues sin falta diario",
        "✅ Paseos cortos (dificultad respiratoria)",
        "⚠️ Puede necesitar cirugía de paladar",
        "✅ Control de peso estricto"
    ],
    alertasCriticas: ["🚨 Problemas respiratorios = Posible cirugía necesaria", "🚨 Golpe de calor muy fácil"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Muy Alto", veterinario: "Extremadamente Alto" }
},

{
    id: "beagle",
    nombre: "Beagle",
    categoria: "medianas",
    imagen: "🐕",
    tamaño: "Medianas",
    origen: { pais: "Inglaterra" },
    pesoIdeal: { adulto: "9-11 kg (33cm) o 13-16 kg (38cm)" },
    esperanzaVida: "12-15 años",
    temperamento: {
        personalidad: "Amigable, curioso, alegre",
        nivelEnergia: "Alta",
        sociabilidad: { conHumanos: "Excelente", conNiños: "Excelente", conPerros: "Excelente" },
        ladridos: "Alto - Aúlla"
    },
    problemasCongenitos: ["Epilepsia", "Hipotiroidismo", "Luxación de rótula", "Problemas de disco"],
    saludComun: ["Obesidad (ama comer)", "Infecciones de oído", "Alergias"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Corto, doble capa",
        cepillado: { frecuencia: { normal: "Semanal" }},
        baño: { frecuencia: "Cada 4-6 semanas" },
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Verde Botánico 7en1",
            prioridad: "Principal",
            porque: "El Beagle es MUY activo, olfatea TODO pegado al suelo y se ensucia constantemente. Como perro de caza, necesita protección antiparasitaria. El Verde limpia profundamente, repele pulgas/garrapatas por 14 días y controla el olor característico de la raza (glándulas odoríferas activas).",
            beneficios: [
                "Limpieza profunda de suciedad",
                "Repele parásitos 14 días",
                "Controla olor característico Beagle",
                "Antibacterial",
                "Ideal para perros exploradores"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
            uso: "Cada 4-6 semanas"
        }
    ],
    
    alertaParasitos: {
        titulo: "⚠️ Beagle = Nariz pegada al suelo - Alta exposición",
        descripcion: "Los Beagles exploran el mundo con su nariz pegada al suelo. Altísima exposición a pulgas, garrapatas y ácaros en pasto, tierra y vegetación.",
        recomendacion: {
            producto: "Shampoo Verde Botánico 7en1 - YA RECOMENDADO",
            porque: "El Verde ya incluye repelente de 14 días. Úsalo regularmente para mantener protección constante.",
            protocolo: "Baño cada 4-6 semanas con Verde. Revisar orejas largas y abdomen después de paseos."
        }
    }
    },
    tipsEspecificos: [
        "✅ Ejercicio diario intenso",
        "⚠️ Puede escapar siguiendo olores",
        "✅ Limpiar orejas regularmente",
        "⚠️ Control de comida (comerá todo)"
    ],
    alertasCriticas: ["⚠️ Obesidad = Problema principal", "✅ Microchip obligatorio (escapa fácil)"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Medio" }
},

{
    id: "yorkshire-terrier",
    nombre: "Yorkshire Terrier",
    nombresAlternativos: ["Yorkie"],
    categoria: "pequeñas",
    imagen: "🐕",
    tamaño: "Pequeñas",
    origen: { pais: "Inglaterra" },
    pesoIdeal: { adulto: "2-3.5 kg" },
    esperanzaVida: "13-16 años",
    temperamento: {
        personalidad: "Valiente, leal, enérgico",
        nivelEnergia: "Media-Alta",
        sociabilidad: { conNiños: "⚠️ NO recomendado (muy frágil)" }
    },
    problemasCongenitos: ["Luxación de rótula", "Colapso traqueal", "Problemas dentales", "Hipoglucemia"],
    saludComun: ["Problemas dentales SEVEROS", "Luxación de rótula", "Sensibilidad digestiva"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Largo, sedoso (similar a cabello humano)",
        cepillado: {
            frecuencia: { normal: "DIARIO - NO NEGOCIABLE" },
            herramientas: ["Cepillo slicker", "Peine de metal"],
            consecuenciasNoCepillar: "Nudos en 24-48 horas, única solución = rapar completamente"
        },
        baño: { frecuencia: "Cada 2-3 semanas" },
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Cero Nudos 2en1",
            prioridad: "Principal",
            porque: "El Yorkshire tiene pelo largo, sedoso y fino que se enreda con extrema facilidad. Este shampoo con acondicionador integrado facilita enormemente el cepillado diario, previene nudos dolorosos y mantiene su característico pelo brillante y sedoso sin apelmazar.",
            beneficios: [
                "Desenreda pelo fino desde 1ra aplicación",
                "Facilita cepillado diario",
                "Previene nudos",
                "Mantiene sedosidad característica",
                "Brillo natural",
                "No apelmaza pelo fino"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
            uso: "Cada 3-4 semanas"
        },
        {
            producto: "Shampoo Suave e Hidratante 7en1",
            prioridad: "Complementario",
            porque: "Para Yorkshires con piel sensible o alergias (común en la raza). Hidrata profundamente sin apelmazar su pelo fino.",
            beneficios: [
                "Hipoalergénico",
                "Hidrata sin apelmazar",
                "Calma piel sensible"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
            uso: "Alternar con Cero Nudos si presenta irritación"
        }
    ]
    },
    tipsEspecificos: [
        "✅ Cepillado DIARIO obligatorio",
        "✅ Cuidado dental diario",
        "⚠️ Muy frágil - cuidado con niños",
        "✅ Arnés (colapso traqueal)",
        "🧥 Suéter en invierno"
    ],
    alertasCriticas: ["🚨 Tos seca persistente = Colapso traqueal", "⚠️ Si no puedes cepillar diario = Optar por corte corto"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Alto", aseo: "Alto (cepillado diario + peluquería frecuente)" }
},

{
    id: "pomerania",
    nombre: "Pomerania",
    nombresAlternativos: ["Pomeranian", "Pom"],
    categoria: "pequeñas",
    imagen: "🦊",
    tamaño: "Pequeñas",
    origen: { pais: "Alemania/Polonia" },
    pesoIdeal: { adulto: "1.8-3.5 kg" },
    esperanzaVida: "12-16 años",
    temperamento: {
        personalidad: "Vivaz, curioso, sociable",
        nivelEnergia: "Alta",
        ladridos: "Muy Alto"
    },
    problemasCongenitos: ["Luxación de rótula", "Colapso traqueal", "Problemas dentales", "Alopecia X"],
    saludComun: ["Problemas dentales", "Luxación de rótula", "Pérdida de pelo (Alopecia X)"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa abundante tipo Spitz",
        cepillado: {
            frecuencia: { normal: "3-4 veces/semana", temporadaMuda: "Diario" },
            herramientas: ["Slicker brush", "Peine de metal"]
        },
        baño: { frecuencia: "Cada 3-4 semanas" },
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Cero Nudos 2en1",
            prioridad: "Principal",
            porque: "El Pomerania tiene doble capa abundante y esponjosa que se enreda fácilmente. El acondicionador integrado facilita el cepillado, mantiene el volumen característico tipo 'pom pom' y previene nudos en el subpelo denso. Esencial para mantener su apariencia de peluche.",
            beneficios: [
                "Mantiene volumen esponjoso",
                "Facilita cepillado de doble capa",
                "Previene nudos en subpelo",
                "Brillo tipo peluche",
                "Pelo manejable"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
            uso: "Cada 3-4 semanas"
        }
    ]
    },
    tipsEspecificos: [
        "✅ Cepillado regular obligatorio",
        "✅ Socialización (puede ser ladrador)",
        "✅ Cuidado dental diario",
        "⚠️ NO rapar (riesgo Alopecia X)"
    ],
    alertasCriticas: ["⚠️ Pérdida de pelo anormal = VET (Alopecia X)"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Medio-Alto" }
},

{
    id: "shih-tzu",
    nombre: "Shih Tzu",
    categoria: "pequeñas",
    imagen: "🐕",
    tamaño: "Pequeñas",
    origen: { pais: "China/Tíbet" },
    pesoIdeal: { adulto: "4-7.5 kg" },
    esperanzaVida: "10-18 años",
    temperamento: {
        personalidad: "Afectuoso, leal, alegre",
        nivelEnergia: "Baja-Media",
        sociabilidad: { conHumanos: "Excelente", conNiños: "Buena", conPerros: "Buena" }
    },
    problemasCongenitos: ["Problemas respiratorios (cara chata)", "Problemas oculares", "Luxación de rótula", "Problemas dentales"],
    saludComun: ["Infecciones de oído", "Problemas oculares", "Alergias de piel"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Largo, doble capa",
        cepillado: {
            frecuencia: { normal: "DIARIO - OBLIGATORIO" },
            herramientas: ["Cepillo slicker", "Peine de metal"],
            consecuenciasNoCepillar: "Nudos severos en 48 horas, dolor, única solución = rapar"
        },
        baño: { frecuencia: "Cada 2-3 semanas" },
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Cero Nudos 2en1",
            prioridad: "Principal",
            porque: "El Shih Tzu tiene pelo largo y doble capa que se enreda con extrema facilidad. Este shampoo con acondicionador es ESENCIAL para facilitar el cepillado diario obligatorio y prevenir nudos dolorosos que pueden requerir rasurado. Sin acondicionador, el pelo forma 'dreadlocks' en días.",
            beneficios: [
                "Desenreda doble capa",
                "Facilita cepillado diario",
                "Previene nudos severos",
                "Pelo sedoso y brillante",
                "Reduce tiempo de grooming"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
            uso: "Cada 3 semanas + cepillado diario obligatorio"
        },
        {
            producto: "Shampoo Suave e Hidratante 7en1",
            prioridad: "Complementario",
            porque: "Shih Tzus son propensos a alergias y piel sensible. Usar Suave cuando presente comezón o irritación.",
            beneficios: [
                "Calma alergias",
                "Hidrata piel sensible",
                "Reduce comezón"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
            uso: "Usar cuando hay problemas de piel"
        }
    ],
    
    alertaProblemasPiel: {
        titulo: "⚠️ Shih Tzu - Propenso a alergias y dermatitis",
        sintomasComunes: [
            "Rascado de cara y orejas",
            "Lamido de patas",
            "Piel enrojecida",
            "Mal olor",
            "Infecciones de oído recurrentes"
        ],
        solucion: {
            producto: "Kit Botánico (Verde + Suave)",
            porque: "Para Shih Tzus con alergias o dermatitis. Verde limpia/desinfecta, Suave calma/hidrata.",
            link: "https://botanican.ecwid.com/Kit-para-Casos-Leves-a-Severos-1-Litro-c-u-p351400867",
            protocolo: "1º Verde + 2º Suave. Cada 3-4 días en zonas afectadas."
        }
    }
    },
    tipsEspecificos: [
        "✅ Cepillado DIARIO sin excepción",
        "✅ Limpiar ojos diariamente",
        "✅ Atar pelo de la cabeza (evitar irritación ojos)",
        "⚠️ Si no puedes cepillar diario = Corte 'cachorro' corto"
    ],
    alertasCriticas: ["⚠️ Ojos rojos/llorosos = Úlcera corneal posible", "🚨 Si no cepillas diario = Sufrimiento del perro"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Medio-Alto", aseo: "Alto" }
},

{
    id: "maltes",
    nombre: "Maltés",
    categoria: "pequeñas",
    imagen: "🐕",
    tamaño: "Pequeñas",
    origen: { pais: "Malta/Italia" },
    pesoIdeal: { adulto: "3-4 kg" },
    esperanzaVida: "12-15 años",
    temperamento: {
        personalidad: "Gentil, afectuoso, juguetón",
        nivelEnergia: "Media",
        sociabilidad: { conHumanos: "Excelente", conNiños: "Buena con supervisión" }
    },
    problemasCongenitos: ["Luxación de rótula", "Problemas dentales", "Shaker syndrome", "Problemas oculares"],
    saludComun: ["Problemas dentales SEVEROS", "Manchas de lágrimas", "Alergias"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Largo, sedoso, blanco (sin subpelo)",
        cepillado: {
            frecuencia: { normal: "DIARIO" },
            herramientas: ["Cepillo slicker", "Peine de dientes finos"]
        },
        baño: { frecuencia: "Cada 1-2 semanas (mantener blanco)" },
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo para Pelo Blanco",
                    prioridad: "Principal",
                    porque: "El Maltés tiene pelo largo y completamente BLANCO que requiere cuidado especial. Este shampoo mantiene la blancura natural inmaculada, elimina manchas de lágrimas y orina (común en Maltés), y da brillo intenso sin dañar su pelo delicado y fino.",
                    beneficios: [
                        "Blancura inmaculada",
                        "Elimina manchas de lágrimas",
                        "Elimina manchas de orina",
                        "Brillo intenso",
                        "No daña pelo fino",
                        "Fórmula concentrada"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-Especial-para-Pelo-Blanco-1-Litro-p94401479",
                    uso: "Cada 2-3 semanas para mantener blancura"
                },
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Complementario",
                    porque: "Su pelo largo se enreda. Alternar con Pelo Blanco para facilitar cepillado y prevenir nudos.",
                    beneficios: [
                        "Desenreda pelo largo",
                        "Facilita cepillado",
                        "Mantiene sedosidad"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Alternar semanalmente con Pelo Blanco"
                }
            ]
        }
    },
    tipsEspecificos: [
        "✅ Cepillado diario",
        "✅ Limpiar manchas de lágrimas diario",
        "✅ Cuidado dental intensivo",
        "✅ Baños frecuentes (pelaje blanco)"
    ],
    alertasCriticas: ["⚠️ Temblores (Shaker syndrome)"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Alto", aseo: "Muy Alto" }
},

{
    id: "rottweiler",
    nombre: "Rottweiler",
    categoria: "grandes",
    imagen: "🐕",
    tamaño: "Grandes",
    origen: { pais: "Alemania" },
    pesoIdeal: { macho: "50-60 kg", hembra: "35-48 kg" },
    esperanzaVida: "8-10 años",
    temperamento: {
        personalidad: "Leal, valiente, protector, confiado",
        nivelEnergia: "Media-Alta",
        sociabilidad: { conHumanos: "Leal a familia", conNiños: "Buena con socialización", conExtraños: "Desconfiado" },
        adiestramiento: "Alto - Necesita entrenamiento firme"
    },
    problemasCongenitos: ["Displasia de cadera", "Problemas cardíacos", "Osteosarcoma (cáncer de huesos)", "Problemas oculares"],
    saludComun: ["Displasia de cadera", "Obesidad", "Hinchazón gástrica"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Corto, doble capa",
        cepillado: { frecuencia: { normal: "Semanal" }},
        baño: { frecuencia: "Cada 6-8 semanas" },
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Nogal - Pelo Negro",
            prioridad: "Principal",
            porque: "El Rottweiler tiene pelaje mayormente NEGRO brillante que puede decolorarse y perder intensidad con el sol y baños frecuentes. El Nogal Botánico intensifica y mantiene el negro profundo característico, da brillo intenso y realza el hermoso contraste con las marcas café/fuego. Mantiene el color impactante de la raza.",
            beneficios: [
                "Intensifica negro profundo",
                "Previene decoloración por sol",
                "Realza contraste negro-café",
                "Brillo intenso",
                "Nutre pelo negro",
                "Mantiene color impactante"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Nogal-Bot%C3%A1nico-especial-para-Pelo-Negro-1-Litro-p94305970",
            uso: "Cada 6-8 semanas"
        },
        {
            producto: "Shampoo Verde Botánico 7en1",
            prioridad: "Complementario",
            porque: "Para limpieza profunda, protección antiparasitaria y mantenimiento general. Alternar con Nogal para balance entre color y protección.",
            beneficios: [
                "Limpieza profunda",
                "Protección antiparasitaria",
                "Antibacterial"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
            uso: "Alternar mensualmente con Nogal"
        }
    ],
    
    alertaParasitos: {
        titulo: "⚠️ Rottweiler guardián activo",
        descripcion: "Perros guardianes que patrullan exteriores - exposición a parásitos.",
        recomendacion: {
            producto: "Shampoo Verde Botánico 7en1",
            porque: "Alternar con Nogal para mantener protección antiparasitaria.",
            protocolo: "Un mes Nogal (color), siguiente mes Verde (protección)."
        }
    }
    },
    tipsEspecificos: [
        "✅ Socialización y entrenamiento desde cachorro CRÍTICO",
        "✅ Ejercicio regular",
        "✅ Liderazgo firme pero positivo",
        "⚠️ No recomendado para dueños primerizos",
        "⚠️ Seguro de responsabilidad civil recomendado"
    ],
    alertasCriticas: ["🚨 Hinchazón abdominal = EMERGENCIA (torsión)", "⚠️ Cojera = Displasia o cáncer óseo"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Alto", alimentacion: "Alta (come mucho)" }
},

{
    id: "boxer",
    nombre: "Boxer",
    categoria: "grandes",
    imagen: "🥊",
    tamaño: "Grandes",
    origen: { pais: "Alemania" },
    pesoIdeal: { macho: "30-32 kg", hembra: "25-27 kg" },
    esperanzaVida: "10-12 años",
    temperamento: {
        personalidad: "Juguetón, energético, leal, protector",
        nivelEnergia: "Muy Alta",
        sociabilidad: { conHumanos: "Excelente", conNiños: "Excelente", conPerros: "Variable" }
    },
    problemasCongenitos: ["Cáncer (alta incidencia)", "Problemas cardíacos", "Displasia de cadera", "Síndrome braquicéfalo"],
    saludComun: ["Cáncer", "Problemas cardíacos", "Alergias de piel", "Hinchazón gástrica"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Corto",
        cepillado: { frecuencia: { normal: "Semanal" }},
        baño: { frecuencia: "Cada 4-6 semanas" },
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Verde Botánico 7en1",
            prioridad: "Principal",
            porque: "El Boxer es muy activo, atlético y energético. Necesita limpieza profunda que mantenga su pelaje corto brillante. El Verde limpia a fondo sin resecar, protege contra parásitos (importante para perros tan activos) y es ideal para su estilo de vida deportivo.",
            beneficios: [
                "Limpieza profunda",
                "Mantiene brillo natural",
                "Protección antiparasitaria",
                "Ideal para perros atléticos",
                "No reseca piel"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
            uso: "Cada 6-8 semanas"
        },
        {
            producto: "Shampoo Suave e Hidratante 7en1",
            prioridad: "Complementario",
            porque: "Boxers son propensos a alergias y dermatitis. Cambiar a Suave si presenta irritación, comezón o piel sensible.",
            beneficios: [
                "Calma alergias",
                "Reduce comezón",
                "Hipoalergénico"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
            uso: "Usar si presenta problemas de piel"
        }
    ],
    
    alertaParasitos: {
        titulo: "⚠️ Boxer muy activo - Exposición a parásitos",
        descripcion: "Los Boxers son perros extremadamente activos que necesitan mucho ejercicio al aire libre.",
        recomendacion: {
            producto: "Shampoo Verde Botánico 7en1 - YA RECOMENDADO",
            porque: "El Verde ya incluye protección antiparasitaria de 14 días.",
            protocolo: "Usar regularmente para mantener protección."
        }
    },
    
    alertaProblemasPiel: {
        titulo: "⚠️ Boxer - Propenso a alergias y tumores de piel",
        sintomasComunes: [
            "Rascado frecuente",
            "Piel roja",
            "Lamido de patas",
            "Bultos o masas en piel (vigilar)"
        ],
        solucion: {
            producto: "Kit Botánico (Verde + Suave)",
            porque: "Para Boxers con dermatitis o alergias. Verde limpia/desinfecta, Suave calma.",
            link: "https://botanican.ecwid.com/Kit-para-Casos-Leves-a-Severos-1-Litro-c-u-p351400867",
            adicional: "⚠️ IMPORTANTE: Revisar piel regularmente en busca de bultos. Boxers tienen alta incidencia de tumores de piel."
        }
    }
    },
    tipsEspecificos: [
        "✅ Ejercicio INTENSO diario (2+ horas)",
        "✅ Mantiene energía de cachorro hasta los 3 años",
        "⚠️ Sensibilidad al calor (cara chata)",
        "✅ Chequeos regulares (alta incidencia cáncer)"
    ],
    alertasCriticas: ["🚨 Bultos o masas = VET inmediato", "🚨 Hinchazón abdominal = EMERGENCIA"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Alto", veterinario: "Alto (problemas genéticos)" }
},

{
    id: "dalmata",
    nombre: "Dálmata",
    categoria: "grandes",
    imagen: "🐕",
    tamaño: "Grandes",
    origen: { pais: "Croacia" },
    pesoIdeal: { macho: "27-32 kg", hembra: "24-29 kg" },
    esperanzaVida: "11-13 años",
    temperamento: {
        personalidad: "Activo, inteligente, amigable, leal",
        nivelEnergia: "Muy Alta",
        sociabilidad: { conHumanos: "Buena", conNiños: "Buena con supervisión", conPerros: "Buena" }
    },
    problemasCongenitos: ["Sordera (30% nacen sordos de uno o ambos oídos)", "Cálculos urinarios", "Displasia de cadera", "Alergias"],
    saludComun: ["Problemas urinarios", "Alergias de piel", "Sordera"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Corto, muda TODO EL AÑO",
        cepillado: { frecuencia: { normal: "3-4 veces/semana (muda constante)" }},
        baño: { frecuencia: "Cada 4-6 semanas" },
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Dálmata es extremadamente activo y atlético (necesita 2+ horas ejercicio diario). Requiere limpieza profunda que mantenga sus manchas definidas y su pelaje blanco brillante. El Verde limpia a fondo sin desvanecer el contraste blanco-negro característico.",
                    beneficios: [
                        "Limpieza profunda",
                        "Mantiene contraste blanco-negro",
                        "No desvanece manchas",
                        "Brillo intenso",
                        "Protección antiparasitaria",
                        "Ideal para perros muy activos"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 6-8 semanas"
                }
            ],
            
            alertaParasitos: {
                titulo: "⚠️ Dálmata = Perro ULTRA activo - Mucho tiempo afuera",
                descripcion: "Los Dálmatas necesitan 2+ horas de ejercicio diario intenso. Mucho tiempo en exteriores = alta exposición a parásitos.",
                recomendacion: {
                    producto: "Shampoo Verde Botánico 7en1 - YA RECOMENDADO",
                    porque: "El Verde ya incluye repelente de 14 días. Esencial para perros tan activos.",
                    protocolo: "Baño regular cada 6-8 semanas con Verde mantiene protección constante."
                }
            }
        }
    },
    tipsEspecificos: [
        "✅ Ejercicio INTENSO diario (correr)",
        "⚠️ Muda pelo blanco TODO EL AÑO",
        "✅ Dieta baja en purinas (problemas urinarios)",
        "⚠️ Verificar audición en cachorros",
        "⚠️ NO apto para vida sedentaria"
    ],
    alertasCriticas: ["⚠️ Dificultad para orinar = VET urgente", "🚨 Sangre en orina = Cálculos"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Alto", veterinario: "Medio-Alto" }
},

{
    id: "border-collie",
    nombre: "Border Collie",
    categoria: "medianas",
    imagen: "🐕‍🦺",
    tamaño: "Medianas",
    origen: { pais: "Reino Unido (frontera escocesa)" },
    pesoIdeal: { adulto: "14-20 kg" },
    esperanzaVida: "12-15 años",
    temperamento: {
        personalidad: "Extremadamente inteligente, trabajador, enérgico",
        nivelEnergia: "Extremadamente Alta",
        sociabilidad: { conHumanos: "Leal a familia", conNiños: "Buena (puede 'pastorear' niños)", conPerros: "Buena" },
        adiestramiento: "Excelente - Raza MÁS inteligente"
    },
    problemasCongenitos: ["Displasia de cadera", "Epilepsia", "Anomalía del ojo del Collie (CEA)", "Sordera"],
    saludComun: ["Generalmente saludable", "Problemas de comportamiento si no se ejercita"],
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa (pelo largo o moderado)",
        cepillado: { frecuencia: { normal: "2-3 veces/semana", temporadaMuda: "Diario" }},
        baño: { frecuencia: "Cada 6-8 semanas" },
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Cero Nudos 2en1",
            prioridad: "Principal",
            porque: "El Border Collie tiene doble capa de longitud media que se enreda fácilmente, especialmente detrás de las orejas, patas y cola. El acondicionador integrado facilita enormemente el cepillado regular necesario y mantiene su pelaje brillante y saludable sin nudos.",
            beneficios: [
                "Desenreda doble capa",
                "Facilita cepillado regular",
                "Previene nudos detrás de orejas",
                "Pelo brillante y saludable",
                "Reduce tiempo de grooming"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
            uso: "Cada 6-8 semanas"
        },
        {
            producto: "Shampoo Verde Botánico 7en1",
            prioridad: "Complementario",
            porque: "Raza EXTREMADAMENTE activa que necesita horas de ejercicio diario. Verde para protección antiparasitaria y limpieza profunda.",
            beneficios: [
                "Protección antiparasitaria",
                "Limpieza profunda",
                "Ideal para perros muy activos"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
            uso: "Alternar con Cero Nudos si muy activo en exteriores"
        }
    ],
    
    alertaParasitos: {
        titulo: "⚠️ Border Collie = ULTRA activo - Mucho ejercicio diario",
        descripcion: "Border Collies necesitan 2-3 horas de ejercicio INTENSO diario. Pasan mucho tiempo corriendo en exteriores. Alta exposición a parásitos.",
        recomendacion: {
            producto: "Shampoo Verde Botánico 7en1",
            porque: "Si tu Border pasa muchas horas afuera diariamente, alterna con Verde para protección.",
            protocolo: "Alternar: Cero Nudos un mes, Verde el siguiente."
        }
    }
    },
    tipsEspecificos: [
        "✅ Ejercicio físico Y mental INTENSO diario (2-3+ horas)",
        "✅ Deportes caninos (agility, frisbee, pastoreo)",
        "⚠️ Desarrolla problemas de comportamiento sin estimulación",
        "⚠️ NO apto para personas sedentarias o sin experiencia",
        "✅ Considerado el perro MÁS inteligente del mundo"
    ],
    alertasCriticas: ["⚠️ Comportamiento destructivo = Falta de ejercicio mental/físico", "🚨 Convulsiones = Epilepsia posible"],
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses" }},
    costoMantenimiento: { nivel: "Alto", extras: "Alto (deportes caninos, juguetes mentales)" },
    noRecomendadoPara: ["Personas sedentarias", "Departamentos pequeños", "Dueños primerizos sin tiempo"]
},

{
    id: "poodle",
    nombre: "Poodle",
    nombresAlternativos: ["French Poodle", "Caniche", "Pudel"],
    categoria: "pequenas",
    imagen: "🐩",
    tamaño: "Pequeñas",
    esPatrimonioMexicano: false,
    
    origen: {
        pais: "Francia 🇫🇷 (Alemania reclama co-origen)",
        estado: "Nacional",
        epoca: "Siglo XV",
        historia: "A pesar del nombre 'French Poodle', la raza tiene origen alemán ('Pudel' = chapotear en agua) como perro cobrador de aves acuáticas. Francia lo adoptó y perfeccionó como perro de compañía de la nobleza. Su corte característico no es estético: se dejaba pelo en articulaciones y órganos vitales para protección en agua fría. Es el perro nacional de Francia y una de las razas más inteligentes del mundo.",
        curiosidad: "El corte 'león' del Poodle originalmente tenía función: pelo en pecho para flotar, pelo en articulaciones para proteger del frío. No era moda, era funcional."
    },
    
    pesoIdeal: {
        adulto: "Toy: 2-4kg | Miniatura: 4-7kg | Mediano: 7-12kg | Estándar: 20-32kg",
        alerta: "En México predominan Toy y Miniatura"
    },
    
    esperanzaVida: "12-15 años (Toy/Mini viven más que Standard)",
    
    temperamento: {
        personalidad: "Inteligente, activo, elegante, sociable, orgulloso",
        nivelEnergia: "Alto (necesita estimulación mental)",
        sociabilidad: {
            conHumanos: "Excelente, orientado a la familia",
            conNiños: "Muy bueno (Miniatura/Standard mejor que Toy)",
            conPerros: "Generalmente sociable si se socializa",
            conExtraños: "Amigable pero puede ser reservado"
        },
        adiestramiento: "Muy fácil - 2da raza más inteligente (después Border Collie)",
        ladridos: "Moderado-Alto (buen perro guardián)",
        caracteristicas: [
            "Extremadamente inteligente",
            "Aprende trucos rápidamente",
            "Puede ser ansioso si se deja solo",
            "Necesita compañía constante",
            "Hipoalergénico (no suelta pelo)"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses (Toy/Mini) | 0-18 meses (Standard)",
            cuidados: [
                "Socialización temprana crucial",
                "4 comidas al día hasta 6 meses",
                "Comenzar grooming desde pequeño para acostumbrar",
                "Entrenamiento de obediencia (aprenden rápido)",
                "Estimulación mental diaria (juguetes interactivos)"
            ]
        },
        adulto: {
            edad: "1-8 años",
            cuidados: [
                "2 comidas al día",
                "Ejercicio 30-60 minutos diarios",
                "Grooming profesional cada 6-8 semanas OBLIGATORIO",
                "Cepillado diario en casa",
                "Estimulación mental (son muy inteligentes)"
            ]
        },
        senior: {
            edad: "8+ años (Toy/Mini) | 7+ años (Standard)",
            cuidados: [
                "Chequeos veterinarios cada 6 meses",
                "Ejercicio moderado adaptado",
                "Mantener grooming regular",
                "Vigilar articulaciones y dientes"
            ],
            enfermedadesComunes: [
                "Problemas dentales (muy común)",
                "Cataratas",
                "Displasia de cadera (Standard)",
                "Luxación rotuliana (Toy/Mini)"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium alta calidad para razas pequeñas/medianas",
        calorias: "Toy: 200-400 cal/día | Mini: 400-600 | Standard: 1000-1500",
        comidas: {
            cachorro: "4 veces al día (hasta 6 meses)",
            adulto: "2 veces al día",
            senior: "2 veces al día (menor cantidad)"
        },
        alertas: [
            "Propenso a obesidad - controlar porciones",
            "Evitar comida de mesa (acostumbran a mendigar)",
            "Necesita dieta balanceada para piel y pelo sano",
            "Agua siempre disponible"
        ],
        suplementos: [
            "Omega 3 y 6 (para pelo brillante)",
            "Glucosamina (articulaciones en edad senior)",
            "Probióticos (sistema digestivo sensible)"
        ]
    },
    
    problemasCongenitos: [
        "Luxación rotuliana (Toy/Miniatura)",
        "Enfermedad de Addison (Standard)",
        "Displasia de cadera (Standard)",
        "Problemas oculares (cataratas, atrofia retina)",
        "Epilepsia",
        "Enfermedad de Von Willebrand (problemas coagulación)"
    ],
    
    saludComun: [
        "Problemas dentales (cepillado dental necesario)",
        "Infecciones de oído (por pelo en canal auditivo)",
        "Alergias cutáneas",
        "Problemas articulares en edad senior",
        "Ansiedad por separación"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Rizado, denso, lanoso, de crecimiento continuo (NO muda)",
        
        cepillado: {
            frecuencia: "DIARIO obligatorio (se enreda fácilmente)",
            herramientas: ["Cepillo slicker", "Peine de metal", "Cepillo desenredante"],
            nota: "Si no se cepilla diariamente forma nudos imposibles de quitar"
        },
        
        baño: {
            frecuencia: "Cada 3-6 semanas (con grooming profesional)",
            temperatura: "Tibia",
            secado: "Secar completamente con secadora (el pelo retiene humedad)",
            importante: "SIEMPRE cepillar ANTES del baño (los nudos se aprietan con agua)"
        },
        
        corte: {
            frecuencia: "Cada 6-8 semanas OBLIGATORIO con groomer profesional",
            estilos: [
                "Corte cachorro (más fácil de mantener)",
                "Corte león (tradicional, requiere mucho mantenimiento)",
                "Corte teddy bear (popular en México)",
                "Corte continental (exhibición)"
            ],
            costo: "$$$ Alto - es el grooming más caro ($600-1,200 MXN)",
            importante: "El grooming NO es opcional - sin corte regular el pelo crece sin parar y forma nudos dolorosos"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "ESENCIAL - Absolutamente Obligatorio",
                    porque: "El Poodle tiene pelo RIZADO y extremadamente denso que se enmaraña en HORAS si no se usa acondicionador. Sin este shampoo, su pelo forma nudos dolorosísimos que requieren rasurar completo. El acondicionador es INDISPENSABLE para mantener su pelo rizado manejable, facilitar el cepillado diario OBLIGATORIO y prevenir nudos severos. NO ES OPCIONAL.",
                    beneficios: [
                        "Desenreda pelo rizado denso",
                        "Facilita cepillado diario obligatorio",
                        "Previene nudos severos y dolorosos",
                        "Mantiene rizos definidos",
                        "Pelo suave y manejable",
                        "Evita rasurado completo por nudos",
                        "ESENCIAL para grooming profesional"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Cada 3-4 semanas + cepillado diario OBLIGATORIO"
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario",
                    porque: "Poodles tienen piel sensible debajo de todo ese pelo rizado. Usar Suave para hidratación profunda o si presenta alergias (común en la raza).",
                    beneficios: [
                        "Hidrata piel debajo del pelo denso",
                        "Calma piel sensible",
                        "Hipoalergénico"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Alternar con Cero Nudos si piel sensible"
                }
            ]
        },
        
        cuidadosEspeciales: {
            orejas: "Limpiar semanalmente y QUITAR pelo del canal auditivo (acumulación causa infecciones)",
            ojos: "Limpiar lagañas diarias (manchan pelo blanco/crema)",
            uñas: "Cortar cada 3-4 semanas",
            dientes: "Cepillado dental 3-4 veces por semana (propenso a sarro)",
            glandulasAnales: "Revisar mensualmente (pueden llenarse)"
        },
        
        alertasProductos: {
            prohibido: [
                "🚫 Shampoos humanos (pH incorrecto, resecan)",
                "🚫 Productos con sulfatos agresivos",
                "🚫 Acondicionadores muy pesados (apelmaza)",
                "🚫 Bañar sin cepillar antes (fija nudos)"
            ],
            consecuencias: "Pelo reseco, nudos, irritación piel, pérdida de brillo"
        }
    },
    
    tipsEspecificos: [
        "🐩 Grooming profesional NO es lujo - es NECESIDAD (pelo crece sin parar)",
        "✂️ Inversión grooming: $600-1,200 cada 6-8 semanas = $3,600-7,200/año",
        "🧠 Necesita estimulación mental diaria (es muy inteligente, se aburre)",
        "🏃 Ejercicio diario necesario (no es perro de sillón)",
        "👂 SIEMPRE secar orejas completamente después del baño",
        "🦷 Cepillado dental regular (problemas dentales muy comunes)",
        "❄️ Tolera mejor frío que calor (pero no le gusta lluvia)",
        "🏠 Apto para departamento si se ejercita",
        "👨‍👩‍👧 Excelente para familias (pero Toy frágil con niños pequeños)",
        "⚠️ Puede desarrollar ansiedad por separación si se deja solo mucho tiempo"
    ],
    
    alertasCriticas: [
        "🚨 Grooming profesional es OBLIGATORIO cada 6-8 semanas - sin excepción",
        "🚨 Cepillado DIARIO o tendrás nudos que requieren rasurar completo",
        "⚠️ Pelo en orejas debe removerse regularmente (infecciones)",
        "⚠️ Si no puedes costear grooming regular ($600-1,200 cada 2 meses), considera otra raza",
        "⚠️ Necesita compañía - NO es perro para dejar solo 8+ horas diarias"
    ],
    
    saludPublica: {
        esPotencialmentePeligroso: false,
        requiereLicencia: false,
        restricciones: "Ninguna - raza segura y amigable",
        contaminacionFecal: {
            peligros: ["Parásitos intestinales (Giardia común)", "Bacterias E.coli", "Toxoplasmosis"],
            responsabilidades: [
                "✅ Recoger heces SIEMPRE (especialmente en parques)",
                "✅ Desparasitación cada 3 meses",
                "✅ Vacunas al día"
            ]
        },
        desparasitacion: {
            cachorro: "Mensual hasta 6 meses",
            adulto: "Cada 3 meses",
            senior: "Cada 3 meses"
        }
    },
    
    costoMantenimiento: {
        nivel: "ALTO",
        veterinario: "Medio ($1,500-3,000/año)",
        alimentacion: "Media-Alta (requiere alimento premium $800-1,500/mes)",
        aseo: "MUY ALTO (grooming $3,600-7,200/año + productos en casa)",
        accesorios: "Medio (ropa para frío, juguetes interactivos)",
        total: "Estimar $8,000-12,000 MXN/mes incluyendo grooming profesional",
        nota: "El grooming profesional es el gasto OBLIGATORIO más alto. Si no puedes costearlo, el Poodle NO es para ti."
    },
    
    mensajeFinal: {
        titulo: "El Poodle: ¿Es para ti?",
        ideal_para: [
            "Personas con tiempo para cuidado diario",
            "Presupuesto para grooming profesional regular",
            "Familias activas que buscan perro inteligente",
            "Personas con alergias (hipoalergénico)",
            "Dueños comprometidos con entrenamiento y estimulación mental",
            "Hogares donde alguien está en casa la mayor parte del día"
        ],
        NO_ideal_para: [
            "Presupuesto limitado (grooming es MUY caro)",
            "Personas muy ocupadas (necesita atención diaria)",
            "Quienes buscan perro 'de bajo mantenimiento'",
            "Personas que no pueden cepillar diariamente",
            "Hogares donde queda solo 8+ horas diarias"
        ],
        realidad: "El Poodle es un compañero extraordinario: inteligente, cariñoso, elegante y versátil. PERO requiere compromiso SERIO de tiempo (cepillado diario) y dinero (grooming profesional cada 6-8 semanas es OBLIGATORIO, no opcional). Su pelo crece sin parar y sin cuidado regular forma nudos dolorosos que requieren rasurar completo. Si estás dispuesto a invertir tiempo y dinero, tendrás uno de los perros más inteligentes y leales que existen. Si buscas bajo mantenimiento, elige otra raza."
    }
},

{
    id: "criolla",
    nombre: "Raza Criolla / Mestiza",
    nombresAlternativos: ["Perro Callejero", "Mestizo", "Corriente", "Sin Raza Definida"],
    categoria: "especial",
    imagen: "🐕",
    tamaño: "Variable",
    
    origen: {
        pais: "México y el mundo",
        historia: "Los perros criollos son el resultado de generaciones de cruces naturales sin intervención humana selectiva. Son el perro 'original', con genética diversa que los hace únicos. En México, representan la mayoría de los perros y son parte fundamental de nuestra cultura. No tienen 'pedigrí', pero tienen algo mejor: resistencia, adaptabilidad y un corazón enorme."
    },
    
    pesoIdeal: { adulto: "Variable (5-30 kg dependiendo del tamaño)" },
    esperanzaVida: "12-18 años (frecuentemente viven MÁS que razas puras)",
    
    temperamento: {
        personalidad: "Leal, adaptable, inteligente, agradecido",
        nivelEnergia: "Variable",
        sociabilidad: {
            conHumanos: "Generalmente excelente - extremadamente agradecidos",
            conNiños: "Muy buena",
            conPerros: "Muy buena (socializados en calle)"
        },
        adiestramiento: "Alto - Muy inteligentes y deseosos de aprender",
        caracteristicas: [
            "Extremadamente agradecidos con quien los rescata",
            "Adaptables a diferentes ambientes",
            "Resistentes y saludables (vigor híbrido)",
            "Inteligentes y astutos (supervivencia)",
            "Leales hasta la muerte"
        ]
    },
    
    problemasCongenitos: [
        "⭐ MENOR incidencia que razas puras (vigor híbrido)",
        "Pocos problemas genéticos por diversidad genética",
        "Generalmente más saludables que perros de raza"
    ],
    
    saludComun: [
        "Generalmente MUY saludables",
        "Posibles parásitos si fueron callejeros (tratables)",
        "Posibles traumas emocionales de abandono (tratables con amor)",
        "Mayor resistencia a enfermedades que razas puras"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Variable (corto, mediano, largo - depende de los cruces)",
        
        cepillado: {
            frecuencia: {
                peloCorto: "Semanal",
                peloMedioLargo: "2-3 veces/semana"
            },
            herramientas: ["Según tipo de pelo"]
        },
        
        baño: {
            frecuencia: "Cada 4-6 semanas (o según necesidad)",
            especial: "Si fue rescatado de la calle, primer baño COMPLETO con antiparasitarios"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal - Versátil",
                    porque: "Los perros criollos/mestizos son resistentes con tipos de pelo MUY variados. El Verde Botánico es la opción más versátil: limpia cualquier tipo de pelaje (corto, largo, rizado, liso), protege contra parásitos (importante para perros rescatados o callejeros), y es ideal para su naturaleza activa y resistente. Funciona para TODOS los mestizos.",
                    beneficios: [
                        "Versátil para cualquier tipo de pelo",
                        "Limpieza profunda",
                        "Protección antiparasitaria 14 días",
                        "Antibacterial + Antifúngico",
                        "Uso normal seguro",
                        "Ideal para perros rescatados"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 4-6 semanas"
                }
            ],
            
            alertaParasitos: {
                titulo: "⚠️ Perros criollos/rescatados - Exposición variable",
                descripcion: "Perros callejeros o rescatados suelen tener mayor exposición a parásitos. Perros mestizos activos también están expuestos.",
                recomendacion: {
                    producto: "Shampoo Verde Botánico 7en1 - YA RECOMENDADO",
                    porque: "El Verde ya incluye protección antiparasitaria. Especialmente importante para perros rescatados.",
                    protocolo: "Baño regular cada 4-6 semanas con Verde mantiene protección."
                }
            }
        },
        
        alertasProductos: {
            prohibido: [
                "🚫 NUNCA shampoo humano (igual que razas puras)",
                "🚫 NUNCA jabón de trastes",
                "⚠️ Los perros criollos merecen los MISMOS productos de calidad"
            ],
            consecuencias: "Un perro crioll o merece tanto respeto y cuidado como cualquier raza pura"
        }
    },
    
    alimentacion: {
        tipoAlimento: "Alimento balanceado de calidad según tamaño",
        especial: "Si fue rescatado desnutrido, alimentar gradualmente - NO dar mucha comida de golpe",
        comidas: "2 veces al día (adulto)",
        alertas: [
            "Si fue callejero, puede tener tendencia a 'guardar' comida",
            "Enseñar que siempre habrá comida disponible",
            "Control de peso igual que otras razas"
        ]
    },
    
    tipsEspecificos: [
        "❤️ Dale TODO el amor del mundo - te lo devolverá x1000",
        "✅ Paciencia si viene de la calle (traumas posibles)",
        "✅ Desparasitación completa al rescatar",
        "✅ Esterilización (evitar sobrepoblación)",
        "✅ Chequeo veterinario completo al adoptar",
        "❤️ No es 'solo un perro callejero' - es tu FAMILIA",
        "✅ Socialización gradual si tuvo vida difícil",
        "❤️ Su gratitud no tiene límites",
        "✅ Entrénalo igual que raza pura (son inteligentísimos)",
        "❤️ Tiene el MISMO valor que cualquier perro de raza"
    ],
    
    valorEspecial: {
        mensaje: "🌟 IMPORTANTE: Los perros criollos NO son 'perros de segunda'. Son sobrevivientes, luchadores, y cuando los rescatas, te dan su lealtad eterna. Muchas veces son MÁS saludables, MÁS inteligentes, y MÁS agradecidos que perros de raza. Adoptar un perro crioll o es salvar una vida y ganar un mejor amigo para siempre.",
        ventajas: [
            "✅ Más saludables (vigor híbrido)",
            "✅ Menos problemas genéticos",
            "✅ Viven más años",
            "✅ Más resistentes a enfermedades",
            "✅ Extremadamente leales",
            "✅ Muy inteligentes",
            "✅ Salvas una vida",
            "✅ Gastos veterinarios menores",
            "✅ Únicos en el mundo (no hay dos iguales)"
        ],
        adopcion: "La adopción de perros criollos es un acto de amor que salva vidas. Miles esperan en albergues y calles. Dale una oportunidad a un crioll o."
    },
    
    alertasCriticas: [
        "⚠️ Si fue rescatado: Chequeo veterinario COMPLETO obligatorio",
        "✅ Desparasitación interna y externa",
        "✅ Vacunación completa",
        "✅ Esterilización (evitar sobrepoblación)",
        "❤️ Paciencia con traumas de abandono"
    ],
    
    saludPublica: {
        contaminacionFecal: {
            peligros: [
                "🦠 Los mismos parásitos que razas puras",
                "⚠️ Si vive en calle, MAYOR riesgo de parásitos"
            ],
            responsabilidades: [
                "✅ Recoger heces SIEMPRE (igual que razas puras)",
                "✅ Desparasitar cada 3 meses",
                "✅ Si rescatas de calle: desparasitación completa URGENTE"
            ],
            legislacion: "Las mismas leyes aplican. Un perro crioll o tiene las mismas responsabilidades legales."
        },
        desparasitacion: {
            rescate: "URGENTE - Primera semana después del rescate",
            adulto: "Cada 3 meses DE POR VIDA",
            importancia: "Especialmente crítico si vivió en calle"
        }
    },
    
    costoMantenimiento: {
        nivel: "Bajo-Medio",
        veterinario: "Generalmente MENOR que razas puras (más saludables)",
        alimentacion: "Media (según tamaño)",
        aseo: "Bajo (según tipo de pelo)",
        ventaja: "Generalmente menos gastos veterinarios que razas puras"
    },
    
    mensajeFinal: "❤️ Un perro crioll o puede no tener pedigrí, pero tiene algo que ningún papel puede dar: un corazón agradecido, lealtad inquebrantable, y amor incondicional. Adopta, no compres. Salva una vida y gana un amigo para siempre. #AdoptaNoCompres"
},

// ============================================
// SCHNAUZER MINIATURA
// ============================================
{
    id: "schnauzer-miniatura",
    nombre: "Schnauzer Miniatura",
    nombresAlternativos: ["Mini Schnauzer", "Zwergschnauzer"],
    categoria: "pequeñas",
    imagen: "🐕",
    tamaño: "Pequeñas",
    
    origen: {
        pais: "Alemania 🇩🇪",
        epoca: "Siglo XIX",
        historia: "Desarrollado en granjas alemanas para cazar ratas. Versión miniatura del Schnauzer Estándar. Creado cruzando Schnauzer Estándar con razas pequeñas como Affenpinscher y Poodle Miniatura."
    },
    
    pesoIdeal: {
        adulto: "5-9 kg"
    },
    
    esperanzaVida: "12-15 años",
    
    temperamento: {
        personalidad: "Alerta, amigable, obediente, inteligente",
        nivelEnergia: "Alta",
        sociabilidad: {
            conHumanos: "Excelente - Muy apegado a la familia",
            conNiños: "Muy buena - Juguetón y paciente",
            conPerros: "Buena si se socializa desde cachorro",
            conExtraños: "Alerta pero amigable, excelente perro guardián"
        },
        adiestramiento: "Fácil - Muy inteligente y ansioso por complacer",
        ladridos: "Alto - Excelente perro de alerta",
        caracteristicas: [
            "Barba y cejas características distintivas",
            "Muy leal a la familia",
            "Excelente perro de alerta (ladra ante extraños)",
            "Terrier en espíritu (valiente, enérgico)",
            "Una de las razas más populares en el mundo"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "Socialización temprana crítica",
                "3-4 comidas pequeñas al día",
                "Entrenamiento básico desde los 2-3 meses",
                "Introducción al grooming profesional temprano",
                "Ejercicio moderado (no excesivo)"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "45-60 min ejercicio diario",
                "Grooming profesional cada 6-8 semanas OBLIGATORIO",
                "2 comidas balanceadas al día",
                "Estimulación mental diaria",
                "Cepillado 2-3 veces por semana",
                "Revisión veterinaria anual"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado (30-40 min/día)",
                "Chequeos veterinarios cada 6 meses",
                "Vigilar problemas hepáticos y pancreatitis",
                "Alimento senior (menos calorías)",
                "Suplementos para articulaciones",
                "Continuar grooming regular",
                "Exámenes de sangre anuales (función hepática)"
            ],
            enfermedadesComunes: [
                "Pancreatitis",
                "Problemas hepáticos",
                "Cataratas",
                "Diabetes",
                "Cálculos urinarios"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas pequeñas, bajo en grasas",
        calorias: "40 cal/kg peso corporal",
        comidas: {
            cachorro: "3-4 veces al día (porciones pequeñas)",
            adulto: "2 veces al día",
            senior: "2 veces al día (porciones reducidas)"
        },
        alertas: [
            "⚠️ CRÍTICO: Muy propenso a pancreatitis",
            "Evitar comidas grasosas absolutamente",
            "NO dar comida de mesa (especialmente grasosa)",
            "Alimento bajo en grasas obligatorio",
            "Porciones medidas estrictamente",
            "Snacks deben ser bajos en grasa"
        ],
        suplementos: [
            "Probióticos (estómago sensible)",
            "Omega 3 (piel y pelaje)",
            "Glucosamina (articulaciones en edad senior)"
        ]
    },
    
    problemasCongenitos: [
        "Pancreatitis (MUY COMÚN - riesgo toda la vida)",
        "Hiperlipidemia (colesterol alto)",
        "Enfermedad hepática (shunt portosistémico)",
        "Cataratas",
        "Cálculos urinarios (estruvita y oxalato)",
        "Diabetes mellitus",
        "Síndrome del Schnauzer (hiperlipidemia + pancreatitis)",
        "Comedones (puntos negros en piel - 'Schnauzer bumps')"
    ],
    
    saludComun: [
        "Pancreatitis (episodios pueden ser recurrentes)",
        "Alergias de piel (moderadamente común)",
        "Infecciones de oído (orejas caídas)",
        "Problemas dentales",
        "Obesidad si no se controla dieta",
        "Comedones en espalda (normal de la raza, estéticos)"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa dura (necesita corte profesional OBLIGATORIO)",
        
        cepillado: {
            frecuencia: {
                normal: "2-3 veces por semana - OBLIGATORIO",
                temporadaMuda: "Diario (aunque muda poco)"
            },
            herramientas: [
                {
                    herramienta: "Cepillo slicker",
                    funcion: "Elimina pelo muerto y desenreda",
                    obligatorio: true
                },
                {
                    herramienta: "Peine metálico de dientes medios",
                    funcion: "Verifica que no haya nudos, especialmente en barba y patas",
                    obligatorio: true
                },
                {
                    herramienta: "Peine de pulgas (dientes finos)",
                    funcion: "Para barba y cejas"
                }
            ],
            proceso: [
                "1. Cepillar TODO el cuerpo con slicker (contra el crecimiento primero, luego a favor)",
                "2. Usar peine metálico para verificar nudos",
                "3. Atención especial: barba, cejas, patas, área genital",
                "4. Peinar barba diariamente (acumula comida/agua)",
                "5. Revisar 'armpits' (axilas) - área propensa a nudos"
            ],
            consecuenciasNoCepillar: [
                "Nudos en barba, patas y axilas en 1 semana",
                "Pelo apelmazado bajo la capa exterior",
                "Irritación de piel por nudos",
                "Groomer tendrá que rapar si hay muchos nudos (pérdida del look Schnauzer)"
            ]
        },
        
        baño: {
            frecuencia: "Cada 4-6 semanas (idealmente antes de grooming profesional)",
            proceso: [
                "1. Cepillar ANTES del baño (eliminar nudos - se endurecen con agua)",
                "2. Agua tibia",
                "3. Shampoo suave específico para pelaje duro",
                "4. Atención especial a barba (acumula comida/suciedad)",
                "5. Enjuagar MUY bien (residuos = irritación)",
                "6. Acondicionador opcional (facilita desenredo de barba)",
                "7. Secar con toalla primero",
                "8. Secadora a temperatura baja-media",
                "9. Cepillar MIENTRAS seca"
            ],
            atencionEspecial: {
                barba: {
                    critico: true,
                    limpieza: "DIARIA - Se ensucia con comida y agua",
                    procedimiento: [
                        "Limpiar con toallita húmeda después de cada comida",
                        "Peinar barba diariamente",
                        "Secar después de beber agua",
                        "Prevenir manchas de lágrimas (color café)"
                    ],
                    consecuencias: "Barba sucia = Olor, bacterias, manchas marrones permanentes"
                },
                oidos: {
                    critico: true,
                    problema: "Pelo crece DENTRO del canal auditivo",
                    procedimiento: [
                        "Groomer debe arrancar pelo del oído (plucking)",
                        "Limpieza de oídos semanal en casa",
                        "Revisar enrojecimiento, olor"
                    ],
                    consecuencias: "Pelo en oídos = Infecciones frecuentes si no se remueve"
                }
            }
        },
        
        corte: {
            critico: true,
            frecuencia: "Cada 6-8 semanas con groomer profesional - NO NEGOCIABLE",
            razon: "El pelaje de Schnauzer NO para de crecer. Sin corte regular, se convierte en pelaje largo, desaliñado y propenso a nudos.",
            estilos: [
                {
                    nombre: "Corte Schnauzer tradicional",
                    descripcion: "Cuerpo rapado corto, patas con 'pantalones', barba y cejas largas. El look clásico de Schnauzer.",
                    mantenimiento: "Alto - Requiere cepillado frecuente de barba y patas"
                },
                {
                    nombre: "Corte cachorro (puppy cut)",
                    descripcion: "Todo el cuerpo a una longitud uniforme corta, incluye barba y cejas más cortas.",
                    mantenimiento: "Bajo - Ideal para dueños que no pueden cepillar mucho",
                    nota: "Pierde el 'look Schnauzer' pero mucho más práctico"
                }
            ],
            serviciosGroomer: [
                "Corte de pelo completo",
                "Plucking de oídos (arrancar pelo del canal)",
                "Recorte de uñas",
                "Limpieza de glándulas anales",
                "Baño y secado",
                "Limpieza de oídos"
            ],
            costo: "$400-800 MXN por sesión (cada 6-8 semanas)",
            realidad: "Es un gasto recurrente OBLIGATORIO. Sin grooming profesional, el Schnauzer no se mantiene."
        },
        
        botanican: {
    recomendaciones: [
        {
            producto: "Shampoo Verde Botánico 7en1",
            prioridad: "Principal",
            porque: "El Schnauzer Miniatura tiene pelo duro y doble capa que requiere limpieza profunda sin resecar. El Verde limpia a fondo, mantiene la textura característica del pelo alambre, protege contra parásitos y es ideal para su naturaleza activa y alerta.",
            beneficios: [
                "Limpieza profunda pelo duro",
                "Mantiene textura alambre",
                "No reseca doble capa",
                "Protección antiparasitaria",
                "Brillo natural"
            ],
            link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
            uso: "Cada 4-6 semanas"
        }
    ]
    },
    
    tipsEspecificos: [
        "✅ Grooming profesional cada 6-8 semanas - NO NEGOCIABLE",
        "✅ Limpieza de barba DIARIA (después de cada comida)",
        "✅ Cepillado mínimo 2-3 veces/semana",
        "✅ Peinar barba y cejas diariamente",
        "⚠️ CRÍTICO: Dieta baja en grasas (pancreatitis)",
        "🚫 NUNCA dar comida de mesa (especialmente grasosa)",
        "✅ Ejercicio mental diario (muy inteligente, se aburre)",
        "✅ Limpieza de oídos semanal",
        "✅ Si eliges corte cachorro, acepta que no se verá como Schnauzer tradicional",
        "💰 Presupuestar grooming profesional ($400-800 cada 6-8 semanas)",
        "⚠️ Socialización temprana (puede ser territorial si no se socializa)"
    ],
    
    alertasCriticas: [
        "🚨🚨🚨 PANCREATITIS - Conocer síntomas (puede ser MORTAL):",
        "   - Vómito repetido",
        "   - Dolor abdominal severo (posición de oración)",
        "   - Diarrea",
        "   - Pérdida de apetito",
        "   - Letargo",
        "   = EMERGENCIA VETERINARIA INMEDIATA",
        "🚨 Cualquier alimento graso puede desencadenar pancreatitis",
        "⚠️ Orina con sangre/dificultad = Posibles cálculos urinarios - VET",
        "⚠️ Ojos nublados = Cataratas (común en edad senior)",
        "⚠️ Rascado excesivo + piel roja = Alergia",
        "⚠️ Mal olor en oídos + rascado = Infección"
    ],
    
    cuidadosEspeciales: {
        comedones: {
            que: "Puntos negros en la piel (espalda principalmente)",
            normal: "ES NORMAL en Schnauzers - Llamado 'Schnauzer bumps'",
            causa: "Foliculitis - Acumulación en folículos pilosos",
            manejo: [
                "Baños regulares con shampoo suave",
                "Algunos casos requieren shampoo medicado",
                "Generalmente cosmético (no causa problemas)",
                "NO exprimir (puede causar infección)"
            ],
            cuando_preocuparse: "Si hay infección, enrojecimiento severo, o dolor - VET"
        },
        
        pancreatitis: {
            prevencion: [
                "Dieta baja en grasas ESTRICTA",
                "NO sobras de mesa",
                "Evitar cambios bruscos de dieta",
                "Mantener peso ideal",
                "Alimentar en horarios regulares"
            ],
            factoresRiesgo: [
                "Obesidad",
                "Dieta alta en grasas",
                "Hiperlipidemia (común en Schnauzers)",
                "Edad avanzada"
            ]
        }
    },
    
    saludPublica: {
        contaminacionFecal: {
            peligros: [
                "🦠 Toxocara canis (toxocariasis en humanos)",
                "🦠 Giardia, Salmonella, E. coli",
                "🦠 Parásitos que penetran piel humana"
            ],
            riesgoHumano: [
                "Niños que juegan en áreas contaminadas",
                "Contaminación de agua",
                "Moscas que transportan parásitos"
            ],
            responsabilidades: [
                "✅ SIEMPRE recoger heces (en casa y calle)",
                "✅ Usar bolsas biodegradables",
                "✅ Desechar en bote de basura",
                "✅ Desparasitar cada 3 meses RELIGIOSAMENTE",
                "✅ Lavar manos después de recoger heces",
                "✅ No permitir defecar en áreas de juego infantil"
            ],
            legislacion: "En muchos municipios mexicanos, no recoger heces = Multa $500-2,000 MXN. Es salud pública.",
            impactoAmbiental: [
                "Contaminan agua subterránea",
                "Generan gases de efecto invernadero",
                "Atraen plagas"
            ]
        },
        desparasitacion: {
            cachorro: "Cada 2 semanas hasta 3 meses, luego mensual hasta 6 meses",
            adulto: "Cada 3 meses DE POR VIDA - NO NEGOCIABLE",
            senior: "Cada 3 meses (sistema inmune más débil)",
            importancia: "Protege a tu Schnauzer Y a tu familia de parásitos zoonóticos"
        }
    },
    
    costoMantenimiento: {
        nivel: "Medio-Alto",
        desglose: {
            veterinario: "Medio (chequeos regulares + riesgo pancreatitis = gastos potenciales altos)",
            alimentacion: "Media ($800-1,200 MXN/mes alimento premium bajo en grasas)",
            aseo: "ALTO ($400-800 cada 6-8 semanas grooming = $2,400-4,800/año)",
            medicamentos: "Variable (puede ser alto si desarrolla pancreatitis crónica)",
            total: "Estimar $3,000-5,000 MXN/mes incluyendo grooming"
        },
        nota: "El grooming profesional es un gasto OBLIGATORIO y recurrente. Si no puedes costearlo, considera el corte cachorro (más económico de mantener) o considera otra raza."
    },
    
    mensajeFinal: {
        titulo: "El Schnauzer Miniatura: ¿Es para ti?",
        ideal_para: [
            "Familias activas con tiempo para ejercicio diario",
            "Personas que pueden costear grooming profesional regular",
            "Hogares que buscan perro guardián pequeño (ladra mucho)",
            "Dueños comprometidos con cuidado de barba diaria",
            "Personas conscientes de salud (dieta estricta baja en grasas)"
        ],
        NO_ideal_para: [
            "Personas con presupuesto limitado (grooming es caro)",
            "Dueños muy ocupados (requiere cuidado diario de barba)",
            "Hogares donde no se tolera ladrido (ladra MUCHO)",
            "Personas que quieren perro 'de bajo mantenimiento'",
            "Quienes no pueden comprometerse con visitas regulares al groomer"
        ],
        realidad: "El Schnauzer Miniatura es un compañero maravilloso, leal, inteligente y lleno de personalidad. PERO requiere compromiso de tiempo (cuidado diario) y dinero (grooming profesional). Si estás dispuesto a darle lo que necesita, tendrás uno de los mejores perros de compañía que existen. Si no puedes comprometerte con el mantenimiento, elige otra raza más simple de cuidar."
    }
}

// Total: 23 razas completas

];
