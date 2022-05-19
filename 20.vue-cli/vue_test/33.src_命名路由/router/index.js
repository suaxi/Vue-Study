//路由配置
import VueRouter from 'vue-router'
import About from '@/views/About'
import Home from '@/views/Home'
import News from '@/views/News'
import Message from '@/views/Message'
import Detail from '@/views/Detail'

export default new VueRouter( {
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    //子路由之前不写左斜杠“/”
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                        }
                    ]
                }
            ]
        }
    ]
})