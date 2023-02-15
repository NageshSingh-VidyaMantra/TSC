(function () {
  function postRequest(URL: string): void {
    console.log(URL);
    /*
    dummy fetch post req which is successful,
    No need to turn nothing
    */
  }

  /*
  below will never return anything even it will not return undefined
  */
  function throwError(errorCode: number, message: string): never {
    throw { errorCode, message };
  }

  console.log(postRequest("www.qwerty.com/?name=poi"));
  console.log(typeof postRequest("www.qwerty.com/?name=poi"));

  console.log(throwError(404, "File NOT Found"));
  console.log(typeof throwError(404, "File NOT Found"));
})();
