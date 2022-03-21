const staticLCorpSoftwareDev = "lcorp-site-v1"
const assets = [
    "/",
    "/index.html",
    "/css/aos.css",
    "/css/base.css",
    "/css/bulma.css",
    "/css/bulma.css.map",
    "/css/fontawesome541-all.css",
    "/js/aos.js",
    "/js/base.js",
    "/js/fontawesome541-all.js",
    "/assets/img/logo.jpg",
    "/assets/img/pic001.jpeg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticLCorpSoftwareDev).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})