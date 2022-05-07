<template>
  <div>
    <Student name="孙笑川" sex="男" :age="33"/>
  </div>
</template>

<script>
import Student from './components/Student'

export default {
  name: "App",
  components: {Student}
}
</script>

<style scoped>

</style>