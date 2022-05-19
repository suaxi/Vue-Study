<template>
  <ul>
    <li>编号：{{this.$route.query.id}}</li>
    <li>标题：{{this.$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "MyDetail"
}
</script>

<style scoped>

</style>