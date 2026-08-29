<template>
  <div class="min-h-screen">
    
    <Header />
    
    <main class="bg-white">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-in-out;
}
.page-enter-from {
  opacity: 0;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}
.page-leave-to {
  opacity: 0;
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
}
</style>