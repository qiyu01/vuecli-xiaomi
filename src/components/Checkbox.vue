<template>
    
    <span :class="[active?'active':'','my-checkbox']" @click="check">
            <i class="iconfont	icon-gou"></i>
    </span>                                          
    
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    mounted(){
        
    },
    props:["active"],
    methods: {
        check(){
            this.active=!this.active
        }
    },
}
</script>
<style>

.my-checkbox{
    display: inline-block;
    width: 18px;height: 18px;
    line-height: 18px;
    border: 1px solid #e0e0e0;
    cursor: pointer;
}
.my-checkbox i{
    line-height: 18px;
    margin-left: 3px;
    font-size: 13px;
    color: #fff;
    vertical-align: top;
}

/* 选中或者全选的时候checkbox的父元素会添加.active */
/* .active .my-checkbox{
    border-color:#ff6700 ;
    background-color: #ff6700;
    color: #fff;
}
.active .my-checkbox i{
    color: #fff;
} */
.my-checkbox.active{
    border-color:#ff6700!important;
    background-color: #ff6700!important;
    color: #fff!important;
}
.my-checkbox.active i{
    color: #fff!important;
}

    
</style>