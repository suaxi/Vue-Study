<template>
  <h2>当前x.y的值是：{{x.y}}</h2>
  <button @click="x={y: 666}">点我替换值</button>
  <button @click="x.y++">点我x + 1</button>
  <hr>
  <h2>{{person}}</h2>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}k</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">修改薪资</button>
</template>

<script>
import {reactive, ref, shallowReactive, shallowRef, toRefs} from "vue";

export default {
  name: 'MyDemo',
  setup() {
    //数据
    //let person = shallowReactive({ //只考虑第一层数据的响应式
    let person = reactive({
      name: '药水哥',
      age: 30,
      job: {
        j1: {
          salary: 10
        }
      }
    })

    let x = shallowRef({
      y: 0
    })
    console.log(x)

    return {
      person,
      ...toRefs(person),
      x
    }
  }
}
</script>

<style scoped>

</style>