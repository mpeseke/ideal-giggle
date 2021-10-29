const getMonsterData = () => {

    let randomPokemonNo = Math.floor(Math.random() * 251)

    fetch('https://pokeapi.co/api/v2/pokemon/'+randomPokemonNo)
        .then(response => response.json())
        .then(json => parseTheData(json));
}

const buttonSearch = () => {
    let query = document.getElementById('poke-search').value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    .then(response => response.json())
    .then(json => parseTheData(json));
}

const parseTheData = (data) => {
    let monsterName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    let monsterImg = data.sprites.front_default
    let monsterNum = data.id
    let type1 = data.types[0].type.name
    let type2 = data.types[1] ? data.types[1].type.name : null
    let height = data.height
    let weight = data.weight
    let monster = {
        monsterName, 
        monsterImg, 
        monsterNum, 
        type1, 
        type2, 
        height, 
        weight
    }
    stuffTheHTML(monster);


}

const stuffTheHTML = (monsterData) => {
    console.log(monsterData)
    document.getElementById('poke-name').textContent = monsterData.monsterName;
    let imgBox = document.getElementById('poke-img')
    imgBox.src = monsterData.monsterImg;
    imgBox.alt = `Image of ${monsterData.monsterName}`
    document.getElementById('poke-id').textContent = `Number: ${monsterData.monsterNum}`
    document.getElementById('poke-type1').textContent = `Type 1: ${monsterData.type1}`
    document.getElementById('poke-type2').textContent = `Type 2: ${monsterData.type2}`
    document.getElementById('poke-height').textContent = `Height: ${monsterData.height}`
    document.getElementById('poke-weight').textContent = `Weight: ${monsterData.weight}`
}

getMonsterData()

// window.setInterval(getMonsterData, 10000);
