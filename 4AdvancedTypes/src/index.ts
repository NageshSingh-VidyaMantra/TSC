(() => {
  console.log("Optional Chaining");
  const fetchedData = {
    name: "Octopus",
    properties: {
      numOfLegs: 8,
      numOfhands: 0,
      venomous: {
        lvl1: "qwerty",
        lvl2: "lkjhg",
        lvl3: "poilkj",
        lvl4: "vbfgrt",
      },
    },
  };

  // Optional Chaining help us to check if the property exist and if 
  // it exist then access it.
  console.log(fetchedData.properties?.venomous?.lvl3);
})();
