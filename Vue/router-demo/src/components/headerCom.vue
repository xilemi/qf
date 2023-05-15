<template lang="">
    <div class="app">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"HeaderCom"
}
</script>
<style>
    .app{
        height: 60px;
        font-size: 16px;
        background-color: antiquewhite;
        text-align: center;
        line-height: 60px;
    }
</style>