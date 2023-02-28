(() => {
  // c? === c: number | undefined
  function multiply(a: number, b: number, c?: number): number {
    if (c) return a * b * c;
    return a * b;
  }
  console.log(multiply(3, 6));
  console.log(multiply(3, 6, 5));

  type RandomObj = {
    random: boolean;
    car?: {
      name: string;
      tagNum: number;
      extraInformation?: {
        alloyWheels: boolean;
        automatic: boolean;
        colorNOTwhite?: string;
        lPlate?: {
          stateCode: string;
          alpha?: string;
          last4Digit: number;
        };
      };
      displayVehicleName(): void;
    };
  };

  let p1: RandomObj = {
    random: true,
    car: {
      name: "Volvo",
      tagNum: 9988,
      extraInformation: {
        alloyWheels: true,
        automatic: true,
        colorNOTwhite: "slategray",
        lPlate: {
          stateCode: "UP",
          last4Digit: 2900,
        },
      },
      displayVehicleName() {
        return this.name;
      }
    }
  };

  let p2: RandomObj = {
    random: true
  }

  function log(obj: RandomObj) {
    console.log(obj.car?.extraInformation?.lPlate?.last4Digit);
    console.log(obj.car?.displayVehicleName());
  }

  log(p1);
  log(p2);
})();
