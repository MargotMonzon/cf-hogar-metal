import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CanaletasView from '../views/CanaletasView.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/cambio-de-canaletas',
            name: 'cambio-canaletas',
            component: CanaletasView,
        },
    ],

    scrollBehavior() {
        return {
            top: 0,
            behavior: 'smooth',
        }
    },
})

export default router