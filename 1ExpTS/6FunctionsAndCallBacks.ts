(() => {
  function add(num1: number, num2: number) {
    return num1 + num2;
  }

  function mul(num1: number, num2: number) {
    return num1 * num2;
  }

  /*
  below cb has type of any, which is not good
  function calculatorHOC(num1: number, num2: number, cb){
    return cb(num1, num2)
  }
  */
  function calculatorHOC(
    num1: number,
    num2: number,
    cb: (a: number, b: number) => number
  ) {
    cb(num1, num2);
  }

  console.log(calculatorHOC(5, 2, mul));
  console.log(calculatorHOC(5, 2, add));

  /*
  NOTE: 
  function calculatorHOC(num1: number, num2: number, cb: (a:number, b:number) => void){
    return cb(num1, num2)
  }
  here voids just depicts that we are ignoringhe returning value,
  callback functions can return something,
  even if the argument on which they're passed does NOT expect a returned value.
  */

  /*
  let addition: (num1: number, num2: number) => number;
  addition = add;
  console.log(addition(4, 9));
  */
})();
