import { ajaxPromise } from "./ajaxPromise.js";
let baseURL='http://121.43.116.41/demo/php'
export const login=data=>ajaxPromise({
    type: 'post',
    url: baseURL+'/login_account.php',
    data,
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