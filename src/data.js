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
} 
}