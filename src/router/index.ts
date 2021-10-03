import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import Login from '../views/Login.vue'
import Product from '../views/Product.vue'
import Shop from '../views/Shop.vue'
import ForgetPass from '../views/ForgetPass.vue'
import Verification from '../views/Verification.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/verification',
    component: Verification,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/shop/:id',
    component: Shop,
  },
  {
    path: '/product/:id',
    component: Product,
  },
  {
    path: '/forgetPass',
    component: ForgetPass,
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router