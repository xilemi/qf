const express = require('express')
const Router = express.Router()
// 开始表示一级
Router.get('/', (req, res) => {
    console.log(11);
   res.end('/')
})
// 后续不用再写一级的user
Router.get('/add', (req, res) => {  
    // 进行数据库查询
    res.write('111')
    res.end('/user/add')
})
Router.get('/del',(req, res)=> {
    res.end('/user/del')
})
Router.get('/edit',(req, res)=> {
    res.end('/user/edit')
})
Router.get('/search',(req, res)=> {
    res.end('/user/search')
})
module.exports=Router