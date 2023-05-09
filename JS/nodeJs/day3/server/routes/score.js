const express = require('express')
const { scoreModel } = require('../lib/appMode')
const { verifyToken } = require('../lib/token.js')
const {isToken}=require('../service/token.js')
let Router = express.Router()
Router.get('/', (req, res) => {
    res.send('/score')
})
Router.post('/add', isToken,(req, res) => {
    let body = req.body
    let { name, class: _class, chinese, math, english } = req.body
    // if(!isToken(req)) return
    if (name && _class && chinese && math && english) {
        scoreModel.insertMany([{
            name, class: _class, chinese, math, english
        }]).then(result => {
            res.send({
                status: 'true',
                message: '添加成功'
            })
        }).catch(err => {
            res.send({
                status: 'false',
                message: err.message
            })
        })
    }
    else {
        res.send({
            status: 'false',
            message: '请传入完整参数'
        })
    }
})
Router.post('/updateGradeById', isToken,(req, res) => {
    // if(!isToken(req)) return
    let { _id, chinese, english, math } = req.body
    scoreModel.findByIdAndUpdate(_id, { $set: { chinese, english, math } }).then(result => {
        // 匹配到并数据修改
        // 匹配到但是没修改数据（只是点了确认）
        // 没匹配到
        if (result) {
            res.json({
                status: true,
                message:'修改成功'
            })
        } else {
            res.json({
                status: false,
                message:'修改失败'
            })
        }
    }).catch(err => {
        res.send({
            status: false,
            message: err.message
        })
    })
})
Router.get('/searchById', async (req, res) => {
    let { _id } = req.query
    let data = await scoreModel.findById(_id)
    res.send({
        status: true,
        message: '查找成功',
        data,
    })
})
Router.get('/search', async (req, res) => {
    // 返回的数组
    let { wd = '', col = '_id', type = 'asc', page = 1, size = 5 } = req.query
    col = col == 'id' ? '_id' : col
    let totalNum = await scoreModel.find({}).count()
    let maxPage = Math.ceil(totalNum / size)
    if (page > maxPage) page = maxPage
    if (page < 1) page = 1
    let typeList = {
        asc: 1,
        desc: -1
    }
    type = typeList[type] || '1'
    scoreModel.find({ name: new RegExp(wd, 'i') }).sort({ [col]: type }).skip((page - 1) * size).limit(size).then(result => {
        res.send({
            status: true,
            message: 'Ok',
            current: page,
            maxPage,
            totalNum,
            list: result
        })
    }).catch(err => {
        let obj = {
            status: false,
            mesage: err.stack
        }
    })
})
Router.get('/all', (req, res) => {
    // 返回的数组
    scoreModel.find({}).then(result => {
        console.log(result);
        res.send({
            list:result
        })
        // 返回给前端的数据
    }).catch(err => {
        console.log(err.stack);
    })
})
Router.get('/del', isToken,(req, res) => {
    // 在发送请求时候 需要在headers里携带token 信息
    let {_id}=req.query
    scoreModel.deleteOne({ _id }).then(result => {
        console.log(result);
        if (result.deletedCount > 0) {
            res.send({
                status: true,
                message: '删除成功'
            })
        } else {
            res.send({
                status: false,
                message: '未找到'
            })
        }
    }).catch(err => {
        res.send({
            status: false,
            message: '删除失败'
        })
    })
})
module.exports = Router