const http = require('http')
http.createServer(( req,res) => {
    console.log('start');
    // 设置响应头
    res.writeHead(200,{'Content-type':'text/html;'})
    res.write('111')
    res.write(`
    <html>
    <div>12</div>
    </html>
    `)
    //设置响应结束
    res.end('111')
}).listen(3000)