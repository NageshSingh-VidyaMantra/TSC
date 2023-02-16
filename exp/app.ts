interface takeAnyType{
    (param: number|string|boolean|undefined|object|null ): unknown;
}

let generateResult: takeAnyType;
generateResult = (param) => {
    if(typeof param === 'number' ) return ++param;
};

console.log(generateResult(5));