<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽，当使用者没有传递具体结构时，使用默认值填充 -->
    <slot>默认插槽</slot>
  </div>
</template>

<script>
export default {
  name: "MyCategory",
  props: ['title']
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  background-color: yellowgreen;
  text-align: center;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>