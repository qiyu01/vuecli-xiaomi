<template>
  <div class="home-hero-swiper swiper-container">
	<div class="swiper-wrapper">
		<div v-for="el in arrItem" :key="el.name" class="swiper-slide">
			<img class="img" :src="el.imgUrl">
		</div>
	</div>
	<!-- 如果需要分页器 -->
	<div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
</div>
</template>

<script>
import Swiper from 'swiper' 
// import 'swiper/css/swiper.min.css';
  export default {
    data(){
	    return {
			arrItem:[
					{
							name:'swiperSlide1',
							imgUrl:'images/home-hero-banner1.webp'
					},
					{
							name:'swiperSlide2',
							imgUrl:'images/header-bannr1.webp'
					},
					{
							name:'swiperSlide3',
							imgUrl:'images/header-bannr2.jpg'
					},
					{
							name:'swiperSlide4',
							imgUrl:'images/header-bannr3.webp'
                    }
                    ,
					{
							name:'swiperSlide5',
							imgUrl:'images/header-bannr4.webp'
					}
			    ]
	        }
        },
    mounted() {
        new Swiper('.home-hero-swiper', {
		direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          speed:1000, //动画速度
          autoplay:{
            delay: 5000,//5秒切换一次
            // stopOnLastSlide: true, //最后一个slide停止自动滑动
            disableOnInteraction: false,//用户操作后继续播放
            },
        //   如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable:true,
          },
          
          // 如果需要前进后退按钮
          navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          },
          effect : 'fade',
          fadeEffect: {
              crossFade: false,
          }
	})
    }
  }
</script>
<style>
 @import '/css/swiper.min.css';

.home-hero-swiper{
    width: 1226px;height: 460px;
    overflow: hidden;
}
.home-hero-swiper img{
    width: 100%;height: 100%;
}
.swiper-button-prev{
    left: 234px;
    margin-top:-34px;
    /* background-image: none; */
    background-color: transparent;
    width: 41px;height: 69px;
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ccc'%2F%3E%3C%2Fsvg%3E");
    background-size:25px 30px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    
}
.swiper-button-prev:hover{
    background-color:rgba(51,51,51,.8);
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23fff'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next{
    right: 0;
    background-color:transparent;
    width: 41px;height: 69px;
    margin-top:-34px;
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ccc'%2F%3E%3C%2Fsvg%3E");
    background-size:25px 30px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}
.swiper-button-next:hover{
    background-color:rgba(51,51,51,.8);
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23fff'%2F%3E%3C%2Fsvg%3E");
}

.swiper-container-horizontal>.swiper-pagination-bullets{
    left: -30px!important;
    bottom: 20px;
    padding-left: 570px;
}
.swiper-pagination-bullet{
    /* float: right; */
    width: 6px;height: 6px;
    opacity: 1;
    background-color: rgba(0,0,0,.4);
    border:2px solid hsla(0,0%,100%,.3);
}
.home-hero-swiper .swiper-pagination-bullet-active{
    background-color: hsla(0,0%,100%,.4);
    border:2px solid rgba(0,0,0,.4);
}
.swiper-pagination-bullet:hover{
    background-color: hsla(0,0%,100%,.4);
    border:2px solid rgba(0,0,0,.4);
}
</style>