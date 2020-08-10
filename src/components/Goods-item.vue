<template>
    <div class="goods-item">
        <div class="figure figure-img">
            <router-link to="product">
                <img :src="activeImg.src" alt="">
            </router-link>
        </div>
        <h2 class="title">
            <router-link to="product">{{item.name}} {{activeImg.colorname}}</router-link>
        </h2>
        <p class="price">
            <span>{{item.price}}元</span>
            <span> 起 </span>
        </p>
        <div class="thumbs">
            <ul class="thumbs-list">
                <li v-for="(color,i) of goodsImg" :key="i" :class="{ active: color.active}" @click="switchcolor(i)">
                    <a href="javascript:void(0)">
                    <img :src="color.src" alt="">
                    </a>
                    </li>
                
            </ul>
        </div>
        <div class="flags">
            <span class="sale-label">
                <img :src="img[1].src" alt="">
            </span>
        </div>
    </div>
</template>
<script>
import {searchProduct,getImgBg} from '../util/api/getProduct'

export default {
    data() {
        return {
            img:[{src:"producta1.jpg"},{src:"fenqi.png"}],
            product:[],
            activeImg:{},
        }
    },
    props:["item","goodsImg"],
    mounted() {
        // console.log(this.item)
        // console.log(this.goodsImg) 
             
        this.img[0].src=require("../assets/images/product/product800/"+this.img[0].src)
        this.img[1].src=require("../assets/images/product/product800/"+this.img[1].src)
        
    },
    methods: {
        switchcolor(i){
            for(let i of this.goodsImg){
                if(i.active==true){
                    i.active=false
                }
            }
            this.goodsImg[i].active=true
            this.activeImg=this.goodsImg[i];
        }
    },
    watch: {
        goodsImg:{
            handler(){
                if(this.goodsImg[0]){
                    if(this.goodsImg.length>1){
                        this.goodsImg[0].active=true
                    }
                    this.activeImg=this.goodsImg[0]
                }               
            },
            // deep: true,
            immediate: true,
        }
    },
    
}
</script>
<style>
    .goods-item{
        position: relative;
    float: left;
    width: 296px;
    height: 383px;
    padding-top: 47px;
    margin-right: 14px;
    margin-bottom: 14px;
    text-align: center;
    background: #fff;
    -webkit-transition: -webkit-box-shadow .5s linear;
    transition: -webkit-box-shadow .5s linear;
    transition: box-shadow .5s linear;
    transition: box-shadow .5s linear,-webkit-box-shadow .5s linear;
    }

    .goods-item:hover{
        -webkit-box-shadow: 0 5px 15px rgba(0,0,0,.2);
    box-shadow: 0 5px 15px rgba(0,0,0,.2);
    }
    .goods-item .figure{
        width: 200px;
    height: 200px;
    margin: 0 auto 16px;
    }
    .goods-item .figure img{
        width: 200px;height: 200px;
    }
    .goods-item .title{
        margin: 0 auto;
    width: 230px;
    font-size: 14px;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }
    .goods-item .title a{
        color: #424242;
    }
    .goods-item .price{
        margin: 0 0 15px;
    color: #ff6700;
    }

    .goods-item .thumbs{
        width: 100%;
    height: 37px;
    overflow: hidden;
    }
    .goods-item .thumbs-list li{
        display: inline-block;
    width: 34px;
    height: 34px;
    margin: 0 4px;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    -webkit-transition: border-color .2s linear;
    transition: border-color .2s linear;
    }
    .goods-item .thumbs-list li:hover,
    .goods-item .thumbs-list li.active{
        border-color:#ff6700 ;
    }
    .goods-item .thumbs-list li img{
        width: 34px;height: 34px;
    }
    .goods-item .flags{
        position: absolute;
    overflow: hidden;
    left: 0;
    bottom: 36px;
    z-index: 1;
    width: 100%;
    font-size: 0;
    max-height: 18px;
    text-align: center;
    }
    .goods-item .flags img{
        width: 42px;height: 18px;
    }
</style>