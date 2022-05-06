<template>
  <div>
    <h2 ref="title">你好，{{msg}}</h2>
    <button @click="showDOM" ref="btn">输出上方DOM元素</button>
    <School ref="school"/>
  </div>
</template>

<script>
import School from './components/School'

export default {
  name: "App",
  components: {School},
  data() {
    return {
      msg: '孙笑川'
    }
  },
  methods: {
    showDOM() {
      //真实DOM元素
      console.log(this.$refs.title)
      console.log(this.$refs.btn)
      //组件实例对象（vc）
      console.log(this.$refs.school)
    }
  }
}
</script>

<style scoped>

</style>