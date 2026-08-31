<template>

  <header class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl">
    
    <div class="flex items-center justify-between px-6 py-2">
      
        <router-link to="/" class="text-xl font-bold text-white tracking-tight sm:px-6.25">
            <img src="/logo.png" alt="logo" class="w-13 h-14">
        </router-link>

      <router-link to="/" class="inline-flex items-center justify-center rounded-2xl uppercase px-6.25 text-white h-9 text-xs leading-3.5 tracking-[1.2px] transition-all duration-200 delay-100 bg-linear-to-r from-[#1c1c1c] to-red-600 border-0 overflow-hidden cursor-pointer">
          Home
      </router-link>
      

    </div>
  </header>
</template>

<script setup lang="ts">

</script>
