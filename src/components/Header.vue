<template>

  <header class="fixed top-4 inset-x-0 mx-auto z-50 w-full max-w-3xl">
    
    <div class="flex items-center justify-between px-6 py-2">
      
        <router-link to="/" class="text-xl font-bold text-white tracking-tight sm:px-5.25">
            <img src="/logo.png" alt="logo" class="w-13 h-14">
        </router-link>

      <nav class="hidden md:flex items-center justify-center gap-6 text-black text-md font-medium">
        <a href="#hero" class="hover:text-red-500 transition-colors">Home</a>
        <a href="#about" class="hover:text-red-500 transition-colors">About</a>
        <a href="#contacts" class="hover:text-red-500 transition-colors">Contact</a>
      </nav>

      <div class="flex items-center gap-3">
        <router-link to="/category-page" class="hidden sm:inline-flex items-center justify-center rounded-2xl uppercase px-5.25 text-white h-9 text-xs leading-3.5 tracking-[1.2px] transition-all duration-200 delay-100 bg-linear-to-r from-[#1c1c1c] to-red-600 border-0 overflow-hidden cursor-pointer">
            Get Started
        </router-link>
        <button @click="isOpen = !isOpen" class="md:hidden text-black text-2xl p-1 focus:outline-none flex items-center justify-center">
          <ion-icon :name="isOpen ? 'close-outline' : 'menu-outline'"></ion-icon>
        </button>
      </div>
    </div>
    <div v-if="isOpen" class="md:hidden pt-4 pb-3 border-t border-white/10 mt-2 flex flex-col gap-3 text-center bg-gray-50 rounded-xl m-10">
      <a href="#hero" @click="isOpen = false" class="text-black hover:text-red-500 py-1 font-medium">Home</a>
      <a href="#about" @click="isOpen = false" class="text-black hover:text-red-500 py-1 font-medium">About</a>
      <a href="#contacts" @click="isOpen = false" class="text-black hover:text-red-500 py-1 font-medium">Contact</a>
      
      <router-link to="/category-page" @click="isOpen = false" class="w-fit mx-auto mt-2 inline-flex items-center justify-center rounded-xl uppercase px-8 text-white h-10 text-xs font-semibold bg-linear-to-r from-neutral-800 to-red-600 shadow-sm">
        Get Started
      </router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

</script>
