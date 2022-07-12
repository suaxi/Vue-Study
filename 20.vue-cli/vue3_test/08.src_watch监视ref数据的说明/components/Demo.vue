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
import {reactive, ref, watch} from "vue";

export default {
  name: 'MyDemo',
  setup() {
    //数据
    let sum = ref(0)
    let msg = ref('孙笑川')
    let person = ref({
      name: '药水哥',
      age: 30,
      job: {
        j1: {
          salary: 10
        }
      }
    })

    watch(sum, (newValue, oldValue) => {
      console.log('sum变了',newValue, oldValue)
    })

    //watch监视ref数据的说明
    //第一种方法：person.value（此处的person.value是一个reactive定义的对象）
    // watch(person.value, (newValue, oldValue) => {
    //   console.log('sum变了',newValue, oldValue)
    // })

    //第二种方法：开启深度监视
    watch(person, (newValue, oldValue) => {
      console.log('sum变了',newValue, oldValue)
    }, {deep:true})

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