let herName: number | string;
let hisName: number | string;

herName = 456;
hisName = 321;

function converter(
  inputName1: string | number,
  inputName2: string | number
) {
  console.log(inputName1 + inputName2);
  console.log(inputName1 + +inputName2);
  console.log(inputName1 + String(inputName2));
  console.log(String(inputName1) + +inputName2);
  console.log(+inputName1 + +inputName2);
  console.log(String(inputName1) + String(inputName2));
}

converter(hisName, herName);