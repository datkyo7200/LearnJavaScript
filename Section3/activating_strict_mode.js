"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive :D");

// Báo lỗi khi sử dụng delete.
// function getMyName(name) {
//   console.log(name);
// }
// delete getMyName;
 //không có gì xảy ra mặc dù delete không xóa được hàm

 // Các tham số của hàm không được trùng nhau
// function getProfile(name, name, age) {
//code
// }
 // chạy bình thường.

//Không cho phép khai báo biến dưới dạng hệ nhị phân.
// var num = 010100101010101;

 //Không được phép ghi đè lên thuộc tính chỉ được phép đọc.
// var obj = {};
// Object.defineProperty(obj, "ver", { value: 1, writable: false });
// obj.ver = 10;
 //không có gì xảy ra

 //Không sử dụng được with
// var bar = 1;
// var foo = 2;
// with (bar) {
//   console.log(foo);
// }

 //Không cho phép khai báo biến trong eval
// eval("var x = 4");
// console.log(x);

 // Không chấp nhận khai báo các keyword
    // implements
    // interface
    // let
    // package
    // private
    // protected
    // public
     // static
     // yield
    // arguments
