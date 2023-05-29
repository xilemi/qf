import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://121.43.116.41/'
export const login = (params) => {
    return axios.post('demo/php/login_account.php', params).then(response => {
        return response.data
    })
}
export const searchAllGoods = () => axios.get('demo/php/searchAllGoods.php').then(response => response.data)

export const searchGoodsByGoodsId = (params) => axios.get('demo/php/searchGoodsByGoodsId.php', { params }).then((response) => {
    return response.data
})