(() => {
  console.log('Function Overloading')

//Function with string type parameter  
function add(a:string, b:string): string;  
//Function with number type parameter  
function add(a:number, b:number): number;  
//Function Definition  

function add(a: number | string, b: number | string){  
  if(typeof a == 'string' || typeof b === 'string') return String(a) + String(b)
  else return a + b;
}  
//Result  
let result: number | string;
result = add("Hello ", "JavaTpoint");   
// result.split(''); 
// It will not work until we use function overloads, 
// because before compilation 
// TSC does not what will add return, it could be string or number.
// But once we introduce function overloads TSC now know what values it could hold

//or

// other approach
// result = add("Hello ", "JavaTpoint") as string; 
// above now TSC knows we are expection a string as our output   
// result.split(''); 

})();