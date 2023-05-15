// 统一管理 接口请求
axios.defaults.baseURL = 'http://121.43.116.41/demo';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export const searchGradeOrderLimit = (params) => {
    return axios.get('/php/searchGradeOrderLimit.php', { params }).then(res => {
        console.log(res);
        return res.data
    })
}
export const deleteGradeById = (params) => {
    return axios.get('/php/deleteGradeById.php', { params }).then(res => {
        return res.data
    })
}
export const updateGradeById = (params) => {
    return axios.post('/php/updateGradeById.php', params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
}
export const addGrade = (params) => {
    return axios.get('/php/addGrade.php', {params}).then(res => {
        return res.data
    })
} 