<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-6">🛍️ Lista de Produtos</h1>

    <button
      @click="openModal(null)"
      class="mb-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
    >
      ➕ Criar Produto
    </button>

    <p v-if="isLoading" class="text-gray-500">Carregando produtos...</p>

    <div
      v-if="products.length && !isLoading"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        v-for="product in products"
        :key="product.name"
        class="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 ease-in-out"
      >
        <img
          :src="product.image || 'https://via.placeholder.com/300'"
          alt="Imagem do Produto"
          class="w-full h-40 object-cover rounded-t-lg"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800">
            {{ product.name }}
          </h2>
          <p class="text-sm text-gray-600">{{ product.detail }}</p>
          <p class="text-lg font-semibold text-red-600 mt-2">
            R$ {{ product.price }}
          </p>

          <div class="mt-4 flex items-center justify-between">
            <button
              @click="decreaseQuantity(product.name)"
              class="bg-gray-300 px-3 py-1 rounded-lg"
            >
              ➖
            </button>
            <span class="text-lg font-semibold mx-4">{{
              getProductQuantity(product.name)
            }}</span>
            <button
              @click="increaseQuantity(product)"
              class="bg-gray-300 px-3 py-1 rounded-lg"
            >
              ➕
            </button>
          </div>

          <div class="mt-4 flex justify-between">
            <button
              @click="openModal(product)"
              class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              ✏️ Editar
            </button>
            <button
              @click="openConfirmModal(product.name)"
              class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              ❌ Excluir
            </button>
          </div>
        </div>
      </div>
    </div>

    <p v-else-if="!isLoading" class="text-gray-500">
      Nenhum produto disponível.
    </p>

    <!-- 🔹 Modal de Criação/Edição -->
    <ProductModal
      v-if="isModalOpen"
      :isOpen="isModalOpen"
      :product="selectedProduct"
      @close="isModalOpen = false"
      @save="saveProduct"
    />

    <!-- 🔹 Modal de Confirmação -->
    <ConfirmModal
      :isOpen="isConfirmModalOpen"
      title="Excluir Produto"
      message="Tem certeza que deseja excluir este produto?"
      @confirm="confirmRemoveProduct"
      @cancel="closeConfirmModal"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useProductStore } from '@/features/products/store/product.store'
import { useCartStore } from '@/features/cart/store/cart.store'
import ProductModal from '@/presentation/components/ProductModal.vue'
import ConfirmModal from '@/presentation/components/ConfirmModal.vue'

const productStore = useProductStore()
const cartStore = useCartStore()
const products = computed(() => productStore.products)
const isLoading = computed(() => productStore.isLoading)

const isModalOpen = ref(false)
const selectedProduct = ref(null)
const isConfirmModalOpen = ref(false)
const productToDelete = ref(null)

function increaseQuantity(product) {
  cartStore.addToCart(product)
}

function decreaseQuantity(productName) {
  cartStore.decreaseQuantity(productName)
}

function getProductQuantity(productName) {
  return cartStore.getProductQuantity(productName)
}

function openModal(product) {
  selectedProduct.value = product
    ? JSON.parse(JSON.stringify(product))
    : { name: '', detail: '', price: '', image: '' }

  isModalOpen.value = true
}

function saveProduct(product) {
  const existingProduct = products.value.find((p) => p.name === product.name)

  if (existingProduct) {
    productStore.editProduct(product)
  } else {
    productStore.addProduct(product)
    products.value = [...products.value, product]
  }

  isModalOpen.value = false
}

function openConfirmModal(productName) {
  productToDelete.value = productName
  isConfirmModalOpen.value = true
}

function confirmRemoveProduct() {
  if (productToDelete.value !== null) {
    productStore.removeProduct(productToDelete.value)
  }
  closeConfirmModal()
}

function closeConfirmModal() {
  isConfirmModalOpen.value = false
}
</script>
