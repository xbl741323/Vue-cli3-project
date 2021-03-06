import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)
import store from './store/index.js'

Vue.config.productionTip = false
import MintUI from "mint-ui"
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import '@/assets/mui/css/mui.min.css'
import '@/assets/mui/css/icons-extra.css'
import router from '@/router/router.js'//导入自定义路由模块

Vue.prototype.$bus = new Vue() // 设置事件总线

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
