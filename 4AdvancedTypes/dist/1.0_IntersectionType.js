"use strict";
(() => {
    console.log("Intersection Types");
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
