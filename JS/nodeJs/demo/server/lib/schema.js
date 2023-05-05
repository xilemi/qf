const mongoose = require('./mongoose.js')
const schema = mongoose.Schema
// 设置表的字段规则
const blog = new schema({
    'id':Number,
    "name":String,
    "math":Number,
})
module.exports=blog