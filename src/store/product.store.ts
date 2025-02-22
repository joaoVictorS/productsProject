import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import { fetchProducts } from '@/api/product.service'; // ✅ Importação correta

export const useProductStore = defineStore('product', () => {
  const products = ref([]);

  async function loadProducts() {
    console.log('Carregando produtos...'); // ✅ Debug para ver se a função está sendo chamada
    const data = await fetchProducts();
    console.log('Produtos carregados:', data); // ✅ Verifica se os dados chegaram
    products.value = data;
  }

  onMounted(loadProducts); // ✅ Garante que os produtos serão carregados ao iniciar

  return { products, loadProducts };
});
