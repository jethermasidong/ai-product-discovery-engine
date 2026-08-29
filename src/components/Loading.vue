
<template>
  <div v-if="show" class="flex gap-[0.8rem] transition-all duration-400">
    
    <div 
      class="h-4 w-4 rounded-full bg-red-900 shadow-[inset_2px_2px_10px_black] animate-[brighten_1.2s_infinite]"
    ></div>
    
    <div 
      class="h-4 w-4 rounded-full bg-red-900 shadow-[inset_2px_2px_10px_black] animate-[brighten_1.2s_infinite] [animation-delay:200ms]"
    ></div> 
    
    <div 
      class="h-4 w-4 rounded-full bg-red-900 shadow-[inset_2px_2px_10px_black] animate-[brighten_1.2s_infinite] [animation-delay:400ms]"
    ></div>

  </div>
</template>


<script setup lang="ts">
defineProps<{
  show: boolean;
}>();
</script>

<style scoped>
@keyframes brighten {
  100% {
    background-color: rgb(165, 165, 165);
    box-shadow: none;
  }
}
</style>