(() => {
  /*
  type Language = "en" | "hi" | "fr";

  type LanguageObj = {
    [key in Language]: string;
  };

  let language: LanguageObj;

  language = {
    en: "England",
    hi: "India",
    fr: "France",
    // nz: "Newzeland"
  };
  */

  /*
  interface obj1 {
    [key: string]: string;
  }

  interface obj2 extends obj1 {
    [key: string]: string;
  }

  let randomObj1: obj2 = {
    prop: "qwerty",
    1: "one",
  };

  console.log(randomObj1.prop);

*/

  /*
let a: string[] = ["a", "b", "c"];
  // let a: string[] = [];

  let b: string;
  b = a![2];
  console.log("b : " + b);

    b = a![5];
    console.log("b : " + b);
*/

  /*
  interface Country {
    [key: `A-${number}`]: string;
    [key: `B-${number}`]: string;
    [key: `C-${number}`]: string;
  }

  let c: Country;
  c = {
    "A-1": "Afganistan",
    "B-1": "Bangladesh",
    "C-1": "China"
  }

  console.log(c["A-1"])
  console.log(c["B-1"])
  console.log(c["C-1"])
  */
  /*
  let colors = ["BroWn", "BLue", "rED"];

  enum Colors {
    black,
    brown,
    red,
    orange,
    yellow,
    green,
    blue,
    violet,
    grey,
    white,
  }

  function addUnit(resistorValue:string , lastColor: string): string{
    let number = Math.pow(10, Colors[lastColor])
    console.log(number)
    if(number === 0) return resistorValue+" ohms"
    else if(number === 10) return resistorValue+"0 ohms"
    else if(number === 100) return resistorValue+"00 ohms"
    else if(number === 1000) return resistorValue+"kiloohms"
    else return resistorValue+"Megaohms"
  }

  function doesColorCodeExist(givenColor: string[]) {
    let exist: boolean = true;
    for (let i = 0; i < givenColor.length; ++i) {
      if (!(givenColor[i] in Colors)) {
        exist = false;
        break;
      }
    }
    return exist;
  }

  function decodedResistorValue(colors: [string, string, string]) {
    let givenColor: string[];
    let resistorValue: string;
    givenColor = colors.map((color) => color.toLowerCase());
    let result = doesColorCodeExist(givenColor);
    if (!result) {
      console.log('Please enter correct color code');
      return;
    }else{
      resistorValue = Colors[givenColor[0]].toString() + Colors[givenColor[1]].toString();
      return addUnit(resistorValue, givenColor[2])
    }
  }

  decodedResistorValue([colors[0], colors[1], colors[2]]);
  */

  type ResistorColor = {
    [key: string]: number;
  };

  let Colors: ResistorColor = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  function addUnit(resistorValue: string, lastColor: string): string {
    let number = Math.pow(10, Colors[lastColor]);
    number = +resistorValue * number;
    let unit = number.toString().split("");
    let zeroLength: number = 0;
    let nonZeroLength: number = 0;
    let nonZeroNumber: string = "";
    unit.forEach((zero) => {
      if (zero === "0") ++zeroLength;
    });
    unit.forEach((nonZero) => {
      console.log("nonZero : " + nonZero);
      if (nonZero !== "0") nonZeroNumber += nonZero;
    });
    nonZeroLength = unit.length - zeroLength;
    console.log(zeroLength);
    if ((nonZeroLength === 1 || nonZeroLength === 2) && zeroLength === 0)
      return nonZeroNumber + " ohms";
    else if ((nonZeroLength === 1 || nonZeroLength === 2) && zeroLength === 1)
      return nonZeroNumber + "0 ohms";
    else if (nonZeroLength === 2 && zeroLength >)
      return nonZeroNumber + "0 ohms";
    else return nonZeroNumber + " kiloohms";
  }

  function doesColorCodeExist(givenColor: string[]) {
    let exist: boolean = true;
    for (let i = 0; i < givenColor.length; ++i) {
      if (!(givenColor[i] in Colors)) {
        exist = false;
        break;
      }
    }
    return exist;
  }

  function decodedResistorValue(colors: [string, string, string]) {
    let givenColor: string[];
    let resistorValue: string;
    givenColor = colors.map((color) => color.toLowerCase());
    let result = doesColorCodeExist(givenColor);
    if (!result) {
      console.log("Please enter correct color code");
      return;
    } else {
      resistorValue =
        Colors[givenColor[0]].toString() + Colors[givenColor[1]].toString();
      return addUnit(resistorValue, givenColor[2]);
    }
  }

  console.log(decodedResistorValue(["yellow", "violet", "yellow"]));
})();
