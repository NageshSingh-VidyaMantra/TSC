"use strict";
(() => {
    console.log('Index Properties');
    const errorContainer = {
        'email': 'Not a valid email',
        404: 'URL not found',
        userName: 'Username should not start with number'
    };
    function throwError(error) {
        if (error === 'emailError')
            console.log(errorContainer.email);
        else if (error === 404)
            console.log(errorContainer[404]);
        else if (error === 'userName')
            console.log(errorContainer.userName);
    }
    throwError('emailError');
    throwError(404);
    throwError('userName');
})();
