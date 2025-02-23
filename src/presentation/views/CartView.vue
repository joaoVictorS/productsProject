<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-6">🛒 Meu Carrinho</h1>

    <div v-if="cart.length" class="space-y-4">
      <div v-for="item in cart" :key="item.name" class="flex items-center border-b pb-2">
        <!-- ✅ Imagem do Produto no Carrinho -->
        <img
          :src="item.image || 'https://via.placeholder.com/100'"
          alt="Imagem do Produto"
          class="w-20 h-20 object-cover rounded-lg mr-4"
        />

        <div class="flex-1">
          <h2 class="text-lg font-semibold">{{ item.name }}</h2>
          <p class="text-sm text-gray-600">{{ item.detail }}</p>
          <p class="text-red-500 font-bold">R$ {{ parseFloat(item.price).toFixed(2) }}</p>

          <div class="flex items-center mt-2">
            <button @click="decreaseQuantity(item.name)" class="bg-gray-300 px-2 py-1 rounded-l">➖</button>
            <span class="px-4">{{ item.quantity }}</span>
            <button @click="increaseQuantity(item.name)" class="bg-gray-300 px-2 py-1 rounded-r">➕</button>
          </div>
        </div>

        <button @click="removeFromCart(item.name)" class="text-red-500 hover:text-red-700 ml-4">❌</button>
      </div>

      <h2 class="text-xl font-bold mt-6 text-right">Total: R$ {{ cartTotal }}</h2>
    </div>

    <p v-else class="text-gray-500 text-center">Seu carrinho está vazio.</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "@/features/cart/store/cart.store";

const cartStore = useCartStore();
const cart = computed(() => cartStore.cart);
const cartTotal = computed(() => cartStore.cartTotal);

function increaseQuantity(product) {
  cartStore.increaseQuantity(product);
}

function decreaseQuantity(productName) {
  cartStore.decreaseQuantity(productName);
}

function removeFromCart(productName) {
  cartStore.removeFromCart(productName);
}
</script>
