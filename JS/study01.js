console.log("01");

//ตัวแปร

var a = 10;//สามารถเปลี่ยนค่าได้ global (ใช้ที่ไหนก็ได้)
let b = 20;//สามารถเปลี่ยนค่าได้ local (ใช้ใน {} นั้นๆเท่านั้น)
const c = 30; //ไม่สามารถเปลี่ยนค่าได้ local (ใช้ใน {} นั้นๆเท่านั้น)

//array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "Hi"];
//object
let person = { name: "John", age: 30 };

//null
let d = null;
//undefined
let e;

let data01 = "Hello World";
let data02 = 12345;

console.log('aaa' + 555 + data01 + data02);

console.log(`aaa ${555} ${data01} ${data02} ${arr} ${person} ${d} ${e}`);

console.log(arr);
console.log(person);

