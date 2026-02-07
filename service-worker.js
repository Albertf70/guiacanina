/**
 * GUÍACANINA - SERVICE WORKER
 * Caching para funcionalidad offline
 */

const CACHE_NAME = 'guiacanina-v1';
const urlsToCache = [
  '/guiacanina/',
  '/guiacanina/index.html',
  '/guiacanina/guiacanina-styles.css',
  '/guiacanina/guiacanina-app.js',
  '/guiacanina/guiacanina-data.js',
  '/guiacanina/manifest.json'
];

// Instalación - Cachear recursos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Caching recursos de GuíaCanina');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('❌ Error al cachear:', err);
      })
  );
  self.skipWaiting();
});

// Activación - Limpiar caches antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch - Estrategia: Cache First, luego Network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - retornar respuesta del cache
        if (response) {
          return response;
        }
        
        // No está en cache - fetchear de la red
        return fetch(event.request).then(response => {
          // Verificar que recibimos una respuesta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clonar la respuesta
          const responseToCache = response.clone();
          
          // Agregar al cache
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
      .catch(() => {
        // Si falla todo, mostrar página offline básica
        return new Response(
          '<h1>Sin conexión</h1><p>GuíaCanina requiere conexión a internet para funcionar.</p>',
          {
            headers: { 'Content-Type': 'text/html' }
          }
        );
      })
  );
});
