<template>
    <div class="cart-wraper">
                <div class="container">
                    <div class="header-logo">
                        <router-link to="/" class="logo">
                        <span>
                            <img src="images/mi-home.png" alt="">
                            <img src="images/mi-logo.png" alt="">
                        </span>
                        </router-link>
                    </div> 
                    <div class="header-title">
                        <h2>我的购物车</h2>
                        <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
                    </div> 
                    <div class="site-topbar">
                        <div class="topbar-info">
                            <span class="user">
                                <router-link to="/" class="user-name">
                                    <span class="name">2438958951</span>
                                    <i class="iconfont"></i>
                                </router-link>
                                <div class="user-menu-wrapper">
                                    <ul class="user-menu">
                                        <li>
                                            <router-link to="/">个人中心</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/">评价晒单</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/">我的喜欢</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/">小米账户</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/">退出登录</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </span>
                            <span class="sep">|</span>
                            <router-link to="/" class="link link-order">
                            我的订单
                            </router-link>
                        </div>
                    </div> 
                </div>



        <Footer></Footer>
    </div>
</template>
<script>

export default {
    data(){
        return{
 
        }
    },
    components:[],
    mounted() {
        console.log(true)
    },

}
</script>
<style scoped>
.cart-wraper{
    font-size: 12px;
    border-bottom: 2px solid #ff6700;
    background: #fff;
    color: #b0b0b0;
    position: relative;
    z-index: 20;
    height: 100px;
}
.cart-wraper  .header-logo{
    float: left;
    width: 93px;
    margin-top: 26px;
}
 .cart-wraper .header-logo a{
    position: relative;
    display: block;
    width: 48px;height: 48px;
    overflow: hidden;
    background-color: #ff6700;
}
 .cart-wraper .header-logo a span{
    position: absolute;
    top: -1px;
    left: -49px;
    display: block;
    width: 250%;
    font-size: 0;
    transition: left .2s;
}
 .cart-wraper .header-logo a span img{
    display: inline-block;
}
 .cart-wraper .header-logo a:hover span{
    left: -1px;
}
</style>