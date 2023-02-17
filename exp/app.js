/*
interface takeAnyType{
    (param: number|string|boolean|undefined|object|null ): unknown;
}

let generateResult: takeAnyType;
generateResult = (param) => {
    if(typeof param === 'number' ) return ++param;
};

console.log(generateResult(5));
*/
// Generic Way
// function takeAnyType1(param: any){
//     console.log(param);
//     return param;
// }
function takeAnyType2(param) {
    console.log(param);
}
// takeAnyType1('qwerty');
takeAnyType2('qwerty');
takeAnyType2(12345);
takeAnyType2(true);
