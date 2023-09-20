// mã code java
/*
var x= +prompt("nhap gia tri x:");
var y= +prompt("nhap gia tri y:");
var z = x + y;
alert("ket qua = " + z);
 */
//---------------------------------------
// comment 1 dong
/* comment nhieu dong */
/*
 I. cac cau lenh lay input dau vao
 1. dung prompt
 2. thong qua value cua phan tu html input
//------------------------------------------
 II. Dau ra la ham alert
 1. cac cau lenh output dau ra:
 - alert ();
 - console.log();
 - document.write()
 - thay doi noi dung cua phan tu html thong qua thuoc tin innerHTML.

//var number = +prompt("enter number:");
let number = document.getElementById("number").value;
console.log("xin chao")
//document.write("xin chao cac bo");
document.getElementById("message").innerHTML ="<h2>xin chao cac me</h2>"; // Doi noi dung cua doan van khac

// ----------------------------- BAI TAP------------------
var x = +prompt("Enter x: ");
var y = +prompt("Enter y: ");
var x + y;
document.write("return z: " +z);
*/
function  result() {
    var x = +document.getElementById("x");
    var y = +document.getElementById("y");
    var z = x + y;
    document.getElementById('message').innerHTML ="ketqua:" +z
}

