<template>
    <div class="ShopDetail" v-if="msg">
        <detailCom :msg="msg"></detailCom>
        <p class="title">相关产品</p>
        <div class="sameShops">
            <router-link :to="{path:'/detail',query:{gid:item.goodsId}}" v-for="(item) in list" :key="item.goodsId">
                <ShopItem>
                    <img :src="item.goodsImg" alt="" slot="goodsImg">
                    <p slot="goodsName" class="goodsName">{{item.goodsName}}</p>
                    <p slot="goodsPrice" class="goodsPrice">￥{{item.goodsPrice}}</p>
                </ShopItem>
            </router-link>
        </div>
    </div>
</template>
<script>
    // import ShopItem from '@/components/shopItem'
    import detailCom from '@/components/detailCom'
    import { searchGoodsByGoodsId, searchAllGoods } from '@/api/index.js'
    export default {
        name: 'ShopDetail',
        mounted() {
            // console.log(this.$route.query);
            // 根据拿到的数据去请求商品的详细信息
            this.gid = this.$route.query.gid
            this.getGoodsDetail()
            console.log(this.$store.state.list);
            this.list=this.$store.state.list
        },
        data() {
            return {
                gid: null,
                msg: {},
                list: []
            }
        },
        components: {
            ShopItem: () => import('@/components/shopItem'),
            detailCom
        },
        methods: {
            getGoodsDetail() {
                searchGoodsByGoodsId({ gid: this.gid }).then(res => {
                    let { status, mesage, data } = res
                    if (status) {
                        console.log(data.bigPicList);
                        this.msg = data
                    }
                })
            },
        },
        watch: {
            $route() {
                this.gid = this.$route.query.gid
                // 用替换的模式更好
                // this.$router.replace({path:'/detail',query:{gid: this.gid}})
                this.getGoodsDetail()
            }
        },
        // 组件内守卫
        // beforeRouteEnter(to, from, next) {
        //     //路由守卫在 beforeMount 前就被执行 所以不会有this
        //     console.log(this);
        //     console.log(4, to);
        //     console.log(4, from);
        //     next()
        // },
        beforeRouteUpdate(to, from, next) {
            console.log(5, to);
            console.log(5, from);
            next()
        },
        // beforeRouteLeave(to, from, next) {
        //     console.log(6, to);
        //     console.log(6, from);
        //     next()
        // }
    }
</script>
<style>
    .ShopDetail {
        flex: 1;
        overflow: auto;
    }

    .ShopDetail img {
        width: 100%;
    }

    .title {
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .sameShops{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .sameShops a{
        width: 49%;
        margin-bottom: 10px;
    }
</style>