# 🐕 GuíaCanina

**Tu referencia completa para el cuidado de tu perro**

Aplicación web progresiva (PWA) con información completa y detallada sobre cuidados de perros, desarrollada en colaboración con **BotaniCan Shampoo**.

---

## 📱 Acerca del Proyecto

GuíaCanina es una herramienta educativa diseñada para proporcionar a los dueños de perros información profesional sobre el cuidado de sus mascotas. La app funciona como embudo de marketing para BotaniCan mientras ofrece valor real a los usuarios.

### 🎯 Objetivos

1. **Educación:** Proporcionar información detallada y veraz sobre cuidados caninos
2. **Marketing:** Promocionar BotaniCan Shampoo de forma natural
3. **Tráfico:** Atraer visitantes desde Facebook BotaniCan a myappsmaster.com

---

## ✨ Características

### 📚 Base de Datos de Razas (21 razas completas)

Cada ficha incluye:
- ✅ Origen e historia de la raza
- ✅ Temperamento y personalidad detallados
- ✅ Etapas de vida (cachorro, adulto, senior/geriatra)
- ✅ Alimentación ideal y alertas nutricionales
- ✅ Peso ideal por edad
- ✅ Problemas de salud comunes y congénitos
- ✅ **Cuidados de baño y estética canina**
  - Información sobre pH de la piel canina (6.2-7.4)
  - Productos PROHIBIDOS (lavaplatos, Zote, shampoo humano)
  - Consecuencias de usar productos inadecuados
  - **ALERTA CRÍTICA:** Rasurado prohibido en razas de doble capa (Husky, Malamute, Akita, etc.)
  - Explicación del sistema de termorregulación
- ✅ Recomendaciones específicas de BotaniCan por tipo de pelaje
- ✅ **Salud pública y responsabilidad**
  - Peligros de contaminación fecal (parásitos, enfermedades zoonóticas)
  - Riesgos para humanos (especialmente niños)
  - Responsabilidades legales
  - Calendario de desparasitación
- ✅ Tips específicos por raza
- ✅ Alertas críticas de salud

### 🇲🇽 Sección Especial: Razas Mexicanas

- **Chihuahua** - La raza más pequeña del mundo
- **Xoloitzcuintle** - Patrimonio cultural de México (3,000+ años)
- **Raza Criolla/Mestiza** - Homenaje a los perros rescatados

### 🔍 Funcionalidades

- **Buscador inteligente:** Busca por nombre de raza
- **Filtros por categoría:** Mexicanas, Pequeñas, Medianas, Grandes, Gigantes
- **Sistema de favoritos:** Guarda tus razas preferidas (localStorage)
- **PWA instalable:** Funciona offline, se puede instalar en móvil
- **Responsive:** Optimizado para móvil, tablet y desktop
- **Sin backend:** Todo funciona en el cliente

---

## 🛠️ Stack Técnico

- **Frontend:** HTML5, CSS3, JavaScript vanilla
- **PWA:** Service Worker, Manifest.json
- **Almacenamiento:** LocalStorage (favoritos)
- **Hosting:** Vercel
- **Sin dependencias externas**

---

## 📂 Estructura de Archivos

```
guiacanina/
├── guiacanina.html           # HTML principal
├── guiacanina-styles.css     # Estilos CSS
├── guiacanina-app.js         # Lógica de la aplicación
├── guiacanina-data.js        # Base de datos de 21 razas
├── manifest.json          # PWA manifest
├── service-worker.js      # Service Worker para PWA
├── icon-192.png          # Icono 192x192 (crear)
├── icon-512.png          # Icono 512x512 (crear)
└── README.md             # Este archivo
```

---

## 🚀 Deployment en Vercel

### Paso 1: Preparar archivos

```bash
# Estructura para Vercel
myappsmaster.com/
└── guiacanina/
    ├── index.html (renombrar guiacanina.html)
    ├── guiacanina-styles.css
    ├── guiacanina-app.js
    ├── guiacanina-data.js
    ├── manifest.json
    ├── service-worker.js
    └── icons/
```

### Paso 2: Deploy

1. Conectar repositorio GitHub a Vercel
2. Configurar ruta: `myappsmaster.com/guiacanina`
3. Deploy automático

### Paso 3: Actualizar landing de myappsmaster.com

Agregar card de GuíaCanina junto a SpeakFast.

---

## 🎨 Branding

### Colores

- **Principal:** `#2D5016` (Verde BotaniCan)
- **Secundario:** `#8B4513` (Marrón tierra)
- **Acentos:** `#FF9F40` (Naranja amigable)

### Tipografía

- **Títulos:** System font stack
- **Cuerpo:** System font stack

---

## 📊 Razas Incluidas (21 total)

### 🇲🇽 Mexicanas (3)
1. Chihuahua
2. Xoloitzcuintle
3. Raza Criolla/Mestiza

### Pequeñas (7)
4. Pug (Carlino)
5. Teckel (Dachshund)
6. Pomerania
7. Yorkshire Terrier
8. Shih Tzu
9. Maltés
10. **Schnauzer Miniatura** ⭐

### Medianas (5)
11. Bulldog Francés
12. Bulldog Inglés
13. Beagle
14. Border Collie
15. Corgi

### Grandes (5)
16. Husky Siberiano
17. Golden Retriever
18. Labrador Retriever
19. Pastor Alemán
20. Rottweiler

### Gigantes (1)
21. Boxer

---

## 📝 Información Única de GuíaCanina

### 🧴 Sección de Baño y Estética

**Información crítica que NO está en otras apps:**

1. **pH de la piel canina (6.2-7.4)** vs humana (5.5)
2. **Productos PROHIBIDOS con consecuencias detalladas:**
   - Jabón para trastes/lavaplatos (TÓXICO)
   - Shampoo humano (pH incorrecto)
   - Jabón Zote/Roma (alcalino extremo)
   - Detergente para ropa (químicos agresivos)

3. **ALERTA CRÍTICA: Rasurado en doble capa**
   - Razas afectadas: Husky, Malamute, Akita, Samoyedo, etc.
   - Explicación del sistema de termorregulación
   - Consecuencias inmediatas, mediano y largo plazo
   - Daño permanente a folículos pilosos

4. **Integración natural de BotaniCan:**
   - Recomendación específica por tipo de pelaje
   - Beneficios de ingredientes naturales
   - Comparación con productos comerciales

### 🦠 Salud Pública

**Información sobre responsabilidad del dueño:**
- Parásitos transmisibles a humanos (Toxocara, Giardia, etc.)
- Riesgos para niños
- Legislación mexicana (multas $500-2,000 MXN)
- Calendario de desparasitación
- Impacto ambiental

---

## 🎯 Estrategia de Marketing

### Funnel de Usuario

1. **Entrada:** Usuario ve publicación en Facebook BotaniCan
2. **Descubrimiento:** Llega a myappsmaster.com/guiacanina
3. **Valor:** Usa GuíaCanina (información útil real)
4. **Conversión:** Ve productos BotaniCan integrados naturalmente
5. **Bonus:** Descubre SpeakFast y otras apps de myappsmaster

### Puntos de Contacto BotaniCan

- Banner superior con link a Facebook
- Sección específica en cada ficha de raza
- Footer con colaboración destacada
- Modal "Acerca de" con info de BotaniCan

---

## 📈 Métricas de Éxito

- Instalaciones de PWA
- Razas más consultadas
- Clicks a BotaniCan Facebook
- Tiempo en app
- Favoritos guardados

---

## 🔧 Mantenimiento

### Agregar nueva raza

1. Editar `guiacanina-data.js`
2. Seguir estructura de objeto existente
3. Incluir TODA la información requerida
4. Verificar sintaxis con `node -c guiacanina-data.js`
5. Deploy

### Actualizar información de BotaniCan

1. Editar links en `guiacanina-data.js` (campo `botanican.link`)
2. Actualizar banner en `guiacanina.html`
3. Deploy

---

## ⚠️ Disclaimer Legal

```
⚠️ IMPORTANTE: Esta aplicación es informativa y educativa. 
La información proporcionada NO sustituye el consejo veterinario profesional. 
Siempre consulta con un veterinario certificado para el cuidado de tu mascota.
```

---

## 👥 Créditos

- **Desarrollo:** Alberto F. / MyAppsMaster
- **Colaboración:** BotaniCan Shampoo
- **Información veterinaria:** Basada en fuentes veterinarias confiables

---

## 📞 Contacto

- **Web:** https://myappsmaster.com
- **BotaniCan:** https://www.facebook.com/BotaniCanShampoo

---

## 📜 Licencia

© 2026 MyAppsMaster. Todos los derechos reservados.

Desarrollado en colaboración con BotaniCan Shampoo.

---

## 🚀 Roadmap Futuro

### Fase 2 (Opcional)
- Agregar más razas (hasta 60)
- Calculadora de peso ideal
- Calendario de vacunación
- Integración con tienda BotaniCan

### Fase 3 (Opcional)
- Versión en inglés
- Sistema de recordatorios
- Foro de comunidad

---

**Hecho con ❤️ para los amantes de los perros**

🐕 GuíaCanina - El cuidado perfecto para tu mejor amigo
