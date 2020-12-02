<!--
 * @Author: your name
 * @Date: 2020-12-01 13:59:47
 * @LastEditTime: 2020-12-01 18:23:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \szwjob\week01\day04\readme.md
-->
function Fn(num) {
	this.x = this.y = num;
}
Fn.prototype = {
	x: 20,
	sum: function () {
		console.log(this.x + this.y);
	}
};
let f = new Fn(10);
console.log(f.sum === Fn.prototype.sum);//()
f.sum();
Fn.prototype.sum();
console.log(f.constructor);/??? 自己没有的属性找他爹, 爹是obj

function Fn() {
  let a = 1;
  this.a = a;
}
Fn.prototype.say = function () {
  this.a = 2;
};
Fn.prototype = new Fn();
let f1 = new Fn();

Fn.prototype.b = function () {
  this.a = 3;
};
console.log(f1.a);
console.log(f1.prototype);
console.log(f1.b);
console.log(f1.hasOwnProperty("b"));
console.log("b" in f1);
console.log(f1.constructor == Fn);

hasOwnProperty  自己的属性不是原型链上的属性
求数组的最值


function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun(m, n);
    },
  };
}
var c = fun(0).fun(1); //
c.fun(2);
c.fun(3);
研究这种sb题目是否有必要??