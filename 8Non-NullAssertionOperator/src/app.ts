(() => {
  console.log("Non-null Assertion Operator (Postfix!)");

  // TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking.
  // Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:

  // Just like other type assertions,
  // this doesn’t change the runtime behavior of your code,
  // so it’s important to only use ! when you know that the value can’t be null or undefined.

  // E.g. 1
  /*
    function fix(param: number | null){
        console.log(param?.toLocaleString().split('')) // ["1", "2", "3"] undefined
        console.log(param!.toLocaleString().split('')) // ["1", "2", "3"] "Uncaught TypeError: Cannot read property 'toLocaleString' of null" 
    }

    fix(123);
    fix(null);
  */

  // E.g. 2

  interface Person {
    name: string | null | undefined;
    pet?: {
      name: string;
    };
  }

  let p1: Person = {
    name: 'Anna',
    pet: {
        name: 'Cat'
    }
  }

  let p2: Person = {
    name: 'Aman'
  }

  let p3: Person = {
    name: 'Belli'
  }

  let p4: Person = {
    name: 'Stu',
    pet: {
        name: 'Dog'
    }
  }

  let p5: Person = {
    name: null,
    pet: {
        name: 'Fish'
    }
  }

  function displayPet(param: Person[]){
    param.forEach(petName => console.log("PetName : "+petName.pet?.name));
    param.forEach(pName => console.log("PersonName : "+pName.name?.toLowerCase()));
    param.forEach(pName => console.log("PersonName : "+pName.name!.toLowerCase()));

    // param.forEach(petName => console.log("PetName : "+petName.pet!.name)); // Throw error
  }

  displayPet([p1,p2,p3,p4,p5])


})();
