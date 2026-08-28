<template>
  <div class="min-h-screen bg-white bg-[radial-gradient(ellipse_at_bottom_left,rgba(248,113,113,0.25)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(248,113,113,0.25)_0%,transparent_55%)] text-gray-900 flex items-center justify-center p-6 sm:p-12">
    
    <div class="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-40 sm:gap-20 border border-red-600/50 p-30 rounded-xl">

      <div class="w-full md:w-1/2 flex flex-col items-start justify-center">
        <h1 class="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 text-gray-900">
          Shop to the next level.
        </h1>
        <p class="text-gray-500 text-lg max-w-md">
          We believe shopping shouldn't be an endless scroll of generic results. It should be a perfect connection between what you need and what actually exists.
        </p>
      </div>

      <div class="w-full md:w-1/2 flex justify-center md:justify-end">
        <div class="flex flex-col gap-5 group mx-2 cursor-pointer">
          
          <div class="w-56 sm:w-64 aspect-square items-center justify-center flex rounded-3xl border border-gray-100 shadow-lg overflow-visible">
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
              <p class="text-sm text-gray-500">AI Product Discovery Engine</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
</script>