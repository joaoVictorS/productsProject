<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 class="text-xl font-bold mb-4">
        {{ isEditing ? '✏️ Editar Produto' : '➕ Criar Produto' }}
      </h2>

      <!-- Campos do Formulário -->
      <div class="space-y-4">
        <input
          v-model="localProduct.name"
          placeholder="Nome do Produto"
          class="w-full p-2 border rounded"
        />
        <input
          v-model="localProduct.detail"
          placeholder="Detalhes"
          class="w-full p-2 border rounded"
        />
        <input
          v-model="localProduct.price"
          type="number"
          placeholder="Preço"
          class="w-full p-2 border rounded"
        />

        <!-- 🔹 Input para Upload de Arquivo -->
        <input
          type="file"
          @change="handleImageUpload"
          accept="image/*"
          class="w-full p-2 border rounded"
        />

        <!-- 🔹 Preview da Imagem -->
        <img
          v-if="localProduct.image"
          :src="localProduct.image"
          alt="Prévia da Imagem"
          class="w-full h-40 object-cover rounded"
        />
      </div>

      <!-- Botões -->
      <div class="flex justify-end mt-4">
        <button
          @click="closeModal"
          class="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
        >
          Cancelar
        </button>
        <button
          @click="saveProduct"
          class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 ml-2"
        >
          {{ isEditing ? 'Salvar' : 'Adicionar' }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, watchEffect } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  product: Object,
})

const emit = defineEmits(['save', 'close'])

const localProduct = ref({ name: '', detail: '', price: '', image: '' })
const isEditing = ref(false)

watchEffect(() => {
  if (props.isOpen) {
    if (props.product) {
      localProduct.value = JSON.parse(JSON.stringify(props.product))
      isEditing.value = true
    } else {
      localProduct.value = { name: '', detail: '', price: '', image: '' }
      isEditing.value = false
    }
  }
})

function handleImageUpload(event) {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    localProduct.value.image = reader.result
  }
}

function saveProduct() {
  emit('save', { ...localProduct.value })
}

function closeModal() {
  emit('close')
}
</script>