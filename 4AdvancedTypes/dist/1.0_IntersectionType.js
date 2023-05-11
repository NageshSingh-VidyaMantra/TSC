"use strict";
(() => {
    console.log("Intersection Types");
    // An intersection type combines multiple alias types into one.
    // more like inter-section of them
    // type hybrid_Admin = {
    // name: string;
    // privileges: string[];
    // startDate: string;
    // endDate?: string;
    // items: number[];
    // }
    // if staff 'name: number', then it will throw an error because it will convert it type to 'NEVER'
    const hybrid_Admin = {
        name: "Anna",
        privileges: ["coffee-breaks"],
        items: [12, 25],
        startDate: new Date().toLocaleDateString(),
    };
    console.log(hybrid_Admin);
    const pluto_Hybrid_Admin = {
        name: "XLR8",
        privileges: ["coffee-breaks"],
        items: [12, 25],
        startDate: new Date().toLocaleDateString(),
        planet: "pluto",
    };
    console.log(pluto_Hybrid_Admin);
})();
