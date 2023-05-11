(function () {
  // It's data type is unknown
  let user1Input: unknown;
  let user2Input: string;
  let user3Input: unknown;

  user1Input = "Qwerty";
    // user2Input = user1Input;
  user3Input = user1Input;

  console.log(user1Input);
  //   console.log(user2Input)
  console.log(user3Input);
  /*
    NOTE:
    
    Two ways to assign unknown variable are :-
    name = 'qaz'
    num = 45
    num1 = num2 ** but num2 also have type of unknown.

    In case of Any :-
    let num1: number;
    let num2: any;
    name = 'qaz'
    num = 45
    num1 = num2  ** even if num2 is of diff type
    well 'any' is most flexible and disable all type checking,
    so avoid using it.

    unknown is better choice over any
    */

  let user4Input: any;
  let user5Input: string;
  let user6Input: number;
  let user7Input: number[];

  user4Input = "Jacky";
  user5Input = user4Input;
  user6Input = user4Input;
  user7Input = user4Input;

  console.log(user4Input);
  console.log(user5Input);
  console.log(user6Input);
  console.log(user7Input);
})();
