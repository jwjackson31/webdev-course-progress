const btn = document.querySelector('#v2')

btn.onclick = function () {
    console.log("you clicked me!")
    console.log("Did it work?")
}

function scream() {
    console.log("AAAAAHHHHH")
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

//addEventListener

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function () {
    alert("Clicked!")
})

function twist() {
    console.log("TWIST")
}

function shout() {
    console.log("SHOUT")
}

const tasButton = document.querySelector('#tas')
//this will not work
// tasButton.onclick = twist;
// tasButton.onclick = shout;

//More flexability when using eventListener
tasButton.addEventListener('click', twist,);
tasButton.addEventListener('click', shout);