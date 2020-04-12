import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/fonts/fontawesome-free-5.13.0-web/css/all.min.css';
import 'typeface-roboto/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app') 
