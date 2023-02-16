(() => {
  console.log("Intersection Types");
  // we can also combine union type
  type productManufactureDate = string | number;
  type productExpired = boolean | string;

  type Comments = string | boolean;
  type Like = number | string;
  type Review = Comments & Like; // type is string

  type productDetails = {
    manufactureDate: productManufactureDate;
    isExpired: productExpired;
    review: Review;
  };

  let product1: productDetails;
  product1 = {
    manufactureDate: new Date().toLocaleDateString(),
    isExpired: false,
    review: "Nice",
  };

  console.log(product1);
})();
