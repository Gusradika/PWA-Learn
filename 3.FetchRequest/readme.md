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
