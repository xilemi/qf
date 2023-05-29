<template>
    <div class="footer">
        <router-link to="/" exact>首页</router-link>
        <router-link to="/list" exact>列表</router-link>
        <router-link to="/car" exact>购物车</router-link>
        <router-link to="/mine" exact>我的</router-link>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    .footer {
        height: 60px;
        display: flex;
        justify-content: space-around;
        line-height: 60px;
        font-size: 16px;
        background-color: aquamarine;
    }

    /* 精确匹配时的样式 */
    .router-link-exact-active {
        color: red;
    }

    /* 包含匹配 */
    .router-link-active {
        color: red;
    }
</style>