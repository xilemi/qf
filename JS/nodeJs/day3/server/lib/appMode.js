const mongoose = require('mongoose')
const {studentSchema,scoreSchema, usersSchema} = require('./schema.js')
const studentModel = mongoose.model('student', studentSchema, 'student')
const scoreModel = mongoose.model('score', scoreSchema, 'score')
const usersModel=mongoose.model('users',usersSchema,'users')
// 将规则约束和表关联 如果是已经存在的表  需要第三个参数
module.exports={studentModel,scoreModel,usersModel}