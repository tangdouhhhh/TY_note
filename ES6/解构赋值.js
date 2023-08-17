const cat = {
    lives : 9,
    jumps : ()=>{
        this.lives --;
    },
    jump:function(){
        this.lives --;
    }
}
// 对象不构成单独的作用域，导致jumps箭头函数指向的是全局作用域。
cat.jumps()
console.log( cat.lives )
// 普通函数的this是指向调用者的
cat.jump()
console.log( cat.lives )
