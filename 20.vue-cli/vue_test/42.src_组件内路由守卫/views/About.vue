<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "MyAbout",
  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log('About组件beforeRouteEnter', to, from)
    //鉴权
    if (to.meta.isAuth) {
      if (localStorage.getItem('token') === '1') {
        next()
      } else {
        alert('暂无查看权限！')
      }
    } else {
      next()
    }
  },

  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log('About组件beforeRouteLeave', to, from)
    next()
  }
}
</script>

<style scoped>

</style>