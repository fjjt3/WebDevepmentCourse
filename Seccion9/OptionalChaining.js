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

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri);

// console.log(restaurant.openingHours.mon.open);

// With optiona chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// Example with  a loop asking if opens
const days = ['mon', 'tue', 'we', 'thu','fri', 'sat', 'sun'];

for ( const day of days ){
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

// Methods, call a method if exists
console.log(restaurant.order?.(0, 1) ?? 'Method not exists');


