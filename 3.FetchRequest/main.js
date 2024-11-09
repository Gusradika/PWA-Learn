// Progressive Enhancement (Service Worker Supported)

// Conventional
// if('ServiceWorker' in navigator) {

// }

// Shorthand
if (navigator.serviceWorker) {
  // Register the SW
  navigator.serviceWorker.register("./sw.js").then(function (registration) {
    console.log(
      "Service Worker registered successfully with scope: ",
      registration
    );
  });
}

// Get Camera Feed
fetch("camera_feed.html")
  .then((res) => {
    return res.text();
  })
  .then((html) => {
    document.getElementById("camera").innerHTML = html;
  });
