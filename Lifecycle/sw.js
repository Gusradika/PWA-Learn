console.log("Service worker is loading...");

// SERVICE WORKER

self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  let installPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // Call resolve to complete the promise
    }, 300);
  });
  event.waitUntil(installPromise);
  //   skipWaiting() for other installations to complete
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker Active.");
});
