<template>
  <h1>个人信息：</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>姓名：{{ age }}</h2>
  <h2>工作：{{ job.name }}</h2>
  <h2>薪资：{{ job.salary }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'App',
  setup() {
    let name = ref('孙笑川')
    let age = ref(33)
    let job = ref({
      name: '艺术家',
      salary: '100k'
    })

    function changeInfo() {
      name.value = '刘波'
      age.value = 30
      job.value.name = '直播'
    }

    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

<style>

</style>
