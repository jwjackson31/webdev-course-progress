// document.querySelector('p').innerText = "Something ELse"

const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = "I AM A LINK!!!"
// }docu

for (let link of allLinks) {
    link.style.color = 'rgb(0,108,134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

const h2 = document.querySelector('h2')


const firstBold = document.querySelector('b')

const paragraph = firstBold.parentElement

const squareImg = document.querySelector('.square');

squareImg.previousElementSibling
squareImg.nextElementSibling


const newImg = document.createElement('img')

newImg.src = "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww"
document.body.appendChild(newImg)

newImg.classList.add('square');

const newH3 = document.createElement('h3')

newH3.innerText = 'I am new!';

document.body.appendChild(newH3);

const p = document.querySelector('p')

p.append('i am new text')
const newB = document.createElement('b');

newB.append('Hi!');

p.prepend(newB);


const newH2 = document.createElement('h2');

newH2.append("Are adorable chickens")

const h1 = document.querySelector('h1');

h1.insertAdjacentElement('afterend', newH2);

const h3 = document.createElement('h3')
h3.innerText = 'I am h3';
h1.after(h3);

const firstLi = document.querySelector('li');

const ul = firstLi.parentElement

ul.removeChild(firstLi)


const img = document.querySelector('img');
img.remove()