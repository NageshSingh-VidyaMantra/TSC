// Code goes here!
(function () {
  // Extending Interfaces
  interface Name{
    readonly name: string;
  }

  // can include as many interface we want
  // interface Greetable extends Name, another-interface-1, another-interface-2, ...{ 
    interface Greetable extends Name{
    greet(phrase: string):void;
  }

  // advantage is obj or class can use desired interface

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
