const LOCALURL = "http://127.0.0.1:8080";
const URL = {
    //首页旅行日记接口
    searchProduct:LOCALURL+"/mi/v1/searchProduct",
    //首页旅行日记详情页接口
    getImgBg:LOCALURL+"/mi/v1/goods_img_bg",
    //活动页面接口
    getActive:LOCALURL+"active",
    //活动页面详情接口
    getActiveDetail:LOCALURL+"active/detail",
    //登录接口
    login:LOCALURL+"user/login",
    //注册接口
    register:LOCALURL+"user/register",
    //我的分享接口
    share:LOCALURL+"user/share",
    //我的收藏接口
    collect:LOCALURL+"user/collect",
    //删除我的分享接口
    deleteShare:LOCALURL+"user/share/delete",
    //用户分享活动接口
    addShare:LOCALURL+"user/share/add",
    //商家用户发布活动接口
    marchant:LOCALURL+"active/merchant/publish"
}
export {URL}