<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-8">

    <div class="text-center mb-10 mt-30">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2 uppercase">
        {{ category_name }} Sub-Categories
      </h1>
      <p class="text-gray-500">Let's get more specific. What exactly are you looking for?</p>
    </div>

    <button @click="router.back()" class="mb-8 flex items-center text-gray-500 hover:text-red-600 transition-colors cursor-pointer font-bold uppercase text-sm tracking-wider">
      <ion-icon name="arrow-back-outline" class="mr-2 text-lg"></ion-icon>
      Back to Categories
    </button>

    <div class="flex flex-wrap justify-center max-w-6xl mx-auto w-full">
      <div 
        v-for="sub in activeSubCategories" 
        :key="sub.id"
        class="w-1/2 md:w-1/3 lg:w-1/5 p-2 flex"
      >
        <button 
          @click="selectSubCategory(sub.id)"
          class="relative w-full h-56 flex flex-col items-center justify-center bg-linear-to-br from-[#1c1c1c] from-85% to-red-700 rounded-[20px] text-white transition-all duration-200 ease-in-out group cursor-pointer border-2"
          :class="selectedSubId === sub.id ? 'border-red-500 scale-[1.04] -rotate-1 shadow-lg shadow-red-500/30' : 'border-transparent hover:scale-[1.04] hover:-rotate-1 hover:shadow-xl'"
        >

          <div 
            class="absolute z-10 transition-all duration-300 ease-in-out flex items-center justify-center"
            :class="selectedSubId === sub.id 
              ? 'scale-[1.8] blur-[5px] text-red-500/50 float-anim' 
              : 'scale-100 blur-0 text-gray-400 group-hover:scale-[1.8] group-hover:blur-[5px] group-hover:text-gray-500 group-hover:float-anim'"
          >
            <ion-icon :name="sub.icon" class="text-6xl text-red-100"></ion-icon>
          </div>

          <div 
            class="relative z-20 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ease-in-out w-full px-2"
            :class="selectedSubId === sub.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
          >
            <p class="font-bold text-lg text-center leading-tight">{{ sub.name }}</p>
            
            <p v-if="selectedSubId === sub.id" class="text-sm font-bold text-red-400 mt-2">
              Selected ✓
            </p>
          </div>

        </button>
      </div>
    </div>

    <div class="mt-10 h-12">
      <transition name="fade">
        <button 
          v-if="selectedSubId"
          @click="goToFinalPage"
          class="inline-flex items-center justify-center rounded uppercase font-bold px-8 text-white h-12 text-sm tracking-[1.2px] transition-all bg-linear-to-r from-black to-red-600 hover:shadow-lg hover:shadow-red-500/30 cursor-pointer"
        >
          Next Step
          <ion-icon name="arrow-forward-outline" class="ml-2 text-lg"></ion-icon>
        </button>
      </transition>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const selectedSubId = ref<number | null>(null);

const currentCategoryId = Number(route.params.id);

const category_name = ref('');

const subCategoryDatabase = {
  1: [ 
    { id: 101, name: 'Smartphones', icon: 'phone-portrait-outline' },
    { id: 102, name: 'Laptops & PCs', icon: 'laptop-outline' },
    { id: 103, name: 'Audio & Headphones', icon: 'headset-outline' },
    { id: 104, name: 'Wearables', icon: 'watch-outline' },
    { id: 105, name: 'Power Banks & Charging Stations', icon: 'battery-charging-outline' },
    { id: 106, name: 'Smart Home Devices', icon: 'home-outline' },
    { id: 107, name: 'USB Gadgets', icon: 'hardware-chip-outline' }, 
    { id: 108, name: 'Tech Organizers and Cable Management', icon: 'git-network-outline' },
    { id: 109, name: 'VR Gadgets', icon: 'glasses-outline' },
    { id: 110, name: 'Mobile Accessories', icon: 'extension-puzzle-outline' }
  ],
  2: [ 
    { id: 201, name: "Men's Clothing", icon: 'man-outline' },
    { id: 202, name: "Women's Clothing", icon: 'woman-outline' },
    { id: 203, name: 'Shoes & Sneakers', icon: 'footsteps-outline' },
    { id: 204, name: 'Accessories', icon: 'glasses-outline' },
    { id: 205, name: 'Watches & Jewelry', icon: 'watch-outline' },
    { id: 206, name: 'Bags & Backpacks', icon: 'bag-outline' },
    { id: 207, name: 'Activewear', icon: 'fitness-outline' },
    { id: 208, name: 'Swimwear', icon: 'water-outline' },
    { id: 209, name: 'Sleepwear & Loungewear', icon: 'moon-outline' },
    { id: 210, name: 'Kids & Baby Clothing', icon: 'happy-outline' }
  ],
  3: [ 
    { id: 301, name: 'Furniture', icon: 'bed-outline' },
    { id: 302, name: 'Kitchen & Dining', icon: 'restaurant-outline' },
    { id: 303, name: 'Bedding & Bath', icon: 'water-outline' },
    { id: 304, name: 'Home Decor', icon: 'flower-outline' },
    { id: 305, name: 'Lighting', icon: 'bulb-outline' },
    { id: 306, name: 'Storage & Organization', icon: 'archive-outline' },
    { id: 307, name: 'Home Appliances', icon: 'power-outline' },
    { id: 308, name: 'Home Office & Workspaces', icon: 'desktop-outline' },
    { id: 309, name: 'Outdoor & Garden', icon: 'leaf-outline' },
    { id: 310, name: 'Tools & Improvement', icon: 'hammer-outline' }
  ],
  4: [ 
    { id: 401, name: 'Skincare', icon: 'sparkles-outline' },
    { id: 402, name: 'Makeup & Cosmetics', icon: 'color-palette-outline' },
    { id: 403, name: 'Hair Care', icon: 'cut-outline' },
    { id: 404, name: 'Bath & Body', icon: 'water-outline' },
    { id: 405, name: 'Fragrances & Perfumes', icon: 'flower-outline' },
    { id: 406, name: 'Vitamins & Supplements', icon: 'medkit-outline' },
    { id: 407, name: 'Men\'s Grooming', icon: 'man-outline' },
    { id: 408, name: 'Oral Care', icon: 'happy-outline' },
    { id: 409, name: 'Health Monitors & Medical', icon: 'pulse-outline' },
    { id: 410, name: 'Personal Care & Hygiene', icon: 'body-outline' }
  ],
  5: [ 
    { id: 501, name: 'Cardio Equipment', icon: 'walk-outline' },
    { id: 502, name: 'Strength Training & Weights', icon: 'barbell-outline' },
    { id: 503, name: 'Yoga & Pilates', icon: 'body-outline' },
    { id: 504, name: 'Team Sports', icon: 'basketball-outline' },
    { id: 505, name: 'Racket Sports', icon: 'tennisball-outline' },
    { id: 506, name: 'Cycling Equipment', icon: 'bicycle-outline' },
    { id: 507, name: 'Running & Track', icon: 'footsteps-outline' },
    { id: 508, name: 'Combat & Martial Arts', icon: 'hand-right-outline' },
    { id: 509, name: 'Water Sports', icon: 'water-outline' },
    { id: 510, name: 'Recovery & Mobility', icon: 'medkit-outline' }
  ],
  6: [ 
    { id: 601, name: 'Console Gaming', icon: 'game-controller-outline' },
    { id: 602, name: 'PC Gaming & Rigs', icon: 'desktop-outline' },
    { id: 603, name: 'Gaming Peripherals', icon: 'hardware-chip-outline' },
    { id: 604, name: 'Gaming Headsets & Audio', icon: 'headset-outline' },
    { id: 605, name: 'Gaming Monitors & Displays', icon: 'tv-outline' },
    { id: 606, name: 'Streaming & Recording Gear', icon: 'videocam-outline' },
    { id: 607, name: 'Gaming Chairs & Desks', icon: 'body-outline' },
    { id: 608, name: 'VR & AR Gaming', icon: 'glasses-outline' },
    { id: 609, name: 'Retro & Handheld Consoles', icon: 'phone-portrait-outline' },
    { id: 610, name: 'Board Games & Tabletop', icon: 'dice-outline' }
  ],
  7: [ 
    { id: 701, name: 'Replacement Parts', icon: 'build-outline' },
    { id: 702, name: 'Car Electronics & GPS', icon: 'navigate-outline' },
    { id: 703, name: 'Interior Accessories', icon: 'car-outline' },
    { id: 704, name: 'Exterior Accessories', icon: 'car-sport-outline' },
    { id: 705, name: 'Tools & Equipment', icon: 'hammer-outline' },
    { id: 706, name: 'Car Care & Detailing', icon: 'sparkles-outline' },
    { id: 707, name: 'Oils & Fluids', icon: 'water-outline' },
    { id: 708, name: 'Tires & Wheels', icon: 'disc-outline' },
    { id: 709, name: 'Motorcycle Parts & Gear', icon: 'bicycle-outline' },
    { id: 710, name: 'Safety & Security', icon: 'shield-outline' }
  ],
  8: [ 
    { id: 801, name: 'Camping & Hiking Gear', icon: 'compass-outline' },
    { id: 802, name: 'Tents & Shelters', icon: 'home-outline' },
    { id: 803, name: 'Fishing & Tackle', icon: 'boat-outline' },
    { id: 804, name: 'Outdoor Cooking & Grills', icon: 'flame-outline' },
    { id: 805, name: 'Climbing & Mountaineering', icon: 'trail-sign-outline' },
    { id: 806, name: 'Outdoor Lighting & Torches', icon: 'flashlight-outline' },
    { id: 807, name: 'Survival & Safety Gear', icon: 'shield-checkmark-outline' },
    { id: 808, name: 'Hunting & Archery', icon: 'locate-outline' },
    { id: 809, name: 'Winter & Snow Sports', icon: 'snow-outline' },
    { id: 810, name: 'Knives & Multi-tools', icon: 'construct-outline' }
  ],
  9: [ 
    { id: 901, name: 'Dogs', icon: 'paw-outline' },
    { id: 902, name: 'Cats', icon: 'heart-outline' },
    { id: 903, name: 'Pet Food & Treats', icon: 'restaurant-outline' },
    { id: 904, name: 'Toys & Play Gear', icon: 'tennisball-outline' },
    { id: 905, name: 'Beds, Crates & Houses', icon: 'home-outline' },
    { id: 906, name: 'Collars, Leashes & Harnesses', icon: 'link-outline' },
    { id: 907, name: 'Grooming & Bathing', icon: 'sparkles-outline' },
    { id: 908, name: 'Health, Wellness & Flea Care', icon: 'medkit-outline' },
    { id: 909, name: 'Fish, Aquariums & Reptiles', icon: 'fish-outline' },
    { id: 910, name: 'Birds & Small Animals', icon: 'egg-outline' }
  ],
  10: [ 
    { id: 1001, name: 'Groceries & Pantry', icon: 'cart-outline' },
    { id: 1002, name: 'Household & Cleaning', icon: 'sparkles-outline' },
    { id: 1003, name: 'Beverages & Coffee', icon: 'cafe-outline' },
    { id: 1004, name: 'Laundry Care', icon: 'shirt-outline' },
    { id: 1005, name: 'Paper & Plastic Essentials', icon: 'cube-outline' },
    { id: 1006, name: 'Stationery & Writing', icon: 'pencil-outline' },
    { id: 1007, name: 'Education & Learning', icon: 'school-outline' },
    { id: 1008, name: 'Batteries & Basic Hardware', icon: 'flash-outline' },
    { id: 1009, name: 'Baby Essentials', icon: 'happy-outline' },
    { id: 1010, name: 'Travel & On-the-Go', icon: 'briefcase-outline' }
  ],

};

onMounted(() => {
    category_name.value = localStorage.getItem('category_name') || 'category';
})


const activeSubCategories = computed(() => {
  return subCategoryDatabase[currentCategoryId as keyof typeof subCategoryDatabase] || [];
});

const selectSubCategory = (id: number) => {
  selectedSubId.value = id;
};

const goToFinalPage = () => {
  if (selectedSubId.value) {
    const selectedSubCategory = activeSubCategories.value.find(sub_cat => sub_cat.id === selectedSubId.value);
  
    if (selectedSubCategory) {
      localStorage.setItem('sub_category_name', selectSubCategory.name);
    }

    router.push(`submission-page`);
  }
}



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