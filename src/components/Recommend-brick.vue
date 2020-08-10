<template>
  <li class="recommend-brick">
    <router-link to="/">
      <img :src="brick.img" alt />
      <div class="recommend-name">{{brick.name}}</div>
      <div class="recommend-price">{{brick.price}}元</div>
      <div class="recommend-tips">{{brick.good}}人好评</div>
    </router-link>
    <div class="recommend-action">
      <a href="javascript:void(0)" @click="addCart">加入购物车</a>
    </div>
    <div :class="[addSuccess ? 'active' : '', 'recommend-notice']">
      <a href="javascript:void(0)" class="btn">成功加入购物车</a>
    </div>
  </li>
</template>
<script>
export default {
    data(){
        return{
            img:[{id:1,src:"product2.jpg"},{id:2,src:"product1.jpg"},{id:3,src:"product1.jpg"},{id:4,src:"recommend-ad1.jpg"}],
            addSuccess:false
        }
    },
    props:["brick"],
    mounted() {
        this.img[0].src=require("../assets/images/product/product80/"+this.img[0].src)
        this.img[1].src=require("../assets/images/product/product80/"+this.img[1].src)
        this.img[2].src=require("../assets/images/product/product180/"+this.img[2].src)
        this.img[3].src=require("../assets/images/product/product180/"+this.img[3].src)       
    },
    methods: {
        addCart(){
            this.http.get("/mi/v1/addcart",{pid:this.brick.pid,uid:1}).then((data)=>{
               
                if(data==1){
                    this.addSuccess=true
                    setTimeout(()=>{
                        this.addSuccess=false
                        location.reload();
                        
                    },300)
                }
        })
        }
    },
}
</script>

<style scoped>
.recommend-brick{
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
.recommend-brick  a img{
    display: block;
    margin: 40px auto 20px;
    width: 140px;
    height: 140px;
}
.recommend-brick .recommend-ad img{
    width: 100%;
    height: 100%;
    margin: 0;
}
.recommend-brick .recommend-name{
    margin: 0 10px 10px;
    height: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #333;
}
.recommend-brick .recommend-price{
    margin-bottom: 10px;
    color: #ff6700;
}

.recommend-brick .recommend-action{
        position: absolute;
    left: 0;
    bottom: 16px;
    width: 100%;
    opacity: 0;
    transform: translate3d(0,200%,0);
    -webkit-transition: all .4s;
    transition: all .4s;
}
.recommend-brick:hover .recommend-action{
    opacity: 1;
    transform: translateZ(0);
}
.recommend-brick .recommend-action a{
    display: inline-block;
    width: 120px;height: 28px;
    line-height: 28px;
    font-size: 12px;
    border: 1px solid #ff6700;
    background: #fff;
    color: #ff6700;
    transition: all .4s;
}
.recommend-brick .recommend-action a:hover{
    background-color: #ff6700;
    color: #fff;
}
.recommend-brick .recommend-notice{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    opacity: 0;
    transform: translate3d(0,-10px,0);
    transition: all .2s linear;
}
.recommend-brick .recommend-notice.active{
    opacity: 1;
    transform: translateZ(0);
}
.recommend-brick .recommend-notice .btn{
    border-width:0 ;
    display: block;
    width: 100%;
    background: #83c44e;
    border-color: #83c44e;
    color: #fff;
}
    
</style>