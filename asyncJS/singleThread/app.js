console.log("Sending request to server");
setTimeout(() => {
    console.log("Here is your data from the server")

}, 3000)
console.log("I AM AT THE END OF THE FILE!")

// Result in console -->
// Sending request to Server
// I AM AT THE END OF THE FILE
// Here is your data from the server

console.log("I print first");
setTimeout(() => {
    console.log("I print after 3 seconds")

}, 3000)
console.log("I print second")