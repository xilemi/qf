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