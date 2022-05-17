import Vue from 'vue'
import Vuex from 'vuex'
//求和相关
import countOptions from './count'
//人员管理相关
import personOptions from './person'

Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
    modules: {
        countOptions, personOptions
    }
})