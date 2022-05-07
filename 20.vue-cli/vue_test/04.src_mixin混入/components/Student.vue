<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
  </div>
</template>

<script>
//局部混合
//import {mixin} from '@/mixin'
export default {
  name: 'StudentName',
  data() {
    return {
      name: '孙笑川',
      sex: '男'
    }
  },
  //mixins: [mixin]
}
</script>