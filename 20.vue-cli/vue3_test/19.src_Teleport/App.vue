<template>
  <div class="app">
    <h3>App组件</h3>
    <Child/>
  </div>
</template>

<script>
import Child from "@/components/Child";

export default {
  name: 'App',
  components: {
    Child
  }
}
</script>

<style>
.app {
  background-color: darkgray;
  padding: 10px;
}
</style>
