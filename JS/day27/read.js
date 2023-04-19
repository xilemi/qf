const fs = require('fs')
fs.readFile('./a.txt', 'utf-8', (err,data) => {
    // console.log(err);
    // console.log(data);
})
// 写入的文件  先读取文件 再将要添加的内容和原始内容进行拼接 
fs.writeFile('./a.txt', '1111', (err, data) => {
    // console.log(err);
})
fs.readFile('./a.txt', 'utf-8',(err, data)=> {
    if (!err) {
        let newData = data + '6666'
        fs.writeFile('./a.txt', newData, (err) => {
            if (!err) {
                fs.readFile('./a.txt', 'utf-8',(err, data)=> {
                    if(!err) {
                        console.log(data);
                    }
                })
            }
        })
    }
})