const Mock  = require("mockjs");
const phonePrefix = ['135','132']
// 随机生成一个 0 到 phonePrefix 的长度之间的值（0，1）
const index = Math.floor( Math.random() * phonePrefix.length )
console.log(index);
let phone = phonePrefix[index] + Mock.mock(/\d{8}/)
console.log(phone);
