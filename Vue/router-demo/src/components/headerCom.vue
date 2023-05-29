<template lang="">
    <div class="header">
        <!-- 横杠连接的类名如何动态绑定 -->
        <span @click="$router.back()">
            <i class="el-icon-arrow-left" v-if="$route.meta.isBack"></i>
        </span>
                <span class="header-msg">{{headerMsg}}</span>
                <span></span>
    </div>
</template>
<script>
    export default {
        name: "HeaderCom",
        data() {
            return {
                headerMsg: '',
            }
        },
        
        mounted() {
            this.headerMsg=this.$route.meta.lable
        },
        watch: {
            $route() {
                this.headerMsg=this.$route.meta.lable
            }
        },
    }
</script>
<style>
    .header {
        height: 50px;
        font-size: 16px;
        padding: 0 20px;
        background-color: antiquewhite;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
    }
</style>