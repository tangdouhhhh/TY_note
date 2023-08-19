interface IPerson {
    name: string
    age: number
}
type IDType = number | string

// 为自己的 变量/函数/类 定义类型声明
declare let wName: String;
declare function foo(bar: string): string

// declare声明模块
declare module "lodash" {
    export function join(arg: any[]): any;
}