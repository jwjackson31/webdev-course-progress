const form = document.querySelector('#shelterForm')
const input = document.querySelector('#animalName')
const list = document.querySelector('#animals')
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log(input.value);
    const animalName = input.value;
    const newLi = document.createElement("LI");

    newLi.innerText = animalName
    // console.log(newLi)
    list.append(newLi)

    input.value = "";
})