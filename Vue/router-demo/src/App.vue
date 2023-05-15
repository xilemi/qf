<template>
  <div id="app">
    <HeaderCom>
      {{headerMsg}}
    </HeaderCom>
    <router-view></router-view>
    <div class="footer">
      <router-link to="/">首页</router-link>
      <router-link to="/list">列表</router-link>
      <router-link to="/car">购物车</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
  </div>
</template>

<script>
  import HeaderCom from '@/components/headerCom.vue'
  export default {
    data() {
      return {
        headerMsg: '首页'
      }
    },
    components: {
      HeaderCom
    },
    updated() {
      switch (this.$route.name) {
        case "home": this.headerMsg='首页'
          break;
        case "list": this.headerMsg='列表'
          break;
        case "car": this.headerMsg='购物车'
          break;
        case "mine": this.headerMsg='我的'
          break;
        default:
          break;
      }

    },
  }
</script>
<style>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .footer {
    height: 60px;
    display: flex;
    justify-content: space-around;
    line-height: 60px;
    font-size: 16px;
    background-color: aquamarine;
  }
</style>