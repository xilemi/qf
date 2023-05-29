<template>
  <div class="home">
   <p>
    a:{{a}}
   </p>
     <p>
      arr:{{arr}}
     </p>
      <p>
        add:{{mdA/add}}
      </p>
      <!-- <p>
        add1:{{add1(2)}}
      </p>
      <p>
        add2:{{add2}}
      </p> -->
      <!-- <button @click="addCount({b:2,c:10})">添加</button>
      <button @click="addCount_async({b:10,c:1000})">添加异步</button>
      <button @click="addCount_async1({b:10,c:1000})">添加异步</button> -->
  </div>
</template>

<script>
  import { mapGetters, mapState ,mapMutations,mapActions} from 'vuex'
  // 辅助函数得到的时一个对象  使用...将对象展开放入 computed 或者 methods
  export default {
    name: 'mdA',
    components: {

    },
    mounted() {
      console.log(this.$store);
    },
    computed:{
      // state没变化  和之前一样使用
      ...mapState({
        a:'a',
        arr:'arr',
        obj:'obj'
      }),
      // getters 使用 第一参数模块名
      ...mapGetters('mdA',{
        add:'add',
        add1:'add1',
        add2:'add2'
      })
    }
}
</script>