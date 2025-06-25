const products = [
  { id: 1, 
    name: "T-Shirt", 
    price: 500 
  },
  { id: 2, 
    name: "Shoes", 
    price: 2000 
  }
];

let cart = [];
function addToCart(product, callback) {
  setTimeout(() => {
    cart.push(product);
    callback(product.name + " added to cart");
  }, 1000);
}
function checkout(callback) {
  setTimeout(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    callback(total);
  }, 1000);
}
function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment of " + amount + " successful");
    }, 1000);
  });
}
function shipOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order has been shipped");
    }, 1000);
  });
}
function deliverOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order has been delivered");
    }, 1000);
  });
}

addToCart(products[0], function (a) {
  console.log(a);

  addToCart(products[1], function (b) {
    console.log(b);

    checkout(function (totalAmount) {
      console.log("Total amount: " + totalAmount);

      processPayment(totalAmount)
        .then((payment) => {
          console.log(payment);
          return shipOrder();
        })
        .then((ship) => {
          console.log(ship);
          return deliverOrder();
        })
        .then((delivery) => {
          console.log(delivery);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    });
  });
});
