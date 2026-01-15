<script setup>
import { inject, computed } from 'vue'
import { useRouter } from 'vue-router'

const cart = inject('cart')
const router = useRouter()

const total = computed(() =>
  cart.reduce((sum, i) => sum + i.price * i.qty, 0)
)

function removeItem(id) {
  const index = cart.findIndex(item => item.id === id)
  if (index !== -1) cart.splice(index, 1)
}

function decreaseQty(item) {
  if (item.qty > 1) {
    item.qty--
  } else {
    removeItem(item.id)
  }
}
</script>

<template>
  <h1>Checkout</h1>

  <div v-if="cart.length === 0">
    Cart is empty
  </div>

  <ul v-else>
    <li v-for="item in cart" :key="item.id">
       <img class="imagecart" :src="item.imageUrl" />
      <strong>{{ item.name }}</strong>
      — ${{ item.price }} × {{ item.qty }}
      = ${{ item.price * item.qty }}

      <button @click="decreaseQty(item)">−</button>
      <button @click="removeItem(item.id)">❌</button>
    </li>
  </ul>

  <h2>Total: x{{ total }}</h2>

</template>

<style>
.back {
  margin-bottom: 15px;
}
.imagecart {
  width: 20%;
}
</style>
