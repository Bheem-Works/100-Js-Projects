async function getRandomPokemonName(){
    try{

        const url = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1');
        const data = await url.json();
        const count = data.count; 
        
        const generateRandName = Math.floor(Math.random() * 100) + 1; 
        const randomNameUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${generateRandName}`);
        const randomNameData = await randomNameUrl.json();
        const randomName = randomNameData.name;
        document.getElementById('demo').innerText = `Pokemon Name : ${randomName}`;
    } catch(err){
        console.error('Error Fetching pokemon name',err);
    } 
}
    
    document.getElementById('getName').addEventListener('click',getRandomPokemonName);