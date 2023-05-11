"use strict";
(() => {
    console.log("Intersection Types");
    const hybrid_Admin_i = {
        name: "Anna",
        privileges: ["coffee-breaks"],
        items: [12, 25],
        startDate: new Date().toLocaleDateString(),
        displayAdminName() {
            return this.name;
        },
    };
    // although it is NOT showing any error here BUT this is NOT right
    // hybrid_Admin_u only belongs to 1 type out of these 3
    const hybrid_Admin_u = {
        name: "Aman-manish",
        privileges: ["complementray-lunch"],
        // items: [7, 27],
        // startDate: new Date().toLocaleDateString(),
        displayAdminName() {
            return this.name;
        },
    };
    // Diff 1
    // Intersection results in new Type
    // In case of union we are, using only defined ones NOT crearing our new one.
    console.log(hybrid_Admin_i);
    console.log(hybrid_Admin_i.displayAdminName());
    console.log(hybrid_Admin_u);
    console.log(hybrid_Admin_u.name);
    console.log(hybrid_Admin_u.displayAdminName());
})();
