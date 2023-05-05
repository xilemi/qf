const express = require('express')
const path = require('path')
const fsp = require('fs/promises')
const app = express()
let userRouter=require('./router/user.js')
// 对/site 后的进行监听 第一个参数表示监听的路径
app.use('/site',express.static(path.join(__dirname, '../site')))
app.use('/user', userRouter)
app.get('/reg', (req, res) => {
    res.sendFile(path.join(__dirname, '../site/register.html'))
})
// 以get方式 对指定路径进行拦截
app.get('/a',  function (req, res) {
    fsp.readFile(path.join(__dirname, '../site/data/user.json')).then(data => {
        res.write(data)
    }).catch(err => {
        res.end(err)
    }).finally(() => {
        res.end()
    })
})

app.listen(3000, function () {
    console.log('服务启动');
})