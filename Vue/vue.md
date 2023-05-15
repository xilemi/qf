## Vue特征
## 声明式
## 响应式 
挂载的数据改变，视图也会同步改变
## vue应用本质是一个实例化对象，内部的属性和方法来控制数据
## 数据存在app.$data.message 或者直接使用app.message  也就是数据也会在实例中有一份 methods 也会存一份
## 分层
视图层（HTML css） 控制层（vue实例）
## 一个页面可以存在多个vue实例吗  可以  一个实例只能挂载一次
## vue 的diff算法  了解下 
## $mount() 挂载元素  可以先创建实例  后单独挂载元素 
## 一般一个页面只有一个根实例
## 文本插值 null和undefined 会被渲染成空字符串 数组，对象会转JSON.stringify
## 实例化对象data中的数据类型
## Vue指令
写在html 标签内  作为 html的自定义属性
v-html html结构
v-test 文本
v-pre 禁用文本插值
v-cloak 未被初始化的标签会带有 这个自定义属性  会显示{{message}}  因此可以配合css 做display 隐藏
template标签  不会被渲染
v-if   v-else v-else-if  使用和js的规则一致 ，是控制html标签的渲染， 不满足条件不会被渲染
v-show 当值为ture的时候显示，默认元素都是会被加载的，指令是是切换css的display 值
v-bind 简写: 是给谁用的？ 给html 标签的属性自定义属性 使用  让这些属性的属性值具有动态性 
v-on 事件监听
v-for 渲染
v-model 双向绑定数据    值绑定
## 计算属性和methods 方法的区别 
1.methods 方法在每次虚拟dom发生改变时都会执行一次 
2.methods是以函数的方式调用，计算属性是当做属性一样使用
3.计算属性的依赖数据没有发送改变，不会被执行，使用缓存
4.计算属性无法进行传参
## watch 和响应式的区别
## 对象深拷贝的方式
## reder 函数的作用 将模板的html传入对应的reder函数中 进行渲染
# vue2 和vue3 区别
## 创建使用createApp()
## data 必须是个函数放回一个对象
## 没有.sync
## 组件的v-model不同
使用 props:['modelValue'] 接受值
使用 emits:['update:modelValue'] 接受事件
## 没el 挂在模板  使用Vue.mount('') 比vue2 少了$


# 脚手架搭建项目文件结构 
public 项目出口
assets 静态资源
router 路由
components 组件 复用
view  布局相关
app.vue 默认暴露 挂在到根实例
main.js 入口文件
