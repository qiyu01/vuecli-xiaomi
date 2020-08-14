<template>
  <div class="home-brick-box">
    <div class="box-hd">
      <slot name="title">
        <h2 class="title">手机</h2>
      </slot>
      <div class="more">
        <!-- cid等于1的时候也就是手机brick，显示查看全部 -->
        <router-link to="search" v-if="cid==1">
          查看全部
          <i class="iconfont icon-jiantou1"></i>
        </router-link>
        <!-- cid不等于1的时候也就是除了手机birck，显示这个tab-list -->
        <ul class="tab-list" v-if="cid==1?0:1">
            <li v-for="(item, i) of gettabs(cid)" :key="i" :class="[item.isactive?'active':'']" @mouseenter="tabChange(item)">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="box-bd clearfix">
      <div class="span4">
        <ul class="brick-promo-list">
          <li :class="[cid==1?'':'brick-item-m','brick-item']">
                <router-link to="product">
                  <img :src="getpromoImg(cid,0)" alt="">
                </router-link>
          </li>
          <li class="brick-item brick-item-m" v-if="cid==1?0:1">
                <router-link to="product">
                  <img :src="getpromoImg(cid,1)" alt="">
                </router-link>
          </li>
        </ul>
      </div>
      <div class="span16">
          <ul v-for="(tab,t) of gettabs(cid)" :key="t" :class="[tab.isactive?'active':'','brick-list clearfix']">
            <Brick-item v-for="(item,i) of brickList(t)" :key="i" :product="item"></Brick-item>
            <Brick-item-s :img="itemS[t]" v-if="cid==1?0:1"></Brick-item-s>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BrickItem from "./Brick-item.vue";
import BrickItemS from "./Brick-item-s.vue";
export default {
  name: "Homebrick",
  data() {
    return {
      tabs:[{cid:1,name:null,isactive:true},{cid:3,name:"热门",isactive:true},{cid:3,name:"电视影音",isactive:false},{cid:11,name:"热门",isactive:true},{cid:11,name:"安防",isactive:false},{cid:11,name:"出行",isactive:false}],
      itemS:[{src:"itemS1.webp"},{src:"itemS2.webp"},{src:"itemS3.webp"}],
      promoImg:[{src:"promo1.webp"},{src:"promo2.webp"},{src:"promo3.webp"},{src:"promo4.webp"},{src:"promo5.webp"}]
    }
  },
  props:["products","cid"],
  components:{BrickItem,BrickItemS},
  methods: {
      tabChange(item){
        for(let i of this.tabs){
          if(i.cid==item.cid){
            i.isactive=false
          }
        }
        item.isactive=true
      }
  },
  computed:{
    //该属性负责返回每个birckList里显示的商品。
    brickList(){
      return  (t)=>{
              var newValue=[];
              var tabCount;
              if(this.cid==1){
                // 手机那个brick显示8个
                tabCount=8
              }else{
                // 其他的brick显示7个
                tabCount=7
              }
                for(let i=0;i<tabCount;i++){
                  var item=this.products[t*tabCount+i]
                  if(item!=null){
                    newValue.push(item)
                  }
                    
                }
            return newValue
             }
    },
    // 负责返回对应的分类brick前面的promo图
    getpromoImg(){
      return (cid,i)=>{
          if(cid==1){
            return this.promoImg[i].src
          }else if(cid==3){
            return this.promoImg[i+1].src
          }else{
            return this.promoImg[i+3].src
          }
      }
    },
    //负责返回对应tab的数量
    gettabs(){
      return (cid)=>{
        var temp=[];
          for (let i of this.tabs){
          if(i.cid==cid){
            temp.push(i)
          }
        }
        return temp
        
      }
    }
  },
  mounted() {
    for(let i of this.itemS){
                  i.src=require("../assets/images/product/product200/"+i.src)
              }
    for(let i of this.promoImg){
                  i.src=require("../assets/images/product/product200/"+i.src)
              }
  }
};
</script>


<style>
/* page-main下各个模块的标题统一样式 */
.home-brick-box .box-hd {
  position: relative;
  height: 58px;
  -webkit-font-smoothing: antialiased;
}
.home-brick-box .box-hd .title {
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}
.home-brick-box .box-hd .more {
  position: absolute;
  top: 0;
  right: 0;
}
.home-brick-box .box-hd .more a {
  font-size: 16px;
  line-height: 58px;
  color: #424242;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
.home-brick-box .box-hd .more a:hover {
  color: #ff6700;
}
.home-brick-box .box-hd .more a i {
  width: 12px;
  height: 12px;
  padding: 4px;
  margin-left: 8px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 12px;
  background: #b0b0b0;
  color: #fff;
  vertical-align: 1px;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  text-align: center;
}
.home-brick-box .box-hd .more a:hover i {
  background-color: #ff6700;
}

/* home-brick-box */
.home-brick-box {
  margin-bottom: 8px;
}
.home-brick-box .span4 {
  margin-left: 0;
}
.home-brick-box .span4 .brick-item {
  float: left;
  margin-bottom: 14px;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.home-brick-box .brick-item:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
.home-brick-box .span4 .brick-item img {
  width: 234px;
  height: 614px;
}
.home-brick-box .span4 .brick-item-m {
  height: 300px;
}
.home-brick-box .span4 .brick-item-m img {
  height: 300px;
}
.home-brick-box .span16 {
  /* margin-left: 14px; */
  float: left;
  width: 992px;
}
.home-brick-box .brick-list {
  height: 614px;
}
.home-brick-box .brick-list{
  display: none;
}
.home-brick-box .brick-list.active{
  display: block;
}


/* 家电 */
/* 家电模块大标题右侧tab，后面的模块的标题都是此样式 */

.home-brick-box .box-hd .more .tab-list {
  margin: 0;
  padding: 16px 0 0;
  list-style-type: none;
  font-size: 16px;
}
.home-brick-box .box-hd .more .tab-list li {
  display: inline-block;
  padding: 0;
  margin: 0 0 0 30px;
  color: #424242;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  -webkit-transition: border 0.3s;
  transition: border 0.3s;
  cursor: pointer;
}
.home-brick-box .box-hd .more .tab-list li.active,
.home-brick-box .box-hd .more .tab-list li:hover {
  color: #ff6700;
  border-bottom: 2px solid #ff6700;
}


</style>