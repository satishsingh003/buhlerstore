<script setup>
defineProps({ product: Object })
</script>

<template>
<div class="card">
  <router-link :to="`/product/${product.id}`" >
    <img :src="product.imageUrl" />
    <h3>{{ product.name }}</h3>
    <p>x{{ product.price }}</p>
  </router-link>

  <button class="add-to-cart-btn" @click="$emit('add')" title="Add to Cart">🛒</button>
</div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  text-decoration: none;
  color: inherit;
  position: relative;
  min-height: 300px;
}

img {
  width: 100%;
}

.add-to-cart-btn {
  padding: 10px;
  border: none;
  font-size: 24px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: auto;
  align-self: flex-end;
  width: auto;
}

.add-to-cart-btn:hover {
  background-color: #007a72;
}
</style>