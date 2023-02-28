(() => {
  
// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

// Enums allow a developer to define a set of named CONSTANTS.
//  Using enums can make it easier to document intent, or create a set of distinct cases.
// TypeScript provides both numeric and string-based enums.

enum Direction {
  UP='UP', 
  DOWN='DOWN', 
  LEFT='LEFT', 
  RIGHT = 55,
  DIAGONAL,
  display = displayDaigonal()  // Computed values are not permitted in an enum with string valued members.
}

console.log(Direction.UP)
console.log(Direction.DIAGONAL)
Direction.DIAGONAL = 50; // Cannot assign to 'DIAGONAL' because it is a read-only property.
console.log(Direction.DIAGONAL)

})();
