// Code goes here!
(function () {
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }

  interface Fish extends Animal {
    species: string;
  }

  interface Person {
    name: string;
    age: number;
    pet?: Dog | Fish;
    displayEmpData(): void;
    displayPetData?(): void;
  }

  const emp1: Person = {
    name: "Anna",
    age: 23,
    displayEmpData() {
      console.log(`my name is ${this.name} and I am ${this.age} years old`);
    }
  };

  const emp2: Person = {
    name: "Tina",
    age: 20,
    pet: {
      name: "nemo",
      age: 1,
      species: "clown fish"
    },
    displayEmpData() {
      console.log(`my name is ${this.name} and I am ${this.age} years old`);
    },
    displayPetData() {
      console.log(
        `I have a pet name ${this.pet?.name} and he is ${this.pet?.age} years old`
      );
    },
  };

  const emp3: Person = {
    name: "Aman",
    age: 25,
    pet: {
      name: "scobby",
      age: 4,
      breed: "pug",
    },
    displayEmpData() {
      console.log(
        `my name is ${this.name} and I am ${this.age} years old`
      );
    },
    displayPetData() {
      console.log(
        `I have a pet name ${this.pet?.name} and he is ${this.pet?.age} years old`
      );
    },
  };

  // const empX: Person = {
  //   name: 'X',
  //   age: 0
  // }

  emp1.displayEmpData();
  emp2.displayEmpData();
  // Type Guard
  if(typeof emp2.displayPetData !== "undefined") emp2.displayPetData();
  /*
   It will not throw error,
   Either at compile-time or run-time   
   */
  
  // OR
  emp2.displayPetData!();

  /*
  The ! operator tells TypeScript to bypass the null-checking mechanism and
  assume that the property or method is not null or undefined,
  so if the displayPetData method does not exist on the emp2 object, 
  TypeScript will not raise a compile-time error,
  However it will raise error at run-time. 

  However, be aware that using the non-null assertion operator can be dangerous 
  if you are not 100% sure that the property or method exists and will not return null or undefined.
  It's always better to check if the property or method exists before accessing or calling it,
  or to use optional chaining to handle null or undefined values.
*/

  emp3.displayEmpData();
  // Type Guard
  if(typeof emp3.displayPetData !== "undefined") emp3.displayPetData();

  // console.log(empX)
})();
