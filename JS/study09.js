//Function Expression (Anonymous/Arrow)
//Anonymous Function
let myFunction = function () {
    console.log("Hello World");
};

//Arrow Function
let myFunction2 = () => {
    console.log("Hello World");
};

//Arrow Function with Parameter
let myFunction3 = (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old`);
};

//Arrow Function with Return
let myFunction4 = (name, age) => `Hello ${name}, you are ${age} years old`;

myFunction();
myFunction2();
myFunction3("John", 30);
console.log(myFunction4("John", 30));