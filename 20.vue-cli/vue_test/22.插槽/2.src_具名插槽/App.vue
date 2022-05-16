<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a slot="footer" href="https://www.baidu.ocm">更多美食</a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a slot="footer" href="https://www.baidu.ocm">单机游戏</a>
        <a slot="footer" href="https://www.baidu.ocm">热门网游</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <!-- vue2.6引入，只有使用template的时候才能使用v-slot:xxx -->
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.ocm">经典</a>
          <a href="https://www.baidu.ocm">热门</a>
          <a href="https://www.baidu.ocm">推荐</a>
        </div>
        <h4>IMAX 3D震撼上映！</h4>
      </template>
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
.container,.foot {
  display: flex;
  justify-content: space-around;
}
</style>