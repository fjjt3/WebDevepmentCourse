'use strict'

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmidt',
    passport: 12345678
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 12345678){
        alert('Checked in')
    } else{
        alert ('Wrong passport')
    }

}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);