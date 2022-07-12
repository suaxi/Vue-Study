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
    let person = reactive({
      name: '药水哥',
      age: 30,
      job: {
        j1: {
          salary: 10
        }
      }
    })

    //情况一：监视ref定义的一个数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum变了',newValue, oldValue)
    // })

    //情况二：监视ref定义的多个数据
    // watch([sum, msg], (newValue, oldValue) => {
    //   console.log('sum变了', newValue, oldValue)
    // }, {immediate:true})

    /*
    情况三：监视reactive定义的一个数据中的全部属性
    注意：1.此处无法正确获取oldValue
         2.强制开启了深度监视（deep配置无效）
    */
    // watch(person, (newValue, oldValue) => {
    //   console.log('person变了',newValue, oldValue)
    // }, {deep: false}) //此处的deep配置无效

    //情况四：监视reactive定义的一个数据中的某个属性
    // watch(() => person.name, (newValue, oldValue) => {
    //   console.log('person变了',newValue, oldValue)
    // })

    //情况五：监视reactive定义的一个数据中的某些属性
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log('person变了',newValue, oldValue)
    // })

    //特殊情况
    watch(() => person.job, (newValue, oldValue) => {
      console.log('person变了',newValue, oldValue)
    }, {deep:true}) //此处由于监视的是reactive定义的对象中某个属性，所以deep配置有效

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