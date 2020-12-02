// function Fn() {
//   this.x = 100;
//   this.y = 200;
//   this.getX = function () {
//     console.log(this.x);
//   };
// }
// Fn.prototype.getX = function () {
//   console.log(this.x);
// };
// Fn.prototype.getY = function () {
//   console.log(this.y);
// };
// let f1 = new Fn();
// let f2 = new Fn();
// console.log(f1.getX === f2.getX);//t  //!false
// console.log(f1.getY === f2.getY);//t
// console.log(f1.__proto__.getY === Fn.prototype.getY);// t
// console.log(f1.__proto__.getX === f2.getX);//f
// console.log(f1.getX === Fn.prototype.getX);// f
// console.log(f1.constructor);//fn
// console.log(Fn.prototype.__proto__.constructor);//o
// f1.getX();//100
// f1.__proto__.getX();//un
// f2.getY();//u //!200
// Fn.prototype.getY();//un

// let array = [10, 20, 30];
// console.log('3' in array);
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
// console.log(f.sum === Fn.prototype.sum);//t
// f.sum();//20
// Fn.prototype.sum();//nan
// console.log(f.constructor);//

/* 
数组去重 */
// ~(function () {
//   function myUnique() {
//     var obj = {};
//     for (let i = 0; i < this.length; i++) {
//       let element = this[i];
//       if (typeof obj[element] !== "undefined") {
//         this[i] = this[this.length - 1];
//         this.length--;
//         i--;
//         continue;
//       }
//       obj[this[i]] = this[i];
//     }

//     console.log(obj);
//     obj = null;
//     return this;
//   }
//   Array.prototype.myUnique = myUnique;
// })();

~(function () {
  function myUnique() {
    var obj = {};
    for (let i = 0; i < this.length; i++) {
      if (typeof obj[this[i]] !== "undefined") {
        this[i] = this[this.length - 1];
        i--;
        this.length--;
        continue;
      }
      obj[this[i]] = i;
    }
    obj = null;
    return this;
  }
  Array.prototype.myUnique = myUnique;
})();
var arr = [1, 2, 3, 6, 3, 5, 4, 7];
arr.myUnique().sort((a, b) => a - b);
console.log(arr);
