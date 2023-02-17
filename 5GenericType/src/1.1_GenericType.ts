(() => {
  console.log("Generic Type");

  // The difference between 'any' and 'generics' is
  // if not specified it will return any, where as generics
  // will return generics type 
  function merge1(arr1: any, arr2: any) {
    console.log(arr1.length)
    console.log(arr2.length)
    return  [...arr1, arr2];
  }
  function merge2<A1, A2>(arr1: A1, arr2: A2[]) {
    // console.log(arr1.length)
    console.log(arr2.length)
    return  [arr1, ...arr2];
  }
  function merge3<A>(str: string, arr2: A[]) {
    console.log(str.length)
    console.log(arr2.length)
    return  [str, ...arr2];
  }
  console.log(merge1(['qaz','lkj'], ['zaq']))
  console.log(merge2('tre', ['ert','fhg']))
  console.log(merge3('qwe', ['ghj','lmo']))
})();