<template>
  <div class="son">
    <h3>Son组件</h3>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";

export default {
  name: 'MySon',
  components: {
    Dialog
  }
}
</script>

<style>
.son {
  background-color: lightpink;
  padding: 10px;
}
</style>