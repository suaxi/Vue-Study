import Vue from 'vue'
import App from './App.vue'
//引入vue-router
import VueRouter from 'vue-router'
//引入路由器
import router from './router'


//关闭生产提示
Vue.config.productionTip =false
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    router
})