<template>
    <div class="search">
        <Header :navcategory="false"></Header>
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
                <div class="search-filter">
                    <div class="container">
                        <div class="filter-list">
                            <ul class="item">
                                <li><span>分类：</span></li>
                                <li v-for="i in 7" :key="i"><router-link to="/">手机</router-link></li>
                            </ul>
                            <ul class="item">
                                <li><span>拍照像素：</span></li>
                                <li v-for="i in 4" :key="i"><router-link to="/">四摄像头</router-link></li>
                            </ul>
                            <ul class="item">
                                <li><span>屏幕大小：</span></li>
                                <li v-for="i in 2" :key="i"><router-link to="/">超大屏</router-link></li>
                            </ul>
                            <ul class="item">
                                <li><span>运行内存：</span></li>
                                <li v-for="i in 3" :key="i"><router-link to="/">极速畅玩</router-link></li>
                            </ul>
                            <ul class="item">
                                <li><span>电池续航：</span></li>
                                <li v-for="i in 1" :key="i"><router-link to="/">超长待机</router-link></li>
                            </ul>
                            <ul class="item">
                                <li><span>高级选项：</span></li>
                                <li v-for="i in 8" :key="i"><router-link to="/"> CPU型号</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="search-result">
                    <div class="container">
                        <div class="order-list-box">
                            <div class="address-box"></div>
                            <ul class="order-list">
                                <li class="order-item"><a href="">综合</a></li>
                                <li class="order-item"><a href="">新品</a></li>
                                <li class="order-item"><a href="">销量</a></li>
                                <li class="order-item"><a href="">价格</a></li>
                            </ul>
                            <ul class="type-list">
                                <li>
                                    <dir class="address-chosse">
                                        <span>收货地</span>
                                        <a href="" class="address-info">
                                            北京 北京市
                                        </a>
                                    </dir>
                                </li>
                                <li>
                                    <a href="">
                                        <span>
                                            <i></i>
                                        </span>
                                        促销
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>
                                            <i></i>
                                        </span>
                                        分期
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>
                                            <i></i>
                                        </span>
                                        仅看有货
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="goods-list-box"></div>
                        <div class="related-category"></div>
                    </div>
                </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import RecBrick from '@/components/Recommend-brick.vue'

export default {
    data() {
        return {
            
        }
    },
    components:{RecBrick},
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
</style>