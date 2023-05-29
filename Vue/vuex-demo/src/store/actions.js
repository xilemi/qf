export default {
    // 可以是异步  使用context获取到store  但是 不等于原store  
    // 可以使用箭头函数 配合this? 为什么要用context
    // 返回一个promise实例 那么可以在外部套一个promise
    addCount_async(context, payload) {
      console.log(context);
      setTimeout(() => {
        console.log(context.state.a + payload.b);
        context.commit('addCount',payload)
      }, 2000);
      return 1
    },
    addCount_async1(context, payload) {
      return new Promise(reslove => {
        setTimeout(() => {
          console.log(context.state.a + payload.b);
          context.commit('addCount', payload)
          reslove(1)
        }, 2000);
      })
    }
  }
