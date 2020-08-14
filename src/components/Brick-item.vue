<template>
    <li class="brick-item">
              <router-link to="product">
                <div class="figure">
                  <img :src="product.img_src" alt />
                </div>
                <h3 class="title">{{product.name}}</h3>
                <p class="desc">{{product.title}}</p>
                <p class="price">
                  <span class="num">{{product.price}}</span>元
                  <span>起</span>
                  <del v-if="product.delprice">
                    <span class="num">{{product.delprice}}</span>
                    元
                  </del>
                </p>
              </router-link>
    </li>
</template>
<script>
export default {
    props:["product"]
}
</script>
<style scoped>

.brick-item {
  height: 260px;
  padding: 20px 0;
  text-align: center;
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.brick-item:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
.brick-item .figure {
  margin: 0 auto 18px;
}
.brick-item .figure img {
  width: 160px;
  height: 160px;
}
.brick-item .title {
  margin: 0 10px 2px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  font-size: 14px;
  font-weight: 400;
  color: #333;
}
.brick-item .desc {
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  color: #b0b0b0;

  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.brick-item .price {
  margin: 0 10px 14px;
  color: #ff6700;
}
.brick-item .price del {
  margin-left: 0.5em;
  color: #b0b0b0;
}


</style>