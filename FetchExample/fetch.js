// JS Fetch

// Using FETCH instead of XMLHttpRequest for better performance and security
fetch("https://api.github.com/users/google/repos")
  .then((response) => {
    //   console.log(response.json()); // ini akan return Promise bawaan dari FETCH

    if (response.ok) {
      // Jika status response adalah 200 (OK)
      response.json().then((data) => {
        // console.log(data); // ini akan mengembalikan data JSON
      });
    } else {
    }
  })
  .catch((error) => {
    console.log("Fetch Error");
    console.log(error);
  });

// Fetching Response dengan Text
// dari local file
// Jika error maka pastikan dia sudah di run di server (memiliki port)
fetch("./template.html")
  .then((response) => {
    //   console.log(response.json()); // ini akan return Promise bawaan dari FETCH

    if (response.ok) {
      // Jika status response adalah 200 (OK)
      response.text().then((html) => {
        console.log(html); // ini akan mengembalikan data JSON
      });
    } else {
    }
  })
  .catch((error) => {
    console.log("Fetch Error");
    console.log(error);
  });
