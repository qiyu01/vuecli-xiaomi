<template>
    <div class="wraper">
            <Check-box></Check-box>
            <el-backtop target=".wraper">
                <div
                    style="{
                        height: 100%;
                        width: 100%;
                        background-color: #f2f5f6;
                        box-shadow: 0 0 6px rgba(0,0,0, .12);
                        text-align: center;
                        line-height: 40px;
                        color: #1989fa;
                    }"
                    >
                    UP
                </div>
            </el-backtop>
          
         
    </div>
</template>
<script>
import CheckBox from "@/components/Checkbox.vue"
export default {
    data(){
        return{
 
        }
    },
    components:{CheckBox},
    mounted(){
        console.log(this.$store.state.products)
    }
}
</script>
<style scoped>
    .wraper {
        height: 100vh;
        overflow-x: hidden;
    }
</style>