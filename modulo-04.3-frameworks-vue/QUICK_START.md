# 🍽️ Meal Planner - Guía de Inicio Rápido

## 📦 Lo Que Se Ha Implementado

### ✨ Características Básicas Requeridas

- ✅ **Formulario de Agregar Platos**
  - Campo de texto para el nombre del plato
  - Selector de día de la semana
  - Botón "Agregar"
  - Auto-limpieza del formulario después de agregar

- ✅ **Vista Principal de Platos**
  - Muestra días de la semana con platos planificados
  - Cada plato tiene botón de eliminar
  - Interface limpia y organizada

- ✅ **Gestión de Estado con Pinia**
  - Store centralizado para todos los platos
  - Acciones para agregar, eliminar, editar
  - Estado reactivo

- ✅ **Vue Router con 2+ Vistas**
  - Vista "Plan Semanal" (página principal)
  - Vista "Platos Favoritos"
  - Vista "Configuración"

- ✅ **Estructura de Componentes**
  - `MealForm.vue` - Formulario de entrada
  - `DayCard.vue` - Tarjeta de día
  - `EditMealModal.vue` - Modal de edición
  - `App.vue` - Componente raíz con navegación

---

### 🌟 Características Avanzadas Implementadas

1. **💾 Persistencia de Estado**
   - Usando `pinia-plugin-persistedstate`
   - Datos se guardan automáticamente en localStorage
   - Los datos persisten después de cerrar y reabrir el navegador

2. **✏️ Edición de Platos**
   - Modal para editar nombre, día y categoría
   - Cambios se guardan en tiempo real

3. **🔍 Búsqueda y Filtros**
   - Búsqueda por nombre de plato
   - Filtro por categoría (Desayuno, Comida, Cena)
   - Filtros funcionan en tiempo real

4. **🏆 Vista de Platos Favoritos**
   - Mostrar platos ordenados por frecuencia
   - Medallas (🥇🥈🥉) para top 3
   - Gráficos de barras de popularidad
   - Estadísticas de uso

5. **📤 Exportar Menú**
   - Exporta el menú a texto formateado
   - Se copia automáticamente al portapapeles
   - Listo para imprimir

6. **📊 Estadísticas**
   - Total de platos planificados
   - Días con comidas planificadas
   - Promedio de platos por día
   - Platos únicos

7. **🗑️ Limpiar Todo**
   - Botón para eliminar todos los platos
   - Confirmación de seguridad

8. **🎨 Diseño Moderno**
   - Tailwind CSS para estilos
   - Responsive design (móvil, tablet, desktop)
   - Gradientes y animaciones
   - Emojis para mejor UX

9. **⚙️ Página de Configuración**
   - Información de la app
   - Estadísticas rápidas
   - Zonas de peligro (limpiar/restablecer)
   - Ayuda y características

---

## 🚀 Primeros Pasos

### 1. Instalar Dependencias

cd lemoncode-master\modulo-04.3-frameworks-vue
npm install

### 2. Ejecutar en Desarrollo

npm run dev

El servidor iniciará en `http://localhost:5173/`

### 3. Compilar para Producción

npm run build

Esto creará una carpeta `dist/` lista para desplegar.

## 📁 Estructura del Proyecto

modulo-04.3-frameworks-vue/
├── src/
│ ├── components/
│ │ ├── MealForm.vue # Formulario para agregar platos
│ │ ├── DayCard.vue # Tarjeta de día con comidas
│ │ └── EditMealModal.vue # Modal para editar
│ ├── stores/
│ │ └── mealStore.ts # Pinia store principal
│ ├── views/
│ │ ├── WeeklyPlan.vue # Vista principal
│ │ ├── FavoriteMeals.vue # Vista de favoritos
│ │ └── Settings.vue # Vista de configuración
│ ├── router/
│ │ └── index.ts # Configuración de rutas
│ ├── App.vue # Componente raíz
│ ├── main.ts # Punto de entrada
│ ├── main.css # Estilos globales
│ └── env.d.ts # Definiciones TypeScript
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md
└── .gitignore

---

## 🔧 Comandos Disponibles

npm run dev # Ejecutar servidor de desarrollo
npm run build # Compilar para producción
npm run preview # Vista previa de la build
npm list # Ver dependencias instaladas

## 📱 Características de Responsividad

- ✅ Teléfono (< 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (> 1024px)

## 📚 Recursos Útiles

- [Vue 3 Docs](https://vuejs.org/)
- [Pinia Docs](https://pinia.vuejs.org/)
- [Vue Router Docs](https://router.vuejs.org/)
- [Tailwind Docs](https://tailwindcss.com/)
- [Vite Docs](https://vitejs.dev/)

---
