import axios from 'axios';
import qs from 'qs'
axios.defaults.baseURL="http://127.0.0.1:8080";
// post请求
function get(url, data = {}, method = 'get') {
    return new Promise((resolve, reject) => {
        axios({
                url: url,
                method: method,
                params: data
            })
            .then(res => {
                //成功
                resolve(res.data)
            })
            .catch(res => {
                //失败
                reject(res)
            })

    })
}

function post(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url, qs.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}

export default {
    get: get,
    post:post
}