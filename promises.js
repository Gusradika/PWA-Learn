// JS Promises

// Promise can be used to handle asynchronous operations
// State dari promise: pending, fulfilled, rejected
// function addExtra(price) {
//   return new Promise((resolve, reject) => {
//     console.log(price);

//     // Check if price is valid
//     if (price > 3) {
//       reject("Price cannot exceed 3");
//     } else {
//       // Simulate async operation (like an API call or setTimeout)
//       setTimeout(() => {
//         resolve(price + 1);
//       }, 300);
//     }
//   });
// }

// addExtra(1)
//   .then((newPrice) => {
//     console.log(newPrice); // This will log the new price after resolving
//   })
//   .catch((error) => {
//     console.log(error); // This will log the error if the promise is rejected
//   });

// OTHER METHOD

// FAST PRICE

var price = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(99.99);
  }, 300);
});

price.then(() => {
  //   console.log(price);
});

// SLOW PRICE
var slowPrice = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(199.99);
  }, 1800);
});

var rejectPromiseExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Could not retrieve price");
  }, 1800);
});

function greet() {
  return "Hello World!";
}

// var promises = [price, slowPrice, 200, greet()];
var promises = [price, slowPrice, 200, greet(), rejectPromiseExample];

// Promise.all(promises)
//   .then((resolvedPromises) => {
//     console.log(resolvedPromises); // This will log the new price after resolving
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// #####################
// #####################
// #####################
// #####################
//   RACE METHOD EXAMPLE
//   ALWAYS RETURN FIRST PROMISE, EITHER REJECTED OR RESOLVED
// #####################
// #####################
// #####################
// #####################
var price2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Price A REJECTED");
  }, 100);
});

var slowPrice2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Price B");
  }, 200);
});

var promises2 = [price2, slowPrice2];

Promise.race(promises2)
  .then((winner) => {
    console.log(winner);
  })
  .catch((error) => {
    console.log(error);
  });
