export default {
    // 这种写法只能作为一个属性使用
    add(state) {
        return state.a + 1
    },
    // 要当作函数使用  就必须要要返回一个函数
    add1(state) {
        return (b) => {
            return state.a + b
        }
    },
    // 也可以传入getters使用 
    add2(state, getters) {
        return state.a + getters.add
    }
}