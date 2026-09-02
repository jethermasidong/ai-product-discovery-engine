<template>
  <div v-if="show" class="flex gap-[0.8rem] transition-all duration-400">
    
    <div 
      class="h-4 w-4 rounded-full bg-red-900 shadow-[inset_2px_2px_10px_black] dot-animate"
    ></div>
    
    <div 
      class="h-4 w-4 rounded-full bg-red-900 shadow-[inset_2px_2px_10px_black] dot-animate [animation-delay:200ms]"
    ></div> 
    
    <div 
      class="h-4 w-4 rounded-full bg-red-900 shadow-[inset_2px_2px_10px_black] dot-animate [animation-delay:400ms]"
    ></div>

  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean;
}>();
</script>

<style scoped>
.dot-animate {
  animation: brighten 1.2s infinite alternate ease-in-out;
}

@keyframes brighten {
  0% {
    background-color: #7f1d1d; 
    box-shadow: inset 2px 2px 10px black;
  }
  100% {
    background-color: rgb(165, 165, 165);
    box-shadow: none;
  }
}
</style>