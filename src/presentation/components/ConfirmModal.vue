<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
      <p>{{ message }}</p>

      <div class="flex justify-end mt-4">
        <button @click="emit('cancel')" class="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500">
          Cancelar
        </button>
        <button @click="emit('confirm')" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ml-2">
          Confirmar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  title: String,
  message: String
});

const emit = defineEmits(['confirm', 'cancel']);
</script>
