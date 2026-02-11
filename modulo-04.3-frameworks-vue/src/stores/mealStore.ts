import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Meal {
    id: string
    name: string
    day: string
    category: 'Desayuno' | 'Comida' | 'Cena'
}

export const useMealStore = defineStore('meals', () => {
    const meals = ref<Meal[]>([])
    const nextId = ref(1)

    const dayOrder = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    const categories = ['Desayuno', 'Comida', 'Cena']

    // Computed properties
    const mealsByDay = computed(() => {
        const grouped: { [key: string]: Meal[] } = {}
        dayOrder.forEach(day => {
            grouped[day] = []
        })

        meals.value.forEach(meal => {
            if (grouped[meal.day]) {
                grouped[meal.day].push(meal)
            }
        })

        return dayOrder.map(day => ({
            day,
            meals: grouped[day]
        }))
    })

    const totalMeals = computed(() => meals.value.length)

    const favoriteMeals = computed(() => {
        const mealCount: { [key: string]: number } = {}
        meals.value.forEach(meal => {
            mealCount[meal.name] = (mealCount[meal.name] || 0) + 1
        })

        return Object.entries(mealCount)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
    })

    // Actions
    function addMeal(name: string, day: string, category: string) {
        const meal: Meal = {
            id: `${nextId.value}`,
            name,
            day,
            category: category as 'Desayuno' | 'Comida' | 'Cena'
        }
        meals.value.push(meal)
        nextId.value++
    }

    function removeMeal(id: string) {
        meals.value = meals.value.filter(meal => meal.id !== id)
    }

    function editMeal(id: string, name: string, day: string, category: string) {
        const meal = meals.value.find(m => m.id === id)
        if (meal) {
            meal.name = name
            meal.day = day
            meal.category = category as 'Desayuno' | 'Comida' | 'Cena'
        }
    }

    function clearAllMeals() {
        meals.value = []
    }

    function getMeal(id: string): Meal | undefined {
        return meals.value.find(m => m.id === id)
    }

    return {
        meals,
        mealsByDay,
        totalMeals,
        favoriteMeals,
        dayOrder,
        categories,
        addMeal,
        removeMeal,
        editMeal,
        clearAllMeals,
        getMeal
    }
}, {
    persist: true
})
