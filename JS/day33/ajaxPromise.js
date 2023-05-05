export function ajaxPromise(options) {
    return new Promise((reslove, reject) => {
        let result
        let { type = 'get', url, data, dataType = "txt", async = true } = options
        let xhr = new XMLHttpRequest()
        if (Object.prototype.toString.call(data) == '[object Object]') {
            let str = ''
            for (let key in data) {
                str += `${key}=${data[key]}&`
            }
            // str=str.slice(0,str.length-1)
            str = str.slice(0, -1)
            data = str
        }
        //如果是字符串类型  也是要手动拼接好的 
        // 如果 是空呢  也可以 加问号 不影响
        if (type == 'get') {
            xhr.open(type, url + '?' + data, async)
            xhr.send()
        }
        if (type == 'post') {
            xhr.open(type, url, async)
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            xhr.send(data)
        }
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        let res = xhr.responseText
                        if (dataType == 'json') {
                            res = JSON.parse(xhr.responseText)
                        }
                        // 要对数据进行处理
                        return reslove(res)
                    }
                }
            }
            catch {
                return reject()
            }
        }

    })
}