// let a = { n: 12 };
// let b = a;
// b = { n: 13 };
// console.log(a.n);
// let a = { n: 10 };
// let b = a;
// b.m = b = {
//   n: 20,
// };
// console.log(a);
// console.log(b);

// console.log(a);
// fn
// var a, b, c;
// console.log(a, b, c); // u u u
// (a = 12), (b = 13), (c = 14);// 12  13 200
// function fn(a) {
//   console.log(a, b, c);// 10 13 14
//   a = 100;
//   c = 200;
//   console.log(a, b, c); //100  13 200
// }
// b = fn(10);
// console.log(a, b, c); // 12 un 14
// console.log(a);
// if (("a" in window)) {
//   var a = 13;
// }
// console.log(a);
// fn();
// function fn(){ console.log(1); }
// fn();
// function fn(){ console.log(2); }
// fn();
// var fn = function(){ console.log(3); }
// fn();
// function fn(){ console.log(4); }
// fn();
// function fn(){ console.log(5); }
// fn();
// console.log(typeof a);
// {
//   let a;
// }

// console.log(typeof a);
// var ary = [12, 23];
// function fn(ary) {
//   console.log(ary); //12 23
//   ary[0] = 100;  //100 23
//   ary = [100]; // 100
//   ary[0] = 0;// 0
//   console.log(ary);//0
// }
// fn(ary);
// console.log(ary); //100 23

// let x = 1;
// function abc() {
//   console.log(x);
//   let x = 2;
// }
// abc()
// var n = 1;
// function fn() {
//   var n = 2;
//   function f() {
//     n--;
//     console.log(n);
//   }
//   f();
//   return f;
// }
// var x = fn();
// x();
// console.log(n);

// var i = 5;
// function fn(i) {
//   return function (n) { // i 1  2
//     console.log(n + ++i);
//   };
// }
// var f = fn(1);
// f(2); //3
// fn(3)(4);// 8
// fn(5)(6);//12
// f(7);//10
// console.log(i);//5
// var i = 20;//18 19  20 18 19  18 19
// function fn() {
//   i -= 2;
//   return function (n) {
//     console.log(++i - n);
//   };
// }
// var f = fn();//i
// f(1);//18
// f(2);//18
// fn()(3);//16
// fn()(4);//14
// f(5);//15 19-5
// console.log(i);//19
// console.log(a); a = 1;
// let a = 10;
// function aa() {
//   return function () {
//     console.log(a);
//   };
// }

// let x = aa();
// x();
// !(function () {
//   console.log(a);
// })();
f = function () {
  return true;
}; //=>window.f=...
g = function () {
  return false;
};
~(function () {
  // console.log(g);
  if (!g && [] == ![]) {
    f = function () {
      return false;
    };
    function g() {
      return true;
    }
  }
})();
console.log(f());
console.log(g());
