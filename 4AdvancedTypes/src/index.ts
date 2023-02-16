(() => {
  console.log("Type Casting");
  const userInputElement = <HTMLInputElement>document.getElementById('userInput')!;
  userInputElement.placeholder = 'Type Here';
})();
