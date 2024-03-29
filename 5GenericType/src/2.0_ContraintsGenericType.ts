(() => {
  console.log("Contraints Generic Type");
  // By adding containts we are exiplicty fixing it type

  let arr1: Array<string> = [];
  let arr2: number[] = [];
  let arr3: string[] = [];

  // console.log(arr1 === arr2);
  console.log(arr1 === arr3);

  function merge1<T extends number | string, U extends string>(
    val1: T,
    val2: U
  ) {
    // contraints allow us to extend T
    if (typeof val1 === "number") return ++val1;
    else return val1 + val2;
  }

  // Another way
  function merge2<U extends string>(val1: number | string, val2: U) {
    // contraints allow us to extend T
    if (typeof val1 === "number") return ++val1;
    else return val1 + val2;
  }

  console.log(merge1(45, "qwerty"));
  console.log(merge1("lkjhg", "qwerty"));

  console.log(merge2(28, "march"));
  console.log(merge2("12", "july"));

  // The following prop() function accepts an object and a property name.
  // It returns the value of the property.
  function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  let str = prop({ username: "John" }, "username"); // both should be same
  console.log(str);
})();