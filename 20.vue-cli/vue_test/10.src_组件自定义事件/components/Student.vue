<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <br><br>
    <button @click="unbind">解绑getStudentName事件</button>
    <br><br>
    <button @click="destroyVc">销毁组件实例对象</button>
    <br><br>
    <h2>当前求和为：{{number}}</h2>
    <button @click="add">点我number+1</button>
  </div>
</template>

<script>
export default {
  name: 'StudentName',
  data() {
    return {
      name: '孙笑川',
      sex: '男',
      number: 0
    }
  },
  methods: {
    sendStudentName() {
      //触发Student组件实例对象身上的getStudentName事件
      this.$emit('getStudentName', this.name)
      //this.$emit('demo')
    },
    unbind() {
      //解绑一个自定义事件
      this.$off('getStudentName')

      //解绑多个自定义事件
      //this.$off(['getStudentName', 'demo'])

      //解绑所有自定义事件
      //this.$off()
    },
    destroyVc() {
      //组件销毁后，所有的自定义事件全部失效
      this.$destroy()
    },
    add() {
      console.log('add方法被调用了')
      this.number++
    }
  }
}
</script>

<style>
  .demo{
    background-color: darksalmon;
  }
</style>