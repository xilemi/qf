export default {
    // 传入state 使用
    addCount(state, payload) {
     console.log(state.a+payload.b+payload.c);
    }
  }