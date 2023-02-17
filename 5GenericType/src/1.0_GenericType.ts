(() => {
  console.log("Generic Type");

  function merge1(obj1: any, obj2: any) {return {...obj1, obj2}}
  function merge2<O1, O2>(obj1: O1, obj2: O2) {return {...obj1, obj2}}

//   let newObj1 = merge1({firstName: "Anna"},{age:45})
  let newObj1 = merge1({firstName: "Anna", lastName: "Bell"},{age:25})
  let newObj2 = merge2({firstName: "Amma", lastName: "Watson"},{age:35})
  let newObj3 = merge2({firstName: "Light", hobbies: ["Writing"]},{age:28})
  let newObj4 = merge2({firstName: "Neil"},{age:45})

  // Below 'any' takes gender property even if does not exist.
  // But 'generics' alert us that we are accessing undeclared variable. 
  console.log(newObj1.firstName +' '+ newObj1.lastName +' G : '+ newObj1.gender);
  // console.log(newObj1.firstName +' '+ newObj2.lastName +' G : '+ newObj2.gender);
  console.log(newObj3.firstName +' '+ newObj3.hobbies);
  console.log(newObj4.firstName);
})();