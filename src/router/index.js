import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home/Home')
const Detail = () => import('views/Detail/Detail')
const Category = () => import('views/Category/Category')
const Categorylist = () => import('views/Category/Categorylist')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/category/list',
    component: Categorylist,
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
