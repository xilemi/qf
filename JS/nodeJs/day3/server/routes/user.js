const express = require('express')
const { usersModel } = require('../lib/appMode.js')
const { genToken } = require('../lib/token.js')
const { isExistEmail,isExistId,isExistPhone,isParmas,register}=require('../service/user.js')
let Router = express.Router()


Router.get('/', (req, res) => {
    res.end('/')
})
// 注册 利用中间件
// 验证 id phone email 是否有重复的
// 由于想复用验证id phone email 是否存在
// 在注册的时候 是post 请求  在单独验证是否存在时 是get请求
// 使用req.method 得到请求方式  是大写的

// 验证传入参数是否完整

Router.get('/isExistId',isExistId)
Router.get('/isExistPhone',isExistPhone)
Router.get('/isExistEmail',isExistEmail)
// 注册接口
Router.post('/reg', isParmas,isExistId,isExistPhone,isExistEmail,register)
// 登录
Router.get('/login', (req, res) => {
    let { id, pwd } = req.query
    usersModel.find({ id }).then(result => {
        if (result.length) {
            if (result[0].pwd == pwd) {
                let token = genToken({ user: result[0].id }, 30 * 60)
                res.send({
                    status: true,
                    message: '登录成功',
                    user: result[0].id,
                    token
                })
            } else {
                res.send({
                    status: false,
                    message: '密码错误'
                })
            }
        } else {
            res.send({
                status: false,
                message: '用户不存在'
            })
        }
    }).catch(err => {
        res.send({
            status: false,
            message: err.message
        })
    })
})
Router.get('/edit', (req, res) => {
    res.end('/edit')
})
Router.get('/get', (req, res) => {
    // 拿到前端传递过来的请求参数
    // 后端 sql 去数据库里查询 将结果返回给前端
    let { id } = req.query
    usersModel.find({ id }).then(result => {
        res.send(result)
    })
})
Router.get('/jsonp', (req, res) => {
    // 拿到前端传递过来的请求参数
    // 后端 sql 去数据库里查询 将结果返回给前端
    let { id } = req.query
    usersModel.find({}, { _id: 0 }).then(result => {
        res.send(`fn(${result})`)
    })
})
module.exports = Router