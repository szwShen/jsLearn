<!--
 * @Author: your name
 * @Date: 2020-11-27 13:54:44
 * @LastEditTime: 2020-11-27 15:53:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \szwjob\week01\day02\readme.md
-->
var a = 4;
function b(x, y, a) {
  console.log(a);
  arguments[2] = 10;
  console.log(a);
}
a = b(1, 2, 3);//3   10
console.log(a);//4

var a = 9;//0  
function fn() {
  a = 0;// 1
  return function (b) {
    return b + a++;
  };
}
var f = fn();
console.log(f(5));//6
console.log(fn()(5));//6
console.log(f(5));//7
console.log(a);//0

var a = 1;
function fn(a) {
  console.log(a); //un
  var a = 2;
  function a() {}
}
fn(a);

var a = 0,//0
  b = 0;
function A(a) {
  A = function (b) {
    alert(a + b++);
  };
  alert(a++);
}
A(1);//1
A(2);//2\

设计模式,单例模式, 工厂模式
形参赋值=>变量提升=>执行函数
重写slice
function C1(name) {
  if (name) {
    this.name = name;
  }
}
function C2(name) {
  this.name = name;
}
function C3(name) {
  this.name = name || "join";
}
C1.prototype.name = "Tom";
C2.prototype.name = "Tom";
C3.prototype.name = "Tom";
alert(new C1().name + new C2().name + new C3().name);//F

var foo = {
  bar: function () {
    console.log(this);
  },
};
foo.bar(); //foo
(foo.bar())(); //window
 函数优先级的问题 .() [] 从左往右