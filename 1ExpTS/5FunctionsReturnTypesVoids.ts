(() => {
    function add(num1: number, num2: number): string {
      return String(num1) + String(num2);
    }
  
    function display(hobbies: string[]) {
      hobbies.forEach((hobby) => console.log(hobby));
    }
  
    function display1(hobbies: string[]): void {
      hobbies.forEach((hobby) => console.log(hobby));
      return;
    }
  
    function display2(hobbies: string[]): undefined {
      hobbies.forEach((hobby) => console.log(hobby));
      return;
    }
  
    let favHobbies: string[];
    favHobbies = ["qwe", "asd", "zxc"];
    display(favHobbies); // all are same
    display1(favHobbies); // all are same
    display2(favHobbies); // all are same
  
    add(5, 6);
  })();
  
  /*
  NOTE
   void depicts either we are returning undefined or nothing.
   undefined depicts that we are returning undefined, thats why I 
   have written ' return;'
  
   undefined is a different type.
   let money : undefined;
  */