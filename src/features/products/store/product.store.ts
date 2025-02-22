import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import { ProductRepository } from '@/core/repositories/product.repository';
import type { Product } from '@/core/models/product.model';
import { ProductUseCase } from '../../../core/use-cases/fetch-products.use-case';

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([]);
  const isLoading = ref<boolean>(true);

  const productRepository = new ProductRepository();
  const productUseCase = new ProductUseCase(productRepository);
  
  async function loadProducts() {
    console.log('🔍 Buscando produtos...');
    isLoading.value = true;

    try {
      const data = await productUseCase.fetchProducts();
      console.log('✅ Produtos carregados:', data);

      if (data.length > 0) {
        products.value = [...data]; 
      } else {
        console.warn('⚠️ Nenhum produto encontrado!');
      }
    } catch (error) {
      console.error('❌ Erro ao carregar produtos:', error);
    } finally {
      isLoading.value = false;
      console.log('🛑 Finalizado: isLoading =', isLoading.value);
    }
  }

  async function addProduct(product: Product) {
    await productUseCase.addProduct(product);
    products.value.push(product); 
  }
  
  async function editProduct(updatedProduct: Product) {
    await productUseCase.updateProduct(updatedProduct);
    const index = products.value.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      products.value[index] = { ...updatedProduct };
      products.value = [...products.value]; 
    }
  }

  async function removeProduct(productId: number) {
    await productUseCase.deleteProduct(productId);
    products.value = products.value.filter(p => p.id !== productId);
  }

  
  onMounted(() => {
    console.log('Chamando loadProducts() no onMounted()');
    loadProducts();
  });

  return { products, isLoading, loadProducts, addProduct, editProduct, removeProduct };
});
