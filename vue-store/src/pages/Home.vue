<script setup>
import { computed, inject } from 'vue'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard.vue'

const cart = inject('cart')

function addToCart(product) {
  const item = cart.find(p => p.id === product.id)
  item ? item.qty++ : cart.push({ ...product, qty: 1 })
}

const groupedProducts = computed(() => {
  return products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = []
    }
    groups[product.category].push(product)
    return groups
  }, {})
})
</script>

<template>
  <div>
    <div v-for="(items, category) in groupedProducts" :key="category">
      <h2 class="category-title">{{ category }}</h2>

      <div class="product-list">
        <ProductCard
          v-for="item in items"
          :key="item.id"
          :product="item"
          @add="addToCart(item)"
        />
      </div>
    </div>
  </div>
</template>

<style>
.category-title {
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
}

.product-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
