async function renderizaPokemons() {
    const ulTag = document.querySelector('ul');
    ulTag.innerHTML = '';

    const listaDePokemons = await consomePokeAPI()

    listaDePokemons.results.forEach(pokemon => {
        const cardPokemon = createCardPokemon(pokemon)
        ulTag.appendChild(cardPokemon);
    })
}


async function getPokeByName(pokeName) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })
        .then(response => {
            renderizaPokemons(pokeName);
            console.log(response);
            return response.species;
        })

    return pokemon;
}

function createCardPokemon({ name, url }) {
    const numeroNaPokedex = url.slice(34, -1);

    const ulTag = document.querySelector('ul');
    const li = document.createElement('li');
    const img = document.createElement('img');
    const pokeName = document.createElement('h3');

    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png`;
    pokeName.innerText = name;

    li.append(img, pokeName);
    return li;
}

function searchPokemon(pokeAtual) {
    const ulTag = document.querySelector('ul');
    ulTag.innerHTML = '';

    const pokemon = createCardPokemon(pokeAtual);
    ulTag.appendChild(pokemon);

}

async function consomePokeAPIByName(name) {
    const loading = document.querySelector('#loading')
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
        if (searchInput.value == "") {
            alert("Não temos um Pokemon sem nome registrado na nossa pokedex =(");
        } else {
            const pokeInput = await getPokeByName(pokeName);
        }

    })
}

getPokeByName('clefairy')
renderSearch()
consomePokeAPI()
renderizaPokemons()
// renderPokemon()