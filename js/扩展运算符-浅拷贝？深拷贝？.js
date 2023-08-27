let a = {
    age:18,
    name:"aaa",
    address:{
        city:"上海"
    }
}

// 如果数组或者对象只要一层，值是基本类型，深拷贝。 改变第一层数据是深拷贝
let b = { ...a }
b.age = 22
console.log( a.age ) // 18

// 如果数组或对象中的值是引用类型，就是浅拷贝
let c = { ...a }
c.address.city = "杭州"
console.log( a.address.city )  //杭州
