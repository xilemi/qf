const http = require('http');
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const extname=require('./server/data/mine.json')
http.createServer(async (req, res) => {
    console.log(req.url);
    // 设置响应头
    // 不能直接使用req.url  如果存在 参数就会失败
    let fsType=path.extname(req.url)
    res.setHeader('Content-type',`${extname[fsType]};charset=utf-8`)
    if (req.url != '/favicon.ico') {
        let res1 = await fsp.readFile(path.join(__dirname, req.url), 'utf-8')
        if (req.url == '/index.html') {
            res.write(res1)
            res.end()
        }
    }

   
    // html文件可以作为页面放入  候选可以通过不同的req.url 来判断  需要返回的页面（路由？）
    // 返回的数据如何放呢
    res.end()
    //设置响应结束
}).listen(5000)
// 根据文件 类型设置响应头
