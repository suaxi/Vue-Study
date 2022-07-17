<template>
  <div class="child">
    <h3>Child组件</h3>
    <Son/>
  </div>
</template>

<script>
import Son from "./Son";

export default {
  name: 'MyChild',
  components: {
    Son
  }
}
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>