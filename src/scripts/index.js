async function renderizaPokemons(array) {
    const ulTag = document.querySelector('ul');
    ulTag.innerHTML = '';

    array.forEach(pokemon => {
        const cardPokemon = createCardPokemon(pokemon)
        ulTag.append(cardPokemon);
    })
}

function createCardPokemon({ url, name }) {

    const li = document.createElement('li');
    const img = document.createElement('img');
    const pokeName = document.createElement('h3');

    const numeroNaPokedex = url.slice(-3, -1);
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