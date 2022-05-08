<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
  name: 'StudentName',
  data() {
    return {
      name: '孙笑川',
      sex: '男'
    }
  }
}
</script>

<style>
  .demo{
    background-color: darksalmon;
  }
</style>