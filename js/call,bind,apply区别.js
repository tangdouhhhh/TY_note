// var name="lucy";
// let obj={
//  name:"martin",
//  say:function () {
//  console.log(this.name);
//  }
// };
// obj.say(); //martin，this指向obj对象
// setTimeout(obj.say,0); //lucy，this指向window对象
var name = "martin";
var obj = {
    name: "lucy",
    say: function (year, place) {
        console.log(this.name + " is " + year + " born from " + place);
    }
};
var say = obj.say;
// say方法在定时器中作为回调函数执行的，this指向的是window对象
setTimeout(function () {
    // 临时改变一次this指向，并立刻执行，以参数数组的形式传入
    // say.apply(obj, ["199600", "China"])
    // 临时改变一次this指向，并立刻执行，以参数列表的形式传入
    say.call(obj, '1996000', 'China')
    // 不立刻执行，以参数列表的形式传入，bind,有的函数不需要立即调用，又想改变函数内部this指向
}, 0); //lucy is 1996 born from China,this改变指向了obj
say("1996", "China") //martin is 1996 born from China,this指向window，说明apply只是临时改变一次this指向