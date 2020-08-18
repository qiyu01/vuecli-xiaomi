<template>
  <div class="cart-wraper">
    <div class="cart-header">
      <div class="container">
        <div class="header-logo">
          <router-link to="/" class="logo">
            <span>
              <img :src="img[0].src" alt />
              <img :src="img[1].src" alt />
            </span>
          </router-link>
        </div>
        <div class="header-title">
          <h2>我的购物车</h2>
          <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
        </div>
        <div class="site-topbar">
          <div class="topbar-info">
            <span class="user" v-if="hasLogin">
              <router-link to="/" class="user-name">
                <span class="name">{{$store.state.uid}}</span>
                <i class="iconfont icon-tubiaozhizuo-"></i>
              </router-link>
              <div class="user-menu-wrapper">
                <ul class="user-menu">
                  <li>
                    <router-link to="/">个人中心</router-link>
                  </li>
                  <li>
                    <router-link to="/">评价晒单</router-link>
                  </li>
                  <li>
                    <router-link to="/">我的喜欢</router-link>
                  </li>
                  <li>
                    <router-link to="/">小米账户</router-link>
                  </li>
                  <li>
                    <router-link to="/" @click.native="login_out">退出登录</router-link>
                  </li>
                </ul>
              </div>
            </span>
            <router-link :to="{name:'Login',query:{from:'/cart'}}" class="link login" v-if="!hasLogin">登录</router-link>
            <span class="sep">|</span>
            <router-link to="/" class="link link-order" v-if="hasLogin">我的订单</router-link>
            <a href="javascript:void(0)" class="link register" v-if="!hasLogin">注册</a>
          </div>
        </div>
      </div>
    </div>
    <div class="page-main">
      <div class="container">
        <div class="cart-container">
          <div class="loading"></div>
          <div class="cart-main">
            <div class="cart-goods-list">
              <div :class="[allSelected ? 'active' : '', 'list-head clearfix']">
                <div class="cart-col col-check">
                  <div @click="selectAll()">
                    <i class="iconfont icon-gou"></i>
                  </div>全选
                </div>
                <div class="cart-col col-img">null</div>
                <div class="cart-col col-name">商品名称</div>
                <div class="cart-col col-price">单价</div>
                <div class="cart-col col-num">数量</div>
                <div class="cart-col col-total">小计</div>
                <div class="cart-col col-action">操作</div>
              </div>
              <div class="list-body">
                <div
                  v-for="(item,i) of product"
                  :key="i"
                  :class="[item.isselected ? 'active' : '', 'list-item']"
                >
                  <div class="item-main clearfix">
                    <div class="cart-col col-check" @click="selectProduct(item)">
                      <div>
                        <i class="iconfont icon-gou"></i>
                      </div>
                    </div>
                    <div class="cart-col col-img">
                      <router-link :to="{name:'Product', query:{pid:item.id}}">
                        <img :src="item.img_src" alt />
                      </router-link>
                    </div>
                    <div class="cart-col col-name">
                      <div class="tags"></div>
                      <h3 class="name">
                        <router-link :to="{name:'Product', query:{pid:item.id}}">{{item.name}}</router-link>
                      </h3>
                    </div>
                    <div class="cart-col col-price">
                      {{item.price}}元
                      <p class="pre-info"></p>
                    </div>
                    <div class="cart-col col-num">
                      <div class="change-goods-num clearfix">
                        <a href="javascript:void(0)" @click="reducenum(item)">-</a>
                        <input
                          type="text"
                          class="goods-num"
                          v-model="item.num"
                          @blur="numChange($event,item)"
                        />
                        <a href="javascript:void(0)" @click="addnum(item)">+</a>
                      </div>
                    </div>
                    <div class="cart-col col-total">{{item.price*item.num}}元</div>
                    <div class="cart-col col-action">
                      <div @click="deleteProduct(item)">
                        <i class="iconfont icon-cha"></i>
                      </div>
                    </div>
                  </div>
                  <div class="service-info-content">
                    <div class="service-info" v-for="(type,t) of reserveType" :key="t+type">
                      <div
                        class="item-box clearfix"
                        v-for="(select,s) of selectFilter(item.id,type.type)"
                        :key="s+type+1"
                      >
                        <div class="item service-img">
                          <router-link to="/">
                            <img :src="img[2].src" alt />
                          </router-link>
                        </div>

                        <div class="item service-name">
                          <h3 class="name">
                            <router-link to="/">{{select.name}}</router-link>
                          </h3>
                          <p class="desc">{{select.tips?select.tips:""}}</p>
                        </div>
                        <div class="item service-price">
                          {{select.price}}元
                          <p class="pre-info"></p>
                        </div>
                        <div class="item service-num">
                          <div class="change-goods-num clearfix">{{item.num}}</div>
                        </div>
                        <div class="item service-total">{{select.price*item.num}}元</div>
                        <div class="item service-action" @click="removeSelect(select)">
                          <div>
                            <i class="iconfont icon-cha"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="service-add-box" v-for="(type,j) of serviceType" :key="j">
                      <!-- <span>{{item.id}}{{type.type}}</span> -->
                      <div
                        class="add-item"
                        v-for="(service,k) of servicefilter(item.id,type.type)"
                        :key="k"
                        @click="serviceSelect(service,type)"
                      >
                        <span class="add-btn">
                          <i class="iconfont icon-iconfonticon02"></i>
                        </span>
                        {{service.name}}
                        <span>{{service.price}}元</span>
                        <router-link to="/" class="more">了解意外保护 ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="cart-bar">
              <div class="section-left">
                <router-link to="/">继续购物</router-link>
                <span class="cart-total">
                  共
                  <i>{{totalProduct}}</i>
                  件商品，已选择
                  <i>{{hasSelectedNum}}</i>
                  件
                </span>
              </div>
              <div class="total-price">
                合计：
                <em>{{totalPrice}}</em>
                元
                <router-link to="/">去结算</router-link>
              </div>
            </div>
          </div>
          <div class="cart-recommend">
            <div class="recommend-title">
              <span>买购物车中商品的人还买了</span>
            </div>
            <div class="recommend-bd">
              <ul class="recommend-list">
                <li class="recommend-item">
                  <a href="javascript:void(0)" class="recommend-ad">
                    <img :src="img[3].src" alt />
                  </a>
                </li>
                <Rec-brick v-for="(item,i) of recommend" :key="i" :brick="item"></Rec-brick>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import {mapMutations} from 'vuex';
import {mapGetters} from 'vuex';
import RecBrick from "@/components/Recommend-brick.vue";
import {getCart,cartProduct,getService,getRecommend} from "../util/api/getProduct";
import qs from "qs";
export default {
  data() {
    return {
      img: [
        { id: 1, src: "mi-home.png" },
        { id: 2, src: "mi-logo.png" },
        { id: 3, src: "bao.jpg" },
        { id: 4, src: "recommend-ad1.jpg" },
      ],
      cart: [],
      pid: [],
      product: [],
      selctedProduct: [],
      unlinkedProduct: [],
      // 可选服务
      serviceAll: [],
      //服务的类型，用来对可选服务进行分组，这里暂时用假数据，
      serviceType: [
        { type: 1, multip: false },
        { type: 2, multip: false },
        { type: 3, multip: false },
        { type: 4, multip: true },
      ],
      //排序后的服务类型数据，因为可选服务里类型的排序  跟已选服务里的类型排序不一样。
      reserveType: [
        { type: 4, multip: true },
        { type: 1, multip: false },
        { type: 2, multip: false },
        { type: 3, multip: false },
      ],
      //已选服务，初始值全部是null，其实可以从服务器返回以前选中的服务，这里暂时不做。
      serviceSelected: [],
      recommend: [],
    };
  },
  components: { RecBrick },
  methods: {
    ...mapMutations(["login_out"]),
    selectAll() {
      var bool = false;
      for (let i of this.product) {
        if (!i.isselected) {
          //如果找到最少一个商品是没选中的（!i.isselected），那这次点击就是全部选中，后面把全部product的isselected设置为bool=true
          //如果没有找到一个商品是没选中的，就是已经全部选中了，这里不执行，那bool就还是前面的false，后面把全部product的isselected设置为bool=false，也就是全部不选中
          bool = true;
          break;
        }
      }
      // 执行全选中还是全不选中
      for (let i = 0; i < this.product.length; i++) {
        this.$set(this.product[i], "isselected", bool);
      }
      //如果执行的是全不选中，还需要把所有选中的服务移走。
      if (!bool) {
        for (let i = 0; i < this.serviceSelected.length; i++) {
          //注意每次都要检测null数据
          //设置serviceSelected里的对应项为null，设置serviceAll为this.serviceSelected[i]（还回去）
          if (this.serviceSelected[i] != null) {
            this.$set(this.serviceAll, i, this.serviceSelected[i]);
            this.$set(this.serviceSelected, i, null);
          }
        }
      }
    },
    selectProduct(item) {
      var bool = false;
      for (let i = 0; i < this.product.length; i++) {
        if (this.product[i].id == item.id) {
          var bool = !item.isselected;
          this.$set(this.product[i], "isselected", bool);
        }
      }
      //如果执行的是不选中，还需要把所有选中的服务移走。
      if (!bool) {
        for (let i = 0; i < this.serviceSelected.length; i++) {
          //注意每次都要检测null数据
          //设置serviceSelected里的对应项为null，设置serviceAll为this.serviceSelected[i]（还回去）
          if (this.serviceSelected[i] != null) {
            this.$set(this.serviceAll, i, this.serviceSelected[i]);
            this.$set(this.serviceSelected, i, null);
          }
        }
      }
    },
    deleteProduct(item) {
      for (let i = 0; i < this.product.length; i++) {
        if (this.product[i].id == item.id) {
          // 删除product数组里的对应项
          this.product.splice(i, 1);
        }
      }
      // 去cart里找到对应商品的购物车id，然后删除
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].pid == item.id) {
          var cid = this.cart[i].id;
          this.cart.splice(i, 1);
          this.http.get("/mi/v1/cart_delete", { cid: cid }).then((data) => {
          });
        }
      }
    },
    addnum(item) {
      for (let i of this.product) {
        if (i.id == item.id) {
          i.num++;
          if (i.num > 20) {
            this.$message({
              message: "土豪，您有兴趣收购我们公司吗？",
              type: "error",
            });
            i.num = 20;
          }
        }
      }
    },
    numChange(e, item) {
      if (isNaN(parseInt(item.num))) {
        this.$message({
          message: "数量必须是数字",
          type: "error",
        });
        item.num = 1;
      } else if (parseInt(item.num) < 1 || parseInt(item.num) > 20) {
        this.$message({
          message: "数量必须是大于0小于20",
          type: "error",
        });
        item.num = 1;
      }
    },
    reducenum(item) {
      for (let i of this.product) {
        if (i.id == item.id) {
          i.num--;
          if (i.num < 1) {
            alert("已经不能再少啦");
            i.num = 1;
          }
        }
      }
    },
    serviceSelect(service, type) {
      if (type.multip) {
        // type.multip为true，可以多选，直接设置serviceAll里的对应项为null，设置serviceSelected的对应项为service
        for (let i = 0; i < this.serviceAll.length; i++) {
          //注意每次都要检测null数据
          if (
            this.serviceAll[i] != null &&
            service.id == this.serviceAll[i].id
          ) {
            this.$set(this.serviceAll, i, null);
            this.$set(this.serviceSelected, i, service);
          }
        }
      } else {
        //type.multip为false，不能多选，必须先去serviceSelected里面把已经选中的类型的先设置为null，再把对应的那项改为service。
        for (let i = 0; i < this.serviceSelected.length; i++) {
          if (this.serviceSelected[i] != null) {
            //注意每次都要检测null数据
            // serviceSelected里需要设置为null的项是pid和type都跟service相同，因为同一个商品（pid）同一类型（type）只能选中一个，先全部都把他们设置为null（其实每次只有一个），后面再改新的那项
            if (
              service.pid == this.serviceSelected[i].pid &&
              service.type == this.serviceSelected[i].type
            ) {
              // 注意这里要先把那项先还回去可选服务serviceAll那里（可选服务那里就又出现这项可以选择了，不能完全删掉）
              this.$set(this.serviceAll, i, this.serviceSelected[i]);
              //然后设置对应的已选服务为null
              this.$set(this.serviceSelected, i, null);
            }
          }
        }
        //这时候就可以跟前面那样，先直接设置serviceAll里的对应项为null，然后设置serviceSelected的对应项为service了
        for (let i = 0; i < this.serviceAll.length; i++) {
          if (
            this.serviceAll[i] != null &&
            service.id == this.serviceAll[i].id
          ) {
            this.$set(this.serviceAll, i, null);
            this.$set(this.serviceSelected, i, service);
          }
        }
      }
    },
    removeSelect(select) {
      for (let i = 0; i < this.serviceSelected.length; i++) {
        //注意每次都要检测null数据
        //设置serviceSelected里的对应项为null，设置serviceAll为select（还回去）
        if (
          this.serviceSelected[i] != null &&
          select.id == this.serviceSelected[i].id
        ) {
          this.$set(this.serviceAll, i, select);
          this.$set(this.serviceSelected, i, null);
        }
      }
    },
  },
  mounted() {
    for(let i of this.img){
       i.src = require("../assets/images/product/" +i.src)
    }
    getCart(this.user_id).then((data) => {
        this.cart = data;
        for (let i of this.cart) {
          i.img_src = require("../assets/images/product/product80/" +
            i.img_src);
        }
        for (let i of this.cart) {
          this.pid.push(i.pid);
        }
        // 将所有需要请求的商品id拼接成字符串
        var pidAll=null;
        if(this.pid.length>0){pidAll=this.pid.join()}
        if(pidAll){
        //请求购物车里商品的主要信息
        //请求购物车里所有商品的所有服务
        //并发查询上列接口
        return Promise.all([cartProduct(pidAll),getService(pidAll)]);
        }
      }).then((data) => {
        // 储存所有的服务数据条
        this.serviceAll = data[1];
        //对应的选中的数据，一开始是全部没选中的，其实应该从服务器返回以前选中的选项，由于需要增加逻辑运算，这里暂时不做。
        for (let i = 0; i < this.serviceAll.length; i++) {
          this.serviceSelected[i] = null;
        }
        // 处理商品的数据条
        // 因为服务器查询的商品数据的顺序是按照数据库里商品的id排列的。我们需要按照购物车的pid的顺序进行排列，以便在v-for插入dom时的顺序是按照加入购物车的顺序插入的。
        for (let i = 0; i < this.pid.length; i++) {
          var pid = this.pid[i];
          for (let j of data[0]) {
            if (j.id == pid) {
              //修改图片，因为product表里的图片是200px的大图，这里替换成购物车的80px小图，其实应该把图片都全部保存到独立的表里，只不过需要增加一次查询。
              j.img_src = this.cart[i].img_src;
              // 增加商品的在购物车里的数量
              this.$set(j, "num", this.cart[i].num);
              // 增加是否选中状态
              this.$set(j, "isselected", this.cart[i].isselected);
              this.product.push(j);
            }
          }
        }
        this.product.reverse();
      });
   ;
    getRecommend().then((data) => {
      for (let i of data) {
        i.img = require("../assets/images/product/product180/" + i.img);
      }
      this.recommend = data;
    });
  },
  computed: {
    ...mapGetters(["hasLogin","user_id"]),
    allSelected() {
      for (let i = 0; i < this.product.length; i++) {
        if (!this.product[i].isselected) {
          return false;
        }
      }
      return true;
    },
    servicefilter() {
      return (pid, type) => {
        var newValue = [];
        //   console.log(this.serviceAll)
        for (let i of this.serviceAll) {
          if (i != null) {
            if (i.pid == pid && i.type == type) {
              newValue.push(i);
            }
          }
        }
        //  console.log(pid,type)
        return newValue;
      };
    },
    selectFilter() {
      return (pid, type) => {
        var newValue = [];
        for (let i of this.serviceSelected) {
          if (i != null) {
            if (i.pid == pid && i.type == type) {
              newValue.push(i);
            }
          }
        }
        //  console.log(pid,type)
        return newValue;
      };
    },
    totalPrice() {
      var totalPrice = 0;
      // 先加商品本身的价格
      for (let i of this.product) {
        if (i.isselected) {
          totalPrice += i.price * i.num;
        }
      }
      // 再加商品服务的价格
      for (let i of this.serviceSelected) {
        if (i != null) {
          var num;
          for (let j of this.product) {
            if (i.pid == j.id) {
              //  找到这个服务对应的product的数量
              num = j.num;
            }
          }
          //  数量*价格
          totalPrice += i.price * num;
        }
      }
      return totalPrice;
    },
    totalProduct() {
      var i = 0;
      for (let j of this.product) {
        i++;
      }
      return i;
    },
    hasSelectedNum() {
      var i = 0;
      for (let j of this.product) {
        if (j.isselected) {
          i++;
        }
      }
      return i;
    },
  },
};
</script>
<style scoped>
.cart-wraper .cart-header {
  font-size: 12px;
  border-bottom: 2px solid #ff6700;
  background: #fff;
  color: #b0b0b0;
  position: relative;
  z-index: 20;
  height: 100px;
}
.cart-wraper .header-logo {
  float: left;
  width: 93px;
  margin-top: 26px;
}
.cart-wraper .header-logo a {
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
  overflow: hidden;
  background-color: #ff6700;
}
.cart-wraper .header-logo a span {
  position: absolute;
  top: -1px;
  left: -49px;
  display: block;
  width: 250%;
  font-size: 0;
  transition: left 0.2s;
}
.cart-wraper .header-logo a span img {
  display: inline-block;
}
.cart-wraper .header-logo a:hover span {
  left: -1px;
}

.cart-wraper .header-title {
  height: 48px;
  float: left;
  margin-top: 26px;
}
.cart-wraper .header-title h2 {
  float: left;
  line-height: 48px;
  margin-bottom: 0;
  font-size: 28px;
  font-weight: 400;
  color: #424242;
}
.cart-wraper .header-title p {
  float: left;
  height: 20px;
  line-height: 20px;
  margin-top: 20px;
  margin-left: 15px;
  color: #757575;
}
.cart-wraper .site-topbar .topbar-info {
  position: relative;
  float: right;
  height: 40px;
  line-height: 40px;
  margin-top: 30px;
}

.cart-wraper .site-topbar .topbar-info .user {
  float: left;
  position: relative;
  width: 110px;
  padding: 0;
  white-space: nowrap;
  line-height: 40px;
}
.cart-wraper .site-topbar .user .user-name {
  position: relative;
  z-index: 5;
  display: block;
  width: 110px;
  height: 40px;
  text-align: center;
}
.cart-wraper .site-topbar .user-name .name {
  display: inline-block;
  width: auto;
  max-width: 75px;
  text-overflow: ellipsis;
  vertical-align: text-bottom;
  overflow: hidden;
}
.cart-wraper .site-topbar .user-name i {
  font-size: 13px;
  line-height: 13px;
  vertical-align: 13px;
  margin: 0 5px 0 6px;
  -webkit-text-stroke-width: 0.2px;
}
.cart-wraper .site-topbar .user .user-menu-wrapper {
  position: absolute;
  height: 0;
  left: 0;
  top: 40px;
  z-index: 3;
  overflow: hidden;
  background-color: #fff;
  transition: height 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
.cart-wraper .site-topbar .user:hover .user-menu-wrapper {
  height: 164px;
}
.cart-wraper .site-topbar .user:hover > a {
  color: #ff6700;
}
.cart-wraper .site-topbar .user-menu {
  width: 110px;
  margin: 0;
  padding: 7px 0;
}
.cart-wraper .site-topbar .user-menu a {
  display: block;
  padding: 3px 30px;
  line-height: 2;
  color: #424242;
}
.cart-wraper .site-topbar .user-menu a:hover {
  color: #ff6700;
}
.cart-wraper .site-topbar .topbar-info .sep {
  float: left;
  font-size: 15px;
  margin-right: 15px;
}
.cart-wraper .site-topbar .topbar-info .link:hover {
  color: #ff6700;
}

.cart-wraper .site-topbar .topbar-info .login{
float: left;
margin-right: 5px;
}
.cart-wraper .site-topbar .topbar-info .register{
float: left;
margin-left: -10px;
}
/* page-main */

.cart-wraper .page-main {
  padding: 38px 0;
  background: #f5f5f5;
}
.cart-wraper .page-main .cart-main .cart-goods-list {
  background-color: #fff;
}
/* head */
.cart-wraper .cart-main .cart-goods-list .list-head {
  height: 70px;
  line-height: 70px;
  padding-right: 26px;
  color: #424242;
}
.cart-wraper .cart-main .cart-col {
  float: left;
}
.cart-wraper .cart-main .col-check {
  width: 110px;
}
.cart-wraper .cart-main .col-check div {
  display: inline-block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border: 1px solid #e0e0e0;
  margin: 0 11px 0 24px;
  cursor: pointer;
}
.cart-wraper .cart-main .col-check div i {
  line-height: 18px;
  margin-left: 3px;
  font-size: 13px;
  color: #fff;
  vertical-align: top;
}
.cart-wraper .cart-main .col-check div:hover i {
  color: #757575;
}
/* 选中或者全选的时候checkbox的父元素会添加.active */
.cart-wraper .cart-main .active .col-check div {
  border-color: #ff6700;
  background-color: #ff6700;
  color: #fff;
}
.cart-wraper .cart-main .active .col-check div i {
  color: #fff;
}

.cart-wraper .cart-main .col-img {
  width: 120px;
  color: #fff;
}
.cart-wraper .cart-main .col-name {
  width: 380px;
}
.cart-wraper .cart-main .col-price {
  width: 140px;
  padding-right: 18px;
  text-align: center;
}
.cart-wraper .cart-main .col-num {
  width: 150px;
  text-align: center;
}
.cart-wraper .cart-main .col-total {
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
.cart-wraper .cart-main .col-action {
  width: 80px;
  text-align: center;
}
/* body */
.cart-wraper .cart-main .list-item {
  padding: 15px 26px 15px 0;
  border-top: 1px solid #e0e0e0;
}
.cart-wraper .cart-main .list-item .item-main {
  height: 86px;
  line-height: 86px;
  overflow: hidden;
}

.cart-wraper .cart-main .item-main .col-name h3 {
  /* line-height: 1; */
  /* margin-top: 8px; */
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.cart-wraper .cart-main .item-main .col-name h3 a {
  color: #424242;
}
.cart-wraper .cart-main .item-main .col-price,
.cart-wraper .cart-main .item-main .col-num,
.cart-wraper .cart-main .item-main .col-total {
  font-size: 16px;
}

.cart-wraper .cart-main .item-main .change-goods-num {
  display: inline-block;
  width: 148px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #e0e0e0;
  text-align: center;
  background-color: #fff;
  position: relative;
  vertical-align: -14px;
  zoom: 1;
}
.cart-wraper .cart-main .item-main .change-goods-num a {
  float: left;
  width: 38px;
  height: 38px;
  line-height: 38px;
  color: #757575;
  font-size: 20px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.cart-wraper .cart-main .item-main .change-goods-num a:hover {
  background-color: #e0e0e0;
}
.cart-wraper .cart-main .item-main .change-goods-num a:first-child {
  font-size: 28px;
  line-height: 34px;
}
.cart-wraper .cart-main .item-main .change-goods-num input {
  float: left;
  width: 72px;
  height: 38px;
  line-height: 38px;
  padding: 0;
  border-width: 0;
  color: #424242;
  font-size: 16px;
  text-align: center;
  outline: none;
}
.cart-wraper .cart-main .item-main .col-total {
  color: #ff6700;
}
.cart-wraper .cart-main .item-main .col-action div {
  display: inline-block;
  height: 24px;
  width: 23px;
  border-radius: 50%;
  line-height: 24px;
  color: #757575;
  background-color: #fff;
  text-align: center;
  padding-left: 1px;
  transition: all 0.3s;
}
.cart-wraper .cart-main .item-main .col-action div:hover {
  background-color: #e53935;
  cursor: pointer;
}
.cart-wraper .cart-main .item-main .col-action div i {
  display: inline-block;
  vertical-align: 1px;
  font-weight: bolder;
  font-size: 8px;
  line-height: 8px;
  color: #757575;
  transform: scale(0.92);
  -webkit-font-smoothing: antialiased; /*设置字体的光滑度属性，也就是CSS3用于webkit引擎(chrome),设置字体抗锯齿属性*/
  -webkit-text-stroke-width: 0.2px; /*设置文字边框*/
  -moz-osx-font-smoothing: grayscale；; /*该属性是为了让字体显示的更清晰的作用*/
}
.cart-wraper .cart-main .item-main .col-action div:hover i {
  color: #fff;
}
.cart-main .list-item.active .service-info-content {
  display: block;
}
.cart-main .list-item .service-info-content {
  display: none;
}
.cart-main .service-info-content .service-info {
  margin-top: 2px;
}
.cart-main .service-info .item-box {
  height: 96px;
  overflow: hidden;
  margin-left: 100px;
  background-color: #f5f5f5;
}
.cart-main .service-info .item-box .item {
  float: left;
}

.cart-main .service-info-content .service-img img {
  width: 60px;
  height: 60px;
  margin: 15px 52px 15px 20px;
}
.cart-main .service-info-content .service-name {
  width: 380px;
}
.cart-main .service-name h3 {
  margin-top: 27px;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.cart-main .service-name .desc {
  font-size: 12px;
  color: #757575;
}
.cart-main .service-name h3 a {
  color: #424242;
}
.cart-main .service-info-content .service-price {
  width: 139px;
  padding-right: 18px;
  height: 97px;
  line-height: 97px;
  text-align: center;
  font-size: 16px;
}
.cart-main .service-info-content .service-num {
  width: 150px;
  height: 97px;
  line-height: 97px;
  font-size: 16px;
  text-align: center;
}
.cart-main .service-info-content .service-total {
  width: 120px;
  padding-right: 81px;
  height: 97px;
  line-height: 97px;
  color: #ff6700;
  font-size: 16px;
  text-align: right;
}
.cart-main .service-info-content .service-action {
  width: 80px;
  height: 97px;
  line-height: 97px;
  text-align: center;
}
.cart-main .service-action div {
  display: inline-block;
  height: 24px;
  width: 23px;
  border-radius: 50%;
  line-height: 24px;
  color: #757575;
  background-color: #f5f5f5;
  text-align: center;
  padding-left: 1px;
  transition: all 0.3s;
}
.cart-main .service-action div:hover {
  background-color: #e53935;
  cursor: pointer;
}
.cart-main .service-action div i {
  display: inline-block;
  vertical-align: 1px;
  font-weight: bolder;
  font-size: 8px;
  line-height: 8px;
  color: #757575;
  transform: scale(0.92);
  -webkit-font-smoothing: antialiased; /*设置字体的光滑度属性，也就是CSS3用于webkit引擎(chrome),设置字体抗锯齿属性*/
  -webkit-text-stroke-width: 0.2px; /*设置文字边框*/
  -moz-osx-font-smoothing: grayscale；; /*该属性是为了让字体显示的更清晰的作用*/
}
.cart-main .service-action div:hover i {
  color: #fff;
}
.cart-main .service-add-box {
  margin-left: 100px;
  /* padding-top: 15px; */
}
.cart-main .service-add-box .add-item {
  height: 48px;
  line-height: 48px;
  border: 1px solid #e0e0e0;
  padding-left: 20px;
  margin-bottom: -1px;
  color: #424242;
  transition: all 0.4s;
  cursor: pointer;
}
.cart-main .service-add-box .add-item:first-child {
  margin-top: 15px;
}
.cart-main .service-add-box .add-item .add-btn {
  display: inline-block;
  width: 22px;
  height: 22px;
  line-height: 22px;
  border-radius: 50%;
  background-color: #ff6700;
  vertical-align: -2px;
  margin-right: 11px;
}
.cart-main .add-item .add-btn i {
  color: #fff;
  margin-left: 3px;
}
.cart-main .add-item .more {
  color: #ff6700;
  margin-left: 20px;
}

/* cart-bar  */
.cart-bar {
  height: 50px;
  text-align: right;
  background-color: #fff;
  transition: background 0.3s ease, top 0.3s ease;
  position: relative;
  margin-top: 20px;
}
.cart-bar .section-left {
  float: left;
  line-height: 50px;
}
.cart-bar .section-left a {
  margin-left: 32px;
  transition: color 0.3s;
}
.cart-bar .section-left a:hover {
  color: #ff6700;
}
.cart-bar .section-left span {
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
  color: #757575;
}
.cart-bar .section-left span i {
  font-style: normal;
  color: #ff6700;
}
.cart-bar .total-price {
  text-align: right;
  padding-left: 13px;
  color: #ff6700;
}
.cart-bar .total-price em {
  font-style: normal;
  font-size: 30px;
}
.cart-bar .total-price a {
  display: inline-block;
  width: 200px;
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  margin-left: 50px;
  vertical-align: top;
  background-color: #ff6700;
  color: #fff;
  text-align: center;
  transition: color 0.3s;
}
.cart-bar .total-price a:hover {
  background-color: #f25807;
  border-color: #f25807;
  color: #fff;
}

/* cart-recommend  */
.cart-recommend {
  margin: 60px 0 0 0;
}
.cart-recommend .recommend-title {
  position: relative;
  margin: 0;
  height: 50px;
  font-size: 30px;
  font-weight: 400;
  color: #757575;
  border-top: 1px solid #e0e0e0;
}
.cart-recommend .recommend-title span {
  position: absolute;
  top: -20px;
  left: 372px;
  height: 40px;
  width: 482px;
  line-height: 40px;
  text-align: center;
  display: block;
  background-color: #f5f5f5;
}
.cart-recommend .recommend-list {
  margin-left: -14px;
}
.cart-recommend .recommend-list .recommend-item {
  float: left;
  width: 234px;
  height: 300px;
  margin: 0 0 14px 14px;
  position: relative;
  overflow: hidden;
  list-style: none;
  background-color: #fff;
  text-align: center;
}

.cart-recommend .recommend-item .recommend-ad img {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>