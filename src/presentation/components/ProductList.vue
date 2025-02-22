<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-6">Lista de Produtos</h1>

    <p v-if="isLoading" class="text-gray-500">Carregando produtos...</p>

    <button v-if="!isLoading" @click="openModal(null)" class="mb-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
      Criar Produto
    </button>

    <div v-if="products.length && !isLoading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in products" :key="product.id" class="bg-white border border-gray-300 rounded-lg shadow-lg">
        <img :src="product.image" alt="Imagem do Produto" class="w-full h-40 object-cover rounded-t-lg" />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800">{{ product.name }}</h2>
          <p class="text-sm text-gray-600">{{ product.detail }}</p>
          <p class="text-lg font-semibold text-red-600 mt-2">R$ {{ product.price }}</p>

          <div class="mt-4 flex justify-between">
            <button @click="openModal(product)" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Editar
            </button>
            <button @click="openConfirmModal(product.id)" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>

    <p v-else-if="!isLoading" class="text-gray-500">Nenhum produto disponível.</p>

    <!-- 🔥 Modal de Confirmação funcionando corretamente -->
    <ConfirmModal 
      :isOpen="isConfirmModalOpen"
      title="Excluir Produto"
      message="Tem certeza que deseja excluir este produto?"
      @confirm="confirmRemoveProduct"
      @cancel="closeConfirmModal"
    />

    <!-- Modal para Criar/Editar Produto -->
    <ProductModal 
      v-if="isModalOpen"
      :product="selectedProduct"
      @close="closeModal"
      @save="saveProduct"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useProductStore } from '@/features/products/store/product.store';
import ProductModal from '@/presentation/components/ProductModal.vue';
import ConfirmModal from '@/presentation/components/ConfirmModal.vue'; 

const store = useProductStore();
const products = computed(() => store.products);
const isLoading = computed(() => store.isLoading);

const isModalOpen = ref(false);
const isConfirmModalOpen = ref(false); 
const selectedProduct = ref(null);
const productIdToDelete = ref(null); 

// 🔹 Abre o Modal (Criar ou Editar)
function openModal(product) {
  selectedProduct.value = product ? { ...product } : { id: Date.now(), name: '', detail: '', price: 0, image: '' };
  isModalOpen.value = true;
}

// 🔹 Fecha o Modal
function closeModal() {
  isModalOpen.value = false;
}

// 🔹 Salva o Produto (Cria ou Edita)
function saveProduct(product) {
  if (products.value.some(p => p.id === product.id)) {
    store.editProduct(product);
  } else {
    store.addProduct(product);
  }
  closeModal();
}

// 🔹 Abre o Modal de Confirmação para Excluir
function openConfirmModal(productId) {
  console.log('Abrindo modal de confirmação para produto ID:', productId);
  productIdToDelete.value = productId;
  isConfirmModalOpen.value = true;
}

// 🔹 Fecha o Modal de Confirmação
function closeConfirmModal() {
  console.log('Fechando modal de confirmação');
  isConfirmModalOpen.value = false;
}

// 🔹 Confirma a Exclusão do Produto
function confirmRemoveProduct() {
  if (productIdToDelete.value !== null) {
    console.log('Excluindo produto ID:', productIdToDelete.value);
    store.removeProduct(productIdToDelete.value);
  }
  closeConfirmModal();
}
</script>
