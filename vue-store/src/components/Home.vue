<script setup>
import { inject } from 'vue'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard.vue'

const cart = inject('cart')

function addToCart(product) {
  const item = cart.find(p => p.id === product.id)
  item ? item.qty++ : cart.push({ ...product, qty: 1 })
}
</script>

<template>
  <h1>Products</h1>
  <div class="grid">
    <ProductCard
      v-for="p in products"
      :key="p.id"
      :product="p"
      @add="addToCart(p)"
    />
  </div>
</template>

<style>
.grid {
  display: flex;
  gap: 20px;
}
</style>