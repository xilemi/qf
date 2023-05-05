import { ajaxPromise } from './ajaxPromise.js'
let baseURL = 'http://121.43.116.41/demo/php'
export const deleteGradeById = data => ajaxPromise({
    type: 'get',
    url: baseURL + '/deleteGradeById.php',
    data,
})

export const searchGradeById = data => ajaxPromise({
    type: 'get',
    url: baseURL + '/searchGradeById.php',
    data,
    dataType: 'json'
})
export const updateGradeById = data => ajaxPromise({
    type: 'post',
    url: baseURL + '/updateGradeById.php',
    data,
    dataType: 'json'
})
export const searchGradeOrderLimit = data => ajaxPromise({
    type: 'get',
    url: baseURL + '/searchGradeOrderLimit.php',
    data,
    dataType: 'json'
})
export const addGrade = data => ajaxPromise({
    type: 'get',
    url: baseURL + '/addGrade.php',
    data,
    dataType: 'json'
})
export const setCookie = function(name, value, time, path = '/') {
    let expires = time || 0
    if (expires != 0) {
        let date = new Date()
        console.log(date.getSeconds());
        date.setSeconds(date.getSeconds() + expires)
        expires = date.toUTCString()
    }
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=${path}`
}
export const login=data=>ajaxPromise({
    type: 'post',
    url: baseURL+'/login_account.php',
    data,
    dataType:'json'
})
export const register = data => ajaxPromise({
    type: 'post',
    url: baseURL + '/register.php',
    data,
    dataType:'json'
})
export const isExistUser = data => ajaxPromise({
    type: 'get',
    url: baseURL + '/isExistUser.php',
    data,
    dataType:'json'
})
export const isExistPhone = data => ajaxPromise({
    type: 'get',
    url: baseURL + '/isExistPhone.php',
    data,
    dataType:'json'
})
export const isExistEmail = data => ajaxPromise({
    type: 'get',
    url: baseURL + '/isExistEmail.php',
    data,
    dataType:'json'
})
export function getCookie(key) {
    let res = document.cookie.replace(/\s/g, '')
    // 到等号为name 到;为value
    let obj = {}
    for (let i = 0; i < res.split(';').length; i++) {
        let item=res.split(';')[i]
        let name = item.split('=')[0]
        let value = item.split('=')[1]
        obj[name] = value
        if (key == name) {
            return decodeURIComponent(obj[key])
        }
    }
    return ''
}