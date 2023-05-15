<template>
    <div>
        商品详情，根据点击的商品id 得到对应的数据
        商品id:{{id?.id}}
    </div>
</template>
<script>
export default {
    name:'ShopDetail',
    mounted() {
        // 根据拿到的数据去请求商品的详细信息
        console.log(this.$route.query);
        console.log(this.$route);
        this.id=this.$route.query
    },
    data() {
        return {
            id:null
        }
    },
}
</script>
<style>
    
</style>