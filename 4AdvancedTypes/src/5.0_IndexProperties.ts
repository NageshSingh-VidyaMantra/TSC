(() => {
  console.log('Index Properties')
  
  interface ErrorContainer {
    //Here we can define structure of n key-value pair 
    [key: string]: string;
    [key: number]: string;
  }

  const errorContainer: ErrorContainer = {
    'email': 'Not a valid email',
    404: 'URL not found',
    userName: 'Username should not start with number'
  }

  function throwError(error: string | number){
    if(error === 'emailError') console.log(errorContainer.email)
    else if(error === 404) console.log(errorContainer[404]);
    else if(error === 'userName') console.log(errorContainer.userName);
  }

  throwError('emailError')
  throwError(404)
  throwError('userName')
})();