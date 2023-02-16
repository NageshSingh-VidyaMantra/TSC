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

  type hybridAdmin = Admin & Employee & Staff;

  const hybrid_Admin: hybridAdmin = {
    name: "Anna",
    privileges: ["coffee-breaks"],
    items: [12, 25],
    startDate: new Date().toLocaleDateString(),
  };

  console.log(hybrid_Admin);

})();
