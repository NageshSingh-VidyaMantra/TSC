"use strict";
(() => {
    console.log("Type Guard");
    // type hybridAdmin = Admin & Employee & Staff;
    // In case of intersection all are required
    // const hybrid_Admin: hybridAdmin = {
    //   name: "Aman",
    //   privileges: ["coffee-breaks", "complementrey-snacks"],
    //   startDate: new Date().toLocaleDateString(),
    //   // items: [12, 25]
    // };
    function displayHybridAdmin(emp) {
        console.log("Name : " + emp.name);
        // if (typeof === 'Employee') console.log("Privileges : " + emp.priviliges);
        // The in operator returns true if the specified property is in the specified object or its prototype chain.
        if ("priviliges" in emp)
            console.log("Privileges : " + emp.priviliges);
        else if ("startDate" in emp)
            console.log("Start : " + emp.startDate);
        else if ("items" in emp)
            console.log("Items : " + emp.items);
        else
            console.error('Nothing Found');
    }
    const hybrid_Admin = {
        name: "Aman",
        privileges: ["coffee-breaks", "complementrey-snacks"],
        startDate: new Date().toLocaleDateString(),
        items: [12, 25],
    };
    console.log(hybrid_Admin);
})();
