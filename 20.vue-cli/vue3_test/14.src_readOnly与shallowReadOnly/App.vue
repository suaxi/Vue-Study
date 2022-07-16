<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo"/>
</template>

<script>
import {ref} from "vue";
import Demo from "@/components/Demo";

export default {
  name: 'App',
  setup() {
    let isShowDemo = ref(true)

    return {
      isShowDemo
    }
  },
  components: {
    Demo
  }
}
</script>

<style>

</style>
