"use strict";
(() => {
    console.log("Nullish coalescing operator '??'");
    /*
    The nullish coalescing operator is written as two question marks ??.

    As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.
    
    The result of a ?? b is:
    
    if a is defined, then a,
    if a isn’t defined, then b.
    In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
    
    The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.
    
    We can rewrite result = a ?? b using the operators that we already know, like this:
    */

    let a = null;
    let b = 5;
    let result = (a !== null && a !== undefined) ? a : b;
    console.log(result)


    // NOTE
    /*
    The important difference between them is that:

    || returns the first truthy value.
    ?? returns the first defined value.
    
    > In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined.
    > They are all the same – falsy values.
    > If any of these is the first argument of ||, then we’ll get the second argument as the result.

    > In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.
    */

    let height = 0;

    console.log(height || 100); // 100
    console.log(height ?? 100); // 0

    let truth = false;
    console.log(truth ?? true); // false
    console.log(truth || true); // true

})();
