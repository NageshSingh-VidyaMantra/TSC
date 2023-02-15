// Code goes here!
(function(){
// Besides properties, we can also mark methods as "private"
class Department {
  name: string; //public by default
  private employees: string[] = []; // private is a modifier
  // to create obj with default values
  constructor(inputName: string) {
    this.name = inputName;
  }
  // To create a method
  // this will only refer to an instance that based on the department class
  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  displayEmployeesInformation() {
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
accounting.addEmployee("Lokesh");
accounting.addEmployee("Ramesh");

// Not a desired behaviour, because it is directly pushing it into
// employees array, what f we need some kind of validation.
// accounting.employees[2] = 'Anna';

accounting.displayEmployeesInformation();

// const accountingCopy = { name: 'dummy',describe: accounting.describe };
// accountingCopy.describe();

// 3 modifier in TS
// > public
// > private
// > readonly

/*
shorten the following code in the best possible way

    class Product {
      title: string;
      price: number;
      private isListed: boolean;
     
      constructor(name: string, pr: number) {
        this.title = name;
        this.price = pr;
        this.isListed = true;
      }
    }

    Answer

    class Product {
      private isListed: boolean;
     
      constructor(public title: string, public price: number) {
        this.isListed = true;
      }
    }
*/
})()