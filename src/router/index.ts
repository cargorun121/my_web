import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {path:'/',
    name:'indexCommon',
    component:()=>import('../components/indexCommon.vue'),
    children:[
    {
      //首页路由  组件名称为MainTest
      path: '/main',
      name: 'MainTest',
      component:() => import('../components/MainTest.vue')
    },
    {
      path: '/user',
      name: 'User-1',
      component:() => import('../components/UserTest.vue')
    }]
  },
  {
    //登录页面
    path:'/login',
    name:'loginIndex',
    component:()=>import('../components/loginIndex.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
