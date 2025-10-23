const CACHE_NAME = "mi-pwa-cache-v1";

const ARCHIVOS_A_CACHEAR = [
    "/",
    "/index.html",
]
self.addEventListener("install", event =>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then( cache=>{
            console.log("Cacheando archivos");
            return cache.addAll(ARCHIVOS_A_CACHEAR)
        })
    )
})

self.addEventListener("fetch", event=>(
    event.respondWith(
        caches.match(event.request)
        .then(response=>{
            if(response){
                console.log("respuesta caheada: ", event.request.url)
                return response
            }
            console.log("recuperado de la red: ", event.request.url);
            return fetch(event.request)
        })
    )
))