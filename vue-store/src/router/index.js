import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cart from '../pages/Cart.vue'
import Checkout from '../pages/Checkout.vue'
import ProductDetail from '../pages/ProductDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/product/:id', component: ProductDetail, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
