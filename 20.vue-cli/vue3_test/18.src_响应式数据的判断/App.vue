<template>
  <h3>App组件</h3>
</template>

<script>
import {isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref, toRefs} from "vue";

export default {
  name: 'App',
  setup() {
    let car = reactive({name: '马自达', price: '10w'})
    let sum = ref(0)
    //readOnly处理响应式类型的数据时，底层依然是一个Proxy对象
    let car2 = readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))
    console.log(isProxy(car2))

    return {...toRefs(car)}
  }
}
</script>

<style>

</style>
