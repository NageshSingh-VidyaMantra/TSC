var generateResult;
generateResult = function (param) {
    if (typeof param === 'number')
        return ++param;
};
console.log(generateResult(5));
