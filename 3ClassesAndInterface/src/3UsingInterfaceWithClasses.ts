// Code goes here!
(function () {
  // Using Interface with classes
  interface Greetable {
    name: string;
    greet(phrase: string):void;
  }

  // class can implement more than 1 interface
  // class Person implements Greetable, another-interface-1, another-interface-2 ... {
    class Person implements Greetable {
    constructor(public name: string, public age: number) {}

    greet(phrase: string){
      console.log(phrase +" "+ this.name)
    }
  }

  let user1: Greetable;

  user1 = new Person('Stu', 30);
  user1.greet('Hi there - I am')
  console.log(user1)
  
})();
