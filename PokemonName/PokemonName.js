function getRandomPokemonName(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1') // getting the 1 limit value;
    .then(res => res.json())
    .then(data => {
        const count = data.count;
        const totalCount = Math.floor(Math.random () * count) + 1;
        return fetch(`https://pokeapi.co/api/v2/pokemon/${totalCount}`)
    })
    .then(res => res.json())
    .then(pokemonName => {
        const randomName = pokemonName.name;
        document.getElementById('demo').innerText = `Pokemon Name : ${randomName}`
    })
    .catch(error => {
        alert('Sorry!');
    })
}

document.getElementById('getName').addEventListener('click',getRandomPokemonName);