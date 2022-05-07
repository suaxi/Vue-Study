<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <h2>年龄：{{myAge}}</h2>
    <button @click="updateAge">年龄+1</button>
  </div>
</template>

<script>
export default {
  name: 'StudentName',
  data() {
    return {
      msg: '家里蹲',
      myAge: this.age
    }
  },
  methods: {
    updateAge() {
      this.myAge++
    }
  },
  //简单接收
  //props: ['name','sex','age']

  //接收的同时对是数据进行类型限制
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number,
  // }

  //类型限制，默认值指定，是否必传
  props: {
    name: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 99
    }
  }

}
</script>