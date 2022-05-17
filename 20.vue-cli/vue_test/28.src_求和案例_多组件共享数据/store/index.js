import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//用于响应组件中的动作
const actions = {
    increment(context,value) {
        console.log('actions中的increment被调用')
        context.commit('INCREMENT', value)
    },
    decrement(context,value) {
        context.commit('DECREMENT', value)
    },
    incrementOdd(context,value) {
        if (context.state.sum % 2) {
            context.commit('INCREMENTODD', value)
        }
    },
    incrementWait(context,value) {
       setTimeout(() => {
           context.commit('INCREMENTWAIT', value)
       }, 500)
    }
}

//用于操作数据
const mutations = {
    INCREMENT(state,value) {
        console.log('mutations中的INCREMENT被调用')
        state.sum += value
    },
    DECREMENT(state,value) {
        state.sum -= value
    },
    INCREMENTODD(state,value) {
        state.sum += value
    },
    INCREMENTWAIT(state,value) {
        state.sum += value
    },
    ADD_PERSON(state,value) {
        console.log('mutations中的ADD_PERSON被调用')
        state.personList.unshift(value)
    }

}

//用于存储数据
const state = {
    //当前的和
    sum: 0,
    school: '家里蹲',
    subject: '抽象',
    personList: [
        {id:'001',name:'孙笑川'}
    ]
}

//用于加工state中的数据
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,mutations,state,getters
})