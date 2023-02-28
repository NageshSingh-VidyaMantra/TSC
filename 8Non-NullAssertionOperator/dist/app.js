"use strict";
(() => {
    console.log("Non-null Assertion Operator (Postfix!)");
    let p1 = {
        name: 'Anna',
        pet: {
            name: 'Cat'
        }
    };
    let p2 = {
        name: 'Aman'
    };
    let p3 = {
        name: 'Belli'
    };
    let p4 = {
        name: 'Stu',
        pet: {
            name: 'Dog'
        }
    };
    let p5 = {
        name: null,
        pet: {
            name: 'Fish'
        }
    };
    function displayPet(param) {
        param.forEach(petName => { var _a; return console.log("PetName : " + ((_a = petName.pet) === null || _a === void 0 ? void 0 : _a.name)); });
        param.forEach(pName => { var _a; return console.log("PersonName : " + ((_a = pName.name) === null || _a === void 0 ? void 0 : _a.toLowerCase())); });
        param.forEach(pName => console.log("PersonName : " + pName.name.toLowerCase()));
        // param.forEach(petName => console.log("PetName : "+petName.pet!.name)); // Throw error
    }
    displayPet([p1, p2, p3, p4, p5]);
})();
