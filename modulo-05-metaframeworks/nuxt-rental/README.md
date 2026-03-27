# 🏡 Portal de Alquiler Vacacional - Nuxt

Una aplicación moderna de alquiler de casas rurales construida con **Nuxt 3**, **Vue 3**, **TypeScript** y **Tailwind CSS**.

## 🚀 Características Implementadas

### ✅ Requisitos Principales

- **Listado de Casas Rurales**: Grid responsivo con tarjetas interactivas de todas las casas disponibles
- **Detalle de Casa Rural**: Página completa con información detallada, galería de imágenes y opciones de reserva
- **Navegación Fluida**: Enlaces bidireccionales entre listado y detalle
- **Renderizado Optimizado**:
  - **SSR por defecto**: Server-Side Rendering de Nuxt proporciona excelente SEO
  - **Hidratación automática**: Transiciones suaves entre páginas
  - Composables personalizados para lógica de datos

### 📱 Características Adicionales

- **Responsive Design**: Tailwind CSS con breakpoints móvil, tablet y desktop
- **Nuxt Image**: Optimización de imágenes con `NuxtImg` componente
- **Composables**: Lógica reutilizable con `useHouses` composable
- **Auto-imports**: Componentes y composables auto-importados
- **Type Safety**: TypeScript configurado para máxima seguridad de tipos

## 🛠️ Stack Tecnológico

- **Framework**: Nuxt 3
- **UI**: Vue 3 con Composition API
- **Styling**: Tailwind CSS 3
- **Lenguaje**: TypeScript
- **SSR**: Renderizado en servidor habilitado por defecto

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para production
npm run build
npm run preview

# Generar sitio estático (SSG)
npm run generate
```

## 🎯 Estructura del Proyecto

```
├── components/
│   └── HouseCard.vue           # Tarjeta de casa reutilizable
├── composables/
│   └── useHouses.ts            # Composable para lógica de casas
├── pages/
│   ├── index.vue               # Página de listado
│   └── houses/[id].vue         # Página de detalle dinámica
├── types/
│   └── house.ts                # Interfaces TypeScript
├── app.vue                      # Componente raíz
├── nuxt.config.ts              # Configuración de Nuxt
└── tailwind.config.ts           # Configuración de Tailwind
```

## 🔌 API Integration

La aplicación se conecta a los siguientes endpoints:

```
GET /api/houses              # Obtener lista de casas
GET /api/houses/:id          # Obtener detalle de casa específica
```

## ⚡ Estrategia de Renderización

### Página de Listado (`/`)

- **Tipo**: SSR (Server-Side Rendering)
- **Ventajas**:
  - Renderización en servidor para mejor SEO
  - Contenido disponible desde el primer hit
  - Mejor para motores de búsqueda

### Páginas de Detalle (`/houses/[id]`)

- **Tipo**: SSR con dinámica de ruta
- **Ventajas**:
  - Pre-renderizado de rutas dinámicas
  - Mejor performance con `generateRouteRules()`
  - Cache inteligente en servidor

## 🎨 Componentes Principales

### HouseCard

Componente que muestra una casa en formato tarjeta:

- Imagen responsiva con `NuxtImg`
- Información básica (nombre, ubicación, habitaciones, baños)
- Precio por noche
- Link a página de detalle

### Página de Listado

- Grid responsivo (1 col móvil, 2 col tablet, 3 col desktop)
- Loading state con spinner animado
- Manejo de errores
- Mensaje de no resultados

### Página de Detalle

- Imagen a tamaño completo
- Información detallada en grid
- Botones de acción (Reservar, Guardar)
- Navegación de vuelta al listado
- Head meta dinámico por casa

## 📊 Features de Nuxt Utilizados

- **Auto-imports**: Componentes y composables importados automáticamente
- **File-based Routing**: Sistema de rutas basado en archivos
- **useHead()**: Gestión dinámica de metadatos
- **useFetch()**: Composable para data fetching
- **Computed Properties**: Propiedades reactivas computadas
- **Navigation Guards**: Metadatos de página

## 🔧 Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo (http://localhost:3000)
npm run build    # Crear build de producción
npm run preview  # Vista previa de build
npm run generate # Generar sitio completamente estático
```

## 📝 Consideraciones de Desarrollo

### ¿Por qué Nuxt?

- Framework Vue 3 con SSR integrado y optimizado
- Menos boilerplate que Next.js, más volcado a Vue
- Composables para lógica reutilizable
- Excelente para SEO gracias a SSR automático
- Community grande y ecosistema maduro

### Composables como Alternativa a Servicios

- `useHouses()` encapsula la lógica de API
- Fácil de testear y reutilizar
- Reactive por defecto
- Integración perfecta con Vue 3

## 🚀 Próximos Pasos (Opcionales)

- [ ] Agregar búsqueda y filtros de casas
- [ ] Implementar funcionalidad de reserva
- [ ] Agregar carrousel de imágenes
- [ ] Sistema de reseñas y ratings
- [ ] Integración con sistema de pagos

## 📄 Licencia

Este proyecto es parte del laboratorio de LemonCode.
