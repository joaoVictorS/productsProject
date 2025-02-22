<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100 text-gray-800">
    <!-- 🔹 Header Melhorado -->
    <nav class="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
      <!-- 🔹 Logo / Nome da Empresa -->
      <div class="text-2xl font-bold tracking-wide">
        Grupo Digi
      </div>

      <!-- 🔹 Menu de Navegação -->
      <div class="flex space-x-6">
        <RouterLink to="/" class="hover:text-yellow-300 transition">🏠 Home</RouterLink>
        <RouterLink to="/cart" class="hover:text-yellow-300 transition">🛒 Carrinho</RouterLink>
      </div>
    </nav>

    <!-- 🔹 Conteúdo Principal -->
    <main class="flex-grow container mx-auto p-6 text-center">
      <h1 class="text-3xl font-bold text-blue-600 bg-red-200 p-4">
        Tailwind CSS Funcionando! 🎉
      </h1>

      <RouterView />
    </main>

    <!-- 🔹 Rodapé -->
    <footer class="bg-gray-200 text-center p-4 mt-6">
      <p>&copy; 2024 - Minha Loja Vue 3</p>
    </footer>
  </div>
</template>
