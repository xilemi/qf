// 路径解析 路径拼接
const path = require('path')
console.log(path);
// 将路径解析成对象
// console.log(path.parse('./path.js'));
//拼接 resolve() join() 默认以 终端路径为基准
// resolve 中 ./和/ 不同  /表示根目录
// join 中 相同(多使用)  生成规范化路径
// relative() 跳转 从一个目录 跳转到另一个目录   相对路径
// 解析
let str='E:/qf/JS/nodeJs/a/b/a.txt'
console.log(__dirname); //目录
console.log(__filename);//文件目录
console.log(path.basename(str)); //文件名
console.log(path.extname(str));//扩展名
console.log(process.cwd());