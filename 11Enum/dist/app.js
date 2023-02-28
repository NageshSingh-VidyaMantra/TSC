"use strict";
(() => {
    console.log("Optional chaining");
    class Person {
        constructor(fullName) {
            this.fullName = fullName;
        }
        // Explicitly check for null and undefined
        // Handle the possible cases differently
        getUppercaseFullname() {
            if (this.fullName === null || this.fullName === undefined) {
                return undefined;
            }
            else {
                return this.fullName.toUpperCase();
            }
        }
        getFullNameLength() {
            if (this.fullName === null || this.fullName === undefined) {
                return -1;
            }
            else {
                return this.fullName.length;
            }
        }
    }
    /*
    > In the example above, we defined a class Person using the type nullableUndefinedString we previously introduced.
    > Then, we implemented a method to return the full name of the person, in uppercase.
    > As the field we access might be null or undefined, we have to continuously check for the actual value.
    > For example, in Person::getUppercaseFullName() we return undefined if the full name is not defined.
    > This way of implementing things is quite cumbersome and difficult to both read and maintain.
    */
    /* Optional chaining */
    // As we saw in the introduction,
    // the core of optional chaining is the ?.
    // ? operator, allowing us to stop running expressions when the runtime encounters a null or undefined.
    class Person1 {
        constructor(fullName) {
            this.fullName = fullName;
        }
        getUppercaseFullname() {
            var _a;
            return (_a = this.fullName) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        }
        getFullNameLength() {
            var _a, _b;
            return (_b = (_a = this.fullName) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : -1;
        }
    }
    function head(list) {
        return list === null || list === void 0 ? void 0 : list[0];
        // equivalent to
        //   return (list === undefined) ? undefined : list[0]
    }
    console.log(head([1, 2, 3]));
    console.log(head(undefined));
})();
