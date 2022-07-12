## Vue3

### 一、常用Compsition API

#### 1. setup

Vue3.0中一个新的配置项，值为一个函数，组件中所用到的数据、方法等均配置在setup中，有两种返回结果：

（1）返回一个对象：则对象中的属性、方法可以直接在模板中使用（常用）

（2）返回一个渲染函数：可以自定义渲染内容



#### 2. ref函数

+ 作用：定义一个响应式的数据

+ 语法：`const xxx= ref(initValue)`
  + 创建一个包含响应式数据的引用对象（reference对象，简称ref对象）
  + 在js中操作ref对象：`xxx.value`
  + 在模板中读取时不需要手动写`.value`，直接`{{xxx}}`

+ 补充：
  + 接收的数据可以是基本类型，也可以是对象类型
  + 基本类型数据：响应式依然通过 `Object.defineProperty()` 的 `get `与`set` 完成
  + 对象类型的数据：内部求助Vue3.0的 `reactive` 函数来实现



#### 3. reactive函数

+ 作用：定义一个对象类型的响应式数据（基本类型使用ref）
+ 语法：`const 代理对象 = reactive(源对象)` 接收一个对象或数组，返回一个代理对象（即Proxy的实例对象，简称Proxy对象）
+ `reactive` 定义的响应式数据是深层次的
+ 内部基于 `ES6` 的 `Proxy` 实现，通过代理对象操作源对象内部数据进行操作



#### 4. Vue3.0的响应式

+ 实现原理：

  + 通过Proxy（代理）：拦截对象中任意属性的变化（增删查改）

  + 通过Reflect（反射）：对源对象的属性进行操作

  + Demo

    ```javascript
    //源数据
    let person = {
        name: '孙笑川',
        age: 33
    }
    
    const p = new Proxy(person, {
        //读取时调用
        get(target,propName) {
            console.log(`p身上的${propName}属性被读取了`)
            return Reflect.get(target, propName)
        },
        //修改/追加时调用
        set(target,propName,value) {
            console.log(`p身上的${propName}属性被修改了，执行页面更新`)
            Reflect.set(target, propName, value)
        },
        //删除时调用
        deleteProperty(target, propName) {
            console.log(`p身上的${propName}属性被删除了，执行页面更新`)
            return Reflect.deleteProperty(target, propName)
        }
    })
    ```



#### 5. reactive与ref的区别

+ 从定义数据的角度
  + `ref` 定义**基本数据类型**
  + `reactive` 定义**对象或数组类型**
  + `ref`也可以定义*对象或数组类型*，底层会通过 `reactive`转为代理对象
+ 从原理的角度分析
  + `ref` 通过 `Object.defineProperty()` 的 `get` 与 `set` 方法来实响应式（数据劫持）
  + `reactive` 通过 `Proxy` 来实响应式（数据劫持），并通过 `Reflect` 操作**源对象**内部的数据
+ 从使用角度
  + `ref` 定义的数据：操作数据时需要 `.value`，在模板中使用时不需要 `.value`
  + `reactive` 定义的数据：操作时直接使用即可



#### 6. setup的两个注意点

+ setup执行的时机
  + 在 `beforeCreate` 之前执行一次，`this` 是 `undefined`
+ setup的参数
  + props：值为对象，包含组件外部传递过来，且组件内部声明接收了的属性
  + context：上下文对象
    + attrs：值为对象，包含组件外部传递过来，但没有在 `props` 配置中声明的属性，相当于 `this.$attrs`
    + slots：收到的插槽内容，相当于 `this.$slots`
    + emit：分发自定义事件的函数，相当于 `this.$emit`



#### 6. computed计算属性

+ 与Vue2.x中一致

+ 示例：

  ```vue
  import {computed, reactive} from "vue";
  
  export default {
    name: 'MyDemo',
    setup() {
      //数据
      let person = reactive({
        firstName: '孙',
        lastName: '笑川'
      })
  
      //计算属性（简写）
      // person.fullName = computed(() => {
      //   return person.firstName + '-' + person.lastName
      // })
  
      //计算属性（完整写法）
      person.fullName = computed({
        get() {
          return person.firstName + '-' + person.lastName
        },
        set(value) {
          const nameArr = value.split('-')
          person.firstName = nameArr[0]
          person.lastName = nameArr[1]
        }
      })
  
      return {
        person
      }
    }
  }
  ```



#### 7. watch函数

+ 与Vue2.x中一致

+ 注意：

  + 监视 `reactive`定义的响应式数据时，`oldValue` 无法正确获取，强制开启了深度监视（`deep`配置失效）
  + 监视 `reactive`定义的响应式数据中的某个属性（对象）时：`deep` 配置有效

  ```vue
  //情况一：监视ref定义的一个数据
  watch(sum, (newValue, oldValue) => {
  	console.log('sum变了',newValue, oldValue)
  })
  
  //情况二：监视ref定义的多个数据
  watch([sum, msg], (newValue, oldValue) => {
  	console.log('sum变了', newValue, oldValue)
  }, {immediate:true})
  
  /*
  情况三：监视reactive定义的一个数据中的全部属性
  注意：1.此处无法正确获取oldValue
  2.强制开启了深度监视（deep配置无效）
  */
  watch(person, (newValue, oldValue) => {
  	console.log('person变了',newValue, oldValue)
  }, {deep: false}) //此处的deep配置无效
  
  //情况四：监视reactive定义的一个数据中的某个属性
  watch(() => person.name, (newValue, oldValue) => {
  	console.log('person变了',newValue, oldValue)
  })
  
  //情况五：监视reactive定义的一个数据中的某些属性
  watch([() => person.name, () => person.age], (newValue, oldValue) => {
  	console.log('person变了',newValue, oldValue)
  })
  
  //特殊情况
  watch(() => person.job, (newValue, oldValue) => {
  	console.log('person变了',newValue, oldValue)
  }, {deep:true}) //此处由于监视的是reactive定义的对象中某个属性，所以deep配置有效
  ```

  