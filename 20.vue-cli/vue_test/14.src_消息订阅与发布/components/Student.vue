<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <button @click="sendStudentName">传递学生姓名</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'StudentName',
  data() {
    return {
      name: '孙笑川',
      sex: '男'
    }
  },
  methods: {
    sendStudentName() {
      // this.$bus.$emit('hello', this.name)
      pubsub.publish('hello', this.name)
    }
  }
}
</script>

<style>
  .demo{
    background-color: darksalmon;
  }
</style>