<template>
  <div class="home">
    <div>
      <p>state</p>
      <p>{{$store.state.a}}</p>
      <p>{{$store.state.arr}}</p>
      <p>{{$store.state.obj}}</p>
      <!-- 使用点击事件触发 可以传入自定义参数  可以是对象 -->
      <button @click="$store.commit({type:'addCount',b:10,c:100})">添加</button>
      <button @click="$store.dispatch('addCount_async',{b:10})">添加异步</button>
    </div>
    <div>
      ...mapGetters
      <p>{{add}}</p>
      <p>{{add1(2)}}</p>
      <p>{{add2}}</p>
    </div>
    <div>
      ...mapState
      <p>{{count}}</p>
      <p>{{a}}</p>
      <p>{{arr}}</p>
      <p>{{obj}}</p>
    </div>
    <div>
      ...mapMutations
      <button @click="add111({b:10,c:100})">点击</button>
      <button @click="addCount_async({b:10,c:100})">点击异步</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapState ,mapMutations,mapActions} from 'vuex'
  export default {
    name: 'HomeView',
    components: {
    },
    mounted() {
      // console.log(this.$store);
      // console.log(this.$store.state);
      // this.$store.state.a+=1
      // // 只能作为属性调用
      // console.log("add",this.$store.getters.add);
      // //返回一个函数才能被当作函数使用
      // console.log("add1",this.$store.getters.add1(2));
      // console.log('add2',this.$store.getters.add2);
      // // mutations中的方法 使用commit 进行触发
      // console.log("nopayload",this.$store.commit('addA'));
      // // 可以传入数据

    },
    // state 和 getters 放在 computed 计算属性内    可以被动态获取 
    computed: {
      ...mapGetters(['add1', 'add2', 'add']),
      ...mapState({
        a:state=>state.a,
        count:'count',
        arr:'arr',
        obj:'obj'
      })
      // 当映射的计算属性名称和state的子节点名称相同时  可以传入一个字符串数组
      // ...mapState(['a','count','arr','obj'])
  },
  methods: {
    // 放字符串数组 同名的时候 
    // 放对象  可以取别名  也是支持荷载的
    // ...mapMutations(["addCount"]),
    ...mapMutations({
      add111:"addCount"
    }),
    ...mapActions(['addCount_async'])
  },
}
</script>