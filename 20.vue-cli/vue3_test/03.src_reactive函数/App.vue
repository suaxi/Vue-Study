<template>
  <h1>个人信息：</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>姓名：{{ person.age }}</h2>
  <h2>工作：{{ person.job.name }}</h2>
  <h2>薪资：{{ person.job.salary }}</h2>
  <h2>爱好：{{ person.hobby }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import {reactive} from "vue";

export default {
  name: 'App',
  setup() {
    //数据
    let person = reactive({
      name: '孙笑川',
      age: 33,
      job: {
        name: '艺术家',
        salary: '100k'
      },
      hobby: ['抽象', '艺术']
    })

    //方法
    function changeInfo() {
      person.name = '刘波'
      person.age = 30
      person.job.name = '直播'
      person.hobby[1] = '打游戏'
    }

    return {
      person,
      changeInfo
    }
  }
}
</script>

<style>

</style>
