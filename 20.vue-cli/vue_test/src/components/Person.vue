<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件的求和为：{{sum}}</h3>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addPerson">添加</button>
    <button @click="addPersonByInterface">添加（调用后端接口）</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: "MyPerson",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    personList() {
      return this.$store.state.personOptions.personList
    },
    sum() {
      return this.$store.state.countOptions.sum
    },
    firstPersonName() {
      return this.$store.getters['personOptions/firstPersonName'];
    }
  },
  methods: {
    addPerson() {
      const person = {id:nanoid(),name:this.name}
      this.$store.dispatch('personOptions/addPersonFilter', person)
      this.name = ''
    },
    addPersonByInterface() {
      this.$store.dispatch('personOptions/backendInterface')
    }
  },
  mounted() {
    //console.log(this.$store)
  }
}
</script>

<style scoped>
button {
  margin: 5px;
}
</style>