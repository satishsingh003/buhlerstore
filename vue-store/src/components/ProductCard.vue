<script setup>
defineProps({ product: Object })
</script>

<template>
  <router-link :to="`/product/${product.id}`" class="card">
    <img :src="product.imageUrl" />
    <h3>{{ product.name }}</h3>
    <p>x{{ product.price }}</p>
  </router-link>

  <button @click="$emit('add')">Add to Cart</button>
</template>

<style scoped>
.card {
  display: block;
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  text-decoration: none;
  color: inherit;
}

img {
  width: 100%;
}
</style>
