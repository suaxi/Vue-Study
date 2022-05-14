<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="demo" appear>
      <h1 v-show="isShow" key="1">你好</h1>
      <h1 v-show="isShow" key="2">孙笑川</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "MyTest",
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

.demo-enter-active {
  animation: demo 1s;
}

.demo-leave-active {
  animation: demo 1s reverse;
}

@keyframes demo {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>