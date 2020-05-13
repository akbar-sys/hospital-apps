import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from "buefy";
import 'buefy/dist/buefy.css'
Vue.use(Buefy)


import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
