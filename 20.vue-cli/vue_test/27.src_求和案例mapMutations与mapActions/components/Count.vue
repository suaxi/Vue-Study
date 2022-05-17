<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍：{{bigSum}}</h3>
    <h3>我在{{school}}大学，学习{{subject}}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  name: "MyCount",
  data() {
    return {
      //用户选择的数字
      num: 1,
    }
  },
  computed: {
    //借助mapState生成计算属性，从state中读取数据（对象写法）
    // ...mapState({sum:'sum',school:'school',subject:'subject'})

    //数组写法
    ...mapState(['sum','school','subject']),

    //借助mapGetters生成计算属性，从getter中读取数据（对象写法）
    // ...mapGetters({bigSum:'bigSum'})

    //数组写法
    ...mapGetters(['bigSum'])
  },
  methods: {
    /* increment() {
      this.$store.commit('INCREMENT', this.num)
    },
    decrement() {
      this.$store.commit('DECREMENT', this.num)
    }, */
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}),

    //数组写法
    // ...mapMutations(['INCREMENT','DECREMENT']),

    /* incrementOdd() {
      this.$store.dispatch('incrementOdd', this.num)
    },
    incrementWait() {
      this.$store.dispatch('incrementWait', this.num)
    } */
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
    //...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'}),

    //数组写法
    ...mapActions(['incrementOdd','incrementWait'])
  }
}
</script>

<style scoped>
button {
  margin: 5px;
}
</style>