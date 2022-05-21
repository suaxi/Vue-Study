<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!--路由缓存，include写的必须是组件名-->
      <keep-alive include="MyNews">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHome"
}
</script>

<style scoped>

</style>