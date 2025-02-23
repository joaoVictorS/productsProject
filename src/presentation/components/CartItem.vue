<template>
    <div class="flex items-center justify-between p-4 border-b">
      <img :src="item.image" alt="Produto" class="w-20 h-20 object-cover rounded-lg" />
      
      <div class="flex-1 ml-4">
        <h3 class="text-lg font-semibold">{{ item.name }}</h3>
        <p class="text-gray-600">{{ item.detail }}</p>
        <p class="text-red-500 font-bold">R$ {{ item.price }}</p>
        
        <div class="flex items-center mt-2">
          <button @click="updateQuantity(item.quantity - 1)" class="px-3 py-1 bg-gray-300 rounded-l">➖</button>
          <input type="number" v-model="item.quantity" class="w-12 text-center border" @change="updateQuantity(item.quantity)" />
          <button @click="updateQuantity(item.quantity + 1)" class="px-3 py-1 bg-gray-300 rounded-r">➕</button>
        </div>
      </div>
  
      <button @click="removeItem" class="ml-4 text-red-600 hover:text-red-800">
        ❌
      </button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({ item: Object });
  const emit = defineEmits(['updateQuantity', 'removeItem']);
  
  const updateQuantity = (quantity) => {
    emit('updateQuantity', props.item.id, quantity);
  };
  
  const removeItem = () => {
    emit('removeItem', props.item.id);
  };
  </script>
  