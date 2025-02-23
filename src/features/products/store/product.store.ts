import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import type { Product } from '@/core/models/product.model';

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([]);
  const isLoading = ref<boolean>(true);

  async function loadProducts() {
    console.log('🔍 Buscando produtos...');
    isLoading.value = true;

    try {
      const response = await fetch('/products.json'); 
      const data = await response.json();
      console.log('✅ Produtos carregados:', data);

      products.value = data;
    } catch (error) {
      console.error('❌ Erro ao carregar produtos:', error);
    } finally {
      isLoading.value = false;
    }
  }

  function addProduct(product: Product) {
    products.value.push(product);
  }

  function editProduct(updatedProduct: Product) {
    console.log('✏️ Editando produto:', updatedProduct);

    const index = products.value.findIndex(p => p.name === updatedProduct.name);
    if (index !== -1) {
      products.value[index] = { ...updatedProduct };
      products.value = [...products.value]; 
    }
  }

  function removeProduct(productName: string) {
    console.log('🗑️ Removendo produto:', productName);

    products.value = products.value.filter(p => p.name !== productName);
  }

  onMounted(() => {
    loadProducts();
  });

  return { products, isLoading, loadProducts, addProduct, editProduct, removeProduct };
});
