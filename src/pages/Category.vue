<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-8">

    <div class="text-center mb-10 mt-15">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
        PRODUCT CATEGORIES
      </h1>
      <p class="text-gray-500">Select a category to help the AI narrow down the best results.</p>
    </div>


    <div class="flex flex-wrap justify-center max-w-5xl mx-auto w-full">

      <div 
        v-for="category in categories" 
        :key="category.id"
        class="w-1/2 md:w-1/3 lg:w-1/5 p-2 flex"
      >
        <button 
          @click="selectCategory(category.id)"
          class="relative w-full h-64 flex flex-col items-center justify-center bg-linear-to-br from-[#1c1c1c] from-85% to-red-700 rounded-[20px] text-white transition-all duration-200 ease-in-out group cursor-pointer border-2"
          :class="selectedId === category.id ? 'border-red-500 scale-[1.04] -rotate-1 shadow-lg shadow-red-500/30' : 'border-transparent hover:scale-[1.04] hover:-rotate-1 hover:shadow-xl'"
        >
          
          <div 
            class="absolute z-10 transition-all duration-300 ease-in-out flex items-center justify-center"
            :class="selectedId === category.id 
              ? 'scale-[1.8] blur-[5px] text-blue-500/50 float-anim' 
              : 'scale-100 blur-0 text-gray-400 group-hover:scale-[1.8] group-hover:blur-[5px] group-hover:text-gray-500 group-hover:float-anim'"
          >
            <ion-icon :name="category.icon" class="text-7xl text-red-100"></ion-icon>
          </div>

          <div 
            class="relative z-20 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ease-in-out w-full px-2"
            :class="selectedId === category.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
          >
            <p class="font-bold text-lg md:text-xl text-center leading-tight">{{ category.name }}</p>
            <span class="text-xs text-gray-400 tracking-wider uppercase">Category</span>
            
            <p v-if="selectedId === category.id" class="text-sm font-bold text-red-400 mt-2">
              Selected ✓
            </p>
          </div>

        </button>
      </div>

    </div>

    <div class="mt-10 h-12">
      <transition name="fade">
        <button 
          v-if="selectedId"
          class="inline-flex items-center justify-center rounded uppercase font-bold px-8 text-white h-12 text-sm tracking-[1.2px] transition-all bg-linear-to-r from-red-600 to-red-400 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer"
        >
          Continue
          <ion-icon name="arrow-forward-outline" class="ml-2 text-lg"></ion-icon>
        </button>
      </transition>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedId = ref<number | null>(null);

const categories = ref([
  { id: 1, name: 'Tech & Gadgets', icon: 'hardware-chip-outline' },
  { id: 2, name: 'Fashion', icon: 'shirt-outline' },
  { id: 3, name: 'Home & Living', icon: 'home-outline' },
  { id: 4, name: 'Health & Beauty', icon: 'sparkles-outline' },
  { id: 5, name: 'Sports & Fitness', icon: 'barbell-outline' },
  { id: 6, name: 'Gaming', icon: 'game-controller-outline' },
  { id: 7, name: 'Automotive', icon: 'car-sport-outline' },
  { id: 8, name: 'Outdoors', icon: 'leaf-outline' },
  { id: 9, name: 'Pets', icon: 'paw-outline' },
  { id: 10, name: 'Everyday Needs', icon: 'basket-outline' }
]);

const selectCategory = (id: number) => {
  selectedId.value = id;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.float-anim {
  animation: float 3s infinite;
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}
</style>