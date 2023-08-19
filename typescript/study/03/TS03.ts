// 1.枚举类型
enum Direction {
    LEFT = "HH",
    RIGET = "TT"
}
function turnDirection(direction: Direction) {
    switch (direction) {
        case Direction.LEFT:
            console.log('LEFT');
            break;

        default:
            break;
    }
}

//2.泛型
/* 什么是类型参数化
封装一个函数，传入一个参数，并且返回这个参数 */
function fn(params: number): number {
    return params
}
fn(12)
// 类型变量，作用于类型，而不是值
function fn1<Type>(params: Type): Type {
    return params
}
fn1(12) //方式一：通过类型推导，自动推出我们传入变量的类型
fn1<number>(14) //方式二：<类型>将类型传递给参数

// 泛型补充
function foo<T, E>(a1: T, a2: E) { }

// 泛型接口的使用
interface IKun<Type = string> {
    name: Type,
    age: number,
    slogan: Type
}
const ikun: IKun = {
    name: "why",
    age: 18,
    slogan: "哈哈哈"
}

// 泛型约束
/*  有时候我们希望传入的类型有某些共性，但是这些共性可能不是在同一种类型中
    传入的类型必须有这个属性，也可以有其他属性，但是必须至少有这个成员
*/
interface ILength {
    length: number
}
function getLength<T extends ILength>(args: T) {
    return args.length
}
getLength("abc")
getLength({ length: 100, name: "why" })

// 泛型参数使用约束
interface IKu {
    name: string,
    age: number,
    slogan: string
}

// keyof操作符获取接口的所有属性键，相当于联合类型

type ikunKeys = keyof IKu //相当于 "name" | "age" | "slogan"
function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
    return obj[key]
}
const info = {
    name: "why",
    age: 18
}
const name = getObjectProperty(info, "name")


export { }