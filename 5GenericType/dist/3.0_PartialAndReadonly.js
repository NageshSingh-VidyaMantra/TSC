"use strict";
(() => {
    console.log("Partial and Readonly");
    // By wraping Vehicle by Readonly, all properties are read-only
    const v1 = {
        category: "car",
        engine: "V8",
        impDetails: {
            manufactureDate: new Date(),
            engineNumber: 612588,
        },
        otherDetails: ["leatherSeats", "discbreak"],
        mat: true,
        rbgLed: true,
    };
    console.log(v1);
    if (v1 === null || v1 === void 0 ? void 0 : v1.spoiler) {
        console.log(v1.spoiler);
    }
    // v1.category = 'bus'; // read-only property
})();
