//路由配置
import VueRouter from 'vue-router'
import About from '@/views/About'
import Home from '@/views/Home'

export default new VueRouter( {
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})