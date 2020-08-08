import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:'Tom',
    age:23,
    sex:true,
    products:[
      {id:1,productName:'商品1',salePrice:2389.99},
      {id:2,productName:'商品2',salePrice:1389.99},
      {id:3,productName:'商品3',salePrice:389.99},
      {id:4,productName:'商品4',salePrice:3389.99}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
