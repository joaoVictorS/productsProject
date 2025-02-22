<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-bold mb-4">{{ isEditing ? 'Editar Produto' : 'Criar Novo Produto' }}</h2>
  
        <input v-model="productForm.name" placeholder="Nome" class="border p-2 w-full mb-2" />
        <input v-model="productForm.detail" placeholder="Detalhe" class="border p-2 w-full mb-2" />
        <input v-model="productForm.price" type="number" placeholder="Preço" class="border p-2 w-full mb-2" />
  
        <!-- 🔹 Upload de Imagem -->
        <label class="block text-sm font-medium text-gray-700">Imagem do Produto</label>
        <input type="file" @change="handleImageUpload" accept="image/*" class="border p-2 w-full mb-2" />
  
        <!-- 🔹 Pré-visualização da Imagem -->
        <div v-if="productForm.image" class="mt-2">
          <img :src="productForm.image" alt="Preview" class="w-full h-32 object-cover rounded-lg" />
        </div>
  
        <div class="flex justify-end mt-4">
          <button @click="$emit('close')" class="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500">
            Cancelar
          </button>
          <button @click="saveProduct" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ml-2">
            {{ isEditing ? 'Atualizar' : 'Criar' }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue';
  
  const props = defineProps(['product']);
  const emit = defineEmits(['close', 'save']);
  
  const productForm = ref({ ...props.product });
  const isEditing = ref(false);
  
  watchEffect(() => {
    productForm.value = { ...props.product };
    isEditing.value = !!props.product.id;
  });
  
  function saveProduct() {
    emit('save', { ...productForm.value });
  }
  
  function handleImageUpload(event) {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        productForm.value.image = reader.result;
      };
    }
  }
  </script>
  