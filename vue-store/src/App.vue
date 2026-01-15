
<script setup>
import { inject, ref, computed, onMounted, onUnmounted } from 'vue'
const cart = inject('cart')
const totalQty = computed(() => cart.reduce((sum, item) => sum + (item.qty || 0), 0))
const currentDateTime = ref('')
let intervalId = null

const updateDateTime = () => {
  const now = new Date()
  const month = now.toLocaleDateString('en-US', { month: 'short' })
  const day = String(now.getDate()).padStart(2, '0')
  const year = String(now.getFullYear()).slice(-2)
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  const period = now.getHours() >= 12 ? 'PM' : 'AM'
  const displayHours = String(now.getHours() % 12 || 12).padStart(2, '0')
  currentDateTime.value = `${month}/${day}/${year}, ${displayHours}:${minutes}:${seconds} ${period}`
}

onMounted(() => {
  updateDateTime()
  intervalId = setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

defineProps({
  cartCount: {
    type: Number,
    default: 0
  }
})


</script>
<template>
  <div>
    <header class="header">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/"><img src="./buhler-logo.svg" alt="Company Logo"/></router-link>
      </div>
    
      <!-- DateTime Center -->
      <div class="datetime">
         {{ currentDateTime }}
      </div>

      <!-- Cart -->
      <div class="cart">
        <span class="badge">
        <router-link to="/cart">🛒 Cart({{totalQty}})</router-link></span>
      </div>
  </header>
   <router-view />
  </div>   
</template>


<style scoped>
body {
    margin: 0;
    font-family: Roboto, Helvetica Neue, sans-serif;
    color: #009b91;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  border-bottom: 1px solid #009b91;
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

.datetime {
  flex: 1;
  text-align: center;
  font-size: 20px;
  color: #666;
  
}

.cart {
  position: relative;
  font-size: 24px;
  cursor: pointer;
}


</style>
