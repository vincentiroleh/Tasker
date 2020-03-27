const assets = [
    '/',
    '/index.html',
    '/assets/js/app.js',
    '/manifest.json',
    '/assets/img/taskerLogo.png',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
    'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://code.jquery.com/jquery-3.4.1.js',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'

];

// install event
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('tracker').then(function(cache) {
            return cache.addAll(assets);
        })
    );
});

// fetch event

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});