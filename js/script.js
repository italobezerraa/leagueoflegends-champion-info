
const championName = document.querySelector('#champion-name');
const championImg = document.querySelector('#champion-img')
const championLore = document.querySelector('#champion-lore');
const championLoreTranslate = document.querySelector('#champion-lore-translate')


const button = document.querySelector('#btn');

button.addEventListener("click", startRequest);


async function startRequest () {
  try {
    const championInput = document.querySelector('#champion-input').value
    const champion = titleCase(championInput)
    alert(champion)
    const url = `http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion/${champion}.json`;
    const answer = await axios.get(url);
    const name = answer.data.data

    let loreReturn;
    for (const key in name) {
      championName.innerHTML = name[key].name;
      championLore.innerHTML = name[key].lore;
      loreReturn = name[key].lore;
    }
    
    championImg.setAttribute('src', `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`)
 
    championLoreTranslate.innerHTML = await translate(loreReturn, "pt");
    
  } catch (error) {
    alert('Nome de campeão não encontrado!');
  }
}

function titleCase(string){
  return string[0].toUpperCase() + string.slice(1);
}
