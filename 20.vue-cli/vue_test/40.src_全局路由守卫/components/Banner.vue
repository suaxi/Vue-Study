<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="go">前进一步</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyBanner",
  methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    go() {
      //步长
      this.$router.go(1)
    }
  }
}
</script>

<style scoped>

</style>