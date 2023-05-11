"use strict";
(() => {
    console.log("Generic Type");
    function identity(value) {
        return value + "Good Job !";
    }
    const result = identity("123"); // acting as a type-safe so,
    // we don't accidentally put any other type other than string;
    // identity<string>('123') <===> identity<string>(value: string)
    // meaning it expect to have string parameter.
    console.log(result);
    // similarly
    // E.g. 1
    function greeting(str) {
        str.forEach((ele) => {
            console.log("Good Day - " + ele);
        });
        return "Done";
    }
    greeting(["Julei", "Amma"]);
    // E.g. 2
    function totalBill(billArray) {
        let sum = 0;
        billArray.forEach((ele) => (sum = sum + ele));
        return sum;
    }
    let total = totalBill([1, 5, 9, 8, 7, 5, 3]);
    console.log(total);
    // By default, it takes primitive but for non-primitive you have to extends it.
    function displayPetData(obj) {
        return console.log(`My pet name is ${obj.name} and age is ${obj.age} and breed is ${obj.breed}`);
    }
    let myPet = {
        name: "scobby",
        age: 2,
        breed: "pug",
    };
    displayPetData(myPet);
    //E.g 4
    // async function fetchApi<URL>(path: URL): Promise<object>{
    //   const response = await fetch(`https://example.com/api${path}`);
    //   return response.json();
    // }
    // fetchApi('/Neil_Armstrong')
})();
