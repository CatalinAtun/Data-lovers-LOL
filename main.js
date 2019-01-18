// aquí va manejo del dom

const dataLOL = Object.values(window.LOL.data);

function lolCards(){  
    let all = [];
    for(let i = 0; i < dataLOL.length; i++){
        all.push(`<div class="container>
        <div class="card" style="width: 18rem;">
        <img src="${dataLOL[i].splash}" class="card-img-top" alt="${dataLOL[i].id}">
        <div class="card-body">
        <h5 class="card-title">${dataLOL[i].name}</h5>
        <h6 class="card-subtitle">${dataLOL[i].title}</h6>
        <button type="button" class="buttonChamp btn btn-outline-dark">Más información</button>
        </div>
        </div>
        </div>`);
    }
    return all;
}
document.getElementById("root").innerHTML = lolCards(); 

//let tagsTypes = ["Fighter", "Tank", "Mage", "Assassin", "Support", "Marksman"];

const rootDiv = document.getElementById("root");
const button_info = document.getElementsByClassName("buttonChamp");

function championInfo(data){
    for(let i = 0; i < button_info.length; i++){
        button_info[i].addEventListener('click', () => {
            rootDiv.innerHTML = `
            <img src="${data[i].img}" class="mr-3" alt="champion">
            <div class="media-body">
            <button type="button" class="buttonBack btn btn-outline-dark">Volver atrás</button>
              <h5 class="mt-0">${data[i].name}</h>
               <br>${data[i].title}<br><br>
               Info:
               Attack:${data[i].info.attack}<br>
               Defense:${data[i].info.defense}<br>
               Magic:${data[i].info.magic}<br>
               Difficulty:${data[i].info.difficulty}<br>
               <br>
               <br>
               Tags:${data[i].tags.join(" ")}
               <br>
               Stats: hp: 537.8<br>
               hpperlevel: 85<br>
               mp: 105.6<br>
               mpperlevel: 45<br>
               movespeed: 345<br>
               armor: 24.384<br>
               armorperlevel: 3.8<br>
               spellblock: 32.1<br>
               spellblockperlevel: 1.25<br>
               attackrange: 150<br>
               hpregen: 6.59<br>
               hpregenperlevel: 0.5<br>
               mpregen: 0<br>
               mpregenperlevel: 0<br>
               crit: 0<br>
               critperlevel: 0<br>
               attackdamage: 60.376<br>
               attackdamageperlevel: 3.2<br>
               attackspeedoffset: -0.04<br>
               attackspeedperlevel: 3
              </div>
            `
        })
    }
}
championInfo(dataLOL);
