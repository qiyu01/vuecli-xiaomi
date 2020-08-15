import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import axios from 'axios'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import 'swiper/css/swiper.css'

// import '../src/assets/iconfont/iconfont.css'
import '../public/css/base.css'

import http from './util/myhttp.js'
//将方法挂载到Vue原型上
Vue.prototype.http = http;
// Vue.use(Message);
Vue.prototype.$message = Message;


Vue.config.productionTip = false

// Vue.use(ElementUI);
Vue.component("Header", Header);
Vue.component("Footer", Footer);
axios.defaults.baseURL = "http://127.0.0.1:8080"
Vue.prototype.axios = axios
Vue.prototype.$ = $


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
