<template>
  <div class="header">
    <div class="site-topbar">
      <div class="container">
        <div class="topbar-nav">
          <router-link :to="{name:'Home'}">小米商城</router-link>
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
          <a href="javascriot:void(0);" class="topbar-download">
            下载app
            <span class="appcode">
              <img src="images/download.png" alt />
              小米商城APP
            </span>
          </a>
          <span class="sep">|</span>
          <a href="javascriot:void(0);">Select Location</a>
        </div>
        <div class="topbar-cart" :class="[cartNum>0?'active':'']">
          <router-link to="cart" @mouseenter.native="cartHover">
            <em class="iconfont icon-gouwuchekong"></em>
            <span>购物车</span>
            <span>({{cartNum}})</span>
          </router-link>
          <div class="cart-menu">
            <div class="cart-empty" v-show="!cartNum">购物车中还没有商品，赶紧选购吧！</div>
            <ul class="cart-list" v-show="cartNum">
              <li v-for="(item,i) of cartProducts" :key="i">
                <div class="cart-item clearfix">
                  <router-link :to="{path:'/product',query:{pid:item.pid}}" class="thumb">
                    <img :src="item.img_src" alt />
                  </router-link>
                  <router-link
                    :to="{path:'/product',query:{pid:item.pid}}"
                    class="name"
                  >{{item.name}}{{item.color}}</router-link>
                  <span class="price">{{item.price}}元 × {{item.num}}</span>
                  <a href="javascript:void(0)" class="btn-del">
                    <i class="iconfont"></i>
                  </a>
                </div>
              </li>
            </ul>
            <div class="cart-total clearfix" v-show="cartNum">
              <span class="total">
                共
                <em>{{cartNum}}</em>
                件商品
                <span class="price">
                  <em>{{totalPrice}}</em>
                  元
                </span>
              </span>
              <router-link to="cart" class="btn btn-primary">去购物车结算</router-link>
            </div>
          </div>
        </div>
        <div class="topbar-info">
          <router-link to="login" v-if="!hasLogin">登录</router-link>
          <span class="sep" v-if="!hasLogin">|</span>
          <a href="javascritp:void(0);" v-if="!hasLogin">注册</a>
          <span class="user" v-if="hasLogin">
            <a href="javascript:void(0)">
              <span class="name">{{$store.state.uid}}</span>
              <i class="iconfont icon-tubiaozhizuo-"></i>
            </a>
            <ul class="user-menu">
              <li>
                <a href="javascript:void(0)">个人中心</a>
              </li>
              <li>
                <a href="javascript:void(0)">评价晒单</a>
              </li>
              <li>
                <a href="javascript:void(0)">我的喜欢</a>
              </li>
              <li>
                <a href="javascript:void(0)">小米账户</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="login_out">退出登录</a>
              </li>
            </ul>
          </span>
          <span class="sep">|</span>
          <a href="javascript:void(0)" class="message">
            消息通知
            <i></i>
          </a>
          <span class="sep" v-if="hasLogin">|</span>
          <a href="javascript:void(0)" class="link-order" v-if="hasLogin">我的订单</a>
        </div>
      </div>
    </div>

    <Header-nav :navcategory="navcategory"></Header-nav>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import HeaderNav from "./Header-nav.vue";
import { getCart, cartProduct, headerCart } from "../util/api/getProduct";
export default {
  name: "Header",
  data() {
    return {
      cartNum: 0,
      cartProducts: [],
      totalPrice: 0,
    };
  },
  props: ["navcategory"], //是否显示“全部商品分类”
  components: {
    HeaderNav,
  },
  mounted() {
    getCart(this.user_id).then((res) => {
      var num = 0;
      if (res.length > 0) {
        for (let i of res) {
          num += i.num;
        }
      }

      this.cartNum = num;
    });
  },
  methods: {
    ...mapMutations(["login_out"]),
    cartHover() {
      var products = [];
      getCart(this.user_id)
        .then((res) => {
          if (res != 0) {
            products = res;
            var pidAll = [];
            for (let i of res) {
              pidAll.push(i.pid);
            }
            if (pidAll.length > 0) {
              pidAll = pidAll.join();
              return Promise.all([cartProduct(pidAll), headerCart(pidAll)]);
            }
          }
        })
        .then((res) => {
          if (res) {
            for (let i = 0; i < res[0].length; i++) {
              products[i].name = res[0][i].name;
              products[i].price = res[0][i].price;
              products[i].color = res[1][i].colorname;
              products[i].img_src = require("../assets/images/product/product800/" +
                res[1][i].src);
            }
          }
          var num = 0;
          var totalprice = 0;
          for (let i of products) {
            num += i.num;
            totalprice += i.price * i.num;
          }
          this.cartNum = num;
          this.totalPrice = totalprice;
          this.cartProducts = products;
        });
    },
  },
  computed: {
    ...mapGetters(["hasLogin", "user_id"]),
  },
};
</script>

<style>
/* @import '../assets/css/base.css'; */
/* 顶部黑色导航栏--site-topbar-- */

.header .site-topbar {
  color: #b0b0b0;
  font-size: 12px;
  background-color: #333;
  height: 40px;
  z-index: 300;
  position: relative;
}
.header .topbar-nav {
  float: left;
  height: 40px;
  line-height: 40px;
}
.header .site-topbar .topbar-nav a {
  display: inline-block;
  line-height: 40px;
  color: #b0b0b0;
  position: relative;
  /* text-align: center; */
}
.header .site-topbar .topbar-nav a:hover {
  color: #fff;
}
.header .site-topbar .topbar-nav .sep {
  margin: 6.6px;
  color: #424242;
  font-family: sans-serif;
}
/* topbar-download */
.header .site-topbar .topbar-nav a.topbar-download:hover::before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 35px;
  left: 18px;
  background-color: #fff;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
}
.header .site-topbar .topbar-nav a > span {
  position: absolute;
  top: 40px;
  left: 50%;
  width: 124px;
  height: 0px;
  background-color: #fff;
  margin-left: -55px;
  box-shadow: 0 1px 5px #aaa;
  text-align: center;
  font-size: 14px;
  color: #333;
  line-height: 1;
  overflow: hidden;
  transition: height 0.3s;
  z-index: 1;
}
.header .site-topbar .topbar-nav a:hover > span {
  height: 148px;
}

.header .site-topbar .topbar-nav .appcode img {
  display: block;
  margin: 18px auto 12px;
  border: 0;
  width: 90px;
  height: 90px;
}

/* 购物车 */
.header .site-topbar .topbar-cart {
  position: relative;
  float: right;
  width: 120px;
  height: 40px;
  margin-left: 15px;
  transition: all 0.2s;
  background-color: #424242;
}
.header .site-topbar .topbar-cart a {
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #b0b0b0;
}
.header .site-topbar .topbar-cart:hover {
  background-color: #fff;
}
.header .site-topbar .topbar-cart.active:hover {
  background-color: #fff;
}
.header .site-topbar .topbar-cart.active {
  background-color: #ff6700;
}
.header .site-topbar .topbar-cart.active > a {
  color: #fff;
}
.header .site-topbar .topbar-cart.active:hover > a {
  color: #ff6700;
}
.header .site-topbar .topbar-cart:hover a {
  color: #ff6700;
}

.header .site-topbar .topbar-cart a span {
  display: inline-block;
  margin-left: 5px;
  height: 40px;
  line-height: 40px;
  transform: translateY(-2px);
}
.header .site-topbar .topbar-cart a em {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 17px;
  transform: translateX(-2px) scaleX(1.1);
}
.header .site-topbar .topbar-cart .cart-menu {
  position: absolute;
  right: 0;
  top: 40px;
  max-height: 0px;
  width: 316px;
  background-color: #fff;
  color: #000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  overflow: hidden;
  transition: max-height 0.3s ease;
  line-height: 100px;
  z-index: 2;
}
.header .site-topbar .topbar-cart:hover .cart-menu {
  max-height: 525.5px;
}
.header .site-topbar .topbar-cart .cart-menu .cart-list {
  overflow-y: auto;
  padding-top: 20px;
  max-height: 425.5px;
}
.header .topbar-cart .cart-menu .cart-list li {
  position: relative;
  height: 80px;
  padding: 0 20px;
}
.header .topbar-cart .cart-menu .cart-list .cart-item {
  position: relative;
  height: 60px;
  padding: 10px 0;
  border-top: 1px solid #e0e0e0;
  line-height: 20px;
}
.header .topbar-cart .cart-menu .cart-list .cart-item:first-child {
  border-top: 0;
}
.header .topbar-cart .cart-menu .cart-list .thumb {
  float: left;
  margin-right: 10px;
  color: #b0b0b0;
  line-height: 40px;
}
.header .topbar-cart .cart-menu .cart-list .thumb img {
  width: 60px;
  height: 60px;
}
.header .topbar-cart .cart-menu .cart-list .name {
  float: left;
  width: 95px;
  height: 40px;
  line-height: 20px;
  margin: 10px 0;
  color: #424242;
  overflow: hidden;
  text-align: left;
}
.header .topbar-cart .cart-menu .cart-list .price {
  float: right;
  margin: 20px 20px 0 5px;
}
.header .topbar-cart .cart-menu .cart-total {
  padding: 15px 20px;
  background: #fafafa;
  text-align: left;
}
.header .topbar-cart .cart-menu .cart-total .total {
  float: left;
  width: 135px;
  color: #757575;
  line-height: 1;
}
.header .topbar-cart .cart-menu .cart-total .total em {
  font-style: normal;
}
.header .topbar-cart .cart-menu .cart-total .total .price {
  display: block;
  font-weight: 400;
  color: #ff6700;
  font-size: 12px;
  margin-top: 5px;
}
.header .topbar-cart .cart-menu .cart-total .total .price em {
  font-size: 24px;
}
.header .topbar-cart .cart-menu .cart-total .btn {
  float: right;
  width: 130px;
  padding: 0;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  color: #f5f5f5;
  background: #ff6700;
}
/* topbar-info */
.header .site-topbar .topbar-info {
  float: right;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
.header .site-topbar .topbar-info > a,
.header .site-topbar .topbar-info > span {
  float: left;
  color: #b0b0b0;
  padding: 0 5px;
  text-align: center;
  font-size: 12px;
}
.header .site-topbar .topbar-info .user i {
  font-size: 12px;
  color: #b0b0b0;
  margin-left: 10px;
}

.header .site-topbar .topbar-info .user {
  display: inline-block;
  width: 110px;
  height: 40px;
  overflow: hidden;
  padding: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: height 0.3s;
}
.header .site-topbar .topbar-info .user:hover {
  background-color: #fff;
  height: 202px;
}
.header .site-topbar .topbar-info .user a {
  display: inline-block;
  width: 110px;
  color: #b0b0b0;
}
.header .site-topbar .topbar-info .user:hover .name,
.header .site-topbar .topbar-info .user:hover i {
  color: #ff6700;
}
.header .site-topbar .topbar-info .user-menu {
  width: 110px;
  padding: 7px 0;
}

.header .site-topbar .topbar-info .user-menu a {
  color: #424242;
  display: block;
  padding: 3px 0px;
  line-height: 2;
}
.header .site-topbar .topbar-info .user-menu a:hover {
  background: #f0f0f0;
  color: #ff6700;
}
.header .site-topbar .topbar-info a.message {
  padding: 0 10px;
}
.header .site-topbar .topbar-info a:hover {
  color: #fff;
}
.header .site-topbar .topbar-info .sep {
  float: left;
  color: #424242;
  padding: 0;
}
.header .site-topbar .topbar-info .link-order {
  display: inline-block;
  width: 70px;
}
</style>