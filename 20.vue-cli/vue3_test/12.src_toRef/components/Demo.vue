<template>
  <h2>{{person}}</h2>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资（toRef）：{{salary}}k</h2>
  <h2>薪资（toRefs）：{{person.job.j1.salary}}k</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="salary++">修改薪资</button>
</template>

<script>
import {reactive, toRef, toRefs} from "vue";

export default {
  name: 'MyDemo',
  setup() {
    //数据
    let person = reactive({
      name: '药水哥',
      age: 30,
      job: {
        j1: {
          salary: 10
        }
      }
    })

    const p = toRefs(person)
    console.log(p);

    return {
      person,
      name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      salary: toRef(person.job.j1, 'salary'),
      p
    }
  }
}
</script>

<style scoped>

</style>