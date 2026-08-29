<template>
  <transition name="fade">
    <div 
      v-if="show" 
      class="fixed inset-0 z-60 flex items-center justify-center bg-white/50 backdrop-blur-sm px-4"
      @click.self="closeModal"
    >
      <div class="bg-white/90 border border-black p-6 rounded-2xl w-full max-w-sm shadow-2xl shadow-red-500/10 text-center relative">
        
        <div class="text-red-700 mb-3 flex justify-center">
          <ion-icon name="warning-outline" class="text-5xl"></ion-icon>
        </div>
        
        <h3 class="text-xl font-bold text-black mb-2">Action Failed</h3>
        <p class="text-black/90 text-sm mb-6">{{ message }}</p>
        
        <button 
          @click="closeModal" 
          class="w-full py-2 rounded-xl border border-black/50 text-red-500 font-bold hover:bg-red-700 hover:text-white transition-colors cursor-pointer"
        >
          Okay
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean;
  message: string;
}>();

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>