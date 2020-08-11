<template>
    <div class="search">
        <Header :navcategory="false" @search="search"></Header>
        <div class="page-main">
                <div class="loading"></div>
                <div class="breadcrumbs">
                    <div class="container">
                        <router-link to="/">首页</router-link>
                        <span class="sep">></span>
                        <router-link to="/">全部结果</router-link>
                        <span class="sep">></span>
                        <span>手机</span>
                    </div>
                </div>
                <div class="no-result" v-if="!noresult">
                    <div class="container">
                        <img :src="noresultSrc" alt="">
                        <p class="empty">抱歉，没有找到商品“啊啊啊啊啊啊”，换个词搜搜吧</p>
                        <div class="btn">查看全部商品</div>
                    </div>
                </div>
                <div class="search-filter" v-if="noresult">
                    <div class="container">
                        <div class="filter-list">
                            <ul class="item">
                                <li><span>分类：</span></li>
                                <li><a href="javascript:void(0)">手机</a></li>
                                <li><a href="javascript:void(0)">电视</a></li>
                                <li><a href="javascript:void(0)">笔记本</a></li>
                            </ul>
                            <ul class="item">
                                <li><span>拍照像素：</span></li>
                                <li><a href="javascript:void(0)">四摄像头</a></li>
                                <li><a href="javascript:void(0)">三摄像头</a></li>
                                <li><a href="javascript:void(0)">双摄像头</a></li>
                                <li><a href="javascript:void(0)">高清拍摄</a></li>
                            </ul>
                            <ul class="item">
                                <li><span>屏幕大小：</span></li>
                                <li><a href="javascript:void(0)">超大屏</a></li>
                                <li><a href="javascript:void(0)">中小屏</a></li>
                            </ul>
                            <ul class="item">
                                <li><span>运行内存：</span></li>
                                <li><a href="javascript:void(0)">极速畅玩</a></li>
                                <li><a href="javascript:void(0)">高速</a></li>
                                <li><a href="javascript:void(0)">流畅</a></li>
                            </ul>
                            <ul class="item">
                                <li><span>电池续航：</span></li>
                                <li><a href="javascript:void(0)">超长待机</a></li>
                            </ul>
                            <ul class="item">
                                <li><span>高级选项：</span></li>
                                <li><a href="javascript:void(0)">CPU型号</a></li>
                                <li><a href="javascript:void(0)">CPU主频</a></li>
                                <li><a href="javascript:void(0)">前置摄像头</a></li>
                                <li><a href="javascript:void(0)">屏幕分辨率</a></li>
                                <li><a href="javascript:void(0)">储存容量</a></li>
                                <li><a href="javascript:void(0)">机身厚度</a></li>
                                <li><a href="javascript:void(0)">网络类型</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="search-result" v-if="noresult">
                    <div class="container">
                        <div class="order-list-box">
                            <div class="address-box"></div>
                            <ul class="order-list">
                                <li class="order-item"><a href="">综合</a></li>
                                <li class="order-item"><a href="">新品</a></li>
                                <li class="order-item"><a href="">销量</a></li>
                                <li class="order-item"><a href="">价格 <i class="iconfont	icon-xiangshangjiantoucuxiao"></i></a></li>
                            </ul>
                            <ul class="type-list">
                                <li>
                                    <div class="address-choose">
                                        <span class="label">收货地</span>
                                        <a href="" class="address-info">
                                            北京 北京市
                                        </a>
                                    </div>
                                </li>
                                <li class="active">
                                    <a href="">
                                        <Check-box></Check-box><span class="label">促销</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Check-box></Check-box><span class="label">分期</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Check-box></Check-box><span class="label">仅看有货</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="goods-list-box">
                            <div class="goods-list clearfix">
                                <Goods-item v-for="(item,i) of product" :key="i" :item="item" :goodsImg="goodsImgColor(item)"></Goods-item>
                            </div>
                            <Page-nav :total="total" @pagechange="pageChange" id="pagenav"></Page-nav>
                        </div>
                        <div class="related-category">
                            <p class="title">手机的相关商品分类</p>
                            <span class="keyword"><a href="javascript:void(0)">手机保护壳</a></span>
                            <span class="keyword"><a href="javascript:void(0)">手机配件</a></span>
                            <span class="keyword"><a href="javascript:void(0)">手表</a></span>
                            <span class="keyword"><a href="javascript:void(0)">服务</a></span>
                            <span class="keyword"><a href="javascript:void(0)">数据线</a></span>
                        </div>
                    </div>
                </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import RecBrick from '@/components/Recommend-brick.vue'
import CheckBox from '@/components/Checkbox.vue'
import GoodsItem from '@/components/Goods-item.vue'
import PageNav from '@/components/Pagenav.vue'
import {searchProduct,getImgBg} from '../util/api/getProduct'
import Scroll from '../util/scroll'

export default {
    data() {
        return {
            keyword:null,
            product:[],
            goodsImg:[],
            total:{},
            noresult:true,
            noresultSrc:require("../assets/images/icon-search-empty.png")
        }
    },
    components:{RecBrick,CheckBox,GoodsItem,PageNav},
    mounted() {
        this.getProduct("小米",null,1);
        
    },
    methods: {
        search(val){
            this.keyword=val;
        this.getProduct(val,null,1);

        },
        pageChange(val){
        this.getProduct(this.keyword,null,val);
        var scroll=new Scroll();
        var top=scroll.getElementToPageTop(document.getElementById("pagenav"));
        scroll.ScrollTop(0,300);
        },
        getProduct(keyword,cid,pageSize){
            searchProduct(keyword,cid,pageSize).then(res=>{
            
            if(res){
                var pid=[];
            // 先从返回数据中拿到最后一个数组元素（后端约定好把total相关的参数（当前页码currentPage和总商品数量num）push到数组最后跟商品数据一起返回）
            this.total=res[res.length-1];
            //拿完后记得删掉最后一个元素，
            res.splice(res.length-1,1)
            //再赋值给this.product.就是当前页的商品。
            this.product=res
                this.noresult=true
                for(let i of this.product){
                // 拿到当前页的商品的id
                pid.push(i.id)
                }
            // 把当前页商品的id数组变成字符串，传给后台查询回对应的图片和颜色
                var pidAll=pid.join();
            //记得再return一个promise以便then继续调用
                return getImgBg(pidAll)
            }else{
                this.total.num=0;
                this.total.currentPage=0
                this.noresult=false
            }
            
        }).then(res=>{
            if(res){
                for(let i=0;i<res.length;i++){
            res[i].src=require("../assets/images/product/product800/"+res[i].src)
            // 增加active属性以便后面确定每个商品的颜色选定(goodsImg参数将会传给子组件gooditem)，这个active属性的使用会在gooditem里
            res[i].active=false
            }
            this.goodsImg=res
            }
            
            
        })
        }
    },
    computed: {
        goodsImgColor(){
            return  (item)=>{
              var newValue=[];
                for(let i of this.goodsImg){
                    if(item.id==i.pid){
                    newValue.push(i)
                    }
                }
            return newValue
             }
        }
    },
}
</script>
<style scoped>
.page-main{
    background-color: #f5f5f5;
}
.breadcrumbs{
    height: 40px;
    font-size: 12px;
    line-height: 40px;
    background: #f5f5f5;
    color: #757575;
}
.breadcrumbs .sep{
    margin: 0 7px;
    color: #b0b0b0;
}

.search-filter{
    background-color: #fff;
}
.search-filter .container{
    padding: 18px 0;
}
.search-filter .item{
    position: relative;
    height: 48px;
    overflow: hidden;
    border-top: 1px solid #ededed;
    padding: 0 60px 0 0;
    margin: 0;
    font-size: 0;

}
.search-filter .item:first-child{
    border-top: none;
}
.search-filter .item li{
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #424242;
    font-size: 14px;
    width: 148px;
    padding: 14px 0;
    height: 20px;
    line-height: 20px;
}
.search-filter .item li a{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #424242;
}
.search-filter .item li a:hover{
    color: #ff6700;
}
.search-filter .item li:first-child{
    
    color: #b0b0b0;
    width: 124px;
}

.search-result{
    padding: 20px 0 100px;
}

.search-result .order-list-box{
        position: relative;
    height: 30px;
    margin: 20px 0;
}
.search-result .address-box{
    display: none;
    position: absolute;
    padding: 42px 20px 0 20px;
    top: 28px;
    right: 0;
    background: #fff;
    z-index: 99;
    width: 582px;
    border: 1px solid #e3e3e3;
    -webkit-box-shadow: 0 6px 12px 0 rgba(0,0,0,.15);
    box-shadow: 0 6px 12px 0 rgba(0,0,0,.15);
    margin: 0;
}
.search-result  .order-list{
        float: left;
    height: 30px;
    line-height: 30px;
}
.search-result  .type-list{
        float: right;
    height: 30px;
    line-height: 30px;
}
.search-result  .order-list .order-item{
    float: left;
    padding: 0 30px;
    border-left: 1px solid #e0e0e0;
    line-height: 20px;
}
.search-result  .order-list .order-item:first-child{
    border-left: none;
}
.search-result  .order-item a{
    color: #424242;
    transition: color .2s;
}
.search-result  .order-item a:hover{
    color: #ff6700;
    transition: color .2s;
}
.search-result .type-list li{
    float: left;
    margin-left: 30px;

}
.search-result .type-list .address-choose{
    color: #424242;
}
.search-result .address-choose .label{
    display: inline-block;
    margin-right: 8px;
    height: 30px;
}
.search-result .address-choose a{
    color: #424242;
    transition: color .2s;
}

.search-result .address-choose a{
    color: #424242;
    transition: color .2s;
    position: relative;
    display: inline-block;
    background: #fff;
    border: 1px solid #e3e3e3;
    height: 14px;
    line-height: 14px;
    padding: 7px 14px;
    cursor: pointer;
}
.search-result .address-choose a:hover{
    color: #ff6700;
}
.search-result .address-choose a::after{
    width: 0;
    height: 0;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    border-width: 6px;
    border-style: dashed dashed dashed solid;
    border-color: rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #a9a9a9;
    position: absolute;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    right: -4px;
    bottom: -4px;
    content: " ";
}
.search-result .type-list span.label:hover{
    color: #ff6700;
}
/* 重写checkbox组件的样式 */
.search-result .type-list li .my-checkbox{
    background-color: #fff;
    border-color:#e0e0e0 ;
    margin-right: 8px;
}

.search-result .type-list li.active .my-checkbox{
    border-color:#ff6700 ;
    background-color: #ff6700;
    color: #fff;
}
.search-result .type-list li.active .my-checkbox i{
    color: #fff;
}
.search-result .goods-list{
    width: 1240px;
    min-height: 200px;
}
.search-result .related-category{
        -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 1226px;
    margin: 20px auto 0;
    background: #fff;
    padding: 20px 42px;
}
.search-result .related-category .title{
    display: inline-block;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    color: #b0b0b0;
    width: 210px;
}
.search-result .related-category .keyword{
        display: inline-block;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    width: 108px;
}
.search-result .related-category .keyword a{
        color: #424242;
}

.no-result{
    padding: 60px 0 100px;
    text-align: center;
}
.no-result img{
    width: 200px;
}
.no-result p{
    margin: 14px 0;
}
</style>