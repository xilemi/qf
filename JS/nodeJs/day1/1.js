let moduleA = require('./nodejs.js')
console.log(moduleA);
// 使用对象的方式  其实就是对moduleA进行解构
let { a, b, aa } = moduleA
console.log(a);
console.log(b);
console.log(aa);