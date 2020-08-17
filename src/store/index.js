import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid:'1111111',
    isLogin:true,
    
  },
  mutations: {
    login(state,payload){
        state.uid=payload.uid
        state.isLogin=true
    }
  },
  actions: {
  },
  modules: {
  }
})
