<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg+='！'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}k</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">修改薪资</button>
</template>

<script>
import {reactive, ref, watch, watchEffect} from "vue";

export default {
  name: 'MyDemo',
  setup() {
    //数据
    let sum = ref(0)
    let msg = ref('孙笑川')
    let person = reactive({
      name: '药水哥',
      age: 30,
      job: {
        j1: {
          salary: 10
        }
      }
    })

    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum变了',newValue, oldValue)
    // }, {immediate:true})

    //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调
    watchEffect(() => {
      const a = sum.value
      const b = person.job.j1.salary
      console.log('watchEffect配置的回调执行了')
    })

    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style scoped>

</style>