// 实现去重
let arr = [ 1,2,3,3,4]
let mySet = new Set()
arr.forEach( item => mySet.add(item))
arr = Array.from( mySet.values() )
console.log( arr )
// 并集
const mysetA = new Set([1,2,3,4])
const mysetB = new Set([2,3,5])
const myset = new Set([...mysetA,...mysetB])
console.log(myset)
// 交集
const myset1 = new Set([...mysetA].filter(item => mysetB.has(item)))
console.log(myset1)
// 差集
const myset2 = new Set([...mysetA].filter(item => !mysetB.has(item)))
console.log(myset2);
// 进行迭代
const myset3 = myset2.values()
console.log(myset3.next().value);

