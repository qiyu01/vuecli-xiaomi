<template>
    <!-- 二级导航栏 -->
        <div class="site-header">
            <div class="container">
                <div class="header-logo">
                    <router-link class="logo" to="/">
                        <span>
                            <img :src="logoImg[0].src" alt="">
                            <img :src="logoImg[1].src" alt="">
                        </span>
                    </router-link>
                </div>
                <div class="header-nav">
                    <ul class="nav-list clearfix">
                        
                        <li :class="[navcategory ? 'active' : 'hidden', 'nav-category']">
                            
                                <a href="javascript:void(0)" >
                                    <span v-if="!navcategory">全部商品分类</span>
                                </a>
                            
                                <Category-list></Category-list>
                        </li>
                        <li class="nav-item" v-for="(item,i) of navItem" :key="i" @mouseenter="dropDown(item)" @mouseleave="dropUp">
                            <a href="javascript:void(0)">
                                <span>{{item.name}}</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:void(0)">
                                <span>服务</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:void(0)">
                                <span>社区</span>
                            </a>
                        </li>
                    </ul>
                    
                    <div :class="[navItemActive ? 'active' : '', 'item-children']" @mouseenter="mouseoverChild" @mouseleave="dropUp">
                        <div class="container">
                            <ul class="children">
                                <li v-for="(item,i) of activeNav" :key="i">
                                    <router-link to="product">
                                        <div class="figure">
                                        <img :src="item.src" alt="" width="160" height="110">
                                        </div>
                                        <div class="title">{{item.name}}</div>
                                        <p class="price">{{item.price}}元起</p>
                                    </router-link>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="search-form clearfix">
                        <label for="search" class="hide">站内搜索</label>
                        <span>
                            <input type="search" :class="[keylist ? 'border-info' : '', 'search-text']"   id="search" name="keyword" autocomplete="off" :placeholder="keyPlaceholder.name" @focus="focus" @blur="blur" v-model="keyword" @keyup.enter="search">
                        </span>
                        <router-link :class="[keylist ? 'border-info' : '', 'search-btn iconfont icon-sousuo1']"  :to="{name:'Search', query: {keyword:content}}" @click.native="search"></router-link>
                        

                        <div :class="[keylist ? 'active' : '', 'keyword-list']">
                            <ul class="result-list">
                                <router-link :to="{name:'Search', query: {keyword:item.name}}" tag="li" v-for="(item,i) of keyRecommend" :key="i"><span>{{item.name}}</span></router-link>
                                
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import CategoryList from './Category-list.vue'
import {searchProduct,getImgBg} from '../util/api/getProduct'

export default {
  name: 'Headernav',
  data() {
      return {
          logoImg:[{id:1,src:"mi-home.png"},{id:2,src:"mi-logo.png"}],  
          keyword:null,
          keylist:false,
          navItemActive:false,
          navItem:[{id:1,name:"小米手机"},{id:2,name:"Redmi 红米"},{id:3,name:"电视"},{id:4,name:"笔记本"},{id:2,name:"家电"},{id:6,name:"路由器"},{id:7,name:"智能硬件"}],
          navProduct:[{cid:1,name:"小米10 Pro",price:3999,src:"product1.webp"},{cid:1,name:"小米10",price:2999,src:"product2.webp"},{cid:1,name:"小米10 青春版",price:1999,src:"product3.webp"},{cid:1,name:"小米Mix alpha",price:4999,src:"product4.webp"},{cid:2,name:"Redmi K30 至尊纪念版",price:1999,src:"product5.webp"},{cid:2,name:"Redmi K30 Pro 系列",price:2699,src:"product6.webp"},{cid:2,name:"Redmi K30 系列",price:1399,src:"product7.webp"},{cid:2,name:"Redmi 10X 5G",price:1599,src:"product8.webp"},{cid:2,name:"Redmi Note 8",price:899,src:"product9.webp"},{cid:2,name:"Redmi 9",price:799,src:"product10.webp"},{cid:3,name:"小米电视 大师 65英寸OLED",price:12999,src:"product11.webp"},{cid:3,name:"Redmi 智能电视 MAX 98''",price:19999,src:"product12.webp"},{cid:3,name:"小米电视4A 60英寸",price:1899,src:"product13.webp"},{cid:3,name:"Redmi 智能电视 X55",price:2899,src:"product14.webp"},{cid:3,name:"Redmi 红米电视 70英寸 R70A",price:2888,src:"product15.webp"},{cid:3,name:"小米壁画电视 65英寸",price:6899,src:"product16.jpg"},{cid:4,name:"RedmiBook 16",price:4899,src:"product16.webp"},{cid:4,name:"RedmiBook 14 Ⅱ",price:4499,src:"product17.png"},{cid:5,name:"米家互联网空调C1（一级能效）",price:1899,src:"product18.png"},{cid:6,name:"Redmi路由器 AX6",price:399,src:"product19.webp"},{cid:7,name:"小米米家智能摄像机云台版",price:179,src:"product20.jpg"},{cid:7,name:"小米小爱老师",price:399,src:"product21.jpg"}],
          activeNav:[],
          keyRecommend:[{id:1,name:"Redmi 9"},{id:2,name:"小米手机"},{id:3,name:"小米10 Pro"},{id:4,name:"小米10"},{id:5,name:"全部商品"},{id:6,name:"小米电视"},{id:7,name:"智能"},],
          keyPlaceholder:{id:1,name:"Redmi 9"}
      }
  },
  inject: ['reload'],
  //navcategory控制是否给nav-category加hidden或者active属性，hidden属性会隐藏子组件category-list
  props: ["navcategory"],
  components: {CategoryList},
  mounted() {
        for(let i of this.navProduct){
            i.src=require("../assets/images/product/productNav/"+i.src)
        }
        for(let i of this.logoImg){
            i.src=require("../assets/images/"+i.src)
        }
            this.keyword=this.$route.query.keyword

        this.placeholderChange();
        
  },
  watch: {
      '$route'(to,from){
            this.keyword=this.$route.query.keyword

      }
  },
  computed: {
      content(){
          var newValue;
          if(this.keyword){
              newValue=this.keyword
          }else{
              newValue=this.keyPlaceholder.name
          }
          return newValue
      }
  },
  methods: {
      search(){
          var newValue;
          if(this.keyword){
              newValue=this.keyword
          }else{
              newValue=this.keyPlaceholder.name
          }
          this.$router.push({name:'Search',query:{keyword:newValue}});
          this.reload()
          
          
      },
      placeholderChange(){
          this.keyPlaceholder=this.keyRecommend[0]
          var i=0
          setInterval(()=>{
              i++
              if(i>6){i=0}
              this.keyPlaceholder=this.keyRecommend[i]
        },5000)
      },
      navswitch(cid){
          this.activeNav=[]
          for(let i of this.navProduct){
              if(i.cid==cid){
             this.activeNav.push(i);

              }
          }
      },
      dropDown(item){
          this.navswitch(item.id);
          this.navItemActive=true
          this.keylist=false
      },
      dropUp(){
          this.navItemActive=false

      },
      mouseoverChild(){
          this.navItemActive=true
          this.keylist=false
      },
      focus(){
          this.keylist=true

      },
      blur(){
          setTimeout(()=>{
          this.keylist=false

          },150)

      },
      
  },
}
</script>
<style>
/* 二级导航栏 */
.header{
    /* z-index 必须添加position才能生效    */
    position: relative;
    z-index: 100;
}
.site-header{
    /* background-color: #424242; */
    height: 100px;
    overflow: visible;
    z-index: 200;
    /* border-bottom: 1px solid #e0e0e0; */
}

.site-header .header-logo{
    float: left;
    width: 62px;
    margin-top: 22px;
}
.site-header .header-logo a{
    position: relative;
    display: block;
    width: 55px;height: 55px;
    overflow: hidden;
    background-color: #ff6700;
}
.header-logo a span{
    position: absolute;
    top: 2px;
    left: -45px;
    display: block;
    width: 200%;
    font-size: 0;
    transition: left .2s;
}
.header-logo a span img{
    display: inline-block;
}
.header-logo a:hover span{
    left: 3px;
}
.site-header .header-nav{
    float: left;
    width: 850px;
    height: 100px;
    /* border: 1px solid black; */
}
.site-header .header-nav .nav-list{
    position: relative;
    float: left;
    width: 1100px;
    height: 88px;
    margin: 0;
    padding: 12px 0 0 30px;
    font-size: 16px;
    z-index: 0;
    /* border: 1px solid red; */
}
.site-header .nav-category{
    display: block;
    position: relative;
    float: left;
    width: 127px;
    padding-right: 15px;
}


/* 
.site-header .nav-category.active .home-hero-list-category {
  display: block;
} */

/* category-list组件在product页面的样式微调 */
.site-header .nav-category.hidden .home-hero-list-category {
  display: none;
}
.site-header .nav-category:hover .home-hero-list-category {
  display: block;
}
.site-header .nav-category .home-hero-list-category:hover {
  display: block;
}
.site-header .nav-category{
    height: 88px;
}
.site-header .nav-category.hidden .list-category {
  background-color: #fff;
  border: 1px solid #ff6700;
  width: 232px;
}
.site-header .nav-category.hidden .list-category > li > a {
  color: #424242;
}
.site-header .nav-category.hidden .list-category > li > a:hover {
  color: #fff;
}
.site-header .nav-category.hidden .list-category > li > a > span {
  opacity: 0.3;
}
.site-header .nav-category.hidden .list-category .children-list {
  top: -1px;
  left: 233px;
  height: 457px;
}




.site-header .nav-item{
    position: relative;
    float: left;
    z-index: 1;
    /* position: relative; */
}
.site-header .nav-category>a{
    display: block;
    padding: 26px 0px 38px;
    text-align: right;
    color: #333;
    transition: color .2s;
}

.site-header .nav-item>a{
    display: block;
    padding: 26px 10px 38px;
    color: #333;
    transition: color .2s;
}
.site-header .nav-item>a:hover{
    color: #ff6700;
}
/* header-nav的下拉菜单 */

.site-header .header-nav .item-children{
    height: 0px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 140px;
    width: 100%;
    background-color: #fff;
    transition: height .3s ease-in;
    /* border: 1px solid red; */
}
.site-header .header-nav .item-children.active{
    height: 230px;
    box-shadow:0 1px 5px #aaa ;
}

.site-header .header-nav .item-children .container{
    height: 230px;
    /* overflow: hidden; */
    position: relative;
    /* border: 1px solid red; */
}


.site-header .header-nav .children{
    position: absolute;
    top: 0px;left: 0;
    background-color: #fff;
    z-index: 100;
    /* border: 1px solid red; */
    width: 100%;height: 200px;

}
.site-header .header-nav .item-children ul li{
    display: inline-block;
    padding: 35px 0 28px 0;
    text-align: center;
    cursor: auto;
}
.site-header .header-nav .item-children .figure{
    border-right:1px solid #e0e0e0 ;
    width: 200px;height: 100px;
    /* background-color: blue;
    border: 1px solid red; */
}
.site-header .header-nav .item-children li:last-child .figure{
    border-right: none;
}
.site-header .header-nav .item-children .title{
    color: #000;
    font-size: 12px;
    margin-top: 30px;
}
.site-header .header-nav .item-children .price{
    color: #ff6700;
    font-size: 12px;
    margin-top: 2px;
}

.header{
    /* z-index 必须添加position才能生效    */
    position: relative;
    z-index: 100;
}



/* 搜索框 */

.site-header .header-search{
    float: right;
    width: 296px;
    margin-top: 25px;
}
.site-header .header-search .search-form{
    position: relative;
    width: 296px;
    height: 50px;
}
.site-header .header-search .search-text,.site-header .header-search .search-btn{
    position: absolute;
    top: 0;
    border: 1px solid #e0e0e0;
    outline: 0;
    transition: all .2s;
}
.site-header .header-search input.search-text{
    
    right: 51px;
    width: 223px;
    height: 48px;
    padding: 0 10px;
    font-size: 14px;
    line-height: 48px;
    box-sizing: content-box;
}
.site-header .header-search .search-btn{
    display: inline-block;
    right: -2px;
    width: 52px;
    height: 48px;
    font-size: 18px;
    line-height: 48px;
    text-align: center;
    background-attachment: #fff;
    color: #616161;
    
}
.site-header .header-search .search-btn:hover{
    background-color: #ff6700;
    color:#fff;
    border-color: #ff6700;
}
.site-header .header-search div.keyword-list{
    display: none;
    position: absolute;
    left: 0;
    top: 50px;
    width: 243px;
    border: 1px solid #ff6700;
    border-top: 0;
    background-color: #fff;
}
.site-header .header-search div.keyword-list.active{
    display: block;
}
.site-header .header-search .keyword-list li:hover{
    cursor: pointer;
}
.site-header .header-search .keyword-list li span{
    position: relative;
    display: block;
    padding: 6px 15px;
    font-size: 12px;
    color: #424242;
}

    
</style>