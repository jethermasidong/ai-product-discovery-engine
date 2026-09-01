<template>
  <div class="min-h-screen bg-white bg-[radial-gradient(ellipse_at_bottom_left,rgba(248,113,113,0.25)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(248,113,113,0.25)_0%,transparent_55%)] text-gray-900 flex flex-col items-center justify-center p-6 sm:p-12">
    

    <section id="hero" class="w-full min-h-screen flex items-center justify-center">
      <div class="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-20 border border-dashed border-red-600/50 p-8 md:p-16 lg:p-24 rounded-xl">
        <div class="w-full md:w-1/2 flex flex-col items-start md:items-start justify-center text-center md:text-left">
          <h1 class="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter mb-4 bg-linear-to-t from-black to-red-800 bg-clip-text text-transparent">
            Shop to the next level.
          </h1>
          <p class="text-gray-500 text-lg max-w-md">
            We believe shopping shouldn't be an endless scroll of generic results. It should be a perfect connection between what you need and what actually exists.
          </p>
        </div>

        <div class="w-full md:w-1/2 flex justify-center md:justify-end">
          <div class="flex flex-col gap-5 group mx-2 cursor-pointer">
            
            <div class="w-56 sm:w-56 aspect-square items-center justify-center flex rounded-3xl border border-gray-100 shadow-lg overflow-visible">
              <img 
                src="/logo.png" 
                alt="Logo" 
                class="w-56 sm:w-60 object-contain transition-all duration-700 ease-in-out group-hover:duration-1000 cursor-pointer group-hover:scale-110 sm:group-hover:scale-125 rotate-0 group-hover:rotate-[-360deg] group-hover:-translate-y-8 group-hover:-skew-y-6 group-hover:skew-x-6"
              >
            </div>

            <div class="flex flex-row place-items-center place-content-between px-2">
              <div class="flex flex-col gap-1">
                <p class="font-bold text-xl sm:text-2xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-red-600 text-gray-800 group-hover:text-red-600 transition-colors">
                  RECOM
                </p>
                <p class="text-sm text-gray-500">AI Product Discovery Agent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="about" class="w-full min-h-screen flex items-center justify-center mt-10">
      <div class="max-w-7xl w-full mx-auto flex flex-col md:flex-col items-center justify-between gap-12 sm:gap-20 p-8 md:p-16 lg:p-24 rounded-xl">
        <div class="w-full md:w-1/2 flex flex-col items-center justify-center text-center">
          <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter mb-4 bg-linear-to-b from-black to-red-700 bg-clip-text text-transparent">
            ABOUT RECOM
          </h1>
          <p class="text-gray-500 text-lg max-w-md text-center mb-10">
            RECOM is built for pure speed. Instead of spending hours scrolling, tweaking filters, and comparing specs across dozens of tabs, you just tell us exactly what you need. In seconds, AI cuts through the clutter to deliver the exact products that fit your use case and budget. We make product discovery fast, effortless, and precise.
          </p>

          <div 
            @mouseenter="stopAutoPlay"
            @mouseleave="startAutoPlay"
            class="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 group">
            <div class="overflow-hidden rounded-3xl shadow-2xl border border-gray-100 bg-white relative aspect-video (16/9)">
              <div 
                class="flex w-full h-full transition-transform duration-700 ease-in-out"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
              >
                <div class="w-full h-full shrink-0 relative">
                  <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Tech Setup" class="w-full h-full object-cover" />
                  <div class="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/80 to-transparent p-8 pt-20">
                    <h3 class="text-white text-lg font-bold md:text-2xl">1. Tell us your needs</h3>
                    <p class="text-gray-200 mt-2 text-sm md:text-xl">Describe your workflow, budget, and exact requirements.</p>
                  </div>
                </div>

                <div class="w-full h-full shrink-0 relative">
                  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Retro Gaming" class="w-full h-full object-cover" />
                  <div class="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/80 to-transparent p-8 pt-20">
                    <h3 class="text-white text-lg md:text-2xl font-bold">2. AI Scans the Market</h3>
                    <p class="text-gray-200 mt-2 text-sm md:text-xl">Our engine instantly filters thousands of products down to the best few.</p>
                  </div>
                </div>

                <div class="w-full h-full shrink-0 relative">
                  <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Shopping Cart" class="w-full h-full object-cover" />
                  <div class="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/80 to-transparent p-8 pt-20">
                    <h3 class="text-white text-lg md:text-2xl font-bold">3. Perfect Match</h3>
                    <p class="text-gray-200 mt-2 text-sm md:text-xl">Review your highly-curated matches and shop with confidence.</p>
                  </div>
                </div>
              </div>

            </div>

            <button 
              @click="prevSlide" 
              class="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-red-600 hover:text-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 md:group-hover:opacity-100 hidden md:flex items-center justify-center focus:outline-none"
            >
              <ion-icon name="chevron-back-outline" class="text-2xl"></ion-icon>
            </button>

            <button 
              @click="nextSlide" 
              class="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-red-600 hover:text-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 md:group-hover:opacity-100 hidden md:flex items-center justify-center focus:outline-none"
            >
              <ion-icon name="chevron-forward-outline" class="text-2xl"></ion-icon>
            </button>

            <div class="flex justify-center gap-3 mt-6">
              <button 
                v-for="index in 3" 
                :key="index"
                @click="currentSlide = index - 1"
                class="h-2.5 rounded-full transition-all duration-300 focus:outline-none"
                :class="currentSlide === index - 1 ? 'w-8 bg-red-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'"
              ></button>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section id="contacts" class="w-full min-h-screen flex items-center justify-center mt-10">
      <div class="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-20 p-8 md:p-16 lg:p-24 rounded-xl">
        <div class="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center sm:text-center tracking-tighter mb-2 bg-linear-to-t from-black to-red-800 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p class="text-gray-500 text-lg max-w-md mb-5">
            We're here to help! Questions about the website, interested about the product discovery agent, or want to provide feedback? RECOM is here to assist you.
          </p>
          <div class="align-middle items-center gap-1 justify-center flex flex-row mb-1 text-md">
            <ion-icon name="mail-outline"></ion-icon>
            <p class="text-black">Email</p>
          </div>
          <p class="italic text-red-800 mb-5 hover:text-black border px-3 rounded-xl bg-white/50">jethermasidong05@gmail.com</p>
          <div class="align-middle items-center gap-1 justify-center flex flex-row mb-1 text-md">
            <ion-icon name="call-outline"></ion-icon>
            <p class="text-black">Phone:</p>
          </div>
          <p class="italic text-red-800 mb-5 hover:text-black border px-3 rounded-xl bg-white/50">+639 151 573 470</p>
          <div class="align-middle items-center gap-1 justify-center flex flex-row mb-1 text-md">
            <ion-icon name="logo-linkedin"></ion-icon>
            <p class="text-black">LinkedIn:</p>
          </div>
          <a href="https://www.linkedin.com/in/jethermasidong/" target="_blank" rel="noopener noreferrer" class="italic text-red-800 mb-5 hover:text-black border px-3 rounded-xl bg-white/50">Jether Masidong | Developer</a>
        </div>

        <div class="w-full md:w-1/2 flex justify-center md:justify-end">
          <div class="flex flex-col gap-5 group mx-2 cursor-pointer">
            
            <div class="w-56 sm:w-86 aspect-square items-center justify-center flex rounded-3xl border border-gray-100 shadow-lg overflow-visible bg-white">
              <img 
                src="/logo.png" 
                alt="Logo" 
                class="w-56 sm:w-60 object-contain transition-all duration-700 ease-in-out group-hover:duration-1000 cursor-pointer group-hover:scale-110 sm:group-hover:scale-125 rotate-0 group-hover:rotate-[-360deg] group-hover:-translate-y-8 group-hover:-skew-y-6 group-hover:skew-x-6"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);
const totalSlides = 3;
let autoPlayTimer: ReturnType<typeof setInterval>;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};

const startAutoPlay = () => {
  autoPlayTimer = setInterval(nextSlide, 4000);
}

const stopAutoPlay = () => {
  clearInterval(autoPlayTimer);
};

onMounted(() => {
  startAutoPlay();
})

onUnmounted(() => {
  stopAutoPlay();
});

</script>


<style>

html {
  scroll-behavior: smooth;
}

</style>