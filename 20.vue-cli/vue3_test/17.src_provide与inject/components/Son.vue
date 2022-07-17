<template>
  <div class="son">
    <h3>Son组件 {{car.name}} --- {{car.price}}</h3>
  </div>
</template>

<script>

import {inject} from "vue";

export default {
  name: 'MySon',
  setup() {
    let car = inject('car')
    console.log(car)
    return {car}
  }
}
</script>

<style>
.son {
  background-color: lightpink;
  padding: 10px;
}
</style>