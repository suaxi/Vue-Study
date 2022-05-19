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
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            //props: {a:1,b:"B"}

                            //props的第二种写法，值为布尔值，若值位真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            //props: true

                            //props的第三种写法，值为函数
                            /* props({$route}) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                }
                            } */

                            //简写
                            props({query:{id,title}}) {
                                return {
                                    id,title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})