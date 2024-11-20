// Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// import all from a module
import * as ShoppingCart from './shoppingCart.js'

// console.log('Importing module');

// addToCart('bread', 5);
// console.log(price, tq);
ShoppingCart.addToCart('bread', 5);

console.log(ShoppingCart.totalPrice);