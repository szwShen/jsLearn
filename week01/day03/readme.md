<!--
 * @Author: your name
 * @Date: 2020-11-28 12:30:10
 * @LastEditTime: 2020-11-28 12:36:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \szwjob\week01\day03\readme.md
-->

原型链
每个函数或者类都有一个 prototype 属性 这个属性是一个对象 用来存储实例公共的属性和方法
这个 prototype 对象 有个 constructor 储存的是函数本省
Fn.prototype.constructor=Fn
每个对象数据类型的值 有个_proto_指向 所属类的原型

原型链  查找机制
先查找自己私有的属性 有则调用,没有继续找,
找不到的话则基于_proto_属性查找所属类原型上的方法, 如果没有则继续忘上找,一直找到Object.prototype为止