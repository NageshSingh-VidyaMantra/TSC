(() => {
  console.log("Discriminated Unions");

  interface Bird {
    type: "bird", // discriminating by unique type
    flyingSpeed: number;
  }

  interface Tiger {
    type: "tiger", // discriminating by unique type
    runningSpeed: number;
  }

  type Animal = Bird | Tiger;

  function moveAnimal(animal: Animal){
    if(animal.type === 'bird') console.log('Moving with speed : ' + animal.flyingSpeed)
    else if(animal.type === 'tiger') console.log('Moving with speed : ' + animal.runningSpeed)
  }

  moveAnimal({type: "bird", flyingSpeed: 10})
  moveAnimal({type: "tiger", runningSpeed: 20})

})();
