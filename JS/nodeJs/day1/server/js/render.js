const fsp = require('fs/promises')
const fs = require('fs')
const path = require('path')
const url = require('url')
const http = require('http')
const extname = require('../data/mine.json')
const { log } = require('console')
async function render(res, pathname, baseUrl) {
    let fsType = path.extname(pathname)
    res.setHeader('Content-type', `${extname[fsType]}`)
    if (fs.existsSync(path.join(baseUrl, pathname))) {
        let stats = fs.statSync(path.join(baseUrl, pathname))
        if (stats.isFile()) {
            // 读取文件时 设置了文件字符编码  会导致有的文件错乱 
            // 这里不设置文件读取格式  浏览器会进行解析
            let data = await fsp.readFile(path.join(baseUrl, pathname))
            res.write(data)
            // 不添加 页面会一直等待响应
            res.end()
        }
        else if (stats.isDirectory()) {
            let data = await fsp.readFile(path.join(baseUrl, pathname,'index.html'))
            res.write(data)
            // 不添加 页面会一直等待响应
            res.end()
        }
    }
    else {
        if (pathname == '/site/a') {
            res.setHeader('Content-type', 'text/json;charset=utf-8')
            let data = await fsp.readFile(path.join(__dirname, '../data/user.json'))
            res.write(data)
            res.end()
        } else if(pathname=='/site/main'){
            render(res,path.join(__dirname,'/site/index.html'),baseUrl)
        }
        else {
            
            res.end('404 not found')
        }
    }
}
module.exports = render