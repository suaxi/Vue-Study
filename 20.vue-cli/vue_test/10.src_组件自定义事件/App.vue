<template>
  <div>
    <h1>{{msg}}</h1>
    <h1 v-show="studentName">学生姓名是：{{studentName}}</h1>
    <!-- 函数类型的props，子传父 -->
    <school :getSchoolName="getSchoolName"/>
    <hr>
    <!-- 自定义事件，子传父（第一种写法使用v-on或@） -->
    <!--<Student v-on:getStudentName="getStudentName"/>-->
    <!--<Student v-on:getStudentName="getStudentName"/>-->
    <!--<Student @getStudentName="getStudentName" @demo="demo"/>-->

    <!--自定义事件第二种写法 ref-->
    <Student ref="student" @click.native="demo"/>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  name: "App",
  components: {School,Student},
  data() {
    return {
      msg: '带带大师兄',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到了学校名：', name)
    },
    getStudentName(name) {
      console.log('App收到了学生名：', name)
      this.studentName = name
    },
    demo() {
      // console.log('demo事件被触发了')
      alert("@click.native原生自定义DOM操作")
    }
  },
  mounted() {
    this.$refs.student.$on('getStudentName', this.getStudentName)
  }
}
</script>

<style scoped>

</style>