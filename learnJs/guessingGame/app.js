let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1

console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess: \n(Enter Q and select ok to quit)");
    } else {
        guess = prompt("Too low! Enter a new guess:  \n(Enter Q and select ok to quit)");
    }
}
if (guess === 'q') {
    console.log("Ok, You Quit")
} else {
    console.log(`You got it! It took you ${attempts} tries`)
}
