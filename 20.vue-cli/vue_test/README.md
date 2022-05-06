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