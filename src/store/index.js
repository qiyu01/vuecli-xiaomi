import Vue from 'vue'
import Vuex from 'vuex'
import {localSetItem,localGetItem,removeItem,sessionSetItem,sessionGetItem,removeSession} from '../util/myStorage'

Vue.use(Vuex)

const LOGIN_IN="login_in"
const LOGIN_OUT="login_out"
export default new Vuex.Store({
  state: {
    user_id:sessionGetItem('user_id')?sessionGetItem('user_id'):localGetItem('user_id'),
    uid:sessionGetItem('uid')?sessionGetItem('uid'):localGetItem('uid'),
    isLogin:sessionGetItem('isLogin')?sessionGetItem('isLogin'):localGetItem('isLogin'),
    autoLogin:localGetItem('autoLogin'),
    saveHours:3600*24*1000,
    
  },
  mutations: {
    [LOGIN_IN](state,payload){
        state.user_id=payload.id;
        state.uid=payload.uid;
        state.isLogin=1;
        if(payload.autologin){
          state.autoLogin=1;
          localSetItem({name:'user_id',value:payload.id,expires:state.saveHours});
          localSetItem({name:'uid',value:payload.uid,expires:state.saveHours});
          localSetItem({name:'isLogin',value:1,expires:state.saveHours});
          localSetItem({name:'autoLogin',value:1,expires:state.saveHours})
        }else{
          state.autoLogin=0;
          removeItem('autoLogin')
          sessionSetItem('user_id',payload.id)
          sessionSetItem('uid',payload.uid)
          sessionSetItem('isLogin',1)
        }
    },
    [LOGIN_OUT](state){
        state.user_id=null;
        state.uid=null;
        state.isLogin=0;
        state.autoLogin=0;
        removeItem('user_id')
        removeItem('uid')
        removeItem('isLogin')
        removeItem('autoLogin')
        removeSession('user_id')
        removeSession('uid')
        removeSession('isLogin')
    }
  },
  getters:{
    hasLogin:function(state){
      // 因为isLogin可能是session里取出来的1是字符串，需要parseInt后再判断
        if(parseInt(state.isLogin)){
          return true
        }else{
          return false
        }
    },
    user_id:function(state){
      if(state.user_id===null){
        return null
      }else{
        return parseInt(state.user_id)
      }
        
    }
  },
  actions: {
  },
  modules: {
  }
})
