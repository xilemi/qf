const mongoose = require('mongoose')
const schema = require('./schema.js')
const appModel = mongoose.model('student', schema, 'student')
// 将规则约束和表关联 如果是已经存在的表  需要第三个参数
module.exports=appModel