<template lang="">
    <div class="login">
        <p class="title"> 
            <router-link to="/login/account">账号登录</router-link>
            <router-link to="/login/phone">手机登录</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'LoginView',
    }
</script>
<style scoped>
    .login {
        flex: 1;
        text-align: center;
    }

    .login-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 200px;
    }

    .login-box button {
        width: 50px;
        height: 30px;
        margin-top: 50px;
    }
    .title{
        margin-top: 50px;
    }
    .title a:nth-child(1){
        margin-right: 20px;
    }
</style>