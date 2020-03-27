// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import axios from 'axios'
import {https} from './api/api'

//定义全局变量
Vue.prototype.$https=https;

//定义代理服务器的地址
// axios.defaults.baseURL = "/api"


//定义swipers
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
