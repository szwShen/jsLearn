/* <!--
 * @Author: your name
 * @Date: 2020-11-27 18:05:16
 * @LastEditTime: 2020-11-27 18:05:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \szwjob\week01\day02\03.html
--> */
Object.prototype.hasPubProperty = function (property) {
  let x = ["number", "string", "boolean"],
    y = typeof property;
  if (!x.includes(y)) return false;
  let n = property in this,
    m = this.hasOwnProperty(property);
  return n && !m;
};
console.log(Array.prototype.hasPubProperty("push"));
console.log([].hasPubProperty("push"));
