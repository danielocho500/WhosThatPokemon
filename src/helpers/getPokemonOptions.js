const { default: pokemonApi } = require("@/api/pokemonApi");

const getPokemons = async () =>{
    const idPokemons = getPokemonsToShow();
    const promises = idPokemons.map(id => pokemonApi.get(`/pokemon/${id}`));
    let pokemons = [];
    
    await Promise.all(promises).then((responses) => {
        pokemons = responses.map(({data}) => {
            return {
                name: data.name,
                id: data.id,
            }
        })
    })

    return pokemons
}

const getPokemonsToShow = () => {
    const pokemonOptions = [];
    for (let i = 0; i < 4; i++) {
        const randomValue = Math.floor(Math.random() * 651) + 1;
        pokemonOptions.push(randomValue);
    }
    return pokemonOptions;
}

module.exports = getPokemons;
