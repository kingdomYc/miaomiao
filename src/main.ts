import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.axios = axios;

Vue.filter('setWH',(url: string , arg: string)=>{
  return url.replace(/w\.h/,arg);
});

import Scroller from "@/components/scroller/index.vue"
Vue.component("Scroller",Scroller);

import Loading from '@/components/Loading/index.vue'
Vue.component('Loading',Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
