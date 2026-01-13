<script setup>
import { inject, computed, ref } from 'vue'

const cart = inject('cart')
const name = ref('')
const address = ref('')
const placed = ref(false)

const total = computed(() =>
  cart.reduce((sum, i) => sum + i.price * i.qty, 0)
)

function placeOrder() {
  placed.value = true
  cart.splice(0)
}
</script>

<template>
  <div v-if="!placed">
    <h1>Checkout</h1>

    <h3>Shipping Info</h3>
    <input v-model="name" placeholder="Full Name" />
    <input v-model="address" placeholder="Address" />

    <h3>Order Summary</h3>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} x{{ item.qty }}
      </li>
    </ul>

    <h2>Total: ${{ total }}</h2>

    <button @click="placeOrder" :disabled="!name || !address">
      Place Order
    </button>
  </div>

  <div v-else>
    <h1>✅ Order Placed!</h1>
    <p>Thank you for your purchase.</p>
  </div>
</template>

<style>
input {
  display: block;
  margin-bottom: 10px;
}
</style>
