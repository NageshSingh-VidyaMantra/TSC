"use strict";
(() => {
    console.log("Discriminated Unions");
    function moveAnimal(animal) {
        if (animal.type === 'bird')
            console.log('Moving with speed : ' + animal.flyingSpeed);
        else if (animal.type === 'tiger')
            console.log('Moving with speed : ' + animal.runningSpeed);
    }
    moveAnimal({ type: "bird", flyingSpeed: 10 });
    moveAnimal({ type: "tiger", runningSpeed: 20 });
})();
