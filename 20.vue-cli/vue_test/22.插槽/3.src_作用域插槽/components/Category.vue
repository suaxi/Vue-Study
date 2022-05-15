<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽，当使用者没有传递具体结构时，使用默认值填充 -->
    <slot :games="games">默认插槽</slot>
  </div>
</template>

<script>
export default {
  name: "MyCategory",
  props: ['title'],
  data() {
    return {
      games: ['魔兽争霸', 'QQ飞车', 'Dota自走棋', '地下城与勇士']
    }
  }
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

h4 {
  text-align: center;
}
</style>