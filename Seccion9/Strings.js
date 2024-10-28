"use strict";

const airplane = 'TAP Air Portugal';

console.log(airplane.toLowerCase());
console.log(airplane.toLocaleUpperCase());

// Fix capitalization in name

const passenger = 'jOnAs'; // Jonas
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect = passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing  email

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(trimmedEmail);
console.log(email===normalizedEmail);

// replacing
const priceGB = '288,97L';
const priceUS =  priceGB.replace('L', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers to door 23';
console.log(announcement.replace('door', 'gate'));


// Split and join
console.log('a+very+noce+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.' , firstName, lastName.toUpperCase()].join(' ');
console.log(newName);



/* const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airplane.length);
console.log('B737'.length);

// Method
console.log(airplane.indexOf(`r`));
console.log(airplane.lastIndexOf(`r`));

console.log(airplane.slice(4));
console.log(airplane.slice(4, 7));

// console.log(airplane.slice(0, airline.indexOf(' ')));

const checkMiddleSeat = function(seat){
    // B and E are middel seats
    const mySeat = seat.slice(-1);
    if (mySeat === 'B' || mySeat === 'E')
        console.log('You got a middle seat');
    else console.log('You are lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C'); */
