"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string: TypeScript给我们定义标识符时, 提供的字符串类型
// String: JavaScript中字符串的包装类
var message = "hello world";
console.log(message);
//数组类型的定义
var names = ["abc", "cba"];
var names2 = ["abc", "cba"];
names.push("why");
// names.push(123) //err 加其他类型报错
//object对象类型
var myInfo = {
    name: "why",
    age: 18
};
myInfo["name"] = "codewhy";
console.log(myInfo["age"]);
