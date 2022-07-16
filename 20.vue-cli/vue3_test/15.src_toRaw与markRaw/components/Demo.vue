<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}k</h2>
  <h2 v-show="person.car">车：{{person.car}}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">修改薪资</button>
  <button @click="showRawPerson">输出原始person数据</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name+='！'">换车</button>
  <button @click="person.car.price++">换价格</button>
</template>

<script>
import {markRaw, reactive, ref, toRaw, toRefs} from "vue";

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

    function showRawPerson() {
      const p = toRaw(person)
      console.log(p)
    }

    function addCar() {
      let car = {name: '马自达', price: 10}
      person.car = markRaw(car)
    }

    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    }
  }
}
</script>

<style scoped>

</style>