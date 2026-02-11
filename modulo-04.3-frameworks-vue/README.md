# 🍽️ Meal Planner App - Vue 3

Una aplicación web moderna para planificar tus comidas semanales, desarrollada con Vue 3, Pinia y Tailwind CSS.

## ✨ Características

### Características Básicas ✅

- 📋 **Formulario de Agregar Platos**: Fácil interfaz para añadir nuevos platos
- 📅 **Vista Semanal**: Visualiza tus comidas organizadas por día
- 🗑️ **Eliminar Platos**: Borra platos de tu plan semanal
- 🎯 **Estado Global con Pinia**: Gestión centralizada del estado
- 🔄 **Limpieza Automática**: El formulario se limpia después de añadir un plato

### Características Avanzadas 🌟

- 🛣️ **Vue Router**: Navegación con múltiples vistas
  - Plan Semanal
  - Platos Favoritos
  - Configuración
- 💾 **Persistencia**: Datos guardados automáticamente en localStorage
- ✏️ **Editar Platos**: Modifica nombre, día y categoría
- 🔍 **Búsqueda y Filtros**: Busca platos por nombre o filtra por categoría
- 🏆 **Platos Favoritos**: Descubre qué platos planificas más frecuentemente
- 📤 **Exportar Menú**: Copia tu menú semanal al portapapeles
- 📊 **Estadísticas**: Visualiza métricas sobre tu planificación
- 📱 **Responsive Design**: Funciona perfectamente en móviles
- 🎨 **Interfaz Moderna**: Diseño limpio con Tailwind CSS

## 🛠️ Stack Tecnológico

- **Vue 3**: Framework progresivo
- **TypeScript**: Tipado estático
- **Pinia**: Gestión de estado
- **Vue Router**: Enrutamiento
- **Tailwind CSS**: Estilos utilitarios
- **Vite**: Build tool moderno
- **pinia-plugin-persistedstate**: Persistencia automática

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

## 🚀 Instalación y Ejecución

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Ejecutar en Desarrollo

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

### 3. Compilar para Producción

```bash
npm run build
```

### 4. Vista Previa de Producción

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── MealForm.vue        # Formulario para añadir platos
│   ├── DayCard.vue         # Tarjeta de día con platos
│   └── EditMealModal.vue   # Modal para editar platos
├── stores/             # Pinia stores
│   └── mealStore.ts       # Store principal de platos
├── views/              # Vistas principales
│   ├── WeeklyPlan.vue      # Vista del plan semanal
│   ├── FavoriteMeals.vue   # Vista de platos favoritos
│   └── Settings.vue        # Vista de configuración
├── router/             # Configuración de Vue Router
│   └── index.ts           # Definición de rutas
├── App.vue            # Componente raíz
├── main.ts            # Punto de entrada
└── main.css           # Estilos globales
```

## 🎯 Cómo Usar

### Agregar un Plato

1. Ve a la sección "Plan Semanal"
2. Completa el formulario con:
   - Nombre del plato
   - Día de la semana
   - Categoría (Desayuno, Comida, Cena)
3. Haz clic en "Agregar Plato"

### Editar un Plato

1. Haz clic en el icono de editar (✏️) en cualquier plato
2. Modifica los datos en el modal
3. Haz clic en "Guardar"

### Eliminar un Plato

1. Haz clic en el icono de papelera (🗑️)
2. Confirma la eliminación

### Buscar y Filtrar

1. Usa la barra de búsqueda para encontrar platos por nombre
2. Usa el selector de categoría para filtrar por tipo de comida

### Ver Platos Favoritos

1. Navega a la sección "Favoritos"
2. Verás un ranking de los platos más planificados
3. Incluye estadísticas de uso

### Exportar Menú

1. En la vista semanal, haz clic en el botón "Exportar"
2. El menú se copiará al portapapeles
3. Puedes pegarlo en cualquier lugar para imprimir

### Configuración

1. Navega a "Configuración"
2. Ver información de la app y estadísticas rápidas
3. Opcionalmente, limpiar todo el plan o restablecer la app

## 🎨 Personalización

### Cambiar Colores

Edita los colores en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#10b981',      // Color verde principal
      secondary: '#8b5cf6',    // Color púrpura secundario
    },
  },
}
```

### Cambiar Días de la Semana

Edita el array `dayOrder` en `src/stores/mealStore.ts`

### Cambiar Categorías

Edita el array `categories` en `src/stores/mealStore.ts`

## 💾 Almacenamiento de Datos

Los datos se guardan automáticamente en `localStorage` del navegador gracias a `pinia-plugin-persistedstate`. Esto significa:

- ✅ Los datos persisten incluso después de cerrar el navegador
- ✅ No requiere backend
- ✅ Totalmente privado en el navegador del usuario

## 🔒 Privacidad

Esta aplicación:

- 🔐 Almacena todos los datos SOLO en tu navegador
- 🔐 No envía información a servidores externos
- 🔐 No recopila datos personales
- 🔐 Funciona completamente offline después de cargar

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Navegadores móviles modernos

## 🚀 Mejoras Futuras

- [ ] Integración con base de datos para sincronización en nube
- [ ] Compartir planes con otros usuarios
- [ ] Generación automática de lista de compras
- [ ] Integración con APIs de recetas
- [ ] Historial de planes anteriores
- [ ] Temas oscuro/claro
- [ ] Internacionalización (i18n)

## 📝 Notas Técnicas

### Estado Reactivo

El store de Pinia utiliza `ref` para mantener la reactividad de los datos:

```typescript
const meals = ref<Meal[]>([])
```

### Componentes Compilables

Todos los componentes `.vue` son compilados automáticamente por Vite, sin necesidad de configuración adicional.

### TypeScript

El proyecto incluye tipo completo para:

- Interfaz `Meal`
- Props de componentes
- Emits
- Store actions

---
