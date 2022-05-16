<template>
  <div class="container">
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(item,index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Count";

export default {
  name: "App",
  components: {Category},
  data() {
    return {
      foods: ['西瓜', '橘子', '葡萄', '苹果'],
      games: ['魔兽争霸', 'QQ飞车', 'Dota自走棋', '地下城与勇士'],
      films: ['《绣春刀1》', '《绣春刀2》', '《龙城岁月》', '《以和为贵》']
    }
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>