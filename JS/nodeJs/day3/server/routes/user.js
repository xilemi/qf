const express = require('express')
const { usersModel } = require('../lib/appMode.js')
const {genToken} =require('../lib/token.js')
let Router = express.Router()


Router.get('/', (req, res) => {
    res.end('/')
})
// 注册 利用中间件
Router.post('/reg', (req, res,next) => {
   
    let { id,pwd,email,phone } = req.body
    if (id &&pwd&&email&&phone) {
        next()
    } else {
        res.json({
            status: false,
            message:'请传入完整参数'
        })
    }
})
Router.post('/reg', (req, res, next) => {
    let { id } = req.body
    usersModel.findOne({ id }).then(result => {
        // 找不到 result =>null
        if (!result) {
            res.json({
                status: false,
                message:'用户已存在'
            })
        }
        else {
            next()
        }
    })
})
// 登录
Router.get('/login', (req, res) => {
    let { id, pwd } = req.query
    usersModel.find({ id }).then(result => {
        if (result.length) {
            if (result[0].pwd == pwd) {
                let token=genToken({user:result[0].id},30*60)
                res.send({
                    status: true,
                    message: '登录成功',
                    user: result[0].id,
                    token
              })
            } else {
                res.send({
                    status: false,
                    message:'密码错误'
                })
          }
        } else {
            res.send({
                status: false,
                message:'用户不存在'
            })
      }
    }).catch(err => {
        res.send({
            status: false,
            message:err.message
        })
    })
})
Router.get('/edit', (req, res) => {
    res.end('/edit')
})
Router.get('/get', (req, res) => {
    // 拿到前端传递过来的请求参数
    // 后端 sql 去数据库里查询 将结果返回给前端
    let {  id } = req.query
    usersModel.find({ id }).then(result => {
        res.send(result)
    })
})

module.exports = Router