<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <input type="text" v-fbind:value="name">
    <br> <br>
    <button @click="test">点我测试方法</button>
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
  },
  methods: {
    test() {
      this.hello()
    }
  }
}
</script>