(() => {
  console.log("Nullish Operator");
  // The nullish coalescing operator can be seen as a special case of the logical OR (||) operator.
  // The latter returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.
  // In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., '' or 0)
  // The nullish coalescing operator has the fifth-lowest operator precedence, directly lower than || and directly higher than the conditional (ternary) operator.
  // It is not possible to combine both the AND (&&) and OR operators (||) directly with ??. A syntax error will be thrown in such cases.

  (null || undefined) ?? "foo"; // raises a SyntaxError
  (true && undefined) ?? "foo"; // raises a SyntaxError
  // Instead, provide parenthesis to explicitly indicate precedence:

  (null || undefined) ?? "foo"; // returns "foo"
})();
