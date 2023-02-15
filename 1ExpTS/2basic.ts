const emp = {
    name : 'aman',
    roles: [2, 'coder']
}

const person:{
    name: string,
    age: number,
    hobbies : string[],
    role:[number, string]
} = {
    name: 'varun',
    age: 17,
    hobbies : ['reading','coding'],
    role:[1,'author']
};

enum Direction {
    UP='UP', 
    DOWN='DOWN', 
    LEFT='LEFT', 
    RIGHT = 55,
    DIAGONAL
}

console.log(Direction.UP)
console.log(Direction.DIAGONAL)