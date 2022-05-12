<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: 'SchoolName',
  props: ['getSchoolName'],
  data() {
    return {
      name: '家里蹲',
      address: '北京'
    }
  },
  mounted() {
    this.$bus.$on('hello', data => {
      console.log('Schoole组件收到了数据', data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  }
}
</script>

<style scoped>
  .demo{
    background-color: lightskyblue;
  }
</style>