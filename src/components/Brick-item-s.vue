<template>
    <li class="brick-item-s">
      <div class="item-s-content">
              <router-link to="product">
                <div class="figure">
                  <img :src="img.src" alt />
                </div>
                <h3 class="title">Air 13.3" 2019款</h3>
                <p class="price">
                  <span class="num">5699</span>元<span>起</span>
                </p>
              </router-link>
        </div>
        <div class="item-s-content">
              <router-link to="search">
                <div class="figure figure-more">
                  <i class="iconfont icon-yuanquanjiantouyou
                   "></i>
                </div>
                <div class="more">
                  浏览更多
                  <small>电视影音</small>
                </div>
              </router-link>
                
              
        </div>
    </li>
</template>
<script>
export default {
  props:["img"]
}
</script>
<style scoped>
.brick-item-s {
  height: 260px;
  text-align: center;
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background:transparent;
  
}

.brick-item-s .item-s-content{
  height: 93px;
  position: relative;
  padding-top: 50px;
  margin-bottom: 14px;
  background-color: #fff;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  cursor: pointer;
}
.brick-item-s .item-s-content:hover{
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
.brick-item-s .figure {
  position: absolute;
  right: 20px;
  top: 32px;
  width: 80px;
  height: 80px;
}
.brick-item-s .figure img {
  width: 80px;
  height: 80px;
}
.brick-item-s .title {
  margin: -10px 110px 5px 30px;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  color: #333;
}
.brick-item-s .price {
  margin: 0 110px 0 30px;
  text-align: left;
  color: #ff6700;
}
.brick-item-s .figure.figure-more {
  position: absolute;
  right: 35px;
  top: 48px;
  width: 48px;
  height: 48px;
  line-height: 48px;
  color: #ff6700;
  font-size: 45px;
  /* font-weight: 100; */
}
.brick-item-s .figure-more i {
  font-size: 48px;
}
.brick-item-s div.more {
  display: block;
  margin: 0 110px 0 30px;
  font-size: 18px;
  color: #333;
  text-align: left;
}
.brick-item-s div.more small {
  display: block;
  font-size: 12px;
  color: #757575;
}

</style>