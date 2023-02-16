type nameAlias = number | string;

let herName: nameAlias;
let hisName: nameAlias;

herName = 456;
hisName = 321;

function converter(inputName1: string | number, inputName2: string | number) {
  console.log(inputName1 + String(inputName2));
  console.log(String(inputName1) + +inputName2);
  console.log(+inputName1 + +inputName2);
  console.log(String(inputName1) + String(inputName2));
}

converter(hisName, herName);


// Major advantage in explicit type assignment for nested objects

type EmpTemplate = {
    name : string;
    age : number;
    address : {
        houseNumber: number;
        sector: string;
        colony: string;
        pincode: number;
     };
    otherInf : [number, string, boolean];
    display(name: string): void
} | string

let emp1 : EmpTemplate = {
    name : 'aman',
    age : 45,
    address : {
        houseNumber: 102,
        sector: 'ed',
        colony: 'poiopiop',
        pincode: 201002,
     },
    otherInf : [1002, 'poi@xyz.com', false],
    display(input){ console.log(input) }
}

let emp2 = 'Details NOT colected'

console.log(emp1)
console.log(emp2)

// Type function

// Eg 1
type AddFun = (num1: number, num2: number) => number;
let add: AddFun;
add = (num1: number, num2: number) => {
    return num1 + num2;
}

//Eg 2
type MulFun = (num1: number, num2: number) => number;
let mul: AddFun;
mul = (num1: number, num2: number) => {
    return num1 * num2;
}