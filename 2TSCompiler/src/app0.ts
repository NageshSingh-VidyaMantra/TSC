console.log('this is app 0')
console.log('this is work in app0')
console.log('this file is included')

let button = document.getElementById('btn')!;

function onCLickHandler(message: string){
    console.log(message)
}

button.addEventListener('click', onCLickHandler.bind(null,'clicked'))
// button.addEventListener('click', onCLickHandler.bind('I am CLicked'))