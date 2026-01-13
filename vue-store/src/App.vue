
<script setup>
import { inject } from 'vue'
const cart = inject('cart')
defineProps({
  cartCount: {
    type: Number,
    default: 0
  }
})
</script>
<template>
  <header class="header">
    <!-- Logo -->
    <div class="logo">
      <router-link to="/"><img src="./buhler-logo.svg" alt="Company Logo"/></router-link>
    </div>

    <!-- Cart -->
    <div class="cart">
      
      <span class="badge">
      <router-link to="/cart">🛒 Cart({{cart.length}})</router-link></span>
    </div>
  </header>
   <router-view />
</template>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  border-bottom: 1px solid #eee;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 18px;
}

.logo img {
  height: 35px;
}

.cart {
  position: relative;
  font-size: 24px;
  cursor: pointer;
}


</style>
