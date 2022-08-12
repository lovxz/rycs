import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './assets/js/router.js'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false
Vue.use(VueRouter)
import { TreeSelect } from 'vant';
Vue.use(TreeSelect);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
