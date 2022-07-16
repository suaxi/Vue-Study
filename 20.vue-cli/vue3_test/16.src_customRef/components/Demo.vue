<template>
  <br>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {customRef, ref} from "vue";

export default {
  name: 'MyDemo',
  setup() {
    //数据
    //Vue提供的ref
    //let keyWord = ref('你好')

    function myRef(value, delay) {
      return customRef((track, trigger) => {
        let timer
        return {
          get() {
            console.log(`有人从自定义的myRef容器中读取了数据，value:[${value}]`)
            //通知Vue追踪value的变化
            track()
            //2.读取
            return value
          },
          set(newValue) {
            console.log(`有人修改了自定义myRef容器中的数据，newValue:[${newValue}]`)
            clearTimeout(timer)
            timer = setTimeout(() => {
              //1.设置值
              value = newValue
              //3.通知Vue重新解析模板
              trigger()
            }, delay)
          }
        }
      })
    }

    //使用自定义的ref
    let keyWord = myRef('你好', 500)

    return {
      keyWord
    }
  }
}
</script>

<style scoped>

</style>