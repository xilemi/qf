const {usersModel} =require('../lib/appMode.js')
function isParmas(req, res, next) {
    let { id, pwd, email, phone } = req.body
    if (id && pwd && email && phone) {
        next()
    } else {
        res.json({
            status: false,
            message: '请传入完整参数'
        })
    }
}
// 验证用户名是否存在
function isExistId(req, res, next) {
    let body=req.method.toLowerCase()=='get'? req.query:req.body
    let { id } = body
    usersModel.findOne({ id }).then(result => {
        // 找不到 result =>null
        console.log(Boolean(result));
        if (!result) {
            next()
        }
        else {
            // 已经有
            res.json({
                status: true,
                message: '用户名被注册'
            })
        }
    })
}
// 验证手机是否存在
function isExistPhone(req, res, next) {
    let body=req.method.toLowerCase()=='get'? req.query:req.body
    let { phone } = body
    usersModel.findOne({ phone }).then(result => {
        // 找不到 result =>null
        if (!result) {
            next()

        }
        else {
            res.json({
                status: true,
                message: '手机号已存在'
            })
        }
    })
}
// 验证邮箱是否存在
function isExistEmail(req, res, next) {
    let body=req.method.toLowerCase()=='get'? req.query:req.body
    let { email } = body
    usersModel.findOne({ email }).then(result => {
        // 找不到 result =>null
        if (!result) {
            next()

        }
        else {
            res.json({
                status: false,
                message: '邮箱已存在'
            })
        }
    })
}
// 注册
function register(req, res, next) {
    usersModel.insertMany(req.body).then(result => {
        res.json({
            status: true,
            message: '注册成功'
        })
    }).catch(err => {
        res.json({
            status: false,
            message: err.message
        })
    })
}
module.exports = {
    isExistEmail,isExistId,isExistPhone,isParmas,register
}