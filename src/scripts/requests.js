async function consomePokeAPI() {
    const loading = document.querySelector('#loading')
    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response =>{
           return response.json()
        })
        .then(response => {
            return response;
        })
        .catch(error => console.log(error))

    // loading.classList.add('hidden')

    return pokemonsDaAPI
}

