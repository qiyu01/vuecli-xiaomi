<template>
    <div class="pagenav">
    <el-pagination
    layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total.num">
  </el-pagination>
                            </div>
</template>
<script>
import {Pagination} from 'element-ui';

export default {
    data() {
        return {
            
        }
    },
    components:{ElPagination: Pagination},
    props:["total"],
    mounted() {
        // console.log(this.total)
    },
    methods: {
        handleCurrentChange(val){
            this.$emit('pagechange',val)
        }
    },
   
    
}
</script>
<style scoped>
.pagenav{
        height: 30px;
    padding: 15px 0;
    text-align: center;
}
.pagenav  /deep/ .el-pagination{
    padding: 0;
    background-color: transparent;
    text-align: center;
}
.pagenav /deep/ .el-pagination .btn-prev,
.pagenav /deep/ .el-pagination .btn-next{
    display: inline-block;
        box-sizing: content-box;

    width: 48px!important;
    height: 24px;
    padding: 0!important;
    margin: 0 5px;
    font-size: 18px;
    font-weight: 200;
    line-height: 24px;
    color: #b0b0b0;
    background-color: transparent;
}

.pagenav /deep/ .el-pagination .btn-prev .el-icon,
.pagenav /deep/ .el-pagination .btn-next .el-icon{
        display: inline-block;
        box-sizing: content-box;
    width: 48px;
    height: 24px;
    padding: 3px 0;
    margin: 0 5px;
    font-size: 24px;
    font-weight: 200;
    line-height: 24px;
    color: #b0b0b0;
    vertical-align:-6px;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}
.pagenav /deep/ .el-pagination .btn-prev .el-icon:hover,
.pagenav /deep/ .el-pagination .btn-next .el-icon:hover{
    color: #fff;
    background-color: #b0b0b0;
}

.pagenav /deep/ .el-pagination button:disabled {
    background-color: transparent;
    cursor: text;
}
.pagenav /deep/ .el-pagination button:disabled .el-icon:hover{
    background-color: transparent;
    color: #b0b0b0;

}


.pagenav /deep/ .el-pagination .el-pager li{
    display: inline-block;
    box-sizing: content-box;
    width: 48px;
    height: 24px;
    padding: 3px 0;
    margin: 0 5px;
    font-size: 18px;
    font-weight: 200;
    line-height: 24px;
    color: #b0b0b0;
    background-color: transparent;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}
.pagenav /deep/ .el-pagination .el-pager li.active{
    background-color: #757575;
    color: #fff;
}
.pagenav /deep/ .el-pagination .el-pager li:hover{
    background-color: #b0b0b0;
    color:#fff;
}
.pagenav /deep/ .el-pagination .el-pager li.active:hover{
    background-color: #757575;
    color: #fff;
}
.pagenav /deep/ .el-pagination .el-pager .more:before {
    line-height: 30px;
    font-size: 10px;
}
.pagenav /deep/ .el-pagination .el-pager .el-icon-d-arrow-left.el-icon-d-arrow-left:before,
.pagenav /deep/ .el-pagination .el-pager .el-icon-d-arrow-right:before {
    line-height: 18px;
    font-size: 18px;

}

    
</style>