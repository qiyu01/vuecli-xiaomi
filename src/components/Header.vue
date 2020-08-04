<template>
    <div class="header">
        <div class="site-topbar">
            <div class="container">
                <div class="topbar-nav">
                    <a href="javascriot:void(0);">小米商城</a>
                    <span class="sep">|</span>
                    <a href="javascriot:void(0);">MIUI</a>
                    <span class="sep">|</span>
                    <a href="javascriot:void(0);">IoT</a>
                    <span class="sep">|</span>
                    <a href="javascriot:void(0);">云服务</a>
                    <span class="sep">|</span>
                    <a href="javascriot:void(0);">金融</a>
                    <span class="sep">|</span>
                    <a href="javascriot:void(0);">有品</a>
                    <span class="sep">|</span>
                    <a href="javascriot:void(0);">小爱开放平台</a>
                    <span class="sep">|</span>
                    <a href="javascriot:void(0);">企业团购</a>
                    <span class="sep">|</span>
                    <a href="javascriot:void(0);">资质证照</a>
                    <span class="sep">|</span>
                    <a href="javascriot:void(0);">协议规则</a>
                    <span class="sep">|</span>
                    <a href="javascriot:void(0);" class="topbar-download">下载app
                        <span class="appcode">
                            <img src="images/download.png" alt="">
                            小米商城APP
                        </span>
                    </a>
                    <span class="sep">|</span>
                    <a href="javascriot:void(0);">Select Location</a>
                    

                </div>
                <div class="topbar-cart">
                    <a href="#">
                        <em class="iconfont icon-gouwuchekong"></em>
                       
                        <span> 购物车</span>
                        <span>(0)</span>
                    </a>
                    <div class="topbar-cart-menu">
                        购物车中还没有商品，赶紧选购吧！
                    </div>
                </div>
                <div class="topbar-info">
                    <a href="javascritp:void(0);">登录</a>
                    <span class="sep">|</span>
                    <a href="javascritp:void(0);">注册</a>
                    <span class="sep">|</span>
                    <a href="#" class="message">消息通知<i></i></a>
                </div>
            </div>


        </div>
        
        <Header-nav :navcategory="navcategory">
            
        </Header-nav>
    </div>
</template>
<script>
import HeaderNav from './Header-nav.vue'
export default {
  name: 'Header',
  props: ["navcategory"],//是否显示“全部商品分类”
  components: {
    HeaderNav
  }
}
</script>

<style>
/* @import '../assets/css/base.css'; */
/* 顶部黑色导航栏--site-topbar-- */


.header .site-topbar{
    color: #b0b0b0;
    font-size: 12px;
    background-color: #333;
    height: 40px;
}
.header .topbar-nav {
    float: left;
    height: 40px;
    line-height: 40px;
}
.header .site-topbar .topbar-nav a{
    display: inline-block;
    line-height: 40px;
    color: #b0b0b0;
    position: relative;
    /* text-align: center; */
}
.header .site-topbar .topbar-nav a:hover{
    color: #fff;
}
.header .site-topbar .topbar-nav .sep{
    margin: 6.6px;
    color: #424242;
    font-family: sans-serif;
}
/* topbar-download */
.header .site-topbar .topbar-nav a.topbar-download:hover::before{
    content: "";
    display: inline-block;
    position: absolute;
    top: 35px;
    left: 18px;
    background-color: #fff;
    width: 15px;height: 15px;
    transform: rotate(45deg);

}
.header .site-topbar .topbar-nav a>span{
    position: absolute;
    top: 40px;
    left: 50%;
    width: 124px;height: 0px;
    background-color: #fff;
    margin-left: -55px;
    box-shadow: 0 1px 5px #aaa;
    text-align: center;
    font-size: 14px;
    color: #333;
    line-height: 1;
    overflow: hidden;
    transition: height .3s;
    z-index: 1;
    
    
}
.header .site-topbar .topbar-nav a:hover>span{
    height: 148px;
}

.header .site-topbar .topbar-nav .appcode img{
    display: block;
    margin: 18px auto 12px;
    border: 0;
    width: 90px ;height: 90px;

}


/* 购物车 */
.header .site-topbar .topbar-cart{
    position: relative;
    float: right;
    width: 120px;
    height: 40px;
    margin-left: 15px;
    transition: all .2s;
    background-color: #424242;
}
.header .site-topbar .topbar-cart a{
    display: block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #b0b0b0;
    
}
.header .site-topbar .topbar-cart:hover{
    background-color: #fff;
   
}
.header .site-topbar .topbar-cart:hover a{
    color: #ff6700;
}

.header .site-topbar .topbar-cart a span{
    display: inline-block;
    margin-left: 5px;
    height: 40px;line-height: 40px;
    transform: translateY(-2px);
    
}
.header .site-topbar .topbar-cart a em{
    display: inline-block;
    height: 40px;line-height: 40px;
    font-size: 17px;
    transform: translateX(-2px) scaleX(1.1);
    
}
.header .site-topbar .topbar-cart .topbar-cart-menu{
    position: absolute;
    right: 0;
    top: 40px;
    width: 316px;height: 0px;
    background-color: #fff;
    color: #000;
    box-shadow: 0 2px 10px rgba(0,0,0,.15);
    text-align: center; 
    overflow: hidden;  
    transition: height .3s;
    line-height: 100px;
    z-index: 2;
}
.header .site-topbar .topbar-cart:hover .topbar-cart-menu{
    height: 100px;
}

.header .site-topbar .topbar-info{
    float: right;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
}
.header .site-topbar .topbar-info a{
    float: left;
    color: #b0b0b0;
    padding: 0 5px;
    text-align: center;
    font-size: 12px;
}
.header .site-topbar .topbar-info a.message{
    padding: 0 10PX;
}
.header .site-topbar .topbar-info a:hover{
    color: #fff;
}
.header .site-topbar .topbar-info .sep{
    float: left;
    color: #424242;
}


    
</style>