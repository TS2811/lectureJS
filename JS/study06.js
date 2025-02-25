//Control Flow: loop

//while , do-while , for , forEach

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
console.log(`------------------------------------------------`);

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
console.log(`------------------------------------------------`);

for (let k = 0; k < 5; k++) {
    console.log(k);
}
console.log(`------------------------------------------------`);

let l = [10, 20, 30];
for (let value of l) {
    console.log(value);
}
console.log(`------------------------------------------------`);
l.forEach((value) => {
    console.log(value);
});
console.log(`------------------------------------------------`);
let sum = 0;
for (let value of l) {
    sum += value;
}
console.log(sum);
console.log(`------------------------------------------------`);

let m = { a: 10, b: 20, c: 30 };
for (let key in m) {
    console.log(key, m[key]);
}
Object.keys(m).forEach((key) => {
    console.log(`key ${key} value ${m[key]}`);
});
