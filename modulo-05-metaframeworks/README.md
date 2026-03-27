# 🏡 Laboratorio de MetaFrameworks - Portal de Alquiler Vacacional

Este módulo contiene dos implementaciones completas de una aplicación de alquiler de casas rurales usando diferentes metaframeworks modernos.

## 📋 Contenido

### 1. **Next.js Implementation** (`nextjs-rental/`)

Una aplicación de alquiler de casas rurales utilizando Next.js 15 con App Router.

**Características:**

- ✅ Server Components de React para SSR óptimo
- ✅ SSG (Static Site Generation) para página de listado
- ✅ ISR (Incremental Static Regeneration) para páginas de detalle
- ✅ Next.js Image Optimization
- ✅ Tailwind CSS para estilos
- ✅ TypeScript para type safety

**Rutas:**

- `/` - Listado de casas (SSG)
- `/houses/[id]` - Detalle de casa (ISR)

**Decisión de Renderización:**

- Listado con SSG porque el contenido es relativamente estable
- Detalle con ISR para balancear performance con actualizaciones periódicas

[Leer más sobre Next.js Implementation](./nextjs-rental/README.md)

---

### 2. **Nuxt Implementation** (`nuxt-rental/`)

Una aplicación de alquiler de casas rurales utilizando Nuxt 3 con Vue 3 y SSR.

**Características:**

- ✅ SSR (Server-Side Rendering) integrado y optimizado
- ✅ Vue 3 Composition API con Composables
- ✅ Tailwind CSS para estilos
- ✅ TypeScript para type safety
- ✅ Auto-imports de componentes y composables
- ✅ NuxtImg para optimización de imágenes

**Rutas:**

- `/` - Listado de casas
- `/houses/[id]` - Detalle de casa dinámico

**Decisión de Renderización:**

- SSR por defecto en ambas páginas
- Mejor para SEO y primera carga
- Hidratación automática en cliente

[Leer más sobre Nuxt Implementation](./nuxt-rental/README.md)

---

## 🎯 Requisitos Implementados

✅ **Requisitos Principales:**

- [x] Implementación con al menos dos metaframeworks diferentes (Next.js y Nuxt)
- [x] Pantalla de listado de casas rurales
- [x] Pantalla de detalle de casa rural
- [x] Renderizado apropiado (SSG/ISR para Next.js, SSR para Nuxt)
- [x] Aplicación funcional y navegable entre páginas
- [x] Estilos compatibles con SSR (Tailwind CSS)

✅ **Características Opcionales:**

- [x] Responsive Design (mobile, tablet, desktop)
- [x] Image optimization (Next.js Image, NuxtImg)
- [x] Componentes reutilizables (HouseCard)
- [x] UI/UX profesional

## 🛠️ Stack Técnico Comparativo

| Aspecto        | Next.js                  | Nuxt                  |
| -------------- | ------------------------ | --------------------- |
| Framework      | React 19                 | Vue 3                 |
| Routing        | App Router (file-based)  | File-based            |
| SSR            | ✅ Híbrido (SSG/ISR/SSR) | ✅ SSR por defecto    |
| Image Opt      | Next/Image               | NuxtImg               |
| Styling        | CSS Modules, Tailwind    | Tailwind, Scoped CSS  |
| Type Safety    | TypeScript               | TypeScript            |
| Learning Curve | Media                    | Baja (si conoces Vue) |
| Performance    | Excelente                | Excelente             |

## 🚀 Cómo Ejecutar

### Next.js

```bash
cd nextjs-rental
npm install
npm run dev
# Abre http://localhost:3000
```

### Nuxt

```bash
cd nuxt-rental
npm install
npm run dev
# Abre http://localhost:3000
```

## 📁 Estructura General

```
modulo-05-metaframeworks/
├── nextjs-rental/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── types/
│   ├── package.json
│   ├── next.config.ts
│   └── README.md
├── nuxt-rental/
│   ├── pages/
│   ├── components/
│   ├── composables/
│   ├── types/
│   ├── app.vue
│   ├── package.json
│   ├── nuxt.config.ts
│   └── README.md
└── README.md (este archivo)
```

## 🔌 API Integration

Ambas aplicaciones están diseñadas para conectar con los siguientes endpoints:

```
GET /api/houses
Respuesta:
[
  {
    "id": "1",
    "name": "Casa Rural Tradicional",
    "description": "Hermosa casa con vistas a la montaña",
    "location": "Asturias, España",
    "bedrooms": 4,
    "bathrooms": 2,
    "pricePerNight": 150,
    "image": "https://example.com/house1.jpg"
  },
  // ... más casas
]

GET /api/houses/:id
Respuesta:
{
  "id": "1",
  "name": "Casa Rural Tradicional",
  "description": "Hermosa casa con vistas a la montaña",
  "location": "Asturias, España",
  "bedrooms": 4,
  "bathrooms": 2,
  "pricePerNight": 150,
  "image": "https://example.com/house1.jpg"
}
```

**Nota**: Reemplaza `https://api.example.com` con tu servidor mock en ambas aplicaciones.

## 📊 Decisiones Arquitectónicas

### Next.js

**Por qué SSG + ISR en lugar de SSR puro:**

1. **Listado (SSG)**: No cambia frecuentemente, mejor preconstruir
2. **Detalle (ISR)**: Datos que pueden actualizarse (precios, fotos), mejor regenerar periódicamente
3. **Rendimiento**: Mejor time-to-first-byte y menor carga de servidor

### Nuxt

**Por qué SSR en lugar de SPA:**

1. **SEO Amigable**: Contenido disponible en el servidor
2. **Mejor Performance**: Menos JavaScript en cliente
3. **Experiencia de Usuario**: Navegación más rápida
4. **Escalabilidad**: Mejor para aplicaciones complejas

## 🎓 Lecciones Aprendidas

### Next.js

- App Router es poderoso pero requiere entender Server/Client Components
- ISR es ideal para contenido semi-dinámico
- Image Optimization es un must-have para performance

### Nuxt

- Vue 3 Composition API es muy intuitivo
- Composables son más fáciles que servicios para lógica compartida
- SSR por defecto simplifica mucho la configuración

## 🔄 Comparativa de Experiencia de Desarrollo

| Tarea            | Next.js                   | Nuxt                     |
| ---------------- | ------------------------- | ------------------------ |
| Setup inicial    | Rápido                    | Rápido                   |
| Crear página     | Simple                    | Simple                   |
| Crear componente | Simple                    | Simple                   |
| Data fetching    | `getHouses()`, revalidate | `useFetch()`, composable |
| Styling          | Tailwind + CSS Modules    | Tailwind + Scoped CSS    |
| Performance      | Excelente                 | Excelente                |
| Bundle size      | Más pequeño               | Más pequeño              |

## 📈 Recomendaciones

### Usa Next.js si:

- Necesitas máxima optimización y control granular
- Planeas usar ISR o SSG híbrido
- Tu equipo prefiere React
- Necesitas Vercel como hosting

### Usa Nuxt si:

- Prefieres Vue.js
- Quieres SSR sin mucha configuración
- Necesitas DX rápida
- Tu equipo es proficiente en Vue

## 🚀 Próximas Mejoras

Para convertir esto en una aplicación de producción:

- [ ] Agregar authentication/authorization
- [ ] Implementar búsqueda y filtros avanzados
- [ ] Carrito de compra y checkout
- [ ] Sistema de reseñas y ratings
- [ ] Integración con Stripe/PayPal
- [ ] Dashboard de administrador
- [ ] Tests (unit, integration, e2e)
- [ ] CI/CD pipelines
- [ ] Monitoring y analytics

## 📚 Referencias

### Next.js

- [Next.js 15 Docs](https://nextjs.org)
- [App Router Guide](https://nextjs.org/docs/app)
- [ISR Documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating)

### Nuxt

- [Nuxt 3 Docs](https://nuxt.com)
- [Vue 3 Docs](https://vuejs.org)
- [Composables Guide](https://nuxt.com/docs/guide/concepts/composables)

## 📄 Licencia

Este proyecto es parte del laboratorio de LemonCode.

---

**¡Espero que disfrutes aprendiendo sobre estos excelentes metaframeworks!** 🚀
