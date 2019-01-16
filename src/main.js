// aquí va manejo del dom
const dataLOL = Object.values(window.LOL.data);

function allData(){
    let result = [];
    for (let i = 0; i < dataLOL.length; i++){
      result.push(dataLOL[i].name + " " + dataLOL[i].title);
    }
    return result;
  }
function lolCards(){  
    let all = [];
    for (let i = 0; i < dataLOL.length; i++){
        all.push(`<div class="container>
        <div class="card" style="width: 18rem;">
        <img src="${dataLOL[i].splash}" class="card-img-top" alt="${dataLOL[i].id}">
        <div class="card-body">
        <h5 class="card-title">${dataLOL[i].name}</h5>
        <h6 class="card-subtitle">${dataLOL[i].title}</h6>
        </div>
        </div>
        </div>`);
    }
    return all;
}
document.getElementById("root").innerHTML = lolCards();


let tagsTypes = ["Fighter", "Tank", "Mage", "Assassin", "Support", "Marksman"];
     