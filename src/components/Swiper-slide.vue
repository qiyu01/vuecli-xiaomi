<template>
    <div class="slide-swiper">
        <div class="swiper-container">
                        <div class="swiper-wrapper">
                                  
		                          <div v-for="el in arrItem" :key="el.name" class="swiper-slide" :style="{borderTopColor: el.color}">
			                              <img class="img" :src="el.imgUrl">
                                    <h3 class="title">悦米YM人体工学椅 白色</h3>
                                    <p class="desc">健康坐姿，舒适体验</p>
                                    <p class="price">
                                        <span>1199元</span>
                                        <del>1499元</del>
                                    </p>
		                          </div>
	                        </div>
                        
        </div>
        <div class="flashsale-swiper-navigation">
                <span class="swiper-flashsale-prev"><i class="iconfont icon-xiaoyuhao2"></i></span>
                <span class="swiper-flashsale-next"><i class="iconfont icon-xiaoyuhao2"></i></span>
        </div>
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
                            color:'#ffac13',
							imgUrl:'images/flashsale-swiper1.jpg'
					},
					{
                            name:'swiperSlide2',
                            color:'#83c44e',
							imgUrl:'images/flashsale-swiper2.jpg'
					},
					{
                            name:'swiperSlide3',
                            color:'#2196f3',
							imgUrl:'images/flashsale-swiper3.jpg'
					},
					{
                            name:'swiperSlide4',
                            color:'#e53935',
							imgUrl:'images/flashsale-swiper4.jpg'
                    }
                    ,
					{
                            name:'swiperSlide5',
                            color:'#00c0a5',
							imgUrl:'images/flashsale-swiper1.jpg'
                    }
                    ,
					{
                            name:'swiperSlide6',
                            color:'#ffac13',
							imgUrl:'images/flashsale-swiper2.jpg'
                    }
                    ,
					{
                            name:'swiperSlide7',
                            color:'#83c44e',
							imgUrl:'images/flashsale-swiper3.jpg'
                    }
                    ,
					{
                            name:'swiperSlide8',
                            color:'#2196f3',
							imgUrl:'images/flashsale-swiper4.jpg'
                    }
                    ,
					{
                            name:'swiperSlide9',
                            color:'#e53935',
							imgUrl:'images/flashsale-swiper1.jpg'
                    }
                    ,
					{
                            name:'swiperSlide10',
                            color:'#00c0a5',
							imgUrl:'images/flashsale-swiper2.jpg'
                    }
                    ,
					{
                            name:'swiperSlide11',
                            color:'#ffac13',
							imgUrl:'images/flashsale-swiper3.jpg'
                    }
                    ,
					{
                            name:'swiperSlide12',
                            color:'#83c44e',
							imgUrl:'images/flashsale-swiper4.jpg'
                    }
                    
			    ]
	        }
        },
    mounted() {
        var flashSaleSwiper = new Swiper ('.slide-swiper .swiper-container', {
          direction: 'horizontal', // 垂直切换选项
          loop: false, // 循环模式选项
          speed:1000,
          autoplay:{
            delay: 5000,//5秒切换一次
            stopOnLastSlide: true, //最后一个slide停止自动滑动
            disableOnInteraction: false,//用户操作后继续播放
            },
          
        //   pagination: {
        //     el: '.swiper-pagination',
        //     clickable:true,
        //   },
          navigation: {
            prevEl: '.slide-swiper  .swiper-flashsale-prev',
            nextEl: '.slide-swiper  .swiper-flashsale-next',
          },
          effect:'slide',
          slidesPerView:4,
          slidesPerGroup : 4,
          spaceBetween: 14,
        
        })  



        
        
    }
  }
</script>
<style scoped>
/* @import '/css/swiper.min.css'; */
.slide-swiper{
    position: relative;
    float: left;
    /* width: 978px; */
    /* margin-top: 100px; */
}
.slide-swiper .swiper-container{
    height: 340px;
    position: relative;
    float: left;
    margin-left: 14px;
    width: 978px;
    margin-right: 0;
    
}
.slide-swiper .swiper-wrapper{
    position: relative;
    /* width: 1100px; */
}
.slide-swiper .swiper-slide{

    width: 234px;
    margin-right: 14px;
    border-top-width: 1px;
    border-top-style: solid;
    text-align: center;
    background: #fff;

    position: relative;
    
}
.slide-swiper .swiper-slide a{
    display: block;
    height: 300px;
    padding-top: 39px;
    position: relative;
}
.slide-swiper .swiper-slide .thumb{
    display: block;
    width: 160px;
    margin: 0 auto 22px;
}
.slide-swiper .swiper-slide .thumb img{
    width: 160px;
    height: 160px;
}
.slide-swiper .swiper-slide .title{
    margin: 0 20px 3px;
    font-size: 14px;
    font-weight: 400;
    text-overflow: ellipsis;
    color: #212121;
    overflow: hidden;
    white-space: nowrap;
}
.slide-swiper .swiper-slide .desc{
    height: 18px;
    margin: 0 20px 12px;
    font-size: 12px;
    text-overflow: ellipsis;
    color: #b0b0b0;
    overflow: hidden;
    white-space: nowrap;
}
.slide-swiper .swiper-slide .price{
    color: #ff6700;
}
.slide-swiper .swiper-slide .price del{
    color: #b0b0b0;
}

/*home-flashsale-swiper */
.slide-swiper .flashsale-swiper-navigation{
    position: absolute;
    right: 0;
    top: -35px;
    height: 25px;
    /* background-color: #535250; */
    /* width: 100%; */
}
.slide-swiper .flashsale-swiper-navigation .swiper-flashsale-prev,
.slide-swiper .flashsale-swiper-navigation .swiper-flashsale-next{
    display: inline-block;
    width: 24px;
    height: 16px;
    /* line-height: 16px; */
    padding: 3px 5px;
    margin-left: -1px;
    border: 1px solid #b0b0b0;
    font-size: 16px;
    line-height: 16px;
    -webkit-transition: color .5s;
    transition: color .5s;
    color: #b0b0b0;
    text-align: center;
    cursor: pointer;
    outline: 0;
}
.slide-swiper .flashsale-swiper-navigation span i{
    font-size: 20px;
    font-weight: bold;
    line-height: 16px;
    /* list-style: 20px; */
}
.slide-swiper .flashsale-swiper-navigation span:last-child{
  transform: rotate(180deg);
}
.slide-swiper .flashsale-swiper-navigation span:hover{
    color: #ff6700;
}
.slide-swiper .flashsale-swiper-navigation .swiper-button-disabled{
    color: #e0e0e0;
    border-color: #e0e0e0;
    cursor: default;
}
.slide-swiper .flashsale-swiper-navigation .swiper-button-disabled:hover{
    color: #e0e0e0;
}
    
</style>