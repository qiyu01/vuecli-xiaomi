import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'swiper/dist/css/swiper.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
// import 'swiper/css/swiper.css'

// import '../src/assets/iconfont/iconfont.css'
import '../public/css/base.css'


Vue.config.productionTip = false

Vue.use(ElementUI);
axios.defaults.baseURL="http://127.0.0.1"
Vue.prototype.axios=axios
Vue.prototype.$=$


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
