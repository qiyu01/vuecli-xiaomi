<template>
  <div class="swiper-product swiper-container">
    <div class="swiper-wrapper">
      <div v-for="el in arrItem" :key="el.name" class="swiper-slide">
        <img class="img" :src="el.imgUrl" />
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
import Swiper from "swiper";
// import 'swiper/css/swiper.min.css';
export default {
  data() {
    return {
      arrItem: [],
      colorImg:[]
    };
  },
  props: ["swiperColor"],
  beforeCreate(){
    this.axios({
                 url: "http://127.0.0.1:8080/mi/v1/product_img",
                 method: "get",
                 params: {}
                }).then(res => {
                console.log(res.data);
                // console.log(this.version);
                this.colorImg=res.data;
                

                });
  },
  watch: {
    swiperColor: {
      handler() {
        // this.swiper.destroy();
        // console.log(this.swiperColor);
        

        console.log(true);
        switch (this.swiperColor) {
        case 1:
        this.arrItem = [
          {
            name: "swiperSlide1",
            imgUrl: "images/product/product1.jpg",
          },
          {
            name: "swiperSlide2",
            imgUrl: "images/product/product2.jpg",
          },
          {
            name: "swiperSlide3",
            imgUrl: "images/product/product3.jpg",
          },
          {
            name: "swiperSlide4",
            imgUrl: "images/product/product4.jpg",
          },
          {
            name: "swiperSlide5",
            imgUrl: "images/product/product5.jpg",
          },
        ];
        break;
      case 2:
        this.arrItem = [
          {
            name: "swiperSlide1",
            imgUrl: "images/product/product11.jpg",
          },
          {
            name: "swiperSlide2",
            imgUrl: "images/product/product12.jpg",
          },
          {
            name: "swiperSlide3",
            imgUrl: "images/product/product13.jpg",
          },
          {
            name: "swiperSlide4",
            imgUrl: "images/product/product14.jpg",
          },
          {
            name: "swiperSlide5",
            imgUrl: "images/product/product15.jpg",
          },
        ];
        break;
      case 3:
        this.arrItem = [
          {
            name: "swiperSlide1",
            imgUrl: "images/product/product21.jpg",
          },
          {
            name: "swiperSlide2",
            imgUrl: "images/product/product22.jpg",
          },
          {
            name: "swiperSlide3",
            imgUrl: "images/product/product23.jpg",
          },
          {
            name: "swiperSlide4",
            imgUrl: "images/product/product24.jpg",
          },
          {
            name: "swiperSlide5",
            imgUrl: "images/product/product25.jpg",
          },
        ];
        break;
      case 4:
        this.arrItem = [
          {
            name: "swiperSlide1",
            imgUrl: "images/product/product31.jpg",
          },
          {
            name: "swiperSlide2",
            imgUrl: "images/product/product32.jpg",
          },
          {
            name: "swiperSlide3",
            imgUrl: "images/product/product33.jpg",
          },
          {
            name: "swiperSlide4",
            imgUrl: "images/product/product34.jpg",
          },
          {
            name: "swiperSlide5",
            imgUrl: "images/product/product35.jpg",
          },
        ];
        break;
    }
      // this.swiper.update(); 
      if(this.swiper){
          this.swiper.slideTo(1,0);
        } 
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    
    // console.log("挂载");
    this.swiper = new Swiper(".swiper-product", {
          direction: "horizontal", // 垂直切换选项
          loop: true, // 循环模式选项
          speed: 500, //动画速度
          observer:true,
          autoplay: {
            delay: 3000, //5秒切换一次
            // stopOnLastSlide: true, //最后一个slide停止自动滑动
            disableOnInteraction: false, //用户操作后继续播放
          },
          //   如果需要分页器
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },

          // 如果需要前进后退按钮
          navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          },
          effect: "fade",
        });

  },
};
</script>
<style>
@import "/css/swiper.min.css";
/* swiper */
/* 改变切换的动画曲线和延迟时间，如果不改，默认的动画延迟有点严重 */
.swiper-wrapper {
  transition-timing-function: ease-in !important;
  transition-delay: 0.5s !important;
}
.ani {
  animation-timing-function: ease-in !important;
  transition-delay: 0.5s !important;
}
/* swiper-product */
.swiper-product {
  width: 560px;
  height: 566px;
  position: relative;
}
.swiper-product .slide-wrapper {
  width: 560px;
  height: 566px;
  position: relative;
}
.swiper-product .swiper-slide {
  width: 560px;
}
.swiper-product img {
  width: 560px;
  height: 560px;
}
.swiper-product .swiper-button-prev {
  margin-top: -34px;
  /* background-image: none; */
  background-color: transparent;
  width: 41px;
  height: 69px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ccc'%2F%3E%3C%2Fsvg%3E");
  background-size: 25px 30px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.swiper-product .swiper-button-prev:hover {
  background-color: rgba(51, 51, 51, 0.8);
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23fff'%2F%3E%3C%2Fsvg%3E");
}
.swiper-product .swiper-button-next {
  right: 0;
  background-color: transparent;
  width: 41px;
  height: 69px;
  margin-top: -34px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ccc'%2F%3E%3C%2Fsvg%3E");
  background-size: 25px 30px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.swiper-product .swiper-button-next:hover {
  background-color: rgba(51, 51, 51, 0.8);
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23fff'%2F%3E%3C%2Fsvg%3E");
}

.swiper-product .swiper-pagination-bullets {
  left: 0px !important;
  bottom: 20px !important;
  padding-left: 0;
  /* padding-left: 570px; */
}
.swiper-product .swiper-pagination-bullet {
  /* float: right; */
  width: 50px;
  height: 3px;
  border-radius: 0;
  opacity: 1;
  background-color: #ccc;
  border: 0;
  margin: 0 4px;
}
.swiper-product .swiper-pagination-bullet-active {
  background-color: #a3a3a3;
}
.swiper-product .swiper-pagination-bullet:hover {
  background-color: #a3a3a3;
}
</style>