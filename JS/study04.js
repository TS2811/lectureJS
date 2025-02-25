//operator
//+ - * / % ** ++ --
// == != === !== > < >= <=
// ! && ||

let a = 10;
let b = '10';

console.log(a == b); //true
console.log(a === b); //false
console.log(a != b); //false
console.log(a !== b); //true

console.log(a + b); //1010
console.log(a - b); //0
console.log(a * b); //100
console.log(a / b); //1
console.log(a % b); //0

console.log(a ** b); //10000000000

console.log('bangna' < 'bangkok'); //true

//ternary operator
//_____?_____:_____
let c = 10;
let d = c > 5 ? 'a' : 'b';
console.log(d);

//nullish coalescing operator
//null ?? value
let e = null;
let f = 20;
let h;

console.log(e ?? 'a'); //a
console.log(f ?? 'a'); //20
console.log(h ?? 'a'); //aF


