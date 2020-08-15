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
    
}
export {URL}