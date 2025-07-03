function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("MI")

}

singSong()

// Arguments Intro 

function greet(firstName) {
    console.log(`Hey there, ${firstName}!`)
}

//--RANT EXERCISE--
// Define a function called rant which accepts a string argument called message.  The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).  For example, rant("I hate beets") should print out:

// I HATE BEETS
// I HATE BEETS
// I HATE BEETS

//--Multiple Arguments--

function greetFull(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

greetFull("George", "Clooney")


function repeat(str, numTimes) {
    let result = ''

    for (let i = 0; i < numTimes; i++) {
        result += str;
    }

    console.log(result)
}

// --Multiple Args Exercise--
// In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

// isSnakeEyes(1,1) //Snake Eyes!
// isSnakeEyes(1,5) //Not Snake Eyes!
// isSnakeEyes(4,5) //Not Snake Eyes!
// Hint: Normally a function will return a value, but for the sake of having this work with the Udemy interpreter we will be using console.log() instead of return, to print the output.


function isSnakeEyes(num1, num2) {

    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!")
    } else {
        console.log("Not Snake Eyes!")
    }
}

isSnakeEyes(1, 1)
isSnakeEyes(4, 2)
isSnakeEyes(1, 2)

//The Return Keyword

function add(num1, num2) {

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return false;
    }
    const sum = num1 + num2
    return sum
}