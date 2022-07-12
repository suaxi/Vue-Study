<template>
  <h1>个人信息：</h1>
  姓：<input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName">
  <br>
  <span>全名：{{ person.fullName }}</span>
  <br>
  全名：<input type="text" v-model="person.fullName">
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: 'MyDemo',
  setup() {
    //数据
    let person = reactive({
      firstName: '孙',
      lastName: '笑川'
    })

    //计算属性（简写）
    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName
    // })

    //计算属性（完整写法）
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })

    return {
      person
    }
  }
}
</script>

<style scoped>

</style>