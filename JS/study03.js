//value of variable

let a = 10; //integer value
let b = "Hello World"; //string value
let c = true; //boolean value
let d = 10.5; //float value

let arr = [10, 20, 30]; //array value
//เข้าถึง array value ต้องใช้ index
console.log(arr[0]);
//เข้าถึง array value ทุกตัว ต้องใช้ forEach
arr.forEach((value) => {
    console.log(`index ${arr.indexOf(value)} value ${value}`);
});
console.log(`------------------------------------------------`);

let e = {
    name: "John",
    age: 30,
    status: true,
    color: ['red', 'green', 'blue'],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
}; //object value
// เข้าถึง object value ต้องใช้ key
console.log(e.name);
console.log(e.color[1]);
console.log(e.address.street);
// เข้าถึง object value ทุกตัว ต้องใช้ forEach
Object.keys(e).forEach((key) => {
    console.log(`key ${key} value ${e[key]}`);
});
console.log(`------------------------------------------------`);

let f = null; //null value

let g; //undefined value

let h = function () {
    console.log("Hello");
}; //function value