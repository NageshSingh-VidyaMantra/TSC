// Code goes here!
(function () {
  // Besides properties, we can also mark methods as "private"
  class Department {
    private employees: string[] = [];
    constructor(private readonly id: number, public name: string) {}

    describe(this: Department) {
      console.log(
        "Department: " + this.name + "and Department ID is " + this.id
      );
    }

    addEmployee(employee: string) {
      this.employees.push(employee);
    }

    displayEmployeesInformation() {
      console.log(this.employees);
    }
  }

  // ONly inheritance from 1 class
  // Department is base class
  class ITDepartment extends Department {
    constructor(id: number, public admins: string[]) {
      super(id, "IT"); // super here calls the constructor of base class
      // add new IT properties after super
    }
  }

  const accounting = new Department(1001, "Accounting");
  /*
    class ITDepartment extends Department {}
    const it = new ITDepartment("IT", 1010);
    it will work because it will use default constructor of base class as 
    it is inherited from base class
  */
  const it = new ITDepartment(1010,['Stu']);

  console.log(accounting);
  console.log(it);
  accounting.describe();
  accounting.addEmployee("Aman");
  accounting.addEmployee("Anna");

  accounting.displayEmployeesInformation();
})();
