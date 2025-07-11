//Default Parameters
// inside parenthases make the
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}


function greet(person, msg = "Hey There") {
    console.log(`${msg}, ${person}!`)
}


//--Spread--

const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 545234];

// --Spread with Array Literals--

const cats = ['Blue', 'Scout', 'Rocket'];

const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]

// --Spread with Objects--

const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    isFurry: true,
    family: 'Caninae'
};

const catDog = { ...feline, ...canine }

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
};

const newUser = { ...dataFromForm, id: 2354, isAdmin: false }

// --Rest Parameters--

// function sum() {
//     return arguments.reduce((total, el) => total + el)
//   THIS DOESN'T WORK}

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el);
// }

// --Destructuring Arrays--

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`gold medal goes to ${gold}`)
    console.log(`silver medal goes to ${silver}`)
    console.log(`Everyone else: ${everyoneElse}`)
}

const scores = [64356, 324345, 23453, 3434, 2334]

const highScore = scores[0]
const secondHighScore = scores[1]

const [gold, silver, bronze] = scores;

// --Destructuring Objects--

const user = {
    email: "harvey@gmail.com",
    password: "SDioci38989",
    firstName: "Harvey",
    lastName: "Milk",
    born: 1930,
    died: 1978,
    bio: "blah blah blah blah",
    city: "San Francisco",
    state: "California"
};

const user2 = {
    email: "jamesjam@gmail.com",
    password: "2342342kjdfkj",
    firstName: "James",
    lastName: "Jam",
    born: 1987,

    city: "Tulsa",
    state: "Oklahoma"
};


// const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear, died: deathYear } = user;

// adding a default for missing params
const { city, state, died = 'N/A' } = user2

// --Destructuring Params--

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]


// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score }) => score >= 90)

movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})