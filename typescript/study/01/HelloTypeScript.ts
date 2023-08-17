// string: TypeScript给我们定义标识符时, 提供的字符串类型
// String: JavaScript中字符串的包装类
let message: string = "hello world"
console.log(message);

// 1.数组类型的定义

const names: string[] = ["abc", "cba"]
const names2: Array<string> = ["abc", "cba"]
names.push("why")
// names.push(123) //err 加其他类型报错


// 2.object对象类型
// 在实际开发时，不这样写，采用第二种写法
const myInfo: object = {
    name: "why",
    age: 18
}
const myInfo1 = {
    name: "why",
    age: 18
}
// myInfo["name"] = "codewhy"
// console.log(myInfo["age"]);


// 3.函数类型
// 返回值类型可以明确的指定，也可以自动进行类型推导
function greet(name: string): string {
    return name.toUpperCase()
}
const res = greet("abc")


// 4.symbol类型
// 支持定义相同的名称
const s1: symbol = Symbol("name")
const s2: symbol = Symbol("name")
const p = {
    [s1]: "ts",
    [s2]: "js"
}


// 5.匿名函数的参数
// 没有指明item类型，item却是一个string类型 （上下文类型）
const name = ["abc", "cba", "nba"]
name.forEach(item => {
    console.log(item.toUpperCase());
})


// 6.对象类型的使用
//  限定一个函数接收的参数是一个对象
type PointType = {
    x: number,
    y: number,
    z?: number  //可选类型
}
function printCoordinate(point: PointType) {
    console.log("x坐标", point.x);
    console.log("y坐标", point.y)
}


// 7.any类型
let id: any = "aaa"
id = "bbb"
id = { name: "why", level: 99 }
const infos: any[] = ["abc", 123, {}]


// 8.unknown类型
let foo: unknown = "aaa"
let foo1: any = "aaa"
foo = 123
// 默认不能进行任何操作
console.log(foo.length)  //err
console.log(foo1.length)  //err
// 要求进行类型校验（缩小），才能根据缩小后的类型，进行对应操作
if (typeof foo === "string") {
    console.log(foo.length);
}


// 9.void类型
// 当基于上下文的类型推导出返回类型为void时，但是并不强制函数一定不能返回内容
type FnType = () => void
const fo: FnType = ()=>{
    console.log(1);
    return 123
}
fo()


// 10.never类型(了解)
// 不会返回东西
function loopErr(): never {
    throw new Error()
}


// 11.元组类型
// 存放用户信息，也可以使用对象类型
// 元组数据结构中可以存放不同的数据类型，取出来的item也是有明确的类型
const info3: [string,number,number] = ["why",18,1.1]
const value2 = info3[2]


// 12.联合类型
function printID(id: number | string) {
    console.log("您的ID:", id)
  
    // 类型缩小
    if (typeof id === "string") {
      console.log(id.length)
    } else {
      console.log(id)
    }
  }
  
  printID("abc")
  printID(123)
  
export { }

