//Exception Handling: Error/Exception
//1. try-catch
//2. try-catch-finally

try {
    console.log(data1);
} catch (error) {
    console.log("พบข้อผิดพลาด ติดต่อผู้ดูแล");
    // console.log(error);
    // console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
} finally {
    console.log("ขอบคุณที่ใช้บริการ");
}

