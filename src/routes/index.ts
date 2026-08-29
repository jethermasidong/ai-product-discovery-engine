 
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Category from '../pages/Category.vue';
import SubCategory from '../pages/SubCategory.vue';
import Submission from '../pages/Submission.vue';
import Products from '../pages/Products.vue';
 
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
        },
        {
            path: '/sub-category-page/:id',
            name: 'sub-category',
            component: SubCategory
        },
        {
            path: '/submission-page',
            name: 'submission',
            component: Submission
        },
        {
            path: '/products-page',
            name: 'products',
            component: Products
        }
    ]
})

export default router;