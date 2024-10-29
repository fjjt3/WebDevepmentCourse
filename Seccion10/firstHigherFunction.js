'use strict'

const oneWorld = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

// upperFirstWord and oneWorld are callback function
transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWorld);

//----------------

const greet = function (greeting) {
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}



const greeterHallo = greet('Hallo');
greeterHallo('Jonas');
greeterHallo('Steven');

greet ('Hallo')('Luke');

// Arrow function greet
const greetArr = greeting => name =>  console.log(`${greeting} ${name}`);

greetArr ('Hallo')('World');

// Call and apply methods

const lufthansa =  {
    airline:'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.booking.push({flight:`${this.iataCode} ${flightNum}`, name});
    },
};

// lufthansa.book(239, 'Jonas Schmidt');
// console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode:'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

// the bind Method
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Willians');


