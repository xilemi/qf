const mongoose = require('mongoose')
// 设置连接  数据库名
mongoose.connect('mongodb://127.0.0.1:27017/user', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports=mongoose