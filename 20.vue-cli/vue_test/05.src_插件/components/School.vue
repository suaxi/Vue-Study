<template>
  <div class="demo">
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: 'SchoolName',
  data() {
    return {
      name: '家里蹲jialidun',
      address: '北京',
      x: 200
    }
  }
}
</script>

<style scoped>
  .demo{
    background-color: beige;
  }
</style>