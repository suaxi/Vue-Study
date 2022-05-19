<template>
  <ul>
    <li>编号：{{id}}</li>
    <li>标题：{{title}}</li>
  </ul>
</template>

<script>
export default {
  name: "MyDetail",
  props: ['id','title'],
  computed: {
    /* id() {
      return this.$route.query.id
    },
    title() {
      return this.$route.query.title
    } */
  },
  mounted() {
    // console.log(this.$route)
  }
}
</script>

<style scoped>

</style>