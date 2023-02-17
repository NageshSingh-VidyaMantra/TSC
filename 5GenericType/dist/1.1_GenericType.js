"use strict";
(() => {
    console.log("Generic Type");
    // The difference between 'any' and 'generics' is
    // if not specified it will return any, where as generics
    // will return generics type 
    function merge1(arr1, arr2) {
        console.log(arr1.length);
        console.log(arr2.length);
        return [...arr1, arr2];
    }
    function merge2(arr1, arr2) {
        // console.log(arr1.length)
        console.log(arr2.length);
        return [arr1, ...arr2];
    }
    function merge3(str, arr2) {
        console.log(str.length);
        console.log(arr2.length);
        return [str, ...arr2];
    }
    console.log(merge1(['qaz', 'lkj'], ['zaq']));
    console.log(merge2('tre', ['ert', 'fhg']));
    console.log(merge3('qwe', ['ghj', 'lmo']));
})();
