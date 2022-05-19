<template>
  <ul>
    <li>编号：{{this.$route.params.id}}</li>
    <li>标题：{{this.$route.params.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "MyDetail",
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>