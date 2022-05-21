//路由配置
import VueRouter from 'vue-router'
import About from '@/views/About'
import Home from '@/views/Home'
import News from '@/views/News'
import Message from '@/views/Message'
import Detail from '@/views/Detail'

const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: {title:'关于'}
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: {title:'主页'},
            children: [
                {
                    name: 'news',
                    //子路由之前不写左斜杠“/”
                    path: 'news',
                    component: News,
                    meta: {title:'新闻', isAuth:true}
                },
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    meta: {title:'信息', isAuth:true},
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
                            props({query: {id, title}}) {
                                return {
                                    id, title
                                }
                            },
                            meta: {title:'详情'}
                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫，初始化及每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from)
    //鉴权
    if (to.meta.isAuth) {
        if (localStorage.getItem('token') === '1') {
            next()
        } else {
            alert('暂无查看权限！')
        }
    } else {
        next()
    }
})

//全局后置路由守卫，初始化及每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || 'Vue2 Demo'
})

export default router