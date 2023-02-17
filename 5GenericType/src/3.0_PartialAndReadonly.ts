(() => {
  console.log("Partial and Readonly");

  interface AddFeature {
    spoiler: boolean;
    mat: boolean;
    rbgLed: boolean;
    alloyWheels: boolean;
  }

  // By Wraping AddFeature by Partials, we can make all properties optional
  interface Vehicle extends Partial<AddFeature> {
    category: string;
    engine: string;
    impDetails: {
      manufactureDate: Date;
      engineNumber: number;
    };
    otherDetails: string[];
  }

  // By wraping Vehicle by Readonly, all properties are read-only
  const v1: Readonly<Vehicle>  = {
    category: "car",
    engine: "V8",
    impDetails: {
      manufactureDate: new Date(),
      engineNumber: 612588,
    },
    otherDetails: ["leatherSeats", "discbreak"],
    mat: true,
    rbgLed: true,
  };

  console.log(v1);
  if (v1?.spoiler) {
    console.log(v1.spoiler);
  }

  // v1.category = 'bus'; // read-only property
})();
