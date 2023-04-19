let a = 10
const b=123
function fn() {
    console.log(a);
}
const c='woshimoren'
// 默认导出
// export default fn
// 正常的按需导出  不论单个还是多个  都需要花括号
export { a as A, fn as FN }
export default c