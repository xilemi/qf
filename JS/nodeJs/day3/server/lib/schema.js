const mongoose = require('./mongoose.js')
const schema = mongoose.Schema
// 设置表的字段规则
const usersSchema = new schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    pwd: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /\w@\w+\.\w/
    },
    phone: {
        type: String,
        require: true,
        unique: true,
        validate: function (val) {
            return /^1[3-9]\d{9}$/.test(val)
        }
    }

}, { versionKey: false }
)
const studentSchema = new schema({
    id: {
        type: Number,
        require: true,
        unique: true,
    },
    name: {
        type: String,
        require: true,
        unique: true,
    },
}, { versionKey: false })
const scoreSchema = new schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    class: String,
    chinese: {
        type: Number,
        max: 100,
        mix: 0
    },
    math: {
        type: Number,
        max: 100,
        mix: 0
    },
    english: {
        type: Number,
        max: 100,
        mix: 0
    }
}, { versionKey: false }
)
module.exports = { studentSchema, scoreSchema, usersSchema }