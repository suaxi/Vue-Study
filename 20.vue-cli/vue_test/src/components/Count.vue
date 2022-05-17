<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <h3>当前求和放大10倍：{{$store.getters.bigSum}}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "MyCount",
  data() {
    return {
      //用户选择的数字
      num: 1,
    }
  },
  methods: {
    increment() {
      this.$store.commit('INCREMENT', this.num)
    },
    decrement() {
      this.$store.commit('DECREMENT', this.num)
    },
    incrementOdd() {
      this.$store.dispatch('incrementOdd', this.num)
    },
    incrementWait() {
      this.$store.dispatch('incrementWait', this.num)
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
button {
  margin: 5px;
}
</style>