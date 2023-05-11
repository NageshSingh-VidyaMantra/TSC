(() => {
  console.log("Generic Type");

  function identity<T>(value: T) {
    return value + "Good Job !";
  }

  const result = identity<string>("123"); // acting as a type-safe so,
  // we don't accidentally put any other type other than string;
  // identity<string>('123') <===> identity<string>(value: string)
  // meaning it expect to have string parameter.
  console.log(result);

  // similarly

  // E.g. 1
  function greeting<S>(str: S[]) {
    str.forEach((ele) => {
      console.log("Good Day - " + ele);
    });
    return "Done";
  }

  greeting<string>(["Julei", "Amma"]);

  // E.g. 2
  function totalBill<T>(billArray: T[]) {
    let sum = 0;
    billArray.forEach((ele: unknown) => (sum = sum + (ele as number)));
    return sum;
  }

  let total: number = totalBill<number>([1, 5, 9, 8, 7, 5, 3]);
  console.log(total);

  // E.g. 3
  interface Pet {
    name: string;
    age: number;
    breed: string;
  }

  // By default, it takes primitive but for non-primitive you have to extends it.
  function displayPetData<O extends Pet>(obj: O) {
    return console.log(
      `My pet name is ${obj.name} and age is ${obj.age} and breed is ${obj.breed}`
    );
  }

  let myPet : Pet = {
    name: "scobby",
    age: 2,
    breed: "pug",
  };

  displayPetData<Pet>(myPet);

  //E.g 4
  // async function fetchApi<URL>(path: URL): Promise<object>{
  //   const response = await fetch(`https://example.com/api${path}`);
  //   return response.json();
  // }
  // fetchApi('/Neil_Armstrong')
})();