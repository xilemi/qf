<template lang="">
        <el-row>
            <el-col :span="32" shadow="never">
                <el-card :body-style="{ padding: '0px' }">
                    <slot name="goodsImg">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image">
                    </slot>
                    <div style="padding: 14px;">
                        <slot name="goodsName">
                            <p class="goodsName">徕卡光学全焦段四摄| 一英寸可变光圈| 徕卡专业街拍模式</p>
                        </slot>
                        <div class="bottom clearfix">
                            <el-button type="text" class="button">
                                <slot name="goodsPrice">
                                    <p class="goodsPrice">
                                        ￥4399
                                    </p>
                                </slot>
                            </el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
</template>
<script>
    export default {
        name: 'shopItem',
    }
</script>
<style>
    .shop-item {
        width: 48%;
        background-color: antiquewhite;
        text-align: center;
        font-size: 14px;
    }
    .goodsName {
        margin: 10px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
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
</style>