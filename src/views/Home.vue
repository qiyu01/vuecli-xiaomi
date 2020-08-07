<template>
<div class="wraper">
    
  <Header>
      
  </Header>
  <div class="home-hero container">
    <div class="home-hero-swiper-container">
      <Swiper-fade></Swiper-fade>
    </div>
    <div class="home-hero-sub clearfix">
            <div class="home-channel">
                <ul class="home-channel-list clearfix">
                    <li><a href="">
                        <img src="images/home-channel1.png" alt="">
                        小米秒杀
                    </a></li>
                    <li><a href="">
                        <img src="images/home-channel2.png" alt="">
                        小米秒杀
                    </a></li>
                    <li><a href="">
                        <img src="images/home-channel3.png" alt="">
                        小米秒杀
                    </a></li>
                    <li><a href="">
                        <img src="images/home-channel4.png" alt="">
                        小米秒杀
                    </a></li>
                    <li><a href="">
                        <img src="images/home-channel5.png" alt="">
                        小米秒杀
                    </a></li>
                    <li><a href="">
                        <img src="images/home-channel6.png" alt="">
                        小米秒杀
                    </a></li>
                </ul>
            </div>


            <div class="home-promo">
                <ul class="home-promo-list">
                    <li><a href="">
                        <img src="images/home-promo1.jpg" alt="">
                    </a></li>
                    <li><a href="">
                        <img src="images/home-promo2.jpg" alt="">
                    </a></li>
                    <li><a href="">
                        <img src="images/home-promo3.jpg" alt="">
                    </a></li>
                </ul>
            </div>
        </div>
     
      
  </div>

  <div class="page-main">
        <div class="container">
            <div class="home-flashsale xm-plain-box">
                <div class="box-hd">
                    <h2 class="title">小米闪购</h2>
                </div>
                <div class="box-bd clearfix">
                    <Flash-counter></Flash-counter>
                    <Swiper-slide></Swiper-slide>
                </div>


            </div>
            <!--  -->
            <div class="home-banner-box">
                <a href=""><img src="images/banner-box1.webp" alt=""></a>
            </div>
            <Home-brick>
                <template v-slot:more>
                    <a href="">
                            查看全部
                        <i class="iconfont icon-jiantou1"></i>
                    </a>
                </template>
                
            </Home-brick>
            <!--  -->
            <div class="home-banner-box">
                <a href=""><img src="images/banner-box2.webp" alt=""></a>
            </div>
            <Home-brick>
                <template v-slot:title>
                    <h2 class="title">家电</h2>
                </template>
                <template v-slot:more>
                    <ul class="tab-list">
                            <li class="active">热门</li>
                            <li>电视影音</li>
                    </ul>
                </template>
                <template v-slot:promo>
                    <li class="brick-item brick-item-m">
                        <a href="">
                                <img src="images/brick-item-m1.webp" alt="">
                        </a>
                    </li>
                    <li class="brick-item brick-item-m">
                        <a href="">
                        <img src="images/brick-item-m2.webp" alt="">
                        </a>
                    </li>
                </template>
                <template v-slot:brickitem>
                    <li class="brick-item-s brick-item">
                                <a href="">
                                    <div class="figure">
                                        <img src="images/brick-item-s1.webp" alt="">
                                    </div>
                                    <h3 class="title">
                                        Air 13.3" 2019款 
                                    </h3>
                                    <p class="price">
                                        <span class="num">5699</span>元<span>起</span>
                                    </p>
                                </a>
                            </li>
                    <li class="brick-item-s brick-item">
                                <a href="">
                                    <div class="figure figure-more">
                                        <i class="iconfont icon-yuanquanjiantouyou
                                          "></i>
                                    </div>
                                    <div class="more">
                                        浏览更多<small>热门</small>
                                    </div>
                                </a>
                            </li>
                </template>
                
            </Home-brick>
            <!--  -->
            <div class="home-banner-box">
                <a href=""><img src="images/banner-box3.webp" alt=""></a>
            </div>
            <Home-brick>
                <template v-slot:title>
                    <h2 class="title">智能</h2>
                </template>
                <template v-slot:more>
                    <ul class="tab-list">
                            <li class="active">热门</li>
                            <li>安防</li>
                            <li>出行</li>
                    </ul>
                </template>
                <template v-slot:promo>
                    <li class="brick-item brick-item-m">
                        <a href="">
                                <img src="images/brick-item-m1.webp" alt="">
                        </a>
                    </li>
                    <li class="brick-item brick-item-m">
                        <a href="">
                        <img src="images/brick-item-m2.webp" alt="">
                        </a>
                    </li>
                </template>
                <template v-slot:brickitem>
                    <li class="brick-item-s brick-item">
                                <a href="">
                                    <div class="figure">
                                        <img src="images/brick-item-s1.webp" alt="">
                                    </div>
                                    <h3 class="title">
                                        Air 13.3" 2019款 
                                    </h3>
                                    <p class="price">
                                        <span class="num">5699</span>元<span>起</span>
                                    </p>
                                </a>
                            </li>
                    <li class="brick-item-s brick-item">
                                <a href="">
                                    <div class="figure figure-more">
                                        <i class="iconfont icon-yuanquanjiantouyou
                                          "></i>
                                    </div>
                                    <div class="more">
                                        浏览更多<small>热门</small>
                                    </div>
                                </a>
                            </li>
                </template>
                
            </Home-brick>
            <!--  -->
            <div class="home-banner-box">
                <a href=""><img src="images/banner-box4.webp" alt=""></a>
            </div>
            <Home-brick>
                <template v-slot:title>
                    <h2 class="title">搭配</h2>
                </template>
                <template v-slot:more>
                    <ul class="tab-list">
                            <li class="active">热门</li>
                            <li>耳机音箱</li>
                    </ul>
                </template>
                <template v-slot:promo>
                    <li class="brick-item brick-item-m">
                        <a href="">
                                <img src="images/brick-item-m1.webp" alt="">
                        </a>
                    </li>
                    <li class="brick-item brick-item-m">
                        <a href="">
                        <img src="images/brick-item-m2.webp" alt="">
                        </a>
                    </li>
                </template>
                <template v-slot:brickitem>
                    <li class="brick-item-s brick-item">
                                <a href="">
                                    <div class="figure">
                                        <img src="images/brick-item-s1.webp" alt="">
                                    </div>
                                    <h3 class="title">
                                        Air 13.3" 2019款 
                                    </h3>
                                    <p class="price">
                                        <span class="num">5699</span>元<span>起</span>
                                    </p>
                                </a>
                            </li>
                    <li class="brick-item-s brick-item">
                                <a href="">
                                    <div class="figure figure-more">
                                        <i class="iconfont icon-yuanquanjiantouyou
                                          "></i>
                                    </div>
                                    <div class="more">
                                        浏览更多<small>热门</small>
                                    </div>
                                </a>
                            </li>
                </template>
                
            </Home-brick>
            <!--  -->
            <div class="home-banner-box">
                <a href=""><img src="images/banner-box5.webp" alt=""></a>
            </div>
            <Home-brick>
                <template v-slot:title>
                    <h2 class="title">配件</h2>
                </template>
                <template v-slot:more>
                    <ul class="tab-list">
                            <li class="active">热门</li>
                            <li>充电器</li>
                    </ul>
                </template>
                <template v-slot:promo>
                    <li class="brick-item brick-item-m">
                        <a href="">
                                <img src="images/brick-item-m1.webp" alt="">
                        </a>
                    </li>
                    <li class="brick-item brick-item-m">
                        <a href="">
                        <img src="images/brick-item-m2.webp" alt="">
                        </a>
                    </li>
                </template>
                <template v-slot:brickitem>
                    <li class="brick-item-s brick-item">
                                <a href="">
                                    <div class="figure">
                                        <img src="images/brick-item-s1.webp" alt="">
                                    </div>
                                    <h3 class="title">
                                        Air 13.3" 2019款 
                                    </h3>
                                    <p class="price">
                                        <span class="num">5699</span>元<span>起</span>
                                    </p>
                                </a>
                            </li>
                    <li class="brick-item-s brick-item">
                                <a href="">
                                    <div class="figure figure-more">
                                        <i class="iconfont icon-yuanquanjiantouyou
                                          "></i>
                                    </div>
                                    <div class="more">
                                        浏览更多<small>热门</small>
                                    </div>
                                </a>
                            </li>
                </template>
                
            </Home-brick>
            <!--  -->
            <div class="home-banner-box">
                <a href=""><img src="images/banner-box6.webp" alt=""></a>
            </div>
            <Home-brick>
                <template v-slot:title>
                    <h2 class="title">周边</h2>
                </template>
                <template v-slot:more>
                    <ul class="tab-list">
                            <li class="active">热门</li>
                            <li>出行</li>
                    </ul>
                </template>
                <template v-slot:promo>
                    <li class="brick-item brick-item-m">
                        <a href="">
                                <img src="images/brick-item-m1.webp" alt="">
                        </a>
                    </li>
                    <li class="brick-item brick-item-m">
                        <a href="">
                        <img src="images/brick-item-m2.webp" alt="">
                        </a>
                    </li>
                </template>
                <template v-slot:brickitem>
                    <li class="brick-item-s brick-item">
                                <a href="">
                                    <div class="figure">
                                        <img src="images/brick-item-s1.webp" alt="">
                                    </div>
                                    <h3 class="title">
                                        Air 13.3" 2019款 
                                    </h3>
                                    <p class="price">
                                        <span class="num">5699</span>元<span>起</span>
                                    </p>
                                </a>
                            </li>
                    <li class="brick-item-s brick-item">
                                <a href="">
                                    <div class="figure figure-more">
                                        <i class="iconfont icon-yuanquanjiantouyou
                                          "></i>
                                    </div>
                                    <div class="more">
                                        浏览更多<small>热门</small>
                                    </div>
                                </a>
                            </li>
                </template>
                
            </Home-brick>
            <!--  -->
            <div class="home-banner-box">
                <a href=""><img src="images/banner-box7.webp" alt=""></a>
            </div>
            <!-- video -->
            <div class="home-brick-box xm-plain-box home-video-box">
                <div class="box-hd">
                    <h2 class="title">视频</h2>
                    <div class="more">
                        <a href="">
                            查看全部
                            <i class="iconfont icon-jiantou1"></i>
                        </a>
                    </div>
                </div>
                <div class="box-db clearfix">
                    <ul class="video-list">
                        <li class="video-item">
                            <a href="">
                                <div class="figure">
                                    <img src="images/video-item2.webp" alt="">
                                    <span class="play">
                                        <i class=""></i>
                                    </span>
                                </div>
                                <h3 class="title">
                                    Redmi 10X系列发布会
                                </h3>
                                <p class="desc">
                                    
                        Redmi 10X系列发布会
                    
                                </p>
                            </a>
                        </li>
                        <li class="video-item">
                            <a href="">
                                <div class="figure">
                                    <img src="images/video-item3.webp" alt="">
                                    <span class="play">
                                        <i class=""></i>
                                    </span>
                                </div>
                                <h3 class="title">
                                    Redmi 10X系列发布会
                                </h3>
                                <p class="desc">
                                    
                        Redmi 10X系列发布会
                    
                                </p>
                            </a>
                        </li>
                        <li class="video-item">
                            <a href="">
                                <div class="figure">
                                    <img src="images/video-item4.webp" alt="">
                                    <span class="play">
                                        <i class=""></i>
                                    </span>
                                </div>
                                <h3 class="title">
                                    Redmi 10X系列发布会
                                </h3>
                                <p class="desc">
                                    
                        Redmi 10X系列发布会
                    
                                </p>
                            </a>
                        </li>
                        <li class="video-item">
                            <a href="">
                                <div class="figure">
                                    <img src="images/video-item1.webp" alt="">
                                    <span class="play">
                                        <i class=""></i>
                                    </span>
                                </div>
                                <h3 class="title">
                                    Redmi 10X系列发布会
                                </h3>
                                <p class="desc">
                                    
                        Redmi 10X系列发布会
                    
                                </p>
                            </a>
                        </li>

                    </ul>
                </div>
                
            </div>
        </div>



    </div>

  <Footer></Footer>
  <Tool-bar></Tool-bar>
    <el-backtop target=".wraper" class="el-backtop">
        <a href="javascript:void(0);" class="item backtop">

        
            <div class="icon">
                <img src="images/tool-bar6.png" alt="">
                <img src="images/tool-bar6y.png" alt="">
            </div>
            <span class="text">回顶部</span>
            
        </a>

    </el-backtop>
  
</div>
  
</template>

<script>
// @ is an alias to /src
import Swiper from 'swiper'
import HomeBrick from '@/components/Home-brick.vue'
import ToolBar from '@/components/Tool-bar.vue'
import FlashCounter from '@/components/Flash-counter.vue'
import SwiperFade from '@/components/Swiper-fade.vue'
import SwiperSlide from '@/components/Swiper-slide.vue'

export default {
  name: 'Home',
  components: {
    FlashCounter,SwiperFade,SwiperSlide,ToolBar,HomeBrick
  },
  mounted() {
      
  },
}
</script>
<style scoped>
/* 防止样式穿透的方法scoped */
    .wraper {
        height: 100vh;
        overflow-x: hidden;
    }

.el-backtop{
    position: fixed;
    width: 82px!important;
    height: 90px!important;
    bottom: 78px!important;
    right: 18px!important;
    z-index: 99!important;
}
.el-backtop .item{
    position: relative;
    display: block;
    width: 82px;
    height: 90px;
    margin-top: -1px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
    cursor: default;
    font-size: 14px;
}
.el-backtop .backtop{
    margin-top: 14px;
    border-top: 1px solid #f5f5f5;
    visibility: visible;
}
.el-backtop .item .icon{
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0 auto 8px;
    padding-top: 18px;
}
.el-backtop .item .icon img{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 30px;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
}
.el-backtop .item .icon img:last-child{
    display: none;
}
.el-backtop .item:hover .icon img:last-child{
    display: inline-block;
}
.el-backtop .item .icon img:last-child
.el-backtop .item .text{
    color: #757575;
    -webkit-transition: color .3s;
    transition: color .3s;
}
.el-backtop .item:hover .text{
    color: #ff6700;
}

  
    

  .home-hero{
    position: relative;
    margin-bottom: 26px!important;
    z-index: 0;
}
/* home-hero-sub */
.home-hero-sub{
    margin-top: 14px;
}
.home-hero-sub .home-channel{
    float: left;
    width: 234px;
}
.home-hero-sub .home-channel ul{
    padding: 3px;
    font-size: 12px;
    text-align: center;
    background-color: #5f5750;
}
.home-hero-sub .home-channel ul li{
    position: relative;
    float: left;
    width: 70px;
    height: 82px;
    padding: 0 3px;
}
.home-hero-sub .home-channel ul li::before,
.home-hero-sub .home-channel ul li::after{
    position: absolute;
    content: "";
    background: #665e57;
}
.home-hero-sub .home-channel ul li::before{
    top: -1px;
    left: 6px;
    width: 64px;
    height: 1px;
}
.home-hero-sub .home-channel ul li::after{
    top: 6px;
    left: 0;
    width: 1px;
    height: 70px;
}
.home-hero-sub .home-channel ul li a{
    display: block;
    padding-top: 18px;
    text-overflow: ellipsis;
    color: #fff;
    opacity: .7;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
}
.home-hero-sub .home-channel ul li a:hover{
    opacity: 1;
}
.home-hero-sub .home-channel ul li img{
    width: 24px;height: 24px;
    display: block;
    margin: 0 auto 4px;
}
.home-hero .home-promo{
    float: left;
    width: 978px;height: 170px;
    margin-left: 14px;
}
.home-hero .home-promo ul li{
    float: left;
    width: 316px;
    height: 170px;
    margin-left: 15px;
    transition: box-shadow .2s linear,-webkit-box-shadow .2s linear;
    
}
.home-hero .home-promo ul li:hover{
    box-shadow: 0 15px 30px rgba(0,0,0,.1);
}
.home-hero .home-promo ul li:first-child{
    margin-left: 0;
}
.home-hero .home-promo ul li img{
    display: block;
    width: 316px;
    height: 170px;
}

/* page-main */
.page-main{
    padding-top: 4px;
    padding-bottom: 12px;
    background: #f5f5f5;
}

/* 小米闪购 */
.home-flashsale{
    margin-bottom: 22px;
    position: relative;
}

/* home-banner-box */
.page-main .home-banner-box{
    height: 120px;
    margin: 22px 0;
    overflow: hidden;
}
.page-main .home-banner-box img{
    width: 1226px;
    height: 120px;
}




/* 视频video */
.home-brick-box .video-list{
    width: 1240px;
    height: 285px;
}
.home-brick-box.home-video-box{
    margin-bottom: 0;
}
.home-brick-box .video-list .video-item{
    position: relative;
    float: left;
    width: 296px;
    height: 285px;
    margin-left: 14px;
    margin-bottom: 14px;
    text-align: center;
    background: #fff;
    transition: all .2s linear;
}
.home-brick-box .video-list .video-item:first-child{
    margin-left: 0;
}
.home-brick-box .video-list .video-item:hover{
    -webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1);
    box-shadow: 0 15px 30px rgba(0,0,0,.1);
    -webkit-transform: translate3d(0,-2px,0);
    transform: translate3d(0,-2px,0);
}
.home-brick-box .video-item .figure{
    position: relative;
    width: 296px;
    height: 180px;
    margin: 0 0 28px;
}
.home-brick-box .video-item .figure:hover .play{
    background-color: #ff6700;
    border-color: #ff6700;
}
.home-brick-box .video-item .play {
    position: absolute;
    left: 20px;
    bottom: 10px;
    width: 32px;
    height: 20px;
    border: 2px solid #fff;
    border-radius: 12px;
    background-color: rgba(0,0,0,.6);
    color: #fff;
    transition: all .2s;
    overflow: hidden;
}
.home-brick-box .video-item .play i{
    display: inline-block;
    width: 0px;height: 0px;
    border: 5px solid transparent;
    border-left-color:#fff ;
    transform: scale(1.6,1.1);
    margin-left: 10px;
    /* color: transparent; */
    /* background-color: #fff; */
}
.home-brick-box .video-item .title{
    margin: 0 14px 6px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.home-brick-box .video-item .desc{
    height: 18px;
    margin: 0 14px;
    font-size: 12px;
    color: #b0b0b0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

</style>