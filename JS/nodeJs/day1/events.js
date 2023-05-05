let events = require('events')
// events.EventEmitter 添加自定义事件   触发 清除  （发布订阅模式）
let EventEmitter = events.EventEmitter
console.log(EventEmitter);
let ob = new EventEmitter()
// on 添加事件 addListeners 
// emit 触发事件
// off清除事件 removListener
function fn1(arg) {
    console.log('woshi',arg);
}
function fn2(arg) {
    console.log('nishi',arg);
}

ob.addListener('a', fn1)
ob.addListener('a', fn2)
// 触发时可以传递参数
// 清除事件
// ob.removeListener('a',fn1)
ob.emit('a', 1)
ob.removeListener('a',fn2)
// ob.emit('b', 2)
ob.emit('a', 1)