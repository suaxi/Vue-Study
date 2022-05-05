<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: '孙笑川',
        age: 33
      }
    }
  }
</script>