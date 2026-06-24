const CACHE_NAME = "pidorv72";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./home.html",
  "./card.html",
  "./dane.html",
  "./documents.html",
  "./id.html",
  "./more.html",
  "./pozostale.html",
  "./qr.html",
  "./qr2.html",
  "./services.html",
  "./zastzrzez.html",

  "./assets/bar.css",
  "./assets/bar.js",
  "./assets/card.css",
  "./assets/card.js",
  "./assets/documents.css",
  "./assets/home.css",
  "./assets/id.css",
  "./assets/id.js",
  "./assets/index.css",
  "./assets/index.js",
  "./assets/main.css",
  "./assets/manifest.js",
  "./assets/more.css",
  "./assets/qr.css",
  "./assets/qr.js",
  "./assets/services.css",
  "./assets/txt.txt",

  "./images/0OfDslu.png",
  "./images/0OfDslu45.png",
  "./images/1GUMnTn.png",
  "./images/2aN0vJE.png",
  "./images/2eKl73o.png",
  "./images/3Ft4ULN.png",
  "./images/3oibZUL.png",
  "./images/4iFdAaV.png",
  "./images/7S4kQGf.png",
  "./images/8Svo1kX.png",
  "./images/BDZT6fX.png",
  "./images/COI.png",
  "./images/ECjKGrW.png",
  "./images/ECjKGrW2.png",
  "./images/EhU4eaX.png",
  "./images/KUMNgQC.png",
  "./images/P6F91tI.png",
  "./images/Pfan6Qa.png",
  "./images/QkoPqgC.png",
  "./images/R5yccCK.gif",
  "./images/S0u0qjQ.png",
  "./images/SKRJAO0.png",
  "./images/U2xCSkJ.png",
  "./images/XSZFxrl.png",
  "./images/XqGG0UA.png",
  "./images/YJpEaiC.png",
  "./images/YLFqBLa.png",
  "./images/ZolRRqg.png",
  "./images/alertpowodziowy.png",
  "./images/bezpieczniewsieci.png",
  "./images/bonenergetyczny.png",
  "./images/bonenergetyczny1png",
  "./images/czlowiek.png",
  "./images/dezaktywuj.png",
  "./images/gTMa9Dw.png",
  "./images/gwiazdka.png",
  "./images/gzot1Pt.gif",
  "./images/historiaaktywnosci.png",
  "./images/historiapojazdu.png",
  "./images/ikona.png",
  "./images/informacjeprawne.png",
  "./images/jezykaplikacji.png",
  "./images/kosz.png",
  "./images/legitkabg.jpg",
  "./images/logowanie.png",
  "./images/logowaniebiometryczne.png",
  "./images/mandaty.png",
  "./images/mandaty1.png",
  "./images/mandaty2.png",
  "./images/mc.svg",
  "./images/otM5jOA.png",
  "./images/pobrane.png",
  "./images/pomoctechniczna.png",
  "./images/pomoctechniczna2.png",
  "./images/pomysl.png",
  "./images/punktykarne.png",
  "./images/rPgX94T.png",
  "./images/recepty.png",
  "./images/sltb5a0.png",
  "./images/st.png",
  "./images/strzalka2.png",
  "./images/szukajikona.png",
  "./images/tarcza.png",
  "./images/telefon.png",
  "./images/txt.txt",
  "./images/uTM7cGR.png",
  "./images/v1iHjwX.png",
  "./images/wC2vTmn.png",
  "./images/wybory.png",
  "./images/wybory2.png",
  "./images/wydanecertyfikaty.png",
  "./images/zas.png",
  "./images/zastrzezpesel.png",
  "./images/zastrzezpesel1.png",
  "./images/zgc6646.png",
  "./images/zmienhaslo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      for (const file of FILES_TO_CACHE) {
        try {
          await cache.add(file);
        } catch (e) {
          console.error("Nie udało się zapisać:", file, e);
        }
      }
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        return cached;
      }

      return fetch(event.request)
        .then(response => {
          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, copy);
          });

          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        });
    })
  );
});
  );
});
