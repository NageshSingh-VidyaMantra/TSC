(function () {
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
    var Colors = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9
    };
    function addUnit(resistorValue, lastColor) {
        var number = Math.pow(10, Colors[lastColor]);
        number = +resistorValue * number;
        var unit = number.toString().split("");
        var zeroLength = 0;
        var nonZeroLength = 0;
        var nonZeroNumber = "";
        unit.forEach(function (zero) {
            if (zero === "0")
                ++zeroLength;
        });
        unit.forEach(function (nonZero) {
            console.log("nonZero : " + nonZero);
            if (nonZero !== "0")
                nonZeroNumber += nonZero;
        });
        nonZeroLength = unit.length - zeroLength;
        console.log(zeroLength);
        if ((nonZeroLength === 1 || nonZeroLength === 2) && zeroLength === 0)
            return nonZeroNumber + " ohms";
        else if ((nonZeroLength === 1 || nonZeroLength === 2) && zeroLength === 1)
            return nonZeroNumber + "0 ohms";
        else
            return nonZeroNumber + " kiloohms";
    }
    function doesColorCodeExist(givenColor) {
        var exist = true;
        for (var i = 0; i < givenColor.length; ++i) {
            if (!(givenColor[i] in Colors)) {
                exist = false;
                break;
            }
        }
        return exist;
    }
    function decodedResistorValue(colors) {
        var givenColor;
        var resistorValue;
        givenColor = colors.map(function (color) { return color.toLowerCase(); });
        var result = doesColorCodeExist(givenColor);
        if (!result) {
            console.log("Please enter correct color code");
            return;
        }
        else {
            resistorValue =
                Colors[givenColor[0]].toString() + Colors[givenColor[1]].toString();
            return addUnit(resistorValue, givenColor[2]);
        }
    }
    console.log(decodedResistorValue(["yellow", "violet", "yellow"]));
})();
