const { log } = require('console');
const fs = require('fs')
const fsp=require('fs/promises')
const path=require('path')
// 文件系统  都是异步的
// 文件读取写入  文件夹/文件的增删改查 buffer 数据流 encoding(binary 读取图片)
// 相对路径   基准是以终端（使用拼接）
// 读取
// fs.readFile(path.join(__dirname, './data/1.txt'), 'utf-8',  (err, data)=> {
//     if (!err) {
//         console.log('读取成功',data);
//     }
//     else {
//         console.log(err);
//     }
// })
// fsp.readFile(path.join(__dirname, './data/1.txt'), 'utf-8').then(res => {
//     console.log(res);
// })
// async function aa() {
//     let res = await fsp.readFile(path.join(__dirname, './data/1.txt'), 'utf-8')
//     console.log(res);
// }
// aa()

// 写入
// fs.writeFile(path.join(__dirname, './data/1.txt'), 'niaho', {
//     encoding: 'utf-8',
//     flag:'wx'
// }, function (err) {
//     if (!err) {
//         console.log('覆盖成功');
//     }
//     else {
//         console.log(err);
//     }
// })
// fs.appendFile(path.join(__dirname, './data/1.txt'), 'niaho', function (err) {
//     if (!err) {
//         console.log('成功');
//     }
// })
// 删除文件夹
// fs.unlink()
// 文件夹的操作
// 没有就创建  
// fs.mkdir('./aaa', function (err) {
//     if (!err) {
//         console.log(err);
//     }
// })
// // 删除
// fs.rmdir('./aaa', function (err) {
//     if (!err) {
//         console.log(err);
//     }
// })
console.log(fs.statSync('./data/1.txt').isFile());