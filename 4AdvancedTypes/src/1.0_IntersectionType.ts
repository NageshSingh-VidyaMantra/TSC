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
  // if staff 'name: number', then it will throw an error because it will convert it type to 'NEVER'
  // type hybrid_Admin = {
  // name: string | number;
  // privileges: string[];
  // startDate: string;
  // endDate?: string;
  // items: number[];
  // }

  //OR 

  type hybridAdmin = Admin & Employee & Staff; 
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

  // if we use 'name: number', then PlutoHybridAdmin will show an error, that two key with diff type exist
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
