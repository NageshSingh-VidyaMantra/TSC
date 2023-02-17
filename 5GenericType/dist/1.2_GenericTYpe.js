"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => {
    console.log("Generic Type");
    function identity(value) {
        return value + "Good Job !";
    }
    const result = identity("123"); // acting as a type-safe ao we don't accidentally put any other type other than string;
    // identity<string>('123') <===> identity<string>(value: string)
    // meaning it expect to have string parameter
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
    function fetchApi(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`https://example.com/api${path}`);
            return response.json();
        });
    }
    console.log(fetchApi('/Neil_Armstrong'));
})();
