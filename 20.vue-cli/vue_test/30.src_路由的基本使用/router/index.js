//路由配置
import VueRouter from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'

export default new VueRouter( {
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/about',
            component: Home
        }
    ]
})