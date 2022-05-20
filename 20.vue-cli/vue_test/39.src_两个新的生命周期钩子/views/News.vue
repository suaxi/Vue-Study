<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "MyNews",
  data() {
    return {
      opacity: 1
    }
  },
  /* mounted() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      if (this.opacity <= 0) {
        this.opacity = 1
      }
    })
  }, */
  /* beforeDestroy() {
    console.log('News组件即将被销毁了')
    clearInterval(this.timer)
  } */

  //激活
  activated() {
    console.log('News组件激活')
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0) {
        this.opacity = 1
      }
    })
  },

  //失活
  deactivated() {
    console.log('News组件失活')
      clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>