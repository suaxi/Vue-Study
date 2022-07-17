<template>
  <div class="app">
    <h3>App组件 {{name}} --- {{price}}</h3>
    <Child/>
  </div>
</template>

<script>
import Child from "@/components/Child";
import {provide, reactive, toRefs} from "vue";

export default {
  name: 'App',
  components: {
    Child
  },
  setup() {
    let car = reactive({name: '马自达', price: '10w'})
    //给后代组件传递数据
    provide('car', car)
    return {...toRefs(car)}
  }
}
</script>

<style>
.app {
  background-color: darkgray;
  padding: 10px;
}
</style>
