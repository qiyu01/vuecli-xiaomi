<template>
  <div :class="[visiable ? 'active' : '', 'navbar_fix']">
    <div class="xm-product-box">
      <div class="nav-bar">
        <div class="container">
          <h2>小米10</h2>

          <div class="left">
            <span class="separator">|</span>
            <a href>小米10 Pro</a>
          </div>
          <div class="right">
            <a href>概述</a>
            <span class="separator">|</span>
            <a href>参数</a>
            <span class="separator">|</span>
            <a href>F码通道</a>
            <span class="separator">|</span>
            <a href>咨询客服</a>
            <span class="separator">|</span>
            <a href>用户评价</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visiable: false,
    };
  },
  mounted() {
    var _this = this;
    //防抖函数
    // function debounce(fn, delay) {
    //   let timer = null;
    //   return function () {
    //     if (timer) {
    //       clearTimeout(timer);
    //     }
    //     timer = setTimeout(fn, delay);
    //   };
    // }

    //节流函数
    function throttle(fn,delay){
        let valid=true;
        return function(){
            if(!valid){
                return false
            }
            valid=false
            setTimeout(()=>{
                fn();
                valid=true
            },delay)
        }
    }

    function change() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      // console.log(scrollTop);
      if (scrollTop > 260) {
        _this.visiable = true;
      } else {
        _this.visiable = false;
      }
    }
    window.onscroll = throttle(change, 100);
    
  },
};
</script>

<style>
.navbar_fix{
  position: fixed;
  /* display: none; */
  top: -63px;
  left: 0px;
  z-index: 999;
  width: 100%;
  /* margin-top: -60px; */
  transition: all .3s linear;
}
.navbar_fix.active{


top: 0px;
  /* margin-top: 0px; */
  /* display: block; */
  transition: all .3s linear;

}
</style>