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

/*
function takeAnyType2<T>(param: T){
    console.log(param);
}
// takeAnyType1('qwerty');
takeAnyType2<string>('qwerty');
takeAnyType2<number>(12345);
takeAnyType2<boolean>(true);
*/

type 'en';
type 'hi';
type 'fr';

type Language = 'en' | 'hi' | 'fr';
let language: Language;

language = {
    en: 'England',
    hi: 'India',
    fr: 'France',
    // ru: 'Russia'
}