<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="1">你好</h1>
      <h1 v-show="!isShow" key="2">孙笑川</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "MyTest3",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: skyblue;
}

/* 进入的起点,离开的终点 */
.demo-enter,.demo-leave-to {
  transform: translateX(-100%);
}

.demo-enter-active,.demo-leave-active {
  transition: 0.5s linear;
}

/* 进入的终点，离开的起点 */
.demo-enter-to,.demo-leave {
  transform: translateX(0);
}

</style>