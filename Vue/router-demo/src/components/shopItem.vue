<template lang="">
    <div class="shop-item" @click="$emit('shopItem',{id:1})">
        <img src="../images/xiaomi13.jpg" alt="">
        <p class="shop-title">小米13</p>
        <p class="content">徕卡光学全焦段四摄| 一英寸可变光圈| 徕卡专业街拍模式</p>
    </div>
</template>
<script>
export default {
    name:'shopItem'
}
</script>
<style>
    .shop-item{
        width: 49%;
        height: 260px;
        background-color: antiquewhite;
        text-align:center;
        font-size: 14px;
    }
    .shop-item img{
        border-radius: 5px;
        width: 100%;
    }
    .shop-title{
        margin: 10px 0;
    }
</style>