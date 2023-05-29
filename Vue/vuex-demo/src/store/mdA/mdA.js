export default  {
    namespaced:"mdA",
    state() {
      return {
        name: 'xile',
        age:19
      }
    },
    getters: {
      isAge(state) {
        return state.age>18
      }
    },
    mutations: {
      getName(state) {
        state.name+'xile'
      }
    },
    actions: {
      getName_async(state) {
        setTimeout(() => {
          state.name+'xile'
        }, 2000);
      }
    }
  }
