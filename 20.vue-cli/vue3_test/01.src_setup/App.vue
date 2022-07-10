<template>
  <h1>个人信息：</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>姓名：{{ age }}</h2>
  <button @click="sayHello">测试</button>
</template>

<script>
import {h} from 'vue'

export default {
  name: 'App',
  setup() {
    let name = '孙笑川'
    let age = 33

    function sayHello() {
      alert(`我叫${name}，今年${age}岁`)
    }

    //返回一个对象
    return {
      name,
      age,
      sayHello
    }

    //返回一个函数（渲染函数）
    //return () => h('h1', '孙笑川')
  }
}
</script>

<style>

</style>
