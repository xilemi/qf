// 解析前端发送的url
// parse('url', '是否对query进行解析成对象')
// URL() 转回来 
let url = require('url')
let urls = 'http://www.mi.com:9090/shop/search?keyword=小米13#index'
// 第二个参数是是否解析query
console.log(url.parse(urls, true));
let  URL=url.URL
let obj={
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.mi.com:9090',
    port: '9090',
    hostname: 'www.mi.com',
    hash: '#index',
    search: '?keyword=小米13',
    query: { keyword: '小米13' },
    pathname: '/shop/search',
    path: '/shop/search?keyword=小米13',
    href: 'http://www.mi.com:9090/shop/search?keyword=小米13#index'
}
let res = url.format(obj)
console.log(res);
let res1 = new URL(urls)
console.log(res1);