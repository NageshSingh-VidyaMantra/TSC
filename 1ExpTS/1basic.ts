console.log("Your code goes here...");
console.log("Your code goes here...");

const num1 = 2.3;
const num2 = 2.7;
let num3 = 4.5;

function add(a: number, b: number) {
  return a + b;
}
function concat(a: string, b: string, c: boolean) {
  if (c) return a + " " + b;
  else if (!c) return b + " " + a;
}

console.log(add(num1, num2));
console.log(concat("hello", "all", true));
console.log(concat("hello", "all", false));