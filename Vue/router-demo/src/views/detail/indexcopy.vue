<template>
    <div class="ShopDetail" v-if="msg">
        <img :src="msg.goodsImg" alt="">
        <p>{{msg?.goodsName}}</p>
        <p>{{msg?.goodsPrice}}</p>
    </div>
</template>
<script>
    export default {
        name: 'ShopDetail',
        mounted() {
            console.log(this.$route.params);
            // 根据拿到的数据去请求商品的详细信息
            this.gid = this.$route.params.gid.replace('.html','')
            this.getGoodsDetail()
        },
        data() {
            return {
                gid: null,
                msg: {}
            }
        },
        methods: {
            getGoodsDetail() {
                this.axios.get('http://121.43.116.41/demo/php/searchGoodsByGoodsId.php', { params: { gid: this.gid } }).then((response) => {
                    return response.data
                }).then(res => {
                    let { status, mesage, data } = res
                    console.log(res);
                    if (status) {
                        this.msg = data
                    }
                })
            }
        },
    }
</script>
<style>
    .ShopDetail {
        flex: 1;
        overflow: auto;
    }
    .ShopDetail img{
        width: 100%;
    }
</style>