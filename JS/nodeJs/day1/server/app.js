const http = require('http')
const url = require('url')
const path = require('path')
const render=require('./js/render.js')
http.createServer(async (req, res) => {
    console.log('服务器启动', req.url);
    let baseUrl = path.join(__dirname,'../')
    let { pathname, search } = url.parse(req.url, true)
    render(res,pathname,baseUrl)
}).listen(3000)