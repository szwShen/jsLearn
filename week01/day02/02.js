// var szw = (function () {
//   let fn = function () {
//     console.log("szw");
//   };
//   return {
//     init: function () {
//       return fn();
//     },
//   };
// })();
// szw.init();
// a = 12;
// function fn() {
//   console.log(a);
//   a = 13;
// }
// fn();
// console.log(a);
// var fullName = "language";
// var obj = {
//   fullName: "javascript",
//   prop: {
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
// };
// console.log(obj.prop.getFullName()); //un
// var test = obj.prop.getFullName;
// console.log(test());//language
// var name = "window";
// var Tom = {
//   name: "Tom",
//   show: function () {
//     console.log(this.name);
//   },
//   wait: function () {
//     var fun = this.show;
//     fun();
//   },
// };
// Tom.wait(); //window
// function fun() {
//   this.a = 0;
//   this.b = function () {
//     alert(this.a);
//   };
// }
// fun.prototype = {
//   b: function () {
//     this.a = 20;
//     alert(this.a);
//   },
//   c: function () {
//     this.a = 30;
//     alert(this.a);
//   },
// };
// var my_fun = new fun();
// my_fun.b();//0
// my_fun.c();//30

// window.val = 1;//2 4
// var json = {
//   val: 10,//20
//   dbl: function () {
//     this.val *= 2;
//   },
// };
// json.dbl();
// var dbl = json.dbl;
// dbl();
// json.dbl.call(window);
// alert(window.val + json.val);//4   20
// (function () {
//   var val = 1; //
//   var json = {
//     val: 10, //20
//     dbl: function () {
//       val *= 2;
//     },
//   };
//   json.dbl();
//   alert(json.val + val); //12
// })();
// function C1(name) {
//   if (name) {
//     this.name = name;
//   }
// }
// function C2(name) {
//   this.name = name;
// }
// function C3(name) {
//   this.name = name || "join";
// }
// C1.prototype.name = "Tom";
// C2.prototype.name = "Tom";
// C3.prototype.name = "Tom";
// alert(new C1().name + new C2().name + new C3().name);//
var foo = {
  bar: function () {
    console.log(this);
  },
};
foo.bar(); //foo
(foo.bar())(); //window
