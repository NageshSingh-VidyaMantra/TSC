// Code goes here!
(function () {
  // interface : describes the structure of an object
  // you cann't initialize values in interface
  // it is use to type check an Object.

  interface Person1 {
    name: string;
    age: number;
    greet(phrase: string): void;
  }

  // OR

  type Person2 = {
    name: string;
    age: number;
    greet(phrase: string): void;
  }

  let user1: Person1;
  user1 = {
    name: "Anna",
    age: 23,
    greet(phrase: string) {
      console.log(phrase + this.name + ' :)');
    },
  };
  user1.greet('Hello I am ')

  let user2: Person2;
  user2 = {
    name: "Aman",
    age: 24,
    greet(phrase: string) {
      console.log(phrase + this.name + ' :)');
    },
  };
  user2.greet('Hello I am ')

  // yes we can create types of object by using 'types', 'union' , 'interface' and so on ...
  // but with interface it is super clear that we want to define structure of that object with that 
})();
