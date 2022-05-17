export default {
    namespaced: true,
    actions: {
        incrementOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('INCREMENTODD', value)
            }
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit('INCREMENTWAIT', value)
            }, 500)
        }
    },
    mutations: {
        INCREMENT(state, value) {
            console.log('mutations中的INCREMENT被调用')
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        },
        INCREMENTODD(state, value) {
            state.sum += value
        },
        INCREMENTWAIT(state, value) {
            state.sum += value
        },
    },
    state: {
        sum: 0,
        school: '家里蹲',
        subject: '抽象'
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}