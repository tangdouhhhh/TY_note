const arr = [1,2,4]
console.log(arr.splice(1, 1, 'a', 'b'),arr)
const string = 'aaa'
const string1='bbb'
console.log(string.concat('ccc',string1))
const str = 'Hello World';
console.log(str.includes('World'));  // 输出 true
console.log(str.includes('world'));  // 输出 false，因为区分大小写
console.log(str.includes('World', 6));  // 输出true
function fn() {
    var num = 10
    function fun() {
      console.log(num)
    }
    return fun
  }
  var f = fn()
  f()