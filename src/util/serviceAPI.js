const LOCALURL = "http://127.0.0.1:8080";
const URL = {
    //product页返回商品信息接口
    getProductById:LOCALURL+"/mi/v1/getProductById",
    //product页返回商品规格选项接口
    getProduct_version:LOCALURL+"/mi/v1/product_version",

    //product页返回商品颜色选项接口
    getProduct_color:LOCALURL+"/mi/v1/product_color",

    //product页返回商品图片（banner图）接口
    getProduct_banner:LOCALURL+"/mi/v1/product_banner",
    
    //搜索商品接口
    searchProduct:LOCALURL+"/mi/v1/searchProduct",
    //获取搜索页商品的图片接口
    getImgBg:LOCALURL+"/mi/v1/goods_img_bg",
    //获取主页brick里的商品接口
    getBrickProduct:LOCALURL+"/mi/v1/brick_product",
    

    //加入购物车接口
    addCart:LOCALURL+"/mi/v1/addcart",
    //登录接口
    login:LOCALURL+"/mi/v1/login",
    //手机验证码登录接口
    phoneLogin:LOCALURL+"/mi/v1/phoneLogin",

    //获取购物车里商品接口
    getCart:LOCALURL+"/mi/v1/cart",

    //获取购物车里对应商品的信息接口
    cartProduct:LOCALURL+"/mi/v1/cart_product",
    //获取购物车里对应商品的服务
    getService:LOCALURL+"/mi/v1/service",
    //获取购物页面下方的推荐商品信息
    getRecommend:LOCALURL+"/mi/v1/recommend",

    
}
export {URL}