// aquí va manejo del dom
const dataLOL = Object.values(window.LOL.data);
function allData(){
    let result = [];
    for (let i = 0; i < data.length; i++){
      result.push(data[0].name + " " + data[0].title + " " + data[0].tags[0] + ", " + data[0].tags[1]);
    }
    return result;
  }

let tagsTypes = ["Fighter", "Tank", "Mage", "Assassin", "Support", "Marksman"];