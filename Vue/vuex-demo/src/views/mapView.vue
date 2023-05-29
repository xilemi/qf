<template>
  <div class="home">
   <p>
    a:{{a}}
   </p>
     <p>
      arr:{{arr}}
     </p>
      <p>
        add:{{add}}
      </p>
      <p>
        add1:{{add1(3)}}
      </p>
      <p>
        add2:{{add2}}
      </p>
      <button @click="addCount()">添加</button>
      <button @click="addCount_async()">添加异步</button>
      <button @click="handler()">actions的返回值</button>
  </div>
</template>

<script>
  import { mapGetters, mapState ,mapMutations,mapActions} from 'vuex'
  // 辅助函数得到的时一个对象  使用...将对象展开放入 computed 或者 methods
  export default {
    name: 'mapView',
    components: {

    },
    mounted() {
      console.log(this.$store);
      console.log(this.$store.getters.add1(1));
    },
    // 手写版
    computed:{
      a(){
        return this.$store.state.a
      },
      arr(){
        return this.$store.state.arr
      },
      add(){
        return this.$store.getters.add
      },
      add1(){
        return this.$store.getters.add1
      },
      add2(){
        return this.$store.getters.add2
      }
    },
    methods: {
      addCount(){
        return this.$store.commit('addCount',{b:10,c:100})
      },
      addCount_async(){
        return this.$store.dispatch('addCount_async',{b:10,c:1000})
      },
      handler(){
        console.log(this.addCount_async());
      }
    },
}
</script>