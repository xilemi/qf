<template>
  <div id="app">
    <router-view name="header"></router-view>
    <keep-alive include="ListView">
      <router-view></router-view>
    </keep-alive>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
  import HeaderCom from '@/components/headerCom.vue'
  export default {
    data() {
      return {

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

  
</style>