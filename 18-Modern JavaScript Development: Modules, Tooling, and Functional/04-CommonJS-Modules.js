// CommonJS Modules

// So again, require is of course not defined, here in our browser environment, but it is defined in Node.js, because this is part of the CommonJS specification. And that's actually all I had to show you,

// Export
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addTocart } = require('./shoppingCart.js');
