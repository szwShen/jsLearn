// let a = { n: 12 };
// let b = a;
// b = { n: 13 };
// console.log(a.n);
let a = { n: 10 };
let b = a;
b.m = b = {
  n: 20,
};
console.log(a);
console.log(b);
