// 单独导入，需要使用type前缀 
// 可以让一个非 TypeScript 编译器比如 Babel、swc 或者 esbuild 知道什么样的导入可以被安全移除
import { type IDType } from './type'
const id: IDType = 100

// 什么情况下需要自己来定义声明文件呢？

// 假设html页面
let wName = "codewhy"
function foo(bar) {
    return "hello world"
  }
