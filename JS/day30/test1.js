import { A, FN } from './test.js'
let c = A
const b = 123
// 模块在别的模块被引入 没有修改 可以接直接 写export 
export {log} from './test2.js'
function fn1() {

    console.log(c);
}
let a=100
export { fn1, a as a1}