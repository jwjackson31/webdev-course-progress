// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(res => {
//         console.log("RESOLVED", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//         return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     })
//     .then(res => {
//         console.log("SECOND REQUEST RESOLVED")
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR", e);
//     });


const loadPokemon = async () => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        const data = await res.json()
        console.log(data);
        const res2 = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        const data2 = await res2.json()
        console.log(data2);
    } catch (e) {
        console.log("ERROR!!!, e");
    }
}

loadPokemon();
