<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
//局部混合
//import {mixin,mixin2} from '@/mixin'
export default {
  name: 'SchoolName',
  data() {
    return {
      name: '家里蹲',
      address: '北京',
      x: 200
    }
  },
  //mixins: [mixin,mixin2]
}
</script>

<style scoped>
  .demo{
    background-color: beige;
  }
</style>