const express = require('express')
let Router = express.Router()


Router.get('/',  (req,res)=> {
    res.end('/')
})
Router.get('/login',  (req,res)=> {
    res.end('/login')
})
Router.get('/resigster',  (req,res) =>{
    res.end('/resigster')
})
module.exports=Router