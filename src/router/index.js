import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import CategoryPage from '../views/CategoryPage.vue'
import ProductPage from '../views/ProductPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/category/:name',
    name: 'CategoryPage',
    component: CategoryPage,
  },
  {
    path: '/product/:name',
    name: 'ProductPage',
    component: ProductPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router