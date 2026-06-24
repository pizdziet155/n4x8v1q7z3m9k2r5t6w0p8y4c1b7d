const CACHE_NAME = "pidorv6";

const FILES_TO_CACHE = [
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
  "./zastzrzez.html",
  "./services.html",

  "./assets/bar.css",
  "./assets/card.css",
  "./assets/main.css",
  "./assets/home.css",
  "./assets/documents.css",
  "./assets/index.css",
  "./assets/id.css",
  "./assets/more.css",
  "./assets/qr.css",
  "./assets/services.css",

  "./assets/bar.js",
  "./assets/id.js",
  "./assets/card.js",
  "./assets/index.js",
  "./assets/manifest.js",
  "./assets/qr.js",

  "./images/1GUMnTn.png",
  "./images/2aN0vJE.png",
  "./images/2eKl73o.png",
  "./images/3Ft4ULN.png",
  "./images/3oibZUL.png",
  "./images/4iFdAaV.png",
  "./images/7S4kQGf.png",
  "./images/8Svo1kX.png",
  "./images/alertpowodziowy.png",
  "./images/BDZT6fX.png",
  "./images/bezpieczniewsieci.png",
  "./images/bonenergetyczny.png",
  "./images/COI.png",
  "./images/czlowiek.png",
  "./images/dezaktywuj.png",
  "./images/ECjKGrW.png",
  "./images/ECjKGrW2.png",
  "./images/EhU4eaX.png",
  "./images/gTMa9Dw.png",
  "./images/gwiazdka.png",
  "./images/gzot1Pt.gif",
  "./images/historiaaktywnosci.png",
  "./images/historiapojazdu.png",
  "./images/ikona.png",
  "./images/informacjeprawne.png",
  "./images/jezykaplikacji.png",
  "./images/kosz.png",
  "./images/KUMNgQC.png",
  "./images/legitkabg.jpg",
  "./images/logowanie.png",
  "./images/logowaniebiometryczne.png",
  "./images/mandaty1.png",
  "./images/mandaty.png",
  "./images/mandaty2.png",
  "./images/mc.svg",
  "./images/otM5jOA.png",
  "./images/Pfan6Qa.png",
  "./images/pobrane.png",
  "./images/pomoctechniczna.png",
  "./images/pomoctechniczna2.png",
  "./images/pomysl.png",
  "./images/punktykarne.png",
  "./images/QkoPqgC.png",
  "./images/R5yccCK.gif",
  "./images/recepty.png",
  "./images/rPgX94T.png",
  "./images/S0u0qjQ.png",
  "./images/SKRJAO0.png",
  "./images/sltb5a0.png",
  "./images/st.png",
  "./images/strzalka2.png",
  "./images/szukajikona.png",
  "./images/tarcza.png",
  "./images/telefon.png",
  "./images/txt.txt",
  "./images/U2xCSkJ.png",
  "./images/uTM7cGR.png",
  "./images/v1iHjwX.png",
  "./images/wC2vTmn.png",
  "./images/wybory.png",
  "./images/wybory2.png",
  "./images/wydanecertyfikaty.png",
  "./images/XqGG0UA.png",
  "./images/YJpEaiC.png",
  "./images/YLFqBLa.png",
  "./images/zas.png",
  "./images/zastrzezpesel1.png",
  "./images/zastrzezpesel.png",
  "./images/zgc6646.png",
  "./images/zmienhaslo.png",
  "./images/ZolRRqg.png"
];

self.addEventListener("install", event => {
  console.log("SW START");

  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      for (const file of FILES_TO_CACHE) {
        try {
          await cache.add(file);
          console.log("OK:", file);
        } catch (e) {
          console.error("BŁĄD:", file, e);
        }
      }
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
