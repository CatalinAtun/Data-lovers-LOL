
// aquí va manejo del dom
const dataLOL = Object.values(window.LOL.data);


// imprime las cartas en pantalla principal
function lolCards(data){  
    document.getElementById("root").innerHTML= "";
    let all = [];
    for(let i = 0; i < data.length; i++){
        all.push(`<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="card" style="width: 18rem;">
        <img src="${data[i].splash}" id="img" class="img-fluid" alt="splashChampion">
        <div class="card-body">
        <h3 class="card-title">${data[i].name}</h3>
        <p class="card-subtitle">${data[i].title}</p>
        <p class="card-subtitle1">${data[i].tags.join(" ")}</p>
        </div>
        <button type="button" class="buttonChamp btn2 btn-outline-dark">More information</button>
        </div>
        </div>`);
    }
    return all;
}
document.getElementById("root").innerHTML = lolCards(dataLOL); 

document.getElementById("fighter").addEventListener('click', () => {
    document.getElementById("root").innerHTML = lolCards(window.data.filterData(dataLOL, "Fighter"));
    championInfo(window.data.filterData(dataLOL, "Fighter"));
})
document.getElementById("tank").addEventListener('click', () => {
    document.getElementById("root").innerHTML = lolCards(window.data.filterData(dataLOL, "Tank"));
    championInfo(window.data.filterData(dataLOL, "Tank"));
})
document.getElementById("mage").addEventListener('click', () => {
    document.getElementById("root").innerHTML = lolCards(window.data.filterData(dataLOL, "Mage"));
    championInfo(window.data.filterData(dataLOL, "Mage"));
})
document.getElementById("assassin").addEventListener('click', () => {
    document.getElementById("root").innerHTML = lolCards(window.data.filterData(dataLOL, "Assassin"));
    championInfo(window.data.filterData(dataLOL, "Assassin"));
})
document.getElementById("support").addEventListener('click', () => {
    document.getElementById("root").innerHTML = lolCards(window.data.filterData(dataLOL, "Support"));
    championInfo(window.data.filterData(dataLOL, "Support"));
})
document.getElementById("marksman").addEventListener('click', () => {
    document.getElementById("root").innerHTML = lolCards(window.data.filterData(dataLOL, "Marksman"));
    championInfo(window.data.filterData(dataLOL, "Marksman"));
})

document.getElementById("selectOrder").addEventListener('change', () => {
    document.getElementById("root").innerHTML = lolCards(window.data.sortData(dataLOL, "name", document.getElementById("selectOrder").value));
    championInfo(window.data.sortData(dataLOL, "name", document.getElementById("selectOrder").value));
})

const rootDiv = document.getElementById("root");
const button_info = document.getElementsByClassName("buttonChamp");

// botones más información
function championInfo(data){
    for(let i = 0; i < button_info.length; i++){
        button_info[i].addEventListener('click', () => {
            rootDiv.innerHTML = `
            <div class="container">
            <button id="buttonBack" class="btn btn-outline-dark" onclick=location=URL> BACK </button>
            </div>
            <div class="card1 mb-3">
            <h1 class="card-title1">${data[i].name}</h1>
            <h3 class="card-title">${data[i].title}</h3>
            <img src="${data[i].splash}" class="card-img-top" alt="championPhoto">
            <div class="card-body">
            <h3 class="card-title2">${data[i].tags.join(" & ")}</h3><br>
            <p class="card-text">${data[i].blurb}</p>
        <div class="container-fluid">
            <div class="container3">
                <p>
                <div class="title1">
                <li class="list-group-item">Info:</li>
                </div>
                <li class="list-group-item">Attack: ${data[i].info.attack}</li>
                <li class="list-group-item">Defense: ${data[i].info.defense}</li>
                <li class="list-group-item">Magic: ${data[i].info.magic}</li>
                <li class="list-group-item">Difficulty: ${data[i].info.difficulty}</li>
                </p>
            </div>
            <div class="container4">
                <p>
                <div class="title1">
                <li class="list-group-item">Stats:</li>
                </div>
                <li class="list-group-item">Hp: ${data[i].stats.hp}</li>
                <li class="list-group-item">Hp per level: ${data[i].stats.hpperlevel}</li>
                <li class="list-group-item">Mp: ${data[i].stats.mp}</li>
                <li class="list-group-item">Mp per level: ${data[i].stats.mpperlevel}</li>
                <li class="list-group-item">Moves speed: ${data[i].stats.movespeed}</li>
                <li class="list-group-item">Armor: ${data[i].stats.armor}</li>
                <li class="list-group-item">Armor per level: ${data[i].stats.armorperlevel}</li>
                </p>
            </div>
            <div class="container5">
                <p>
                <li class="list-group-item">Spell block: ${data[i].stats.spellblock}</li>
                <li class="list-group-item">Spell block per level: ${data[i].stats.spellblockperlevel}</li>
                <li class="list-group-item">Attack range: ${data[i].stats.attackrange}</li>
                <li class="list-group-item">Hp regen: ${data[i].stats.hpregen}</li>
                <li class="list-group-item">Hp regen per level: ${data[i].stats.hpregenperlevel}</li>
                <li class="list-group-item">Mp regen: ${data[i].stats.mpregen}</li>
                <li class="list-group-item">Mp regen per level: ${data[i].stats.mpregenperlevel}</li>
                </p>
            </div>
            <div class="container6">
                <p>
                <li class="list-group-item">Crit: ${data[i].stats.crit}</li>
                <li class="list-group-item">Crit per level: ${data[i].stats.critperlevel}</li>
                <li class="list-group-item">Attack damage: ${data[i].stats.attackdamage}</li>
                <li class="list-group-item">Attack damage per level: ${data[i].stats.attackdamageperlevel}</li>
                <li class="list-group-item">Attack speed offset: ${data[i].stats.attackspeedoffset}</li>
                <li class="list-group-item">Attack speed per level: ${data[i].stats.attackspeedperlevel}</li>
                </p>
                </div>
            </div>
        </div>`
        })
    }
}
championInfo(dataLOL);

