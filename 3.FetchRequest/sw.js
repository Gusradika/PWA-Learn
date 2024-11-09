// console.log("Service worker is loading...");

// SERVICE WORKER

self.addEventListener("fetch", (event) => {
  // console.log("fetch event: " + event.request.url);

  // Hanya mengambil request yang memiliki ekstensi.css
  if (event.request.url.endsWith("style.css")) {
    console.log("Fetching CSS: " + event.request.url);
    event.respondWith(fetch("./style2.css")); // replace with your own CSS file
  }

  // Jika url berisi "/greet", maka kembalikan Response "Hello World!"
  // dan Header di definisikan sebagai "Content-Type: text/html; charset=UTF-8"
  if (event.request.url.endsWith("/greet")) {
    let headers = new Headers({ "Content-Type": "text/html; charset=UTF-8" });
    let customRes = new Response("<h1>Hello World!</h1>", { headers: headers });

    event.respondWith(customRes);
  }
  // Bisa saja menggunakan startWith()

  // FETCHING AND RESPONDING WITH OTHER RESOURCES
  // INI SEPERTI GET DATA jikka kita memiliki request dengan nama /camera_feed.html yang di inisiasi oleh main.js
  // TIME OUT UNTUK SIMULASI KETERLAMBATAN
  //  RETURN STATUS 304 : NOT MODIFIED
  setTimeout(() => {
    if (event.request.url.endsWith("/camera_feed.html")) {
      event.respondWith(
        fetch(event.request).then((res) => {
          if (res.ok) {
            return res;
          } else {
            return new Response("Request failed. Please try again.");
          }
        })
      );
    }
  }, 1200);
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker Active.");
});

// ALUR PENJELASAN
// 1. main.js akan fetch camera_feed.html
// 2. fetch event akan dipasangkan di sw.js
// 3. Jika request memiliki ekstensi .css, maka fetch event akan mengambil file style2.css
// 4. Jika request memiliki url "/greet", maka fetch event akan mengembalikan Response "Hello World!"
// 5. Jika request memiliki url "/camera_feed.html", maka fetch event akan mengambil data camera_feed.html
// 6. Fetch event akan menunggu 1200ms (2 detik)
// 7. Jika data camera_feed.html sudah didapat, maka fetch event akan mengembalikan response
// 8. Jika request gagal (status != 200), maka fetch event akan mengembalikan Response "Request failed. Please try again." : 404

// dan berkorelasi dengan main.js yang dimana replace element id "camera" dengan hasil fetch response
