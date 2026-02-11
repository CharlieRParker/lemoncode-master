import { createRouter, createWebHistory } from 'vue-router'
import WeeklyPlan from '../views/WeeklyPlan.vue'
import FavoriteMeals from '../views/FavoriteMeals.vue'
import Settings from '../views/Settings.vue'

const routes = [
    {
        path: '/',
        name: 'WeeklyPlan',
        component: WeeklyPlan
    },
    {
        path: '/favorites',
        name: 'FavoriteMeals',
        component: FavoriteMeals
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
