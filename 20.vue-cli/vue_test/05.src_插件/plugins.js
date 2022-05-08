export default {
    install(Vue,x,y,z) {
        console.log('插件被调用了', Vue,x,y,z)

        //全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0,3)
        })

        //自定义全局指令
        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value
            },
            inserted(element) {
                element.focus()
            },
            update(element, binding) {
                element.value = binding.value
            }
        })

        //全局混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })

        //给Vue原型上添加一个方法
        Vue.prototype.hello = () => {
            alert('给Vue原型上添加一个方法')
        }
    }
}