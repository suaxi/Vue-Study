import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'

//关闭生产提示
Vue.config.productionTip =false
Vue.use(vueResource)

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        //安装全局事件总线
        Vue.prototype.$bus = this
    }
})