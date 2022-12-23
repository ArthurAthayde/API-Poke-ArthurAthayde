async function consomePokeAPI() {
    const loading = document.querySelector('#loading')
    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })
        .then(response => {
            renderizaPokemons(response.results)
            return response;
        })
        .catch(error => console.log(error))

    loading.classList.add('hidden')

    return pokemonsDaAPI
}
async function consomePokeAPIByName(name) {
    const pokemonsDaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })
        .then(response => {
            searchPokemon(response.species)
            return response;
        })

    return pokemonsDaAPI
}

function renderSearch() {
    const searchInput = document.querySelector('input');
    const searchBtn = document.querySelector('#searchBtn');

    searchBtn.addEventListener('click', async () => {
        const pokeName = searchInput.value.toLocaleLowerCase();
        await consomePokeAPIByName(pokeName);
    })
}
consomePokeAPI()
renderSearch()