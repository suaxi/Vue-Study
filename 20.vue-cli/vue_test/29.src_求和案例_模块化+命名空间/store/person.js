import axios from "axios";
import {nanoid} from "nanoid";

export default {
    namespaced: true,
    actions: {
        addPersonFilter(context, value) {
            if (value.name.indexOf('刘') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('只能添加姓刘的人')
            }
        },
        backendInterface(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', {id:nanoid(),name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations中的ADD_PERSON被调用')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {id: '001', name: '孙笑川'}
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
}