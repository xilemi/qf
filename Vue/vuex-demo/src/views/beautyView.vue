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
        add1:{{add1(2)}}
      </p>
      <p>
        add2:{{add2}}
      </p>
      <button @click="addCount({b:2,c:10})">添加</button>
      <button @click="addCount_async({b:10,c:1000})">添加异步</button>
      <button @click="addCount_async1({b:10,c:1000})">添加异步</button>
  </div>
</template>

<script>
  import { mapGetters, mapState ,mapMutations,mapActions} from 'vuex'
  // 辅助函数得到的时一个对象  使用...将对象展开放入 computed 或者 methods
  export default {
    name: 'beautyView',
    components: {

    },
    mounted() {
      console.log(this.$store);
    },
    // 使用辅助函数  辅助函数得到的时 对象   使用...展开放入  computed methods
    computed:{
      // ...mapState(['a',"arr",'obj']),
      ...mapState({
        // 使用 这种方式 可以 用state内的数据得到新的计算属性
        a:(state)=>state.a,
        arr:'arr',
        obj:'obj'
      }),
      // 同名直接放数组
      // ...mapGetters(['add','add1','add2'])
      ...mapGetters({
        add:'add',
        add1:'add1',
        add2:'add2'
      })
    },
    methods: {
      // ...mapMutations(['addCount'])
      ...mapMutations({
        addCount:'addCount'
      }),
      // ...mapActions(['addCount_async'])
      ...mapActions({
        addCount_async:'addCount_async',
        addCount_async1:'addCount_async1',
      })
    },
}
</script>