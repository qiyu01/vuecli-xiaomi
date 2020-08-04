class Public {
    isDesktop(){ //判断是否为pc端
        return (window.screen.width > 1023) ? true : false;
    }
 
    /*
      * formatMoney(s,type)
      * 功能：金额按千位逗号分隔
      * 参数：s，需要格式化的金额数值.
      * 参数：type,判断格式化后的金额是否需要小数位.
      * 返回：返回格式化后的数值字符串.
    */
    formatMoney(s, type) {
        if (/[^0-9\.]/.test(s))
            return "0.00";
        if (s == null || s == "null" || s == "")
          return "0.00";
        s = s.toString().replace(/^(\d*)$/, "$1.");
        s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
        s = s.replace(".", ",");
        var re = /(\d)(\d{3},)/;
        while (re.test(s))
            s = s.replace(re, "$1,$2");
        s = s.replace(/,(\d\d)$/, ".$1");
        if (type == 0) {
          var a = s.split(".");
            if (a[1] == "00") {
                s = a[0];
            }
        }
        return s;
    }
     
    isWeiXin(){ //判断是否是微信浏览器
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }else{
            return false;
        }
    }
    //number :距离   time：时间
    ScrollTop(number,time){
        let _this = this;
        if (!time) {
            document.body.scrollTop = document.documentElement.scrollTop = number;
            return number;
        }
        const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
        let spacingInex = time / spacingTime; // 计算循环的次数
        let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
        let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
        let scrollTimer = setInterval(() => {
            if (spacingInex > 0) {
                spacingInex--;
                _this.ScrollTop(nowTop += everTop);
            } else {
                clearInterval(scrollTimer); // 清除计时器
            }
        }, spacingTime);
    }
     
    getElementToPageTop(el) {//获取元素距离顶部距离
        if(el == null){
            return
        }
        let _this = this;
        if(el.parentElement) {
          return _this.getElementToPageTop(el.parentElement) + el.offsetTop
        }
        return el.offsetTop
    }
     
}
 
export default Public