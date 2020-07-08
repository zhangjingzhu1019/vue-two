import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: '/home/list',
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('../pages/List.vue')
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('../pages/Role.vue')
      },
      {
        path: 'diction',
        name: 'Diction',
        component: () => import('../pages/Diction.vue')
      },
      {
        path: 'commodity',
        name: 'Commodity',
        component: () => import('../pages/Commodity.vue')
      },
      {
        path: 'parameter',
        name: 'Parameter',
        component: () => import('../pages/Parameter.vue')
      },
      {
        path: 'classify',
        name: 'Classify',
        component: () => import('../pages/Classify.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../pages/Order.vue')
      },
      {
        path: 'data',
        name: 'Data',
        component: () => import('../pages/Data.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
