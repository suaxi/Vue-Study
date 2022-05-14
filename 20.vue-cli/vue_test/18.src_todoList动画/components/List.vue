<template>
  <ul class="todo-main">
    <transition-group name="todoList" appear>
      <Item
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"/>
    </transition-group>
  </ul>
</template>

<script>
import Item from "@/components/Item";
export default {
  name: "MyList",
  components: {Item},
  props: ['todos']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}


.todoList-enter-active {
  animation: demo 1s;
}

.todoList-leave-active {
  animation: demo 1s reverse;
}

@keyframes demo {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>