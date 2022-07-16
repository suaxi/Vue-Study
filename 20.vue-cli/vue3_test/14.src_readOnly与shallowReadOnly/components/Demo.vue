<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}k</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">修改薪资</button>
</template>

<script>
import {reactive, readonly, ref, shallowReadonly, toRefs} from "vue";

export default {
  name: 'MyDemo',
  setup() {
    //数据
    let sum = ref(0)
    let person = reactive({
      name: '药水哥',
      age: 30,
      job: {
        j1: {
          salary: 10
        }
      }
    })

    //person = readonly(person)
    //person = shallowReadonly(person)
    //sum = readonly(sum)
    //sum = shallowReadonly(sum)

    return {
      sum,
      ...toRefs(person),
    }
  }
}
</script>

<style scoped>

</style>