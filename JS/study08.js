//Function
//4 ประเภท
//1 function no parameter no return
function a() {
    console.log("Hello");
};

//2 function have parameter no return
function b(name) {
    console.log(`Hello ${name}`);
};

//3 function no parameter have return
function c() {
    return 10 + 20;
}

//4 function have parameter have return
function d(name, age) {
    return `Hello ${name}, you are ${age} years old`;
}

a();
b("John");
console.log(c()); //30
console.log(d("John", 30));