<script setup>
defineProps({
  cart: Array
})

const emit = defineEmits(['remove'])
</script>

<template>
  <h2>Cart</h2>
  <div v-if="cart.length === 0">Cart is empty</div>

  <ul>
    <li v-for="item in cart" :key="item.id">
      {{ item.name }} (x{{ item.qty }}) - ${{ item.price * item.qty }}
      <button @click="emit('remove', item.id)">❌</button>
    </li>
  </ul>

  <h3>
    Total:
    ${{ cart.reduce((sum, i) => sum + i.price * i.qty, 0) }}
  </h3>
</template>
✅ What you