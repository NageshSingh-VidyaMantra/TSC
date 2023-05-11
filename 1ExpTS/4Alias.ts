(() => {
  type nameAlias = number | string;

  let herName: nameAlias;
  let hisName: nameAlias;

  herName = 456;
  hisName = 321;

  function converter(inputName1: nameAlias, inputName2: nameAlias) {
    console.log(inputName1 + String(inputName2));
    console.log(String(inputName1) + +inputName2);
    console.log(+inputName1 + +inputName2);
    console.log(String(inputName1) + String(inputName2));
  }

  converter(hisName, herName);

  // Major advantage in explicit type assignment for nested objects

  type EmpTemplate =
    | {
        name: string;
        age: number;
        address: {
          houseNumber: number;
          sector: string;
          colony: string;
          pincode: number;
        };
        otherInf: [number, string, boolean];
        display(name: string): void;
      }

  let emp1: EmpTemplate = {
    name: "aman",
    age: 45,
    address: {
      houseNumber: 102,
      sector: "ed",
      colony: "poiopiop",
      pincode: 201002,
    },
    otherInf: [1002, "poi@xyz.com", false],
    display(input) {
      console.log(input);
    },
  };

  let emp2 = "Details NOT collected";

  console.log(emp1);
  console.log(emp2);

  // Type function

  // Eg 1
  type AddFun = (num1: number, num2: number) => number;
  let add: AddFun;
  add = (num1: number, num2: number) => {
    return num1 + num2;
  };

  //Eg 2
  type MulFun = (num1: number, num2: number) => number;
  let mul: AddFun;
  mul = (num1: number, num2: number) => {
    return num1 * num2;
  };

  // Q : Use fixed alias keys in the object
  type en = { en: string };
  type hi = { hi: string };
  type fr = { fr: string };

  // type LangCode = en & hi & fr;
  type LangCode = en | hi | fr;
  let langCode: LangCode = {
    en: "England",
    hi: "India",
    fr: "France",
  };
  console.log(langCode);

  // Q more optimized solu
  type Language = "en" | "hi" | "fr";

  type LanguageObj = {
    [key in Language]: string;
  };

  let language: LanguageObj = {
    en: "England",
    hi: "India",
    fr: "France",
    // nz: "Newzeland"
  };

  let partialLanguage: Partial<LanguageObj>;

  partialLanguage = {
    en: "England",
    fr: "France",
    // nz: "Newzeland"
  };
})();
