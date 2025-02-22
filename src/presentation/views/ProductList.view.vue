<!-- src/presentation/views/ProductListView.vue -->
<template>
    <div class="product-list">
      <h1>Lista de Produtos</h1>
      <div v-if="products.length === 0">
        <p>Carregando...</p>
      </div>
      <div v-else>
        <ProductCard v-for="product in products" :key="product.name" :product="product" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useProductStore } from '@/features/products/store/product.store';
  import ProductCard from '@/presentation/components/ProductCard.vue'; // Certifique-se de que o caminho está correto
  
  const { products, loadProducts } = useProductStore();
  
  // Carrega os produtos assim que a view for montada
  onMounted(loadProducts);
  </script>
  