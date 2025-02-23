<template>
  <div class="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
    <h1 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
      🛒 Meu Carrinho
    </h1>

    <div v-if="cart.length" class="space-y-6">
      <div
        v-for="item in cart"
        :key="item.name"
        class="flex items-center border-b pb-4 gap-4"
      >
        <!-- ✅ Imagem do Produto -->
        <img
          :src="item.image || 'https://via.placeholder.com/100'"
          alt="Imagem do Produto"
          class="w-24 h-24 object-cover rounded-lg shadow"
        />

        <div class="flex-1">
          <h2 class="text-lg font-semibold text-gray-800">{{ item.name }}</h2>
          <p class="text-sm text-gray-600">{{ item.detail }}</p>
          <p class="text-red-500 font-bold text-lg">R$ {{ parseFloat(item.price).toFixed(2) }}</p>

          <!-- ✅ Controles de Quantidade -->
          <div class="flex items-center mt-3">
            <button
              @click="decreaseQuantity(item.name)"
              class="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300 transition"
            >
              ➖
            </button>
            <span class="px-5 py-1 bg-gray-100">{{ item.quantity }}</span>
            <button
              @click="increaseQuantity(item.name)"
              class="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300 transition"
            >
              ➕
            </button>
          </div>
        </div>

        <!-- ✅ Botão de Remover -->
        <button
          @click="removeFromCart(item.name)"
          class="text-red-500 hover:text-red-700 transition"
        >
          ❌
        </button>
      </div>

      <!-- ✅ Total -->
      <div class="text-right mt-6">
        <h2 class="text-xl font-bold text-gray-800">Total: R$ {{ cartTotal }}</h2>
        <button
          class="mt-4 bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition"
        >
          Finalizar Compra
        </button>
      </div>
    </div>

    <!-- ✅ Carrinho Vazio -->
    <p v-else class="text-gray-500 text-center">Seu carrinho está vazio.</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "@/features/cart/store/cart.store";

const cartStore = useCartStore();
const cart = computed(() => cartStore.cart);
const cartTotal = computed(() => cartStore.cartTotal);

function increaseQuantity(productName) {
  cartStore.increaseQuantity(productName);
}

function decreaseQuantity(productName) {
  cartStore.decreaseQuantity(productName);
}

function removeFromCart(productName) {
  cartStore.removeFromCart(productName);
}
</script>
