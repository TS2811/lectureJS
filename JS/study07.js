//Control Flow: break, continue, return ใน loop

for (let n = 0; n < 10; n++) {
    if (n === 5) {
        break;
    }
    console.log(n);
}
console.log(`------------------------------------------------`);
for (let o = 0; o < 10; o++) {
    if (o % 2 === 0) {
        continue;
    }
    console.log(o);
}
console.log(`------------------------------------------------`);
for (let p = 0; p < 10; p++) {
    if (p === 5) {
        return;//หยุดการทํางานทั้งไฟล์
    }
    console.log(p);
}
console.log(`------------------------------------------------`);