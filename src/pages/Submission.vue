<template>
    <div class="min-h-screen bg-white bg-[radial-gradient(ellipse_at_bottom_left,rgba(248,113,113,0.25)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(248,113,113,0.25)_0%,transparent_55%)] flex items-center justify-center p-4 sm:p-8">
        
        <div class="flex flex-col md:flex-row w-full max-w-5xl gap-6 mt-25 sm:mt-0">
            <div class="flex-1 bg-white rounded-[20px] p-8 shadow-xl shadow-black/20 border border-gray-100">
                <h2 class="text-2xl font-bold text-gray-900 mb-3">Informations / Helper</h2>
                <p class="text-sm mb-2 mt-5 flex items-center gap-1">
                    <ion-icon name="information-circle-outline" class="text-xl"></ion-icon> 
                    Description
                </p>
                <div class="flex flex-wrap gap-2 mb-3">
                    <div 
                        v-for="suggestion in suggestions" 
                        :key="suggestion.id"
                        class="relative w-fit flex bg-linear-to-br from-gray-300 to-white rounded-2xl px-3 py-1.5 overflow-hidden border border-gray-400"
                    >
                        <p class="text-xs whitespace-nowrap">{{ suggestion.description }}</p>
                    </div>
                </div>
                <p class="text-sm mb-2 mt-5 flex items-center gap-1">
                    <ion-icon name="help-circle-outline" class="text-xl"></ion-icon> 
                    Preferences
                </p>
                <div class="flex flex-wrap gap-2 mb-3">
                    <div 
                        v-for="suggested_preference in suggested_preferences" 
                        :key="suggested_preference.id"
                        class="relative w-fit flex bg-linear-to-br from-gray-300 to-white rounded-2xl px-3 py-1.5 overflow-hidden border border-gray-400"
                    >
                        <p class="text-xs whitespace-nowrap">{{ suggested_preference.description }}</p>
                    </div>
                </div>
            </div>

            <div class="flex-1 bg-white rounded-[20px] p-8 shadow-xl shadow-black/20 border border-gray-100">
                <h2 class="text-2xl font-bold text-black mb-4">Final Step:</h2>
                <form @submit.prevent="startGeneratingRecommendations" class="flex flex-col w-full max-w-120 gap-5">
                    <div class="relative flex bg-linear-to-br from-gray-300 to-white rounded-2xl p-[1.5px] overflow-hidden border border-gray-400">
                        <div class="absolute -top-2.5 -left-2.5 w-7.5 h-7.5 bg-white/30 blur-[1px] rounded-full pointer-events-none z-0"></div>
                        <div class="relative z-10 flex flex-col bg-red/50 rounded-[15px] w-full overflow-hidden">
                            <div class="relative flex">
                                <textarea
                                    id="description"
                                    name="description"
                                    v-model="description"
                                    required
                                    placeholder="Can you describe the product (Usability, Functionality and etc.)"
                                    class="bg-transparent rounded-2xl border-none w-full h-25.5 text-black font-sans text-sm font-normal p-2.5 resize-none outline-none placeholder:text-black placeholder:transition-all placeholder:duration-300 focus:placeholder:text-gray-500 [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#888] [&::-webkit-scrollbar-thumb]:rounded-[5px] hover:[&::-webkit-scrollbar-thumb]:bg-[#555] hover:[&::-webkit-scrollbar-thumb]:cursor-pointer"
                                ></textarea>
                            </div>
                            <div class="flex justify-between items-end p-2.5">
                            </div>
                        </div>
                    </div>
                    <div class="relative flex bg-linear-to-br from-gray-300 to-white rounded-2xl p-[1.5px] overflow-hidden border border-gray-400">
                        <div class="absolute -top-2.5 -left-2.5 w-7.5 h-7.5 bg-white/30 blur-[1px] rounded-full pointer-events-none z-0"></div>
                        <div class="relative z-10 flex flex-col bg-red/50 rounded-[15px] w-full overflow-hidden">
                            <div class="relative flex">
                                <textarea
                                    id="preferences"
                                    name="preferences"
                                    required
                                    v-model="preferences"
                                    placeholder="Preferences such as price, values, aesthetics and etc."
                                    class="bg-transparent rounded-2xl border-none w-full h-25.5 text-black font-sans text-sm font-normal p-2.5 resize-none outline-none placeholder:text-black placeholder:transition-all placeholder:duration-300 focus:placeholder:text-gray-500 [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#888] [&::-webkit-scrollbar-thumb]:rounded-[5px] hover:[&::-webkit-scrollbar-thumb]:bg-[#555] hover:[&::-webkit-scrollbar-thumb]:cursor-pointer"
                                ></textarea>
                            </div>
                            <div class="flex justify-between items-end p-2.5">
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="group flex p-0.5 bg-linear-to-t from-[#292929] via-red-800 to-[#292929] rounded-[10px] shadow-[inset_0_6px_2px_-4px_rgba(255,255,255,0.5)] cursor-pointer border-none outline-none transition-all duration-150 active:scale-[0.92] w-23 ml-auto">
                        <i class="flex items-center justify-center w-22.5 h-7.5 p-1.5 bg-black/10 rounded-[10px] backdrop-blur-[3px] text-[#8b8b8b]">
                            <svg viewBox="0 0 512 512" class="w-full h-full transition-all duration-300 group-hover:text-[#f3f6fd] group-hover:drop-shadow-[0_0_5px_#ffffff] group-focus:text-[#f3f6fd] group-focus:drop-shadow-[0_0_5px_#ffffff] group-focus:scale-125 group-focus:rotate-45 group-focus:-translate-x-0.5 group-focus:translate-y-px">
                                <path fill="currentColor" d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"></path>
                            </svg>
                            <p class="text-white text-sm mr-2">Submit</p>
                        </i>
                    </button>
                </form>
            </div>
        </div>
        <div 
            v-if="isLoading" 
            class="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm"
        >
            <Loading :show="isLoading" />
        </div>
        <Error :show="!!error_message" :message="error_message" @close="error_message = ''" />
    </div>
</template>


<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { generateProducts } from '../api/recommendApi.js'
import { useRouter } from 'vue-router';
import Loading from '../components/Loading.vue';
import Error from '../components/Error.vue';

const router = useRouter();

const isLoading = ref(false);
const error_message = ref('');

const suggestions = ref([
    { id: 1, description: 'What will you use it for?'},
    { id: 2, description: 'Where will you be using it?'},
    { id: 3, description: 'What problem are you trying to solve?'},
    { id: 4, description: 'What is your main goal with this item?'},
]);

const suggested_preferences = ref([
    { id: 1, description: 'Any must-have features?'},
    { id: 4, description: 'What is your ideal budget range?'},
    { id: 6, description: 'Wired, wireless, or both?'},
    { id: 2, description: 'Do you have any size or weight limits?'},
    { id: 5, description: 'Specific color or style?'},
    { id: 3, description: 'Styles or materials you prefer?'},
    { id: 7, description: 'Do you prioritize durability, looks, or performance?'},
    
]);

const category_name = ref('');
const sub_category_name = ref('');
const description = ref('');
const preferences = ref('');


onMounted(() => {
    category_name.value = localStorage.getItem('category_name') || 'category';
    sub_category_name.value = localStorage.getItem('sub_category_name') || 'sub_category';
})


const startGeneratingRecommendations = async () => {

    isLoading.value = true;

    try {
        

        const payload = {
            category: category_name.value,
            sub_category: sub_category_name.value,
            description: description.value,
            preferences: preferences.value
        }

        const response = await generateProducts(payload);

        localStorage.setItem('generatedRecommendations', JSON.stringify(response.recommendations));
        router.push('/products-page');

    } catch (error) {
        console.error("Failed to create recommendations", error);
        const errorString = String(error);
    
        if (errorString.includes('429')) {
            error_message.value = "Daily Limit Reached. You have used all free generations for today.";
        } else {
            error_message.value = "A network error occurred. Please try again.";
        }
    } finally {
        isLoading.value = false;
    }
}


</script>
