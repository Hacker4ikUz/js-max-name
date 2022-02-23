getBla(["Aleksey", "Kartoshka", "Margarita", "Morgenshtern", "Monica"]);
function getBla(arr) {
    const a = arr.map((value)=>{
      return value.length
    })
    arr.forEach(val => {
      if (val.length>= Math.max(...a)) {
        console.log(val);
      }
    });
  }