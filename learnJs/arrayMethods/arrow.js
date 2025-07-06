// const add = function(x,y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y
// }

// const square = (x) => {
//     return x * x
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

//Implicit return using parentheses

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1

)

// Implicit return on one line

const add = (a, b) => a + b

//Only use implicit return when their a single expression


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score} / 10`
// })

// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score} / 10`
// ))

