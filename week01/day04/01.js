// function Foo() {
//   getName = function () {
//     console.log(1);
//   };
//   return this;
// }
// Foo.getName = function () {
//   console.log(2);
// };
// Foo.prototype.getName = function () {
//   console.log(3);
// };
// var getName = function () {
//   console.log(4);
// };
// function getName() {
//   console.log(5);
// }

// new new Foo().getName();//2
// function Fn(num) {
//   this.x = this.y = num;
// }
// Fn.prototype = {
//   x: 20,
//   sum: function () {
//     console.log(this.x + this.y);
//   },
// };
// let f = new Fn(10);
// console.log(f.sum === Fn.prototype.sum);
// f.sum();
// Fn.prototype.sum();
// console.log(f.constructor);
// function Fn() {
//   let a = 1;
//   this.a = a;
// }
// Fn.prototype.say = function () {
//   this.a = 2;
// };
// Fn.prototype = new Fn();
// let f1 = new Fn();

// Fn.prototype.b = function () {
//   this.a = 3;
// };
// console.log(f1.a);
// console.log(f1.prototype);
// console.log(f1.b);
// console.log(f1.hasOwnProperty("b"));
// console.log("b" in f1);
// console.log(f1.constructor == Fn);

// ~(function () {
//   function checkoutNum(num) {
//     return isNaN(num) ? 0 : num;
//   }
//   function plus(num) {
//     return this + checkoutNum(num);
//   }
//   function minus(num) {
//     return this - checkoutNum(num);
//   }
//   Number.prototype.minus = minus;
//   Number.prototype.plus = plus;
// })();
// let n = 10;
// let m = n.plus(10).minus(5).plus(6);
// console.log(m); //=>15（10+10-5）
// function call(context) {
//   context = content || window;
//   let res,
//     args = [];
//   for (let i = 1; i < arguments.length; i++) {
//     args.push(arguments[i]);
//   }
//   context.fn = this;
//   res = context.fn(...args);
//   delete context.fn;
//   return res;
// }

// function call(context) {
//   context = context || window;
//   var res,
//     args = [];
//   for (let i = 1; i < arguments.length; i++) {
//     args.push(arguments[i]);
//   }
//   context.fn = this;
//   res = context.fn(...args);
//   delete context.fn;
//   return res;
// }
// function fn1() {
//   console.log(1);
// }
// function fn2() {
//   console.log(2);
// }
// fn1.call(fn2);
// fn1.call.call(fn2);
// // Function.prototype.call(fn1);
// Function.prototype.call.call(fn1);
// let ary = [12, 24, 13, 8, 35, 15];
// var max = ary[0];
// ary.forEach((ele) => {
//   ele > max ? (max = ele) : max;
// });
// console.log(max);
// function fun(n, o) {
//   console.log(o);
//   return {
//     fun: function (m) {
//       return fun(m, n);
//     },
//   };
// }
// var c = fun(0).fun(1); //
// c.fun(2);
// c.fun(3);
// var name = "szw";

// let obj = {
//   name: "OBJ",
//   fn: function () {
//     let _this = this;
//     setTimeout(function () {
//       _this.name = "ooo";
//     }, 1000);
//   },
// };
// obj.fn();
// setTimeout(function () {
//   console.log(obj);
//   console.log(name);
// }, 2000);

// var name = "szw";

// let obj = {
//   name: "OBJ",
//   fn: function () {
//     // this.name = "ooo";
//     console.log(this);
//   },
// };
// obj.fn();

var arr = [1, 2, 3, 5, 4, 5];
// var max = Math.max.apply(null, arr);
// var max=Math.max(...arr)
var max=Math.max.call(null,...arr)
console.log(max);