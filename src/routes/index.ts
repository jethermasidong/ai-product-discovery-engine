 
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Category from '../pages/Category.vue';
 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/category-page',
            name: 'category',
            component: Category
        }
    ]
})

export default router;