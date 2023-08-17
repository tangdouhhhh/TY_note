// 块级作用域
{
    let a = 1
    var b = 2
}
console.log(a); //err
console.log(b); //2
// for循环计算器,很合适使用let
for(let i = 0; i<10 ;i++){

}
console.log(i);
// 不存在变量提升
console.log(bar); //err
let bar = 2;
//暂时性死区(TDZ)： 声明变量之前，变量都是不可用
if(true){
    // TDZ开始
    tmp = 'abc' //err
    let tmp //TDZ结束
    tmp = 123
}
function bar(x = y, y = 2) {
    return [x, y];
  }
  bar(); // 报错
// 不允许重复声明
let a = 1
let a = 2 


