//Function

//callback function
const a = () => {
    console.log("Hello World");
}

const b = (x) => {
    console.log(`Hey....`);
    x();//callback function
}

b(a);