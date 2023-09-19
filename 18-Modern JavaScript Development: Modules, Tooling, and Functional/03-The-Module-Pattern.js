// The Module Pattern

// how do we, for example, have access to the cart variable here and even are able to manipulate it, so we see that it at changed, indeed. So how are we able to do that, even if this IIFE here, so this function has already returned long ago, right? So this function, of course, was only executed once in the beginning, and then all it did was to return this object and assigned it to this variable, right? But then we are able to use all of this and to also manipulate the data that is inside of this function, which is the function that returned this object. And the answer to how all of this works like this is one more time, closures. So closures, remember, allow a function to have access to all the variables that were present at its birthplace, basically. So that was a nice analogy that I used back then

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);

// ->
// demo.js:11 4 apple added to cart (sipping cost is 10)
// demo.js:11 2 pizza added to cart (sipping cost is 10)
// demo.js:30 Object
// demo.js:31 undefined
