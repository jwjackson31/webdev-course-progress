// axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(res => {
//         console.log("RESPONSE", res)
//     })
//     .catch((e) => {
//         console.log("ERROR", e);
//     });


const getPokemon = async (pokemonName) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        console.log(res.data);
    } catch (e) {
        console.log("ERROR", e);
    }


}

getPokemon("mewtwo");