<template>
    <div class="home-hero-list-category">
                <ul class="list-category" id="app">
                    <li v-for="(item,index) in result" :key="index">
                        <a href="#">{{item.cname}}
                            <span class="iconfont icon-xiaoyuhao2"></span>
                        </a>
                        <ul class="children-list" v-bind:style="{ width:listWidth(item.cid)}">
                            <li class="children-list-item" v-for="(r,i) in result2" :key="i" v-if="r.clid==item.cid">
                                <a href="#">
                                    <img v-bind:src="r.img_src" alt="">
                                    <span>{{r.lname}}</span>
                                </a>
                            </li>
                        </ul>                                             
                    </li>                                    
                </ul>

    </div>
</template>

<script>
export default {
  name: 'Category-list',
  data: function () {
    return { 
        a: 1,
        result:{},
        result2:{}
    }
  },
  props: {
    msg: String
  },
  methods: {
                listWidth(cid){
                    var n=0;
                    for(var i=0;i<this.result2.length;i++){
                        if(this.result2[i].clid==cid){
                            n++
                        }
                    }
                    
                    return Math.ceil(n/6)*248+"px";
                    
                }
            },
   mounted() {
              this.axios({
                 url: "http://127.0.0.1:8080/mi/v1/category_restful",
                 method: "get",
                 params: {}
                }).then(res => {
                    
                this.result=res.data;
                })

              this.axios({
                 url: "http://127.0.0.1:8080/mi/v1/category_list",
                 method: "get",
                 params: {}
                }).then(res => {
                this.result2=res.data;
                })
              

            }
  
}
</script>
<style>
 .home-hero-list-category{
    position: absolute;
    top: 88px;
    left: -92px;
    z-index: 999;
}
.home-hero-list-category ul.list-category{
    position: absolute;
    /* z-index: 0; */
    top: 0;
    left: 0;
    width: 234px; height: 420px;
    padding: 20px 0;
    background-color: rgba(105,101,101,.6);

}

.home-hero-list-category ul.list-category>li>a{
    display: block;
    width: 100%;
    color: #fff;
    height: 42px;
    line-height: 42px;
    padding: 0 18px 0 30px;
    box-sizing: border-box;
    text-align: left;
    font-size: 14px;

}
.home-hero-list-category ul.list-category>li>a:hover{
    background-color: #ff6700;
}
.home-hero-list-category ul.list-category>li>a>span{
    float: right;
    font-size: 20px;
    height: 42px;
    line-height: 42px;
    font-weight: bold;
    transform: rotate(180deg) scale(0.88);

}
.home-hero-list-category ul.children-list{
    position: absolute;
    width: 992px;
    /* max-width: 972px; */
    height: 456px;
    left: 234px;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    box-shadow: 0 1px 5px #e0e0e0;
    padding: 1px 0px 1px 0px;
    /* display: flex; */
    display: none;
    flex-direction: column;  
    /* flex-direction: row; */
    flex-wrap: wrap;
    justify-content: flex-start;
    /* align-items: flex-start; */
    align-content: flex-start;
    /* overflow: hidden; */
}
/* 鼠标移入ul.list-category>li时添加.active，然后有这个类名的li后面的ul.children-list的显示 */
.home-hero-list-category ul.list-category>li:hover ul.children-list{
    display: flex;
    /* z-index: 999; */
}
/* .home-hero ul.children-list li{
    /* width: 265px;height: 76px; */
    /* position: relative; */
/* } */ 
.home-hero-list-category ul.children-list li a img{
    width: 40px;height: 40px;
}
.home-hero-list-category ul.children-list li a{
    display: block;
    height: 40px;width: 208px;
    line-height: 40px;
    padding: 18px 20px;
    font-size: 14px;
    
}
.home-hero-list-category ul.children-list li a span{
    display: inline-block;
    width: 150px;
    vertical-align: top;
    color: #000;
    text-overflow: ellipsis;
    /* color: #b0b0b0; */
    overflow: hidden;
    white-space: nowrap;
    border: 1px solid transparent;
}
.home-hero-list-category ul.children-list li a span:hover{
    color: #ff6700;
}

</style>