### 一、Vue

1. 想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象

2. root容器中的代码依然符合html规范

3. root容器中的代码被称为Vue模板



### 二、模板语法

1. 插值语法

   用于解析标签体内容，

   `{{xxx}}`  xxx是js表达式，且可以直接读取到data中的所有属性

2. 指令语法

   用于解析标签（包括：标签属性、标签体内容、绑定事件）

   例：`v-bind:href="xxx"` 或简写为`:href="xxx"`



### 三、数据绑定

1. 单向绑定v-bind：数据只能从data流向页面
2. 双向绑定v-model：data <===> 页面，双向

注：双向绑定一般应用在表单类元素上（input、select等）

​		`v-model:value`可以简写为`v-model`，因为它默认收集的就是value的值



### 四、el与data的两种写法

**el的两种写法：**

1. new Vue时配置el属性
2. 先创建Vue实例，之后通过`vm.$mount('#root')`指定el的值

**data的两种写法：**

1. 对象式
2. 函数式（使用组件时，必须使用函数式）

注：由Vue管理的函数，不能写箭头函数（作用域）



### 五、MVVM模型

1. M：Model模型，对应data中的数据
2. V：View视图，模板
3. VM：ViewModel视图模型，Vue实例对象

data中所有的属性，最后都出现在了vm身上；vm身上所有的属性及Vue原型上的所有属性，在Vue模板中都可以直接使用



### 六、数据代理

1. Vue中的数据代理：

   通过vm对象来代理data对象中属性的操作（读/写）

2. 优点：

   方便操作data中的数据

3. 基本原理：

   通过Object.defineProperty()把data对象中所有属性添加到vm上，同时指定getter/setter，在getter/setter内部去操作（读/写）data中对应的属性



### 七、事件处理

> 事件的基本使用

1. 使用`v-on:click="xxx"` 或`@click="xxx"`绑定事件，xxx是事件名
2. 事件的回调需要配置在methods对象中，最终会在vm上
3. methods中配置的函数，不要用箭头函数，this的作用域会被改变
4. methods中配置的函数都是是被Vue所管理的函数，this的指向是vm或组件实例对象
5. `@click="xxx"` 和 `@click="xxx($event)"` 的作用一样，后者可以传参



> 事件修饰符

1. prevent：阻止默认事件（常用）；
2. stop：阻止事件冒泡（常用）；
3. once：事件只触发一次（常用）；
4. capture：使用事件的捕获模式；
5. self：只有event.target是当前操作的元素时才触发事件；
6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕；



> 键盘事件

1. 常用的按键别名
   + 回车 enter
   + 删除 delete （捕获”删除“和”退格“按键）
   + 退出 esc
   + 空格 space
   + 换行 tab（必须配合`keydown`使用）
   + 上 up
   + 下 down
   + 左 left
   + 右 right
2. Vue未提供别名的按键，可以使用原始的key值绑定，需转换为kebab-case（短横线命名）
3. 系统修饰键：ctrl、alt、shift、meta
   1. 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发
   2. 配合keydown使用：正常触发事件
4. 可以使用keycode指定具体的按键
5. `Vue.config.keyCode.自定义键名 = 键码`，可以定制按键别名



### 八、计算属性

1. 定义：要用的属性不存在，要通过已有属性计算得来

2. 原理：底层借助了Object.defineproperty方法提供的getter和setter

3. get什么时候执行：

   + 初次读取时
   + 当依赖的属性发生改变时会被再次调用

4. 优点：与methods相比，内部有缓存机制（复用），效率更高，方便调试

5. 注：计算属性最终会出现在vm身上，直接读取使用即可；

   ​		如果计算属性要被修改，必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变；