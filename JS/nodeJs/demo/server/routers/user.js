const express = require('express')
const { router } = require('../app')
const mongo = require('../lib/appMode.js')
let Router = express.Router()


Router.get('/', (req, res) => {
    res.end('/')
})
Router.get('/add', (req, res) => {
    res.end('/add')
})
Router.get('/edit', (req, res) => {
    res.end('/edit')
})
Router.get('/get', (req, res) => {
    // 拿到前端传递过来的请求参数
    // 后端 sql 去数据库里查询 将结果返回给前端
    console.log(req.query);
    res.json({
        "name": 'zhangsan',
        "age": '18',
        "height": "198"
    })
})
Router.post('/addStudent', (req, res) => {
    let {id,name,math}=req.body
    mongo.create({
        id,name,math
    }).then((result) => {
        console.log('插入成功');
    }).catch((err) => {
        console.log("插入失败");
    });
})
module.exports = Router