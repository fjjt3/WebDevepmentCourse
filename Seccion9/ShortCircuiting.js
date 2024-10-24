'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizerria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruchetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu:['Pizza', 'Pasta', 'Risotto'],
    openingHours:{
        thu: {
            open: 12,
            close: 22,
        },
        fri:{
            open: 11,
            close: 23,
        },
        sat:{
            open: 0,
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex= 0, time ='20:00', address,}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
            will be deliver to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};





// Use ANY data type, return Any data type, short-circuiting

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

restaurant.numguest = 23;
const guest1 = restaurant.numguest ? restaurant.numguest : 10;
console.log(guest1);

// AND -  returns the first false value
console.log(null && 'Jonas');

// Practical example
if (restaurant.orderPizza){
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

