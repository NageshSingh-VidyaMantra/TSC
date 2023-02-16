// Code goes here!
(function () {
  // function is also an object in JS

  // custom function type using interface, it should be anonymous
  // tsc will understand this special syntax that we want to use this
  // as a custom function type

  interface AddFn {
    (num1: number, num2: number): number;
  }

  /*
  in case of type
  type AddFn = (num1: number, num2: number)=> number;
  */

  let add: AddFn;
  add = (num1: number, num2: number) => {
    return num1 + num2;
  };

  let sub: AddFn;
  sub = (num1: number, num2: number) => {
    return num1 - num2;
  };

  // here we have created a obj NOT custom function type
  interface MulFn {
    number1: number;
    number2: number;
    multiply(num1: number, num2: number): number;
    division(num1: number, num2: number): number;
    modulous(): number;
  }

  let mul: MulFn;
  mul = {
    multiply(num1: number, num2: number) {
      return num1 * num2;
    },
    division(num1: number, num2: number) {
      return num1 / num2;
    },
    number1: 10,
    number2: 3,
    modulous() {
      return this.number1 % this.number2;
    },
  };

  console.log(add(4, 5));
  console.log(sub(10, 5));
  console.log(mul.multiply(4, 5));
  console.log(mul.division(125, 5));
  console.log(mul.modulous());

  // another way to define multiple params for function
   // function
interface Person {
  firstName: string
  lastName: string
  age?: number
}

interface Bio {
  fullName: string
  yearOfBirth?: number
}

function getBio(person: Person): Bio {
  let yearOfBirth: number; // is initially undefined
  yearOfBirth = 0;

  if (person?.age) {
      const today = new Date()

      yearOfBirth = today.getFullYear() - person.age
  }

  return {
    fullName: `${person.firstName} ${person.lastName}`,
    yearOfBirth
  }
}

let person1 : Person;
person1 = {
  firstName: 'Light',
  lastName: 'Yagama',
  age: 45
}
console.log(getBio(person1));
})();
