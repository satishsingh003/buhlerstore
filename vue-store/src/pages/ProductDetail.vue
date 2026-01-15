<script setup>
import { inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import { products } from '../data/products'

const router = useRouter()
const cart = inject('cart')

const props = defineProps({
  id: [String, Number]
})

const product = computed(() =>
  products.find(p => String(p.id) === String(props.id))
)

function addToCart() {
  const item = cart.find(p => p.id === product.value.id)
  item ? item.qty++ : cart.push({ ...product.value, qty: 1 })
}

function goBack() {
  router.push('/')
}
</script>

<template>
  <div v-if="product">
    <button class="back" @click="goBack">← Back</button>
          <img class="imagedetails" :src="product.imageUrl" />

    <h1>{{ product.name }}</h1>
    <h2>{{ product.category }}</h2>
    <p>${{ product.price }}</p>
  

    <button @click="addToCart"  style="cursor:pointer;">🛒 Add to Cart</button>
  </div>

  <div v-else>
    <h2>Product not found</h2>
  </div>
</template>

<style>
.back {
  margin-bottom: 15px;
}
.imagedetails {
  width: 20%;
}
</style>
