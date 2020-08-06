import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import axios from 'axios'
import ElementUI from 'element-ui';
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import 'element-ui/lib/theme-chalk/index.css';
// import 'swiper/dist/css/swiper.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
// import 'swiper/css/swiper.css'

// import '../src/assets/iconfont/iconfont.css'
import '../public/css/base.css'

import http from './util/request.js'
//将方法挂载到Vue原型上
Vue.prototype.http = http;

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.component("Header",Header);
Vue.component("Footer",Footer);
axios.defaults.baseURL="http://127.0.0.1:8080"
Vue.prototype.axios=axios
Vue.prototype.$=$


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
