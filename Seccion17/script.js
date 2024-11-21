// Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// import all from a module
import * as ShoppingCart from './shoppingCart.js'

// console.log('Importing module');

// addToCart('bread', 5);
// console.log(price, tq);
ShoppingCart.addToCart('bread', 5);

console.log(ShoppingCart.totalPrice);

///////////////////////////////////////
// Top-Level Await (ES2022)

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
  
    return { title: data.at(-1).title, text: data.at(-1).body };
  };
  
  const lastPost = getLastPost();
  console.log(lastPost);
  
  // Not very clean
  // lastPost.then(last => console.log(last));
  
  const lastPost2 = await getLastPost();
  console.log(lastPost2);

  // The Module Pattern

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

// The Module Pattern

const ShoppingCart3 = (function () {
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
  
  ShoppingCart3.addToCart('apple', 4);
  ShoppingCart3.addToCart('pizza', 2);
  console.log(ShoppingCart2);
  console.log(ShoppingCart2.shippingCost);

// CommonJS Modules
// Export
/*export.addTocart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };
  
  // Import
  const { addTocart } = require('./shoppingCart.js');
  */