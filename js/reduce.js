// 1. 数组计算总和
const arr = [1,2,3,4,5,6,7]
const sum = arr.reduce((pre,cur)=>{
    return pre+cur
})
console.log(sum);
const arr1 = [1,2,3,4,5,6,7]
// 参数，2为初始值，调用7次
const sum1 = arr.reduce((pre,cur)=>{
    return pre +cur
},2)
console.log(sum1)
// 2.数组扁平化
const arr2 = [1,[2,[3,[4,5]]],6]
const newArr = (arr)=>{
    return arr.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)?newArr(cur):cur)
    },[])
}
console.log(newArr(arr2));
// 3.数组去重
const arr3 = [1,2,3,4,5,3,2,1,6,4,7,8]
const resultArr = arr3.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
        pre.concat(cur)
    }else{
        return pre
    }
},[])
console.log(resultArr);
// arr: 表示将要原数组
// pre:表示上一次调用回调时的返回值，或者初始值init
// cur:表示当前正在处理的数组元素
// index:表示正在处理的数组元素的索引，若提供init值，则索引为0，否则索引为1
// init: 表示初始值
