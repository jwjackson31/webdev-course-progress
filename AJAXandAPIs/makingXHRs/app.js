// NOT IMPORTANT TO REMEMBER THIS CODE

const req = new XMLHttpRequest();

req.onload = function () {
    console.log("IT LOADED!!")
    const info = JSON.parse(this.responseText)
    console.log(info)
}

req.onerror = function () {
    console.log("ERROR!!!");
    console.log(this);
};

req.open("GET", "https://swapi.tech/api/people/1/")
req.send();