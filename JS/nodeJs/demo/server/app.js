const userRouter = require('./routers/user')
const indexRouter = require('./routers/index.js')
const express = require('express')
const path =require('path')
let app = express()
// 第一个参数监听的位置
app.use('/site',express.static(path.join(__dirname,'../site')))
app.use(express.urlencoded())
app.use(express.json())
app.use('/user', userRouter)
app.use('/', indexRouter)

module.exports=app 