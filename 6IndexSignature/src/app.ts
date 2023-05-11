// The idea of the index signatures is to type objects of,
// unknown structure when you only know the key and value types.

// The syntax of an index signature is pretty simple and looks similar to the syntax of a property,
// but with one difference. Instead of the property name,
// you simply write the type of the key inside the square brackets: { [key: KeyType]: ValueType | value Type }.

// The key of the index signature can only be a string, number, or symbol. Other types are not allowed:

// I recommend using the index signature to annotate generic objects,
// e.g. keys are string type. But use Record<Keys,Type>
// to annotate specific objects when you know the keys in advance,
// e.g. a union of string literals 'prop1' | 'prop2' is used for keys.

// 5. Conclusion
// If you don't know the object structure you're going to work with,
// but you know the possible key and value types,
// then the index signature is what you need.

(() => {
  console.log("Index Signatures in TypeScript");
  type Record = {
    [key: string]: string;
    [key: number]: string;
  };

  // Not possible with interface
  /*
  
  type Record1 = {
    [key: "literal"]: string;
  };

  OR;

  type Record<T> = {
    [key: T]: string;
    [key: T]: string;
  };
  
  */
  let record: Record;

  record = {
    en: "England",
    hi: "India",
    fr: "France",
    1: "One",
    2: "Two",
  };
})();
