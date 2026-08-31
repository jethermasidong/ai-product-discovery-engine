<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-16 mt-25">
        <h1 class="text-2xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Recommended Products
        </h1>
        <p class="mt-4 text-md text-gray-500 max-w-2xl mx-auto">
          Based on your specific needs and preferences, here are the top recommended products discovered by the AI.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div 
          v-for="(product, index) in recommendations"
          :key="index"
          class="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group">
          
          <div class="relative h-56 w-full bg-white overflow-hidden p-4">
            <div class="absolute top-6 left-6 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
              <ion-icon name="checkmark-circle" class="text-black text-lg"></ion-icon>
              {{ product.match_score }}
            </div>
            <img 
              :src="product.image || 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'"              
              :alt="product.name" 
              class="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div class="p-6 flex flex-col grow">
            <div class="mb-4 -mt-3">
              <h2 class="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                {{ product.name }}
              </h2>
            </div>

            <p class="text-sm text-gray-600 mb-6 grow line-clamp-6 leading-relaxed">
              {{ product.description }}
            </p>
            <p class="text-xs font-light text-gray-600 mb-6 grow line-clamp-6 leading-relaxed">
              Why? <br> {{ product.reason }}
            </p>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center gap-2">
                  <p class="text-xl font-mono text-black">
                    {{ product.price}}
                  </p>
              </div>
              <a :href="product.link" target="_blank" rel="noopener noreferrer" class="w-28 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-1 px-2 rounded-full transition-colors duration-200 flex justify-center items-center gap-2 focus:ring-4 focus:ring-gray-200">
                <ion-icon name="cart-outline" class="text-lg"></ion-icon>
                Check
              </a>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  </div>
</template>


<script setup lang="ts">    
import { ref, onMounted, computed } from 'vue';



interface Recommendations {
  name: string; //
  description: string; //
  price: string; // 
  link: string; 
  image: string;
  match_score: string; //
  reason: string; 
}

const recommendations = ref<Recommendations[]>([]);

onMounted(() => {
  const savedRecommendations = localStorage.getItem('generatedRecommendations');
  if (savedRecommendations) {
    try {
      const parsed = JSON.parse(savedRecommendations);
      let items = parsed.recommendations || parsed || [];
      items.sort((a: Recommendations, b: Recommendations) => parseInt(b.match_score) - parseInt(a.match_score));
      
      recommendations.value = items;

    } catch (error) {
      console.error('Failed to parse saved recommendations from local storage', error);
    }
  }
});



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

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}
</style>