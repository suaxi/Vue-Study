<template>
  <h1>个人信息：</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发Demo组件的hello事件</button>
</template>

<script>
import {reactive} from "vue";

export default {
  name: 'MyDemo',
  props: ['msg', 'school'],
  emits: ['hello'],
  setup(props,context) {
    //console.log('---setup---', props, context)
    //console.log('---setup---', props, context.attrs) //相当于Vue2中的$attrs
    //console.log('---setup---', props, context.emit) //触发自定义事件
    console.log('---setup---', props, context.slots) //插槽

    //数据
    let person = reactive({
      name: '孙笑川',
      age: 33
    })

    function test() {
      context.emit('hello', 666)
    }

    return {
      person,
      test
    }
  }
}
</script>

<style scoped>

</style>