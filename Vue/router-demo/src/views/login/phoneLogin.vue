<template lang="">
    <div class="login-box">
        <label>手机号：<input type="text" v-model="account"></label>
        <label>密码：<input type="text" v-model="pwd"></label>
        <button @click="loginHandler()">登录</button>
    </div>
</template>
<script>
    import { login } from '@/api/index.js'
    export default {
        name: 'phoneLogin',
        data() {
            return {
                account: null,
                pwd: null
            }
        },
        methods: {
            loginHandler() {
                if (this.account && this.pwd) {
                    login({ account: this.account, pwd: this.pwd }).then(res => {
                        var { status, message, user } = res
                        if (status) {
                            localStorage.setItem('token', user)
                            this.$router.replace({ path: this.$route.query.returnPath })
                        }
                    })
                }
            }
        },
    }
</script>
<style>
    .login {
        flex: 1;

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
</style>