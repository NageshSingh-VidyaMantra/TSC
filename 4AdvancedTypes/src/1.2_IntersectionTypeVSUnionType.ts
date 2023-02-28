(() => {
  console.log("Intersection Types");

  type Admin = {
    name: string;
    privileges: string[];
    displayAdminName(): void;
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

  type hybridAdminIntersection = Admin & Employee & Staff;
  type hybridAdminUnion = Admin | Employee | Staff;

  const hybrid_Admin_i: hybridAdminIntersection = {
    name: "Anna",
    privileges: ["coffee-breaks"],
    items: [12, 25],
    startDate: new Date().toLocaleDateString(),
    displayAdminName() {
      return this.name;
    },
  };

  const hybrid_Admin_u: hybridAdminUnion = {
    name: "Aman",
    privileges: ["complementray-lunch"],
    items: [7, 27],
    startDate: new Date().toLocaleDateString(),
    displayAdminName() {
      return this.name;
    },
  };


  // Diff 1

  /*
  Intersection types can hold a subset of its components instances but can use functions of any of them.
  */
  console.log(hybrid_Admin_i);
  console.log(hybrid_Admin_i.displayAdminName());

  /*
   Union types can hold any instance of its components but can’t use functions of one.
   It can only use properties defined in all its components. 
  */
  console.log(hybrid_Admin_u);
  console.log(hybrid_Admin_u.displayAdminName());


  // Diff 2

  // with intersection all merge in to one new type so,
  // all must me included into it e.g.
  // in below case it is showing error because we didn't use all properties of
  // "hybridAdminIntersection_all"
  
  type hybridAdminIntersection_all = Admin & Employee & Staff;
  type hybridAdminUnion_desired = Admin | Employee | Staff;

  const hybrid_Admin_i_all: hybridAdminIntersection_all = {
    name: "Anna",
    privileges: ["coffee-breaks"]
  };


  // You can add desired properties **exception: function must be added
  // although we cann't use it in case of union. 
  const hybrid_Admin_u_desired: hybridAdminUnion_desired = {
    name: "Aman",
    privileges: ["complemantery-lunch"],
    displayAdminName() {
      return this.name;
    },
  };

  console.log(hybrid_Admin_i_all)
  console.log(hybrid_Admin_u_desired)
})();
