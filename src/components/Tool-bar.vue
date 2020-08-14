<template>
    <div class="home-tool-bar">
        <a href="" class="item">
            <div class="icon">
                <img src="images/tool-bar1.png" alt="">
                <img src="images/tool-bar1y.png" alt="">
            </div>
            <span class="text">手机APP</span>
            <div class="popcontent">
                <img src="images/tool-bar-erweima.png" alt="">
                <span class="desc">
                    
                    扫码领取新人百元礼包
                
                </span>
            </div>
        </a>
        <a href="" class="item">
            <div class="icon">
                <img src="images/tool-bar2.png" alt="">
                <img src="images/tool-bar2y.png" alt="">
            </div>
            <span class="text">个人中心</span>
            
        </a>
        <a href="" class="item">
            <div class="icon">
                <img src="images/tool-bar3.png" alt="">
                <img src="images/tool-bar3y.png" alt="">
            </div>
            <span class="text">售后服务</span>
            
        </a>
        <a href="" class="item">
            <div class="icon">
                <img src="images/tool-bar4.png" alt="">
                <img src="images/tool-bar4y.png" alt="">
            </div>
            <span class="text">人工客服</span>
            
        </a>
        <a href="" class="item">
            <div class="icon">
                <img src="images/tool-bar5.png" alt="">
                <img src="images/tool-bar5y.png" alt="">
            </div>
            <span class="text">购物车</span>
            
        </a>
        <el-backtop target="body" class="el-backtop">
        <a href="javascript:void(0);" class="item backtop">

        
            <div class="icon">
                <img src="images/tool-bar6.png" alt="">
                <img src="images/tool-bar6y.png" alt="">
            </div>
            <span class="text">回顶部</span>
            
        </a>

    </el-backtop>
        
    </div>
</template>

<style>
/* 右侧导航条 */

.el-backtop{
    position: fixed;
    width: 82px!important;
    height: 90px!important;
    bottom: 78px!important;
    right: 18px!important;
    z-index: 99!important;
}
.el-backtop .item{
    position: relative;
    display: block;
    width: 82px;
    height: 90px;
    margin-top: -1px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
    cursor: default;
    font-size: 14px;
}
.el-backtop .backtop{
    margin-top: 14px;
    border-top: 1px solid #f5f5f5;
    visibility: visible;
}
.el-backtop .item .icon{
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0 auto 8px;
    padding-top: 18px;
}
.el-backtop .item .icon img{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 30px;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
}
.el-backtop .item .icon img:last-child{
    display: none;
}
.el-backtop .item:hover .icon img:last-child{
    display: inline-block;
}
.el-backtop .item .icon img:last-child
.el-backtop .item .text{
    color: #757575;
    -webkit-transition: color .3s;
    transition: color .3s;
}
.el-backtop .item:hover .text{
    color: #ff6700;
}

/* .el-backtop {
    position: relative;
    display: block;
    width: 82px;
    height: 90px;
    margin-top: -1px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
    cursor: default;
}

.el-backtop:hover {
    background-color: blue
} */

.home-tool-bar{
    position: fixed;
    bottom: 176px;
    right: 17px;
    z-index: 999;
    
}
.home-tool-bar .item{
    position: relative;
    display: block;
    width: 82px;
    height: 90px;
    margin-top: -1px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
    cursor: default;
    font-size: 14px;
    
}
.home-tool-bar .backtop{
    margin-top: 14px;
    border-top: 1px solid #f5f5f5;
    visibility: visible;
}
.home-tool-bar .item .icon{
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0 auto 8px;
    padding-top: 18px;
}
.home-tool-bar .item .icon img{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 30px;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
}
.home-tool-bar .item .icon img:last-child{
    display: none;
}
.home-tool-bar .item:hover .icon img:last-child{
    display: inline-block;
}
.home-tool-bar .item .icon img:last-child
.home-tool-bar .item .text{
    color: #757575;
    -webkit-transition: color .3s;
    transition: color .3s;
    
}
.home-tool-bar .item:hover .text{
    color: #ff6700;
}
.home-tool-bar .item .popcontent{
    position: absolute;
    right:95px;
    top: 0;
    padding: 14px;
    background: #fff;
    border: 1px solid #f5f5f5;
    transition: display .3s;
    display: none;
    /* opacity: 1; */
    /* visibility: hidden; */
}
.home-tool-bar .item:hover .popcontent{
    display: block;
}
.home-tool-bar .item .popcontent img{
    display: block;
    width: 100px;
    height: 100px;
    margin: 6px auto;
}
.home-tool-bar .item .popcontent .desc{
    display: block;
    width: 82px;
    margin: 14px auto 0;
    color: #757575;
    text-align: center;
}
    
</style>