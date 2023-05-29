<template>
  <div class="list">
    <!-- 手动拼接 或者传入对象 -->
    <router-link :to="{path:'/detail',query:{gid:item.goodsId}}" v-for="(item) in list" class="shop-item" :key="item.goodsId">
      <ShopItem>
        <img :src="item.goodsImg" alt="" slot="goodsImg">
        <p slot="goodsName" class="goodsName">{{item.goodsName}}</p>
        <p slot="goodsPrice" class="goodsPrice">￥{{item.goodsPrice}}</p>
      </ShopItem>
    </router-link>
    <!-- 
      使用name params搭配 首先改造路由中的path 例如 path:'/detail/:gid' 加上:为动态路径
      在to中传参  使用params  会自动解析  也可以使用拼接 
    -->
  </div>
</template>

<script>
  import ShopItem from '@/components/shopItem.vue'
  import {searchAllGoods} from '@/api/index.js'
  export default {
    name: 'ListView',
    components: {
      ShopItem
    },
    data() {
      return {
        list: []
      }
    },
    methods: {
      getGoodsList() {
        searchAllGoods().then(res => {
          let { status, message, list } = res
          if (status) {
            this.list = list
            this.$store.state.list=list
          } else {
            throw new Error(message)
          }
        })
      }
    },
    mounted() {
      this.getGoodsList()
      
    },
  }
</script>
<style>
  .list {
    flex: 1;
    overflow: auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .shop-item {
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: aliceblue;
  }
  .shop-item img{
    width: 100%;
  }
  
</style>