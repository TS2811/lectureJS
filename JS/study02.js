//Block Scope ของ JS คือ {}
//Function Scope ของ JS คือ function

{
    var a = 10;
    let b = 20;
    const c = 30;
    {
        var d = 40;
        let e = 50;
        const f = 60;
        console.log(`01 ${a} ${b} ${c} ${d} ${e} ${f} `);
    }
    // console.log(`02 ${a} ${b} ${c} ${d} ${e} ${f} `); ERROR
    console.log(`03 ${a} ${b} ${c} ${d}`); // 03 10 20 30 40 50 10 20 30 40 50 60
}

// console.log(`04 ${a} ${b} ${c} ${d} ${e} ${f} `); // ReferenceError: d is not defined
console.log(`04 ${a} ${d}`);