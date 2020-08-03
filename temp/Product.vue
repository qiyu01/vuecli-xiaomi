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
          {{swiperColor}}
          <!-- swiperColor是传给子组件swiper的次数，用来切换轮播图的颜色（更改图片） -->
          <Swiper-product :swiperColor="swiperColor"></Swiper-product>
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
              {{version.price}}元
              <del>{{version.delprice}} 元</del>
            </span>
          </div>
          <div class="line" v-show="version.hasgift"></div>
          <div class="activity-box">
            <div class="flow-box" v-show="version.hasgift">
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
            <div class="buy-box-child">
              <div class="title">选择版本</div>
              <ul class="clearfix">
                <li v-for="(item,i) in allVersion" :key="i" :class="[item.isselected ? 'active' : '', 'clearfix']" @click="versionSelect(item)">
                  <a href="javascript:void(0)">{{item.name}}</a>
                </li>
                
              </ul>
            </div>
            <div class="buy-box-child">
              <div class="title">选择颜色</div>
              <ul class="clearfix">
                <li v-for="(item,i) in color" :key="i" :class="[item.isselected ? 'active' : '', 'clearfix']" 
                @click="colorSelect(item)">
                  <a href="Javascript:void(0);">{{item.name}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="service-box">
            <div class="server-item-box" v-if="serviceOption">
              <div class="title">
                选择小米提供的意外保护
                <a href>了解意外保护 ></a>
              </div>
              <ul>
                <li v-for="(item,i) in serviceOption" :key="i" :class="[item.selected ? 'active' : '', 'clearfix']" @click="serviceSelect(item)">
                  <div class="circle">
                    <i class="iconfont	icon-gou"></i>
                  </div>
                  <img src="images/product/bao.jpg" alt="">
                  <div class="box">
                    <h3>
                      {{item.name}}
                      <em>{{item.price}}元</em>
                    </h3>
                    <div class="desc">{{item.desc}}</div>
                    <div class="agreement-box">
                      <div class="rectangle">
                       <i class="iconfont	icon-gou"></i>
                      </div>
                      
                      我已阅读
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
                <a href>了解延长保护 ></a>
              </div>
              <ul>
                <li v-for="(item,i) in repairOption" :key="i" :class="[item.selected ? 'active' : '', 'clearfix']" @click="repairSelect(item)">
                  <div class="circle">
                    <i class="iconfont	icon-gou"></i>
                  </div>
                  <img src="images/product/bao.jpg" alt="">
                  <div class="box">
                    <h3>
                      {{item.name}}
                      <em>{{item.price}}元</em>
                    </h3>
                    <div class="desc">{{item.desc}}</div>
                    <div class="agreement-box">
                      <div class="rectangle">
                       <i class="iconfont	icon-gou"></i>
                      </div>
                      
                      我已阅读
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
                小米10 全网通版 8GB+256GB 国风雅灰
                <span>
                  {{version.price}}元
                  <del>{{version.delprice}}元</del>
                </span>
              </li>
            </ul>
            <ul><li v-for="(item,i) in extra" :key="i">
                 {{item.name}}
                <span>
                  {{item.price}}
                </span>
              </li></ul>
            <ul></ul>
            <div class="total-price">总计: {{totalprice}}元</div>
          </div>
          <div class="btn-box">
            <div class="sale-btn">
              <a href class="btn btn-primary">加入购物车</a>
            </div>
            <div class="favorite-btn">
              <a href class="btn-like btn-grey">
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
              <li class="active"><a href="javascript:void(0)" @click="detailSwitch">商品概述</a></li>
              <li><a href="javascript:void(0)" @click="detailSwitch">商品参数</a></li>
            </ul>
          </div>
        </div>
        <div class="detail-box">
          <div class="detail-item">
            <div class="section">
              <img src="images/product/imgbox1.jpg" alt="">
            </div>
            <div class="section">
               <img src="images/product/imgbox2.jpg" alt="">
            </div>
          </div>
          <div class="detail-item">
            <div class="section">
              <img src="images/product/imgbox3.jpg" alt="">
            </div>
            <div class="section">
               <img src="images/product/imgbox4.jpg" alt="">
            </div>
            <div class="section">
               <img src="images/product/imgbox5.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
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
      navcategory: true,//是否显示导航栏的"全部商品分类" 该参数将作为props传给子组件，在子组件里面控制插槽slot是否显示
      // 版本参数
      version:{},
      allVersion:[],
      // 颜色,通过watch 参数version的值得到
      color:[],
      allColor:[],
      swiperColor:1,
      // 服务选择参数
      serviceOption:[
        {id:1,selected:false,name:"意外保障服务",price:349,desc:"手机意外碎屏/进水/碾压等损坏",prov:"https://api.jr.mi.com/insurance/document/phone_accidentIns.html?insuranceSku=28006&couponFrom=rule",tips:"https://api.jr.mi.com/insurance/document/phone_accidentIns.html?insuranceSku=28006&couponFrom=question"},
        {id:1,selected:false,name:"一年碎屏保",price:249,desc:"手机意外碎屏",prov:"https://api.jr.mi.com/insurance/document/phone_accidentIns.html?insuranceSku=28007&couponFrom=rule",tips:"https://api.jr.mi.com/insurance/document/phone_accidentIns.html?insuranceSku=28007&couponFrom=question"}
        
      ],
      // 保修选择参数
      repairOption:[
        {id:1,selected:false,name:"延长保修服务",price:159,desc:"厂保延一年，性能故障免费维修",prov:"https://api.jr.mi.com/insurance/document/phone_accidentIns.html?insuranceSku=28006&couponFrom=rule",tips:"https://api.jr.mi.com/insurance/document/phone_accidentIns.html?insuranceSku=28006&couponFrom=question"}
      ],
      // 额外选择的服务（前面选择的service和repair），如果有，就在总金额上方列出这两条信息，没有就为空不显示
      extra:[{},{}]
    };
  },
  mounted() {
    this.axios({
                 url: "http://127.0.0.1:8080/mi/v1/product_version",
                 method: "get",
                 params: {}
                }).then(res => {
                this.allVersion=res.data;
              // 默认选中第二个版本，以后可以根据需求更改
                for(let v of this.allVersion){
                    if(v.id==2){
                      v.isselected=true;
                      this.version=v;
                    }
                }

                });
    this.axios({
                 url: "http://127.0.0.1:8080/mi/v1/product_color",
                 method: "get",
                 params: {}
                }).then(res => {
                this.allColor=res.data;
                //默认版本sid=2的所有颜色存入this.color
                for(let c of this.allColor){
                    if(c.sid==2){
                      this.color.push(c);
                       // 默认选中第一个颜色
                      this.color[0].isselected=true;
                    }
                }
                })
  },
  components: { CategoryList, SwiperProduct },
  methods: {
    // 选择版本
    versionSelect(item){
      // console.log(item)
      
        for(let v in this.allversion){
          
          console.log(v)
        }
        // for(let i=0;i<this.allVersion.length;i++){
        //   this.allVersion[i].isselected=false;
        // }
        // item.isselected=true;
        // this.version=item;
        // console.log(this.allVersion)
      //  this.$set(item,'isselected',true)
    },
    colorSelect(item){
      for(let c of this.color){
          c.isselected=false;
          this.color[1].isselected=true;
        }
        
        console.log(this.color)
    },
    // 服务选择
    serviceSelect(item){
        var bool=item.selected?true:false;
        for(let s of this.serviceOption){
          s.selected=false;
        }
        item.selected=!bool;
        this.extra[0]={}
        for(let s of this.serviceOption){
          
          if(s.selected){
            this.extra[0]={name:s.name,price:s.price}
          }
        }
    },
    // 保修选择
    repairSelect(item){
        var bool=item.selected?true:false;
        for(let s of this.repairOption){
          s.selected=false;
        }
        item.selected=!bool;
        this.extra[1]={}
        for(let s of this.repairOption){
          if(s.selected){
            this.extra[1]={name:s.name,price:s.price}
          }
        }
    },
    // 最下面的商品大图和参数的切换
    detailSwitch(e){
      this.$(e.target).parent().addClass("active").siblings().removeClass("active");
      var eq=this.$(e.target).parent().index();
      this.$(".product-detail .detail-item").eq(eq).css("display","block").siblings().css("display","none");
    }
  },
  computed: {
    // 是否有礼物
    hasgift:{
      get(){
          for(let v of this.version){
        if(v.isselected){
            return v.gift;
          }
        }
      }
        
    },
    //根据选择的版本设置颜色
    // color(){
    //   for(let v of this.version){
    //     if(v.isselected){
    //         return v.color;
    //       }
    //     }
    // },
    // 总价
    totalprice(){
      var totalprice=this.version.price;
      for(let s of this.serviceOption){
        if(s.selected){
          totalprice+=s.price
        }
      }
      for(let r of this.repairOption){
        if(r.selected){
          totalprice+=r.price
        }
      } 
      return totalprice;     
    }
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
.product-con .line{
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
.product-con .server-item-box .title a{
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
.product-con .server-item-box ul li.active{
  border-color:#ff6700 ;
  z-index: 2;
}
.product-con .server-item-box ul li .circle{
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
    color:#fff;
    border: 1px solid #b0b0b0;
    overflow: hidden;
}
.product-con .server-item-box ul li .circle i{
   font-size: 12px;
}
.product-con .server-item-box ul li.active .circle{
  color: #fff;
  background-color: #ff6700;
  border-color:#ff6700 ;
}
.product-con .server-item-box ul li img{
  width: 50px;
    height: 50px;
    margin-right: 15px;
    margin-left: 20px;
    float: left;
}
.product-con .server-item-box .box{
  float: left;
}
.product-con .server-item-box  h3{
  font-size: 18px;
  margin: 0 0 10px 0;
}
.product-con .server-item-box ul li.active h3{
  color: #ff6700;
}
.product-con .server-item-box  h3 em{
  font-style: normal;
    font-size: 14px;
    background: #ff6700;
    display: inline-block;
    padding: 2px 6px;
    border-radius: 20px;
    color: #fff;
    margin-left: 2px;
}
.product-con .server-item-box .desc{
  font-size: 14px;
    height: 18px;
    color: #b0b0b0;
    width: 286px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 5px;
}
.product-con .server-item-box .agreement-box{
  margin-top: 5px;
}
.product-con .server-item-box .agreement-box .rectangle{
  display: inline-block;
  width: 12px;height: 12px;
  line-height: 12px;
  border-radius: 2px;
  overflow: hidden;
  color: #333;
  border: 1px solid #b0b0b0;
  transform: translateY(2px);
  /* vertical-align: middle; */
}
.product-con .server-item-box .agreement-box i{
  display: inline-block;
  font-size: 12px;
  line-height: 12px;
  color: #fff;
}
.product-con .server-item-box ul li.active .rectangle{
  color: #fff;
  background-color: #ff6700;
  border-color:#ff6700 ;
}
.product-con .server-item-box .agreement-box a{
  display: inline-block;
  color: #ff6700;
  margin: 0 2px;
}
.product-con .server-item-box .price{
  position: absolute;
    right: 20px;
    bottom: 28px;
    color: #757575;
}
.product-con .select-list{
  background: #f9f9fa;
    padding: 30px;
    margin-bottom: 30px;
}
.product-con .select-list ul li{
  line-height: 30px;
    color: #616161;
}
.product-con .select-list ul li span{
  float: right;
}
.product-con .select-list .total-price{
  color: #ff6700;
    font-size: 24px;
    padding-top: 20px;
}
.product-con .btn-box{
  margin: 10px 0 20px 0;
}
.product-con .btn-box .sale-btn{
      display: inline-block;
    margin-right: 10px;
}
.product-con .btn-box .sale-btn .btn{
    width: 298px;
    height: 52px;
    line-height: 52px;
    font-size: 16px;
}
.product-con .btn-box .favorite-btn{
      display: inline-block;
    vertical-align: top;
}
.product-con .btn-box .favorite-btn .btn-like{
  display: block;
    width: 140px;
    height: 52px;
    line-height: 52px;
    padding: 0;
    margin: 0;
    border: 1px solid #b0b0b0;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all .4s;
    transition: all .4s;
    font-size: 16px;
    position: relative;
}
.product-con .btn-box .favorite-btn .btn-like i{
  font-size: 22px;
    line-height: 23px;
    vertical-align: -2px;
    margin-right: 5px;
}
.product-con .after-sale-info span{
  display: inline-block;
}
.product-con .after-sale-info a{
  display: inline-block;
    margin-right: 15px;
    line-height: 30px;
    margin-bottom: 10px;
    cursor: default;
    white-space: nowrap;
    color: #b0b0b0;
}
.product-con .after-sale-info a i{
  font-size: 20px;
    display: inline-block;
    font-style: normal;
    vertical-align: middle;
}
.product-con .after-sale-info a em{
    font-style: normal;
    display: inline-block;
    margin-left: 2px;
    vertical-align: middle;
}

.product-detail .detail-banner{
    text-align: center;
    padding: 10px 0;
    background: #fff;
    border-top: 1px solid #ddd;
}
.product-detail .detail-banner li{
  width: 168px;
    height: 18px;
    padding: 20px 0;
    line-height: 18px;
    text-align: center;
    font-size: 18px;
    color: #424242;
    display: inline-block;
}
.product-detail .detail-banner li a{
  width: 170px;
    display: block;
    cursor: pointer;
    border-right: 1px solid #e0e0e0;
}
.product-detail .detail-banner li:last-child a{
  
    border-right: 0;
}
.product-detail .detail-banner li.active a{
  color: #ff6700;
}
.product-detail .detail-banner li a:hover{
  color: #ff6700;
}
.product-detail .detail-box .section{
  position: relative;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
}
.product-detail .detail-box .section img{
  position: relative;
    left: 50%;
    top: 0;
    -webkit-transform: translate3d(-50%,0,0);
    transform: translate3d(-50%,0,0);
    height: 100%;
}
</style>