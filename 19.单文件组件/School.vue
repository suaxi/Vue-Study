<template>
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        schoolName: '家里蹲',
        address: '北京'
      }
    }
  }
</script>

<style>
  .demo{
    background-color: azure;
  }
</style>