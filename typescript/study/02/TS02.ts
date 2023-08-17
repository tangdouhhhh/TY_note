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
    kouhao: "你干嘛, 哎呦",
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


