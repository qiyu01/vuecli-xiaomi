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
                            <span>{{timebefore.hour}}</span>
                            <i>:</i>
                            <span>{{timebefore.minute}}</span>
                            <i>:</i>
                            <span>{{timebefore.seconds}}</span>
                        </div>
                    </div>
</template>
<script>
export default {
  name: 'Flash-counter',
  data(){
	    return {
            timeline:{
                hour:"13",
                minute:"51"
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
      var _this=this,
      hour=this.timebefore.hour,
      minute=this.timebefore.minute,
      seconds=this.timebefore.seconds,
      time=new Date();
      
    //   init time
    // console.log(this.timeline.hour-(new Date().getHours())-1);
      hour=this.timeline.hour-(new Date().getHours())-1;
      hour=this.timebefore.hour<0?0:this.timebefore.hour;
      hour=this.timebefore.hour<10?("0"+this.timebefore.hour):this.timebefore.hour;

      this.timebefore.minute=59-(new Date().getMinutes())+parseInt(this.timeline.minute);
      this.timebefore.seconds=60-(new Date().getSeconds());
      this.timer=setInterval(function(){

            _this.timebefore.hour=_this.timeline.hour-(new Date().getHours())-1;
            _this.timebefore.hour=_this.timebefore.hour<0?0:_this.timebefore.hour;
            _this.timebefore.hour=_this.timebefore.hour<10?("0"+_this.timebefore.hour):_this.timebefore.hour;

            if(_this.timebefore.hour==0){
                _this.timebefore.minute=_this.timeline.minute-1-(new Date().getMinutes());
               _this.timebefore.minute=_this.timebefore.minute<0?0:_this.timebefore.minute
            }
            // _this.timebefore.minute=59-(new Date().getMinutes())+parseInt(_this.timeline.minute);
            _this.timebefore.minute=_this.timebefore.minute<10?("0"+_this.timebefore.minute):_this.timebefore.minute;

            _this.timebefore.seconds=60-(new Date().getSeconds());
            _this.timebefore.seconds=_this.timebefore.seconds<10?("0"+_this.timebefore.seconds):_this.timebefore.seconds;

            if(parseInt(_this.timebefore.hour)==0 && parseInt(_this.timebefore.minute)==0 && parseInt(_this.timebefore.seconds)==0){
                clearInterval(_this.timer)
            }

      },1000)
      
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