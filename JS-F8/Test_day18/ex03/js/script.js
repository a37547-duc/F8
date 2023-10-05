/*
    TÌM HIỂU TRY CATCH

 try{

 }catch(exception){

 }
    -> Bắt các lỗi ngoại lệ
    Code logic => Để trong block try
    Nếu xảy ra lỗi => Chuyển sang block catch và lưu vào exception
*/

try {
  //   getA();
  //   console.log(a);
  const a = 10;
  // Bắn 1 lỗi logic vào catch
  if (a < 20) {
    throw new Error("a phải từ 20 trở lên");
  }
} catch (exception) {
  console.log(exception.message);
} finally {
  console.log("Đã xong");
}

// Try => cacth => finally

console.log("Chương trình tiếp");
// throw new Error("hello");
