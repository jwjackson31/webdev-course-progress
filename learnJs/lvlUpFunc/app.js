
//-- Block Scope
// let radius = 8

// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = "HIII!";

// }

// console.log(radius)

// console.log(PI)


//Lexical Scope

// function bankRobbery() {
//     const heroes = ['spiderman', 'wolverine', 'Black Panther', 'Wonder Woman']
//     function cryForHelp() {
//         for (let hero of heroes) {
//             console.log(`PLEASE HELP US ${hero.toUpperCase()}`)
//         }
//     }
//     cryForHelp
// }

// function add(x, y) {
//     return x + y;
// }


// const add = function (x, y) {
//     return x + y;
// }


// Higer order functions---

// let greet = function () {
//     console.log("HI");
// }

// function callTwice(func) {
//     func();
//     func();
// }



// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// callTwice(rollDie);

// Returning Functions---

// function makemysteryfunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("Congrats, I am a good Function")

//         }
//     } else {
//         return function () {
//             alert("You have been infected by a computer virus")
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//         }
//     }
// }

// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max
//     }
// }

// function isBetween(num) {
//     return num >= 50 && num <= 100
// }


// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num
//     },
//     cube(num) {
//         return num * num * num
//     }

// }


// const cat = {
//     name: 'Blue Steele',
//     color: 'gray',
//     breed: 'scottish fold',
//     meow() {
//         console.log(`${this.name} says MEOWWWW`)

//     }
// }


// const meow2 = cat.meow;


// try {
//     hello.toUpperCase()

// } catch {
//     console.log('ERROR')
// }