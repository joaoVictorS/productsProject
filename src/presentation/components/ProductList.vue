<script setup lang="ts">
import { computed, onMounted } from 'vue';
// src/presentation/components/ProductList.vue
// Caminho relativo
import { useProductStore } from '@/features/products/store/product.store';

const productStore = useProductStore();
const products = computed(() => productStore.products);

onMounted(async () => {
  console.log('Chamando loadProducts()...');
  await productStore.loadProducts(); // ✅ Aguarda o carregamento
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Lista de Produtos</h2>
    <ul v-if="products.length" class="grid grid-cols-3 gap-4">
      <li v-for="product in products" :key="product.name" class="p-4 bg-white shadow">
        <img :src="product.image" :alt="product.name" class="w-full">
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p>{{ product.detail }}</p>
        <p class="text-blue-600 font-bold">R$ {{ product.price }}</p>
      </li>
    </ul>
    <p v-else class="text-red-500">Nenhum produto encontrado.</p>
  </div>
</template>
