<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-8">

    <div class="text-center mb-10 mt-30">
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
            <img 
              v-if="category.img" 
              :src="category.img" 
              alt="category-image" 
              class="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-lg"
            >
          </div>

          <div 
            class="relative z-20 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ease-in-out w-full px-2"
            :class="selectedId === category.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
          >
            <p class="font-bold text-lg md:text-xl text-center leading-tight bg-white/75 rounded-md text-black p-2">{{ category.name }}</p>
            
            <p v-if="selectedId === category.id" class="text-xs font-bold text-red-700 mt-2 bg-white/50 rounded-md p-2">
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
          @click="goToSubCategory"
          class="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 inline-flex items-center justify-center rounded uppercase font-bold px-8 text-white h-12 text-sm tracking-[1.2px] transition-all bg-linear-to-r from-black to-red-600 shadow-xl hover:shadow-2xl hover:shadow-red-500/40 cursor-pointer"
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
import { useRouter } from 'vue-router';
 
const router = useRouter();
const selectedId = ref<number | null>(null);

const categories = ref([
  { id: 1, name: 'Tech & Gadgets', img: '/category-icons/tech.png' },
  { id: 2, name: 'Fashion', img: '/category-icons/fashion.png' },
  { id: 3, name: 'Home & Living', img: '/category-icons/home.png' },
  { id: 4, name: 'Health & Beauty', img: '/category-icons/beauty.png' },
  { id: 5, name: 'Sports & Fitness', img: '/category-icons/fitness.png' },
  { id: 6, name: 'Gaming', img: '/category-icons/gaming.png' },
  { id: 7, name: 'Automotive', img: '/category-icons/automotive.png' },
  { id: 8, name: 'Outdoors', img: '/category-icons/outdoors.png' },
  { id: 9, name: 'Pets', img: '/category-icons/pets.png' },
  { id: 10, name: 'Everyday Needs', img: '/category-icons/everyday.png' }
]);

const selectCategory = (id: number) => {
  selectedId.value = id;
};

const goToSubCategory = () => {
    if (selectedId.value) {
      const selectedCategory = categories.value.find(cat => cat.id === selectedId.value);
      
      if (selectedCategory) {
        localStorage.setItem('category_name', selectedCategory.name);
      }

        router.push(`sub-category-page/${selectedId.value}`);
    }
};

</script>
