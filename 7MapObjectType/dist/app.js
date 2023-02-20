"use strict";
// Mapped types build on the syntax for index signatures,
// which are used to declare the types of properties which have not been
// declared ahead of time:
// A mapped type is a generic type which uses a union of PropertyKeys
// (frequently created via a keyof) to iterate through keys to create a type:
(() => {
    console.log("Mapped Types TypeScript");
    let record;
    let admin;
    record = {
        en: "England",
        hi: "India",
        fr: "France",
        1: "One",
        2: "Two",
    };
    admin = {
        adminId: 123,
        adminName: 'Gagan'
    };
    console.log(record['en']);
    console.log(record[1]);
    console.log(admin);
})();
