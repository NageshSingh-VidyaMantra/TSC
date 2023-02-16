(() => {
  // c? === c: number | undefined
  function multiply(a: number, b: number, c?: number): number {
    if (typeof c !== "undefined") {
      return a * b * c;
    }
    return a * b;
  }
  multiply(3,6)
  multiply(3,6,5)
})();