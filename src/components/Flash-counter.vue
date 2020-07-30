<template>
    <div class="flashsale-counter">
                        <div class="round">{{timeline.hour}}:{{timeline.minute}}场</div>
                        <img src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
                        bWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
                        bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
                        eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1
                        MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
                        dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
                        dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv
                        IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS
                        ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD
                        cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j
                        ZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1
                        bWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N
                        OkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy
                        Qzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF
                        OEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht
                        cG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE
                        cHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf
                        S48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY
                        jRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN
                        JbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL
                        ijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7
                        KnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L
                        bN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc
                        xDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V
                        kBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU
                        Kc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E
                        cnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ
                        7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII=" alt="">
                        <div class="desc">{{over?"本场已结束":"距离结束还有"}}</div>
                        <div class="countdown clearfix">
                            <span>{{over?"00":timebefore.hour}}</span>
                            <i>:</i>
                            <span>{{over?"00":timebefore.minute}}</span>
                            <i>:</i>
                            <span>{{over?"00":timebefore.seconds}}</span>
                        </div>
                    </div>
</template>
<script>
export default {
  name: 'Flash-counter',
  data(){
	    return {
            //期限时间，以后可能服务器会返回多个时间戳，这里先用假的时间代替。
            timeline:{
                hour:"22",
                minute:"00"
            },
            timebefore:{
                hour:"00",
                minute:"00",
                seconds:"00"
            },
            over:false,
            timer:null
	        }
        },
  props: {
    msg: String
  },
  mounted() {
    //   先储存vue的this值，以便在后面的函数里面调用
      var _this=this;
    //   期限时间和期限分钟，太长了赋值给变量后面好做计算。
      var minuteL=_this.timeline.minute;
      var hourL=_this.timeline.hour;
    //   距离的时间，分钟，小时，最终结果赋值给_this.timebefore
      var hour,minute,seconds;   
    
    // 主函数
    function refresh(){
        var time=new Date();
        // 如果当前小时大于期限小时，或者（当前小时等于期限小时 而且 当前分钟大于或等于期限分钟）说明该当前时间已经超过期限时间，直接清除计算器。同时设置over属性为true(该活动过期),return返回函数，后面代码不再执行。
        if(time.getHours()>hourL || (time.getHours()==hourL && time.getMinutes()>=minuteL)){
            clearInterval(_this.timer);
            _this.over=true;
            return false;
        }
        
        //设置距离的小时和分钟
        if((time.getHours()==hourL) && (time.getMinutes()<minuteL)){
            //比如：当前时间12:20:00 ，期限时间12：30:00，直接赋值距离时间为“00”
            _this.timebefore.hour=hour="00";
            minute=minuteL-time.getMinutes();
            
            // 期限秒数一般固定是00，不会有公司设置12:30:11这种沙比秒数时间点吧,那样再需要增加一点点判断。           
            if(time.getSeconds()==0){
                // 当前秒数为00的时候，期限秒数也是00，这时候距离的秒数为0
                seconds=0;
            }else{
                // 当前秒数不为00的时候，比如12，距离秒数为60-12，前面这个60是向分钟借位的，所以分钟-1
                seconds=60-time.getSeconds();
                minute=minute-1
            }

            //所有距离的小时，分钟和秒数小于10的时候都要在前面加个“0”凑成两位数的格式
            _this.timebefore.minute=minute<10?("0"+minute):minute;
            _this.timebefore.seconds=seconds<10?("0"+seconds):seconds;

        }else if((time.getHours()<hourL) && time.getMinutes()<minuteL){
            //比如：当前时间11:20:00 ，期限时间12：30:00
            hour=hourL-(time.getHours());
            minute=minuteL-time.getMinutes();
                    
            if(time.getSeconds()==0){
                // 当前秒数为00的时候，期限秒数也是00，这时候距离的秒数为0
                seconds=0;
            }else{
                // 当前秒数不为00的时候，比如12，距离秒数为60-12，前面这个60是向分钟借位的，所以分钟-1
                seconds=60-time.getSeconds();
                minute=minute-1
            }

            //所有距离的小时，分钟和秒数小于10的时候都要在前面加个“0”凑成两位数的格式
            _this.timebefore.hour=hour<10?("0"+hour):hour;
            _this.timebefore.minute=minute<10?("0"+minute):minute;
            _this.timebefore.seconds=seconds<10?("0"+seconds):seconds;
            
        }else if((time.getHours()<hourL) && (time.getMinutes()==minuteL)){
            //比如：当前时间11:30:00 ，期限时间12：30:00
            //小时先不借位
            hour=hourL-(time.getHours());
            //分钟也不借位
            minute=0;
  
            if(time.getSeconds()==0){
                // 当前秒数为00的时候，期限秒数也是00，这时候距离的秒数为0,也就是当前时间11:30:00 ，期限时间12：30:00这类情况
                //分钟和秒数全部为0
                seconds=0;
            }else{
                // 当前秒数变成11:30:01后，秒数需要向分数借位，而分数没位借了，就去跟小时借位，所以小时-1，借给分钟60，然后分钟-1再借60给秒数
                hour=hour-1;
                //分钟为59   其实是minute=minuteL-time.getMinutes()+60-1（注意这里前面的条件前提是minuteL==time.getMinutes()所以分钟数结果一定是59），
                minute=59;
                // 秒数为60-time.getSeconds()
                seconds=60-time.getSeconds();
                
                
            }

            //所有距离的小时，分钟和秒数小于10的时候都要在前面加个“0”凑成两位数的格式
            _this.timebefore.hour=hour<10?("0"+hour):hour;
            _this.timebefore.minute=minute<10?("0"+minute):minute;
            _this.timebefore.seconds=seconds<10?("0"+seconds):seconds;
        }else{
            //剩下的(time.getHours()<hourL) && time.getMinutes()>minuteL)这种情况
            // 比如：当前时间11:31:00 ，期限时间12：30:00,距离小时-1给距离分钟借位结果为00:50:00
            //小时-1借位给分钟。
            hour=hourL-(time.getHours())-1;
            // 分钟得到小时的借位+60
            minute=minuteL-time.getMinutes()+60;
                       
            if(time.getSeconds()==0){
                // 当前秒数为00的时候，期限秒数也是00，这时候距离的秒数为0
                seconds=0;
            }else{
                // 当前秒数不为00的时候，比如12，距离秒数为60-12，前面这个60是向分钟借位的，所以分钟-1
                seconds=60-time.getSeconds();
                minute=minute-1
            }

            //所有距离的小时，分钟和秒数小于10的时候都要在前面加个“0”凑成两位数的格式
            _this.timebefore.hour=hour<10?("0"+hour):hour;
            _this.timebefore.minute=minute<10?("0"+minute):minute;
            _this.timebefore.seconds=seconds<10?("0"+seconds):seconds;
        }
        
    }
    // 先初始化一次
    refresh();
    // 1s后开始执行，后面每隔1s执行一次
     _this.timer=setInterval(refresh,1000)
      
  },
  components: {
    
  }
}
</script>

<style>
/* 小米闪购 */
.flashsale-counter{
    width: 234px;
    float: left;
    min-height: 1px;
    border-top-color: #e53935;
    height: 300px;
    padding-top: 39px;
    border-top-width: 1px;
    border-top-style: solid;
    background: #f1eded;
    text-align: center;
    margin-left: 0;
}
.flashsale-counter .round{
    font-size: 21px;
    color: #ef3a3b;
    padding-top: 15px;
}
.flashsale-counter img{
    margin: 25px auto;
}
.flashsale-counter .desc{
    color: rgba(0,0,0,.54);
    font-size: 15px;
}
.flashsale-counter .countdown{
    width: 168px;
    margin: 28px auto 0;
}
.flashsale-counter .countdown span{
    width: 46px;
    height: 46px;
    background: #605751;
    color: #fff;
    font-size: 24px;
    line-height: 46px;
    float: left;
}
.flashsale-counter .countdown i{
    width: 15px;
    float: left;
    height: 46px;
    line-height: 46px;
    color: #605751;
    font-size: 28px;
    font-style: normal;
}
    
</style>