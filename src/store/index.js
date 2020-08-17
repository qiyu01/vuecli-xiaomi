import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid:localStorage.getItem('uid'),
    isLogin:localStorage.getItem('isLogin'),
    
  },
  mutations: {
    login(state,payload){
        state.uid=payload.uid
        state.isLogin=1
        localStorage.setItem('uid',payload.uid)
        localStorage.setItem('isLogin',1)
    },
    loginOut(state){
        state.uid="";
        state.isLogin=0;
        localStorage.setItem('uid',"")
        localStorage.setItem('isLogin',0)
       
    }
  },
  getters:{
    hasLogin:function(state){
      // 注意一定要用parseInt转换state.isLogin，因为localstorage里储存的值全部是字符串对象
        if(parseInt(state.isLogin)==1){
          return true
        }else{
          return false
        }
    }
  },
  actions: {
  },
  modules: {
  }
})
