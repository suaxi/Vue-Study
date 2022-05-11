<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: 'SchoolName',
  props: ['getSchoolName'],
  data() {
    return {
      name: '家里蹲',
      address: '北京',
      x: 200
    }
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
  .demo{
    background-color: lightskyblue;
  }
</style>