<template>
  <div>
    <button @click="getStudentsInfo">获取学生信息</button>
    <button @click="getCarsInfo">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods: {
    getStudentsInfo() {
      axios.get('/api/students').then(
          response => {
            console.log('请求成功', response.data)
          },
          error => {
            console.log('请求失败', error.message)
          }
      )
    },
    getCarsInfo() {
      axios.get('/demo/cars').then(
          response => {
            console.log('请求成功', response.data)
          },
          error => {
            console.log('请求失败', error.message)
          }
      )
    }
  }
}
</script>

<style>

</style>