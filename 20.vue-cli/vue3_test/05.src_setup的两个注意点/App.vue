<template>
  <Demo @hello="showHelloMsg" msg="你好" school="家里蹲">
    <template v-slot:qwe>
      <span>你好</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "@/components/Demo";

export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    function showHelloMsg(value) {
      alert(`出发了hello事件，收到的参数是：${value}`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>

<style>

</style>
