//parse(str,'数据的分隔符'，'键值对的分隔符 ') 转成对象
// stringify 转成字符串 参数相同
let querystring = require('querystring')
let str = 'a=12&b=12&c=sdjfjsga'
// 转成对象
console.log(querystring.parse(str));
let obj = { a: '12', b: '12', c: 'sdjfjsga' }
// 转成字符串
console.log(querystring.stringify(obj));