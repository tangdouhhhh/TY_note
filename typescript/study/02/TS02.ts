// 1.类型别名
type MyNumber = number
const age: MyNumber = 18


// 2.接口
// 多次声明
interface Point {
    x: number
    y: number
}
interface Point {
    z?: number
}
const point: Point = {
    x: 100,
    y: 200
}
// 继承
interface IPerson {
    name: string
    age: number
}

interface IKun extends IPerson {
    kouhao: string
}

const ikun1: IKun = {
    kouhao: "你干嘛",
    name: "kobe",
    age: 30
}


// 3.交叉类型
interface so {
    name: string
    age: number
}
interface IPer {
    sax: string
}
const ik: so & IPer = {
    name: 'ty',
    age: 11,
    sax: 'a'
}

// 4.类型断言
const myEl = document.getElementById("my-img")
const myEll = document.getElementById("my-img") as HTMLImageElement


// 5.非空类型断言(还是有安全隐患的，慎用)
// 因为mes可能为undefined,当确保mes一定有值 可以用非空类型断言
function print1(mes?: string) {
    console.log(mes!.toUpperCase());
}

//  6.字面量类型
const mee = "heoo"
let mes: "hello world" = "hello world"  //没太大意义
// 结合联合类型使用
type MethodType = "get" | "post"
function request(url: string, method: MethodType) { }
request("http://coder.com/api", "post")


// 7.类型缩小
// typeof
function print(id: number | string) {
    if (typeof id === "string") { }
    else { }
}
// ===
type Direction = "left" | "right"
function dir(direction: Direction) {
    if (direction === "left") { }
}
// instanceof
function printDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.getTime())
    } else { }
}
// in
interface ISwim {
    swim: () => void
}
interface IRun {
    run: () => void
}
function move(animal: ISwim | IRun) {
    // animal.swim()  //err
    if("swim" in animal){
        animal.swim()
    }
}
const fish: ISwim ={
    swim() { },
}
move(fish)


// 8.函数类型
// 函数表达式
type BarType = (num1:  number)=> number
function fn(params: number) {
    return 12
}
// 函数调用签名
interface IB {
    name: string
    (num1:number): number
}
const bar: IB = (num1: number):number =>{
    return 12
}
bar.name ="a"
bar(12)


// 9.重载签名
// 只能将两个数字/两个字符串相加
function add(arg1: number, arg2: number): number
function add(arg1: string, arg2: string): string
function add(arg1: any, arg2: any): any {
    return arg1 + arg2 
}
add(10, 20)
add("aaa","bbb")


// 10.类

export {}

