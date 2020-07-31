<template>
  <div class="product-wraper">
    <Header :navcategory="navcategory"></Header>
    <!-- <Category-list class="category-list"></Category-list> -->

    <div class="xm-product-box">
      <div class="nav-bar">
        <div class="container">
          <h2>小米10</h2>

          <div class="left">
            <span class="separator">|</span>
            <a href>小米10 Pro</a>
          </div>
          <div class="right">
            <a href>概述</a>
            <span class="separator">|</span>
            <a href>参数</a>
            <span class="separator">|</span>
            <a href>F码通道</a>
            <span class="separator">|</span>
            <a href>咨询客服</a>
            <span class="separator">|</span>
            <a href>用户评价</a>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="product-box container">
        <div class="img-left">
          <Swiper-product></Swiper-product>
        </div>
        <div class="product-con">
          <h2>小米10</h2>
          <p class="sale-desc">
            <span class="highlight">「小米10“国风雅灰”新颜色今日首销，256GB买赠冰封散热背夹，火爆热卖中」</span>
            骁龙865处理器 / 1亿像素8K电影相机 / 双模5G / 新一代LPDDR5内存 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配Wi-Fi 6 / 超强VC液冷散热 / 30W极速闪充+30W无线闪充+10W无线反充 / 4780mAh大电量 / 多功能NFC
          </p>
          <p
            title="企业名称：小米通讯技术有限公司
                   企业执照注册号：91110108558521630L
                   企业地址：北京市海淀区西二旗中路33号院6 号楼9层019号
                   企业电话：400-100-5678
                   营业期限：2010年08月25日 至 2040年08月24日
                   经营范围：开发手机技术、计算机软件及信息技术；技术检测、技术咨询、技术服务、技术转让；计算机技术培训；系统集成；货物进出口、技术进出口、代理进出口；家用电器、通信设备、广播电视设备（不含卫星电视广播、                   地面接收装置）、机械设备、电子产品、文化用品的批发零售；维修仪器仪表；销售医疗器械I类、II、III类、针纺织品（含家纺家饰）、服装鞋帽、日用杂货、工艺品、文化用品、体育用品、照相器材、卫生用品（含个人护理                   用品）、钟表眼镜、箱包、家具（不从事实体店铺经营）、小饰品、日用品、乐器、自行车、智能卡；计算机、通讯设备、家用电器、电子产品、机械设备的技术开发、技术服务；销售金银饰品（不含金银质地纪念币）；家用空                   调的委托生产；委托生产翻译机；销售翻译机、五金交电（不含电动自行车）、厨房用品、陶瓷制品、玻璃制品、玩具、汽车零配件、食用农产品、花卉、苗木、宠物用品、建筑材料、装饰材料、化妆品、珠宝首饰、通讯设备、                   卫生间用品、农药；生产手机（仅限在海淀区永捷北路2号三层生产及外埠生产）；出版物批发；出版物零售；销售食品。（销售第三类医疗器械以及销售食品以及依法须经批准的项目，经相关部门批准后依批准的内容开展经营活                   动。）"
            class="company-info"
          >小米自营</p>
          <div class="price-info">
            <span>
              3999元
              <del>4299 元</del>
            </span>
          </div>

          <div class="activity-box">
            <div class="flow-box">
              <div class="flow-tag">赠完即止</div>
              <div class="flow-name">赠冰封散热背夹</div>
            </div>
          </div>
          <div class="address-box">
            <div class="product-address">
              <i class="iconfont"></i>
              <div class="address-con">
                <div class="address-info">
                  <div class="address-detail">
                    <span>北京</span>
                    <span>北京市</span>
                    <span>海淀区</span>
                    <span>清河街道</span>
                  </div>
                  <a href>修改</a>
                </div>
                <div class="desc">
                  <span>有现货</span>
                </div>
              </div>
            </div>
          </div>
          <div class="buy-option">
            <div class="buy-box-child">
              <div class="title">选择版本</div>
              <ul class="clearfix">
                <li>
                  <a href>8G+128GB</a>
                </li>
                <li>
                  <a href>8G+256GB</a>
                </li>
                <li>
                  <a href>12G+256GB</a>
                </li>
              </ul>
            </div>
            <div class="buy-box-child">
              <div class="title">选择颜色</div>
              <ul class="clearfix">
                <li>
                  <a href>国风雅灰</a>
                </li>
                <li>
                  <a href>钛银黑</a>
                </li>
                <li>
                  <a href>冰海蓝</a>
                </li>
                <li>
                  <a href>蜜桃金</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="service-box"></div>
          <div class="select-list"></div>
          <div class="btn-box"></div>
          <div class="after-sale-info"></div>
        </div>
      </div>

      <div class="product-detail"></div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import CategoryList from "@/components/Category-list.vue";
import SwiperProduct from "@/components/Swiper-product.vue";
export default {
  data() {
    return {
      navcategory: true //是否显示导航栏的"全部商品分类"
    };
  },
  components: { CategoryList, SwiperProduct }
};
</script>


<style>
/* category-list组件在product页面的样式微调 */
.site-header .nav-category .home-hero-list-category {
  display: none;
}
.site-header .nav-category:hover .home-hero-list-category {
  display: block;
}
.site-header .nav-category .list-category {
  background-color: #fff;
  border: 1px solid #ff6700;
  width: 232px;
}
.site-header .nav-category .list-category > li > a {
  color: #424242;
}
.site-header .nav-category .list-category > li > a:hover {
  color: #fff;
}
.site-header .nav-category .list-category > li > a > span {
  opacity: 0.3;
}
.site-header .nav-category .list-category .children-list {
  top: -1px;
  left: 233px;
  height: 457px;
}

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
  width: 600px;
  /* background-color: #616161; */
}
</style>