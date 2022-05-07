## vue-cli

### 一、脚手架分析

关于不同版本的Vue：

1. vue.js是完整版的Vue，包含核心功能+模板解析器；vue.runtime.xxx.js是运行版的Vue，只包含核心功能
2. 运行时Vue需要使用**render函数**接收到的`createElement`去指定具体内容



### 二、ref属性

1. 被用来给元素或子组件注册引用信息（id的替代者）；
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）；
3. 使用方式：
   + 标识：`<h1 ref="xxx">孙笑川</h1>` 或 `<Demo ref="xxx"/>`
   + 获取：`this.$refs.xxx`



### 三、props配置

功能：让组件接收外部传过来的数据

1. 传递数据：`<Demo name="xxx"/>`

2. 接收数据：

   ```vue
   //1.简单接收
   props: ['name','sex','age']
   
   //2.接收的同时对是数据进行类型限制
   props: {
      name: String,
      sex: String,
      age: Number,
    }
   
   //3.类型限制，默认值指定，是否必传
   props: {
     name: {
       type: String,
       required: true
     },
     sex: {
       type: String,
       required: true
     },
     age: {
       type: Number,
       default: 99
     }
   }
   ```

注：props是只读的，Vue底层会监测你对propos的修改，如果进行了修改，会发出警告；若业务中确实需要修改，可以将该属性复制到data中并定义，修改后定义的数据



### 四、mixin混入

功能：可以把多个组件共用的配置提取成一个混入对象

使用方式：

1. 定义混合

   ```vue
   {
       data() {
       ...
       },
       methods: {
       xxx
       }
   }
   ```

   

2. 使用

（1）全局引入：`Vue.mixin(xxx)`

（2）局部混入：`mixins: [xxx]`