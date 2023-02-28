(() => {
  console.log("Intersection Types");

  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: string;
    endDate?: string;
  };

  type Staff = {
    name: string;
    items: number[];
  };

  // type hybridAdmin = Admin | Employee | Staff; // A union type describes a value that can be one of several types.
  type hybridAdmin = Admin & Employee & Staff; // An intersection type combines multiple alias types into one.

  const hybrid_Admin: hybridAdmin = {
    name: "Anna",
    privileges: ["coffee-breaks"],
    items: [12, 25],
    startDate: new Date().toLocaleDateString(),
  };

  console.log(hybrid_Admin);

  // with interface

  interface PlutoAdmin {
    name: string;
    privileges: string[];
  }

  interface PlutoEmployee {
    name: string;
    startDate: string;
    endDate?: string;
  }

  interface PlutoStaff {
    name: string;
    items: number[];
  }

  interface PlutoHybridAdmin extends PlutoAdmin, PlutoEmployee, PlutoStaff {
    planet: string;
  }

  const pluto_Hybrid_Admin: PlutoHybridAdmin = {
    name: "XLR8",
    privileges: ["coffee-breaks"],
    items: [12, 25],
    startDate: new Date().toLocaleDateString(),
    planet: "pluto",
  };

  console.log(pluto_Hybrid_Admin);
})();
