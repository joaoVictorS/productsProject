import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Product } from '@/core/models/product.model';

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Array<Product & { quantity: number }>>([]);

  function addToCart(product: Product) {
    const existingProduct = cart.value.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  }

  function increaseQuantity(productName: string) {
    const productIndex = cart.value.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
      cart.value[productIndex] = { ...cart.value[productIndex], quantity: cart.value[productIndex].quantity + 1 };
      cart.value = [...cart.value]; // 🔹 Garante a reatividade do Vue
    }
  }

  function decreaseQuantity(productName: string) {
    const product = cart.value.find(item => item.name === productName);
    if (product) {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        removeFromCart(productName);
      }
    }
  }

  function removeFromCart(productName: string) {
    cart.value = cart.value.filter(item => item.name !== productName);
  }

  function getProductQuantity(productName: string) {
    const item = cart.value.find(p => p.name === productName);
    return item ? item.quantity : 0;
  }

  const cartTotal = computed(() =>
    cart.value.reduce((total, item) => total + Number(item.price) * item.quantity, 0).toFixed(2)
  );

  return { cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, getProductQuantity, cartTotal };
});
