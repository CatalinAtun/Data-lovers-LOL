// aquí van las funciones 
window.data = { 

filterData: (data, condition) => {
  let result = [];
  for (let i = 0; i < data.length; i++){
    for (let e = 0; e < data[i].tags.length; e++){
      if(data[i].tags[e] === condition){
        result.push(data[i])
      }
    }
  }
  return result;
},

sortData: (data, sortBy, sortOrder) => {
  const lolOrder = data
  if(sortBy === "name" && sortOrder === "az"){
    lolOrder.sort((a,b) => {
      if(a.name > b.name) {
        return 1;
      }
      if(a.name < b.name) {
        return -1;
      }
      return 0;
    })
  }
  if(sortBy === "name" && sortOrder === "za"){
    lolOrder.sort((a,b) => {
      if(a.name < b.name) {
        return 1;
      }
      if(a.name > b.name) {
        return -1;
      }
      return 0;
    })
  }

}

}