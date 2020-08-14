<template>
  <div class="swiper-product swiper-container">
    <div class="swiper-wrapper">
      <div v-for="el in arrItem" :key="el.id" class="swiper-slide">
        <img class="img" :src="el.img_src" />
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
      //当前颜色的图片内容数组
      arrItem: [],
      //所有颜色的图片内容数，
      colorImg: [],
    };
  },
  props: ["swiperColor"],
  methods: {
    // 重置滚动位置，在product父组件里面切换版本号的时候需要重置图片滚动位置到初始位置。
    slideReset(){
        this.swiper.slideTo(1,0)
    }
  },
  watch: {
    swiperColor: {
      handler() {
        // this.swiper.destroy();
        // 清空当前颜色的图片数组
        this.arrItem = [];
        for (let i of this.colorImg) {
          //根据swiperColor的值从所有颜色的图片数组里筛选出对应的图片数据，放入到当前颜色数组，以达到改变颜色图片的效果
          if (i.cid == this.swiperColor) {
            this.arrItem.push(i);
          }
        }

        // this.swiper.update();
        if (this.swiper) {
          // 清除掉已存在的swiper
          this.swiper.destroy();
          // 所有swiper的创建操作都必须放到$nextTick里面，以便swiper在vue的数据改变后异步更新的dom对象更新完毕再操作dom
          this.$nextTick(function () {
            this.swiper = new Swiper(".swiper-product", {
              direction: "horizontal", // 垂直切换选项
              loop: true, // 循环模式选项
              speed: 500, //动画速度
              // observer:true,//修改swiper自己或子元素时，自动初始化swiper
              // observeParents:true,//修改swiper的父元素时，自动初始化swiper
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
          });
        }
      },
      // 有deep属性才监测到对象的属性改变，这里也可以不设置。
      deep: true,
      // immediate: true,
    },
  },
  mounted() {
    this.axios({
      url: "http://127.0.0.1:8080/mi/v1/product_img",
      method: "get",
      params: {},
    }).then((res) => {
      let data = res.data;
      //循环动态加载图像
      data.forEach((item) => {
        //因为有的文章没有图像，所以无需动态加载图像了
        //故进行判断操作
        if (item.img_src != null) {
          //动态加载图像，此时item中id,subject,description没有发生任何变化
          //但是图像已经成为了动态加载的图像了
          item.img_src = require("../assets/images/productcolor/" +
            item.img_src);
        }
        this.colorImg.push(item);
      });
      // 初始化swiper显示颜色图片的数组
      for (let i of this.colorImg) {
        // 默认显示的颜色
        if (i.cid == this.swiperColor) {
          this.arrItem.push(i);
        }
      }
      // http://www.idangero.us/swiper/
      // 这个是swiper的正宗官方api，一切以这个为准，百度那个https://www.swiper.com.cn/都是坑！！！
      // vue里面所有swiper的创建操作都必须放到$nextTick里面，以便swiper在vue的数据改变后异步更新的dom对象更新完毕再操作dom

      this.$nextTick(function () {
        this.swiper = new Swiper(".swiper-product", {
          direction: "horizontal", // 垂直切换选项
          loop: true, // 循环模式选项
          speed: 500, //动画速度
          // observer:true,//修改swiper自己或子元素时，自动初始化swiper
          // observeParents:true,//修改swiper的父元素时，自动初始化swiper
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
      });
    });
  },
};
</script>
<style scoped>
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
  left: 0;
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