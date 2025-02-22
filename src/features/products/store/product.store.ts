import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import { FetchProductsUseCase } from '../../../core/use-cases/fetch-products.use-case';
import { ProductRepository } from '../../../core/repositories/product.repository';
import type { Product } from '../../../core/models/product.model';

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([]); // Definindo o tipo para os produtos com o modelo Product

  // Instância do repositório e use case
  const productRepository = new ProductRepository();
  const fetchProductsUseCase = new FetchProductsUseCase(productRepository);

  // Função para carregar os produtos
  async function loadProducts() {
    console.log('Carregando produtos...'); // ✅ Debug para ver se a função está sendo chamada
    const data = await fetchProductsUseCase.execute();
    console.log('Produtos carregados:', data); // ✅ Verifica se os dados chegaram
    products.value = data;
  }

  // Carrega os produtos assim que o componente for montado
  onMounted(loadProducts); // ✅ Garante que os produtos serão carregados ao iniciar

  return { products, loadProducts };
});