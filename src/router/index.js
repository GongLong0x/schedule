import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Home from '@/components/Home.vue'
import ToDoList from '@/components/ToDoList.vue'
import SubEvent from '../components/SubEvent.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history', // 启用HTML5历史模式
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: false } // 需要登录才能访问
    },
    {
      path: '/SubEvent',
      name: 'SubEvent',
      component: SubEvent,
      meta: { requiresAuth: true }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: { guestOnly: true } // 只有未登录用户才能访问
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: { guestOnly: true }
    },
    {
      path: '/ToDoList',
      name: 'ToDoList',
      component: ToDoList,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = router.app.$store?.getters?.isAuthenticated || false

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    // 如果需要认证但未登录，重定向到登录页
    next('/Login')
    //next()
  } else if (to.matched.some(record => record.meta.guestOnly) && isAuthenticated) {
    // 如果已登录但访问的是guestOnly页面，重定向到首页
    next('/')
  } else {
    // 否则放行
    next()
  }
})

export default router

/* export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'Home',
      component: Home
    },
    {
      path:'/SubEvent',
      name:'SubEvent',
      component: SubEvent
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register  
    },
    {
      path: '/ToDoList',
      name: 'ToDoList',
      component: ToDoList
    }
  ]
}) */

