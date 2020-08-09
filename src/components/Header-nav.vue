<template>
    <!-- 二级导航栏 -->
        <div class="site-header">
            <div class="container">
                <div class="header-logo">
                    <a href="#" class="logo">
                        <span>
                            <img src="images/mi-home.png" alt="">
                            <img src="images/mi-logo.png" alt="">
                        </span>
                    </a>
                </div>
                <div class="header-nav">
                    <ul class="nav-list clearfix">
                        
                        <li :class="[navcategory ? 'active' : 'hidden', 'nav-category']">
                            
                                <a href="" >
                                    <span v-if="!navcategory">全部商品分类</span>
                                </a>
                            
                                <Category-list></Category-list>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                            <span>小米手机</span>
                            </a>
                            
                        </li>
                        <li class="nav-item">
                            <a href="#">
                            <span>Redmi 红米</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                            <span>电视</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                            <span>笔记本</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                            <span>家电</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                            <span>路由器</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                            <span>智能硬件</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                            <span>服务</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                            <span>社区</span>
                            </a>
                        </li>
                        
                    </ul>
                    
                    <div class="item-children">
                        <div class="container">
                            <!-- <div class="test">
                                <a href="#">
                                    <div class="figure">
                                        <img src="images/mi10-qingchun.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1899元起</p>
                                </a>
                            </div>
                            <ol class="test2">我你们啊</ol> -->
                            <ul class="children">
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/mi10-qingchun.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1899元起</p>
                                </a></li>
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/mi10-qingchun.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1899元起</p>
                                </a></li>
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/mi10-qingchun.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1899元起</p>
                                </a></li>
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/mi10-qingchun.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1899元起</p>
                                </a></li>
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/mi10-qingchun.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1899元起</p>
                                </a></li>
                            </ul>
                            <ul class="children">
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="../../public/images/children-list1.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1899元起</p>
                                </a></li>
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="/images/children-list1.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1899元起</p>
                                </a></li>
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/children-list1.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1899元起</p>
                                </a></li>
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/children-list1.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1899元起</p>
                                </a></li>
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/children-list1.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1899元起</p>
                                </a></li>
                            </ul>
                            <ul class="children">
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/children-list3.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1299元起</p>
                                </a></li>
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/children-list3.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1299元起</p>
                                </a></li>
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/children-list3.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1299元起</p>
                                </a></li>
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/children-list3.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1299元起</p>
                                </a></li>
                                <li><a href="#">
                                    <div class="figure">
                                        <img src="images/children-list3.webp" alt="" width="160" height="110">
                                    </div>
                                    <div class="title">小米10 青春版 5G</div>
                                    <p class="price">1299元起</p>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <form action="#" class="search-form clearfix">
                        <label for="search" class="hide">站内搜索</label>
                        <a href="#">
                            <input type="search" class="search-text" id="search" name="keyword" autocomplete="off" placeholder="穿戴">
                        </a>
                        <a href="#" class="search-btn iconfont icon-sousuo1">
                            
                        </a>
                        <div class="keyword-list">
                            <ul class="result-list">
                                <li><a href="#">Redmi 9 五星高品质</a></li>
                                <li><a href="#">小米手机</a></li>
                                <li><a href="#">手环</a></li>
                                <li><a href="#">小米10</a></li>
                                <li><a href="#">全部商品</a></li>
                                <li><a href="#">米家插线板 快充版 27W</a></li>
                                <li><a href="#">Redmi 手环</a></li>
                            </ul>
                        </div>


                    </form>
                </div>
            </div>
        </div>
</template>
<script>
import CategoryList from './Category-list.vue'
export default {
  name: 'Headernav',
  //navcategory控制是否给nav-category加hidden或者active属性，hidden属性会隐藏子组件category-list
  props: ["navcategory"],
  components: {CategoryList},
  mounted() {
      var that=this;
       that.$(".header-nav .nav-item").hover(
        function(){
            
            that.$(this).addClass("active").siblings().removeClass("active");
            that.$(".header-nav .item-children").addClass("active");
            // console.log($(this).index());
            var index=that.$(this).index();
            // $(".header-nav .children-list").eq()
            // console.log($(".header-nav .children-list").eq(index));
            that.$(".header-nav .children").eq(index-1).css({"z-index":1});
            that.$(".header-nav .children").eq(index-1).siblings().css({"z-index":0});
            that.$(".search-text").trigger("blur");

        },
        function(e){
            // $(this).removeClass("active");
            var index=that.$(this).index();
            that.$(".header-nav .item-children").removeClass("active");
            // $(".header-nav .children-list").index($(this).index()).css({"z-index":"1"});
            // $(".header-nav .children-list").eq(index-1).css({"z-index":0});
            }
            )
        that.$(".header-nav .item-children").hover(
        function(){
            var index=that.$(".header-nav .nav-item.active").index();
            // console.log(eq)
            that.$(".header-nav .item-children").addClass("active");
            that.$(".header-nav .children").eq(index-1).css({"z-index":1});
            that.$(".header-nav .children").eq(index-1).siblings().css({"z-index":0});

        },
        function(){
            var index=that.$(".header-nav .nav-item.active").index();
            that.$(".header-nav .item-children").removeClass("active");
            // $(".header-nav .children-list").eq(index-1).css({"z-index":0});
            
        }
        )
        that.$(".search-text").focus(
        function(){
            that.$(this).addClass("border-info");
            that.$(".search-btn").addClass("border-info");
            that.$(".keyword-list").addClass("active");
        }
        )
         that.$(".search-text").blur(
        function(){
            that.$(this).removeClass("border-info");
            that.$(".search-btn").removeClass("border-info");
            that.$(".keyword-list").removeClass("active");
        }
    )
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

/* .test{
    display: block;
    position: absolute;
    top: 0;left: 0;
    background-color: #fff;
    z-index: 100;
    border: 1px solid red;
    width: 0;height: 200px;
}
.test a{
    display: inline-block;
    padding: 35px 0 28px 0;
    text-align: center;
    cursor: auto;
}
.test a .figure{
    border-right:1px solid #e0e0e0 ;
    width: 200px;height: 100px;
}
.test3{
    width: 50px;height: 50px;
    background-color: brown;
} */
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
.site-header .header-search form{
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
.site-header .header-search .keyword-list li a{
    position: relative;
    display: block;
    padding: 6px 15px;
    font-size: 12px;
    color: #424242;
}

    
</style>