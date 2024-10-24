'use strict'

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };
  
// Task1
// const players1 = game.players[0];
// const players2 = game.players[1];
const [players1, players2] = game.players;

console.log(players1);
console.log(players2);

// Task2
// const BayernGK = player1[0];
// const fieldPlayers = player1.slice(1);

const [BayernGK, ...fieldPlayers] = players1

console.log(BayernGK);
console.log(fieldPlayers);

// Task3

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Task4

const players1Final = ['Thiago', 'Coutihno', 'Perisic', ...players1];
console.log(players1Final);

// Task5

const {odds:{team1, x:draw, team2}} = game;
console.log(team1);
console.log(draw);
console.log(team2);

// Task6

const printGoals = function(...players){
    console.log(players);
    console.log(`${players.length} goals were scored`)
};

printGoals('Davies', 'Müller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Müller');
printGoals(...game.scored);

// Task 7

team1 < team2 && console.log('team1 is ,more likely to win');
