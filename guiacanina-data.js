/**
 * GUÍACANINA - BASE DE DATOS DE RAZAS
 * Información completa sobre 21 razas de perros
 * Incluye: Origen, temperamento, salud, alimentación, cuidados, BotaniCan, salud pública
 */

const BREEDS_DATABASE = [

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
            recomendado: "Shampoo Suave e Hidratante 7en1",
            porque: "Los Chihuahuas tienen piel delicada y son propensos a alergias. Por su tamaño pequeño, un shampoo suave es esencial. BotaniCan con ingredientes naturales es perfecto para no irritar su piel sensible y mantener el brillo natural de su pelaje.",
            beneficios: [
                "pH 7.0 balanceado para piel canina sensible",
                "Ingredientes naturales sin químicos agresivos",
                "No reseca la piel delicada",
                "Olor suave natural",
                "Ideal para baños frecuentes si es necesario"
            ],
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
        },
        
        alertasProductos: {
            prohibido: [
                "🚫 NUNCA usar shampoo humano (pH 5.5 muy ácido para perros)",
                "🚫 NUNCA jabón de trastes (quema piel, causa dermatitis)",
                "🚫 NUNCA Zote o jabón de barra (pH extremo, resequedad severa)",
                "🚫 NO productos con fragancias fuertes (irritación)"
            ],
            consecuencias: "Productos inadecuados causan: piel seca, caspa, comezón, alergias, infecciones, pérdida de brillo, sufrimiento del perro"
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
                recomendado: "BotaniCan Hipoalergénico",
                porque: "El Xolo sin pelo necesita un shampoo MUY suave que limpie sin resecar su piel expuesta. BotaniCan Hipoalergénico con ingredientes naturales es perfecto para mantener el balance de pH de su piel delicada sin aceites agresivos. Ideal para razas sin pelo que requieren baños frecuentes.",
                beneficios: [
                    "pH 7.0 balanceado para piel canina",
                    "Ingredientes naturales (sin químicos agresivos)",
                    "Limpieza profunda sin resecar",
                    "Control de sebo sin eliminar protección natural",
                    "Apto para baños frecuentes",
                    "No irrita piel sensible expuesta"
                ],
                cuidadoAdicional: "Después del baño, aplicar aceite natural (coco o almendras dulces) para mantener piel hidratada y protegida",
                frecuencia: "Cada 7-14 días",
                link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
            }
        },
        
        variedadConPelo: {
            tipoPelaje: "Pelo corto completo",
            cepillado: "Semanal con cepillo de cerdas suaves",
            baño: {
                frecuencia: "Cada 3-4 semanas",
                shampoo: "BotaniCan Regular o Hipoalergénico"
            }
        },
        
        alertasProductos: {
            prohibido: [
                "🚫 NUNCA shampoo humano (pH incorrecto para piel expuesta)",
                "🚫 NUNCA jabón de trastes (EXTREMADAMENTE dañino para piel sin pelo)",
                "🚫 NUNCA productos con alcohol (reseca piel)",
                "🚫 NO fragancias artificiales (irritación)",
                "🚫 NO exfoliantes agresivos (piel delicada)"
            ],
            consecuencias: "Productos inadecuados en piel sin pelo = Daño severo, quemaduras químicas, infecciones, dermatitis"
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
            recomendado: "BotaniCan Hipoalergénico + BotaniCan Medicado (según necesidad)",
            porque: "Los Pugs tienen piel MUY sensible y propensa a alergias. BotaniCan Hipoalergénico mantiene la piel limpia sin irritaciones. Para Pugs con problemas de hongos en pliegues, el BotaniCan Medicado con ingredientes naturales ayuda a controlar levaduras y hongos sin químicos agresivos.",
            beneficios: [
                "Ingredientes naturales ideales para piel sensible",
                "pH 7.0 balanceado",
                "Controla olor sin resecar",
                "Ayuda a prevenir infecciones de piel",
                "No irrita ojos saltones del Pug",
                "Medicado: control natural de hongos/levaduras"
            ],
            frecuenciaUso: "Hipoalergénico cada 3-4 semanas, Medicado según indicación veterinaria",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
        },
        
        alertasProductos: {
            prohibido: [
                "🚫 NUNCA shampoo humano (irrita piel sensible)",
                "🚫 NUNCA jabón de trastes (causa dermatitis severa)",
                "🚫 NO productos con fragancias fuertes (alergias)",
                "🚫 Evitar productos que no especifiquen pH canino"
            ],
            consecuencias: "Productos inadecuados = Alergias, dermatitis, infecciones en pliegues, comezón extrema"
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
            recomendado: "BotaniCan Hipoalergénico (todas las variedades)",
            porque: "El Teckel tiene piel sensible especialmente en la variedad de pelo corto. BotaniCan con ingredientes naturales previene resequedad y mantiene el pelaje brillante sin irritaciones.",
            beneficios: [
                "pH balanceado para piel canina",
                "Previene resequedad",
                "Mantiene brillo natural",
                "Ideal para 3 tipos de pelaje",
                "No irrita piel sensible"
            ],
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
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
            recomendado: "BotaniCan Hipoalergénico o Doble Capa",
            
            porqueEsIdeal: [
                "✅ pH 7.0 balanceado específicamente para piel canina",
                "✅ Ingredientes NATURALES (sin químicos agresivos)",
                "✅ NO elimina aceites naturales protectores excesivamente",
                "✅ Fórmula suave que respeta la doble capa",
                "✅ Facilita enjuague (menos residuos)",
                "✅ Aroma natural sin fragancias irritantes",
                "✅ Mantiene brillo natural del pelaje",
                "✅ NO reseca la piel"
            ],
            
            beneficios: {
                subpelo: "Limpia sin apelmazar el subpelo denso",
                peloExterno: "Mantiene textura y resistencia del pelo de guarda",
                piel: "Respeta el pH natural sin irritación",
                resultados: "Pelaje limpio, brillante, suave, sin estática"
            },
            
            comparacion: {
                botanican: "Ingredientes naturales + pH correcto + Respeta aceites = Piel saludable",
                shampooComercial: "Químicos fuertes + pH incorrecto + Reseca = Problemas de piel",
                lavaplatos: "Detergente industrial + pH 10+ + Elimina TODO = DESASTRE TOTAL"
            },
            
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
        },
        
        alertasProductos: {
            prohibido: [
                "🚫 NUNCA shampoo humano (pH incorrecto)",
                "🚫 NUNCA jabón de trastes (CATASTRÓFICO para doble capa)",
                "🚫 NUNCA productos con pH no especificado",
                "🚫 Evitar fragancias artificiales fuertes"
            ],
            consecuencias: "Productos inadecuados destruyen la doble capa, causan resequedad extrema, pérdida de brillo, dermatitis"
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
            recomendado: "BotaniCan Hipoalergénico",
            porque: "Ideal para su pelaje largo y piel sensible a alergias. Mantiene el característico color dorado brillante.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
        },
        alertasProductos: { prohibido: ["🚫 NUNCA rapar (doble capa)", "🚫 NO shampoo humano", "🚫 NO jabón trastes"] }
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
            recomendado: "BotaniCan Hipoalergénico",
            porque: "Ideal para su piel sensible y baños frecuentes si nadan mucho.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
        },
        alertasProductos: { prohibido: ["🚫 NO rapar", "🚫 NO productos humanos"] }
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
            recomendado: "BotaniCan Hipoalergénico",
            porque: "Perfecto para su piel sensible a alergias y doble capa densa.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
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
            recomendado: "BotaniCan Hipoalergénico + Medicado",
            porque: "Piel muy sensible con tendencia a infecciones en pliegues.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
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
            recomendado: "BotaniCan Hipoalergénico + Medicado",
            porque: "Esencial para piel extremadamente sensible y problemas en pliegues.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
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
            recomendado: "BotaniCan Hipoalergénico",
            porque: "Ideal para su piel sensible y pelaje denso.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
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
            recomendado: "BotaniCan Hipoalergénico + Acondicionador",
            porque: "Esencial para mantener su pelo sedoso sin nudos.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
        }
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
            recomendado: "BotaniCan Hipoalergénico",
            porque: "Perfecto para su abundante doble capa y piel delicada.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
        },
        rapadoProhibido: {
            titulo: "NO rapar completamente",
            realidad: "Puede causar Alopecia X (pelo no vuelve a crecer)"
        }
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
            recomendado: "BotaniCan Hipoalergénico + Acondicionador",
            porque: "Esencial para su pelo largo propenso a enredos y piel sensible.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
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
            recomendado: "BotaniCan Hipoalergénico",
            porque: "Ideal para mantener su pelaje blanco brillante sin químicos agresivos que lo amarillen.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
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
            recomendado: "BotaniCan Regular",
            porque: "Ideal para su pelaje corto y piel resistente.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
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
            recomendado: "BotaniCan Hipoalergénico",
            porque: "Ideal para su piel sensible a alergias.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
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
            recomendado: "BotaniCan Hipoalergénico",
            porque: "Ideal para su piel sensible a alergias.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
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
            recomendado: "BotaniCan Hipoalergénico",
            porque: "Perfecto para su doble capa y piel sensible.",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
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
            recomendado: "BotaniCan Hipoalergénico (ideal para cualquier tipo de pelaje)",
            porque: "Los perros criollos merecen el MISMO cuidado de calidad que cualquier raza pura. BotaniCan con ingredientes naturales es perfecto para su piel que puede haber sufrido en la calle. Ayuda a restaurar el brillo y salud del pelaje.",
            beneficios: [
                "pH balanceado para piel canina",
                "Ingredientes naturales suaves",
                "Restaura brillo del pelaje maltratado",
                "Apto para piel sensible",
                "No irrita piel que pudo haber tenido parásitos"
            ],
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
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
            recomendado: "BotaniCan Regular o Hipoalergénico",
            porque: "El pelaje duro del Schnauzer necesita un shampoo que limpie sin suavizar excesivamente la textura característica. BotaniCan con ingredientes naturales mantiene la textura del pelo sin químicos agresivos que pueden causar alergias (común en Schnauzers).",
            beneficios: [
                "✅ Limpia profundamente sin suavizar el pelo duro",
                "✅ pH balanceado para piel sensible del Schnauzer",
                "✅ No causa alergias (muchos Schnauzers tienen piel sensible)",
                "✅ Ingredientes naturales no irritan piel",
                "✅ Facilita el enjuague (importante con barba densa)",
                "✅ Mantiene brillo natural sin aceites artificiales"
            ],
            linea: {
                hipoalergenico: {
                    para: "Schnauzers con piel sensible o alergias",
                    beneficio: "Fórmula extra suave, sin irritantes"
                },
                regular: {
                    para: "Mantenimiento regular de Schnauzers saludables",
                    beneficio: "Limpieza profunda respetando textura del pelo"
                }
            },
            comparacion: {
                botanican: "Natural + pH correcto + Respeta textura = Pelaje sano",
                shampooComercial: "Químicos + Puede suavizar pelo = Pierde textura Schnauzer",
                shampooHumano: "pH incorrecto + Muy suave = ARRUINA textura del pelo duro"
            },
            frecuenciaUso: "Cada 4-6 semanas (antes de grooming profesional idealmente)",
            link: "https://botanican.ecwid.com/SHAMPOOS-BOT%C3%81NICOS-c36277009"
        }
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

];

// Total: 21 razas completas con información detallada

// ============================================
// CALUPOH (RAZA MEXICANA #3)
// ============================================

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
        historia: "Raza mexicana moderna desarrollada desde 1999 por la UNAM mediante cruza controlada entre perros y lobos grises mexicanos. Reconocida por la FCM en 2011. Su nombre proviene del náhuatl 'calli' (casa) y 'ohtli' (camino).",
        curiosidad: "Única raza reconocida con genética de lobo mexicano (2-5% genes de lobo)."
    },
    
    pesoIdeal: {
        macho: "25-45 kg",
        hembra: "25-40 kg"
    },
    
    esperanzaVida: "12-14 años",
    
    temperamento: {
        personalidad: "Leal, inteligente, reservado, protector",
        nivelEnergia: "Muy Alto",
        sociabilidad: {
            conHumanos: "Leal extremo con familia",
            conNiños: "⚠️ Supervisión estricta",
            conPerros: "Dominante",
            conExtraños: "Reservado, territorial"
        },
        adiestramiento: "Difícil - Solo expertos",
        ladridos: "Bajo - Aúlla como lobo",
        caracteristicas: ["Instinto de manada fuerte", "NO para principiantes", "Muy inteligente", "Territorial"]
    },
    
    alimentacion: {
        tipoAlimento: "Premium alta proteína (35-40%)",
        calorias: "1800-2500 cal/día",
        comidas: {
            cachorro: "4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día"
        },
        alertas: ["Prefiere carne fresca o BARF", "Evitar cereales", "Huesos carnosos buenos"]
    },
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa densa, pelo semi-largo",
        cepillado: {
            frecuencia: "3-4 veces/semana, diario en muda",
            herramientas: ["Slicker", "Rastrillo subpelo"]
        },
        baño: {
            frecuencia: "Cada 2-3 meses"
        },
        botanican: {
            recomendado: "Shampoo Verde Botánico 7en1",
            link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
            porque: "Perro activo de exterior. Verde repelente ideal para protección contra parásitos y mantener pelaje denso limpio.",
            beneficios: ["Repelente natural pulgas/garrapatas", "Antihongos", "pH balanceado", "Ingredientes naturales"]
        }
    },
    
    tipsEspecificos: [
        "🐺 NO para principiantes",
        "🏃 MÍNIMO 2-3 horas ejercicio diario",
        "🏠 NO apto departamento",
        "🍖 Dieta alta proteína animal"
    ],
    
    saludPublica: {
        requiereLicencia: true,
        restricciones: "Requiere registro especial FCM"
    }
}

];
