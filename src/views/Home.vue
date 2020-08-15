<template>
<div class="wraper home">
    
    
  <Header :navcategory="true">
      
  </Header>
  <div class="home-hero container">
    <div class="home-hero-swiper-container">
      <Swiper-fade></Swiper-fade>
    </div>
    <div class="home-hero-sub clearfix">
            <div class="home-channel">
                <ul class="home-channel-list clearfix">
                    <li><a href="javascript:void(0)">
                        <img src="images/home-channel1.png" alt="">
                        小米秒杀
                    </a></li>
                    <li><a href="javascript:void(0)">
                        <img src="images/home-channel2.png" alt="">
                        企业团购
                    </a></li>
                    <li><a href="javascript:void(0)">
                        <img src="images/home-channel3.png" alt="">
                        F码通道
                    </a></li>
                    <li><a href="javascript:void(0)">
                        <img src="images/home-channel4.png" alt="">
                        米粉卡
                    </a></li>
                    <li><a href="javascript:void(0)">
                        <img src="images/home-channel5.png" alt="">
                        以旧换新
                    </a></li>
                    <li><a href="javascript:void(0)">
                        <img src="images/home-channel6.png" alt="">
                        话费充值
                    </a></li>
                </ul>
            </div>


            <div class="home-promo">
                <ul class="home-promo-list">
                    <li>
                        <router-link to="product">
                            <img src="images/home-promo1.jpg" alt="">
                        </router-link>
                    </li>
                    <li>
                        <router-link to="product">
                        <img src="images/home-promo2.jpg" alt="">
                        </router-link>
                    </li>
                    <li>
                        <router-link to="product">
                        <img src="images/home-promo3.jpg" alt="">
                        </router-link>
                    </li>
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
                <a href="javascript:void(0)"><img src="images/banner-box1.webp" alt=""></a>
            </div>
            <Home-brick :products="productsPhone" :cid="1">
                <template v-slot:more>
                    <router-link to="search">
                        查看全部
                        <i class="iconfont icon-jiantou1"></i>
                    </router-link>
                </template>
                
            </Home-brick>
            <!--  -->
            <div class="home-banner-box">
                <a href="javascript:void(0)"><img src="images/banner-box2.webp" alt=""></a>
            </div>
            <Home-brick :products="productsTV" :cid="3">
                <template v-slot:title>
                    <h2 class="title">家电</h2>
                </template>            
            </Home-brick>
            <!--  -->
            <div class="home-banner-box">
                <a href="javascript:void(0)"><img src="images/banner-box3.webp" alt=""></a>
            </div>
            <Home-brick :products="productsAI" :cid="11">
                <template v-slot:title>
                    <h2 class="title">智能</h2>
                </template>
            </Home-brick>
            <!--  -->
            <div class="home-banner-box">
                <a href="javascript:void(0)"><img src="images/banner-box4.webp" alt=""></a>
            </div>
            <Home-brick :products="productsAI" :cid="11">
                <template v-slot:title>
                    <h2 class="title">搭配</h2>
                </template>         
            </Home-brick>
            <!--  -->
            <div class="home-banner-box">
                <a href="javascript:void(0)"><img src="images/banner-box5.webp" alt=""></a>
            </div>
            <Home-brick :products="productsAI" :cid="11">
                <template v-slot:title>
                    <h2 class="title">配件</h2>
                </template>            
            </Home-brick>
            <!--  -->
            <div class="home-banner-box">
                <a href="javascript:void(0)"><img src="images/banner-box6.webp" alt=""></a>
            </div>
            <Home-brick :products="productsAI" :cid="11">
                <template v-slot:title>
                    <h2 class="title">周边</h2>
                </template>
            </Home-brick>
            <!--  -->
            <div class="home-banner-box">
                <a href="javascript:void(0)"><img src="images/banner-box7.webp" alt=""></a>
            </div>
            <!-- video -->
            <div class="home-brick-box xm-plain-box home-video-box">
                <div class="box-hd">
                    <h2 class="title">视频</h2>
                    <div class="more">
                        <a href="javascript:void(0)">
                            查看全部
                            <i class="iconfont icon-jiantou1"></i>
                        </a>
                    </div>
                </div>
                <div class="box-db clearfix">
                    <ul class="video-list">
                        <li class="video-item">
                            <a href="javascript:void(0)">
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
                            <a href="javascript:void(0)">
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
                            <a href="javascript:void(0)">
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
                            <a href="javascript:void(0)">
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
    
  
</div>
  
</template>

<script>
// @ is an alias to /src
import HomeBrick from '@/components/Home-brick.vue'
import ToolBar from '@/components/Tool-bar.vue'
import FlashCounter from '@/components/Flash-counter.vue'
import SwiperFade from '@/components/Swiper-fade.vue'
import SwiperSlide from '@/components/Swiper-slide.vue'
import {brickProduct} from "../util/api/getProduct";

export default {
  name: 'Home',
  data() {
      return {
          productsPhone:[],
          productsTV:[],
          productsAI:[]
      }
  },
  components: {
    FlashCounter,SwiperFade,SwiperSlide,ToolBar,HomeBrick
  },
  mounted() {
      brickProduct().then((res)=>{
          if(res.length>0){
              for(let i=0;i<res.length;i++){
              for(let j of res[i]){
                  j.img_src=require("../assets/images/product/product200/"+j.img_src)
              }
            }
          }
        //   手机类返回14条数据，电脑类返回两个7条数据，智能返回21条数据
          this.productsPhone=res[0]
          this.productsTV=res[1]
          this.productsAI=res[2]
      });
  },
}
</script>
<style scoped> 
/* 防止样式穿透的方法scoped */
.home .home-hero{
    position: relative;
    margin-bottom: 26px!important;
    z-index: 0;
}
/* home-hero-sub */
.home .home-hero-sub{
    margin-top: 14px;
}
.home .home-hero-sub .home-channel{
    float: left;
    width: 234px;
}
.home .home-hero-sub .home-channel ul{
    padding: 3px;
    font-size: 12px;
    text-align: center;
    background-color: #5f5750;
}
.home .home-hero-sub .home-channel ul li{
    position: relative;
    float: left;
    width: 70px;
    height: 82px;
    padding: 0 3px;
}
.home .home-hero-sub .home-channel ul li::before,
.home .home-hero-sub .home-channel ul li::after{
    position: absolute;
    content: "";
    background: #665e57;
}
.home .home-hero-sub .home-channel ul li::before{
    top: -1px;
    left: 6px;
    width: 64px;
    height: 1px;
}
.home .home-hero-sub .home-channel ul li::after{
    top: 6px;
    left: 0;
    width: 1px;
    height: 70px;
}
.home .home-hero-sub .home-channel ul li a{
    display: block;
    padding-top: 18px;
    text-overflow: ellipsis;
    color: #fff;
    opacity: .7;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
}
.home .home-hero-sub .home-channel ul li a:hover{
    opacity: 1;
}
.home .home-hero-sub .home-channel ul li img{
    width: 24px;height: 24px;
    display: block;
    margin: 0 auto 4px;
}
.home .home-hero .home-promo{
    float: left;
    width: 978px;height: 170px;
    margin-left: 14px;
}
.home .home-hero .home-promo ul li{
    float: left;
    width: 316px;
    height: 170px;
    margin-left: 15px;
    transition: box-shadow .2s linear,-webkit-box-shadow .2s linear;
    
}
.home .home-hero .home-promo ul li:hover{
    box-shadow: 0 15px 30px rgba(0,0,0,.1);
}
.home .home-hero .home-promo ul li:first-child{
    margin-left: 0;
}
.home .home-hero .home-promo ul li img{
    display: block;
    width: 316px;
    height: 170px;
}

/* page-main */
.home .page-main{
    padding-top: 4px;
    padding-bottom: 12px;
    background: #f5f5f5;
}

/* 小米闪购 */
.home .home-flashsale{
    margin-bottom: 22px;
    position: relative;
}
.home .box-hd {
  position: relative;
  height: 58px;
  -webkit-font-smoothing: antialiased;
}
.home .box-hd .title {
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}

/* home-banner-box */
.home .page-main .home-banner-box{
    height: 120px;
    margin: 22px 0;
    overflow: hidden;
}
.home .page-main .home-banner-box img{
    width: 1226px;
    height: 120px;
}




/* 视频video */
.home .home-brick-box .video-list{
    width: 1240px;
    height: 285px;
}
.home .home-brick-box.home-video-box{
    margin-bottom: 0;
}
.home .home-brick-box .video-list .video-item{
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
.home .home-brick-box .video-list .video-item:first-child{
    margin-left: 0;
}
.home .home-brick-box .video-list .video-item:hover{
    -webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1);
    box-shadow: 0 15px 30px rgba(0,0,0,.1);
    -webkit-transform: translate3d(0,-2px,0);
    transform: translate3d(0,-2px,0);
}
.home .home-brick-box .video-item .figure{
    position: relative;
    width: 296px;
    height: 180px;
    margin: 0 0 28px;
}
.home .home-brick-box .video-item .figure:hover .play{
    background-color: #ff6700;
    border-color: #ff6700;
}
.home .home-brick-box .video-item .play {
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
.home .home-brick-box .video-item .play i{
    display: inline-block;
    width: 0px;height: 0px;
    border: 5px solid transparent;
    border-left-color:#fff ;
    transform: scale(1.6,1.1);
    margin-left: 10px;
    /* color: transparent; */
    /* background-color: #fff; */
}
.home .home-brick-box .video-item .title{
    margin: 0 14px 6px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.home .home-brick-box .video-item .desc{
    height: 18px;
    margin: 0 14px;
    font-size: 12px;
    color: #b0b0b0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

</style>