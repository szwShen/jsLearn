// console.log(a); // un
// var a=12;
// function fn(){
// 	console.log(a); //un
// 	var a=13;
// }
// fn();
// console.log(a);//12
// console.log(a);  //un
// var a=12;
// function fn(){
// 	console.log(a); //12
//     a=13;
// }
// fn();
// console.log(a);//13
// console.log(a);
// a = 12;
// function fn() {
//   console.log(a);
//   a = 13;
// }
// fn();
// console.log(a);
// var foo = 1;
// function bar() {
//   if (!foo) {
//     var foo = 10;
//   }
//   console.log(foo);//10
// }
// bar();
// var n = 0;
// function a() {
//   var n = 10;//11
//   function b() {
//     n++;
//     console.log(n);//11
//   }
//   b();
//   return b;
// }
// var c = a();
// c();//12
// console.log(n);//0
// var a = 10,
//   b = 11,
//   c = 12;
// function test(a) {
//   a = 1;
//   var b = 2;
//   c = 3;
// }
// test(10);
// console.log(a);//10
// console.log(b);//11
// console.log(c);//3
// if(!("a" in window)){
//     var a=1;
//  }
//  console.log(a); //un
// var a = 4;
// function b(x, y, a) {
//   console.log(a);
//   arguments[2] = 10;
//   console.log(a);
//   return a
// }
// a = b(1, 2, 3);//3   10
// console.log(a);//4
// var a = 4;
// function b(x, y, a) {
//   console.log(a);
//   arguments[2] = 10;
//   console.log(a);
//   return a
// }
// a = b(1, 2, 3);//3   10
// console.log(a);//4
// var foo = "hello";
// (function (foo) {
//   console.log(foo); //hello
//   var foo = foo || "world";
//   console.log(foo); //hello
// })(foo);
// console.log(foo); //hello
// var a = 9;//0
// function fn() {
//   a = 0;// 1
//   return function (b) {
//     return b + a++;
//   };
// }
// var f = fn();
// console.log(f(5));//5
// console.log(fn()(5));//5
// console.log(f(5));//6
// console.log(a);//2
// var ary = [1, 2, 3, 4];// 0234
// function fn(ary) {
//   ary[0] = 0;
//   ary = [0];//0
//   ary[0] = 100;//100
//   return ary;
// }
// var res = fn(ary);
// console.log(ary);//0234
// console.log(res);//100
// var i = 10;//11 12 13 14
// function fn() {
//   return function (n) {
//     console.log(n + ++i);
//   };
// }
// var f = fn();
// f(20);//31
// fn()(20);//32
// fn()(30);//43
// f(30);//44
// var test = (function (i) {
//   return function () {
//     alert((i *= 2));
//   };
// })(2);
// test(5);//4
// var a = 1;
// var obj = {
//   name: "tom",
// };
// function fn() {
//   var a2 = a;
//   obj2 = obj;
//   a2 = a;// 1
//   obj2.name = "jack"; //jake
// }
// fn();
// console.log(a);//1
// console.log(obj);
// var a = 1;
// function fn(a) {
//   console.log(a); //un
//   var a = 2;
//   function a() {}
// }
// fn(a);
// var a = 0, //0
//   b = 0;
// function A(a) {
//   A = function (b) {
//     alert(a + b++);
//     console.log(b);
//   };
//   alert(a++);
//   console.log(a);
// //   console.log(b);
// }
// A(1); //1
// A(2); //2

var num = 10;
var obj = { num: 20 };
obj.fn = (function (num) {
  this.num = num * 3;
  num++;//21
  return function (n) {
    this.num += n;
    num++; 
    console.log(num);
  };
})(obj.num);
var fn = obj.fn;
fn(5);
obj.fn(10);
console.log(num, obj.num);
