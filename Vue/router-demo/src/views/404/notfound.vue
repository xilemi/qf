<template>
    <div>
        404
        <p>错误路径：{{msg}}</p>
    </div>
</template>
<script>
    export default {
        name: 'notfound',
        data() {
            return {
                msg:''
            }
        },
        mounted() {
            this.msg=this.$route.query.fromPath
        },
    }
</script>
<style>

</style>