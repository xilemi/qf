<template lang="">
    <el-row>
        <el-col :span="32" shadow="never">
            <el-card :body-style="{ padding: '0px' }">
                <div class="block">
                    <el-carousel trigger="click" height="374px" indicator-position="none">
                        <el-carousel-item v-for="item in msg.bigPicList" :key="item">
                            <img :src="item" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div style="padding: 14px;">
                    <p>{{msg?.goodsName}}</p>
                    <p class="goodsPrice">￥{{msg?.goodsPrice}}<span @click="addShop()">添加购物车</span></p>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        props: ['msg'],
        methods: {
            addShop() {
                // 检查是否有token 有token 直接添加  没有则跳转到login
                let token = localStorage.getItem('token')
                if (token) {
                    console.log('添加成功');
                }
                else {
                    this.$router.replace({ path: '/login', query: { returnPath: this.$route.fullPath } })
                }
            }
        },
    }
</script>
<style>
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .goodsPrice {
        display: flex;
        justify-content: space-between;
        height: 30px;
        line-height: 30px;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .el-carousel__item img {
        width: 100%;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>