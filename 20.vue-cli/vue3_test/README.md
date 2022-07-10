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

    