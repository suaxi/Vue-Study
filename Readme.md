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