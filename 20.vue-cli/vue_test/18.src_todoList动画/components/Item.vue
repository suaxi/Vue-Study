<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- 使用v-model也能实现，但官方建议不对props中的属性做修改 -->
      <!--<input type="checkbox" v-model="todo.done"/>-->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo,$event)"
          ref="inputTitle"
      >
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "MyItem",
  props: ['todo'],
  methods: {
    //勾选/取消勾选
    handleCheck(id) {
      //通知App组件将对应todo对象的done值取反
      //this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    //删除
    handleDelete(id) {
      if (confirm('确定删除吗？')) {
        //this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo', id)
        pubsub.publish('deleteTodo', id)
      }
    },
    //编辑
    handleEdit(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      //下一次DOM更新结束后执行指定的回调
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    //失去焦点回调（执行修改逻辑）
    handleBlur(todo,e) {
      todo.isEdit = false
      if (!e.target.value.trim()) return alert('标题不能为空！')
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #dddddd;
}

li:hover button {
  display: block;
}
</style>