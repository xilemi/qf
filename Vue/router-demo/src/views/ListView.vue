<template>
  <div class="list">
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
    <ShopItem @shopItem="test"></ShopItem>
  </div>
</template>

export default {
name:'ListView'
}
<script>
import ShopItem from '@/components/shopItem.vue'
export default{
  components:{
    ShopItem
  },
  methods: {
    test(val){
      console.log(this.$router);
      // 点击商品动态获取id  name 和params 传参 刷新路由会丢失
      // this.$router.push({name:"ShopDetail",params:{id:123}})
      // 刷新路由不会丢失
        this.$router.push({path:'/detail',query:{id:123}})
    }
  },
}
</script>
<style>
  .list{
    flex: 1;
    overflow: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .shop-item{
    margin-right: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .list .shop-item:nth-of-type(2n){
    margin-right: 0;
  }
</style>