import Vue from 'vue'
import App from './App.vue'
//引入全局混合
import {mixin,mixin2} from "@/mixin";
//关闭生产提示
Vue.config.productionTip =false
Vue.mixin(mixin)
Vue.mixin(mixin2)

new Vue({
    el: '#app',
    render: h => h(App)
})