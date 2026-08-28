<template>

  <header class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl">
    
    <div class="flex items-center justify-between px-6 py-2">
      
        <router-link to="/" class="text-xl font-bold text-white tracking-tight">
            <img src="/logo.png" alt="logo" class="w-13 h-14">
        </router-link>

    <div class="flex items-center justify-center gap-5">
      <router-link to="/category-page" class="inline-flex items-center justify-center rounded uppercase px-6.25 text-white h-10 text-sm leading-3.5 tracking-[1.2px] transition-all duration-200 delay-100 bg-linear-to-r from-[#1c1c1c] to-red-600 border-0 overflow-hidden cursor-pointer hover:duration-300 hover:ease-in hover:delay-0 hover:px-7.5 [clip-path:polygon(0_0,0_0,100%_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,15px_100%,0_100%)]">
          Get Started
      </router-link>
      <a href="" class="hover:text-red-700">
        <ion-icon name="notifications-circle-outline" class="text-4xl"></ion-icon>
      </a>
    </div>

    </div>
  </header>
</template>

<script setup lang="ts">

</script>