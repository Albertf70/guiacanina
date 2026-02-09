/**
 * GUÍACANINA - BASE DE DATOS DE RAZAS
 * Información completa sobre 35 razas de perros
 * Incluye: Origen, temperamento, salud, alimentación, cuidados, BotaniCan, salud pública
 */

const BREEDS_DATABASE = [

// ============================================
// RAZAS MEXICANAS (Patrimonio Cultural)
// ============================================


{
    id: "chihuahua",
    nombre: "Chihuahua",
    nombresAlternativos: ["Chi", "Chihuahueño"],
    categoria: "mexicanas",
    imagen: "🐕",
    tamaño: "Pequeñas",
    
    origen: {
        pais: "México 🇲🇽",
        epoca: "Antigua civilización Tolteca",
        historia: "Raza MÁS ANTIGUA de América. Los Toltecas criaban el 'Techichi' (ancestro del Chihuahua). Cuando los Aztecas conquistaron a los Toltecas, refinaron la raza. Considerado sagrado y acompañante de los muertos al más allá."
    },
    
    pesoIdeal: {
        adulto: "1.5-3 kg"
    },
    
    esperanzaVida: "14-18 años (una de las razas más longevas)",
    
    temperamento: {
        personalidad: "Alerta, devoto, valiente, vivaz",
        nivelEnergia: "Media-Alta",
        sociabilidad: {
            conHumanos: "MUY apegado a UNA persona principalmente",
            conNiños: "NO recomendado con niños pequeños (muy frágil)",
            conPerros: "Prefiere otros Chihuahuas, puede ser agresivo con perros grandes",
            conExtraños: "Desconfiado, ladrador"
        },
        adiestramiento: "Moderadamente fácil - Inteligente pero puede ser terco",
        ladridos: "MUY Alto - Excelente perro de alerta",
        caracteristicas: [
            "Personalidad ENORME en cuerpo pequeño",
            "NO tiene noción de su tamaño pequeño (enfrentará perros grandes)",
            "Tiembla fácilmente (frío, emoción, miedo)",
            "Extremadamente leal a su dueño",
            "Puede sufrir 'síndrome del perro pequeño' si se malcría"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "⚠️ EXTREMADAMENTE FRÁGIL - Supervisión constante obligatoria",
                "Comidas cada 3-4 horas (prevenir hipoglucemia - CRÍTICO)",
                "Vacunación completa OBLIGATORIA",
                "Socialización temprana pero controlada",
                "NO ejercicio excesivo (huesos muy frágiles)",
                "Temperatura ambiente cálida (pierden calor corporal rápidamente)",
                "MUCHO CUIDADO con niños pequeños - pueden lastimarlo fatalmente"
            ],
            alertasEspeciales: [
                "🚨 Hipoglucemia es COMÚN y MORTAL en cachorros - Síntomas: debilidad, temblores, convulsiones",
                "🚨 Fontanela abierta (mollera) - NO golpes en cabeza - puede NO cerrar nunca",
                "🚨 Extremadamente vulnerable a fracturas por caídas mínimas"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio moderado 20-30 min diarios",
                "2-3 comidas pequeñas al día",
                "Revisión veterinaria anual",
                "Cepillado 2-3 veces por semana",
                "Protección del frío OBLIGATORIA (suéteres/abrigos)",
                "Limpieza dental regular (muy propenso a problemas dentales)",
                "Socialización continua para evitar agresividad"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio suave 15-20 min",
                "Chequeos veterinarios cada 6 meses",
                "Vigilar problemas dentales SEVEROS",
                "Suplementos para luxación de rótula",
                "Alimento senior fácil de masticar",
                "Mantener muy abrigado (mayor sensibilidad al frío)",
                "Exámenes cardíacos anuales (soplos comunes)"
            ],
            enfermedadesComunes: [
                "Enfermedad de válvula cardíaca",
                "Luxación de rótula",
                "Colapso traqueal",
                "Pérdida dental severa",
                "Hidrocefalia",
                "Hipoglucemia"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas toy - ALTA densidad nutricional",
        calorias: "40-50 cal/kg peso corporal",
        comidas: {
            cachorro: "4 veces al día (porciones MUY pequeñas - riesgo hipoglucemia ALTO)",
            adulto: "2-3 veces al día (estómago muy pequeño)",
            senior: "2-3 veces al día (porciones aún más pequeñas)"
        },
        alertas: [
            "⚠️ CRÍTICO: Muy propenso a HIPOGLUCEMIA - comidas frecuentes OBLIGATORIAS",
            "Porciones muy pequeñas (estómago tamaño de una nuez)",
            "Evitar alimentos duros (problemas dentales frecuentes)",
            "NO dar huesos pequeños (riesgo de asfixia)",
            "Agua fresca siempre disponible",
            "Evitar sobrealimentación (obesidad = problemas articulares)"
        ],
        suplementos: [
            "Calcio para huesos frágiles",
            "Omega 3 para piel y pelaje",
            "Glucosamina para articulaciones (luxación rótula común)"
        ]
    },
    
    problemasCongenitos: [
        "Luxación de rótula (EXTREMADAMENTE COMÚN - 40%+ de la raza)",
        "Fontanela abierta (mollera no cierra - 80-90% de Chihuahuas)",
        "Hidrocefalia (agua en el cerebro)",
        "Hipoglucemia (azúcar baja - CRÍTICO en cachorros)",
        "Enfermedad de válvula cardíaca",
        "Colapso traqueal",
        "Problemas dentales severos (dientes apiñados)",
        "Ojos saltones (propenso a lesiones oculares)"
    ],
    
    saludComun: [
        "Problemas dentales (casi TODOS los Chihuahuas)",
        "Temblores (frío, emoción, hipoglucemia)",
        "Luxación de rótula",
        "Tos (colapso traqueal)",
        "Ojos llorosos/secos",
        "Obesidad (muy común por sobrealimentación)"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto o largo (dos variedades)",
        
        cepillado: {
            frecuencia: {
                peloCorto: "1-2 veces por semana",
                peloLargo: "3-4 veces por semana (prevenir nudos)"
            },
            herramientas: [
                {
                    herramienta: "Cepillo de cerdas suaves",
                    funcion: "Para pelo corto - elimina pelo muerto",
                    obligatorio: true
                },
                {
                    herramienta: "Cepillo slicker pequeño",
                    funcion: "Para pelo largo - previene nudos",
                    obligatorio: false
                }
            ]
        },
        
        baño: {
            frecuencia: "Cada 3-4 semanas",
            cuidadosEspeciales: [
                "Agua tibia (NO caliente ni fría - pierden temperatura rápido)",
                "Secar COMPLETAMENTE (se enfrían muy fácil)",
                "Proteger oídos del agua",
                "Shampoo suave (piel sensible)",
                "NO mojar la cabeza directamente (fontanela puede estar abierta)"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Principal",
                    porque: "El Chihuahua tiene piel MUY sensible y tiembla fácilmente. El Suave es hipoalergénico, no irrita, y mantiene la temperatura corporal mejor durante el baño. Ideal para una raza tan delicada.",
                    beneficios: [
                        "Hipoalergénico para piel ultra sensible",
                        "No irrita (perfecto para raza delicada)",
                        "Hidrata piel que se reseca fácil",
                        "Suave con ojos saltones",
                        "Mantiene aceites naturales"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Cada 3-4 semanas"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "✅ NUNCA dejar solo con niños pequeños (puede morir por accidente)",
        "✅ Suéteres/abrigos en clima frío OBLIGATORIOS",
        "✅ Evitar que salte de muebles (fracturas fáciles)",
        "✅ Limpieza dental profesional anual CRÍTICA",
        "⚠️ Glucosa/miel a mano para emergencias de hipoglucemia",
        "✅ Socialización desde cachorro (evita 'síndrome perro pequeño')",
        "⚠️ NO usar collar (colapso traqueal) - usar ARNÉS siempre"
    ],
    
    alertasCriticas: [
        "🚨 Temblores + debilidad + encías pálidas = HIPOGLUCEMIA - Dar miel y VET INMEDIATO",
        "🚨 Tos constante que empeora = Colapso traqueal - VET",
        "🚨 Cojera súbita = Luxación rótula - VET"
    ],
    
    saludPublica: {
        desparasitacion: {
            frecuencia: "Cada 3 meses",
            importancia: "Crítico para salud pública"
        }
    },
    
    costoMantenimiento: {
        nivel: "Medio",
        alimentacion: "Baja (come muy poco)",
        veterinario: "Alto (problemas dentales, luxación rótula)",
        grooming: "Bajo (puede hacerse en casa)",
        medicamentos: "Variable (dental puede ser costoso)"
    }
},

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
                    prioridad: "Principal - ESENCIAL",
                    porque: "El Schnauzer es propenso a comedones ('Schnauzer bumps'), dermatitis seborreica y prurito. Verde tiene propiedades ANTIBACTERIANAS y ANTIFÚNGICAS que controlan los comedones, previenen infecciones de piel y alivian la comezón. Perfecto para esta raza que tiene piel grasa y propensa a problemas.",
                    beneficios: [
                        "Controla comedones (Schnauzer bumps)",
                        "Antibacterial + Antifúngico",
                        "Alivia prurito",
                        "Controla seborrea",
                        "Previene infecciones de piel",
                        "Limpieza profunda sin resecar"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 4-6 semanas"
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario - Piel sensible/Alergias",
                    porque: "Schnauzers frecuentemente desarrollan alergias de piel. Si tu Schnauzer se rasca, tiene piel roja o irritada, alternar con Suave que es hipoalergénico y calma la inflamación.",
                    beneficios: [
                        "Calma alergias",
                        "Hipoalergénico",
                        "Reduce comezón",
                        "Hidrata piel sensible"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Alternar con Verde si hay alergias o irritación severa"
                }
            ],
            
            alertaProblemasPiel: {
                titulo: "⚠️ Schnauzer = Propenso a comedones y seborrea",
                estadistica: "40-60% de Schnauzers desarrollan comedones (Schnauzer bumps)",
                sintomasComunes: [
                    "Puntos negros en espalda (comedones)",
                    "Piel grasa",
                    "Comezón",
                    "Costras en piel",
                    "Mal olor",
                    "Infecciones secundarias"
                ],
                causas: [
                    "Producción excesiva de sebo (genético)",
                    "Folículos pilosos obstruidos",
                    "Dermatitis seborreica",
                    "Alergias (empeoran comedones)"
                ],
                solucion: {
                    producto: "Shampoo Verde Botánico 7en1 - YA RECOMENDADO",
                    porque: "Verde controla la producción de sebo, elimina comedones con sus propiedades antibacterianas y previene infecciones secundarias. Uso regular mantiene piel saludable.",
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    protocolo: "Usar regularmente cada 4-6 semanas. En casos severos, baños cada 2-3 semanas hasta controlar.",
                    adicional: "Combinar con dieta baja en grasas (crítico para Schnauzers por riesgo de pancreatitis)"
                }
            }
        }
    },
    
    tipsEspecificos: [
        "✅ Cepillado 2-3 veces semana MÍNIMO",
        "✅ Limpieza de barba DIARIA obligatoria",
        "✅ Grooming profesional cada 6-8 semanas NO NEGOCIABLE",
        "⚠️ Dieta baja en grasas ESTRICTA (pancreatitis)",
        "✅ NO dar comida de mesa NUNCA",
        "⚠️ Vigilar comedones en espalda",
        "✅ Limpieza de oídos semanal",
        "✅ Control de peso estricto"
    ],
    
    alertasCriticas: [
        "🚨 Vómito + diarrea + dolor abdominal = Pancreatitis - VET URGENTE",
        "🚨 Letargo + ictericia = Problema hepático - VET",
        "🚨 Rascado orejas + mal olor = Infección - VET"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Media (bajo en grasas)", 
        veterinario: "Alto (pancreatitis, dental)",
        grooming: "MUY Alto ($400-800 cada 6-8 semanas - OBLIGATORIO)"
    }
},


{
    id: "golden-retriever",
    nombre: "Golden Retriever",
    nombresAlternativos: ["Golden"],
    categoria: "grandes",
    imagen: "🐕",
    tamaño: "Grandes",
    
    origen: {
        pais: "Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        epoca: "Siglo XIX (1860s)",
        historia: "Desarrollado en Escocia por Lord Tweedmouth cruzando Retriever amarillo con Tweed Water Spaniel (extinto). Criado para cobrar aves acuáticas en caza. Una de las razas más populares del mundo."
    },
    
    pesoIdeal: {
        macho: "29-34 kg",
        hembra: "25-29 kg"
    },
    
    esperanzaVida: "10-12 años",
    
    temperamento: {
        personalidad: "Amigable, inteligente, leal, paciente, confiable",
        nivelEnergia: "Alta",
        sociabilidad: {
            conHumanos: "EXCELENTE - Extremadamente amigable con TODOS",
            conNiños: "EXCELENTE - Paciente, gentil, protector",
            conPerros: "EXCELENTE - Muy sociable",
            conExtraños: "EXCELENTE - Amigable (PÉSIMO guardián)"
        },
        adiestramiento: "MUY FÁCIL - Raza #4 más inteligente del mundo",
        ladridos: "Bajo-Medio",
        caracteristicas: [
            "Perro de familia PERFECTO",
            "Sonrisa característica constante",
            "Extremadamente amigable con TODOS",
            "Excelente perro de terapia/asistencia",
            "Ama el agua - nadador excepcional",
            "Cola siempre meneando",
            "Muy inteligente y obediente",
            "Raza #3 más popular del mundo"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización temprana (aunque naturalmente sociable)",
                "3-4 comidas al día",
                "Ejercicio moderado (NO excesivo - displasia)",
                "Entrenamiento desde cachorro (aprenden rápido)",
                "Cepillado diario desde cachorro",
                "NO subir/bajar escaleras hasta 12 meses",
                "Exposición al agua (aman nadar)"
            ],
            alertasEspeciales: [
                "Crecimiento rápido - controlar ejercicio",
                "Pueden comer CUALQUIER COSA - vigilar"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio intenso 1-1.5 horas diarias",
                "2 comidas al día",
                "Cepillado 3-4 veces semana MÍNIMO (DIARIO ideal)",
                "Natación - excelente ejercicio",
                "Estimulación mental",
                "Revisión veterinaria anual",
                "Control de peso (obesidad común)"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 45-60 min",
                "Chequeos cada 6 meses",
                "Vigilar cáncer (MUY COMÚN - 60%)",
                "Displasia de cadera",
                "Suplementos articulaciones OBLIGATORIO",
                "Control de peso crítico",
                "Natación - excelente para articulaciones senior"
            ],
            enfermedadesComunes: [
                "Cáncer (hemangiosarcoma, linfoma) - 60% mueren de cáncer",
                "Displasia de cadera/codo",
                "Problemas cardíacos",
                "Cataratas",
                "Hipotiroidismo"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas grandes activas",
        calorias: "1,400-1,800 cal/día según actividad",
        comidas: {
            cachorro: "3-4 veces al día (crecimiento controlado)",
            adulto: "2 veces al día",
            senior: "2 veces al día (reducir calorías 20%)"
        },
        alertas: [
            "⚠️ EXTREMADAMENTE propenso a obesidad",
            "Aman comer - comerán CUALQUIER COSA",
            "Control de porciones ESTRICTO",
            "NO libre acceso a comida NUNCA",
            "Guardián terrible de su propia comida (otros perros la roban)"
        ],
        suplementos: [
            "Glucosamina + Condroitina (ESENCIAL - displasia común)",
            "Omega 3 (pelo, articulaciones, prevención cáncer)",
            "Antioxidantes (prevención cáncer)"
        ]
    },
    
    problemasCongenitos: [
        "Cáncer (hemangiosarcoma, linfoma, osteosarcoma) - 60%",
        "Displasia de cadera (MUY COMÚN - 20%+)",
        "Displasia de codo",
        "Cataratas juveniles",
        "Atrofia progresiva de retina",
        "Estenosis aórtica subvalvular (corazón)",
        "Hipotiroidismo",
        "Epilepsia"
    ],
    
    saludComun: [
        "Cáncer (EXTREMADAMENTE COMÚN - causa #1 muerte)",
        "Displasia de cadera/codo",
        "Obesidad (MUY COMÚN)",
        "Infecciones de oído (orejas caídas)",
        "Alergias de piel (moderado)",
        "Problemas dentales",
        "Hot spots (dermatitis húmeda)"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa densa y larga, muda MUCHO todo el año",
        
        cepillado: {
            frecuencia: {
                normal: "3-4 veces por semana MÍNIMO",
                ideal: "DIARIO",
                temporadaMuda: "DIARIO obligatorio (primavera y otoño - muda EXTREMA)"
            },
            herramientas: [
                {
                    herramienta: "Rastrillo de subpelo",
                    funcion: "Remueve subpelo denso (ESENCIAL)",
                    obligatorio: true
                },
                {
                    herramienta: "Cepillo slicker",
                    funcion: "Capa exterior y desenredar",
                    obligatorio: true
                },
                {
                    herramienta: "Peine metálico",
                    funcion: "Verifica nudos especialmente detrás orejas",
                    obligatorio: true
                }
            ],
            areasProblematicas: [
                "Detrás de orejas (nudos frecuentes)",
                "Patas ('pantalones')",
                "Cola (pluma larga)",
                "Pecho",
                "Axilas"
            ],
            mudaRealidad: "Golden Retriever muda TODO EL AÑO. Casa siempre cubierta de pelo dorado. Muda se intensifica 2 veces al año.",
            consecuenciasNoCepillar: [
                "Nudos dolorosos especialmente detrás orejas",
                "Subpelo apelmazado",
                "Hot spots por humedad atrapada",
                "Pelo en TODA la casa (ropa, muebles, comida)"
            ]
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas (o cuando esté sucio/huela)",
            proceso: [
                "1. Cepillar COMPLETAMENTE antes del baño",
                "2. Shampoo profundo (pelo muy denso)",
                "3. Enjuagar MUY bien (2-3 veces)",
                "4. Acondicionador OBLIGATORIO",
                "5. Secar completamente (prevenir hot spots)",
                "6. Cepillar mientras seca"
            ],
            cuidadosEspeciales: [
                "Secar MUY bien (doble capa densa retiene humedad)",
                "Limpiar orejas después del baño",
                "Revisar hot spots (dermatitis húmeda)"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Principal - ESENCIAL",
                    porque: "El Golden Retriever tiene doble capa densa y larga que se enreda fácilmente, especialmente detrás de las orejas, patas y cola. El acondicionador es CRÍTICO para facilitar el cepillado frecuente OBLIGATORIO, manejar la muda constante y mantener el hermoso pelaje dorado sedoso sin nudos. Sin acondicionador, el subpelo forma nudos en días.",
                    beneficios: [
                        "Desenreda pelo largo y denso",
                        "Facilita cepillado frecuente obligatorio",
                        "Maneja muda constante",
                        "Mantiene pelaje dorado sedoso y brillante",
                        "Previene nudos detrás de orejas",
                        "Reduce tiempo de cepillado",
                        "Mantiene textura característica"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Cada 6-8 semanas + cepillado 3-4 veces semana mínimo"
                },
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Complementario - Muy activo/nadador",
                    porque: "Golden Retrievers AMAN el agua y nadar. Verde para limpieza profunda después de nadar en lagos/mar y repelente de parásitos.",
                    beneficios: [
                        "Limpieza profunda post-natación",
                        "Repele parásitos",
                        "Antibacterial + Antifúngico"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Alternar con Cero Nudos si nada frecuentemente"
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario - Piel sensible",
                    porque: "Algunos Goldens desarrollan alergias de piel o hot spots. Suave para calmar piel irritada.",
                    beneficios: [
                        "Calma hot spots",
                        "Hipoalergénico",
                        "Reduce comezón"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Si presenta alergias o hot spots"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "✅ Cepillado 3-4 veces semana MÍNIMO (diario ideal)",
        "✅ Ejercicio intenso diario - natación EXCELENTE",
        "⚠️ Control de peso ESTRICTO (obesidad muy común)",
        "🚨 Vigilar bultos/masas constantemente (cáncer 60%)",
        "✅ Chequeos veterinarios regulares después de 7 años",
        "✅ Suplementos articulaciones desde adulto joven",
        "⚠️ Prepararse para PELO en toda la casa SIEMPRE",
        "✅ Excelente para familias con niños",
        "✅ Perro de terapia/asistencia ideal"
    ],
    
    alertasCriticas: [
        "🚨 Bulto/masa en cuerpo = VET INMEDIATO (cáncer MUY común)",
        "🚨 Debilidad súbita + abdomen hinchado = Hemangiosarcoma - EMERGENCIA",
        "🚨 Cojera persistente = Displasia/cáncer huesos - VET",
        "🚨 Hot spots (piel húmeda roja) = Dermatitis - VET"
    ],
    
    realidadDeLaRaza: {
        titulo: "💛 GOLDEN RETRIEVER - PERRO PERFECTO CON SOMBRA DE CÁNCER",
        verdades: [
            "Temperamento PERFECTO - amigable, paciente, leal",
            "Excelente con niños - perro de familia ideal",
            "Inteligente y fácil de entrenar",
            "Sociable con TODOS (humanos, perros, gatos)",
            "",
            "⚠️ REALIDAD DEL CÁNCER:",
            "  - 60% de Golden Retrievers mueren de cáncer",
            "  - Tasa MÁS ALTA de cáncer entre todas las razas",
            "  - Hemangiosarcoma (bazo/corazón) muy común",
            "  - Linfoma, osteosarcoma también frecuentes",
            "  - Muchos mueren entre 8-10 años por cáncer",
            "  - Vigilancia constante de bultos/masas CRÍTICA",
            "",
            "OTROS ASPECTOS:",
            "  - Muda CONSTANTEMENTE - pelo en toda la casa",
            "  - Propenso a obesidad (aman comer)",
            "  - Displasia de cadera común (20%+)",
            "  - Infecciones de oído frecuentes",
            "",
            "MEJOR PARA:",
            "  - Familias con niños",
            "  - Personas activas que aman nadar/caminar",
            "  - Quien quiere perro amigable con TODOS",
            "  - Preparados emocionalmente para cáncer (60% probabilidad)",
            "",
            "CONSIDERACIÓN:",
            "  - Costos veterinarios oncológicos: $50,000-200,000 MXN",
            "  - Preparación emocional para posible pérdida temprana"
        ],
        consideracion: "Golden Retriever es PERFECTO en temperamento pero tiene la tasa de cáncer MÁS ALTA de todas las razas. Prepararse emocionalmente y financieramente."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Alta (come bastante + premium)", 
        veterinario: "MUY Alto (cáncer 60%, displasia, chequeos oncológicos regulares)",
        grooming: "Medio (puede hacerse en casa con dedicación)",
        limpieza: "Alto (pelo CONSTANTE en toda la casa)",
        oncologia: "EXTREMADAMENTE Alto si desarrolla cáncer ($50K-200K MXN)"
    }
},

{
    id: "labrador-retriever",
    nombre: "Labrador Retriever",
    nombresAlternativos: ["Labrador", "Lab"],
    categoria: "grandes",
    imagen: "🐕",
    tamaño: "Grandes",
    
    origen: {
        pais: "Canadá 🇨🇦",
        epoca: "Siglo XIX",
        historia: "Desarrollado en Terranova, Canadá (NO Labrador). Criado por pescadores para recuperar redes y peces. Llevado a Inglaterra donde se refinó. Perro #1 más popular del mundo durante 30+ años consecutivos."
    },
    
    pesoIdeal: {
        macho: "29-36 kg",
        hembra: "25-32 kg"
    },
    
    esperanzaVida: "10-12 años",
    
    temperamento: {
        personalidad: "Amigable, extrovertido, activo, gentil, inteligente",
        nivelEnergia: "MUY Alta",
        sociabilidad: {
            conHumanos: "EXCELENTE - Extremadamente amigable con TODOS",
            conNiños: "EXCELENTE - Paciente, juguetón, protector",
            conPerros: "EXCELENTE - Muy sociable",
            conExtraños: "EXCELENTE - Amigable (PÉSIMO guardián)"
        },
        adiestramiento: "MUY FÁCIL - Raza #7 más inteligente, ansioso por complacer",
        ladridos: "Bajo-Medio",
        caracteristicas: [
            "Raza #1 más popular del mundo (30+ años)",
            "Perro de familia PERFECTO",
            "OBSESIONADO con comida",
            "Ama el agua - patas palmeadas",
            "Cola de 'nutria' característica",
            "Extremadamente amigable con TODOS",
            "Excelente perro de servicio/asistencia/rescate",
            "Viene en 3 colores: negro, chocolate, amarillo"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización temprana (aunque naturalmente sociable)",
                "3-4 comidas al día",
                "Ejercicio moderado (NO excesivo - displasia)",
                "Entrenamiento desde cachorro",
                "Control de impulso de comida (guardará/robará comida)",
                "NO subir/bajar escaleras hasta 12 meses",
                "Exposición al agua (aman nadar)"
            ],
            alertasEspeciales: [
                "Comerán CUALQUIER COSA - vigilancia constante",
                "Muy enérgicos - pueden ser destructivos sin ejercicio"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 1.5-2 horas diarias",
                "2 comidas al día (porciones MEDIDAS)",
                "Cepillado 2-3 veces semana",
                "Natación - excelente ejercicio",
                "Estimulación mental",
                "Control de peso ESTRICTO (obesidad muy común)",
                "Revisión veterinaria anual"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 45-60 min",
                "Chequeos cada 6 meses",
                "Vigilar obesidad (metabolismo baja)",
                "Displasia de cadera severa",
                "Suplementos articulaciones OBLIGATORIO",
                "Control de peso CRÍTICO",
                "Reducir calorías 20-25%"
            ],
            enfermedadesComunes: [
                "Displasia de cadera/codo (MUY COMÚN)",
                "Obesidad severa",
                "Problemas articulares",
                "Cataratas",
                "Hipotiroidismo",
                "Cáncer (común pero menos que Golden)"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas grandes activas, control de peso",
        calorias: "1,400-1,800 cal/día según actividad",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día (porciones ESTRICTAMENTE medidas)",
            senior: "2 veces al día (reducir calorías 20-25%)"
        },
        alertas: [
            "⚠️ EXTREMADAMENTE propenso a obesidad - 60%+",
            "OBSESIONADO con comida - comerá hasta explotar",
            "Control de porciones CRÍTICO - medir SIEMPRE",
            "NO libre acceso a comida NUNCA",
            "Guardará comida, robará de basura/mesa/otros perros",
            "Puede desarrollar hinchazón por comer demasiado rápido"
        ],
        suplementos: [
            "Glucosamina + Condroitina (ESENCIAL - displasia común)",
            "Omega 3 (articulaciones, pelo)",
            "Control de peso si tiende a obesidad"
        ]
    },
    
    problemasCongenitos: [
        "Displasia de cadera (EXTREMADAMENTE COMÚN - 25%+)",
        "Displasia de codo",
        "Obesidad (predisposición genética fuerte)",
        "Atrofia progresiva de retina",
        "Cataratas",
        "Colapso inducido por ejercicio (EIC)",
        "Miopatía hereditaria (músculos)",
        "Hipotiroidismo"
    ],
    
    saludComun: [
        "Obesidad (60%+ tienen sobrepeso)",
        "Displasia de cadera/codo",
        "Infecciones de oído (orejas caídas)",
        "Alergias de piel (común)",
        "Hot spots (dermatitis húmeda)",
        "Problemas articulares",
        "Hipotiroidismo"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa corta-media densa, muda MUCHO",
        
        cepillado: {
            frecuencia: {
                normal: "2-3 veces por semana",
                temporadaMuda: "DIARIO (primavera y otoño - muda intensa)"
            },
            herramientas: [
                {
                    herramienta: "Rastrillo de subpelo",
                    funcion: "Remueve subpelo denso (ESENCIAL en muda)",
                    obligatorio: true
                },
                {
                    herramienta: "Cepillo slicker",
                    funcion: "Pelo muerto y capa exterior",
                    obligatorio: true
                }
            ],
            mudaRealidad: "Labrador muda TODO EL AÑO. Pelo corto pero MUCHO. Casa siempre con pelo.",
            consecuenciasNoCepillar: [
                "Pelo en TODA la casa",
                "Subpelo acumulado",
                "Olor a perro más fuerte"
            ]
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas (o cuando huela/esté sucio)",
            cuidadosEspeciales: [
                "Limpiar orejas después del baño",
                "Secar bien (prevenir hot spots)",
                "Revisar entre dedos (patas palmeadas)"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Labrador es perro EXTREMADAMENTE activo, enérgico y OBSESIONADO con el agua. Nada en cualquier charco, lago, mar. Verde limpia profundamente después de natación/lodo, repele parásitos (alta exposición por actividad constante) y tiene propiedades antibacterianas. Perfecto para raza tan activa y acuática.",
                    beneficios: [
                        "Limpieza profunda post-natación/lodo",
                        "Repele parásitos 14 días",
                        "Antibacterial + Antifúngico",
                        "Controla olor por actividad intensa",
                        "Ideal para perros acuáticos muy activos"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 6-8 semanas (más frecuente si nada mucho)"
                },
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Complementario - Facilita muda",
                    porque: "Durante temporada de muda intensa, Cero Nudos facilita remoción del subpelo muerto.",
                    beneficios: [
                        "Facilita muda",
                        "Reduce pelo en casa",
                        "Desenreda subpelo"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Alternar con Verde durante muda intensa"
                }
            ],
            
            alertaParasitos: {
                titulo: "⚠️ Labrador = OBSESIÓN por agua - Alta exposición",
                descripcion: "Labradores se meten en CUALQUIER agua - charcos, lagos, lodo, mar. Alta exposición a parásitos acuáticos.",
                recomendacion: {
                    producto: "Shampoo Verde Botánico 7en1 - YA RECOMENDADO",
                    porque: "Verde incluye repelente de parásitos por 14 días. Protección esencial para perros acuáticos.",
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    protocolo: "Baño después de nadar + desparasitación regular"
                }
            }
        }
    },
    
    tipsEspecificos: [
        "✅ Ejercicio INTENSO 1.5-2 horas diarias - destructivo sin ejercicio",
        "🚨 Control de peso EXTREMADAMENTE ESTRICTO (obesidad 60%+)",
        "⚠️ Medir SIEMPRE las porciones - NUNCA libre acceso",
        "✅ Guardar basura/comida INACCESIBLE (robará todo)",
        "✅ Natación - ejercicio PERFECTO para articulaciones",
        "⚠️ Cepillado 2-3 veces semana (diario en muda)",
        "✅ Suplementos articulaciones desde adulto joven",
        "🚨 NO sobrealimentar - obesidad = displasia peor",
        "✅ Excelente para familias activas"
    ],
    
    alertasCriticas: [
        "🚨 Obesidad = Displasia severa + diabetes + problemas cardíacos - VET",
        "🚨 Cojera persistente = Displasia - VET",
        "🚨 Colapso durante ejercicio = EIC - VET URGENTE",
        "🚨 Hot spots (piel húmeda roja) = Dermatitis - VET"
    ],
    
    realidadDeLaRaza: {
        titulo: "🐕 LABRADOR - PERRO #1 DEL MUNDO CON PROBLEMA #1: OBESIDAD",
        verdades: [
            "Raza #1 más popular del mundo (30+ años consecutivos)",
            "Temperamento PERFECTO - amigable, leal, paciente",
            "Excelente con niños y familias",
            "Inteligente y fácil de entrenar",
            "",
            "⚠️ REALIDAD DE LA OBESIDAD:",
            "  - 60%+ de Labradores tienen sobrepeso/obesidad",
            "  - OBSESIONADOS con comida genéticamente",
            "  - Comerán hasta literalmente explotar",
            "  - Obesidad + displasia = sufrimiento severo",
            "  - Control de peso NO es opcional - es CRÍTICO",
            "  - Predisposición genética a engordar fácilmente",
            "",
            "OTROS ASPECTOS:",
            "  - Displasia de cadera MUY común (25%+)",
            "  - Muda constantemente - pelo en toda casa",
            "  - Energía ALTA - necesita 1.5-2 horas ejercicio",
            "  - Aman agua - se meterán en CUALQUIER charco",
            "",
            "MEJOR PARA:",
            "  - Familias activas con niños",
            "  - Personas con tiempo para ejercicio intenso",
            "  - Quien puede controlar peso estrictamente",
            "  - Acceso a natación (excelente ejercicio)",
            "",
            "NO PARA:",
            "  - Personas sedentarias",
            "  - Quien no puede controlar tentación de sobrealimentar",
            "  - Vida en departamento sin compromiso ejercicio"
        ],
        consideracion: "Labrador es INCREÍBLE pero requiere control de peso ESTRICTO de por vida. Sin control = obesidad garantizada + problemas severos."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico - Alta exposición por natación/agua" }},
    costoMantenimiento: { 
        nivel: "Medio-Alto", 
        alimentacion: "Media-Alta (control de peso - alimento premium)", 
        veterinario: "Alto (displasia común, obesidad y consecuencias)",
        grooming: "Bajo (puede hacerse en casa)",
        ejercicio: "Alto (natación, caminatas largas - necesario)",
        suplementos: "Medio-Alto (articulaciones de por vida)"
    }
},

{
    id: "pug",
    nombre: "Pug",
    nombresAlternativos: ["Carlino", "Doguillo"],
    categoria: "pequeñas",
    imagen: "🐕",
    tamaño: "Pequeñas",
    
    origen: {
        pais: "China 🇨🇳",
        epoca: "400 a.C.",
        historia: "Criado en China como perro de compañía para la realeza. Muy valorado por emperadores chinos. Llevado a Europa en el siglo XVI."
    },
    
    pesoIdeal: {
        adulto: "6-8 kg"
    },
    
    esperanzaVida: "12-15 años",
    
    temperamento: {
        personalidad: "Encantador, travieso, cariñoso, sociable",
        nivelEnergia: "Baja-Media",
        sociabilidad: {
            conHumanos: "Excelente - Ama estar con gente",
            conNiños: "Muy buena - Juguetón y paciente",
            conPerros: "Buena - Amigable",
            conExtraños: "Amigable"
        },
        adiestramiento: "Moderado - Puede ser terco",
        ladridos: "Bajo-Medio",
        caracteristicas: [
            "Payaso natural",
            "Sombra de su dueño",
            "Ronca MUCHO",
            "No tolera calor ni ejercicio intenso",
            "Extremadamente cariñoso"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "Limpieza de pliegues DIARIA desde cachorro",
                "3-4 comidas pequeñas al día",
                "Ejercicio MUY moderado (problemas respiratorios)",
                "Evitar calor extremo",
                "Socialización temprana"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio moderado 20-30 min (NO intenso)",
                "Limpieza de pliegues DIARIA obligatoria",
                "2 comidas al día",
                "Control de peso ESTRICTO",
                "Ambiente fresco (aire acondicionado en verano)"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio suave 15-20 min",
                "Chequeos cada 6 meses",
                "Vigilar problemas respiratorios (empeoran)",
                "Control de obesidad CRÍTICO",
                "Ambiente fresco siempre"
            ],
            enfermedadesComunes: [
                "Síndrome braquicéfalo severo",
                "Obesidad",
                "Problemas oculares",
                "Encefalitis del Pug"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas pequeñas, CONTROL DE PESO",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día (porciones controladas)",
            senior: "2 veces al día (reducir calorías)"
        },
        alertas: [
            "⚠️ MUY propenso a obesidad",
            "Control estricto de porciones",
            "NO dar comida de mesa",
            "Obesidad + problemas respiratorios = muerte prematura"
        ]
    },
    
    problemasCongenitos: [
        "Síndrome braquicéfalo (respiración difícil)",
        "Proptosis ocular (ojos se salen)",
        "Encefalitis del Pug (enfermedad cerebral fatal)",
        "Displasia de cadera",
        "Problemas de columna",
        "Úlceras corneales"
    ],
    
    saludComun: [
        "Infecciones en pliegues faciales",
        "Problemas respiratorios",
        "Obesidad",
        "Problemas oculares",
        "Alergias de piel"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto, muda MUCHO",
        
        cepillado: {
            frecuencia: {
                normal: "2-3 veces por semana",
                temporadaMuda: "DIARIO"
            }
        },
        
        baño: {
            frecuencia: "Cada 3-4 semanas",
            cuidadosEspeciales: [
                "Limpieza de pliegues DIARIA (NO solo en baño)",
                "Secar MUY bien los pliegues",
                "Agua tibia (sensible a temperaturas)",
                "NO mojar cara directamente"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Principal",
                    porque: "El Pug tiene piel MUY sensible, pliegues faciales que se irritan fácilmente y es propenso a alergias. Suave es hipoalergénico, no irrita los pliegues delicados y mantiene la piel hidratada sin causar brotes.",
                    beneficios: [
                        "No irrita pliegues faciales",
                        "Hipoalergénico",
                        "Previene dermatitis en pliegues",
                        "Calma piel sensible"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Cada 3-4 semanas"
                }
            ],
            
            alertaProblemasPiel: {
                titulo: "⚠️ Pug = Pliegues faciales = Infecciones CONSTANTES",
                sintomasComunes: [
                    "Olor fuerte en pliegues",
                    "Enrojecimiento entre pliegues",
                    "Secreción en pliegues",
                    "Rascado de cara"
                ],
                solucion: {
                    producto: "Shampoo Suave + Limpieza diaria de pliegues",
                    porque: "Pliegues acumulan humedad, comida, suciedad = infecciones",
                    protocolo: "Limpiar pliegues DIARIAMENTE con toallita + baño cada 3-4 semanas"
                }
            }
        }
    },
    
    tipsEspecificos: [
        "✅ Limpieza de pliegues DIARIA - NO negociable",
        "⚠️ NO ejercicio en calor (puede morir)",
        "✅ Aire acondicionado en verano OBLIGATORIO",
        "⚠️ Control de peso CRÍTICO",
        "✅ Arnés siempre (NO collar - problemas respiratorios)"
    ],
    
    alertasCriticas: [
        "🚨 Jadeo excesivo + encías azules = Emergencia respiratoria",
        "🚨 Ojo salido = Proptosis - VET INMEDIATO",
        "🚨 Convulsiones = Posible encefalitis - VET"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { nivel: "Alto", veterinario: "MUY Alto", grooming: "Bajo" }
},

{
    id: "teckel",
    nombre: "Teckel",
    nombresAlternativos: ["Dachshund", "Salchicha", "Wiener Dog"],
    categoria: "pequeñas",
    imagen: "🌭",
    tamaño: "Pequeñas",
    
    origen: {
        pais: "Alemania 🇩🇪",
        epoca: "Siglo XV",
        historia: "Criado en Alemania para cazar tejones ('Dachs' = tejón). Su cuerpo largo y patas cortas le permiten entrar en madrigueras."
    },
    
    pesoIdeal: {
        estandar: "7-14 kg",
        miniatura: "4-5 kg"
    },
    
    esperanzaVida: "12-16 años",
    
    temperamento: {
        personalidad: "Valiente, inteligente, terco, vivaz",
        nivelEnergia: "Media-Alta",
        sociabilidad: {
            conHumanos: "Muy apegado a su familia",
            conNiños: "Moderada (puede ser impaciente)",
            conPerros: "Variable (territorial)",
            conExtraños: "Desconfiado, ladrador"
        },
        adiestramiento: "Moderado - Muy inteligente pero TERCO",
        ladridos: "ALTO - Ladra mucho",
        caracteristicas: [
            "Cuerpo de salchicha, personalidad de león",
            "Extremadamente terco",
            "Cazador por instinto",
            "Cava compulsivamente",
            "NO tiene noción de su tamaño"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "NO saltar/subir escaleras NUNCA (columna frágil)",
                "3-4 comidas al día",
                "Socialización temprana (tiende a territorialidad)",
                "Entrenamiento desde cachorro (muy tercos)",
                "Rampa para subir/bajar muebles"
            ],
            alertasEspeciales: [
                "🚨 CRÍTICO: NO dejar saltar - 25% tendrán problemas de espalda"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio moderado 30-45 min",
                "NO saltos NI escaleras",
                "2 comidas al día",
                "Control de peso ESTRICTO (obesidad = parálisis)",
                "Rampa obligatoria",
                "Cepillado según tipo de pelo"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio suave 20-30 min",
                "Chequeos cada 6 meses",
                "Vigilar enfermedad de disco IVDD",
                "Suplementos para columna",
                "Mantener peso ideal CRÍTICO"
            ],
            enfermedadesComunes: [
                "Enfermedad de disco intervertebral (IVDD) - 25%",
                "Parálisis",
                "Problemas dentales severos",
                "Obesidad"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas pequeñas, control de peso",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día (porciones controladas ESTRICTO)",
            senior: "2 veces al día (reducir calorías)"
        },
        alertas: [
            "⚠️ CRÍTICO: Obesidad = Parálisis en Teckel",
            "Cada kilo extra = presión en columna",
            "Control de peso más importante que en cualquier otra raza",
            "NO dar comida de mesa"
        ]
    },
    
    problemasCongenitos: [
        "Enfermedad de disco intervertebral IVDD (25% de Teckels)",
        "Parálisis de patas traseras",
        "Epilepsia",
        "Diabetes",
        "Problemas cardíacos",
        "Luxación de rótula"
    ],
    
    saludComun: [
        "Problemas de espalda/columna (MUY COMÚN)",
        "Problemas dentales",
        "Obesidad",
        "Infecciones de oído (pelo largo)"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Tres variedades: Pelo corto, Pelo largo, Pelo duro",
        
        cepillado: {
            frecuencia: {
                peloCorto: "1-2 veces semana",
                peloLargo: "3-4 veces semana",
                peloDuro: "2-3 veces semana"
            }
        },
        
        baño: {
            frecuencia: "Cada 4-6 semanas"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Teckel es un cazador nato, cava compulsivamente y se mete en TODO. Verde limpia profundamente, repele parásitos (alta exposición por cavar) y tiene propiedades antibacterianas. Perfecto para perros tan activos y exploradores.",
                    beneficios: [
                        "Limpieza profunda (cava y se ensucia)",
                        "Repele parásitos",
                        "Antibacterial",
                        "Controla olor"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 4-6 semanas"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "🚨 NO SALTAR NUNCA - Usar rampa SIEMPRE",
        "🚨 NO escaleras - Cargar al perro",
        "✅ Control de peso CRÍTICO (obesidad = parálisis)",
        "✅ Arnés (NO collar - presión en cuello/espalda)",
        "⚠️ Síntomas IVDD: Cojera, no quiere moverse, llanto al tocarlo = VET URGENTE"
    ],
    
    alertasCriticas: [
        "🚨 NO puede mover patas traseras = EMERGENCIA - VET INMEDIATO",
        "🚨 Llanto al levantarlo = Dolor espalda - VET",
        "🚨 Se arrastra = Parálisis en progreso - VET YA"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { nivel: "Medio-Alto", veterinario: "Puede ser MUY Alto (IVDD)" }
},

{
    id: "husky-siberiano",
    nombre: "Husky Siberiano",
    nombresAlternativos: ["Siberian Husky", "Husky"],
    categoria: "grandes",
    imagen: "🐺",
    tamaño: "Grandes",
    
    origen: {
        pais: "Rusia/Siberia 🇷🇺",
        epoca: "3000 años atrás",
        historia: "Criado por el pueblo Chukchi en Siberia para tirar trineos en condiciones extremas. Increíble resistencia y adaptación al frío."
    },
    
    pesoIdeal: {
        macho: "20-27 kg",
        hembra: "16-23 kg"
    },
    
    esperanzaVida: "12-15 años",
    
    temperamento: {
        personalidad: "Amigable, inteligente, independiente, travieso",
        nivelEnergia: "MUY ALTA",
        sociabilidad: {
            conHumanos: "Amigable (NO perro guardián)",
            conNiños: "Buena con supervisión",
            conPerros: "Excelente",
            conExtraños: "Amigable con todos"
        },
        adiestramiento: "DIFÍCIL - Muy inteligente pero independiente/terco",
        ladridos: "Bajo - pero AÚLLA mucho",
        caracteristicas: [
            "Artista del escape - brinca cercas, cava, abre puertas",
            "Aúlla en vez de ladrar",
            "Necesita correr HORAS diarias",
            "Muda pelo 2 veces al año (EXTREMO)",
            "NO tolera calor",
            "Puede correr 150 km sin cansarse"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización intensiva",
                "3-4 comidas al día",
                "Ejercicio progresivo (evitar sobreesfuerzo)",
                "Entrenamiento desde cachorro (muy tercos)",
                "Patio muy seguro (escapistas expertos)",
                "Acostumbrar a cepillado desde cachorro"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 2+ horas DIARIAS mínimo",
                "2 comidas al día",
                "Cepillado 3-4 veces semana (diario en muda)",
                "Cerca alta y segura (saltan 2+ metros)",
                "Estimulación mental constante",
                "NO ejercicio en calor extremo"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 1-1.5 horas",
                "Chequeos cada 6 meses",
                "Vigilar cataratas",
                "Suplementos articulaciones",
                "Alimento senior"
            ],
            enfermedadesComunes: [
                "Cataratas",
                "Displasia de cadera",
                "Hipotiroidismo",
                "Problemas oculares"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium alto en proteína",
        calorias: "1,200-1,800 cal/día según actividad",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día"
        },
        alertas: [
            "Come menos de lo esperado para su tamaño",
            "Metabolismo eficiente (requiere menos comida)",
            "Alta proteína para energía",
            "Evitar ejercicio 1 hora antes/después de comer"
        ]
    },
    
    problemasCongenitos: [
        "Cataratas juveniles",
        "Atrofia progresiva de retina",
        "Distrofia corneal",
        "Displasia de cadera",
        "Hipotiroidismo",
        "Epilepsia"
    ],
    
    saludComun: [
        "Problemas oculares",
        "Alergias de piel (moderado)",
        "Infecciones de oído",
        "Problemas dentales"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa DENSA, muda 2 veces al año (EXTREMO)",
        
        cepillado: {
            frecuencia: {
                normal: "3-4 veces por semana",
                temporadaMuda: "DIARIO (primavera y otoño - muda INTENSA)"
            },
            herramientas: [
                {
                    herramienta: "Rastrillo de subpelo",
                    funcion: "ESENCIAL - remueve subpelo muerto",
                    obligatorio: true
                },
                {
                    herramienta: "Cepillo slicker",
                    funcion: "Desenreda capa exterior",
                    obligatorio: true
                }
            ],
            consecuenciasNoCepillar: [
                "Casa LLENA de pelo",
                "Nudos en subpelo",
                "Posibles hot spots"
            ]
        },
        
        baño: {
            frecuencia: "Cada 8-12 semanas (se autolimpian bien)",
            cuidadosEspeciales: [
                "Cepillar ANTES del baño (eliminar pelo muerto)",
                "Enjuagar MUY bien (doble capa densa)",
                "Secar completamente"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Principal",
                    porque: "El Husky tiene doble capa EXTREMADAMENTE densa que se enreda durante la muda intensa. Cero Nudos facilita enormemente el cepillado durante las 2 mudas anuales masivas y mantiene el pelaje manejable. Sin acondicionador, el subpelo se apelmaza severamente.",
                    beneficios: [
                        "Facilita muda masiva",
                        "Desenreda subpelo denso",
                        "Reduce tiempo de cepillado",
                        "Pelo brillante y saludable"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Cada 8-12 semanas"
                },
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Complementario",
                    porque: "Huskies muy activos, corren horas en exteriores. Verde repele parásitos.",
                    beneficios: [
                        "Protección antiparasitaria",
                        "Limpieza profunda"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Alternar con Cero Nudos si muy activo en exteriores"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "🚨 Necesita 2+ HORAS ejercicio DIARIO - NO negociable",
        "✅ Cerca alta (2+ metros) y SEGURA",
        "⚠️ Nunca sin correa (instinto de correr)",
        "✅ NO apto para clima cálido",
        "⚠️ Puede ser destructivo sin ejercicio suficiente",
        "✅ Entrenamiento profesional recomendado"
    ],
    
    alertasCriticas: [
        "🚨 Nublado en ojos = Cataratas - VET",
        "🚨 Jadeo excesivo en calor = Golpe de calor - EMERGENCIA"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { nivel: "Alto", alimentacion: "Media", veterinario: "Medio", grooming: "Alto (profesional en muda)" }
},

{
    id: "pastor-aleman",
    nombre: "Pastor Alemán",
    nombresAlternativos: ["German Shepherd", "Ovejero Alemán"],
    categoria: "grandes",
    imagen: "🐕‍🦺",
    tamaño: "Grandes",
    
    origen: {
        pais: "Alemania 🇩🇪",
        epoca: "Siglo XIX (1899)",
        historia: "Desarrollado por Max von Stephanitz para pastoreo de ovejas. Raza más versátil: policía, militar, búsqueda y rescate, perro de servicio. Raza #2 más popular del mundo."
    },
    
    pesoIdeal: {
        macho: "30-40 kg",
        hembra: "22-32 kg"
    },
    
    esperanzaVida: "9-13 años",
    
    temperamento: {
        personalidad: "Inteligente, leal, valiente, confiado, protector",
        nivelEnergia: "MUY Alta",
        sociabilidad: {
            conHumanos: "Leal a la familia, reservado con extraños",
            conNiños: "Excelente si se socializa",
            conPerros: "Buena con socialización temprana",
            conExtraños: "Protector, puede ser territorial"
        },
        adiestramiento: "MUY FÁCIL - Raza #3 más inteligente del mundo",
        ladridos: "Medio-Alto (alerta)",
        caracteristicas: [
            "Perro de trabajo por excelencia",
            "Necesita tener un 'trabajo'/propósito",
            "Extremadamente leal y protector",
            "Requiere líder fuerte",
            "Muy versátil - puede aprender cualquier cosa",
            "Instinto de pastoreo (puede 'pastorear' niños)"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización INTENSIVA desde 8 semanas (crítico)",
                "3-4 comidas al día",
                "Ejercicio moderado (NO excesivo - displasia)",
                "Entrenamiento de obediencia desde cachorro",
                "NO subir/bajar escaleras hasta 12 meses",
                "Exposición a diferentes personas, perros, situaciones"
            ],
            alertasEspeciales: [
                "Socialización inadecuada = Pastor territorial/agresivo",
                "Crecimiento rápido - controlar ejercicio"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 1.5-2 horas DIARIAS",
                "2 comidas al día",
                "Estimulación mental diaria OBLIGATORIA",
                "Cepillado 3-4 veces semana (muda constante)",
                "Entrenamiento continuo (necesita propósito)",
                "Revisión veterinaria anual"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 45-60 min",
                "Chequeos cada 6 meses",
                "Vigilar displasia de cadera (MUY COMÚN)",
                "Suplementos para articulaciones OBLIGATORIO",
                "Alimento senior",
                "Vigilar mielopatía degenerativa"
            ],
            enfermedadesComunes: [
                "Displasia de cadera (hasta 40%)",
                "Displasia de codo",
                "Mielopatía degenerativa (parálisis progresiva)",
                "Enfermedad de Von Willebrand",
                "Insuficiencia pancreática exocrina",
                "Hinchazón gástrica"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas grandes activas, alto en proteína",
        calorias: "1,500-2,000 cal/día según actividad",
        comidas: {
            cachorro: "3-4 veces al día (crecimiento controlado)",
            adulto: "2 veces al día (NUNCA una sola comida - hinchazón)",
            senior: "2 veces al día (reducir calorías 20-25%)"
        },
        alertas: [
            "⚠️ Propenso a hinchazón gástrica (MORTAL)",
            "SIEMPRE 2 comidas (nunca una sola grande)",
            "NO ejercicio 1 hora antes/después de comer",
            "Alimentación elevada recomendada",
            "Alta proteína para masa muscular"
        ],
        suplementos: [
            "Glucosamina + Condroitina (ESENCIAL para articulaciones)",
            "Omega 3 (piel, pelaje, articulaciones)",
            "Probióticos (estómago sensible común)"
        ]
    },
    
    problemasCongenitos: [
        "Displasia de cadera (30-40% de la raza)",
        "Displasia de codo",
        "Mielopatía degenerativa (DM - parálisis progresiva)",
        "Insuficiencia pancreática exocrina (EPI)",
        "Enfermedad de Von Willebrand (coagulación)",
        "Epilepsia",
        "Hemangiosarcoma (cáncer)",
        "Panosteitis (dolor en huesos jóvenes)"
    ],
    
    saludComun: [
        "Displasia de cadera/codo",
        "Alergias de piel (común)",
        "Infecciones de oído",
        "Problemas gastrointestinales",
        "Hot spots (dermatitis húmeda)",
        "Hinchazón gástrica"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa densa, muda TODO el año (intenso 2 veces al año)",
        
        cepillado: {
            frecuencia: {
                normal: "3-4 veces por semana MÍNIMO",
                temporadaMuda: "DIARIO (primavera y otoño)"
            },
            herramientas: [
                {
                    herramienta: "Rastrillo de subpelo",
                    funcion: "Remueve subpelo muerto (ESENCIAL)",
                    obligatorio: true
                },
                {
                    herramienta: "Cepillo slicker",
                    funcion: "Desenreda y elimina pelo suelto",
                    obligatorio: true
                },
                {
                    herramienta: "Peine metálico",
                    funcion: "Verifica nudos",
                    obligatorio: false
                }
            ],
            consecuenciasNoCepillar: [
                "Casa cubierta de pelo",
                "Nudos en subpelo",
                "Hot spots por pelo apelmazado",
                "Olor fuerte"
            ]
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas (o cuando esté sucio)",
            cuidadosEspeciales: [
                "Cepillar ANTES del baño",
                "Enjuagar MUY bien (doble capa densa)",
                "Secar completamente (prevenir hot spots)",
                "Limpiar orejas después del baño"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Pastor Alemán es perro de TRABAJO extremadamente activo, se mete en todo, patrulla constantemente. Verde limpia profundamente, repele parásitos (alta exposición por actividad) y tiene propiedades antibacterianas. Perfecto para raza tan activa y con tendencia a dermatitis.",
                    beneficios: [
                        "Limpieza profunda para perro muy activo",
                        "Repele parásitos 14 días",
                        "Antibacterial + Antifúngico",
                        "Controla olor característico",
                        "Previene hot spots"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 6-8 semanas"
                },
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Complementario - Temporada de muda",
                    porque: "Durante las 2 mudas anuales intensas, Cero Nudos facilita enormemente el cepillado y elimina el subpelo muerto más fácilmente.",
                    beneficios: [
                        "Facilita muda intensa",
                        "Desenreda subpelo",
                        "Reduce tiempo de cepillado"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Alternar con Verde durante muda (primavera/otoño)"
                }
            ],
            
            alertaParasitos: {
                titulo: "⚠️ Pastor Alemán = Perro de trabajo MUY activo - Alta exposición",
                descripcion: "Pastores son extremadamente activos, patrullan constantemente, exploran todo. Alta exposición a parásitos.",
                recomendacion: {
                    producto: "Shampoo Verde Botánico 7en1 - YA RECOMENDADO",
                    porque: "Verde incluye repelente de parásitos por 14 días. Protección esencial.",
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    protocolo: "Baño cada 6-8 semanas + revisión post-actividades"
                }
            }
        }
    },
    
    tipsEspecificos: [
        "✅ Ejercicio INTENSO DIARIO + estimulación mental OBLIGATORIO",
        "✅ Entrenamiento profesional ALTAMENTE recomendado",
        "✅ Socialización desde cachorro NO NEGOCIABLE",
        "⚠️ Necesita líder fuerte y consistente",
        "✅ Suplementos para articulaciones desde cachorro",
        "⚠️ Control de peso (obesidad + displasia = sufrimiento)",
        "✅ 2 comidas al día SIEMPRE (prevenir hinchazón)",
        "⚠️ No apto para dueños primerizos sin compromiso"
    ],
    
    alertasCriticas: [
        "🚨 Abdomen hinchado + inquietud = Hinchazón gástrica - EMERGENCIA MORTAL",
        "🚨 Cojera/debilidad patas traseras = Displasia/DM - VET",
        "🚨 Parálisis progresiva = Mielopatía degenerativa - VET"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Alta (come bastante + premium)", 
        veterinario: "MUY Alto (displasia, DM, problemas genéticos)",
        grooming: "Medio (puede hacerse en casa)",
        suplementos: "Alto (glucosamina de por vida)",
        entrenamiento: "Alto (profesional recomendado)"
    }
},


{
    id: "bulldog-frances",
    nombre: "Bulldog Francés",
    nombresAlternativos: ["Frenchie", "French Bulldog"],
    categoria: "pequeñas",
    imagen: "🐕",
    tamaño: "Pequeñas",
    
    origen: {
        pais: "Francia 🇫🇷",
        epoca: "Siglo XIX",
        historia: "Descendiente del Bulldog Inglés miniaturizado. Llevado a Francia por trabajadores ingleses, donde se popularizó enormemente. Raza de compañía perfecta."
    },
    
    pesoIdeal: {
        adulto: "8-14 kg"
    },
    
    esperanzaVida: "10-12 años",
    
    temperamento: {
        personalidad: "Juguetón, adaptable, inteligente, sociable",
        nivelEnergia: "Baja-Media",
        sociabilidad: {
            conHumanos: "EXCELENTE - Ama estar con gente",
            conNiños: "Muy buena - Juguetón y paciente",
            conPerros: "Buena (puede ser territorial machos)",
            conExtraños: "Amigable"
        },
        adiestramiento: "Moderado - Inteligente pero puede ser terco",
        ladridos: "Bajo (ladra poco)",
        caracteristicas: [
            "Perro de apartamento perfecto",
            "Orejas de murciélago distintivas",
            "Ronca MUCHO",
            "NO tolera calor ni ejercicio intenso",
            "Payaso - hace reír constantemente",
            "No puede nadar (cabeza pesada)"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "Limpieza de pliegues faciales DIARIA",
                "3-4 comidas pequeñas al día",
                "Ejercicio MUY moderado (problemas respiratorios)",
                "Evitar calor extremo SIEMPRE",
                "Socialización temprana",
                "NO nadar SIN chaleco (se hunden)"
            ],
            alertasEspeciales: [
                "Muy sensible a temperatura - pueden morir de golpe de calor",
                "Cesárea casi siempre necesaria (cabezas grandes)"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio moderado 20-30 min (NO intenso)",
                "2 comidas al día",
                "Limpieza de pliegues DIARIA",
                "Control de peso ESTRICTO",
                "Ambiente fresco (aire acondicionado en verano)",
                "NO ejercicio en horas de calor"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio suave 15-20 min",
                "Chequeos cada 6 meses",
                "Vigilar problemas respiratorios (empeoran)",
                "Control de obesidad CRÍTICO",
                "Ambiente fresco SIEMPRE"
            ],
            enfermedadesComunes: [
                "Síndrome braquicéfalo severo",
                "Problemas de columna (IVDD)",
                "Obesidad",
                "Problemas cardíacos"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas pequeñas, control de peso",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día (porciones controladas)",
            senior: "2 veces al día (reducir calorías)"
        },
        alertas: [
            "⚠️ MUY propenso a obesidad",
            "Obesidad + problemas respiratorios = MORTAL",
            "Control estricto de porciones",
            "NO dar comida de mesa",
            "Alergias alimentarias comunes"
        ],
        suplementos: [
            "Omega 3 (piel - muy propenso a alergias)",
            "Probióticos (estómago sensible)",
            "Glucosamina (prevención IVDD)"
        ]
    },
    
    problemasCongenitos: [
        "Síndrome braquicéfalo obstructivo (BOAS) - 50%+",
        "Enfermedad de disco intervertebral (IVDD)",
        "Malformaciones vertebrales (hemivértebras)",
        "Paladar elongado",
        "Estenosis de narinas",
        "Problemas oculares (úlceras, ojo seco)",
        "Alergias severas (piel y alimentarias)"
    ],
    
    saludComun: [
        "Problemas respiratorios SEVEROS",
        "Infecciones en pliegues faciales",
        "Alergias de piel (MUY COMÚN - 70%+)",
        "Dermatitis por levaduras",
        "Infecciones de oído",
        "Obesidad",
        "Golpe de calor"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto, muda moderadamente",
        
        cepillado: {
            frecuencia: {
                normal: "2-3 veces por semana"
            }
        },
        
        baño: {
            frecuencia: "Cada 3-4 semanas",
            cuidadosEspeciales: [
                "Limpieza de pliegues DIARIA (NO solo en baño)",
                "Secar MUY bien los pliegues",
                "Agua tibia (sensible a temperaturas)",
                "Secar completamente orejas"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Principal",
                    porque: "El Bulldog Francés tiene piel EXTREMADAMENTE sensible y es la raza #1 en alergias de piel. 70%+ desarrollan dermatitis atópica. Suave es hipoalergénico, no irrita los pliegues faciales delicados y calma la piel desde el primer baño. ESENCIAL para esta raza.",
                    beneficios: [
                        "Hipoalergénico (crítico para raza alérgica)",
                        "No irrita pliegues faciales",
                        "Calma dermatitis atópica",
                        "Reduce comezón inmediata",
                        "Previene brotes de alergia"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Cada 3-4 semanas"
                },
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Complementario - Problemas de seborrea",
                    porque: "Bulldogs Franceses son propensos a seborrea (piel grasa/escamosa) y dermatitis por levaduras. Verde tiene propiedades antifúngicas y antibacterianas que controlan estos problemas.",
                    beneficios: [
                        "Controla seborrea",
                        "Antifúngico (levaduras)",
                        "Antibacterial",
                        "Reduce olor por levaduras"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Alternar con Suave si hay seborrea o infecciones por levaduras"
                }
            ],
            
            alertaProblemasPiel: {
                titulo: "🚨 BULLDOG FRANCÉS = RAZA #1 EN ALERGIAS DE PIEL",
                estadistica: "70%+ de Frenchies desarrollarán dermatitis atópica",
                sintomasComunes: [
                    "Rascado obsesivo (cara, patas, abdomen)",
                    "Lamido constante de patas",
                    "Piel roja e inflamada",
                    "Infecciones en pliegues faciales",
                    "Mal olor (levaduras)",
                    "Costras y piel escamosa",
                    "Pérdida de pelo en parches"
                ],
                causas: [
                    "Alergias ambientales (polen, ácaros)",
                    "Alergias alimentarias (pollo, trigo, maíz)",
                    "Dermatitis por levaduras",
                    "Piel sensible genética"
                ],
                solucion: {
                    producto: "Kit Botánico (Verde + Suave)",
                    porque: "ESENCIAL para Frenchies con alergias severas. Verde desinfecta y elimina levaduras/bacterias, Suave calma la piel irritada. Protocolo usado exitosamente en miles de Bulldogs Franceses.",
                    link: "https://botanican.ecwid.com/Kit-para-Casos-Leves-a-Severos-1-Litro-c-u-p351400867",
                    protocolo: "1º Verde (limpiar/desinfectar) + 2º Suave (calmar). Baños cada 3-4 días en casos severos hasta mejorar, luego semanal.",
                    adicional: "CRÍTICO: Combinar con dieta hipoalergénica + limpieza DIARIA de pliegues"
                }
            }
        }
    },
    
    tipsEspecificos: [
        "🚨 Limpieza de pliegues DIARIA - infecciones frecuentes",
        "🚨 NO ejercicio en calor - PUEDE MORIR",
        "✅ Aire acondicionado en verano OBLIGATORIO",
        "⚠️ NO pueden nadar (cabeza pesada - se hunden)",
        "✅ Control de peso CRÍTICO",
        "✅ Arnés siempre (NO collar - problemas respiratorios)",
        "⚠️ Cirugía de narinas/paladar puede ser necesaria",
        "✅ Dieta hipoalergénica si alergias alimentarias"
    ],
    
    alertasCriticas: [
        "🚨 Jadeo excesivo + encías azules = Emergencia respiratoria - VET YA",
        "🚨 Colapso por calor = EMERGENCIA MORTAL - Mojar + VET",
        "🚨 Llanto al tocarlo/cojera = IVDD - VET URGENTE",
        "🚨 Rascado severo + piel muy roja = Dermatitis severa - VET"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "MUY Alto", 
        alimentacion: "Media-Alta (alimento hipoalergénico caro)", 
        veterinario: "EXTREMADAMENTE Alto (BOAS, alergias, cirugías)",
        grooming: "Bajo",
        medicamentos: "MUY Alto (alergias crónicas)"
    }
},

{
    id: "bulldog-ingles",
    nombre: "Bulldog Inglés",
    nombresAlternativos: ["English Bulldog", "British Bulldog"],
    categoria: "medianas",
    imagen: "🐕",
    tamaño: "Medianas",
    
    origen: {
        pais: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        epoca: "Siglo XIII",
        historia: "Originalmente criado para 'bull-baiting' (pelea con toros). Cuando se prohibió en 1835, se crió como perro de compañía. Símbolo nacional de Inglaterra."
    },
    
    pesoIdeal: {
        macho: "23-25 kg",
        hembra: "18-23 kg"
    },
    
    esperanzaVida: "8-10 años",
    
    temperamento: {
        personalidad: "Tranquilo, valiente, amigable, digno, testarudo",
        nivelEnergia: "BAJA",
        sociabilidad: {
            conHumanos: "EXCELENTE - Extremadamente cariñoso",
            conNiños: "Muy buena - Paciente y protector",
            conPerros: "Variable (machos pueden ser territoriales)",
            conExtraños: "Amigable"
        },
        adiestramiento: "DIFÍCIL - Muy terco",
        ladridos: "Bajo",
        caracteristicas: [
            "Perro de sofá perfecto",
            "Extremadamente terco",
            "Ronca EXTREMADAMENTE fuerte",
            "NO tolera calor NI ejercicio intenso",
            "Cara arrugada distintiva",
            "NO puede nadar (se hunde)",
            "Mandíbula poderosa"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Limpieza de pliegues faciales DIARIA desde cachorro",
                "3-4 comidas pequeñas al día",
                "Ejercicio MÍNIMO (problemas respiratorios severos)",
                "Evitar calor SIEMPRE",
                "Socialización temprana con otros perros",
                "Ambiente fresco constantemente"
            ],
            alertasEspeciales: [
                "Cesárea SIEMPRE necesaria (cabezas enormes - 95% cesáreas)",
                "Cachorros extremadamente frágiles respiratoriamente"
            ]
        },
        adulto: {
            edad: "1.5-6 años",
            cuidados: [
                "Ejercicio MÍNIMO 15-20 min (caminatas cortas)",
                "2 comidas al día",
                "Limpieza de pliegues DIARIA",
                "Control de peso ESTRICTO",
                "Aire acondicionado OBLIGATORIO en verano",
                "NUNCA dejar en carro",
                "NO ejercicio en calor"
            ]
        },
        senior: {
            edad: "7+ años",
            cuidados: [
                "Ejercicio mínimo 10-15 min",
                "Chequeos cada 4-6 meses",
                "Problemas respiratorios EMPEORAN severamente",
                "Control de obesidad CRÍTICO",
                "Calidad de vida puede deteriorarse rápido"
            ],
            enfermedadesComunes: [
                "Síndrome braquicéfalo EXTREMO",
                "Problemas cardíacos severos",
                "Obesidad",
                "Cáncer",
                "Problemas de columna"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium, control de peso ESTRICTO",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día (porciones MUY controladas)",
            senior: "2 veces al día (reducir calorías 30%)"
        },
        alertas: [
            "⚠️ EXTREMADAMENTE propenso a obesidad",
            "Obesidad + problemas respiratorios = MUERTE PREMATURA",
            "NO libre acceso a comida NUNCA",
            "Alergias alimentarias MUY COMUNES",
            "Come lento (problemas para respirar mientras come)"
        ]
    },
    
    problemasCongenitos: [
        "Síndrome braquicéfalo obstructivo EXTREMO (casi 100%)",
        "Paladar elongado severo",
        "Estenosis de narinas crítica",
        "Displasia de cadera",
        "Problemas de columna/IVDD",
        "Problemas oculares severos (entropión, ojo seco)",
        "Alergias severas de piel",
        "Problemas cardíacos congénitos",
        "Piel excesiva/pliegues (dermatitis)"
    ],
    
    saludComun: [
        "Problemas respiratorios SEVEROS (100% de Bulldogs)",
        "Infecciones en pliegues faciales y corporales",
        "Alergias de piel EXTREMAS (80%+)",
        "Dermatitis por levaduras",
        "Seborrea (piel grasa)",
        "Infecciones de oído crónicas",
        "Obesidad (90%+)",
        "Golpe de calor (MORTAL - muy común)",
        "Problemas dentales severos"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto, piel con pliegues extremos",
        
        cepillado: {
            frecuencia: {
                normal: "2-3 veces por semana"
            }
        },
        
        baño: {
            frecuencia: "Cada 2-3 semanas (pliegues requieren limpieza frecuente)",
            cuidadosEspeciales: [
                "Limpieza de pliegues faciales DIARIA obligatoria",
                "Limpieza de pliegues corporales (cola, axilas) 2-3 veces semana",
                "Secar MUY bien TODOS los pliegues",
                "Agua tibia (extremadamente sensible a temperatura)",
                "Baño rápido (se cansa/problemas respiratorios)"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Principal",
                    porque: "El Bulldog Inglés tiene piel EXTREMADAMENTE sensible con pliegues profundos propensos a infecciones. Es la raza con MÁS alergias de piel del mundo. Suave es hipoalergénico, no irrita pliegues delicados y calma la piel constantemente irritada. ABSOLUTAMENTE ESENCIAL.",
                    beneficios: [
                        "Hipoalergénico para piel ultra sensible",
                        "No irrita pliegues profundos",
                        "Calma dermatitis severa",
                        "Reduce comezón extrema",
                        "Previene infecciones en pliegues"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Cada 2-3 semanas"
                },
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "ESENCIAL - Problemas de seborrea/levaduras",
                    porque: "Bulldogs Ingleses son EXTREMADAMENTE propensos a seborrea (piel grasa/costras) y dermatitis por levaduras en pliegues. Verde es ANTIBACTERIAL + ANTIFÚNGICO, controla la producción excesiva de sebo, elimina levaduras y previene infecciones severas. CRÍTICO para esta raza.",
                    beneficios: [
                        "Controla seborrea severa",
                        "Antifúngico (elimina levaduras en pliegues)",
                        "Antibacterial (previene infecciones)",
                        "Reduce olor por levaduras/sebo",
                        "Limpieza profunda de pliegues"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "ALTERNAR con Suave - Verde una semana, Suave la siguiente (baños cada 2-3 semanas)"
                }
            ],
            
            alertaProblemasPiel: {
                titulo: "🚨 BULLDOG INGLÉS = RAZA CON MÁS PROBLEMAS DE PIEL DEL MUNDO",
                estadistica: "80-90% desarrollan dermatitis severa, seborrea, levaduras",
                sintomasComunes: [
                    "Pliegues rojos, húmedos, malolientes",
                    "Costras y escamas en piel",
                    "Piel grasa excesiva (seborrea)",
                    "Mal olor INTENSO (levaduras)",
                    "Rascado obsesivo constante",
                    "Piel entre dedos roja/hinchada",
                    "Pérdida de pelo en parches",
                    "Infecciones recurrentes"
                ],
                causas: [
                    "Pliegues profundos (humedad + bacterias)",
                    "Seborrea genética (producción excesiva sebo)",
                    "Alergias severas (ambientales + alimentarias)",
                    "Dermatitis por levaduras (Malassezia)",
                    "Sistema inmune comprometido"
                ],
                solucion: {
                    producto: "Kit Botánico (Verde + Suave) - OBLIGATORIO",
                    porque: "El Bulldog Inglés REQUIERE protocolo dual. Verde controla seborrea y mata levaduras/bacterias. Suave calma la inflamación crónica. NO ES OPCIONAL - es manejo de condición crónica.",
                    link: "https://botanican.ecwid.com/Kit-para-Casos-Leves-a-Severos-1-Litro-c-u-p351400867",
                    protocolo: "ALTERNAR semanalmente: Semana 1 = Verde, Semana 2 = Suave. En casos severos: Verde (limpiar/desinfectar) + Suave (calmar) en MISMO baño. Baños 2-3 veces por semana hasta controlar.",
                    adicional: "CRÍTICO: Limpieza DIARIA de pliegues con toallitas + dieta hipoalergénica + seguimiento veterinario"
                }
            }
        }
    },
    
    tipsEspecificos: [
        "🚨 Limpieza pliegues DIARIA - infecciones CONSTANTES",
        "🚨 NO ejercicio en calor - MUEREN FÁCILMENTE",
        "🚨 Aire acondicionado TODO el verano - NO OPCIONAL",
        "⚠️ NO pueden nadar - SE HUNDEN",
        "🚨 Control peso EXTREMO (obesidad = muerte prematura)",
        "✅ Arnés SIEMPRE (collar = asfixia)",
        "⚠️ Cirugía BOAS casi siempre necesaria ($30,000-80,000 MXN)",
        "🚨 Costos veterinarios ALTÍSIMOS - raza MÁS CARA de mantener",
        "⚠️ Esperanza de vida CORTA (8-10 años)"
    ],
    
    alertasCriticas: [
        "🚨 Jadeo excesivo + colapso = Golpe de calor - MOJAR + VET INMEDIATO",
        "🚨 Encías azules/moradas = Falta oxígeno - EMERGENCIA",
        "🚨 Olor pútrido en pliegues = Infección severa - VET",
        "🚨 NO puede caminar 10 min sin colapsar = BOAS severo - Cirugía urgente"
    ],
    
    realidadDeLaRaza: {
        titulo: "⚠️ REALIDAD BRUTAL DEL BULLDOG INGLÉS",
        problemas: [
            "95% nacen por CESÁREA (no pueden parir naturalmente)",
            "100% tienen problemas respiratorios SEVEROS de por vida",
            "80%+ requieren cirugía BOAS ($30,000-80,000 MXN)",
            "Esperanza de vida MÁS CORTA que hace 50 años",
            "Costos veterinarios promedio: $50,000-150,000 MXN/año",
            "Muchos no pueden caminar 15 min sin colapsar",
            "NO pueden regular temperatura - dependen de A/C",
            "Calidad de vida frecuentemente pobre"
        ],
        consideracion: "El Bulldog Inglés es resultado de crianza extrema. Requiere compromiso ENORME de tiempo, dinero y cuidados. NO es raza para dueños primerizos o con presupuesto limitado."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "EXTREMADAMENTE Alto - Raza MÁS CARA",
        alimentacion: "Alta (alimento hipoalergénico premium)", 
        veterinario: "EXTREMADAMENTE Alto ($50K-150K MXN/año)",
        grooming: "Medio (limpieza pliegues diaria)",
        medicamentos: "MUY Alto (alergias, problemas crónicos)",
        cirugia: "Casi siempre necesaria BOAS ($30K-80K MXN)"
    }
},


{
    id: "beagle",
    nombre: "Beagle",
    categoria: "medianas",
    imagen: "🐕",
    tamaño: "Medianas",
    
    origen: {
        pais: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        epoca: "Siglo XIV",
        historia: "Criado en Inglaterra para cazar liebres en jaurías. Perro rastreador excepcional. Popularizado mundialmente como Snoopy de Peanuts."
    },
    
    pesoIdeal: {
        adulto: "9-11 kg"
    },
    
    esperanzaVida: "12-15 años",
    
    temperamento: {
        personalidad: "Amigable, curioso, alegre, determinado",
        nivelEnergia: "Alta",
        sociabilidad: {
            conHumanos: "EXCELENTE - Ama a todos",
            conNiños: "EXCELENTE - Muy juguetón",
            conPerros: "EXCELENTE - Criado para jaurías",
            conExtraños: "Amigable (PÉSIMO guardián)"
        },
        adiestramiento: "MODERADO-DIFÍCIL - Terco, distraído por olores",
        ladridos: "ALTO - Aullido característico fuerte",
        caracteristicas: [
            "Nariz SIEMPRE en el suelo",
            "Sigue olores obsesivamente",
            "Aullido/ladrido muy fuerte",
            "Obsesionado con comida",
            "Artista del escape (sigue olores)",
            "Extremadamente sociable",
            "Orejas largas distintivas"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "Socialización temprana",
                "3-4 comidas al día (control de porciones)",
                "Entrenamiento temprano (muy tercos)",
                "Patio SEGURO (escapan fácilmente)",
                "Ejercicio moderado",
                "Acostumbrar a estar solo gradualmente"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio intenso 1-1.5 horas diarias",
                "2 comidas medidas ESTRICTAMENTE",
                "NUNCA sin correa (sigue olores y no regresa)",
                "Estimulación mental (rastreo/olfato)",
                "Cerca segura y alta",
                "Limpieza de orejas semanal"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 45-60 min",
                "Chequeos cada 6 meses",
                "Control de peso CRÍTICO (obesidad común)",
                "Vigilar hipotiroidismo",
                "Suplementos articulaciones"
            ],
            enfermedadesComunes: [
                "Obesidad",
                "Hipotiroidismo",
                "Epilepsia",
                "Problemas de disco intervertebral"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium, control de peso",
        comidas: {
            cachorro: "3-4 veces al día (porciones controladas)",
            adulto: "2 veces al día (MEDIR SIEMPRE)",
            senior: "2 veces al día (reducir calorías)"
        },
        alertas: [
            "⚠️ EXTREMADAMENTE obsesionado con comida",
            "Comerá CUALQUIER COSA (hasta basura)",
            "Control de porciones ESTRICTO obligatorio",
            "80%+ tienen sobrepeso",
            "Guardar basura inaccesible",
            "NUNCA libre acceso a comida"
        ]
    },
    
    problemasCongenitos: [
        "Epilepsia (común en la raza)",
        "Hipotiroidismo",
        "Enfermedad de disco intervertebral",
        "Displasia de cadera",
        "Glaucoma",
        "Atrofia progresiva de retina",
        "Obesidad (predisposición genética)"
    ],
    
    saludComun: [
        "Obesidad (MUY COMÚN - 80%)",
        "Infecciones de oído (orejas largas caídas)",
        "Alergias de piel (moderado)",
        "Problemas dentales",
        "Hipotiroidismo (común)"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto denso, muda moderadamente",
        
        cepillado: {
            frecuencia: {
                normal: "2-3 veces por semana"
            }
        },
        
        baño: {
            frecuencia: "Cada 4-6 semanas (o cuando huela mal)",
            cuidadosEspeciales: [
                "Limpiar orejas DESPUÉS de cada baño",
                "Secar MUY bien las orejas",
                "Revisar entre dedos (se meten en todo)"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Beagle es perro CAZADOR que se mete en TODO siguiendo olores. Rastrea en pasto, lodo, basura. Verde limpia profundamente, repele parásitos (altísima exposición) y controla el olor característico del Beagle. Perfecto para perros tan exploradores.",
                    beneficios: [
                        "Limpieza profunda (se ensucia mucho)",
                        "Repele parásitos 14 días",
                        "Controla olor fuerte de Beagle",
                        "Antibacterial + Antifúngico",
                        "Ideal para perros muy activos"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 4-6 semanas"
                }
            ],
            
            alertaParasitos: {
                titulo: "⚠️ Beagle = Perro rastreador - Nariz SIEMPRE en el suelo",
                descripcion: "Beagles olfatean TODO constantemente. Alta exposición a parásitos, bacterias, hongos del suelo.",
                recomendacion: {
                    producto: "Shampoo Verde Botánico 7en1 - YA RECOMENDADO",
                    porque: "Verde incluye repelente de parásitos por 14 días. Protección esencial para perros con nariz en el suelo.",
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    protocolo: "Baño cada 4-6 semanas + desparasitación regular + revisión post-paseos"
                }
            }
        }
    },
    
    tipsEspecificos: [
        "🚨 NUNCA sin correa - sigue olores y NO regresa",
        "✅ Patio SEGURO - escapistas expertos",
        "✅ Control de peso ESTRICTO (obsesionado con comida)",
        "✅ Limpieza de orejas SEMANAL (infecciones frecuentes)",
        "⚠️ Entrenamiento difícil - muy terco/distraído",
        "✅ Microchip OBLIGATORIO (se pierden mucho)",
        "⚠️ Aullido muy fuerte - vecinos pueden quejarse"
    ],
    
    alertasCriticas: [
        "🚨 Convulsiones = Epilepsia - VET",
        "🚨 Ganancia peso súbita = Hipotiroidismo - VET",
        "🚨 Rascado orejas + mal olor = Otitis - VET"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública - Alta exposición por rastreo" }},
    costoMantenimiento: { nivel: "Medio", alimentacion: "Media", veterinario: "Medio-Alto", grooming: "Bajo" }
},

{
    id: "yorkshire-terrier",
    nombre: "Yorkshire Terrier",
    nombresAlternativos: ["Yorkie", "York"],
    categoria: "pequeñas",
    imagen: "🐕",
    tamaño: "Pequeñas",
    
    origen: {
        pais: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        epoca: "Siglo XIX",
        historia: "Criado en Yorkshire, Inglaterra para cazar ratas en minas y fábricas textiles. Perro de trabajadores que se convirtió en perro de compañía de alta sociedad."
    },
    
    pesoIdeal: {
        adulto: "2-3 kg"
    },
    
    esperanzaVida: "13-16 años",
    
    temperamento: {
        personalidad: "Valiente, tenaz, cariñoso, enérgico",
        nivelEnergia: "Media-Alta",
        sociabilidad: {
            conHumanos: "Muy apegado a su familia",
            conNiños: "Moderada (frágil, puede morder si lo molestan)",
            conPerros: "Variable (NO tiene noción de su tamaño pequeño)",
            conExtraños: "Desconfiado, ladrador"
        },
        adiestramiento: "Moderado - Inteligente pero terco",
        ladridos: "MUY ALTO - Ladra mucho",
        caracteristicas: [
            "Terrier en cuerpo de juguete",
            "Pelo largo sedoso característico",
            "NO tiene noción de su tamaño (enfrentará perros grandes)",
            "Muy territorial",
            "Personalidad grande en cuerpo pequeño",
            "Propenso a 'síndrome perro pequeño' si se malcría"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "EXTREMADAMENTE frágil - supervisión constante",
                "4 comidas pequeñas al día (riesgo hipoglucemia)",
                "Socialización temprana crítica",
                "Cepillado diario desde cachorro",
                "Cuidado con caídas (huesos frágiles)",
                "Entrenamiento desde cachorro (tercos)"
            ],
            alertasEspeciales: [
                "Hipoglucemia común en cachorros - CRÍTICO",
                "Extremadamente vulnerable a fracturas"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio moderado 30-40 min",
                "2-3 comidas al día",
                "Cepillado DIARIO obligatorio",
                "Limpieza dental regular (muy propenso)",
                "Grooming profesional cada 6-8 semanas",
                "Protección del frío (suéteres)"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio suave 20-30 min",
                "Chequeos cada 6 meses",
                "Vigilar luxación de rótula",
                "Limpieza dental profesional anual",
                "Control de peso",
                "Suplementos articulaciones"
            ],
            enfermedadesComunes: [
                "Luxación de rótula",
                "Colapso traqueal",
                "Enfermedad dental severa",
                "Problemas hepáticos",
                "Cataratas"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas toy",
        comidas: {
            cachorro: "4 veces al día (porciones muy pequeñas - hipoglucemia)",
            adulto: "2-3 veces al día",
            senior: "2-3 veces al día (porciones ajustadas)"
        },
        alertas: [
            "Propenso a hipoglucemia - comidas frecuentes",
            "Estómago muy sensible",
            "Evitar alimentos duros (problemas dentales)",
            "Porciones muy pequeñas",
            "Agua siempre disponible"
        ]
    },
    
    problemasCongenitos: [
        "Luxación de rótula (MUY COMÚN)",
        "Colapso traqueal",
        "Enfermedad dental severa",
        "Shunt portosistémico (hígado)",
        "Hipoglucemia",
        "Hidrocefalia",
        "Enfermedad de Legg-Calvé-Perthes"
    ],
    
    saludComun: [
        "Problemas dentales (casi TODOS los Yorkies)",
        "Luxación de rótula",
        "Colapso traqueal (tos crónica)",
        "Alergias de piel",
        "Infecciones de oído",
        "Obesidad"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo largo sedoso, crece continuamente (como cabello humano)",
        
        cepillado: {
            frecuencia: {
                normal: "DIARIO - NO negociable",
                sinCepillar: "Nudos severos en 2-3 días"
            },
            herramientas: [
                {
                    herramienta: "Cepillo de cerdas suaves",
                    funcion: "Cepillado diario",
                    obligatorio: true
                },
                {
                    herramienta: "Peine metálico de dientes finos",
                    funcion: "Verificar nudos",
                    obligatorio: true
                }
            ],
            consecuenciasNoCepillar: [
                "Nudos dolorosos en 2-3 días",
                "Puede requerir rasurado completo",
                "Pelo se apelmaza completamente"
            ]
        },
        
        baño: {
            frecuencia: "Cada 2-3 semanas",
            proceso: [
                "Cepillar ANTES del baño (nudos se endurecen con agua)",
                "Acondicionador OBLIGATORIO",
                "Secar completamente",
                "Cepillar mientras seca"
            ]
        },
        
        corte: {
            critico: true,
            frecuencia: "Cada 6-8 semanas con groomer profesional",
            estilos: [
                "Corte largo show (requiere cepillado diario)",
                "Corte cachorro/puppy cut (más práctico)"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Principal - ESENCIAL",
                    porque: "El Yorkshire tiene pelo largo sedoso que se enreda EXTREMADAMENTE fácil. Sin acondicionador, el pelo forma nudos en 2-3 días que son dolorosos. Cero Nudos facilita el cepillado diario OBLIGATORIO y mantiene el pelo sedoso característico de la raza. NO ES OPCIONAL.",
                    beneficios: [
                        "Previene nudos diarios",
                        "Facilita cepillado obligatorio",
                        "Pelo sedoso brillante",
                        "Reduce tiempo de grooming",
                        "Mantiene textura característica"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Cada 2-3 semanas"
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario - Piel sensible",
                    porque: "Yorkies son propensos a alergias de piel. Si tu Yorkie se rasca o tiene piel irritada, alternar con Suave.",
                    beneficios: [
                        "Hipoalergénico",
                        "Calma piel sensible",
                        "Reduce comezón"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Alternar con Cero Nudos si hay alergias"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "✅ Cepillado DIARIO - NO negociable",
        "✅ Arnés SIEMPRE (NO collar - colapso traqueal)",
        "⚠️ Grooming profesional cada 6-8 semanas OBLIGATORIO",
        "✅ Limpieza dental profesional anual CRÍTICA",
        "⚠️ Suéteres en frío (tiemblan fácilmente)",
        "✅ Evitar que salte de muebles (luxación rótula)",
        "⚠️ Socialización crítica (evita 'síndrome perro pequeño')"
    ],
    
    alertasCriticas: [
        "🚨 Tos persistente tipo 'graznido' = Colapso traqueal - VET",
        "🚨 Cojera súbita pata trasera = Luxación rótula - VET",
        "🚨 Temblores + debilidad = Hipoglucemia - Miel + VET"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Baja (come muy poco)", 
        veterinario: "Alto (dental, luxación)",
        grooming: "MUY Alto ($400-800 cada 6-8 semanas)"
    }
},



{
    id: "pomerania",
    nombre: "Pomerania",
    nombresAlternativos: ["Pomeranian", "Pom", "Spitz Alemán Enano"],
    categoria: "pequeñas",
    imagen: "🦊",
    tamaño: "Pequeñas",
    
    origen: {
        pais: "Alemania 🇩🇪",
        epoca: "Siglo XVIII",
        historia: "Descendiente del Spitz Alemán de Pomerania. Popularizado por la Reina Victoria de Inglaterra quien los crió en tamaño miniatura. Originalmente pesaban 13-14 kg, ahora 2-3 kg."
    },
    
    pesoIdeal: {
        adulto: "1.8-3 kg"
    },
    
    esperanzaVida: "12-16 años",
    
    temperamento: {
        personalidad: "Vivaz, amigable, enérgico, alerta, extrovertido",
        nivelEnergia: "Alta",
        sociabilidad: {
            conHumanos: "Muy apegado a su familia",
            conNiños: "Moderada (muy frágil, puede ser impaciente)",
            conPerros: "Variable (NO tiene noción de su tamaño)",
            conExtraños: "Desconfiado, muy ladrador"
        },
        adiestramiento: "Moderado - Inteligente pero terco",
        ladridos: "MUY ALTO - Ladra muchísimo",
        caracteristicas: [
            "Bola de pelo andante",
            "Personalidad ENORME en cuerpo tiny",
            "Muy territorial y protector",
            "Ladra a TODO",
            "Parece zorro pequeño",
            "NO tiene noción de su tamaño pequeño",
            "Puede ser dominante/mandón"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "EXTREMADAMENTE frágil - mucho cuidado",
                "4 comidas pequeñas al día (hipoglucemia común)",
                "Socialización temprana (tiende a ladridos excesivos)",
                "Cepillado diario desde cachorro",
                "Protección contra frío/calor extremo",
                "Cuidado con caídas (huesos frágiles)"
            ],
            alertasEspeciales: [
                "Hipoglucemia común - comidas frecuentes",
                "Fontanela abierta común (mollera)"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio moderado 30-40 min",
                "2-3 comidas al día",
                "Cepillado 3-4 veces semana MÍNIMO",
                "Control de peso (obesidad común)",
                "Limpieza dental regular",
                "Entrenamiento continuo (controlar ladridos)"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio suave 20-30 min",
                "Chequeos cada 6 meses",
                "Vigilar luxación de rótula",
                "Problemas dentales severos",
                "Control de peso crítico",
                "Suplementos articulaciones"
            ],
            enfermedadesComunes: [
                "Luxación de rótula",
                "Colapso traqueal",
                "Enfermedad dental severa",
                "Alopecia X (pérdida pelo)",
                "Problemas cardíacos"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas toy",
        comidas: {
            cachorro: "4 veces al día (hipoglucemia)",
            adulto: "2-3 veces al día",
            senior: "2-3 veces al día (porciones reducidas)"
        },
        alertas: [
            "Propenso a obesidad (muy común)",
            "Comidas frecuentes previenen hipoglucemia",
            "Porciones muy pequeñas",
            "NO dar comida de mesa",
            "Problemas dentales - alimento apropiado"
        ]
    },
    
    problemasCongenitos: [
        "Luxación de rótula (EXTREMADAMENTE COMÚN)",
        "Colapso traqueal",
        "Alopecia X (síndrome del Pomerania pelón)",
        "Enfermedad dental severa",
        "Hipoglucemia",
        "Problemas cardíacos (soplos)",
        "Hidrocefalia"
    ],
    
    saludComun: [
        "Problemas dentales (casi 100%)",
        "Luxación de rótula",
        "Pérdida de pelo (Alopecia X)",
        "Colapso traqueal",
        "Obesidad",
        "Infecciones de oído"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa EXTREMADAMENTE densa, muda mucho",
        
        cepillado: {
            frecuencia: {
                normal: "3-4 veces por semana MÍNIMO",
                temporadaMuda: "DIARIO (muda intensa)"
            },
            herramientas: [
                {
                    herramienta: "Cepillo slicker",
                    funcion: "Elimina pelo muerto y desenreda",
                    obligatorio: true
                },
                {
                    herramienta: "Peine metálico",
                    funcion: "Verifica nudos en subpelo",
                    obligatorio: true
                },
                {
                    herramienta: "Rastrillo de subpelo",
                    funcion: "Remueve subpelo muerto",
                    obligatorio: false
                }
            ],
            consecuenciasNoCepillar: [
                "Nudos severos en subpelo",
                "Pelo apelmazado",
                "Requiere rasurado completo",
                "Pérdida del look Pomerania"
            ]
        },
        
        baño: {
            frecuencia: "Cada 3-4 semanas",
            proceso: [
                "Cepillar ANTES del baño",
                "Acondicionador OBLIGATORIO",
                "Secar completamente (prevenir resfriados)",
                "Cepillar mientras seca"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Principal - ESENCIAL",
                    porque: "El Pomerania tiene doble capa EXTREMADAMENTE densa y esponjosa que se enreda fácilmente, especialmente en el subpelo. Cero Nudos con acondicionador es CRÍTICO para mantener el pelo esponjoso característico sin nudos. Sin acondicionador, el subpelo se apelmaza y pierde el look de 'bola de pelo'.",
                    beneficios: [
                        "Mantiene pelo esponjoso característico",
                        "Previene nudos en subpelo denso",
                        "Facilita cepillado regular",
                        "Brillo intenso",
                        "Reduce muda"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Cada 3-4 semanas"
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario - Piel sensible",
                    porque: "Pomeranias propensos a alergias de piel. Usar Suave si hay comezón o irritación.",
                    beneficios: [
                        "Hipoalergénico",
                        "Calma piel sensible",
                        "Previene alergias"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Alternar con Cero Nudos si hay problemas de piel"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "✅ Cepillado 3-4 veces semana MÍNIMO",
        "✅ Arnés SIEMPRE (NO collar - colapso traqueal)",
        "⚠️ Control de ladridos desde cachorro",
        "✅ Socialización intensiva (evita 'síndrome perro pequeño')",
        "⚠️ Evitar que salte de muebles (luxación)",
        "✅ Limpieza dental regular CRÍTICA",
        "⚠️ Proteger del frío y calor extremo"
    ],
    
    alertasCriticas: [
        "🚨 Cojera súbita = Luxación rótula - VET",
        "🚨 Tos persistente = Colapso traqueal - VET",
        "🚨 Pérdida de pelo en parches = Alopecia X - VET"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Baja", 
        veterinario: "Alto (dental, luxación)",
        grooming: "Alto (profesional recomendado)"
    }
},


{
    id: "shih-tzu",
    nombre: "Shih Tzu",
    nombresAlternativos: ["Perro León", "Chrysanthemum Dog"],
    categoria: "pequeñas",
    imagen: "🦁",
    tamaño: "Pequeñas",
    
    origen: {
        pais: "China/Tíbet 🇨🇳",
        epoca: "Antigua China (618 d.C.)",
        historia: "Criado en palacios imperiales chinos como perro de compañía para la realeza. 'Shih Tzu' significa 'Perro León'. Raza sagrada, casi se extingue después de la Revolución Comunista China."
    },
    
    pesoIdeal: {
        adulto: "4-7 kg"
    },
    
    esperanzaVida: "10-16 años",
    
    temperamento: {
        personalidad: "Cariñoso, juguetón, extrovertido, alerta, leal",
        nivelEnergia: "Baja-Media",
        sociabilidad: {
            conHumanos: "EXCELENTE - Criado para compañía",
            conNiños: "Muy buena - Juguetón y paciente",
            conPerros: "Buena - Sociable",
            conExtraños: "Amigable"
        },
        adiestramiento: "Moderado - Terco pero ansioso por complacer",
        ladridos: "Bajo-Medio",
        caracteristicas: [
            "Perro de compañía PERFECTO",
            "Pelo largo que cubre cara (característica)",
            "Cara chata (braquicéfalo)",
            "Camina con orgullo (origen realeza)",
            "Prefiere estar con humanos que solo",
            "Adaptable - apto para apartamento"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "Limpieza de ojos DIARIA (pelo en cara)",
                "3-4 comidas al día",
                "Cepillado diario desde cachorro OBLIGATORIO",
                "Socialización temprana",
                "Entrenamiento de casa (pueden ser difíciles)",
                "Acostumbrar a grooming temprano"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio moderado 20-30 min",
                "2 comidas al día",
                "Cepillado DIARIO obligatorio",
                "Limpieza facial diaria (ojos, hocico)",
                "Grooming profesional cada 6-8 semanas",
                "NO ejercicio en calor extremo"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio suave 15-20 min",
                "Chequeos cada 6 meses",
                "Vigilar problemas respiratorios (empeoran)",
                "Problemas dentales severos",
                "Problemas renales (común)",
                "Control de peso"
            ],
            enfermedadesComunes: [
                "Problemas respiratorios",
                "Enfermedad renal",
                "Problemas dentales severos",
                "Problemas oculares",
                "Displasia de cadera"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas pequeñas",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día (bajo en proteína si problemas renales)"
        },
        alertas: [
            "Propenso a alergias alimentarias",
            "Evitar alimentos muy duros (problemas dentales)",
            "NO dar comida de mesa",
            "Control de peso (obesidad común)"
        ]
    },
    
    problemasCongenitos: [
        "Síndrome braquicéfalo",
        "Enfermedad renal juvenil",
        "Luxación de rótula",
        "Displasia de cadera",
        "Problemas oculares (úlceras, ojo seco)",
        "Enfermedad de disco intervertebral",
        "Problemas dentales severos"
    ],
    
    saludComun: [
        "Problemas oculares (MUY COMÚN - pelo en ojos)",
        "Alergias de piel (común)",
        "Infecciones de oído",
        "Problemas dentales",
        "Problemas respiratorios",
        "Obesidad"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo largo y doble capa que crece continuamente",
        
        cepillado: {
            frecuencia: {
                normal: "DIARIO - Absolutamente OBLIGATORIO",
                sinCepillar: "Nudos severos en 1-2 días"
            },
            herramientas: [
                {
                    herramienta: "Cepillo slicker",
                    funcion: "Elimina nudos diarios",
                    obligatorio: true
                },
                {
                    herramienta: "Peine metálico",
                    funcion: "Verifica nudos, peina cara",
                    obligatorio: true
                }
            ],
            areasProblematicas: [
                "Detrás de orejas",
                "Axilas",
                "Entre patas traseras",
                "Barba y bigotes"
            ],
            consecuenciasNoCepillar: [
                "Nudos DOLOROSOS en 1-2 días",
                "Requiere rasurado completo",
                "Pelo se apelmaza severamente",
                "Pérdida del look característico"
            ]
        },
        
        baño: {
            frecuencia: "Cada 3 semanas",
            cuidadosEspeciales: [
                "Cepillar ANTES del baño (nudos se endurecen)",
                "Limpiar cara DIARIAMENTE (no solo en baño)",
                "Acondicionador OBLIGATORIO",
                "Secar completamente",
                "Cepillar mientras seca"
            ]
        },
        
        corte: {
            critico: true,
            frecuencia: "Cada 6-8 semanas con groomer - OBLIGATORIO",
            estilos: [
                "Corte de show (pelo largo - requiere cepillado diario sin falta)",
                "Corte cachorro/puppy cut (MÁS PRÁCTICO - altamente recomendado)"
            ],
            costo: "$500-900 MXN cada 6-8 semanas"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Principal - ABSOLUTAMENTE ESENCIAL",
                    porque: "El Shih Tzu tiene pelo largo y doble capa que se enreda con EXTREMA facilidad. Este shampoo con acondicionador es ESENCIAL para facilitar el cepillado diario OBLIGATORIO y prevenir nudos dolorosos que pueden requerir rasurado completo. Sin acondicionador, el pelo forma 'dreadlocks' en pocos días. NO ES OPCIONAL.",
                    beneficios: [
                        "Previene nudos diarios severos",
                        "Facilita cepillado diario obligatorio",
                        "Pelo sedoso y manejable",
                        "Reduce tiempo de grooming",
                        "Mantiene look característico"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Cada 3 semanas + cepillado diario OBLIGATORIO"
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario - Piel sensible",
                    porque: "Shih Tzus son propensos a alergias de piel y dermatitis. Usar Suave cuando presente comezón o irritación.",
                    beneficios: [
                        "Hipoalergénico",
                        "Calma alergias",
                        "Reduce comezón"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Alternar con Cero Nudos si problemas de piel"
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
        }
    },
    
    tipsEspecificos: [
        "✅ Cepillado DIARIO sin excepción",
        "✅ Limpieza facial DIARIA (ojos, hocico)",
        "✅ Grooming profesional cada 6-8 semanas OBLIGATORIO",
        "⚠️ Moño/coleta en pelo de cara (evita irritación ojos)",
        "✅ Limpieza dental profesional anual",
        "⚠️ NO ejercicio en calor (braquicéfalo)",
        "✅ Control de peso estricto"
    ],
    
    alertasCriticas: [
        "🚨 Ojos rojos/llorosos constante = Úlcera corneal - VET",
        "🚨 Jadeo excesivo = Problemas respiratorios - VET",
        "🚨 Rascado extremo = Alergias severas - VET"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "MUY Alto", 
        alimentacion: "Media", 
        veterinario: "Alto (ojos, dental, alergias)",
        grooming: "MUY Alto ($500-900 cada 6-8 semanas - OBLIGATORIO)"
    }
},

{
    id: "maltes",
    nombre: "Maltés",
    nombresAlternativos: ["Bichón Maltés", "Maltese"],
    categoria: "pequeñas",
    imagen: "🐕",
    tamaño: "Pequeñas",
    
    origen: {
        pais: "Malta 🇲🇹",
        epoca: "Antigua civilización (3000 años)",
        historia: "Una de las razas más antiguas del mundo. Criado en la isla de Malta como perro de compañía para la aristocracia. Favorito de nobles romanos y griegos."
    },
    
    pesoIdeal: {
        adulto: "3-4 kg"
    },
    
    esperanzaVida: "12-15 años",
    
    temperamento: {
        personalidad: "Gentil, juguetón, cariñoso, vivaz, alerta",
        nivelEnergia: "Media",
        sociabilidad: {
            conHumanos: "EXCELENTE - Muy apegado",
            conNiños: "Buena (frágil - supervisión con niños pequeños)",
            conPerros: "Buena - Sociable",
            conExtraños: "Amigable pero puede ser reservado"
        },
        adiestramiento: "Moderado - Inteligente pero puede ser terco",
        ladridos: "Medio-Alto",
        caracteristicas: [
            "Pelo blanco puro sedoso (característico)",
            "Perro de compañía perfecto",
            "Elegante y aristocrático",
            "Muy adaptable - ideal apartamento",
            "Sigue a su dueño a todas partes",
            "Puede sufrir ansiedad por separación"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "Frágil - supervisión constante",
                "3-4 comidas pequeñas al día",
                "Cepillado diario desde cachorro",
                "Socialización temprana",
                "Limpieza de manchas de lágrimas diaria",
                "Entrenamiento de casa (pueden ser difíciles)"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio moderado 20-30 min",
                "2 comidas al día",
                "Cepillado DIARIO obligatorio",
                "Limpieza facial diaria (manchas lágrimas)",
                "Grooming profesional cada 6-8 semanas",
                "Limpieza dental regular"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio suave 15-20 min",
                "Chequeos cada 6 meses",
                "Problemas dentales severos",
                "Vigilar luxación de rótula",
                "Control de peso",
                "Suplementos articulaciones"
            ],
            enfermedadesComunes: [
                "Luxación de rótula",
                "Problemas dentales severos",
                "Colapso traqueal",
                "Shunt portosistémico",
                "Problemas cardíacos"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas pequeñas",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día (porciones ajustadas)"
        },
        alertas: [
            "Propenso a manchas de lágrimas (alimento influye)",
            "Evitar colorantes artificiales (empeoran manchas)",
            "Estómago sensible",
            "Problemas dentales - alimento apropiado"
        ]
    },
    
    problemasCongenitos: [
        "Luxación de rótula (común)",
        "Shunt portosistémico (hígado)",
        "Colapso traqueal",
        "Síndrome del temblor del perro blanco",
        "Problemas dentales severos",
        "Hidrocefalia",
        "Hipoglucemia"
    ],
    
    saludComun: [
        "Manchas de lágrimas (EXTREMADAMENTE común)",
        "Problemas dentales (casi todos los Malteses)",
        "Luxación de rótula",
        "Alergias de piel",
        "Infecciones de oído",
        "Colapso traqueal"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo largo blanco sedoso, sin subpelo, crece continuamente",
        
        cepillado: {
            frecuencia: {
                normal: "DIARIO - Absolutamente obligatorio",
                sinCepillar: "Nudos en 1-2 días"
            },
            herramientas: [
                {
                    herramienta: "Cepillo de cerdas suaves",
                    funcion: "Cepillado diario gentil",
                    obligatorio: true
                },
                {
                    herramienta: "Peine metálico de dientes finos",
                    funcion: "Verifica nudos, peina cara",
                    obligatorio: true
                }
            ],
            consecuenciasNoCepillar: [
                "Nudos dolorosos rápidamente",
                "Pelo apelmazado",
                "Requiere rasurado (pierde look Maltés)",
                "Manchas de lágrimas empeoran"
            ]
        },
        
        baño: {
            frecuencia: "Cada 2-3 semanas",
            cuidadosEspeciales: [
                "Cepillar ANTES del baño",
                "Shampoo específico para pelo blanco (mantener blancura)",
                "Acondicionador OBLIGATORIO",
                "Limpiar manchas de lágrimas DIARIAMENTE",
                "Secar completamente",
                "Cepillar mientras seca"
            ]
        },
        
        corte: {
            critico: true,
            frecuencia: "Cada 6-8 semanas - OBLIGATORIO",
            estilos: [
                "Corte de show (pelo largo hasta el suelo - MUCHO mantenimiento)",
                "Corte cachorro/puppy cut (más práctico - recomendado)"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Pelo Blanco Botánico",
                    prioridad: "Principal - ESENCIAL",
                    porque: "El Maltés tiene pelo BLANCO PURO que se mancha fácilmente (lágrimas, saliva, orina). Shampoo Pelo Blanco está formulado específicamente para MANTENER y REALZAR la blancura característica de la raza, eliminar manchas amarillas y prevenir decoloración. CRÍTICO para mantener el look distintivo del Maltés.",
                    beneficios: [
                        "Mantiene blancura pura característica",
                        "Elimina manchas amarillas",
                        "Previene decoloración",
                        "Realza brillo del pelo blanco",
                        "No reseca el pelo"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Pelo-Blanco-Bot%C3%A1nico-Blanqueador-Acondicionador-Abrillantador-y-M%C3%A1s-p656171151",
                    uso: "Cada 2-3 semanas"
                },
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Complementario",
                    porque: "El pelo largo del Maltés se enreda fácilmente. Alternar semanalmente con Pelo Blanco para facilitar cepillado mientras mantiene blancura.",
                    beneficios: [
                        "Facilita cepillado",
                        "Desenreda pelo largo",
                        "Mantiene sedosidad"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Alternar semanalmente con Pelo Blanco"
                }
            ],
            
            notaManchasLagrimas: {
                titulo: "⚠️ Maltés = Manchas de lágrimas en 90%+ de la raza",
                descripcion: "Las manchas café-rojizas bajo los ojos son EXTREMADAMENTE comunes en Malteses por estructura facial.",
                causas: [
                    "Conductos lagrimales pequeños/bloqueados",
                    "Pelo blanco muestra manchas fácilmente",
                    "Levaduras (Malassezia) en humedad",
                    "Algunos alimentos empeoran manchas"
                ],
                solucion: {
                    producto: "Shampoo Pelo Blanco + Limpieza diaria",
                    porque: "Pelo Blanco ayuda a blanquear el área, pero requiere limpieza DIARIA de lágrimas con toallitas.",
                    protocolo: "Limpiar lágrimas DIARIAMENTE + baño cada 2-3 semanas con Pelo Blanco + dieta sin colorantes"
                }
            }
        }
    },
    
    tipsEspecificos: [
        "✅ Cepillado DIARIO sin excepción",
        "✅ Limpieza de manchas de lágrimas DIARIA obligatoria",
        "✅ Grooming profesional cada 6-8 semanas",
        "⚠️ Moño/coleta para pelo de cara",
        "✅ Limpieza dental profesional anual CRÍTICA",
        "✅ Arnés (NO collar - colapso traqueal)",
        "⚠️ Shampoo específico pelo blanco (mantener color)"
    ],
    
    alertasCriticas: [
        "🚨 Cojera súbita = Luxación rótula - VET",
        "🚨 Tos persistente = Colapso traqueal - VET",
        "🚨 Temblores generalizados = Síndrome temblor - VET"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "MUY Alto", 
        alimentacion: "Baja", 
        veterinario: "Alto (dental, luxación)",
        grooming: "MUY Alto (profesional cada 6-8 semanas + productos especializados pelo blanco)"
    }
},


{
    id: "rottweiler",
    nombre: "Rottweiler",
    nombresAlternativos: ["Rottie", "Rott"],
    categoria: "grandes",
    imagen: "🐕",
    tamaño: "Grandes",
    
    origen: {
        pais: "Alemania 🇩🇪",
        epoca: "Imperio Romano",
        historia: "Descendiente de mastines romanos. Usado en Rottweil, Alemania para arrear ganado y tirar carretas de carniceros. Perro de trabajo versátil: policía, militar, búsqueda y rescate."
    },
    
    pesoIdeal: {
        macho: "50-60 kg",
        hembra: "35-48 kg"
    },
    
    esperanzaVida: "8-10 años",
    
    temperamento: {
        personalidad: "Leal, confiado, valiente, protector, calmado",
        nivelEnergia: "Media-Alta",
        sociabilidad: {
            conHumanos: "Extremadamente leal a la familia, reservado con extraños",
            conNiños: "Buena con socialización (protector pero puede ser rudo)",
            conPerros: "Variable (dominante, especialmente machos)",
            conExtraños: "Protector, territorial, puede ser agresivo sin socialización"
        },
        adiestramiento: "MUY FÁCIL - Inteligente y ansioso por trabajar",
        ladridos: "Bajo-Medio (ladra para alertar)",
        caracteristicas: [
            "Perro guardián por excelencia",
            "Extremadamente leal y protector",
            "Necesita líder FUERTE",
            "Muy inteligente - aprende rápido",
            "Confianza natural en sí mismo",
            "NO apto para dueños primerizos",
            "Puede ser peligroso sin socialización/entrenamiento"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización INTENSIVA desde 8 semanas - CRÍTICO",
                "3-4 comidas al día",
                "Ejercicio moderado (displasia común)",
                "Entrenamiento profesional OBLIGATORIO",
                "NO subir/bajar escaleras hasta 12 meses",
                "Exposición a muchas personas, perros, situaciones",
                "Establecer liderazgo desde cachorro"
            ],
            alertasEspeciales: [
                "Socialización inadecuada = Perro potencialmente peligroso",
                "Requiere dueño experimentado y firme"
            ]
        },
        adulto: {
            edad: "1.5-6 años",
            cuidados: [
                "Ejercicio intenso 1.5-2 horas diarias",
                "2 comidas al día",
                "Entrenamiento continuo (necesita trabajo/propósito)",
                "Socialización continua",
                "Control en público (correa corta, bozal si requerido)",
                "Revisión veterinaria anual"
            ]
        },
        senior: {
            edad: "7+ años",
            cuidados: [
                "Ejercicio moderado 45-60 min",
                "Chequeos cada 6 meses",
                "Vigilar cáncer (COMÚN - 30%+)",
                "Suplementos articulaciones OBLIGATORIO",
                "Vigilar obesidad",
                "Control de dolor articular"
            ],
            enfermedadesComunes: [
                "Cáncer (osteosarcoma) - 30%+",
                "Displasia de cadera severa",
                "Displasia de codo",
                "Problemas cardíacos",
                "Hinchazón gástrica"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas grandes, alto en proteína",
        calorias: "2,000-2,600 cal/día según actividad",
        comidas: {
            cachorro: "3-4 veces al día (crecimiento controlado)",
            adulto: "2 veces al día (NUNCA una sola comida - hinchazón)",
            senior: "2 veces al día (reducir calorías)"
        },
        alertas: [
            "⚠️ Propenso a hinchazón gástrica (MORTAL)",
            "SIEMPRE 2 comidas (nunca una sola grande)",
            "NO ejercicio 1 hora antes/después de comer",
            "Alimentación elevada recomendada",
            "Control de peso estricto"
        ]
    },
    
    problemasCongenitos: [
        "Displasia de cadera (muy común - 20%+)",
        "Displasia de codo",
        "Osteosarcoma (cáncer huesos - 30% de Rotts mueren de esto)",
        "Cardiomiopatía dilatada",
        "Estenosis aórtica subvalvular",
        "Hipotiroidismo",
        "Entropión (párpados)",
        "Atrofia progresiva de retina"
    ],
    
    saludComun: [
        "Displasia de cadera/codo",
        "Cáncer (MUY COMÚN)",
        "Obesidad",
        "Problemas articulares",
        "Hinchazón gástrica",
        "Problemas de piel"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto doble capa, muda moderadamente",
        
        cepillado: {
            frecuencia: {
                normal: "1-2 veces por semana",
                temporadaMuda: "3-4 veces semana"
            }
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas (o cuando esté sucio)"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Nogal Intensificador",
                    prioridad: "Principal",
                    porque: "El Rottweiler tiene pelaje NEGRO y FUEGO (marrón) característico. Shampoo Nogal está formulado específicamente para INTENSIFICAR y REALZAR los tonos oscuros, dándole brillo profundo al negro y realzando el fuego. Mantiene el color rico e intenso característico de la raza.",
                    beneficios: [
                        "Intensifica negro profundo",
                        "Realza tonos fuego/marrón",
                        "Brillo intenso al pelaje oscuro",
                        "Mantiene color rico",
                        "Resalta marcas características"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Nogal-Intensificador-de-Color-Obscuro-1-Litro-p648991047",
                    uso: "Cada 6-8 semanas"
                },
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Complementario",
                    porque: "Rottweilers son perros de trabajo muy activos. Verde repele parásitos y limpia profundamente.",
                    beneficios: [
                        "Protección antiparasitaria",
                        "Limpieza profunda",
                        "Antibacterial"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Alternar con Nogal si muy activo en exteriores"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "🚨 Socialización INTENSIVA desde cachorro - NO NEGOCIABLE",
        "🚨 Entrenamiento profesional OBLIGATORIO",
        "✅ Requiere dueño EXPERIMENTADO y FIRME",
        "⚠️ NO apto para dueños primerizos",
        "✅ Ejercicio intenso diario + trabajo/propósito",
        "⚠️ Responsabilidad LEGAL - seguro recomendado",
        "✅ 2 comidas al día SIEMPRE (prevenir hinchazón)",
        "🚨 Vigilar bultos/masas (cáncer muy común)"
    ],
    
    alertasCriticas: [
        "🚨 Abdomen hinchado + inquietud = Hinchazón gástrica - EMERGENCIA MORTAL",
        "🚨 Cojera + dolor = Displasia/cáncer huesos - VET",
        "🚨 Agresividad súbita = Problema serio - Profesional canino URGENTE",
        "🚨 Bulto/masa = Cáncer común - VET INMEDIATO"
    ],
    
    responsabilidadLegal: {
        titulo: "⚠️ ROTTWEILER = RESPONSABILIDAD LEGAL Y ÉTICA ENORME",
        realidad: [
            "Considerado 'raza potencialmente peligrosa' en muchos lugares",
            "Mandíbula extremadamente poderosa",
            "Instinto de protección/guardia muy fuerte",
            "Puede causar daño SEVERO si ataca",
            "Seguro de responsabilidad civil ALTAMENTE recomendado",
            "Socialización/entrenamiento NO son opcionales - son OBLIGATORIOS",
            "Dueño es 100% responsable de acciones del perro"
        ],
        consideracion: "El Rottweiler es un perro INCREÍBLE para dueños EXPERIMENTADOS y RESPONSABLES. En manos equivocadas, puede ser peligroso. Requiere compromiso TOTAL de socialización, entrenamiento y manejo responsable."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "MUY Alta (come mucho)", 
        veterinario: "MUY Alto (displasia, cáncer)",
        entrenamiento: "MUY Alto (profesional OBLIGATORIO)",
        seguro: "Alto (recomendado)"
    }
},

{
    id: "boxer",
    nombre: "Boxer",
    categoria: "grandes",
    imagen: "🥊",
    tamaño: "Grandes",
    
    origen: {
        pais: "Alemania 🇩🇪",
        epoca: "Siglo XIX",
        historia: "Desarrollado en Alemania cruzando Bullenbeisser (extinto) con Bulldog. Usado para caza mayor, luego como perro de guerra. Nombre 'Boxer' por su tendencia a usar patas delanteras al jugar."
    },
    
    pesoIdeal: {
        macho: "30-32 kg",
        hembra: "25-27 kg"
    },
    
    esperanzaVida: "10-12 años",
    
    temperamento: {
        personalidad: "Juguetón, energético, leal, protector, inteligente",
        nivelEnergia: "MUY Alta",
        sociabilidad: {
            conHumanos: "EXCELENTE - Ama a su familia intensamente",
            conNiños: "EXCELENTE - Paciente, protector, juguetón",
            conPerros: "Variable (puede ser dominante)",
            conExtraños: "Protector pero amigable si se socializa"
        },
        adiestramiento: "Moderado - Inteligente pero terco/payaso",
        ladridos: "Medio",
        caracteristicas: [
            "Permanece 'cachorro' hasta los 3 años",
            "Extremadamente juguetón y energético",
            "Cara arrugada expresiva",
            "Usa patas delanteras al jugar (como boxeador)",
            "Muy protector con familia",
            "Necesita MUCHO ejercicio",
            "Payaso natural - hace reír constantemente"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización temprana intensiva",
                "3-4 comidas al día",
                "Ejercicio moderado (crecimiento controlado)",
                "Entrenamiento desde cachorro (muy energéticos)",
                "Juguetes resistentes (masticadores)",
                "Paciencia (muy hiperactivos)"
            ],
            alertasEspeciales: [
                "Extremadamente energéticos y destructivos sin ejercicio",
                "Pueden ser rudos jugando"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 1.5-2 horas DIARIAS",
                "2 comidas al día",
                "Estimulación mental diaria",
                "Cepillado 1-2 veces semana",
                "Control en clima extremo (braquicéfalo)",
                "Revisión veterinaria anual"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 45-60 min",
                "Chequeos cada 6 meses",
                "Vigilar cáncer (EXTREMADAMENTE COMÚN - 40%+)",
                "Problemas cardíacos (común)",
                "Suplementos articulaciones",
                "Control de peso"
            ],
            enfermedadesComunes: [
                "Cáncer (40%+ de Boxers mueren de cáncer)",
                "Cardiomiopatía (arritmias cardíacas)",
                "Displasia de cadera",
                "Síndrome braquicéfalo",
                "Hipotiroidismo"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas grandes activas",
        calorias: "1,400-2,000 cal/día según actividad",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día (NUNCA una sola - hinchazón)",
            senior: "2 veces al día (reducir calorías)"
        },
        alertas: [
            "⚠️ Propenso a hinchazón gástrica",
            "SIEMPRE 2 comidas (no una sola grande)",
            "NO ejercicio 1 hora antes/después de comer",
            "Alergias alimentarias comunes",
            "Come rápido - plato anti-hinchazón recomendado"
        ]
    },
    
    problemasCongenitos: [
        "Cáncer (40%+ - hemangiosarcoma, linfoma, mast cell tumors)",
        "Cardiomiopatía arritmogénica (ARVC - corazón)",
        "Estenosis aórtica subvalvular (corazón)",
        "Síndrome braquicéfalo",
        "Displasia de cadera",
        "Hipotiroidismo",
        "Degeneración de columna",
        "Alergias severas"
    ],
    
    saludComun: [
        "Cáncer (EXTREMADAMENTE COMÚN)",
        "Alergias de piel (muy común)",
        "Problemas cardíacos",
        "Problemas respiratorios (cara chata)",
        "Infecciones de oído",
        "Hinchazón gástrica",
        "Obesidad"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto, muda moderadamente",
        
        cepillado: {
            frecuencia: {
                normal: "1-2 veces por semana"
            }
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas",
            cuidadosEspeciales: [
                "Limpiar arrugas faciales regularmente",
                "NO ejercicio intenso después del baño (braquicéfalo)"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Boxer es EXTREMADAMENTE activo, enérgico y juguetón. Se mete en todo, corre, salta, juega intensamente. Verde limpia profundamente, repele parásitos (alta exposición por actividad constante) y tiene propiedades antibacterianas. Perfecto para raza tan activa.",
                    beneficios: [
                        "Limpieza profunda para perro muy activo",
                        "Repele parásitos 14 días",
                        "Antibacterial + Antifúngico",
                        "Controla olor",
                        "Ideal para perros energéticos"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 6-8 semanas"
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario - Alergias",
                    porque: "Boxers son MUY propensos a alergias de piel. Si tu Boxer se rasca o tiene piel irritada, alternar con Suave.",
                    beneficios: [
                        "Calma alergias",
                        "Hipoalergénico",
                        "Reduce comezón"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Alternar con Verde si hay alergias de piel"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "✅ Ejercicio INTENSO DIARIO - NO negociable (destructivo sin ejercicio)",
        "⚠️ NO ejercicio en calor extremo (braquicéfalo - puede morir)",
        "✅ Vigilar bultos/masas constantemente (cáncer MUY común)",
        "⚠️ Chequeos cardíacos anuales OBLIGATORIOS",
        "✅ 2 comidas al día SIEMPRE (prevenir hinchazón)",
        "⚠️ Paciencia - permanecen 'cachorros' hasta 3 años",
        "✅ Entrenamiento consistente (tercos pero inteligentes)"
    ],
    
    alertasCriticas: [
        "🚨 Bulto/masa en cuerpo = VET INMEDIATO (cáncer extremadamente común)",
        "🚨 Desmayo/debilidad = Problema cardíaco - VET URGENTE",
        "🚨 Abdomen hinchado = Hinchazón gástrica - EMERGENCIA",
        "🚨 Jadeo excesivo en calor = Golpe de calor - EMERGENCIA"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Alta", 
        veterinario: "MUY Alto (cáncer - tratamientos costosísimos, problemas cardíacos)",
        grooming: "Bajo"
    }
},

{
    id: "dalmata",
    nombre: "Dálmata",
    nombresAlternativos: ["Dalmatian"],
    categoria: "grandes",
    imagen: "🐕",
    tamaño: "Grandes",
    
    origen: {
        pais: "Croacia 🇭🇷",
        epoca: "Antigua (referencias desde 1600s)",
        historia: "Origen en Dalmacia, Croacia. Usado como perro guardián de carruajes, corriendo junto a caballos. Popularizado como mascota de bomberos en Estados Unidos. Famoso por película '101 Dálmatas'."
    },
    
    pesoIdeal: {
        macho: "27-32 kg",
        hembra: "24-29 kg"
    },
    
    esperanzaVida: "11-13 años",
    
    temperamento: {
        personalidad: "Enérgico, inteligente, leal, activo, amigable",
        nivelEnergia: "MUY Alta",
        sociabilidad: {
            conHumanos: "Buena - Leal a la familia",
            conNiños: "Buena con supervisión (muy enérgico, puede tirar niños pequeños)",
            conPerros: "Buena con socialización",
            conExtraños: "Reservado, puede ser territorial"
        },
        adiestramiento: "Moderado - Inteligente pero independiente",
        ladridos: "Medio",
        caracteristicas: [
            "Manchas negras/hígado distintivas (nacen blancos)",
            "Resistencia EXTREMA - puede correr HORAS",
            "Criado para correr junto a carruajes",
            "Necesita MUCHO ejercicio (más que la mayoría de razas)",
            "Muy energético y activo",
            "Puede ser destructivo sin ejercicio suficiente",
            "Sonrisa característica"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Nacen completamente BLANCOS (manchas aparecen 2-4 semanas)",
                "Socialización temprana intensiva",
                "3-4 comidas al día",
                "Ejercicio progresivo (muy energéticos)",
                "Entrenamiento desde cachorro",
                "Dieta baja en purinas desde cachorro (cálculos)",
                "MUCHA paciencia (hiperactivos)"
            ],
            alertasEspeciales: [
                "20-30% nacen SORDOS (unilateral o bilateral)",
                "Test de audición OBLIGATORIO a las 6 semanas"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 2+ horas DIARIAS",
                "2 comidas al día (dieta baja en purinas)",
                "Cepillado 2-3 veces semana (muda MUCHO)",
                "Estimulación mental diaria",
                "Revisión veterinaria anual",
                "MUCHA agua siempre disponible (cálculos urinarios)"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado-intenso 1-1.5 horas",
                "Chequeos cada 6 meses",
                "Vigilar cálculos urinarios (CRÍTICO)",
                "Monitoreo de sordera (puede empeorar)",
                "Suplementos articulaciones",
                "Continuar dieta baja en purinas"
            ],
            enfermedadesComunes: [
                "Cálculos urinarios (ácido úrico - casi todos los Dálmatas)",
                "Sordera",
                "Displasia de cadera",
                "Alergias de piel",
                "Hipotiroidismo"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium BAJO EN PURINAS (CRÍTICO para Dálmatas)",
        calorias: "1,400-1,800 cal/día según actividad intensa",
        comidas: {
            cachorro: "3-4 veces al día (dieta baja en purinas desde cachorro)",
            adulto: "2 veces al día (SIEMPRE bajo en purinas)",
            senior: "2 veces al día (continuar bajo en purinas)"
        },
        alertas: [
            "⚠️ CRÍTICO: Dálmatas NO pueden metabolizar purinas correctamente",
            "Evitar ABSOLUTAMENTE: vísceras, sardinas, anchoas, levadura",
            "Dieta BAJA EN PURINAS toda la vida - NO NEGOCIABLE",
            "MUCHA agua siempre (prevenir cálculos - 2-3 litros/día)",
            "Evitar proteína excesiva",
            "Algunos requieren alimento prescrito especial"
        ],
        suplementos: [
            "Omega 3 (piel - alergias comunes)",
            "Glucosamina (articulaciones)",
            "Citrato de potasio (prevención cálculos - bajo supervisión veterinaria)"
        ]
    },
    
    problemasCongenitos: [
        "Sordera congénita (20-30% - unilateral o bilateral)",
        "Cálculos urinarios de ácido úrico (casi 100% predisposición genética)",
        "Hiperuricemia (ácido úrico elevado - TODOS los Dálmatas)",
        "Displasia de cadera",
        "Alergias de piel severas",
        "Hipotiroidismo",
        "Síndrome de Dálmata bronceado (manchas cambian de color)"
    ],
    
    saludComun: [
        "Cálculos urinarios (MUY COMÚN - 30%+)",
        "Sordera (20-30%)",
        "Alergias de piel (común)",
        "Infecciones urinarias recurrentes",
        "Obesidad si no tiene ejercicio suficiente"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto, muda TODO EL AÑO (EXTREMO)",
        
        cepillado: {
            frecuencia: {
                normal: "2-3 veces por semana MÍNIMO",
                realidad: "DIARIO recomendado (muda excesiva constante)"
            },
            herramientas: [
                {
                    herramienta: "Guante de goma para muda",
                    funcion: "Remueve pelo muerto efectivamente",
                    obligatorio: true
                },
                {
                    herramienta: "Cepillo de cerdas",
                    funcion: "Distribuye aceites naturales",
                    obligatorio: true
                }
            ],
            realidadMuda: [
                "Dálmatas mudan 365 días al año",
                "Pelo corto BLANCO se pega a TODO",
                "Casa/ropa/muebles cubiertos de pelo",
                "Aspiradora diaria necesaria",
                "NO apto para personas obsesionadas con limpieza"
            ]
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Dálmata es EXTREMADAMENTE activo, corre horas diariamente, alta resistencia. Criado para correr junto a carruajes. Verde limpia profundamente, repele parásitos (altísima exposición por actividad constante) y controla olor. Perfecto para perro con tanta energía y actividad.",
                    beneficios: [
                        "Limpieza profunda para perro ultra activo",
                        "Repele parásitos 14 días",
                        "Antibacterial + Antifúngico",
                        "Controla olor por actividad intensa",
                        "Ideal para perros de alta resistencia"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 6-8 semanas"
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario - Alergias",
                    porque: "Dálmatas son propensos a alergias de piel. Usar Suave si presenta comezón o dermatitis.",
                    beneficios: [
                        "Calma alergias",
                        "Hipoalergénico",
                        "Reduce comezón"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Alternar con Verde si hay alergias"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "✅ Ejercicio INTENSO 2+ HORAS diarias - MÁS que mayoría de razas",
        "🚨 Test de audición OBLIGATORIO a las 6 semanas (20-30% sordos)",
        "✅ Dieta BAJA EN PURINAS toda la vida - NO NEGOCIABLE",
        "✅ MUCHA agua siempre (prevenir cálculos)",
        "⚠️ NO dar vísceras, sardinas, anchoas, levadura NUNCA",
        "✅ Prepararse para PELO en toda la casa (mudan 365 días/año)",
        "⚠️ Orina frecuente (mucha agua) - acceso constante a exterior",
        "✅ Exámenes de orina anuales OBLIGATORIOS"
    ],
    
    alertasCriticas: [
        "🚨 Dificultad para orinar + sangre = Cálculo bloqueando - EMERGENCIA MORTAL",
        "🚨 Orina frecuente + sangre = Cálculos/infección - VET URGENTE",
        "🚨 Sordera súbita = VET (puede empeorar con edad)",
        "🚨 Rascado severo = Alergias - VET"
    ],
    
    realidadDeLaRaza: {
        titulo: "⚠️ REALIDAD DEL DÁLMATA - NO es como '101 Dálmatas'",
        mitos: [
            "Película '101 Dálmatas' causó BOOM de adopciones irresponsables",
            "Muchos abandonados porque dueños NO esperaban:",
            "  - Nivel de energía EXTREMO (necesita HORAS de ejercicio)",
            "  - Muda EXCESIVA 365 días/año",
            "  - Problemas de salud crónicos (cálculos)",
            "  - Sordera en 20-30%",
            "  - Dieta especial cara de por vida"
        ],
        realidad: "Dálmata es perro ATLETA que requiere dueño ACTIVO, comprometido con ejercicio intenso diario, preparado para pelo en todas partes y gastos veterinarios/alimentación especiales. NO es perro de familia promedio."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública - Alta actividad en exteriores" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "MUY Alta (alimento especial bajo en purinas CARO)", 
        veterinario: "MUY Alto (cálculos urinarios recurrentes, cirugías)",
        ejercicio: "EXTREMO (requiere dueño MUY activo)",
        limpieza: "EXTREMO (pelo en toda la casa - aspiradora diaria)"
    }
},

{
    id: "border-collie",
    nombre: "Border Collie",
    nombresAlternativos: ["Collie de la Frontera"],
    categoria: "grandes",
    imagen: "🐕‍🦺",
    tamaño: "Medianas-Grandes",
    
    origen: {
        pais: "Escocia/Inglaterra 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        epoca: "Siglo XIX",
        historia: "Desarrollado en la frontera escocesa-inglesa para pastoreo de ovejas. Considerado el MEJOR perro pastor del mundo. Nombre 'Border' por región fronteriza."
    },
    
    pesoIdeal: {
        macho: "14-20 kg",
        hembra: "12-19 kg"
    },
    
    esperanzaVida: "12-15 años",
    
    temperamento: {
        personalidad: "Inteligente, enérgico, alerta, trabajador, intenso",
        nivelEnergia: "EXTREMADAMENTE Alta",
        sociabilidad: {
            conHumanos: "Leal pero puede ser reservado con extraños",
            conNiños: "Buena con supervisión (puede 'pastorearlos' - pellizcar talones)",
            conPerros: "Buena con socialización",
            conExtraños: "Reservado, puede ser territorial"
        },
        adiestramiento: "EXTREMADAMENTE FÁCIL - Raza #1 MÁS INTELIGENTE del mundo",
        ladridos: "Medio-Alto (ladra mientras pastorea)",
        caracteristicas: [
            "Perro MÁS INTELIGENTE del mundo",
            "Necesita TRABAJO - no solo ejercicio",
            "Mirada hipnótica característica ('eye')",
            "Obsesivo-compulsivo con pelotas/frisbees",
            "Puede desarrollar neurosis sin estimulación",
            "NO apto para dueños sedentarios",
            "Aprende comandos en 5 repeticiones o menos"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización intensiva (tiende a timidez)",
                "3-4 comidas al día",
                "Ejercicio moderado + estimulación mental INTENSA",
                "Entrenamiento desde 8 semanas (aprenden rapidísimo)",
                "Exposición a muchas situaciones",
                "Canalizar instinto de pastoreo apropiadamente",
                "Prevenir comportamientos obsesivos"
            ],
            alertasEspeciales: [
                "Pueden desarrollar obsesiones si no se estimulan apropiadamente",
                "Instinto de pastoreo puede llevar a pellizcar talones"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 2+ horas MÍNIMO",
                "Estimulación mental DIARIA obligatoria (agility, pastoreo, tricks)",
                "2 comidas al día",
                "Trabajo/propósito OBLIGATORIO",
                "Cepillado 3-4 veces semana",
                "Socialización continua"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado-intenso 1-1.5 horas",
                "Continuar estimulación mental (crítico)",
                "Chequeos cada 6 meses",
                "Vigilar displasia de cadera",
                "Suplementos articulaciones",
                "Mantener rutina/trabajo (ansiedad sin propósito)"
            ],
            enfermedadesComunes: [
                "Displasia de cadera",
                "Epilepsia",
                "Atrofia progresiva de retina",
                "Anomalía del ojo del Collie (CEA)",
                "Sensibilidad a medicamentos (gen MDR1)"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium alto en proteína para perros muy activos",
        calorias: "1,200-1,700 cal/día según actividad (muy alta)",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día (ajustar según actividad)"
        },
        alertas: [
            "Requiere dieta para perros MUY activos",
            "Alta proteína para energía constante",
            "Algunos sensibles a ciertos alimentos",
            "Control de peso si no trabajan/compiten"
        ]
    },
    
    problemasCongenitos: [
        "Anomalía del ojo del Collie (CEA)",
        "Atrofia progresiva de retina",
        "Sensibilidad a medicamentos MDR1 (CRÍTICO - ivermectina puede ser MORTAL)",
        "Epilepsia",
        "Displasia de cadera",
        "Neurosis/TOC si no se estimulan apropiadamente"
    ],
    
    saludComun: [
        "Displasia de cadera",
        "Problemas oculares",
        "Alergias de piel (moderado)",
        "Epilepsia",
        "Comportamientos obsesivo-compulsivos (sin estimulación)",
        "Ansiedad (sin trabajo/propósito)"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa de longitud media, muda moderadamente",
        
        cepillado: {
            frecuencia: {
                normal: "3-4 veces por semana",
                temporadaMuda: "DIARIO (primavera y otoño)"
            },
            herramientas: [
                {
                    herramienta: "Cepillo slicker",
                    funcion: "Elimina nudos y pelo muerto",
                    obligatorio: true
                },
                {
                    herramienta: "Rastrillo de subpelo",
                    funcion: "Remueve subpelo en muda",
                    obligatorio: true
                }
            ]
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas (o cuando esté sucio)"
        },
        
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
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario - Piel sensible",
                    porque: "Border Collies pueden desarrollar alergias de piel. Usar Suave si presenta comezón o irritación.",
                    beneficios: [
                        "Hipoalergénico",
                        "Calma piel sensible",
                        "Reduce comezón"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Si presenta alergias de piel"
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
        }
    },
    
    tipsEspecificos: [
        "🚨 Necesita 2-3 horas ejercicio INTENSO + estimulación mental DIARIA",
        "🚨 NO apto para dueños sedentarios o con poco tiempo",
        "✅ Agility, pastoreo, frisbee, tricks - NECESITA trabajo",
        "⚠️ Puede desarrollar TOC/neurosis sin estimulación apropiada",
        "✅ Raza #1 más inteligente - entrenamiento avanzado recomendado",
        "⚠️ Test MDR1 CRÍTICO (ivermectina/algunos medicamentos MORTALES)",
        "✅ NO usar como 'perro de familia' sin darle trabajo",
        "⚠️ Puede 'pastorear' niños/otros animales (pellizcar talones)"
    ],
    
    alertasCriticas: [
        "🚨 Convulsiones = Epilepsia - VET",
        "🚨 Problemas de visión = CEA/PRA - VET",
        "🚨 Comportamientos obsesivos extremos = Falta estimulación - Profesional",
        "🚨 NUNCA dar ivermectina sin test MDR1 - PUEDE SER MORTAL"
    ],
    
    realidadDeLaRaza: {
        titulo: "⚠️ BORDER COLLIE - Perro más inteligente NO significa 'fácil'",
        realidad: [
            "SÍ, es el perro más inteligente del mundo",
            "PERO requiere MÁS trabajo que razas 'tontas'",
            "Necesita 2-3 HORAS ejercicio + estimulación mental DIARIA",
            "Sin trabajo apropiado desarrolla:",
            "  - Comportamientos obsesivo-compulsivos",
            "  - Ansiedad severa",
            "  - Destructividad extrema",
            "  - Ladrido excesivo",
            "  - Neurosis",
            "NO es perro para todos - requiere dueño ACTIVO y COMPROMETIDO",
            "Mejor para: competencia agility, pastoreo, búsqueda y rescate"
        ],
        consideracion: "El Border Collie es INCREÍBLE para dueño correcto. Para dueño equivocado, es PESADILLA. Evalúa HONESTAMENTE tu estilo de vida antes de adoptar."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública - Muy activo en exteriores" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Alta (come bastante + alimento premium para activos)", 
        veterinario: "Medio",
        estimulacion: "EXTREMO (agility, pastoreo, entrenamiento - NO opcional)",
        tiempo: "EXTREMO (2-3 horas diarias mínimo)"
    }
},

{
    id: "criolla",
    nombre: "Criolla",
    nombresAlternativos: ["Mestizo", "Criollo", "Perro Callejero", "Corriente"],
    categoria: "medianas",
    imagen: "🐕",
    tamaño: "Variable (Pequeñas a Grandes)",
    
    origen: {
        pais: "México 🇲🇽",
        epoca: "Siglos de mestizaje natural",
        historia: "Perros criollos son resultado de siglos de mestizaje natural sin intervención humana selectiva. Representan la mayoría de perros en México. Extremadamente adaptables y resistentes."
    },
    
    pesoIdeal: {
        variable: "5-30 kg (depende del mestizaje)"
    },
    
    esperanzaVida: "12-16 años (generalmente MÁS longevos que razas puras)",
    
    temperamento: {
        personalidad: "Variable - Generalmente amigable, leal, inteligente, adaptable",
        nivelEnergia: "Media-Alta (variable)",
        sociabilidad: {
            conHumanos: "Generalmente EXCELENTE - Muy agradecidos",
            conNiños: "Generalmente muy buena",
            conPerros: "Variable - Depende de socialización",
            conExtraños: "Variable - Puede ser territorial o amigable"
        },
        adiestramiento: "Moderado - Inteligentes y adaptables",
        ladridos: "Variable",
        caracteristicas: [
            "Cada perro es ÚNICO - no hay estándar",
            "Generalmente MÁS saludables que razas puras",
            "Extremadamente adaptables",
            "Inteligencia callejera superior",
            "Leales y agradecidos",
            "Sistema inmune generalmente más fuerte",
            "Menos problemas genéticos"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "Socialización temprana (especialmente si rescatado de calle)",
                "3-4 comidas al día",
                "Vacunación completa CRÍTICA",
                "Desparasitación intensiva si rescatado",
                "Chequeo veterinario completo",
                "Entrenamiento básico",
                "Paciencia (puede tener traumas si rescatado)"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio 30-60 min diarios (ajustar según tamaño/energía)",
                "2 comidas al día",
                "Cepillado 1-2 veces semana (ajustar según tipo de pelo)",
                "Revisión veterinaria anual",
                "Esterilización ALTAMENTE recomendada"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado ajustado",
                "Chequeos cada 6 meses",
                "Vigilar problemas comunes (artritis, dental)",
                "Suplementos según necesidad",
                "Alimento senior"
            ],
            enfermedadesComunes: [
                "Variables - generalmente MENOS problemas que razas puras",
                "Artritis (común en senior)",
                "Problemas dentales (si no hubo cuidado)",
                "Obesidad (si sobrealimentado)"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium balanceado según tamaño",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día (ajustar calorías)"
        },
        alertas: [
            "Ajustar según tamaño y nivel de actividad",
            "Muchos rescatados tienen historial de hambruna - evitar sobrealimentación",
            "Control de peso importante",
            "Algunos pueden tener alergias alimentarias"
        ]
    },
    
    problemasCongenitos: [
        "MUCHO MENOS problemas genéticos que razas puras",
        "Vigor híbrido - generalmente más saludables",
        "Problemas variables según ancestros",
        "Sistema inmune generalmente más fuerte"
    ],
    
    saludComun: [
        "Generalmente MÁS saludables que razas puras",
        "Problemas dentales (si no hay cuidado)",
        "Parásitos (si rescatado de calle)",
        "Obesidad (si sobrealimentado)",
        "Artritis en senior"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "VARIABLE - Puede ser corto, largo, liso, rizado",
        
        cepillado: {
            frecuencia: {
                peloCorto: "1-2 veces semana",
                peloLargo: "3-4 veces semana"
            }
        },
        
        baño: {
            frecuencia: "Cada 4-6 semanas (ajustar según necesidad)"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal - ESPECIALMENTE para rescatados",
                    porque: "Perros criollos, especialmente rescatados de la calle, tienen ALTA exposición a parásitos, bacterias, hongos y condiciones difíciles. Verde es ANTIBACTERIAL + ANTIFÚNGICO + REPELENTE, perfecto para perros que han vivido en la calle o tienen alta exposición a ambientes diversos. Limpieza profunda y protección.",
                    beneficios: [
                        "Limpieza profunda (crítico para rescatados)",
                        "Antibacterial + Antifúngico",
                        "Repele parásitos 14 días",
                        "Ayuda con problemas de piel por calle",
                        "Elimina olor de calle",
                        "Protección continua"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 4-6 semanas"
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario - Piel sensible",
                    porque: "Algunos criollos desarrollan piel sensible. Usar Suave si hay comezón o irritación.",
                    beneficios: [
                        "Hipoalergénico",
                        "Calma piel irritada",
                        "Hidrata piel maltratada"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Si presenta problemas de piel"
                },
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Solo para criollos de pelo largo",
                    porque: "Si tu criollo tiene pelo largo que se enreda.",
                    beneficios: [
                        "Facilita cepillado",
                        "Previene nudos"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Solo si tiene pelo largo"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "✅ Esterilización ALTAMENTE recomendada (previene sobrepoblación)",
        "✅ Vacunación completa CRÍTICA",
        "✅ Desparasitación regular (especialmente si rescatado)",
        "✅ Microchip recomendado",
        "⚠️ Paciencia si rescatado (puede tener traumas)",
        "✅ Chequeo veterinario completo al adoptar",
        "✅ Socialización importante (especialmente si rescatado adulto)",
        "✅ Son EXTREMADAMENTE leales y agradecidos"
    ],
    
    ventajasDelCriollo: {
        titulo: "✅ VENTAJAS DEL PERRO CRIOLLO",
        beneficios: [
            "MÁS saludables - menos problemas genéticos",
            "MÁS longevos - viven 2-3 años más que razas puras promedio",
            "MÁS resistentes - sistema inmune más fuerte",
            "MÁS adaptables - se ajustan a cualquier situación",
            "MENOS costosos - menos visitas veterinarias por problemas genéticos",
            "ÚNICOS - no hay dos iguales",
            "Extremadamente AGRADECIDOS - saben que los rescataste",
            "Inteligencia callejera - muy listos",
            "NO contribuyes a crianza irresponsable",
            "Salvas una vida - hay MILES esperando en refugios"
        ]
    },
    
    adopcionResponsable: {
        titulo: "🏠 ADOPTA, NO COMPRES",
        mensaje: "México tiene MILLONES de perros criollos en situación de calle o refugios. Adoptar un criollo:",
        beneficios: [
            "✅ Salva una vida",
            "✅ Reduces sobrepoblación canina",
            "✅ Obtienes compañero leal y saludable",
            "✅ Generalmente ya esterilizados/vacunados en refugios",
            "✅ Costos menores a largo plazo",
            "✅ Satisfacción de dar segunda oportunidad"
        ],
        consideracion: "Los perros criollos son INCREÍBLES compañeros. No necesitas pagar miles por raza 'pura' con problemas de salud. Los mejores perros del mundo están esperando en refugios."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "CRÍTICO para salud pública - Especialmente si rescatado de calle" }},
    costoMantenimiento: { 
        nivel: "Bajo-Medio", 
        alimentacion: "Variable según tamaño", 
        veterinario: "Generalmente BAJO (menos problemas genéticos)",
        grooming: "Variable según tipo de pelo",
        adopcion: "Gratis o costo mínimo en refugios"
    }
},

{
    id: "french-poodle",
    nombre: "French Poodle",
    nombresAlternativos: ["Caniche", "Poodle", "Pudel"],
    categoria: "medianas",
    imagen: "🐩",
    tamaño: "Variable (Toy, Miniatura, Estándar)",
    
    origen: {
        pais: "Francia 🇫🇷 / Alemania 🇩🇪",
        epoca: "Siglo XV",
        historia: "A pesar del nombre 'French', origen debatido entre Francia y Alemania. Desarrollado como perro cobrador de agua. 'Poodle' viene del alemán 'Pudel' (chapotear en agua). Corte elegante originalmente funcional para natación."
    },
    
    pesoIdeal: {
        toy: "2-3 kg",
        miniatura: "6-7 kg",
        estandar: "20-32 kg"
    },
    
    esperanzaVida: "12-15 años",
    
    temperamento: {
        personalidad: "Inteligente, elegante, activo, leal, orgulloso",
        nivelEnergia: "Alta",
        sociabilidad: {
            conHumanos: "EXCELENTE - Muy apegado a la familia",
            conNiños: "Excelente - Juguetón y paciente",
            conPerros: "Buena con socialización",
            conExtraños: "Amigable pero puede ser reservado"
        },
        adiestramiento: "MUY FÁCIL - Raza #2 más inteligente del mundo",
        ladridos: "Medio",
        caracteristicas: [
            "Raza #2 más inteligente del mundo",
            "Pelo RIZADO extremadamente denso",
            "NO muda (hipoalergénico)",
            "Nadador excepcional",
            "Muy elegante y aristocrático",
            "Requiere grooming PROFESIONAL obligatorio",
            "Aprende trucos rapidísimo"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "Socialización temprana intensiva",
                "3-4 comidas al día (según tamaño)",
                "Entrenamiento desde cachorro (aprenden muy rápido)",
                "Cepillado DIARIO desde cachorro OBLIGATORIO",
                "Introducción a grooming profesional TEMPRANO",
                "Ejercicio moderado"
            ],
            alertasEspeciales: [
                "Pelo rizado se enreda en HORAS - cepillado diario NO opcional"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio 45-60 min diarios (aman nadar)",
                "Grooming profesional cada 4-6 semanas OBLIGATORIO",
                "2 comidas al día",
                "Cepillado DIARIO sin excepción",
                "Estimulación mental diaria",
                "Revisión veterinaria anual"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 30-45 min",
                "Chequeos cada 6 meses",
                "Vigilar displasia de cadera",
                "Problemas oculares (cataratas comunes)",
                "Suplementos articulaciones",
                "Continuar grooming regular"
            ],
            enfermedadesComunes: [
                "Displasia de cadera",
                "Atrofia progresiva de retina",
                "Epilepsia",
                "Enfermedad de Addison",
                "Hipotiroidismo"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium según tamaño (toy/miniatura/estándar)",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día (ajustar calorías)"
        },
        alertas: [
            "Propenso a alergias alimentarias",
            "Control de peso (obesidad común en sedentarios)",
            "Algunos tienen estómago sensible",
            "Evitar sobrealimentación"
        ]
    },
    
    problemasCongenitos: [
        "Atrofia progresiva de retina (PRA)",
        "Displasia de cadera (Estándar)",
        "Luxación de rótula (Toy y Miniatura)",
        "Epilepsia",
        "Enfermedad de Von Willebrand (coagulación)",
        "Enfermedad de Addison",
        "Colapso traqueal (Toy)",
        "Hipotiroidismo"
    ],
    
    saludComun: [
        "Problemas oculares (PRA, cataratas)",
        "Alergias de piel (común)",
        "Infecciones de oído (orejas caídas + pelo en canal)",
        "Problemas dentales (especialmente Toy)",
        "Obesidad si sedentario"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo RIZADO extremadamente denso que crece SIN PARAR - NO muda",
        
        cepillado: {
            frecuencia: {
                normal: "DIARIO - Absolutamente NO NEGOCIABLE",
                realidad: "Sin cepillado diario = nudos SEVEROS en 1-2 días"
            },
            herramientas: [
                {
                    herramienta: "Cepillo slicker (grande)",
                    funcion: "Desenreda rizos diariamente",
                    obligatorio: true
                },
                {
                    herramienta: "Peine metálico de dientes largos",
                    funcion: "Verifica nudos profundos en subpelo",
                    obligatorio: true
                },
                {
                    herramienta: "Rastrillo de subpelo",
                    funcion: "Penetra pelo denso rizado",
                    obligatorio: true
                }
            ],
            proceso: [
                "1. Separar pelo en secciones",
                "2. Cepillar capa por capa (de piel hacia afuera)",
                "3. Verificar con peine que no haya nudos",
                "4. Atención EXTRA: orejas, axilas, patas, cola, área genital",
                "5. TODO el cuerpo - no dejar áreas sin cepillar"
            ],
            consecuenciasNoCepillar: [
                "Nudos SEVEROS en 1-2 días",
                "Pelo forma 'dreadlocks' dolorosos",
                "Requiere rasurado COMPLETO (pérdida total del look)",
                "Nudos apretados causan dolor e irritación de piel",
                "Groomer NO puede trabajar con nudos severos",
                "Costo adicional por dematting o obligatorio rasurar"
            ]
        },
        
        baño: {
            frecuencia: "Cada 3-4 semanas (idealmente antes de grooming)",
            proceso: [
                "1. Cepillar COMPLETAMENTE antes del baño (nudos se endurecen con agua)",
                "2. Agua tibia",
                "3. Shampoo hasta la piel (pelo muy denso)",
                "4. Masajear profundamente",
                "5. Enjuagar MUY bien (2-3 veces)",
                "6. Acondicionador OBLIGATORIO (crítico para rizos)",
                "7. Enjuagar completamente",
                "8. Secar con toalla",
                "9. Secadora a temperatura media",
                "10. Cepillar MIENTRAS seca (crítico)"
            ],
            cuidadosEspeciales: [
                "Limpiar orejas después del baño",
                "Arrancar pelo del canal auditivo (groomer)",
                "Secar completamente entre dedos",
                "Pelo debe quedar 100% seco (humedad = hongos)"
            ]
        },
        
        corte: {
            critico: true,
            frecuencia: "Cada 4-6 semanas con groomer profesional - ABSOLUTAMENTE OBLIGATORIO",
            razon: "El pelo del Poodle crece SIN PARAR como cabello humano. Sin corte regular, se convierte en masa inmanejable de nudos. NO ES OPCIONAL.",
            estilos: [
                {
                    nombre: "Corte Continental/Show",
                    descripcion: "Corte clásico de exposición: pompones en patas, cola, orejas. Cuerpo rapado. Muy elaborado.",
                    mantenimiento: "EXTREMO - Solo para show o dueños muy dedicados"
                },
                {
                    nombre: "Corte cachorro/Puppy cut",
                    descripcion: "TODO el cuerpo a longitud uniforme (generalmente 2-4 cm). Cara redondeada.",
                    mantenimiento: "Alto pero manejable - MÁS PRÁCTICO"
                },
                {
                    nombre: "Corte Teddy Bear",
                    descripcion: "Similar a puppy cut pero cara más redondeada como osito. Muy popular.",
                    mantenimiento: "Alto - Requiere cepillado diario"
                },
                {
                    nombre: "Corte León",
                    descripcion: "Melena completa en pecho/cabeza, cuerpo rapado, pompón en cola.",
                    mantenimiento: "Muy alto"
                }
            ],
            serviciosGroomer: [
                "Corte completo de pelo",
                "Plucking de oídos (arrancar pelo del canal auditivo)",
                "Recorte de uñas",
                "Limpieza de glándulas anales",
                "Baño profesional",
                "Secado completo",
                "Limpieza de oídos",
                "Corte de pelo entre almohadillas"
            ],
            costo: "$600-1,200 MXN cada 4-6 semanas (según tamaño)",
            realidad: "Es un COMPROMISO FINANCIERO de por vida. Presupuesta $7,200-14,400 MXN/año SOLO en grooming. Sin grooming profesional, el Poodle es IMPOSIBLE de mantener."
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
                    uso: "Cada 3-4 semanas + cepillado diario OBLIGATORIO",
                    aplicacion: "Aplicar generosamente, trabajar TODO el pelo rizado, masajear 5 minutos, enjuagar completamente"
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario - Piel sensible",
                    porque: "Poodles tienen piel sensible debajo de todo ese pelo rizado. Usar Suave para hidratación profunda o si presenta alergias (común en la raza).",
                    beneficios: [
                        "Hidrata piel debajo del pelo denso",
                        "Calma piel sensible",
                        "Hipoalergénico"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Alternar con Cero Nudos si piel sensible"
                }
            ],
            
            notaCritica: {
                titulo: "⚠️ POODLE = GROOMING PROFESIONAL OBLIGATORIO",
                realidad: "El Poodle NO es una raza de 'bajo mantenimiento'. Su pelo crece SIN PARAR y requiere:",
                obligatorio: [
                    "🔴 Grooming profesional cada 4-6 semanas - NO OPCIONAL - $600-1,200 MXN por sesión",
                    "🔴 Cepillado DIARIO en casa sin excepción - 15-30 min/día",
                    "🔴 Acondicionador SIEMPRE (Cero Nudos) - nudos sin acondicionador",
                    "🔴 Presupuesto anual grooming: $7,200-14,400 MXN MÍNIMO"
                ],
                consideracion: "Si NO puedes comprometerte con cepillado diario + grooming profesional mensual + presupuesto, NO adoptes Poodle. Sin mantenimiento apropiado = sufrimiento del perro."
            }
        }
    },
    
    tipsEspecificos: [
        "🚨 Cepillado DIARIO sin excepción - 15-30 min",
        "🚨 Grooming profesional cada 4-6 semanas OBLIGATORIO",
        "✅ Presupuestar $7,200-14,400 MXN/año en grooming",
        "✅ Acondicionador SIEMPRE (nudos inmediatos sin él)",
        "✅ Limpieza de oídos semanal (pelo crece dentro)",
        "✅ Estimulación mental diaria (muy inteligentes)",
        "⚠️ Aman nadar - excelente ejercicio",
        "✅ Hipoalergénico - bueno para alérgicos"
    ],
    
    alertasCriticas: [
        "🚨 Problemas de visión = PRA - VET",
        "🚨 Convulsiones = Epilepsia - VET",
        "🚨 Cojera = Displasia/luxación - VET",
        "🚨 Infecciones de oído recurrentes = Pelo en canal - Groomer + VET"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "EXTREMADAMENTE Alto", 
        alimentacion: "Media-Alta (según tamaño)", 
        veterinario: "Medio-Alto",
        grooming: "EXTREMADAMENTE Alto ($7,200-14,400 MXN/año OBLIGATORIO)",
        tiempo: "EXTREMO (cepillado diario 15-30 min)",
        compromiso: "TOTAL - No apto para personas sin tiempo/presupuesto"
    }
},


{
    id: "calupoh",
    nombre: "Calupoh",
    nombresAlternativos: ["Perro Lobo Mexicano", "Mexican Wolfdog"],
    categoria: "grandes",
    imagen: "🐺",
    tamaño: "Grandes",
    
    origen: {
        pais: "México 🇲🇽",
        epoca: "1999 (raza moderna)",
        historia: "Raza MEXICANA desarrollada cruzando perros con lobo gris mexicano (Canis lupus baileyi). Creada por la Universidad Nacional Autónoma de México (UNAM) para preservar genética del lobo mexicano en peligro de extinción. Primera y ÚNICA raza reconocida 100% mexicana."
    },
    
    pesoIdeal: {
        macho: "25-35 kg",
        hembra: "20-30 kg"
    },
    
    esperanzaVida: "12-14 años",
    
    temperamento: {
        personalidad: "Leal, inteligente, noble, reservado, independiente",
        nivelEnergia: "MUY Alta",
        sociabilidad: {
            conHumanos: "Leal a SU familia, muy reservado con extraños",
            conNiños: "Buena con socialización temprana y supervisión",
            conPerros: "Variable - Jerarquía de manada importante",
            conExtraños: "MUY reservado, desconfiado (herencia lobo)"
        },
        adiestramiento: "DIFÍCIL - Muy inteligente pero independiente como lobo",
        ladridos: "Bajo - Prefiere aullar (herencia lobo)",
        caracteristicas: [
            "Único perro 100% mexicano reconocido",
            "Apariencia de LOBO distintiva",
            "Aúlla como lobo (poco ladrido)",
            "Muy reservado con extraños",
            "Estructura de manada fuerte",
            "Requiere dueño EXPERIMENTADO",
            "NO apto para primerizos",
            "Necesita socialización EXTREMA"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización INTENSIVA desde 8 semanas - CRÍTICO",
                "3-4 comidas al día",
                "Exposición a muchas personas, perros, situaciones",
                "Entrenamiento profesional OBLIGATORIO",
                "Establecer jerarquía clara desde cachorro",
                "Ejercicio moderado (crecimiento)",
                "Reforzar vínculo con familia humana"
            ],
            alertasEspeciales: [
                "Socialización inadecuada = Perro muy difícil/peligroso",
                "Requiere dueño con experiencia en razas primitivas"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 2+ horas diarias",
                "2 comidas al día",
                "Estimulación mental constante",
                "Refuerzo de entrenamiento continuo",
                "Socialización continua",
                "Liderazgo firme pero respetuoso",
                "Cepillado 2-3 veces semana"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado-intenso 1-1.5 horas",
                "Chequeos cada 6 meses",
                "Mantener rutina establecida",
                "Suplementos articulaciones",
                "Alimento senior",
                "Continuar estimulación mental"
            ],
            enfermedadesComunes: [
                "Displasia de cadera (menos común que razas grandes)",
                "Problemas articulares",
                "Problemas dentales si no hay cuidado"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium alto en proteína (dieta similar a ancestros lobos)",
        calorias: "1,500-2,000 cal/día según actividad alta",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día"
        },
        alertas: [
            "Dieta alta en proteína animal (herencia lobo)",
            "Algunos dueños dan dieta BARF (supervisión veterinaria)",
            "Metabolismo eficiente",
            "Evitar sobrealimentación"
        ]
    },
    
    problemasCongenitos: [
        "MENOS problemas genéticos que razas puras (vigor híbrido)",
        "Displasia de cadera (menos común)",
        "Generalmente MÁS saludables que razas modernas"
    ],
    
    saludComun: [
        "Generalmente MUY saludable",
        "Problemas dentales si no hay cuidado",
        "Sensibilidad a ciertos medicamentos (herencia lobo)",
        "Ansiedad por separación si no se maneja bien"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa densa similar a lobo, muda intensamente 2 veces al año",
        
        cepillado: {
            frecuencia: {
                normal: "2-3 veces por semana",
                temporadaMuda: "DIARIO (primavera y otoño - muda EXTREMA)"
            },
            herramientas: [
                {
                    herramienta: "Rastrillo de subpelo",
                    funcion: "Remueve subpelo denso (ESENCIAL en muda)",
                    obligatorio: true
                },
                {
                    herramienta: "Cepillo slicker",
                    funcion: "Capa exterior",
                    obligatorio: true
                }
            ]
        },
        
        baño: {
            frecuencia: "Cada 8-12 semanas (se autolimpian bien como lobos)",
            cuidadosEspeciales: [
                "NO bañar en exceso (elimina aceites naturales)",
                "Usar shampoo suave",
                "Secar completamente"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Calupoh es perro primitivo extremadamente activo con herencia de lobo. Pasa mucho tiempo en exteriores, explora intensamente. Verde limpia profundamente, repele parásitos (alta exposición por comportamiento similar a lobo) y respeta el pelaje natural primitivo.",
                    beneficios: [
                        "Limpieza profunda para perro muy activo",
                        "Repele parásitos 14 días",
                        "Respeta pelaje natural primitivo",
                        "Antibacterial + Antifúngico",
                        "No altera aceites naturales excesivamente"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 8-12 semanas (no bañar en exceso)"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "🚨 Socialización INTENSIVA desde cachorro - NO NEGOCIABLE",
        "🚨 Entrenamiento profesional OBLIGATORIO",
        "🚨 Requiere dueño EXPERIMENTADO - NO para primerizos",
        "✅ Cerca MUY alta y segura (pueden saltar alto)",
        "✅ NUNCA sin correa en públicos",
        "✅ Ejercicio intenso 2+ horas diarias",
        "⚠️ Estructura de manada - necesita líder claro",
        "✅ Legalidad: Verificar regulaciones locales (híbrido lobo)",
        "⚠️ Responsabilidad ENORME - perro con ADN de lobo"
    ],
    
    alertasCriticas: [
        "🚨 Comportamiento agresivo = Profesional canino URGENTE",
        "🚨 Ansiedad severa = Manejo inadecuado - Profesional",
        "⚠️ NO es mascota 'normal' - requiere compromiso TOTAL"
    ],
    
    legalidadYResponsabilidad: {
        titulo: "⚠️ CALUPOH = RESPONSABILIDAD LEGAL Y ÉTICA EXTREMA",
        consideraciones: [
            "Es híbrido con LOBO MEXICANO (especie en peligro)",
            "Regulaciones varían por estado/municipio",
            "Algunos lugares prohíben híbridos lobo-perro",
            "Seguro de responsabilidad civil ALTAMENTE recomendado",
            "Puede ser considerado 'animal exótico' legalmente",
            "Dueño 100% responsable de acciones del perro",
            "Verificar leyes ANTES de adquirir"
        ],
        crianza: "Solo adquirir de criadores REGISTRADOS que trabajan con UNAM/FCMC. Criadores ilegales contribuyen a extinción del lobo mexicano."
    },
    
    realidadDeLaRaza: {
        titulo: "⚠️ REALIDAD DEL CALUPOH - NO es 'perro normal'",
        verdades: [
            "Tiene ADN de LOBO - comportamientos de lobo presentes",
            "Extremadamente reservado con extraños (más que cualquier raza)",
            "Vínculo MUY fuerte con familia pero desconfianza innata de otros",
            "Puede aullar (herencia lobo) - vecinos pueden quejarse",
            "NO es perro de 'todo mundo' - requiere dueño específico",
            "Mejor para: Personas con experiencia en razas primitivas",
            "NO para: Familias primerizas, personas sin tiempo, vida en apartamento"
        ],
        consideracion: "El Calupoh es MAGNÍFICO para el dueño correcto. Para dueño equivocado, es situación PELIGROSA. Evalúa BRUTALMENTE tu capacidad antes de considerar esta raza."
    },
    
    orgullo Mexicano: {
        titulo: "🇲🇽 ORGULLO NACIONAL MEXICANO",
        importancia: "El Calupoh es la PRIMERA y ÚNICA raza canina reconocida 100% mexicana. Representa esfuerzo de conservación del lobo mexicano (en peligro crítico de extinción). Adquirir Calupoh es responsabilidad de preservar patrimonio genético mexicano."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública - Muy activo en exteriores" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Alta (dieta alta en proteína)", 
        veterinario: "Medio (generalmente saludable)",
        entrenamiento: "MUY Alto (profesional OBLIGATORIO)",
        legal: "Variable (permisos, seguros)",
        compromiso: "EXTREMO - Solo para dueños dedicados y experimentados"
    }
},



{
    id: "bull-terrier",
    nombre: "Bull Terrier",
    nombresAlternativos: ["English Bull Terrier", "Bully"],
    categoria: "medianas",
    imagen: "🐕",
    tamaño: "Medianas",
    
    origen: {
        pais: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        epoca: "Siglo XIX (1850s)",
        historia: "Desarrollado en Inglaterra cruzando Bulldog con terriers para peleas de perros y ratas. James Hinks refinó la raza en 1860s creando el 'White Cavalier' - Bull Terrier blanco. Después de prohibición de peleas, se convirtió en perro de compañía."
    },
    
    pesoIdeal: {
        estandar: "20-36 kg",
        miniatura: "11-15 kg"
    },
    
    esperanzaVida: "10-14 años",
    
    temperamento: {
        personalidad: "Payaso, cariñoso, enérgico, terco, valiente",
        nivelEnergia: "MUY Alta",
        sociabilidad: {
            conHumanos: "EXCELENTE con familia - Muy cariñoso",
            conNiños: "Buena con supervisión (muy enérgico, puede tirar niños)",
            conPerros: "Variable a POBRE - Puede ser agresivo (herencia peleas)",
            conExtraños: "Amigable pero protector"
        },
        adiestramiento: "DIFÍCIL - Inteligente pero EXTREMADAMENTE terco",
        ladridos: "Medio",
        caracteristicas: [
            "Cabeza de huevo distintiva (única en mundo canino)",
            "Ojos triangulares pequeños característicos",
            "Payaso natural - hace reír constantemente",
            "Extremadamente terco ('Bull Terrier stubbornness')",
            "Muy enérgico y juguetón",
            "Puede ser destructivo si se aburre",
            "Personalidad única - 'niño de 3 años en traje de perro'",
            "NO tiene noción de su fuerza"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización INTENSIVA con otros perros desde cachorro CRÍTICO",
                "3-4 comidas al día",
                "Ejercicio intenso (muy energéticos)",
                "Entrenamiento desde cachorro (MUY tercos)",
                "Juguetes RESISTENTES (masticadores extremos)",
                "Supervisión constante (destructivos si aburridos)",
                "Establecer reglas claras y consistentes"
            ],
            alertasEspeciales: [
                "Socialización inadecuada = Agresividad con otros perros",
                "EXTREMADAMENTE tercos - paciencia infinita necesaria",
                "Permanecen 'cachorros' hasta 2-3 años"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 1.5-2 horas diarias MÍNIMO",
                "2 comidas al día",
                "Estimulación mental diaria (se aburren fácil)",
                "Entrenamiento continuo (refuerzo)",
                "Supervisión con otros perros SIEMPRE",
                "Juguetes prácticamente indestructibles",
                "Cepillado 1-2 veces semana"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado-intenso 1 hora",
                "Chequeos cada 6 meses",
                "Vigilar problemas renales (común en blancos)",
                "Problemas cardíacos (común)",
                "Suplementos articulaciones",
                "Vigilar sordera (blancos)",
                "Control de peso"
            ],
            enfermedadesComunes: [
                "Enfermedad renal (común en Bull Terriers blancos)",
                "Sordera (blancos - hasta 20%)",
                "Problemas cardíacos",
                "Displasia de cadera",
                "Luxación de rótula"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas medianas activas",
        calorias: "1,200-1,800 cal/día según actividad intensa",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día (ajustar calorías)"
        },
        alertas: [
            "Come rápido - plato anti-hinchazón recomendado",
            "Propenso a obesidad si sedentario",
            "Alergias alimentarias comunes",
            "Control de peso CRÍTICO",
            "NO libre acceso a comida"
        ]
    },
    
    problemasCongenitos: [
        "Sordera (Bull Terriers blancos - 18-20%)",
        "Enfermedad renal poliquística (blancos)",
        "Acrodermatitis letal (LAD - rara pero mortal)",
        "Luxación de rótula",
        "Displasia de cadera",
        "Estenosis aórtica (corazón)",
        "Alergias severas de piel",
        "Comportamiento obsesivo-compulsivo (spinning - girar)"
    ],
    
    saludComun: [
        "Alergias de piel (MUY COMÚN)",
        "Dermatitis",
        "Problemas renales (blancos)",
        "Sordera (blancos)",
        "Obesidad si sedentario",
        "Comportamientos obsesivos (spinning, perseguir cola)",
        "Problemas cardíacos"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto, liso, muda moderadamente",
        
        cepillado: {
            frecuencia: {
                normal: "1-2 veces por semana",
                temporadaMuda: "3-4 veces semana"
            },
            herramientas: [
                {
                    herramienta: "Guante de goma",
                    funcion: "Remueve pelo muerto efectivamente",
                    obligatorio: true
                },
                {
                    herramienta: "Cepillo de cerdas suaves",
                    funcion: "Brillo al pelaje",
                    obligatorio: false
                }
            ]
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas (o cuando esté sucio)",
            cuidadosEspeciales: [
                "Protección solar SI es blanco (quemaduras solares)",
                "Shampoo suave (piel sensible)"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Principal - ESENCIAL para piel sensible",
                    porque: "El Bull Terrier, ESPECIALMENTE blancos, tiene piel EXTREMADAMENTE sensible y es muy propenso a alergias de piel, dermatitis y quemaduras solares. Suave es hipoalergénico, calma dermatitis desde el primer baño y no irrita su piel delicada. CRÍTICO para esta raza con tantos problemas de piel.",
                    beneficios: [
                        "Hipoalergénico (crítico para raza alérgica)",
                        "Calma dermatitis",
                        "No irrita piel ultra sensible",
                        "Reduce comezón inmediata",
                        "Hidrata piel propensa a resequedad",
                        "Suave para piel blanca delicada"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Cada 6-8 semanas"
                },
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Complementario - Muy activo",
                    porque: "Bull Terriers son EXTREMADAMENTE activos y energéticos. Verde para limpieza profunda y repelente de parásitos.",
                    beneficios: [
                        "Limpieza profunda",
                        "Repele parásitos",
                        "Antibacterial"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Alternar con Suave si muy activo en exteriores y sin problemas de piel"
                }
            ],
            
            alertaProblemasPiel: {
                titulo: "🚨 BULL TERRIER = PIEL EXTREMADAMENTE SENSIBLE",
                estadistica: "60%+ desarrollan alergias de piel, especialmente blancos",
                sintomasComunes: [
                    "Rascado obsesivo",
                    "Piel roja e inflamada",
                    "Dermatitis",
                    "Hot spots",
                    "Quemaduras solares (blancos)",
                    "Lamido excesivo de patas",
                    "Pérdida de pelo en parches"
                ],
                causas: [
                    "Piel sensible genética (especialmente blancos)",
                    "Alergias ambientales",
                    "Alergias alimentarias",
                    "Exposición solar (blancos)",
                    "Dermatitis por contacto"
                ],
                solucion: {
                    producto: "Shampoo Suave - YA RECOMENDADO + Protección solar",
                    porque: "Suave calma y previene brotes. CRÍTICO para Bull Terriers blancos.",
                    protocolo: "Baños cada 6-8 semanas con Suave + protector solar diario en blancos + dieta hipoalergénica si necesario",
                    adicional: "Bull Terriers blancos requieren protector solar DIARIO en nariz, orejas, vientre"
                }
            }
        }
    },
    
    tipsEspecificos: [
        "✅ Ejercicio INTENSO 1.5-2 horas diarias - destructivo sin ejercicio",
        "🚨 Socialización con otros perros INTENSIVA desde cachorro",
        "⚠️ EXTREMADAMENTE terco - paciencia infinita",
        "✅ Entrenamiento profesional ALTAMENTE recomendado",
        "🚨 NUNCA dejar solo con otros perros sin supervisión",
        "✅ Protector solar DIARIO si es blanco",
        "⚠️ Test de audición en blancos (20% sordos)",
        "✅ Juguetes prácticamente indestructibles",
        "⚠️ Vigilar comportamientos obsesivos (spinning)"
    ],
    
    alertasCriticas: [
        "🚨 Agresión con otros perros = Separar inmediatamente - Profesional",
        "🚨 Spinning obsesivo = TOC - VET + Especialista comportamiento",
        "🚨 Quemaduras solares severas (blancos) = VET",
        "🚨 Problemas urinarios = Enfermedad renal - VET URGENTE"
    ],
    
    realidadDeLaRaza: {
        titulo: "⚠️ BULL TERRIER - 'Niño de 3 años en traje de perro'",
        personalidad: [
            "Extremadamente cariñoso y payaso con FAMILIA",
            "PERO puede ser agresivo con otros perros (herencia peleas)",
            "Terquedad LEGENDARIA - 'Bull Terrier stubbornness'",
            "Energía EXTREMA - necesita MUCHO ejercicio",
            "Destructivo si se aburre (puede destruir sofá en horas)",
            "NO tiene noción de su fuerza (puede lastimar sin querer)",
            "Comportamiento de 'cachorro' hasta 2-3 años"
        ],
        consideracion: "Bull Terrier es INCREÍBLE para dueño correcto: Activo, paciente, experimentado, con tiempo y energía. Para dueño equivocado: Pesadilla destructiva. NO es raza para todos."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Media-Alta", 
        veterinario: "Alto (alergias, problemas renales en blancos, cardíacos)",
        entrenamiento: "Alto (profesional altamente recomendado)",
        proteccionSolar: "Medio-Alto (si es blanco - protector solar diario)",
        juguetes: "Alto (destruye todo - necesita indestructibles)"
    }
},


{
    id: "old-english-sheepdog",
    nombre: "Old English Sheepdog",
    nombresAlternativos: ["Bobtail", "OES", "Antiguo Pastor Inglés"],
    categoria: "grandes",
    imagen: "🐑",
    tamaño: "Grandes",
    
    origen: {
        pais: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        epoca: "Siglo XVIII",
        historia: "Desarrollado en Inglaterra para pastoreo y arreo de ovejas y ganado. Nombre 'Bobtail' por práctica de cortar cola (identificación de perros de trabajo que no pagaban impuestos). Icónico por aparecer como logotipo de pinturas Dulux."
    },
    
    pesoIdeal: {
        macho: "32-45 kg",
        hembra: "27-36 kg"
    },
    
    esperanzaVida: "10-12 años",
    
    temperamento: {
        personalidad: "Amigable, inteligente, adaptable, juguetón, protector",
        nivelEnergia: "Media-Alta",
        sociabilidad: {
            conHumanos: "EXCELENTE - Muy sociable y cariñoso",
            conNiños: "EXCELENTE - Paciente, protector, 'niñera'",
            conPerros: "Excelente - Muy sociable",
            conExtraños: "Amigable (no es buen guardián)"
        },
        adiestramiento: "Moderado - Inteligente pero puede ser terco",
        ladridos: "Alto - Ladrido fuerte y grave (herencia pastoreo)",
        caracteristicas: [
            "Apariencia de oso de peluche gigante",
            "Pelo LARGO que cubre ojos completamente",
            "Ladrido profundo distintivo",
            "Instinto de pastoreo fuerte",
            "Excelente con niños ('perro niñera')",
            "Payaso gentil",
            "Puede 'pastorear' niños (empujar con cuerpo)",
            "Reconocible por logotipo pinturas Dulux"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización temprana",
                "3-4 comidas al día",
                "Cepillado DIARIO desde cachorro OBLIGATORIO",
                "Ejercicio moderado (no excesivo - displasia)",
                "Entrenamiento desde cachorro",
                "Acostumbrar a grooming profesional TEMPRANO",
                "Recortar pelo de ojos regularmente"
            ],
            alertasEspeciales: [
                "Pelo crece RÁPIDO - cepillado diario no opcional desde cachorro"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio moderado-intenso 1 hora diaria",
                "Grooming profesional cada 6-8 semanas OBLIGATORIO",
                "2 comidas al día",
                "Cepillado 3-4 veces semana MÍNIMO (diario ideal)",
                "Recortar pelo de ojos regularmente",
                "Revisión veterinaria anual"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 45-60 min",
                "Chequeos cada 6 meses",
                "Vigilar displasia de cadera",
                "Problemas oculares (común)",
                "Suplementos articulaciones OBLIGATORIO",
                "Continuar grooming regular",
                "Control de peso"
            ],
            enfermedadesComunes: [
                "Displasia de cadera",
                "Atrofia progresiva de retina",
                "Cataratas",
                "Hipotiroidismo",
                "Sordera (puede desarrollar)",
                "Hinchazón gástrica"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas grandes",
        calorias: "1,500-2,200 cal/día según actividad",
        comidas: {
            cachorro: "3-4 veces al día (crecimiento controlado)",
            adulto: "2 veces al día (NUNCA una sola - hinchazón)",
            senior: "2 veces al día (reducir calorías 20%)"
        },
        alertas: [
            "⚠️ Propenso a hinchazón gástrica",
            "SIEMPRE 2 comidas (no una sola grande)",
            "NO ejercicio 1 hora antes/después de comer",
            "Control de peso importante (pelo esconde obesidad)",
            "Alimentación elevada recomendada"
        ]
    },
    
    problemasCongenitos: [
        "Displasia de cadera (común)",
        "Atrofia progresiva de retina (PRA)",
        "Cataratas hereditarias",
        "Hipotiroidismo",
        "Sordera hereditaria",
        "Ataxia cerebelar",
        "Hinchazón gástrica"
    ],
    
    saludComun: [
        "Displasia de cadera",
        "Problemas oculares (PRA, cataracts)",
        "Infecciones de oído (pelo largo en orejas)",
        "Dermatitis (pelo atrapa humedad)",
        "Hot spots",
        "Obesidad (pelo esconde sobrepeso)",
        "Hinchazón gástrica"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa EXTREMADAMENTE densa y larga, pelo lanoso, muda moderadamente",
        
        cepillado: {
            frecuencia: {
                normal: "3-4 veces por semana MÍNIMO (diario IDEAL)",
                realidad: "DIARIO recomendado - pelo se enreda muy fácil"
            },
            herramientas: [
                {
                    herramienta: "Cepillo slicker grande",
                    funcion: "Elimina nudos y pelo muerto",
                    obligatorio: true
                },
                {
                    herramienta: "Peine metálico de dientes largos",
                    funcion: "Verifica nudos profundos",
                    obligatorio: true
                },
                {
                    herramienta: "Rastrillo de subpelo",
                    funcion: "Penetra subpelo denso",
                    obligatorio: true
                }
            ],
            proceso: [
                "1. Separar pelo en secciones",
                "2. Cepillar capa por capa (de piel hacia afuera)",
                "3. Verificar con peine",
                "4. Atención EXTRA: detrás orejas, axilas, patas traseras, área genital, 'pantalones'",
                "5. Recortar pelo de ojos regularmente (visibilidad)",
                "6. TODO el cuerpo sin excepción"
            ],
            consecuenciasNoCepillar: [
                "Nudos SEVEROS en 3-5 días",
                "Subpelo apelmazado completamente",
                "Pelo forma 'fieltro' pegado a piel",
                "Requiere rasurado completo (pérdida total del look)",
                "Irritación severa de piel",
                "Hot spots por humedad atrapada",
                "Costo extra de dematting o rasurado obligatorio"
            ]
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas (idealmente antes de grooming profesional)",
            proceso: [
                "1. Cepillar COMPLETAMENTE antes del baño (nudos se endurecen con agua)",
                "2. Agua tibia",
                "3. Shampoo profundo (pelo MUY denso)",
                "4. Masajear hasta la piel",
                "5. Enjuagar MUY bien (2-3 veces - pelo retiene shampoo)",
                "6. Acondicionador OBLIGATORIO (crítico para pelo largo)",
                "7. Enjuagar completamente",
                "8. Secar con toalla (absorber máximo)",
                "9. Secadora a temperatura media (toma HORAS)",
                "10. Cepillar MIENTRAS seca (CRÍTICO)"
            ],
            tiempoSecado: "3-5 HORAS (pelo extremadamente denso y largo)",
            cuidadosEspeciales: [
                "Secar COMPLETAMENTE (humedad = hot spots/hongos)",
                "Limpiar orejas después del baño",
                "Secar entre dedos muy bien",
                "Recortar pelo entre almohadillas"
            ]
        },
        
        corte: {
            critico: true,
            frecuencia: "Cada 6-8 semanas con groomer profesional - OBLIGATORIO",
            razon: "El pelo del OES crece constantemente y se enreda extremadamente fácil. Sin grooming profesional, se convierte en masa de nudos imposible de manejar.",
            estilos: [
                {
                    nombre: "Corte show/tradicional",
                    descripcion: "Pelo largo completo con recorte mínimo. Look clásico OES.",
                    mantenimiento: "EXTREMO - Cepillado diario obligatorio + grooming cada 6 semanas",
                    tiempo: "4-6 horas por sesión de grooming profesional"
                },
                {
                    nombre: "Corte cachorro/puppy cut",
                    descripcion: "Pelo recortado a 5-8 cm uniforme en todo el cuerpo.",
                    mantenimiento: "Alto pero más manejable - Recomendado para mascotas",
                    tiempo: "2-3 horas por sesión"
                },
                {
                    nombre: "Corte corto de verano",
                    descripcion: "Pelo muy corto (2-3 cm) en verano para comodidad.",
                    mantenimiento: "Moderado - Pierde look característico",
                    nota: "Ayuda en clima cálido y reduce mantenimiento"
                }
            ],
            serviciosGroomer: [
                "Baño profesional completo",
                "Secado completo (3-5 horas)",
                "Dematting si hay nudos",
                "Corte completo de pelo",
                "Recorte de pelo en ojos",
                "Recorte de uñas",
                "Limpieza de glándulas anales",
                "Limpieza de oídos",
                "Recorte entre almohadillas"
            ],
            costo: "$800-1,500 MXN cada 6-8 semanas (según estilo)",
            tiempoSesion: "3-6 horas por sesión",
            realidad: "Old English Sheepdog es UNA DE LAS RAZAS MÁS CARAS DE MANTENER en grooming. Presupuesta $9,600-18,000 MXN/año SOLO en grooming profesional."
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "ABSOLUTAMENTE ESENCIAL - NO OPCIONAL",
                    porque: "El Old English Sheepdog tiene pelo EXTREMADAMENTE largo, denso y lanoso que se enreda con FACILIDAD EXTREMA. Sin acondicionador, el pelo forma nudos SEVEROS en días que requieren rasurado completo. Cero Nudos es INDISPENSABLE para facilitar el cepillado frecuente OBLIGATORIO, prevenir nudos dolorosos y mantener el pelo manejable. ES LA DIFERENCIA entre mantener el look OES o tener que rasurar completamente.",
                    beneficios: [
                        "Desenreda pelo largo y lanoso extremadamente denso",
                        "Facilita cepillado frecuente obligatorio",
                        "Previene nudos severos y dolorosos",
                        "Reduce tiempo de cepillado significativamente",
                        "Mantiene pelo suave y manejable",
                        "Evita rasurado completo por nudos",
                        "CRÍTICO para grooming profesional efectivo",
                        "Permite mantener look característico OES"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Cada 6-8 semanas + cepillado 3-4 veces semana MÍNIMO (diario ideal)",
                    aplicacion: "Aplicar GENEROSAMENTE en TODO el pelaje denso, trabajar hasta la piel, dejar actuar 5 minutos, enjuagar completamente 2-3 veces"
                },
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Complementario - Perros activos",
                    porque: "Old English Sheepdogs activos que pasan tiempo en exteriores. Verde para limpieza profunda.",
                    beneficios: [
                        "Limpieza profunda del pelaje denso",
                        "Repele parásitos",
                        "Antibacterial + Antifúngico"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Alternar con Cero Nudos si muy activo en exteriores"
                }
            ],
            
            notaCritica: {
                titulo: "🚨 OLD ENGLISH SHEEPDOG = MANTENIMIENTO EXTREMO",
                realidad: "Esta es UNA DE LAS RAZAS MÁS DEMANDANTES EN GROOMING del mundo canino:",
                obligatorio: [
                    "🔴 Grooming profesional cada 6-8 semanas - $800-1,500 MXN por sesión",
                    "🔴 Cepillado 3-4 veces semana MÍNIMO (diario ideal) - 30-60 min por sesión",
                    "🔴 Acondicionador SIEMPRE (Cero Nudos) - nudos severos sin él",
                    "🔴 Presupuesto anual grooming: $9,600-18,000 MXN",
                    "🔴 Tiempo semanal cepillado: 2-7 horas",
                    "🔴 Baño profesional: 3-6 horas por sesión"
                ],
                consideracion: "Si NO puedes comprometerte con cepillado frecuente + grooming profesional caro mensual + HORAS de mantenimiento semanal, NO adoptes Old English Sheepdog. Sin mantenimiento apropiado = sufrimiento del perro (nudos dolorosos, rasurado obligatorio)."
            }
        }
    },
    
    tipsEspecificos: [
        "🚨 Cepillado 3-4 veces semana MÍNIMO (diario ideal) - 30-60 min",
        "🚨 Grooming profesional cada 6-8 semanas OBLIGATORIO",
        "✅ Presupuestar $9,600-18,000 MXN/año en grooming",
        "✅ Acondicionador SIEMPRE (nudos severos sin él)",
        "✅ Recortar pelo de ojos regularmente (visibilidad)",
        "⚠️ 2 comidas al día SIEMPRE (prevenir hinchazón)",
        "✅ Secar COMPLETAMENTE después del baño (3-5 horas)",
        "⚠️ Vigilar hot spots (pelo atrapa humedad)",
        "✅ Excelente con niños - 'perro niñera'"
    ],
    
    alertasCriticas: [
        "🚨 Abdomen hinchado + inquietud = Hinchazón gástrica - EMERGENCIA",
        "🚨 Problemas de visión = PRA/cataratas - VET",
        "🚨 Cojera = Displasia de cadera - VET",
        "🚨 Hot spots severos = Dermatitis - VET"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "EXTREMADAMENTE Alto - Una de las razas MÁS CARAS",
        alimentacion: "Alta (come bastante + premium)", 
        veterinario: "Alto (displasia, problemas oculares)",
        grooming: "EXTREMADAMENTE Alto ($9,600-18,000 MXN/año - UNA DE LAS MÁS CARAS)",
        tiempo: "EXTREMO (2-7 horas cepillado semanal)",
        compromiso: "TOTAL - Solo para personas con tiempo, dinero y dedicación extremos"
    }
},


{
    id: "xoloitzcuintle",
    nombre: "Xoloitzcuintle",
    nombresAlternativos: ["Xolo", "Perro Azteca", "Mexican Hairless Dog"],
    categoria: "mexicanas",
    imagen: "🐕",
    tamaño: "Variable (Toy, Miniatura, Estándar)",
    
    origen: {
        pais: "México 🇲🇽",
        epoca: "Más de 3,000 años",
        historia: "Raza MÁS ANTIGUA de América y una de las más antiguas del mundo. Considerada sagrada por aztecas, mayas y toltecas. Nombre significa 'perro del dios Xólotl'. Se creía que guiaban almas al Mictlán (inframundo). Casi se extingue en 1950s, rescatada por criadores mexicanos. Patrimonio cultural de México."
    },
    
    pesoIdeal: {
        toy: "2-7 kg",
        miniatura: "7-14 kg",
        estandar: "14-25 kg"
    },
    
    esperanzaVida: "13-18 años (una de las razas más longevas)",
    
    temperamento: {
        personalidad: "Tranquilo, alerta, inteligente, leal, noble",
        nivelEnergia: "Media",
        sociabilidad: {
            conHumanos: "Extremadamente leal a SU familia, reservado con extraños",
            conNiños: "Buena con niños de la familia (puede ser distante con extraños)",
            conPerros: "Buena con socialización",
            conExtraños: "MUY reservado, desconfiado (excelente guardián)"
        },
        adiestramiento: "Moderado - Inteligente pero independiente",
        ladridos: "Medio-Alto (excelente perro de alerta)",
        caracteristicas: [
            "Sin pelo (variedad predominante) o con pelo (coated)",
            "Piel suave como terciopelo",
            "Temperatura corporal más alta que otras razas",
            "Extremadamente limpio (no tiene olor a perro)",
            "Perro más antiguo de América",
            "Considerado hipoalergénico (sin pelo)",
            "Patrimonio cultural mexicano",
            "Se usa en terapias (calor corporal)"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "Protección solar desde cachorro (piel expuesta)",
                "Hidratación de piel DIARIA desde cachorro",
                "3-4 comidas al día (según tamaño)",
                "Socialización temprana (tienden a timidez con extraños)",
                "Protección del frío (suéteres/abrigos)",
                "Baños más frecuentes que otras razas (piel expuesta)",
                "Crema hidratante diaria"
            ],
            alertasEspeciales: [
                "Piel desnuda EXTREMADAMENTE vulnerable a sol, frío, irritaciones",
                "Cachorros nacen CON pelo que cae en primeras semanas"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio moderado 30-45 min diarios",
                "Protección solar DIARIA obligatoria",
                "Hidratación de piel DIARIA",
                "2 comidas al día",
                "Baños cada 1-2 semanas (piel expuesta se ensucia)",
                "Suéteres/abrigos en clima frío OBLIGATORIO",
                "Protección en clima extremo"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 20-30 min",
                "Chequeos cada 6 meses",
                "Continuar protección solar/hidratación",
                "Vigilar problemas dentales (común)",
                "Mayor sensibilidad a temperaturas extremas",
                "Suplementos articulaciones",
                "Alimento senior"
            ],
            enfermedadesComunes: [
                "Problemas dentales (falta dientes - común en raza)",
                "Problemas de piel (acné, dermatitis)",
                "Sensibilidad a temperaturas extremas"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium según tamaño (toy/miniatura/estándar)",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día (ajustar calorías)"
        },
        alertas: [
            "Metabolismo ligeramente más rápido que otras razas",
            "Control de peso (obesidad común)",
            "Algunos tienen estómago sensible",
            "Dieta balanceada afecta salud de piel"
        ],
        suplementos: [
            "Omega 3 (CRÍTICO para salud de piel)",
            "Vitaminas para piel",
            "Suplementos para salud dental"
        ]
    },
    
    problemasCongenitos: [
        "Ausencia de dientes (premolares/molares) - NORMAL en la raza",
        "Acné juvenil (piel sin pelo)",
        "Problemas dentales",
        "Sensibilidad a anestesia",
        "Luxación de rótula (tamaños pequeños)"
    ],
    
    saludComun: [
        "Problemas de piel (acné, dermatitis, resequedad)",
        "Quemaduras solares (sin protección)",
        "Problemas dentales (común)",
        "Sensibilidad a frío/calor extremo",
        "Alergias de piel (menos común que razas con pelo)",
        "Obesidad si sedentario"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "SIN PELO (variedad predominante) - Piel desnuda 100% expuesta",
        
        cepillado: {
            frecuencia: {
                sinPelo: "NO necesita cepillado",
                conPelo: "1-2 veces semana (si es variedad con pelo - rara)"
            },
            nota: "Variedad sin pelo NO requiere cepillado pero SÍ requiere cuidado INTENSIVO de piel"
        },
        
        baño: {
            frecuencia: "Cada 1-2 semanas (MÁS frecuente que otras razas)",
            razon: "Piel sin pelo se ensucia más rápido, suda por la piel, acumula aceites",
            proceso: [
                "1. Agua tibia (NO caliente ni fría - piel sensible)",
                "2. Shampoo SUAVE específico para piel sensible",
                "3. Masaje gentil (NO tallar fuerte)",
                "4. Enjuagar MUY bien",
                "5. Secar con toalla suave",
                "6. Aplicar crema hidratante INMEDIATAMENTE después del baño",
                "7. NO dejar mojado (se enfría muy rápido)"
            ],
            cuidadosEspeciales: [
                "Temperatura ambiente cálida durante/después del baño",
                "Shampoo hipoalergénico OBLIGATORIO",
                "Secar completamente (pierden calor rápido)",
                "Hidratación post-baño NO OPCIONAL"
            ]
        },
        
        cuidadoPiel: {
            critico: true,
            frecuencia: "DIARIO - Absolutamente OBLIGATORIO",
            rutinaDiaria: [
                "1. Limpiar piel con toallita húmeda (eliminar aceites/suciedad)",
                "2. Aplicar crema hidratante específica para perros",
                "3. Aplicar protector solar ANTES de salir al exterior (CRÍTICO)",
                "4. Revisar acné, irritaciones, lesiones",
                "5. Limpiar entre pliegues si los tiene"
            ],
            productos: [
                {
                    tipo: "Crema hidratante",
                    especificacion: "SIN FRAGANCIA, hipoalergénica, específica para perros",
                    frecuencia: "Diaria",
                    zonas: "TODO el cuerpo - piel se reseca sin pelo protector"
                },
                {
                    tipo: "Protector solar",
                    especificacion: "SPF 30+ específico para perros, SIN óxido de zinc",
                    frecuencia: "Antes de CADA salida al exterior",
                    zonas: "Orejas, nariz, espalda, vientre - TODAS las áreas expuestas"
                },
                {
                    tipo: "Suéteres/abrigos",
                    especificacion: "Tela suave, sin costuras irritantes",
                    frecuencia: "Clima frío (menos de 20°C)",
                    razon: "Sin pelo = pierden calor corporal rápidamente"
                }
            ],
            consecuenciasNoCuidar: [
                "Quemaduras solares SEVERAS",
                "Piel extremadamente reseca y agrietada",
                "Acné severo",
                "Dermatitis",
                "Infecciones de piel",
                "Hipotermia en frío",
                "Golpe de calor en sol directo"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "ABSOLUTAMENTE ESENCIAL - ÚNICO SHAMPOO RECOMENDADO",
                    porque: "El Xoloitzcuintle NO tiene pelo - su piel desnuda está 100% expuesta y es EXTREMADAMENTE sensible. Suave es HIPOALERGÉNICO, hidrata PROFUNDAMENTE, mantiene el pH de piel sin pelo, y NO irrita. Es el ÚNICO shampoo apropiado para piel tan delicada y expuesta. Cualquier shampoo agresivo causaría daño severo.",
                    beneficios: [
                        "Hipoalergénico para piel ultra sensible desnuda",
                        "Hidratación PROFUNDA para piel sin pelo",
                        "Protege piel 100% expuesta",
                        "Previene resequedad extrema",
                        "pH balanceado para piel desnuda",
                        "No irrita piel delicada",
                        "Mantiene aceites naturales esenciales",
                        "Previene acné y dermatitis"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Cada 1-2 semanas + hidratación diaria con crema",
                    aplicacion: "Aplicar suavemente, masajear gentilmente (NO tallar), enjuagar completamente, hidratar INMEDIATAMENTE después"
                },
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Complementario - SOLO ocasionalmente",
                    porque: "Xolos sudan por la piel (no tienen pelo). Verde limpia profundamente cuando la piel acumula mucho sebo o tiene olor. Usar SOLO ocasionalmente, NO como shampoo regular.",
                    beneficios: [
                        "Limpieza profunda ocasional",
                        "Antibacterial si hay acné",
                        "Controla olor cuando sudan mucho"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "SOLO ocasionalmente si hay acumulación de sebo o acné - Alternar con Suave máximo 1 vez al mes",
                    precaucion: "NO usar como shampoo principal - puede resecar piel desnuda"
                }
            ],
            
            alertaProblemasPiel: {
                titulo: "🚨 XOLOITZCUINTLE = PIEL DESNUDA REQUIERE CUIDADO ESPECIAL DIARIO",
                realidad: "La piel sin pelo del Xolo está 100% EXPUESTA - requiere cuidado como piel humana",
                problemasComunes: [
                    "Acné (especialmente en juventud)",
                    "Piel seca/agrietada sin hidratación",
                    "Quemaduras solares SEVERAS sin protector",
                    "Dermatitis por irritantes",
                    "Infecciones de piel",
                    "Hipotermia por frío",
                    "Golpe de calor por sol directo"
                ],
                causas: [
                    "Piel sin protección de pelo",
                    "Glándulas sebáceas activas (sudan)",
                    "Exposición directa a sol/frío/irritantes",
                    "Falta de hidratación diaria",
                    "Shampoo inadecuado (muy agresivo)"
                ],
                solucion: {
                    producto: "Shampoo Suave + Protector solar + Crema hidratante DIARIA",
                    porque: "Piel desnuda necesita hidratación CONSTANTE y protección UV OBLIGATORIA",
                    protocolo: "Baño cada 1-2 semanas con Suave + hidratación DIARIA con crema + protector solar DIARIO antes de salir + suéteres en frío",
                    adicional: "CRÍTICO: Xolo NO puede vivir sin estos cuidados - piel se daña severamente sin hidratación/protección diaria"
                }
            }
        }
    },
    
    tipsEspecificos: [
        "🚨 Hidratación de piel DIARIA - NO OPCIONAL",
        "🚨 Protector solar ANTES de CADA salida - quemaduras severas sin él",
        "✅ Baños cada 1-2 semanas (MÁS frecuente que otras razas)",
        "✅ Suéteres/abrigos en frío (menos de 20°C)",
        "⚠️ NO dejar en sol directo sin protección",
        "⚠️ NO dejar en frío sin abrigo",
        "✅ Shampoo SUAVE únicamente (Suave BotaniCan)",
        "✅ Crema hidratante específica para perros diaria",
        "✅ Revisar piel diariamente (acné, irritaciones)",
        "⚠️ Raza requiere compromiso DIARIO con cuidado de piel"
    ],
    
    alertasCriticas: [
        "🚨 Quemaduras solares severas = VET + prevenir exposición",
        "🚨 Piel agrietada/sangrando = Falta hidratación severa - VET",
        "🚨 Temblores + letargo en frío = Hipotermia - Calentar + VET",
        "🚨 Acné severo infectado = Dermatitis - VET"
    ],
    
    realidadDeLaRaza: {
        titulo: "⚠️ XOLOITZCUINTLE - NO es raza de 'bajo mantenimiento'",
        mitosVsRealidad: [
            "MITO: 'Sin pelo = sin mantenimiento'",
            "REALIDAD: Requiere MÁS cuidado que razas con pelo",
            "",
            "MITO: 'No necesita baños'",
            "REALIDAD: Necesita baños cada 1-2 semanas + hidratación DIARIA",
            "",
            "MITO: 'Perfecto para cualquier clima'",
            "REALIDAD: Extremadamente sensible a frío Y calor extremo",
            "",
            "Cuidado DIARIO obligatorio:",
            "  - Hidratación de piel",
            "  - Protector solar",
            "  - Revisión de piel",
            "  - Suéteres en frío",
            "  - Crema después del baño"
        ],
        consideracion: "Xolo es INCREÍBLE para dueño comprometido con cuidado diario de piel. Para dueño que busca 'bajo mantenimiento': EQUIVOCADO - requiere rutina diaria obligatoria."
    },
    
    orgulloMexicano: {
        titulo: "🇲🇽 PATRIMONIO CULTURAL DE MÉXICO",
        importancia: [
            "Raza MÁS ANTIGUA de América (3,000+ años)",
            "Considerada SAGRADA por aztecas, mayas, toltecas",
            "Aparece en arte prehispánico y códices",
            "Declarada Patrimonio Cultural de México",
            "Símbolo nacional mexicano",
            "Una de las razas más antiguas del mundo",
            "Casi extinta en 1950s, rescatada por mexicanos",
            "Orgullo canino de México"
        ]
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto (por cuidados especiales de piel)", 
        alimentacion: "Media (según tamaño)", 
        veterinario: "Medio (generalmente saludable)",
        grooming: "Bajo (no necesita groomer)",
        cuidadosPiel: "Alto (cremas hidratantes, protector solar, suéteres - DIARIO)",
        tiempo: "Alto (rutina diaria de piel 15-20 min)",
        compromiso: "Alto - Requiere dedicación diaria sin excepción"
    }
},


{
    id: "pastor-belga-malinois",
    nombre: "Pastor Belga Malinois",
    nombresAlternativos: ["Malinois", "Belgian Malinois", "Pastor Belga"],
    categoria: "grandes",
    imagen: "🐕‍🦺",
    tamaño: "Grandes",
    
    origen: {
        pais: "Bélgica 🇧🇪",
        epoca: "Siglo XIX (1890s)",
        historia: "Desarrollado en Malinas, Bélgica para pastoreo. Una de las 4 variedades de Pastor Belga (Malinois, Tervueren, Groenendael, Laekenois). Preferido MUNDIALMENTE por fuerzas policiales, militares y unidades élite. Navy SEALs lo usan."
    },
    
    pesoIdeal: {
        macho: "25-30 kg",
        hembra: "20-25 kg"
    },
    
    esperanzaVida: "12-14 años",
    
    temperamento: {
        personalidad: "Inteligente, trabajador, leal, protector, INTENSO",
        nivelEnergia: "EXTREMADAMENTE Alta",
        sociabilidad: {
            conHumanos: "Leal a familia, reservado con extraños",
            conNiños: "Buena con socialización (MUCHA energía)",
            conPerros: "Variable - Dominante",
            conExtraños: "Reservado, protector, territorial"
        },
        adiestramiento: "MUY FÁCIL - Extremadamente inteligente",
        ladridos: "Medio-Alto (alerta)",
        caracteristicas: [
            "Perro de trabajo ÉLITE - Policía, militar, rescate",
            "Impulso de trabajo EXTREMO",
            "Necesita PROPÓSITO - no solo ejercicio",
            "Atletismo superior",
            "Mordida más potente que Pastor Alemán",
            "Aprende extremadamente rápido",
            "NO apto para dueños primerizos",
            "Requiere estimulación mental CONSTANTE"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización INTENSIVA desde 8 semanas - CRÍTICO",
                "3-4 comidas al día",
                "Ejercicio moderado (crecimiento)",
                "Entrenamiento profesional OBLIGATORIO",
                "Estimulación mental desde cachorro",
                "Canalizar impulso de trabajo apropiadamente",
                "Establecer liderazgo claro",
                "Exposición a múltiples situaciones"
            ],
            alertasEspeciales: [
                "Sin trabajo/estimulación = destructivo EXTREMO",
                "Requiere dueño EXPERIMENTADO"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 2-3 horas DIARIAS MÍNIMO",
                "2 comidas al día",
                "Trabajo/deporte OBLIGATORIO (agility, IPO, detección, etc.)",
                "Estimulación mental DIARIA",
                "Entrenamiento continuo avanzado",
                "Socialización continua",
                "Cepillado 2-3 veces semana"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado-intenso 1-1.5 horas",
                "Chequeos cada 6 meses",
                "Mantener estimulación mental (CRÍTICO)",
                "Suplementos articulaciones",
                "Vigilar displasia de cadera/codo"
            ],
            enfermedadesComunes: [
                "Displasia de cadera",
                "Displasia de codo",
                "Atrofia progresiva de retina",
                "Epilepsia"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium alto en proteína para perros de trabajo",
        calorias: "1,600-2,400 cal/día (actividad extrema)",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2-3 veces al día (alta actividad)",
            senior: "2 veces al día"
        },
        alertas: [
            "Requiere dieta para perros de TRABAJO/DEPORTE",
            "Alta proteína para masa muscular",
            "Metabolismo rápido por actividad",
            "Control de peso crítico"
        ]
    },
    
    problemasCongenitos: [
        "Displasia de cadera (menos común que Pastor Alemán)",
        "Displasia de codo",
        "Atrofia progresiva de retina",
        "Epilepsia",
        "Sensibilidad a anestesia (común en pastores)"
    ],
    
    saludComun: [
        "Generalmente MÁS saludable que Pastor Alemán",
        "Displasia de cadera/codo (moderado)",
        "Problemas oculares",
        "Lesiones por actividad intensa (común)",
        "Ansiedad sin estimulación apropiada"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa corta-media, muda moderadamente",
        
        cepillado: {
            frecuencia: {
                normal: "2-3 veces por semana",
                temporadaMuda: "Diario (primavera y otoño)"
            }
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas (o cuando esté sucio)"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Malinois es perro de TRABAJO EXTREMO - policía, militar, deportes. Actividad CONSTANTE, alta exposición a exteriores, terrenos diversos. Verde limpia profundamente, repele parásitos (exposición extrema) y tiene propiedades antibacterianas. Perfecto para perro de trabajo élite.",
                    beneficios: [
                        "Limpieza profunda para trabajo intenso",
                        "Repele parásitos 14 días",
                        "Antibacterial + Antifúngico",
                        "Ideal para perro de trabajo/deporte",
                        "Controla olor por actividad extrema"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 6-8 semanas"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "🚨 Ejercicio INTENSO 2-3 horas diarias MÍNIMO + estimulación mental",
        "🚨 DEBE tener trabajo/deporte - agility, IPO, detección, pastoreo",
        "🚨 NO apto para dueños primerizos o sedentarios",
        "✅ Entrenamiento profesional OBLIGATORIO",
        "⚠️ Sin estimulación = destructivo EXTREMO",
        "✅ Requiere propósito - no solo mascota",
        "⚠️ Puede ser agresivo sin socialización apropiada",
        "✅ Mejor para: Trabajo, deporte, dueño MUY activo experimentado"
    ],
    
    alertasCriticas: [
        "🚨 Agresividad = Profesional canino URGENTE",
        "🚨 Destructividad extrema = Falta estimulación - Cambio de estilo de vida",
        "🚨 Ansiedad severa = Necesita trabajo/propósito"
    ],
    
    realidadDeLaRaza: {
        titulo: "⚠️ MALINOIS - NO ES PASTOR ALEMÁN 'MEJORADO'",
        verdades: [
            "Malinois tiene MUCHO MÁS impulso de trabajo que Pastor Alemán",
            "Requiere 2-3x MÁS estimulación que razas normales",
            "NO es perro de familia promedio",
            "Usado por Navy SEALs, GSG9, GIGN - perro de ÉLITE",
            "Sin trabajo apropiado = perro IMPOSIBLE de manejar",
            "Destructividad sin estimulación es LEGENDARIA",
            "Puede saltar cercas de 2+ metros fácilmente",
            "Mordida más fuerte y rápida que Pastor Alemán",
            "",
            "MEJOR PARA:",
            "  - Policía, militar, seguridad profesional",
            "  - Competencias deportivas (IPO, agility, mondio ring)",
            "  - Búsqueda y rescate profesional",
            "  - Dueño ULTRA activo con experiencia",
            "",
            "NO PARA:",
            "  - Familias promedio",
            "  - Dueños primerizos",
            "  - Personas sedentarias",
            "  - Solo como 'guardián' sin entrenamiento"
        ],
        consideracion: "Malinois es el MEJOR perro de trabajo del mundo. Para trabajo correcto = increíble. Como mascota sin propósito = PESADILLA."
    },
    
    usoEnMexico: {
        titulo: "🇲🇽 MALINOIS EN MÉXICO",
        popularidad: [
            "Usado por fuerzas especiales mexicanas",
            "Policía Federal",
            "Unidades K9 estatales",
            "Seguridad privada de alto nivel",
            "Detección de drogas/explosivos",
            "Creciente popularidad en deportes caninos",
            "Competencias IPO/mondio ring"
        ]
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico - Alta actividad en exteriores diversos" }},
    costoMantenimiento: { 
        nivel: "MUY Alto", 
        alimentacion: "MUY Alta (come mucho + premium para trabajo)", 
        veterinario: "Medio",
        entrenamiento: "EXTREMADAMENTE Alto (profesional + deportes OBLIGATORIO)",
        tiempo: "EXTREMO (2-3 horas ejercicio + estimulación mental diaria)",
        compromiso: "TOTAL - Solo para dedicados 100%"
    }
},

{
    id: "american-pitbull-terrier",
    nombre: "American Pitbull Terrier",
    nombresAlternativos: ["Pitbull", "APBT", "Pit Bull"],
    categoria: "medianas",
    imagen: "🐕",
    tamaño: "Medianas",
    
    origen: {
        pais: "Estados Unidos 🇺🇸",
        epoca: "Siglo XIX",
        historia: "Desarrollado en Estados Unidos cruzando bulldogs y terriers ingleses. Originalmente para peleas de perros (ahora ilegales). Después se usó como perro de granja, guardián, compañía. Raza extremadamente CONTROVERSIA por estigma y legislación."
    },
    
    pesoIdeal: {
        macho: "16-27 kg",
        hembra: "14-23 kg"
    },
    
    esperanzaVida: "12-16 años",
    
    temperamento: {
        personalidad: "Leal, valiente, enérgico, cariñoso CON FAMILIA, terco",
        nivelEnergia: "MUY Alta",
        sociabilidad: {
            conHumanos: "EXCELENTE con familia - Muy cariñoso",
            conNiños: "Buena con socialización (supervisión SIEMPRE)",
            conPerros: "VARIABLE A POBRE - Agresividad común (herencia peleas)",
            conExtraños: "Variable - Puede ser amigable o protector"
        },
        adiestramiento: "Moderado - Inteligente pero terco",
        ladridos: "Bajo-Medio",
        caracteristicas: [
            "Extremadamente fuerte y atlético",
            "Mandíbula PODEROSA",
            "Muy cariñoso con familia ('nanny dog' histórico)",
            "Tolerancia al dolor MUY alta",
            "Puede ser agresivo con otros perros (herencia)",
            "NO tiene noción de su fuerza",
            "Requiere socialización EXTREMA",
            "ESTIGMA social y legal importante"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización INTENSIVA con perros desde 8 semanas - CRÍTICO",
                "3-4 comidas al día",
                "Ejercicio intenso",
                "Entrenamiento desde cachorro (MUY importante)",
                "Exposición positiva a personas, perros, situaciones",
                "Establecer reglas claras",
                "NUNCA entrenar agresividad"
            ],
            alertasEspeciales: [
                "Socialización inadecuada = Agresividad con perros",
                "NUNCA para peleas - es ILEGAL y cruel"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 1.5-2 horas diarias",
                "2 comidas al día",
                "Estimulación mental diaria",
                "Supervisión ESTRICTA con otros perros",
                "Entrenamiento continuo",
                "Manejo responsable en público",
                "Cepillado 1-2 veces semana"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 1 hora",
                "Chequeos cada 6 meses",
                "Vigilar displasia de cadera",
                "Problemas cardíacos",
                "Suplementos articulaciones",
                "Control de peso"
            ],
            enfermedadesComunes: [
                "Displasia de cadera",
                "Alergias de piel (común)",
                "Problemas cardíacos",
                "Hipotiroidismo"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium alto en proteína para razas atléticas",
        calorias: "1,100-1,700 cal/día según actividad",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día"
        },
        alertas: [
            "Alta proteína para masa muscular",
            "Control de peso CRÍTICO (obesidad común)",
            "Alergias alimentarias comunes",
            "NO libre acceso a comida"
        ]
    },
    
    problemasCongenitos: [
        "Displasia de cadera",
        "Alergias de piel SEVERAS (muy común)",
        "Hipotiroidismo",
        "Cataratas",
        "Enfermedad cardíaca congénita"
    ],
    
    saludComun: [
        "Alergias de piel (EXTREMADAMENTE COMÚN - 60%+)",
        "Dermatitis",
        "Displasia de cadera",
        "Obesidad si sedentario",
        "Problemas cardíacos",
        "Lesiones por actividad (común)"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto, muda moderadamente",
        
        cepillado: {
            frecuencia: {
                normal: "1-2 veces por semana"
            }
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Principal - ESENCIAL",
                    porque: "El Pitbull tiene piel EXTREMADAMENTE sensible y es una de las razas con MÁS alergias de piel del mundo. 60%+ desarrollan dermatitis atópica severa. Suave es hipoalergénico, calma la piel irritada desde el primer baño y previene brotes. CRÍTICO para esta raza tan propensa a problemas de piel.",
                    beneficios: [
                        "Hipoalergénico (crítico para raza ultra alérgica)",
                        "Calma dermatitis severa",
                        "Reduce comezón extrema inmediata",
                        "Previene brotes de alergia",
                        "No irrita piel sensible"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Cada 6-8 semanas"
                },
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Complementario - Muy activo",
                    porque: "Pitbulls son EXTREMADAMENTE activos y atléticos. Verde para limpieza profunda si muy activo.",
                    beneficios: [
                        "Limpieza profunda",
                        "Repele parásitos",
                        "Antibacterial"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Alternar con Suave si muy activo y SIN problemas de piel (raro)"
                }
            ],
            
            alertaProblemasPiel: {
                titulo: "🚨 PITBULL = RAZA CON MÁS ALERGIAS DE PIEL",
                estadistica: "60-70% desarrollan dermatitis atópica severa",
                sintomasComunes: [
                    "Rascado obsesivo constante",
                    "Piel roja e inflamada severamente",
                    "Lamido excesivo de patas",
                    "Hot spots recurrentes",
                    "Infecciones de piel frecuentes",
                    "Pérdida de pelo en parches",
                    "Piel con costras"
                ],
                causas: [
                    "Piel sensible genética",
                    "Alergias ambientales (polen, ácaros)",
                    "Alergias alimentarias (pollo, trigo, maíz)",
                    "Dermatitis por levaduras"
                ],
                solucion: {
                    producto: "Shampoo Suave + Dieta hipoalergénica",
                    porque: "Pitbulls con alergias severas necesitan enfoque COMPLETO: Suave para calmar piel + dieta hipoalergénica + seguimiento veterinario.",
                    protocolo: "Baños cada 3-4 días en casos severos con Suave hasta mejorar, luego semanal + dieta hipoalergénica OBLIGATORIA + tratamiento veterinario",
                    adicional: "Alergias en Pitbull son CRÓNICAS - requieren manejo de por vida"
                }
            }
        }
    },
    
    tipsEspecificos: [
        "✅ Ejercicio INTENSO 1.5-2 horas diarias - destructivo sin ejercicio",
        "🚨 Socialización con perros EXTREMA desde cachorro",
        "🚨 NUNCA dejar solo con otros perros sin supervisión",
        "✅ Entrenamiento profesional ALTAMENTE recomendado",
        "⚠️ Manejo responsable CRÍTICO - estigma social/legal",
        "✅ Seguro de responsabilidad civil RECOMENDADO",
        "⚠️ Verificar legislación local (prohibido en algunos lugares)",
        "🚨 NUNCA entrenar agresividad - es ILEGAL y peligroso"
    ],
    
    alertasCriticas: [
        "🚨 Agresión con otros perros = Separar - Profesional canino",
        "🚨 Rascado severo + piel muy roja = Dermatitis - VET",
        "🚨 Mordida a persona/perro = EMERGENCIA LEGAL + conductual"
    ],
    
    responsabilidadLegal: {
        titulo: "⚠️ PITBULL = RESPONSABILIDAD LEGAL Y SOCIAL EXTREMA",
        realidad: [
            "Considerado 'raza potencialmente peligrosa' en MUCHOS lugares",
            "Prohibido en algunos estados/municipios de México",
            "Prohibido en muchos países (UK, Francia parcial, etc.)",
            "Seguro de responsabilidad civil OBLIGATORIO en algunos lugares",
            "Dueño 100% responsable legalmente",
            "Mordida puede resultar en eutanasia + consecuencias legales SEVERAS",
            "Estigma social REAL - algunos lugares rechazan Pitbulls",
            "Restricciones en seguros de casa/departamento",
            "",
            "VERIFICAR ANTES DE ADOPTAR:",
            "  - Legislación local sobre razas PPP",
            "  - Reglamentos de edificio/fraccionamiento",
            "  - Requisitos de seguro",
            "  - Restricciones de transporte público"
        ]
    },
    
    realidadDeLaRaza: {
        titulo: "⚠️ PITBULL - VERDAD VS MITOS",
        mitos: [
            "MITO: 'Pitbulls tienen mandíbula que se traba'",
            "REALIDAD: FALSO - Anatomía normal, pero mordida MUY fuerte",
            "",
            "MITO: 'Todos los Pitbulls son agresivos'",
            "REALIDAD: Con familia son EXTREMADAMENTE cariñosos. Agresividad hacia OTROS PERROS es común (herencia), hacia humanos NO es natural.",
            "",
            "MITO: 'Son perros de pelea por naturaleza'",
            "REALIDAD: Criados para peleas (pasado), pero con socialización apropiada pueden ser excelentes mascotas. Peleas de perros son ILEGALES y crueles.",
            "",
            "VERDADES:",
            "  - SON extremadamente fuertes y atléticos",
            "  - PUEDEN ser agresivos con otros perros sin socialización",
            "  - REQUIEREN dueño responsable y experimentado",
            "  - SON muy cariñosos con familia cuando bien criados",
            "  - NECESITAN ejercicio intenso diario",
            "  - Son víctimas de crianza irresponsable y estigma"
        ],
        consideracion: "Pitbull bien criado y socializado = excelente compañero. Pitbull mal criado/sin socialización = peligro. Responsabilidad es 100% del dueño."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Media-Alta", 
        veterinario: "MUY Alto (alergias crónicas - tratamientos costosos de por vida)",
        entrenamiento: "Alto (profesional recomendado)",
        legal: "Variable (seguro, permisos)",
        medicamentos: "MUY Alto (alergias requieren tratamiento continuo)"
    }
},


{
    id: "doberman",
    nombre: "Doberman",
    nombresAlternativos: ["Doberman Pinscher", "Dobie"],
    categoria: "grandes",
    imagen: "🐕",
    tamaño: "Grandes",
    
    origen: {
        pais: "Alemania 🇩🇪",
        epoca: "Siglo XIX (1890s)",
        historia: "Desarrollado por Karl Friedrich Louis Dobermann, recaudador de impuestos alemán que necesitaba perro guardián. Cruzó Rottweiler, Pastor Alemán, Pinscher Alemán, y otros. Perro de protección personal por excelencia."
    },
    
    pesoIdeal: {
        macho: "40-45 kg",
        hembra: "32-35 kg"
    },
    
    esperanzaVida: "10-13 años",
    
    temperamento: {
        personalidad: "Leal, valiente, inteligente, alerta, protector",
        nivelEnergia: "MUY Alta",
        sociabilidad: {
            conHumanos: "Extremadamente leal a familia, reservado con extraños",
            conNiños: "Buena con socialización (supervisión - muy enérgico)",
            conPerros: "Variable - Puede ser dominante",
            conExtraños: "Reservado, protector, territorial"
        },
        adiestramiento: "MUY FÁCIL - Raza #5 más inteligente del mundo",
        ladridos: "Medio (ladra para alertar)",
        caracteristicas: [
            "Perro guardián por excelencia",
            "Apariencia elegante e imponente",
            "Extremadamente leal - 'perro velcro'",
            "Muy inteligente y obediente",
            "Atlético y poderoso",
            "Requiere líder firme",
            "NO apto para dueños primerizos sin experiencia",
            "Silueta distintiva - orejas/cola cortadas (controversia)"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización INTENSIVA desde 8 semanas - CRÍTICO",
                "3-4 comidas al día",
                "Ejercicio moderado (crecimiento)",
                "Entrenamiento profesional ALTAMENTE recomendado",
                "Establecer liderazgo claro",
                "Exposición a personas, perros, situaciones",
                "NO cortar orejas/cola (tendencia moderna - innecesario)"
            ],
            alertasEspeciales: [
                "Socialización inadecuada = Perro territorial/agresivo",
                "Requiere dueño firme y consistente"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 1.5-2 horas diarias",
                "2 comidas al día (NUNCA una sola - hinchazón)",
                "Estimulación mental diaria",
                "Entrenamiento continuo",
                "Control en público",
                "Revisión veterinaria anual + cardiológica",
                "Cepillado 1-2 veces semana"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 1 hora",
                "Chequeos cada 6 meses + ECG anual",
                "Vigilar cardiomiopatía dilatada (MUY COMÚN)",
                "Suplementos articulaciones",
                "Control de peso",
                "Monitoreo cardíaco CRÍTICO"
            ],
            enfermedadesComunes: [
                "Cardiomiopatía dilatada (DCM - 40%+ de Dobermans)",
                "Síndrome de Wobbler (columna cervical)",
                "Displasia de cadera",
                "Enfermedad de Von Willebrand (coagulación)",
                "Hipotiroidismo"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas grandes activas",
        calorias: "1,800-2,400 cal/día según actividad",
        comidas: {
            cachorro: "3-4 veces al día (crecimiento controlado)",
            adulto: "2 veces al día (NUNCA una sola - hinchazón)",
            senior: "2 veces al día (reducir calorías)"
        },
        alertas: [
            "⚠️ Propenso a hinchazón gástrica (MORTAL)",
            "SIEMPRE 2 comidas (nunca una sola grande)",
            "NO ejercicio 1 hora antes/después de comer",
            "Alimentación elevada recomendada",
            "Control de peso CRÍTICO"
        ]
    },
    
    problemasCongenitos: [
        "Cardiomiopatía dilatada (DCM) - 40%+ (CRÍTICO)",
        "Síndrome de Wobbler (inestabilidad cervical)",
        "Displasia de cadera",
        "Enfermedad de Von Willebrand (trastorno coagulación)",
        "Hipotiroidismo",
        "Síndrome vestibular (equilibrio)",
        "Albinismo (color blanco - problemas múltiples)"
    ],
    
    saludComun: [
        "Cardiomiopatía dilatada (EXTREMADAMENTE COMÚN)",
        "Hinchazón gástrica",
        "Displasia de cadera",
        "Síndrome de Wobbler",
        "Hipotiroidismo",
        "Problemas de piel"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto liso, muda mínimamente",
        
        cepillado: {
            frecuencia: {
                normal: "1-2 veces por semana"
            }
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Nogal Intensificador",
                    prioridad: "Principal",
                    porque: "El Doberman tiene pelaje negro y fuego (marrón rojizo) característico. Shampoo Nogal intensifica y realza los tonos oscuros, dándole brillo profundo al negro y realzando el fuego distintivo. Mantiene el color rico e intenso que hace al Doberman tan elegante.",
                    beneficios: [
                        "Intensifica negro profundo",
                        "Realza tonos fuego/rojizos",
                        "Brillo intenso al pelaje",
                        "Mantiene color elegante",
                        "Resalta marcas características"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Nogal-Intensificador-de-Color-Obscuro-1-Litro-p648991047",
                    uso: "Cada 6-8 semanas"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "🚨 Chequeo cardíaco ANUAL obligatorio (ECG + ecocardiograma)",
        "✅ Socialización intensiva desde cachorro",
        "✅ Entrenamiento profesional ALTAMENTE recomendado",
        "🚨 2 comidas al día SIEMPRE (prevenir hinchazón)",
        "✅ Ejercicio intenso diario",
        "⚠️ NO apto para dueños primerizos",
        "✅ Seguro de responsabilidad civil recomendado",
        "🚨 Vigilar síntomas cardíacos SIEMPRE (tos, debilidad, desmayo)"
    ],
    
    alertasCriticas: [
        "🚨 Debilidad súbita + desmayo = Cardiomiopatía - VET URGENTE",
        "🚨 Tos persistente + dificultad respirar = Problema cardíaco - VET",
        "🚨 Abdomen hinchado = Hinchazón gástrica - EMERGENCIA MORTAL",
        "🚨 Incoordinación + debilidad patas traseras = Wobbler - VET"
    ],
    
    realidadDeLaRaza: {
        titulo: "⚠️ DOBERMAN - GUARDIÁN ELEGANTE CON CORAZÓN FRÁGIL",
        verdades: [
            "Apariencia INTIMIDANTE pero temperamento NOBLE",
            "Extremadamente leal - sigue a dueño a todas partes",
            "NO es agresivo por naturaleza - es PROTECTOR",
            "Requiere socialización o puede ser territorial",
            "Muy sensible emocionalmente - no tolera maltrato",
            "",
            "⚠️ PROBLEMA CARDÍACO CRÍTICO:",
            "  - 40%+ desarrollan cardiomiopatía dilatada (DCM)",
            "  - Puede causar muerte súbita sin síntomas previos",
            "  - Chequeo cardíaco anual OBLIGATORIO",
            "  - Muchos mueren entre 7-9 años por DCM",
            "  - Es la causa #1 de muerte en Dobermans",
            "",
            "MEJOR PARA:",
            "  - Protección personal/familiar",
            "  - Dueño experimentado y firme",
            "  - Persona activa con tiempo",
            "",
            "NO PARA:",
            "  - Dueños primerizos sin apoyo",
            "  - Personas que no pueden pagar chequeos cardíacos",
            "  - Solo como 'estatus' sin compromiso"
        ]
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "MUY Alto", 
        alimentacion: "Alta (come bastante + premium)", 
        veterinario: "EXTREMADAMENTE Alto (chequeos cardíacos anuales costosos, tratamiento DCM)",
        entrenamiento: "Alto (profesional recomendado)",
        seguro: "Alto (recomendado)",
        monitoreoCardiaco: "CRÍTICO (ECG + ecocardiograma anual $3,000-8,000 MXN)"
    }
},

{
    id: "cocker-spaniel",
    nombre: "Cocker Spaniel",
    nombresAlternativos: ["American Cocker Spaniel", "Cocker"],
    categoria: "medianas",
    imagen: "🐕",
    tamaño: "Pequeñas-Medianas",
    
    origen: {
        pais: "Estados Unidos 🇺🇸 (variedad americana)",
        epoca: "Siglo XIX",
        historia: "Desarrollado en Estados Unidos del Cocker Spaniel Inglés. Criado para cazar aves (especialmente becadas/woodcock - de ahí 'Cocker'). Dividido en dos razas: Inglés (más grande) y Americano (más pequeño, popular en México)."
    },
    
    pesoIdeal: {
        adulto: "11-14 kg"
    },
    
    esperanzaVida: "12-15 años",
    
    temperamento: {
        personalidad: "Alegre, gentil, cariñoso, juguetón, sociable",
        nivelEnergia: "Media-Alta",
        sociabilidad: {
            conHumanos: "EXCELENTE - Muy sociable y cariñoso",
            conNiños: "EXCELENTE - Paciente y juguetón",
            conPerros: "Excelente - Muy sociable",
            conExtraños: "Amigable"
        },
        adiestramiento: "Fácil - Ansioso por complacer",
        ladridos: "Medio-Alto",
        caracteristicas: [
            "Orejas largas distintivas",
            "Ojos grandes expresivos",
            "Cola siempre meneando",
            "Extremadamente alegre ('merry' breed)",
            "Perro de familia perfecto",
            "Muy sociable con todos",
            "Pelo largo sedoso",
            "Requiere grooming profesional"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-12 meses",
            cuidados: [
                "Socialización temprana",
                "3-4 comidas al día",
                "Cepillado DIARIO desde cachorro",
                "Limpieza de orejas FRECUENTE",
                "Entrenamiento básico",
                "Introducción a grooming profesional temprano",
                "Ejercicio moderado"
            ]
        },
        adulto: {
            edad: "1-7 años",
            cuidados: [
                "Ejercicio moderado 45-60 min diarios",
                "Grooming profesional cada 6-8 semanas OBLIGATORIO",
                "2 comidas al día",
                "Cepillado DIARIO",
                "Limpieza de orejas 2-3 veces semana",
                "Revisión veterinaria anual"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 30-45 min",
                "Chequeos cada 6 meses",
                "Vigilar problemas oculares (común)",
                "Problemas de oído crónicos",
                "Continuar grooming regular",
                "Suplementos articulaciones"
            ],
            enfermedadesComunes: [
                "Problemas oculares (cataratas, glaucoma)",
                "Otitis crónica (infecciones oído)",
                "Displasia de cadera",
                "Problemas cardíacos",
                "Hipotiroidismo"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas medianas",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día (reducir calorías)"
        },
        alertas: [
            "Propenso a obesidad (aman comer)",
            "Control de porciones estricto",
            "NO dar comida de mesa",
            "Alergias alimentarias moderadamente comunes"
        ]
    },
    
    problemasCongenitos: [
        "Problemas oculares (cataratas, glaucoma, PRA)",
        "Otitis crónica (orejas largas)",
        "Displasia de cadera",
        "Cardiomiopatía",
        "Epilepsia",
        "Hipotiroidismo",
        "Síndrome de rabia del Cocker (agresión - raro)"
    ],
    
    saludComun: [
        "Infecciones de oído (EXTREMADAMENTE COMÚN)",
        "Problemas oculares",
        "Alergias de piel (común)",
        "Obesidad",
        "Problemas dentales",
        "Dermatitis seborreica"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo largo sedoso con subpelo denso, muda moderadamente",
        
        cepillado: {
            frecuencia: {
                normal: "DIARIO - Absolutamente obligatorio",
                sinCepillar: "Nudos severos en 2-3 días"
            },
            herramientas: [
                {
                    herramienta: "Cepillo slicker",
                    funcion: "Elimina nudos diarios",
                    obligatorio: true
                },
                {
                    herramienta: "Peine metálico",
                    funcion: "Verifica nudos especialmente en orejas",
                    obligatorio: true
                }
            ],
            areasProblematicas: [
                "Orejas (MUY propenso a nudos)",
                "Patas ('pantalones')",
                "Pecho",
                "Axilas"
            ],
            consecuenciasNoCepillar: [
                "Nudos dolorosos en orejas en 2-3 días",
                "Pelo apelmazado",
                "Requiere rasurado (pérdida del look)",
                "Infecciones de oído por humedad atrapada"
            ]
        },
        
        baño: {
            frecuencia: "Cada 4-6 semanas (antes de grooming profesional)",
            cuidadosEspeciales: [
                "Limpiar orejas ANTES del baño",
                "Secar orejas MUY bien después",
                "Acondicionador OBLIGATORIO",
                "Secar completamente"
            ]
        },
        
        corte: {
            critico: true,
            frecuencia: "Cada 6-8 semanas - OBLIGATORIO",
            razon: "Pelo crece continuamente. Sin corte regular = nudos severos",
            estilos: [
                {
                    nombre: "Corte show/tradicional",
                    descripcion: "Pelo largo en orejas, pecho, patas. Cuerpo recortado.",
                    mantenimiento: "Muy alto - Cepillado diario obligatorio"
                },
                {
                    nombre: "Corte cachorro/puppy cut",
                    descripcion: "Todo el cuerpo a longitud uniforme corta.",
                    mantenimiento: "Más manejable - Recomendado para mascotas"
                }
            ],
            serviciosGroomer: [
                "Baño profesional",
                "Corte completo",
                "Limpieza de orejas profunda",
                "Recorte de uñas",
                "Limpieza glándulas anales",
                "Recorte pelo entre almohadillas"
            ],
            costo: "$500-900 MXN cada 6-8 semanas"
        },
        
        cuidadoOrejas: {
            critico: true,
            frecuencia: "2-3 veces por semana - NO OPCIONAL",
            razon: "Orejas largas caídas + pelo = infecciones CONSTANTES",
            procedimiento: [
                "1. Limpiar con solución específica para oídos",
                "2. Secar con gasa (NO hisopos)",
                "3. Arrancar pelo del canal auditivo (groomer)",
                "4. Verificar enrojecimiento, olor, exceso de cera"
            ],
            consecuencias: "Otitis crónica - dolor severo - tratamientos costosos continuos"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Principal - ESENCIAL",
                    porque: "El Cocker Spaniel tiene pelo largo sedoso que se enreda FÁCILMENTE, especialmente en orejas largas, patas y pecho. El acondicionador es INDISPENSABLE para facilitar el cepillado diario OBLIGATORIO, prevenir nudos dolorosos en orejas y mantener el pelo sedoso característico. Sin acondicionador, el pelo forma nudos en días.",
                    beneficios: [
                        "Desenreda pelo sedoso fácilmente",
                        "Facilita cepillado diario obligatorio",
                        "Previene nudos en orejas largas",
                        "Mantiene pelo sedoso y brillante",
                        "Reduce tiempo de grooming",
                        "Evita rasurado por nudos"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Cada 4-6 semanas + cepillado diario"
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario - Piel sensible",
                    porque: "Cockers son propensos a alergias de piel. Usar Suave si presenta comezón o dermatitis.",
                    beneficios: [
                        "Calma alergias",
                        "Hipoalergénico",
                        "Reduce comezón"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Alternar con Cero Nudos si problemas de piel"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "✅ Cepillado DIARIO sin excepción",
        "🚨 Limpieza de orejas 2-3 veces semana OBLIGATORIA",
        "✅ Grooming profesional cada 6-8 semanas",
        "⚠️ Vigilar infecciones de oído constantemente",
        "✅ Control de peso estricto (obesidad común)",
        "✅ Chequeos oculares regulares",
        "⚠️ Secar orejas después de baño/lluvia"
    ],
    
    alertasCriticas: [
        "🚨 Rascado de orejas + mal olor = Otitis - VET",
        "🚨 Ojos rojos/nublados = Glaucoma/cataratas - VET URGENTE",
        "🚨 Sacudida constante de cabeza = Infección oído - VET"
    ],
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Media", 
        veterinario: "Alto (infecciones oído recurrentes, problemas oculares)",
        grooming: "Alto ($500-900 cada 6-8 semanas)",
        tiempo: "Alto (cepillado diario + limpieza orejas)"
    }
},

{
    id: "gran-danes",
    nombre: "Gran Danés",
    nombresAlternativos: ["Great Dane", "Dogo Alemán", "Gentle Giant"],
    categoria: "grandes",
    imagen: "🐕",
    tamaño: "Gigantes",
    
    origen: {
        pais: "Alemania 🇩🇪",
        epoca: "Siglo XVI",
        historia: "A pesar del nombre 'Danés', es raza alemana. Desarrollado para caza de jabalíes. Llamado 'Dogo Alemán' en Alemania. Una de las razas más GRANDES del mundo. Récord mundial: Zeus (112 cm altura)."
    },
    
    pesoIdeal: {
        macho: "54-90 kg",
        hembra: "45-59 kg"
    },
    
    esperanzaVida: "7-10 años (una de las más CORTAS)",
    
    temperamento: {
        personalidad: "Gentil, amigable, paciente, cariñoso, 'gigante gentil'",
        nivelEnergia: "Media",
        sociabilidad: {
            conHumanos: "EXCELENTE - Muy cariñoso",
            conNiños: "Excelente - Paciente (supervisión por tamaño)",
            conPerros: "Buena con socialización",
            conExtraños: "Amigable (NO es buen guardián)"
        },
        adiestramiento: "Moderado - Sensible y ansioso por complacer",
        ladridos: "Bajo",
        caracteristicas: [
            "Una de las razas MÁS GRANDES del mundo",
            "'Gigante gentil' - temperamento noble",
            "NO tiene noción de su tamaño (cree que es lap dog)",
            "Muy cariñoso y apegado",
            "Apariencia majestuosa e imponente",
            "Crece EXTREMADAMENTE rápido (riesgos)",
            "Esperanza de vida CORTA (7-10 años)",
            "Costos ALTOS (come muchísimo)"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Alimentación especial para RAZAS GIGANTES - crecimiento controlado",
                "4-5 comidas pequeñas al día",
                "Ejercicio MUY MODERADO (huesos frágiles en crecimiento)",
                "NO subir/bajar escaleras hasta 18 meses",
                "NO saltar de muebles NUNCA",
                "Socialización temprana",
                "Suplementos para articulaciones desde cachorro",
                "Entrenamiento gentil (muy sensibles)"
            ],
            alertasEspeciales: [
                "Crecen EXTREMADAMENTE rápido - riesgo displasia",
                "Ejercicio excesivo = problemas articulares SEVEROS",
                "Alimentación incorrecta = desarrollo óseo anormal"
            ]
        },
        adulto: {
            edad: "1.5-5 años",
            cuidados: [
                "Ejercicio moderado 45-60 min (NO intenso)",
                "2-3 comidas al día (NUNCA una sola - hinchazón CRÍTICA)",
                "Cepillado 1-2 veces semana",
                "Espacio amplio OBLIGATORIO",
                "Revisión veterinaria cada 6 meses",
                "Chequeos cardíacos anuales",
                "Cama ortopédica OBLIGATORIA"
            ]
        },
        senior: {
            edad: "6+ años (se considera senior temprano)",
            cuidados: [
                "Ejercicio suave 30-45 min",
                "Chequeos cada 4 meses",
                "Vigilar cardiomiopatía (MUY COMÚN)",
                "Suplementos articulaciones OBLIGATORIO",
                "Control de peso CRÍTICO",
                "Cama ortopédica esencial",
                "Calidad de vida puede deteriorarse rápido"
            ],
            enfermedadesComunes: [
                "Cardiomiopatía dilatada (COMÚN - 40%+)",
                "Hinchazón gástrica (torsión)",
                "Displasia de cadera severa",
                "Osteosarcoma (cáncer huesos - común)",
                "Síndrome de Wobbler"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para RAZAS GIGANTES - crítico",
        calorias: "2,500-3,500 cal/día (COME MUCHÍSIMO)",
        comidas: {
            cachorro: "4-5 veces al día (crecimiento controlado - NO sobrealimentar)",
            adulto: "2-3 veces al día (NUNCA una sola - hinchazón MORTAL)",
            senior: "2-3 veces al día (reducir calorías)"
        },
        alertas: [
            "⚠️ CRÍTICO: Hinchazón gástrica es EXTREMADAMENTE COMÚN y MORTAL",
            "SIEMPRE 2-3 comidas (NUNCA una sola grande)",
            "NO ejercicio 1-2 horas antes/después de comer",
            "Alimentación elevada OBLIGATORIA",
            "Alimento para razas gigantes (crecimiento lento)",
            "Come CANTIDADES ENORMES - presupuestar $3,000-5,000 MXN/mes"
        ],
        costoAlimentacion: "$3,000-5,000 MXN mensuales (come 6-10 kg alimento/semana)"
    },
    
    problemasCongenitos: [
        "Cardiomiopatía dilatada (DCM) - 40%+",
        "Hinchazón gástrica con torsión (MORTAL - muy común)",
        "Displasia de cadera severa",
        "Osteosarcoma (cáncer huesos - 25% de Gran Daneses)",
        "Síndrome de Wobbler (columna cervical)",
        "Hipotiroidismo",
        "Entropión (párpados)"
    ],
    
    saludComun: [
        "Hinchazón gástrica (EMERGENCIA COMÚN)",
        "Cardiomiopatía",
        "Displasia de cadera",
        "Osteosarcoma",
        "Problemas articulares severos",
        "Síndrome de Wobbler"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto, muda moderadamente",
        
        cepillado: {
            frecuencia: {
                normal: "1-2 veces por semana"
            }
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas",
            desafios: "Requiere tina ENORME o bañera profesional - difícil en casa"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Gran Danés es raza gigante activa que necesita limpieza efectiva. Verde limpia profundamente su pelaje corto y repele parásitos. Su tamaño hace baños logísticamente difíciles, por lo que cada baño debe ser muy efectivo.",
                    beneficios: [
                        "Limpieza profunda efectiva",
                        "Repele parásitos",
                        "Antibacterial",
                        "Controla olor"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 6-8 semanas",
                    nota: "Usar MUCHO producto - perro gigante"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "🚨 2-3 comidas al día SIEMPRE - hinchazón es EMERGENCIA COMÚN",
        "🚨 NO ejercicio 1-2 horas antes/después de comer - CRÍTICO",
        "✅ Alimentación ELEVADA obligatoria",
        "✅ Espacio AMPLIO - NO apto para departamento",
        "⚠️ Cama ortopédica OBLIGATORIA (prevenir callos/úlceras)",
        "✅ Chequeos cardíacos anuales",
        "🚨 Presupuestar $3,000-5,000 MXN/mes SOLO alimentación",
        "⚠️ Vehículo grande necesario (no cabe en sedán)",
        "✅ Ejercicio MODERADO (NO intenso - articulaciones)",
        "🚨 Esperanza de vida CORTA - prepararse emocionalmente"
    ],
    
    alertasCriticas: [
        "🚨 Abdomen hinchado + inquietud + salivación = HINCHAZÓN GÁSTRICA - VET INMEDIATO (MINUTOS CUENTAN)",
        "🚨 Debilidad súbita + desmayo = Cardiomiopatía - VET URGENTE",
        "🚨 Cojera severa + dolor = Osteosarcoma - VET",
        "🚨 Incoordinación = Wobbler - VET"
    ],
    
    realidadDeLaRaza: {
        titulo: "⚠️ GRAN DANÉS - 'GIGANTE GENTIL' CON VIDA CORTA",
        verdades: [
            "Temperamento MARAVILLOSO - gentil, cariñoso, paciente",
            "PERO esperanza de vida 7-10 años (MUCHO más corta que otras razas)",
            "Muchos mueren entre 6-8 años",
            "NO tiene noción de su tamaño - cree que es lap dog",
            "Apariencia MAJESTUOSA pero salud FRÁGIL",
            "",
            "⚠️ COSTOS EXTREMOS:",
            "  - Alimentación: $36,000-60,000 MXN/año",
            "  - Veterinario: MUY alto (problemas comunes caros)",
            "  - Medicamentos: Dosis para 60-80 kg = MUY costosos",
            "  - Cirugía hinchazón gástrica: $40,000-80,000 MXN (emergencia común)",
            "  - Tratamiento cáncer/cardiomiopatía: $50,000-150,000 MXN",
            "",
            "ESPACIO REQUERIDO:",
            "  - NO apto para departamento",
            "  - Casa con espacio amplio",
            "  - Vehículo grande (SUV/camioneta)",
            "  - Cama tamaño king para perro",
            "",
            "MEJOR PARA:",
            "  - Familias con espacio amplio",
            "  - Presupuesto HOLGADO",
            "  - Preparados para vida corta (dolor emocional)",
            "",
            "NO PARA:",
            "  - Departamentos/espacios pequeños",
            "  - Presupuesto limitado",
            "  - Personas que no pueden manejar pérdida temprana"
        ],
        consideracion: "Gran Danés es INCREÍBLE pero requiere compromiso ENORME financiero, de espacio y emocional. Prepararse para despedida en 7-10 años."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "EXTREMADAMENTE Alto - Una de las MÁS CARAS",
        alimentacion: "EXTREMADAMENTE Alta ($36,000-60,000 MXN/año)", 
        veterinario: "EXTREMADAMENTE Alto (emergencias comunes + tratamientos costosos para perro gigante)",
        medicamentos: "MUY Alto (dosis para 60-80 kg)",
        espacio: "CRÍTICO (casa grande obligatoria)",
        vehiculo: "Alto (necesita SUV/camioneta)",
        preparacionEmocional: "CRÍTICA (vida muy corta)"
    }
},

{
    id: "akita",
    nombre: "Akita",
    nombresAlternativos: ["Akita Inu", "Akita Japonés", "Great Japanese Dog"],
    categoria: "grandes",
    imagen: "🐕",
    tamaño: "Grandes",
    
    origen: {
        pais: "Japón 🇯🇵",
        epoca: "Siglo XVII",
        historia: "Raza antigua de Japón, originaria de la prefectura de Akita. Criado para caza de osos, jabalíes y ciervos. Símbolo nacional de Japón. Famoso por Hachiko, el Akita que esperó a su dueño fallecido durante 9 años en estación de tren."
    },
    
    pesoIdeal: {
        macho: "45-59 kg",
        hembra: "32-45 kg"
    },
    
    esperanzaVida: "10-13 años",
    
    temperamento: {
        personalidad: "Digno, leal, valiente, independiente, reservado",
        nivelEnergia: "Media",
        sociabilidad: {
            conHumanos: "Extremadamente leal a SU familia, muy reservado con extraños",
            conNiños: "Variable - Mejor con niños de la familia (supervisión)",
            conPerros: "POBRE - Agresividad común (especialmente mismo sexo)",
            conExtraños: "MUY reservado, territorial, desconfiado"
        },
        adiestramiento: "DIFÍCIL - Muy inteligente pero EXTREMADAMENTE independiente",
        ladridos: "Bajo (silencioso)",
        caracteristicas: [
            "Apariencia de oso/lobo imponente",
            "Extremadamente leal - 'perro de un solo dueño'",
            "Muy independiente y dominante",
            "NO apto para dueños primerizos",
            "Puede ser agresivo con otros perros",
            "Silencioso - ladra raramente",
            "Cara tipo 'sonrisa' característica",
            "Símbolo de lealtad (Hachiko)"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización EXTREMA desde 8 semanas - ABSOLUTAMENTE CRÍTICO",
                "3-4 comidas al día",
                "Ejercicio moderado",
                "Entrenamiento profesional OBLIGATORIO",
                "Establecer liderazgo MUY claro desde cachorro",
                "Exposición positiva a MUCHOS perros (prevenir agresividad)",
                "NUNCA entrenar dominancia/protección"
            ],
            alertasEspeciales: [
                "Sin socialización extrema = Perro agresivo PELIGROSO",
                "Requiere dueño EXPERIMENTADO y FIRME"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio moderado-intenso 1 hora diaria",
                "2 comidas al día",
                "Cepillado 2-3 veces semana (DIARIO en muda)",
                "Entrenamiento continuo (refuerzo)",
                "Control ESTRICTO con otros perros",
                "Liderazgo firme constante",
                "NUNCA sin correa en público"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado 45-60 min",
                "Chequeos cada 6 meses",
                "Vigilar displasia de cadera",
                "Problemas oculares",
                "Suplementos articulaciones",
                "Mantener rutina establecida"
            ],
            enfermedadesComunes: [
                "Displasia de cadera",
                "Hipotiroidismo (COMÚN)",
                "Atrofia progresiva de retina",
                "Síndrome de Vogt-Koyanagi-Harada (autoinmune)",
                "Hinchazón gástrica"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas grandes",
        calorias: "1,600-2,000 cal/día",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día (NUNCA una sola - hinchazón)",
            senior: "2 veces al día"
        },
        alertas: [
            "⚠️ Propenso a hinchazón gástrica",
            "SIEMPRE 2 comidas (no una sola grande)",
            "NO ejercicio 1 hora antes/después de comer",
            "Control de peso importante",
            "Sensibilidad alimentaria común"
        ]
    },
    
    problemasCongenitos: [
        "Displasia de cadera",
        "Hipotiroidismo (muy común - 15%+)",
        "Atrofia progresiva de retina",
        "Síndrome de Vogt-Koyanagi-Harada (VKH - uveítis autoinmune)",
        "Adenitis sebácea (problema de piel)",
        "Hinchazón gástrica"
    ],
    
    saludComun: [
        "Hipotiroidismo (MUY COMÚN)",
        "Displasia de cadera",
        "Problemas oculares",
        "Adenitis sebácea (inflamación glándulas sebáceas)",
        "Alergias de piel (común)",
        "Hinchazón gástrica"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa EXTREMADAMENTE densa, muda INTENSAMENTE 2 veces al año",
        
        cepillado: {
            frecuencia: {
                normal: "2-3 veces por semana",
                temporadaMuda: "DIARIO (primavera y otoño - muda EXTREMA)"
            },
            herramientas: [
                {
                    herramienta: "Rastrillo de subpelo",
                    funcion: "Remueve subpelo denso (ESENCIAL en muda)",
                    obligatorio: true
                },
                {
                    herramienta: "Cepillo slicker",
                    funcion: "Capa exterior",
                    obligatorio: true
                }
            ],
            mudaExtreme: "Durante muda (2 veces/año), pierden TODO el subpelo. Casa cubierta de pelo. Cepillado diario OBLIGATORIO."
        },
        
        baño: {
            frecuencia: "Cada 8-12 semanas (NO bañar en exceso - elimina aceites naturales)",
            cuidadosEspeciales: [
                "Cepillar ANTES del baño",
                "Secado completo (doble capa densa)",
                "NO bañar muy frecuente"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Principal - ESENCIAL en muda",
                    porque: "El Akita tiene doble capa EXTREMADAMENTE densa que forma nudos durante la muda intensa. Cero Nudos facilita enormemente remover el subpelo muerto durante las 2 mudas anuales masivas y mantiene el pelaje denso manejable.",
                    beneficios: [
                        "Facilita muda intensa",
                        "Desenreda subpelo denso",
                        "Reduce tiempo de cepillado",
                        "Mantiene pelaje brillante",
                        "Ayuda a eliminar subpelo muerto"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Cada 8-12 semanas (especialmente durante muda)"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "🚨 Socialización EXTREMA desde cachorro - NO NEGOCIABLE",
        "🚨 NO apto para dueños primerizos - REQUIERE EXPERIENCIA",
        "✅ Entrenamiento profesional OBLIGATORIO",
        "🚨 NUNCA sin correa en público",
        "🚨 Control ESTRICTO con otros perros (agresividad común)",
        "✅ Requiere líder FIRME y consistente",
        "⚠️ NO para familias con niños pequeños sin experiencia",
        "✅ Seguro de responsabilidad civil RECOMENDADO",
        "🚨 2 comidas al día SIEMPRE (hinchazón)"
    ],
    
    alertasCriticas: [
        "🚨 Agresión hacia otros perros = Separar - Profesional canino",
        "🚨 Agresión territorial = Profesional URGENTE",
        "🚨 Abdomen hinchado = Hinchazón gástrica - EMERGENCIA",
        "🚨 Ganancia peso + letargo = Hipotiroidismo - VET"
    ],
    
    responsabilidadLegal: {
        titulo: "⚠️ AKITA = RESPONSABILIDAD LEGAL Y ÉTICA EXTREMA",
        consideraciones: [
            "Puede ser considerado 'raza potencialmente peligrosa' en algunos lugares",
            "Agresividad con otros perros es COMÚN en la raza",
            "Tamaño + fuerza + temperamento = puede causar daño severo",
            "Dueño 100% responsable legalmente",
            "Seguro de responsabilidad civil recomendado",
            "Verificar regulaciones locales",
            "Requiere manejo experto SIEMPRE"
        ]
    },
    
    realidadDeLaRaza: {
        titulo: "⚠️ AKITA - NOBLE PERO NO PARA TODOS",
        verdades: [
            "Extremadamente leal a SU familia - vínculo profundo",
            "PERO muy reservado/territorial con extraños",
            "Agresividad con otros perros es NORMA, no excepción",
            "NO es 'Golden Retriever grande' - es raza primitiva",
            "Requiere dueño EXPERIMENTADO y FIRME",
            "No tolera maltrato - responde con dominancia",
            "Silencioso pero INTIMIDANTE",
            "",
            "Historia Hachiko:",
            "  - Esperó a dueño fallecido 9 años en estación",
            "  - Símbolo de lealtad extrema",
            "  - Pero esa lealtad es SOLO con SU familia",
            "",
            "MEJOR PARA:",
            "  - Dueño experimentado con razas dominantes",
            "  - Persona/familia sin otros perros",
            "  - Quien busca guardián leal",
            "  - Quien valora independencia en perro",
            "",
            "NO PARA:",
            "  - Dueños primerizos",
            "  - Familias con niños pequeños (sin experiencia)",
            "  - Hogares con múltiples perros",
            "  - Personas que quieren perro 'sociable'"
        ],
        consideracion: "Akita es INCREÍBLE para dueño correcto. Para dueño equivocado = situación PELIGROSA."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Alta (come bastante)", 
        veterinario: "Alto (hipotiroidismo crónico común)",
        entrenamiento: "MUY Alto (profesional OBLIGATORIO)",
        seguro: "Alto (recomendado)",
        limpieza: "Alto (muda extrema 2 veces/año)"
    }
},

{
    id: "chow-chow",
    nombre: "Chow Chow",
    nombresAlternativos: ["Chow", "Songshi Quan", "Perro León"],
    categoria: "medianas",
    imagen: "🦁",
    tamaño: "Medianas",
    
    origen: {
        pais: "China 🇨🇳",
        epoca: "Antigua China (2000+ años)",
        historia: "Raza ANTIGUA china (2000+ años). Usado como guardián de templos, caza, tiro de trineos. Lengua AZUL-NEGRA única. Apariencia de león. Casi extinto en China, preservado en Occidente."
    },
    
    pesoIdeal: {
        adulto: "20-32 kg"
    },
    
    esperanzaVida: "9-15 años",
    
    temperamento: {
        personalidad: "Independiente, digno, alerta, distante, leal A SU FAMILIA",
        nivelEnergia: "Baja-Media",
        sociabilidad: {
            conHumanos: "Leal a SU familia, MUY distante con extraños",
            conNiños: "Variable - Mejor con niños mayores de la familia",
            conPerros: "POBRE - Agresividad común",
            conExtraños: "MUY distante, territorial, desconfiado"
        },
        adiestramiento: "MUY DIFÍCIL - Extremadamente independiente y terco",
        ladridos: "Bajo-Medio",
        caracteristicas: [
            "Lengua AZUL-NEGRA distintiva (única)",
            "Apariencia de león miniatura",
            "Extremadamente independiente - 'gato en cuerpo de perro'",
            "MUY terco y dominante",
            "NO es cariñoso como otras razas",
            "Muy limpio (se autolimpia como gato)",
            "Caminar rígido característico",
            "NO apto para dueños primerizos"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización INTENSIVA desde 8 semanas - CRÍTICO",
                "3-4 comidas al día",
                "Ejercicio MODERADO en clima fresco",
                "Entrenamiento desde cachorro (MUY tercos)",
                "Establecer liderazgo claro",
                "NUNCA dejar en calor extremo",
                "Acostumbrar a manipulación (veterinario, grooming)"
            ],
            alertasEspeciales: [
                "Sin socialización = Perro MUY territorial/agresivo",
                "NO tolera calor - pueden morir de golpe de calor"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio moderado 30-45 min (EN CLIMA FRESCO)",
                "2 comidas al día",
                "Cepillado 3-4 veces semana (DIARIO en muda)",
                "Limpieza de pliegues faciales regular",
                "NO ejercicio en calor (golpe de calor común)",
                "Aire acondicionado en verano OBLIGATORIO"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio suave 20-30 min",
                "Chequeos cada 6 meses",
                "Vigilar displasia de cadera/codo",
                "Problemas oculares (entropión común)",
                "Control de peso",
                "Continuar protección del calor"
            ],
            enfermedadesComunes: [
                "Displasia de cadera/codo",
                "Entropión (párpados - MUY COMÚN)",
                "Hipotiroidismo",
                "Problemas respiratorios (cara chata)",
                "Cáncer"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para razas medianas",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día"
        },
        alertas: [
            "Propenso a obesidad (baja energía)",
            "Control de porciones estricto",
            "NO sobrealimentar",
            "Come menos que otras razas de su tamaño"
        ]
    },
    
    problemasCongenitos: [
        "Entropión (párpados hacia adentro - 50%+ requieren cirugía)",
        "Displasia de cadera",
        "Displasia de codo",
        "Estenosis pulmonar (corazón)",
        "Hipotiroidismo (común)",
        "Síndrome braquicéfalo (cara chata)",
        "Sensibilidad a anestesia"
    ],
    
    saludComun: [
        "Entropión (EXTREMADAMENTE COMÚN - mayoría requieren cirugía)",
        "Golpe de calor (MUY común - NO tolera calor)",
        "Obesidad",
        "Problemas respiratorios (cara chata)",
        "Dermatitis en pliegues faciales",
        "Hipotiroidismo"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa EXTREMADAMENTE densa tipo 'peluche', muda INTENSAMENTE",
        
        cepillado: {
            frecuencia: {
                normal: "3-4 veces por semana MÍNIMO",
                temporadaMuda: "DIARIO (primavera y otoño - muda MASIVA)"
            },
            herramientas: [
                {
                    herramienta: "Rastrillo de subpelo",
                    funcion: "Remueve subpelo denso (ESENCIAL)",
                    obligatorio: true
                },
                {
                    herramienta: "Cepillo slicker grande",
                    funcion: "Capa exterior",
                    obligatorio: true
                }
            ],
            mudaExtreme: "Muda EXTREMA 2 veces al año. Pierden TODO el subpelo. Casa CUBIERTA de pelo.",
            consecuenciasNoCepillar: [
                "Nudos severos en subpelo",
                "Apelmazamiento masivo",
                "Hot spots por humedad atrapada",
                "Requiere rasurado completo (pérdida del look)"
            ]
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas",
            proceso: [
                "1. Cepillar COMPLETAMENTE antes del baño",
                "2. Shampoo hasta la piel (pelo MUY denso)",
                "3. Enjuagar MUY bien (2-3 veces)",
                "4. Acondicionador obligatorio",
                "5. Secar COMPLETAMENTE (3-4 horas)",
                "6. Limpiar pliegues faciales"
            ],
            cuidadosEspeciales: [
                "Limpieza de pliegues faciales DIARIA",
                "Secar completamente (hot spots/hongos si húmedo)",
                "NO bañar muy frecuente"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Principal - ESENCIAL",
                    porque: "El Chow Chow tiene doble capa EXTREMADAMENTE densa tipo 'peluche' que se enreda fácilmente, especialmente en cuello, patas y cola. El acondicionador es CRÍTICO para facilitar el cepillado frecuente OBLIGATORIO, manejar la muda masiva y mantener el pelaje esponjoso característico sin nudos.",
                    beneficios: [
                        "Desenreda pelaje denso tipo peluche",
                        "Facilita cepillado frecuente obligatorio",
                        "Maneja muda extrema",
                        "Mantiene textura esponjosa",
                        "Reduce tiempo de grooming",
                        "Previene nudos en subpelo"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Cada 6-8 semanas + cepillado 3-4 veces semana"
                },
                {
                    producto: "Shampoo Suave e Hidratante 7en1",
                    prioridad: "Complementario - Pliegues faciales",
                    porque: "Chow Chows tienen pliegues faciales que requieren cuidado especial. Suave para piel sensible en pliegues.",
                    beneficios: [
                        "Cuida pliegues faciales",
                        "Hipoalergénico",
                        "No irrita piel sensible"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Suave-e-Hidratante-Bot%C3%A1nico-Piel-Sensible-y-M%C3%A1s-7en1-Presentaci%C3%B3n-de-Litro-p94305396",
                    uso: "Si problemas en pliegues faciales"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "🚨 NO tolera calor - aire acondicionado OBLIGATORIO en verano",
        "🚨 NO ejercicio en calor - puede MORIR de golpe de calor",
        "✅ Socialización INTENSIVA desde cachorro",
        "✅ Entrenamiento profesional ALTAMENTE recomendado",
        "⚠️ MUY terco - paciencia infinita necesaria",
        "✅ Limpieza de pliegues faciales DIARIA",
        "🚨 Cirugía entropión casi siempre necesaria (50%+)",
        "⚠️ NO apto para dueños primerizos",
        "✅ Cepillado 3-4 veces semana MÍNIMO"
    ],
    
    alertasCriticas: [
        "🚨 Jadeo excesivo + colapso en calor = Golpe de calor - EMERGENCIA MORTAL",
        "🚨 Ojos rojos + lagrimeo = Entropión - VET (cirugía necesaria)",
        "🚨 Agresividad territorial = Profesional canino"
    ],
    
    realidadDeLaRaza: {
        titulo: "⚠️ CHOW CHOW - 'GATO EN CUERPO DE PERRO'",
        verdades: [
            "NO es perro 'cariñoso' típico - es INDEPENDIENTE",
            "Leal a SU familia pero NO efusivo",
            "MUY distante con extraños (puede parecer antipático)",
            "Extremadamente TERCO - entrenamiento difícil",
            "Apariencia adorable pero temperamento DIFÍCIL",
            "NO tolera calor - pueden MORIR fácilmente",
            "Lengua azul-negra es normal (NO es enfermedad)",
            "",
            "COMPARACIÓN:",
            "  - NO esperes Golden Retriever",
            "  - Espera gato independiente en cuerpo de perro",
            "  - Afecto en SUS términos, no los tuyos",
            "",
            "MEJOR PARA:",
            "  - Dueño experimentado",
            "  - Quien valora independencia",
            "  - Clima fresco/aire acondicionado",
            "  - Quien quiere guardián distante",
            "",
            "NO PARA:",
            "  - Dueños primerizos",
            "  - Quien quiere perro 'pegajoso' cariñoso",
            "  - Climas calurosos sin A/C",
            "  - Familias con niños pequeños"
        ],
        consideracion: "Chow Chow es para dueño MUY específico que aprecia su independencia única."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Media", 
        veterinario: "MUY Alto (cirugía entropión casi siempre - $15,000-30,000 MXN)",
        grooming: "Alto (cepillado frecuente + muda extrema)",
        aireAcondicionado: "CRÍTICO (pueden morir sin A/C en verano)",
        entrenamiento: "Alto (profesional recomendado)"
    }
},

{
    id: "pastor-australiano",
    nombre: "Pastor Australiano",
    nombresAlternativos: ["Australian Shepherd", "Aussie"],
    categoria: "medianas",
    imagen: "🐕‍🦺",
    tamaño: "Medianas",
    
    origen: {
        pais: "Estados Unidos 🇺🇸 (NO Australia)",
        epoca: "Siglo XIX",
        historia: "A pesar del nombre, desarrollado en ESTADOS UNIDOS, no Australia. Criado para pastoreo en ranchos del oeste americano. Nombre viene de ovejas australianas que pastoreaban. Raza de pastoreo versátil y enérgica."
    },
    
    pesoIdeal: {
        macho: "23-29 kg",
        hembra: "16-25 kg"
    },
    
    esperanzaVida: "12-15 años",
    
    temperamento: {
        personalidad: "Inteligente, enérgico, trabajador, leal, versátil",
        nivelEnergia: "EXTREMADAMENTE Alta",
        sociabilidad: {
            conHumanos: "Excelente con familia, reservado con extraños",
            conNiños: "Excelente (puede 'pastorearlos')",
            conPerros: "Buena con socialización",
            conExtraños: "Reservado inicialmente"
        },
        adiestramiento: "MUY FÁCIL - Extremadamente inteligente",
        ladridos: "Medio-Alto (alerta)",
        caracteristicas: [
            "Ojos azules/heterocromía comunes (distintivo)",
            "Pelaje merle hermoso (varios colores)",
            "Energía EXTREMA - necesita MUCHO ejercicio",
            "Instinto de pastoreo MUY fuerte",
            "Aprende rapidísimo",
            "Necesita TRABAJO, no solo ejercicio",
            "Puede ser destructivo sin estimulación",
            "Raza de rodeo americana"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización intensiva",
                "3-4 comidas al día",
                "Ejercicio moderado-intenso",
                "Estimulación mental DESDE CACHORRO",
                "Entrenamiento temprano (aprenden muy rápido)",
                "Canalizar instinto de pastoreo apropiadamente",
                "Juguetes interactivos"
            ],
            alertasEspeciales: [
                "Sin estimulación = destructivo EXTREMO",
                "Pueden 'pastorear' niños (pellizcar talones)"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 2+ horas DIARIAS",
                "Trabajo/deporte OBLIGATORIO (agility, pastoreo, frisbee)",
                "2 comidas al día",
                "Cepillado 2-3 veces semana",
                "Estimulación mental DIARIA",
                "Entrenamiento continuo avanzado"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado-intenso 1-1.5 horas",
                "Continuar estimulación mental",
                "Chequeos cada 6 meses",
                "Vigilar displasia de cadera",
                "Problemas oculares",
                "Suplementos articulaciones"
            ],
            enfermedadesComunes: [
                "Displasia de cadera",
                "Problemas oculares (cataratas, PRA)",
                "Epilepsia",
                "Sensibilidad MDR1 (medicamentos)"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium alto en proteína para perros muy activos",
        calorias: "1,200-1,800 cal/día (actividad extrema)",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día",
            senior: "2 veces al día"
        },
        alertas: [
            "Requiere dieta para perros MUY activos",
            "Alta proteína para energía constante",
            "Control de peso si no trabajan/compiten"
        ]
    },
    
    problemasCongenitos: [
        "Sensibilidad MDR1 (ivermectina/medicamentos MORTAL)",
        "Problemas oculares (cataratas, PRA, Collie eye anomaly)",
        "Displasia de cadera",
        "Epilepsia",
        "Sordera (perros merle doble)",
        "Problemas en perros merle doble (ciego/sordo)"
    ],
    
    saludComun: [
        "Displasia de cadera",
        "Problemas oculares",
        "Epilepsia",
        "Alergias de piel (moderado)",
        "Ansiedad sin estimulación apropiada",
        "Comportamientos obsesivos (sin trabajo)"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Doble capa de longitud media, muda moderadamente",
        
        cepillado: {
            frecuencia: {
                normal: "2-3 veces por semana",
                temporadaMuda: "DIARIO (primavera y otoño)"
            }
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Principal",
                    porque: "El Pastor Australiano tiene doble capa de longitud media que puede enredarse, especialmente detrás de orejas, patas y cola. El acondicionador facilita el cepillado regular y mantiene el hermoso pelaje merle brillante y sin nudos.",
                    beneficios: [
                        "Desenreda doble capa",
                        "Facilita cepillado regular",
                        "Mantiene brillo del pelaje merle",
                        "Previene nudos detrás de orejas",
                        "Reduce tiempo de grooming"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Cada 6-8 semanas"
                },
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Complementario - Muy activo",
                    porque: "Pastor Australiano es EXTREMADAMENTE activo. Verde para protección y limpieza profunda.",
                    beneficios: [
                        "Protección antiparasitaria",
                        "Limpieza profunda",
                        "Ideal para perros muy activos"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Alternar con Cero Nudos si muy activo en exteriores"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "🚨 Ejercicio INTENSO 2+ horas diarias - NO NEGOCIABLE",
        "🚨 Necesita TRABAJO/deporte - agility, pastoreo, frisbee, tricks",
        "⚠️ NO apto para personas sedentarias o con poco tiempo",
        "✅ Estimulación mental DIARIA obligatoria",
        "🚨 Test MDR1 CRÍTICO (ivermectina puede ser MORTAL)",
        "✅ Raza #1 en agility - excelente para deportes",
        "⚠️ Puede 'pastorear' niños/otros animales",
        "✅ NO cruzar merle x merle (cachorros ciegos/sordos)"
    ],
    
    alertasCriticas: [
        "🚨 NUNCA dar ivermectina sin test MDR1 - PUEDE SER MORTAL",
        "🚨 Problemas de visión = Cataratas/PRA - VET",
        "🚨 Convulsiones = Epilepsia - VET",
        "🚨 Comportamientos obsesivos extremos = Falta estimulación"
    ],
    
    realidadDeLaRaza: {
        titulo: "⚠️ PASTOR AUSTRALIANO - HERMOSO PERO EXTREMADAMENTE DEMANDANTE",
        verdades: [
            "Apariencia HERMOSA (ojos azules, pelaje merle)",
            "PERO requiere 2-3 HORAS ejercicio + estimulación mental DIARIA",
            "NO es perro de familia promedio - es perro de TRABAJO",
            "Sin trabajo apropiado = destructivo EXTREMO",
            "Puede desarrollar comportamientos obsesivos sin estimulación",
            "Ladrido/pastoreo excesivo si aburrido",
            "",
            "MEJOR PARA:",
            "  - Competencias agility, frisbee, pastoreo",
            "  - Dueño MUY activo (correr, hiking, deportes)",
            "  - Ranchos, granjas con trabajo real",
            "  - Quien puede dedicar 2-3 horas diarias",
            "",
            "NO PARA:",
            "  - Familias sedentarias",
            "  - Personas con poco tiempo",
            "  - Vida en departamento sin compromiso extremo",
            "  - Solo porque 'es bonito'"
        ],
        consideracion: "Pastor Australiano es INCREÍBLE para dueño activo y dedicado. Para dueño sedentario = PESADILLA."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico - Muy activo en exteriores" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Alta (come bastante + premium para activos)", 
        veterinario: "Medio-Alto",
        deportes: "Alto (agility, pastoreo - NO opcional)",
        tiempo: "EXTREMO (2-3 horas diarias mínimo)"
    }
},


{
    id: "san-bernardo",
    nombre: "San Bernardo",
    nombresAlternativos: ["Saint Bernard", "Alpine Mastiff"],
    categoria: "grandes",
    imagen: "🐕",
    tamaño: "Gigantes",
    
    origen: {
        pais: "Suiza 🇨🇭",
        epoca: "Siglo XVII",
        historia: "Desarrollado por monjes en Hospicio del Gran San Bernardo en Alpes suizos para rescate de viajeros en la nieve. Famosos por rescatar más de 2,000 personas. Beethoven (película) hizo famosa la raza mundialmente."
    },
    
    pesoIdeal: {
        macho: "64-82 kg",
        hembra: "54-64 kg"
    },
    
    esperanzaVida: "8-10 años (corta para raza gigante)",
    
    temperamento: {
        personalidad: "Gentil, paciente, amigable, protector, 'gigante gentil'",
        nivelEnergia: "Baja-Media",
        sociabilidad: {
            conHumanos: "EXCELENTE - Extremadamente cariñoso",
            conNiños: "EXCELENTE - Paciente 'perro niñera' (supervisión por tamaño)",
            conPerros: "Buena con socialización",
            conExtraños: "Amigable"
        },
        adiestramiento: "Moderado - Inteligente pero puede ser terco",
        ladridos: "Bajo",
        caracteristicas: [
            "Raza GIGANTE - hasta 100 kg",
            "'Gigante gentil' - temperamento NOBLE",
            "Babea MUCHÍSIMO (no apto para obsesionados con limpieza)",
            "Héroe de rescate alpino histórico",
            "Extremadamente cariñoso con familia",
            "NO tiene noción de su tamaño",
            "Crece EXTREMADAMENTE rápido",
            "Costos ENORMES (comida, veterinario)"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-24 meses",
            cuidados: [
                "Alimentación especial RAZAS GIGANTES - crecimiento lento",
                "4-5 comidas pequeñas al día",
                "Ejercicio MUY MODERADO (huesos frágiles)",
                "NO subir/bajar escaleras hasta 18-24 meses",
                "NO saltar NUNCA",
                "Socialización temprana",
                "Entrenamiento gentil (muy sensibles)",
                "Suplementos articulaciones desde cachorro"
            ],
            alertasEspeciales: [
                "Crecen EXTREMADAMENTE rápido - huesos frágiles",
                "Ejercicio excesivo = displasia severa garantizada"
            ]
        },
        adulto: {
            edad: "2-6 años",
            cuidados: [
                "Ejercicio MODERADO 30-45 min (NO intenso)",
                "2-3 comidas al día (NUNCA una sola - hinchazón)",
                "Cepillado 3-4 veces semana",
                "Limpiar babas constantemente",
                "Espacio AMPLIO obligatorio",
                "Aire acondicionado en verano (NO toleran calor)",
                "Cama ortopédica GIGANTE"
            ]
        },
        senior: {
            edad: "7+ años (senior TEMPRANO)",
            cuidados: [
                "Ejercicio suave 20-30 min",
                "Chequeos cada 4 meses",
                "Vigilar problemas cardíacos",
                "Displasia severa común",
                "Osteosarcoma (cáncer huesos)",
                "Cama ortopédica ESENCIAL",
                "Calidad de vida puede deteriorarse rápido"
            ],
            enfermedadesComunes: [
                "Displasia de cadera/codo SEVERA",
                "Cardiomiopatía dilatada",
                "Osteosarcoma (cáncer huesos)",
                "Síndrome de Wobbler",
                "Hinchazón gástrica"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium para RAZAS GIGANTES - CRÍTICO",
        calorias: "2,800-4,000 cal/día (COME ENORMEMENTE)",
        comidas: {
            cachorro: "4-5 veces al día (NO sobrealimentar - crecimiento lento)",
            adulto: "2-3 veces al día (NUNCA una sola - hinchazón)",
            senior: "2-3 veces al día"
        },
        alertas: [
            "⚠️ CRÍTICO: Hinchazón gástrica EXTREMADAMENTE COMÚN y MORTAL",
            "SIEMPRE 2-3 comidas (NUNCA una sola)",
            "NO ejercicio 1-2 horas antes/después de comer",
            "Alimentación elevada OBLIGATORIA",
            "Alimento para razas gigantes (crecimiento lento)",
            "Come CANTIDADES MASIVAS - presupuestar $4,000-6,000 MXN/mes"
        ],
        costoAlimentacion: "$48,000-72,000 MXN anuales (come 8-12 kg alimento/semana)"
    },
    
    problemasCongenitos: [
        "Displasia de cadera/codo SEVERA (casi universal)",
        "Cardiomiopatía dilatada (común)",
        "Osteosarcoma (cáncer huesos - 20%+)",
        "Síndrome de Wobbler (columna cervical)",
        "Entropión/ectropión (párpados)",
        "Hinchazón gástrica (muy común)",
        "Epilepsia"
    ],
    
    saludComun: [
        "Hinchazón gástrica (EMERGENCIA FRECUENTE)",
        "Displasia de cadera/codo (casi TODOS)",
        "Problemas cardíacos",
        "Osteosarcoma",
        "Dermatitis (pliegues/babas)",
        "Infecciones de oído",
        "Problemas articulares severos"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo largo o corto (dos variedades), doble capa densa",
        
        cepillado: {
            frecuencia: {
                peloLargo: "DIARIO obligatorio",
                peloCorto: "2-3 veces por semana",
                temporadaMuda: "DIARIO (muda intensa)"
            }
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas",
            desafios: "Requiere instalación profesional GIGANTE - casi imposible en casa",
            costo: "$1,000-1,500 MXN por baño profesional (tamaño gigante)"
        },
        
        limpiezaBabas: {
            critico: true,
            frecuencia: "CONSTANTEMENTE - TODO EL DÍA",
            realidad: [
                "Babea ENORMEMENTE todo el tiempo",
                "Babas en paredes, muebles, ropa, TODO",
                "Requiere toallas SIEMPRE disponibles",
                "NO apto para personas obsesionadas con limpieza",
                "Babas se resecan y huelen mal si no se limpian"
            ]
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El San Bernardo es raza gigante que babea constantemente, creando humedad en cuello/pecho propensa a bacterias y hongos. Verde es ANTIBACTERIAL + ANTIFÚNGICO, crítico para prevenir dermatitis por humedad de babas. Limpieza profunda esencial para perro tan grande.",
                    beneficios: [
                        "Antibacterial crítico (babas constantes)",
                        "Antifúngico (previene hongos por humedad)",
                        "Limpieza profunda",
                        "Controla olor por babas",
                        "Previene dermatitis en pliegues"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 6-8 semanas",
                    nota: "Usar MUCHO producto - perro GIGANTE"
                },
                {
                    producto: "Shampoo Cero Nudos 2en1",
                    prioridad: "Solo para variedad pelo largo",
                    porque: "Si es variedad pelo largo, Cero Nudos para desenredar.",
                    beneficios: [
                        "Desenreda pelo largo",
                        "Facilita cepillado"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Bot%C3%A1nico-con-Acondicionador-2en1-Cero-Nudos-1-Litro-p94305799",
                    uso: "Solo si variedad pelo largo"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "🚨 2-3 comidas al día SIEMPRE - hinchazón EXTREMADAMENTE común",
        "🚨 NO ejercicio intenso - articulaciones frágiles",
        "✅ Espacio AMPLIO obligatorio - NO departamento",
        "⚠️ Babea CONSTANTEMENTE - toallas siempre",
        "✅ Aire acondicionado en verano (NO toleran calor)",
        "🚨 Presupuestar $4,000-6,000 MXN/mes SOLO alimentación",
        "✅ Cama ortopédica GIGANTE obligatoria",
        "⚠️ Vehículo MUY grande necesario (camioneta/van)",
        "🚨 Esperanza de vida CORTA (8-10 años)",
        "✅ Chequeos cardíacos anuales"
    ],
    
    alertasCriticas: [
        "🚨 Abdomen hinchado + inquietud = HINCHAZÓN GÁSTRICA - VET INMEDIATO",
        "🚨 Debilidad + desmayo = Cardiomiopatía - VET URGENTE",
        "🚨 Cojera severa + dolor = Displasia/osteosarcoma - VET",
        "🚨 Jadeo excesivo en calor = Golpe de calor - EMERGENCIA"
    ],
    
    realidadDeLaRaza: {
        titulo: "⚠️ SAN BERNARDO - GIGANTE GENTIL CON COSTOS GIGANTES",
        verdades: [
            "Temperamento MARAVILLOSO - gentil, paciente, cariñoso",
            "Excelente con niños - 'perro niñera'",
            "PERO babea MUCHÍSIMO - babas EVERYWHERE",
            "Esperanza de vida MUY CORTA (8-10 años)",
            "Problemas de salud SEVEROS casi garantizados",
            "",
            "⚠️ COSTOS EXTREMOS:",
            "  - Alimentación: $48,000-72,000 MXN/año",
            "  - Veterinario: EXTREMADAMENTE alto (displasia, cáncer, cardiomiopatía)",
            "  - Medicamentos: Dosis gigantes = MUY costosos",
            "  - Cirugía displasia: $50,000-100,000 MXN por cadera",
            "  - Grooming profesional: $1,000-1,500 por sesión",
            "",
            "ESPACIO/LOGÍSTICA:",
            "  - NO apto para departamento",
            "  - Casa grande con espacio amplio",
            "  - Vehículo grande (camioneta/van)",
            "  - Cama gigante ortopédica",
            "  - Babas requieren limpieza constante casa",
            "",
            "MEJOR PARA:",
            "  - Familias con espacio MUY amplio",
            "  - Presupuesto HOLGADO (uno de los perros MÁS CAROS)",
            "  - Preparados emocionalmente para vida corta",
            "  - No les molestan babas CONSTANTES",
            "",
            "NO PARA:",
            "  - Departamentos/espacios pequeños",
            "  - Presupuesto limitado/medio",
            "  - Obsesionados con limpieza (babas everywhere)",
            "  - Personas que quieren perro longevo"
        ],
        consideracion: "San Bernardo es INCREÍBLE pero es compromiso MASIVO financiero, espacial y emocional."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico para salud pública" }},
    costoMantenimiento: { 
        nivel: "EXTREMADAMENTE Alto - UNO DE LOS MÁS CAROS",
        alimentacion: "EXTREMADAMENTE Alta ($48,000-72,000 MXN/año)", 
        veterinario: "EXTREMADAMENTE Alto (displasia, cáncer, cardiomiopatía)",
        medicamentos: "MUY Alto (dosis gigantes)",
        grooming: "Alto ($1,000-1,500 por sesión profesional)",
        espacio: "CRÍTICO (casa grande obligatoria)",
        vehiculo: "Alto (camioneta/van necesaria)",
        limpieza: "Alto (babas constantes)"
    }
},


{
    id: "weimaraner",
    nombre: "Weimaraner",
    nombresAlternativos: ["Braco de Weimar", "Grey Ghost", "Fantasma Gris"],
    categoria: "grandes",
    imagen: "🐕",
    tamaño: "Grandes",
    
    origen: {
        pais: "Alemania 🇩🇪",
        epoca: "Siglo XIX",
        historia: "Desarrollado en corte de Weimar, Alemania para caza mayor (osos, ciervos, jabalíes). Perro de nobleza alemana. Llamado 'Grey Ghost' (Fantasma Gris) por color distintivo y forma de moverse silenciosamente. Raza versátil de caza."
    },
    
    pesoIdeal: {
        macho: "30-40 kg",
        hembra: "25-35 kg"
    },
    
    esperanzaVida: "10-13 años",
    
    temperamento: {
        personalidad: "Enérgico, inteligente, leal, amigable, INTENSO",
        nivelEnergia: "EXTREMADAMENTE Alta",
        sociabilidad: {
            conHumanos: "EXCELENTE con familia - Muy apegado ('perro velcro')",
            conNiños: "Buena (MUCHA energía - puede tirar niños pequeños)",
            conPerros: "Buena con socialización",
            conExtraños: "Amigable pero puede ser reservado"
        },
        adiestramiento: "Moderado - Inteligente pero EXTREMADAMENTE terco e independiente",
        ladridos: "Medio-Alto",
        caracteristicas: [
            "Color gris distintivo único ('fantasma gris')",
            "Ojos ámbar/azul-gris característicos",
            "Apariencia elegante y atlética",
            "Energía EXTREMA - necesita MUCHO ejercicio",
            "Muy apegado - ansiedad por separación común",
            "Instinto de caza MUY fuerte",
            "Puede ser destructivo sin ejercicio",
            "NO apto para dueños primerizos"
        ]
    },
    
    etapasVida: {
        cachorro: {
            edad: "0-18 meses",
            cuidados: [
                "Socialización intensiva",
                "3-4 comidas al día",
                "Ejercicio moderado-intenso",
                "Entrenamiento desde cachorro (MUY tercos)",
                "Estimulación mental constante",
                "Acostumbrar a quedarse solo gradualmente (ansiedad)",
                "Canalizar instinto de caza apropiadamente"
            ],
            alertasEspeciales: [
                "Ansiedad por separación EXTREMA común",
                "Sin ejercicio = destructivo SEVERO"
            ]
        },
        adulto: {
            edad: "1.5-7 años",
            cuidados: [
                "Ejercicio INTENSO 2+ horas DIARIAS",
                "2 comidas al día (NUNCA una sola - hinchazón)",
                "Estimulación mental DIARIA",
                "Caza, caminatas largas, deportes caninos",
                "Entrenamiento continuo (refuerzo)",
                "Manejo de ansiedad por separación",
                "Cepillado 1-2 veces semana"
            ]
        },
        senior: {
            edad: "8+ años",
            cuidados: [
                "Ejercicio moderado-intenso 1-1.5 horas",
                "Chequeos cada 6 meses",
                "Vigilar displasia de cadera",
                "Hinchazón gástrica",
                "Suplementos articulaciones",
                "Mantener rutina ejercicio"
            ],
            enfermedadesComunes: [
                "Displasia de cadera",
                "Hinchazón gástrica",
                "Hipotiroidismo",
                "Problemas oculares",
                "Tumores de mastocitos"
            ]
        }
    },
    
    alimentacion: {
        tipoAlimento: "Premium alto en proteína para perros muy activos",
        calorias: "1,400-2,000 cal/día según actividad alta",
        comidas: {
            cachorro: "3-4 veces al día",
            adulto: "2 veces al día (NUNCA una sola - hinchazón)",
            senior: "2 veces al día"
        },
        alertas: [
            "⚠️ Propenso a hinchazón gástrica (MORTAL)",
            "SIEMPRE 2 comidas (nunca una sola grande)",
            "NO ejercicio 1 hora antes/después de comer",
            "Alimentación elevada recomendada",
            "Alta proteína para energía extrema"
        ]
    },
    
    problemasCongenitos: [
        "Displasia de cadera",
        "Hinchazón gástrica",
        "Hipotiroidismo",
        "Entropión (párpados)",
        "Distichiasis (pestañas adicionales)",
        "Síndrome de Wobbler",
        "Tumores de mastocitos"
    ],
    
    saludComun: [
        "Hinchazón gástrica",
        "Displasia de cadera",
        "Ansiedad por separación SEVERA (MUY COMÚN)",
        "Alergias de piel (moderado)",
        "Hipotiroidismo",
        "Infecciones de oído"
    ],
    
    cuidadosBañoEstetica: {
        tipoPelaje: "Pelo corto liso, muda mínimamente",
        
        cepillado: {
            frecuencia: {
                normal: "1-2 veces por semana"
            }
        },
        
        baño: {
            frecuencia: "Cada 6-8 semanas"
        },
        
        botanican: {
            recomendaciones: [
                {
                    producto: "Shampoo Verde Botánico 7en1",
                    prioridad: "Principal",
                    porque: "El Weimaraner es perro de CAZA extremadamente activo con energía altísima. Pasa muchas horas en exteriores, explora intensamente. Verde limpia profundamente, repele parásitos (alta exposición por instinto de caza) y mantiene su pelaje gris distintivo brillante.",
                    beneficios: [
                        "Limpieza profunda para perro muy activo",
                        "Repele parásitos 14 días",
                        "Mantiene brillo del pelaje gris",
                        "Antibacterial + Antifúngico",
                        "Ideal para perros de caza/deportivos"
                    ],
                    link: "https://botanican.ecwid.com/Shampoo-Verde-Bot%C3%A1nico-Uso-Normal-Repelente-Antihongos-y-M%C3%A1s-1-Litro-7-en-1-p94289594",
                    uso: "Cada 6-8 semanas"
                }
            ]
        }
    },
    
    tipsEspecificos: [
        "🚨 Ejercicio INTENSO 2+ horas diarias - destructivo sin ejercicio",
        "🚨 Ansiedad por separación SEVERA - NO dejar solo largos periodos",
        "✅ Mejor para dueño que está en casa frecuentemente",
        "⚠️ MUY terco - paciencia infinita necesaria",
        "✅ Caza, caminatas largas, deportes OBLIGATORIO",
        "🚨 2 comidas al día SIEMPRE (hinchazón común)",
        "⚠️ NO apto para departamento sin compromiso extremo",
        "✅ Jaula/crate training ayuda con ansiedad",
        "⚠️ Puede ser destructivo EXTREMO si aburrido/solo"
    ],
    
    alertasCriticas: [
        "🚨 Abdomen hinchado + inquietud = Hinchazón gástrica - EMERGENCIA",
        "🚨 Destructividad extrema cuando solo = Ansiedad severa - Profesional conductual",
        "🚨 Cojera = Displasia - VET"
    ],
    
    realidadDeLaRaza: {
        titulo: "⚠️ WEIMARANER - 'FANTASMA GRIS' HERMOSO PERO DEMANDANTE",
        verdades: [
            "Apariencia ELEGANTE y distintiva (gris + ojos ámbar)",
            "PERO requiere 2+ horas ejercicio DIARIO",
            "Ansiedad por separación es NORMA, no excepción",
            "Extremadamente apegado - 'perro velcro'",
            "Puede ser destructivo SEVERO si solo/aburrido",
            "MUY terco - entrenamiento puede ser frustrante",
            "",
            "⚠️ ANSIEDAD POR SEPARACIÓN:",
            "  - Puede destruir casa completa si solo",
            "  - Ladra/aúlla constantemente",
            "  - Autolesiones (lamer hasta crear heridas)",
            "  - NO es raza para quien trabaja 8+ horas fuera",
            "",
            "MEJOR PARA:",
            "  - Cazadores activos",
            "  - Personas que trabajan desde casa",
            "  - Dueño MUY activo (correr, hiking, caza)",
            "  - Quien puede dedicar 2-3 horas diarias",
            "  - Familias con alguien siempre en casa",
            "",
            "NO PARA:",
            "  - Personas que trabajan largas horas fuera",
            "  - Dueños primerizos",
            "  - Vida sedentaria",
            "  - Departamento sin compromiso extremo"
        ],
        consideracion: "Weimaraner es INCREÍBLE para dueño correcto. Para dueño que trabaja 8+ horas fuera = DESASTRE garantizado."
    },
    
    saludPublica: { desparasitacion: { frecuencia: "Cada 3 meses", importancia: "Crítico - Alta actividad en exteriores/caza" }},
    costoMantenimiento: { 
        nivel: "Alto", 
        alimentacion: "Alta (come bastante + premium para activos)", 
        veterinario: "Medio-Alto",
        ejercicio: "EXTREMO (2+ horas diarias obligatorio)",
        entrenamiento: "Alto (profesional recomendado para terquedad)",
        manejoConductual: "Alto (ansiedad por separación común - profesional)",
        tiempo: "EXTREMO - NO para quien trabaja largas horas fuera"
    }
},


// Total: 35 razas completas

];
