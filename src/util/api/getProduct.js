import http from '../myhttp.js'
import {URL} from "../serviceAPI.js"

// keywords 关键词     category_id 分类  不想选的参数请传null
function searchProduct(keywords,category_id,pageSize){
    return new Promise((resolve,reject)=>{
            http.get(URL.searchProduct,{keywords,category_id,pageSize}).then(data=>{
                resolve(data)
            })
        }
    )
}
function getImgBg(pidAll){
    return new Promise((resolve,reject)=>{
            http.get(URL.getImgBg,{pidAll}).then(data=>{
                resolve(data)
            })
        }
    )
}

// 活动列表页
function getActive(){
    return new Promise(
        function (resolve,reject){
            axios({
                url:URL.getActive,
                method:'get'
            }).then(res=>{
                resolve(res.data.result)
            })
        }
    )
}

//活动详情页
function getActiveDetail(tid){
    return new Promise(
        function (resolve,reject){
            axios.get(URL.getActiveDetail,{params:{tid}}).then(res=>{
                resolve(res.data.result)
            })
        }
    )
}
export{searchProduct,getImgBg}