import Vue from 'vue'
import App from './App.vue'
import store from './store'

//关闭生产提示
Vue.config.productionTip =false

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate() {
        //安装全局事件总线
        Vue.prototype.$bus = this
    }
})