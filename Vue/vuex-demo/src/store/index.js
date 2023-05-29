import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* 
分离 state getters mutations actions  

分模块 可以  理解为子store,同样也有 state getters(可访问根  state getters) mutations action 
 
 
没有设置命名空间
state访问要通过 模块名
getters mutations actions  都是直接存在$stroe 中对应的位置  直接访问
*/ 



import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import mdA from './mdA/mdA'



export default new Vuex.Store({
  state: {
    // 这里的数据从哪里获取来呢?
    a: 1,
    arr: [1, 2, 3, 4, 5],
    obj: {
      name: 'xile',
      age: 123
    },
    count: 10
  },
  // 计算属性 类似计算属性  当 引用的数据更新后 缓存才会被更新
  getters,
  // 只能在使用这里的方法修改 state的数据 不能异步
  mutations,
  // 可以异步的方法 区别?
  actions,
  modules: {
    //当没有写命名空间时   getters mutations actions  还是存在 $store内  名字和原始的一样 
    // 有命名空间时   名称变为 mdA/isAge
    mdA
  }
})