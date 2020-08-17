import http from '../myhttp.js'
import {URL} from "../serviceAPI.js"
// producnt页面接口
// 获取商品主要信息
function getProductById(pid){
    return new Promise((resolve,reject)=>{
            http.get(URL.getProductById,{pid}).then(data=>{
                resolve(data)
            })
        }
    )
}
// 获取商品版本选项
function getProduct_version(pid){
    return new Promise((resolve,reject)=>{
            http.get(URL.getProduct_version,{pid}).then(data=>{
                resolve(data)
            })
        }
    )
}
// 获取商品颜色选项
function getProduct_color(pid){
    return new Promise((resolve,reject)=>{
            http.get(URL.getProduct_color,{pid}).then(data=>{
                resolve(data)
            })
        }
    )
}
function getProduct_banner(pid){
    return new Promise((resolve,reject)=>{
            http.get(URL.getProduct_banner,{pid}).then(data=>{
                resolve(data)
            })
        }
    )
}

// 搜索页面接口
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
// 主页接口
function brickProduct(){
    return new Promise((resolve,reject)=>{
            http.get(URL.getBrickProduct,{}).then(data=>{
                resolve(data)
            })
        }
    )
}
// 加入购物车接口
function addCart(pid,uid){
    return new Promise((resolve,reject)=>{
            http.get(URL.addCart,{pid:pid,uid:uid}).then(data=>{
                resolve(data)
            })
        }
    )
}
// 登录
function login(name,pwd){
    return new Promise((resolve,reject)=>{
            http.get(URL.login,{name:name,pwd:pwd}).then(data=>{
                resolve(data)
            })
        }
    )
}
//手机验证码登录接口
function phoneLogin(phone,code){
    return new Promise((resolve,reject)=>{
            http.get(URL.phoneLogin,{phone:phone,code:code}).then(data=>{
                resolve(data)
            })
        }
    )
}


export{
    getProductById,
    getProduct_version,
    getProduct_color,
    getProduct_banner,
    searchProduct,
    getImgBg,
    brickProduct,
    addCart,
    login,
    phoneLogin
}