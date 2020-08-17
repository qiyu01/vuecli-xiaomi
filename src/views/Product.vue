<template>
  <div class="product-wraper wraper">
    <Header :navcategory="false"></Header>
    <!-- <Category-list class="category-list"></Category-list> -->

    <div class="xm-product-box">
      <div class="nav-bar">
        <div class="container">
          <h2>{{product.name}}</h2>
          <div class="left">
            <span class="separator">|</span>
            <a href="javascript:void(0)">小米10 Pro</a>
          </div>
          <div class="right">
            <a href="javascript:void(0)">概述</a>
            <span class="separator">|</span>
            <a href="javascript:void(0)">参数</a>
            <span class="separator">|</span>
            <a href="javascript:void(0)">F码通道</a>
            <span class="separator">|</span>
            <a href="javascript:void(0)">咨询客服</a>
            <span class="separator">|</span>
            <a href="javascript:void(0)">用户评价</a>
          </div>
        </div>
      </div>
    </div>
    <Navbar-fix :product="product"></Navbar-fix>
    <div class="page">
      <div class="product-box container">
        <div class="img-left">
          <!-- {{swiperColor}} -->
          <!-- swiperColor是传给子组件swiper的次数，用来切换轮播图的颜色（更改图片） -->
          <Swiper-product :swiperColor="swiperColor" :pid="product.id" ref="swiper"></Swiper-product>
        </div>
        <div class="product-con">
          <h2>{{product.name}}</h2>
          <p class="sale-desc">
            <span class="highlight">「{{product.shotdesc}}」</span>
            {{product.longdesc}}
          </p>
          <p class="company-info">小米自营</p>
          <div class="price-info">
            <span>
              {{selectVersion.price}}元
              <del>{{selectVersion.delprice}} 元</del>
            </span>
          </div>
          <div class="line" v-show="selectVersion.hasgift"></div>
          <div class="activity-box">
            <div class="flow-box" v-show="selectVersion.hasgift">
              <div class="flow-tag">赠完即止</div>
              <div class="flow-name">赠冰封散热背夹</div>
            </div>
          </div>
          <div class="address-box">
            <div class="product-address">
              <i class="iconfont icon-dingwei"></i>
              <div class="address-con">
                <div class="address-info">
                  <div class="address-detail">
                    <span>北京</span>
                    <span>北京市</span>
                    <span>海淀区</span>
                    <span>清河街道</span>
                  </div>
                  <a href="javascript:void(0)" class="edit">修改</a>
                </div>
                <div class="desc">
                  <span>有现货</span>
                </div>
              </div>
            </div>
          </div>
          <div class="buy-option">
            <div class="buy-box-child" v-if="noVersion">
              <div class="title">选择版本</div>
              <ul class="clearfix">
                <li
                  v-for="(item,i) in version"
                  :key="i"
                  :class="[item.isselected ? 'active' : '', 'clearfix']"
                  @click="versionSelect(item)"
                >
                  <a href="javascript:void(0)">{{item.name}}</a>
                </li>
              </ul>
            </div>
            <div class="buy-box-child">
              <div class="title">选择颜色</div>
              <ul class="clearfix">
                <li
                  v-for="(item,i) in color"
                  :key="i"
                  :class="[item.isselected ? 'active' : '', 'clearfix']"
                  @click="colorSelect(item,i)"
                >
                  <a href="Javascript:void(0);">{{item.name}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="service-box" v-if="noOption">
            <div class="server-item-box" v-if="serviceOption">
              <div class="title">
                选择小米提供的意外保护
                <a href="Javascript:void(0);">了解意外保护 ></a>
              </div>
              <ul>
                <li
                  v-for="(item,i) in serviceOption"
                  :key="i"
                  :class="[item.selected ? 'active' : '', 'clearfix']"
                  @click="serviceSelect(item)"
                >
                  <div class="circle">
                    <i class="iconfont icon-gou"></i>
                  </div>
                  <img src="images/product/bao.jpg" alt />
                  <div class="box">
                    <h3>
                      {{item.name}}
                      <em>{{item.price}}元</em>
                    </h3>
                    <div class="desc">{{item.desc}}</div>
                    <div class="agreement-box">
                      <div class="rectangle">
                        <i class="iconfont icon-gou"></i>
                      </div>我已阅读
                      <a :href="item.prov">
                        服务条款
                        <span>|</span>
                      </a>
                      <a :href="item.tips">常见问题</a>
                    </div>
                    <div class="price">{{item.price}}元</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="server-item-box" v-if="repairOption[0]">
              <div class="title">
                选择小米提供的延长保修
                <a href="Javascript:void(0);">了解延长保护 ></a>
              </div>
              <ul>
                <li
                  v-for="(item,i) in repairOption"
                  :key="i"
                  :class="[item.selected ? 'active' : '', 'clearfix']"
                  @click="repairSelect(item)"
                >
                  <div class="circle">
                    <i class="iconfont icon-gou"></i>
                  </div>
                  <img src="images/product/bao.jpg" alt />
                  <div class="box">
                    <h3>
                      {{item.name}}
                      <em>{{item.price}}元</em>
                    </h3>
                    <div class="desc">{{item.desc}}</div>
                    <div class="agreement-box">
                      <div class="rectangle">
                        <i class="iconfont icon-gou"></i>
                      </div>我已阅读
                      <a :href="item.prov">
                        服务条款
                        <span>|</span>
                      </a>
                      <a :href="item.tips">常见问题</a>
                    </div>
                    <div class="price">{{item.price}}元</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="select-list">
            <ul>
              <li>
                {{product.name}} 全网通版 {{selectVersion.name}} {{selectColor.name}}
                <span>
                  {{selectVersion.price}}元
                  <del>{{selectVersion.delprice}}元</del>
                </span>
              </li>
            </ul>
            <ul>
              <li v-for="(item,i) in extra" :key="i">
                {{item.name}}
                <span>{{item.price}}</span>
              </li>
            </ul>
            <ul></ul>
            <div class="total-price">总计: {{totalprice}}元</div>
          </div>
          <div class="btn-box">
            <div class="sale-btn">
              <a href="Javascript:void(0);" class="btn btn-primary" @click="addProduct">加入购物车</a>
            </div>
            <div class="favorite-btn">
              <a href="Javascript:void(0);" class="btn-like btn-grey">
                <i class="iconfont icon-xin"></i>
                喜欢
              </a>
            </div>
          </div>
          <div class="after-sale-info">
            <span>
              <a href="javascript:void(0)">
                <i class="iconfont icon-tick"></i>
                <em>小米自营</em>
              </a>
            </span>
            <span>
              <a href="javascript:void(0)">
                <i class="iconfont icon-tick"></i>
                <em>小米发货</em>
              </a>
            </span>
            <span>
              <a href="javascript:void(0)">
                <i class="iconfont icon-tick"></i>
                <em>7天无理由退货</em>
              </a>
            </span>
            <span>
              <a href="javascript:void(0)">
                <i class="iconfont icon-tick"></i>
                <em>运费说明</em>
              </a>
            </span>
            <span>
              <a href="javascript:void(0)">
                <i class="iconfont icon-tick"></i>
                <em>企业信息</em>
              </a>
            </span>
            <span>
              <a href="javascript:void(0)">
                <i class="iconfont icon-tick"></i>
                <em>售后服务政策</em>
              </a>
            </span>
            <span>
              <a href="javascript:void(0)">
                <i class="iconfont icon-tick"></i>
                <em>7天价格保护</em>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div class="product-detail">
        <div class="detail-banner">
          <div class="container">
            <ul>
              <li :class="detailActive[0].isactive?'active':''">
                <a href="javascript:void(0)" @click="detailSwitch(0)">商品概述</a>
              </li>
              <li :class="detailActive[1].isactive?'active':''">
                <a href="javascript:void(0)" @click="detailSwitch(1)">商品参数</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="detail-box">
          <div class="detail-item" :class="detailActive[0].isactive?'active':''">
            <div class="section">
              <img src="images/product/imgbox1.jpg" alt />
            </div>
            <div class="section">
              <img src="images/product/imgbox2.jpg" alt />
            </div>
          </div>
          <div class="detail-item" :class="detailActive[1].isactive?'active':''">
            <div class="section">
              <img src="images/product/imgbox3.jpg" alt />
            </div>
            <div class="section">
              <img src="images/product/imgbox4.jpg" alt />
            </div>
            <div class="section">
              <img src="images/product/imgbox5.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
    <Tool-bar></Tool-bar>
  </div>
</template>

<script>
import CategoryList from "@/components/Category-list.vue";
import SwiperProduct from "@/components/Swiper-product.vue";
import NavbarFix from "@/components/Navbar-fix.vue";
import ToolBar from "@/components/Tool-bar.vue";
import {
  getProductById,
  getProduct_version,
  getProduct_color,
  addCart,
} from "../util/api/getProduct";

export default {
  data() {
    return {
      navcategory: true, //是否显示导航栏的"全部商品分类" 该参数将作为props传给子组件，在子组件里面控制插槽slot是否显示
      pid:null,
      // 对应pid的商品信息
      product: [],
      // 所有版本参数，服务器返回
      version: [],
      // 当前选中的版本
      selectVersion: {},
      //有的商品没有version,该属性控制版本选择模块是否显示
      noVersion:true,
      // 当前选中的版本对应的颜色
      color: [],

      // 该product所有的颜色（虽然目前是每种版本有4种相同的颜色，但也可能出现不同的版本拥有的颜色数不相同），服务器返回
      allColor: [],
      //选中的颜色
      selectColor: {},
      // 选择颜色后传入颜色对应的id，作为props属性传给子组件swiper，改变对应的颜色图片
      swiperColor: 1,
      // 服务选择参数,暂时用假数据
      serviceOption: [
        {
          id: 1,
          selected: false,
          name: "意外保障服务",
          price: 349,
          desc: "手机意外碎屏/进水/碾压等损坏",
          prov:
            "https://api.jr.mi.com/insurance/document/phone_accidentIns.html?insuranceSku=28006&couponFrom=rule",
          tips:
            "https://api.jr.mi.com/insurance/document/phone_accidentIns.html?insuranceSku=28006&couponFrom=question",
        },
        {
          id: 1,
          selected: false,
          name: "一年碎屏保",
          price: 249,
          desc: "手机意外碎屏",
          prov:
            "https://api.jr.mi.com/insurance/document/phone_accidentIns.html?insuranceSku=28007&couponFrom=rule",
          tips:
            "https://api.jr.mi.com/insurance/document/phone_accidentIns.html?insuranceSku=28007&couponFrom=question",
        },
      ],
      // 保修选择参数,暂时用假数据
      repairOption: [
        {
          id: 1,
          selected: false,
          name: "延长保修服务",
          price: 159,
          desc: "厂保延一年，性能故障免费维修",
          prov:
            "https://api.jr.mi.com/insurance/document/phone_accidentIns.html?insuranceSku=28006&couponFrom=rule",
          tips:
            "https://api.jr.mi.com/insurance/document/phone_accidentIns.html?insuranceSku=28006&couponFrom=question",
        },
      ],
      // 有些商品没有保修和服务这些选项,控制这两模块的显隐
      noOption:true,
      noAddCart:true,
      // 额外选择的服务（前面选择的service和repair），如果有，就在总金额上方列出这两条信息，没有就为空不显示
      extra: [{}, {}],
      // 控制最下面商品大图prodcut-detail的tab切换
      detailActive: [
        { id: 1, isactive: true },
        { id: 2, isactive: false },
      ],
    };
  },
  inject: ["reload"],
  components: { CategoryList, SwiperProduct, NavbarFix, ToolBar },
  mounted() {
    this.pid = this.$route.query.pid;
      this.getcontent(this.pid);
  },
  watch: {
    $route(to, from) {
      // this.pid = this.$route.query.pid;
      // this.getcontent(this.pid);
      this.reload()
    },
  },
  methods: {
    getcontent(pid) {
      if(!pid){pid=1}
      getProductById(pid)
        .then((res) => {
          if (res.length > 0) {
            this.product = res[0];
            // promiseall获取商品的版本选项和颜色选项
            return Promise.all([
              getProduct_version(pid),
              getProduct_color(pid),
            ]);
          } else {
            this.$message({
              message: "没有此商品",
              type: "error",
            });
            this.noAddCart=false
          }
        })
        .then((res) => {
          // 版本选项
          // 该商品的版本和颜色数据没有插入,因为product里面插入了很多假数据，但并没有完全插入对应的版本和颜色图片数据
          if(!res[0] || !res[1]){
            this.$message({
              message: "该商品的完整图片信息暂时没有插入，麻烦在地址栏上改变pid值为1,2,3,9或者24的商品试试",
              type: "error",
            });
            this.noAddCart=false
            return false
          }
          this.version = res[0];
          for (let v of this.version) {
            // 给version里面的全部对象添加新属性isselected，必须使用$set方法，vue才能监测到数据变化
            this.$set(v, "isselected", false);
          }
          // 如果版本选项数量大于一个，默认选中第二个版本，只有一个的时候默认选中第一个。这个需求应该后台实现，这里暂定这样。
          if(this.version.length>1){
            this.version[1].isselected = true;
            // selectVersion存储当前选中的版本（默认第二个）
            this.selectVersion = this.version[1];
          }else if(this.version.length=1){
            this.version[0].isselected = true;
            // selectVersion存储当前选中的版本（默认第1个）
            this.selectVersion = this.version[0];
            //如果该商品只有一个版本，而且版本name为null的时候说明该商品没有可选版本。改变noversion参数隐藏版本选择模块
            if(this.version[0].name==null){this.noVersion=false}
          }else{return false}
          

          // 颜色选项
          this.allColor = res[1];
          //默认版本sid=1的颜色存入this.color作为第一次页面加载时显示的颜色选项
          for (let c of this.allColor) {
            // 给allcolor里的全部对象添加isselected属性作为是否被选中的颜色。
            this.$set(c, "isselected", false);
            if (c.sid == this.selectVersion.sid) {
              this.color.push(c);
            }
          }
          if(this.color.length>0){
            // 默认选中第一个颜色
          this.color[0].isselected = true;
          this.selectColor = this.color[0];
          // 默认选中颜色的图片，这个1是自定义的参数， 1代表第一个颜色，2代表第二个颜色...这个参数将作为props属性传给子组件swiper查询颜色对应的图片，数据库里对应的是product_img表里的cid。
          this.swiperColor = 1;
          }
        });
      if(pid==24){
        // 24号商品门锁是没有服务和保修选项的
        this.noOption=false
      }
    
    },

    // 选择版本
    versionSelect(item) {
      for (let v of this.version) {
        v.isselected = false;
      }
      item.isselected = true;
      this.selectVersion = item;
      // 调用子组件swiper里的方法重置滚动位置。
      this.$refs.swiper.slideReset();
    },
    colorSelect(item, i) {
      for (let c of this.color) {
        c.isselected = false;
      }
      item.isselected = true;
      this.selectColor = item;
      // 这里用下标来获取swipercolor对应的cid，1代表第一个颜色，2代表第二个颜色...
      this.swiperColor = i + 1;
    },
    // 服务选择
    serviceSelect(item) {
      var bool = item.selected ? true : false;
      for (let s of this.serviceOption) {
        s.selected = false;
      }
      item.selected = !bool;
      this.extra[0] = {};
      for (let s of this.serviceOption) {
        if (s.selected) {
          this.extra[0] = { name: s.name, price: s.price };
        }
      }
    },
    // 保修选择
    repairSelect(item) {
      var bool = item.selected ? true : false;
      for (let s of this.repairOption) {
        s.selected = false;
      }
      item.selected = !bool;
      this.extra[1] = {};
      for (let s of this.repairOption) {
        if (s.selected) {
          this.extra[1] = { name: s.name, price: s.price };
        }
      }
    },
    //加入购物车
    addProduct() {
      if(!this.pid || !this.noAddCart){return false}
      addCart(this.pid, 1).then((data) => {
        if (data == 1) {
          this.$message({
            message: "添加购物车成功",
            type: "success",
          });
        }
      });
    },
    // 最下面的商品大图和参数的切换
    detailSwitch(i) {
      for (let a of this.detailActive) {
        a.isactive = false;
      }
      this.detailActive[i].isactive = true;
    },
  },
  computed: {
    // 价格
    price() {
      for (let v of this.version) {
        if (v.isselected) {
          return { price: v.price, delprice: v.delprice };
        }
      }
    },
    // 是否有礼物
    hasgift: {
      get() {
        for (let v of this.version) {
          if (v.isselected) {
            return v.gift;
          }
        }
      },
    },

    totalprice() {
      var totalprice = this.selectVersion.price;
      for (let s of this.serviceOption) {
        if (s.selected) {
          totalprice += s.price;
        }
      }
      for (let r of this.repairOption) {
        if (r.selected) {
          totalprice += r.price;
        }
      }
      return totalprice;
    },
  },
  // watch: {
  //   version:{
  //     handler() {
  //       for(let v of this.version){
  //       if(v.isselected){
  //           this.color=v.color;
  //         }
  //       }

  //   },
  //   deep: true,
  //   immediate: true
  //   }
  // },
};
</script>


<style>
/* 标题条 */

.xm-product-box {
  position: relative;
  z-index: 4;
  background: #fff;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  -webkit-box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
}
.xm-product-box .nav-bar {
  position: relative;
  height: 63px;
  width: 100%;
  margin-top: 0;
  color: #616161;
}
.xm-product-box .nav-bar h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 60px;
  color: #424242;
  float: left;
}
.xm-product-box .nav-bar .left {
  float: left;
  margin-left: 5px;
  line-height: 60px;
  font-size: 12px;
}
.xm-product-box .nav-bar .left .separator {
  margin: 0.5em 6px;
  color: #424242;
}
.xm-product-box .nav-bar .right .separator {
  margin: 0.5em 11px;
  color: #424242;
}
.xm-product-box .nav-bar .left a,
.xm-product-box .nav-bar .right a {
  color: #616161;
}
.xm-product-box .nav-bar .right {
  float: right;
  margin: 17px 0 0 0;
}
.xm-product-box .nav-bar .right .separator {
  color: #e0e0e0;
}

/* product-box */
.product-box {
  display: flex;
  justify-content: left;
  padding-top: 32px;
  padding-bottom: 12px;
}
.product-box .img-left {
  width: 606px;
  height: 606px;
  position: relative;
}
.product-box .product-con {
  flex: 1;
  margin-left: 20px;
}
.product-box .product-con h2 {
  font-size: 24px;
  font-weight: 400;
  color: #212121;
}
.product-con .sale-desc {
  color: #b0b0b0;
  padding-top: 8px;
  line-height: 1.5;
}
.product-con .sale-desc .highlight {
  color: #ff4a00;
}
.product-con .company-info {
  color: #ff6700;
  margin-bottom: 0;
  margin-top: 14px;
}
.product-con .price-info {
  font-size: 18px;
  line-height: 1;
  color: #ff6700;
  padding: 12px 0 10px;
}
.product-con .price-info del {
  font-size: 14px;
  margin-left: 5px;
  color: #b0b0b0;
}
.product-con .line {
  margin-top: 12px;
  border-bottom: 1px solid #e0e0e0;
}
.product-con .activity-box {
  padding: 10px 0 5px;
  border-bottom: 1px solid #e0e0e0;
}
.product-con .activity-box .flow-box {
  margin-bottom: 5px;
}
.product-con .activity-box .flow-tag {
  display: inline-block;
  width: 80px;
  padding: 2px 0;
  text-align: center;
  background: #ff6700;
  color: #fff;
}
.product-con .activity-box .flow-name {
  display: inline-block;
  width: 430px;
  line-height: 26px;
  margin-left: 5px;
}
.product-con .address-box {
  margin: 20px 0;
}
.product-con .address-box .product-address {
  padding: 30px 50px;
  position: relative;
  background: #fafafa;
  border: 1px solid #e0e0e0;
}
.product-con .address-box .product-address > i {
  position: absolute;
  left: 20px;
  top: 26px;
  font-size: 19px;
  color: #999;
  transform: scaleY(1.05) translateY(2px);
}
.product-con .address-box .address-detail {
  display: inline-block;
}
.product-con .address-box .address-detail span {
  margin-right: 14px;
}
.product-con .address-box a.edit {
  color: #ff6700;
}
.product-con .address-box .desc {
  color: #b0b0b0;
}
.product-con .address-box .desc span {
  color: #ff6700;
}

.product-con .buy-option .buy-box-child {
  margin-bottom: 30px;
  position: relative;
}
.product-con .buy-box-child .title {
  font-size: 18px;
}
.product-con .buy-box-child ul li {
  margin-right: 12px;
  margin-top: 10px;
  line-height: 42px;
  height: 42px;
  position: relative;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  transition: all 0.2s ease;
  float: left;
  width: 292px;
  font-size: 16px;
  text-align: center;
}
.product-con .buy-box-child ul li:nth-child(2n) {
  margin-right: 0;
}
.product-con .buy-box-child ul li a {
  font-size: 16px;
}
.product-con .buy-box-child ul li.active,
.product-con .buy-box-child ul li:hover {
  border-color: #ff6700;
}
.product-con .buy-box-child ul li.active a,
.product-con .buy-box-child ul li:hover a {
  color: #ff6700;
}
.product-con .service-box .server-item-box {
  margin-bottom: 30px;
}
.product-con .server-item-box .title {
  font-size: 18px;
  margin-bottom: 15px;
  line-height: 1;
}
.product-con .server-item-box .title a {
  color: #ff6700;
  font-size: 14px;
  float: right;
  line-height: 18px;
}
.product-con .server-item-box ul li {
  border: 1px solid #e0e0e0;
  margin-top: -1px;
  background: #fff;
  cursor: pointer;
  padding: 30px 0;
  position: relative;
}
.product-con .server-item-box ul li.active {
  border-color: #ff6700;
  z-index: 2;
}
.product-con .server-item-box ul li .circle {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  line-height: 12px;
  margin-left: 41px;
  float: left;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  margin-top: 25px;
  color: #fff;
  border: 1px solid #b0b0b0;
  overflow: hidden;
}
.product-con .server-item-box ul li .circle i {
  font-size: 12px;
}
.product-con .server-item-box ul li.active .circle {
  color: #fff;
  background-color: #ff6700;
  border-color: #ff6700;
}
.product-con .server-item-box ul li img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
  margin-left: 20px;
  float: left;
}
.product-con .server-item-box .box {
  float: left;
}
.product-con .server-item-box h3 {
  font-size: 18px;
  margin: 0 0 10px 0;
}
.product-con .server-item-box ul li.active h3 {
  color: #ff6700;
}
.product-con .server-item-box h3 em {
  font-style: normal;
  font-size: 14px;
  background: #ff6700;
  display: inline-block;
  padding: 2px 6px;
  border-radius: 20px;
  color: #fff;
  margin-left: 2px;
}
.product-con .server-item-box .desc {
  font-size: 14px;
  height: 18px;
  color: #b0b0b0;
  width: 286px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 5px;
}
.product-con .server-item-box .agreement-box {
  margin-top: 5px;
}
.product-con .server-item-box .agreement-box .rectangle {
  display: inline-block;
  width: 12px;
  height: 12px;
  line-height: 12px;
  border-radius: 2px;
  overflow: hidden;
  color: #333;
  border: 1px solid #b0b0b0;
  transform: translateY(2px);
  /* vertical-align: middle; */
}
.product-con .server-item-box .agreement-box i {
  display: inline-block;
  font-size: 12px;
  line-height: 12px;
  color: #fff;
}
.product-con .server-item-box ul li.active .rectangle {
  color: #fff;
  background-color: #ff6700;
  border-color: #ff6700;
}
.product-con .server-item-box .agreement-box a {
  display: inline-block;
  color: #ff6700;
  margin: 0 2px;
}
.product-con .server-item-box .price {
  position: absolute;
  right: 20px;
  bottom: 28px;
  color: #757575;
}
.product-con .select-list {
  background: #f9f9fa;
  padding: 30px;
  margin-bottom: 30px;
}
.product-con .select-list ul li {
  line-height: 30px;
  color: #616161;
}
.product-con .select-list ul li span {
  float: right;
}
.product-con .select-list .total-price {
  color: #ff6700;
  font-size: 24px;
  padding-top: 20px;
}
.product-con .btn-box {
  margin: 10px 0 20px 0;
}
.product-con .btn-box .sale-btn {
  display: inline-block;
  margin-right: 10px;
}
.product-con .btn-box .sale-btn .btn {
  width: 298px;
  height: 52px;
  line-height: 52px;
  font-size: 16px;
}
.product-con .btn-box .favorite-btn {
  display: inline-block;
  vertical-align: top;
}
.product-con .btn-box .favorite-btn .btn-like {
  display: block;
  width: 140px;
  height: 52px;
  line-height: 52px;
  padding: 0;
  margin: 0;
  border: 1px solid #b0b0b0;
  text-align: center;
  cursor: pointer;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  font-size: 16px;
  position: relative;
}
.product-con .btn-box .favorite-btn .btn-like i {
  font-size: 22px;
  line-height: 23px;
  vertical-align: -2px;
  margin-right: 5px;
}
.product-con .after-sale-info span {
  display: inline-block;
}
.product-con .after-sale-info a {
  display: inline-block;
  margin-right: 15px;
  line-height: 30px;
  margin-bottom: 10px;
  cursor: default;
  white-space: nowrap;
  color: #b0b0b0;
}
.product-con .after-sale-info a i {
  font-size: 20px;
  display: inline-block;
  font-style: normal;
  vertical-align: middle;
}
.product-con .after-sale-info a em {
  font-style: normal;
  display: inline-block;
  margin-left: 2px;
  vertical-align: middle;
}

.product-detail .detail-banner {
  text-align: center;
  padding: 10px 0;
  background: #fff;
  border-top: 1px solid #ddd;
}
.product-detail .detail-banner li {
  width: 168px;
  height: 18px;
  padding: 20px 0;
  line-height: 18px;
  text-align: center;
  font-size: 18px;
  color: #424242;
  display: inline-block;
}
.product-detail .detail-banner li a {
  width: 170px;
  display: block;
  cursor: pointer;
  border-right: 1px solid #e0e0e0;
}
.product-detail .detail-banner li:last-child a {
  border-right: 0;
}
.product-detail .detail-banner li.active a {
  color: #ff6700;
}
.product-detail .detail-banner li a:hover {
  color: #ff6700;
}
.product-detail .detail-box .detail-item {
  display: none;
}
.product-detail .detail-box .detail-item.active {
  display: block;
}
.product-detail .detail-box .section {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}
.product-detail .detail-box .section img {
  position: relative;
  left: 50%;
  top: 0;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
  height: 100%;
}
</style>