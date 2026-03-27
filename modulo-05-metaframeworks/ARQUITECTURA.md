# 🏗️ Arquitectura del Proyecto

## Estructura General

```
modulo-05-metaframeworks/
├── nextjs-rental/          (Implementación React + Next.js)
├── nuxt-rental/            (Implementación Vue 3 + Nuxt)
└── Documentación
    ├── README.md
    ├── QUICK_START.md
    ├── SETUP_API.md
    ├── IMPLEMENTACION_COMPLETADA.md
    ├── INDICE.md
    └── ARQUITECTURA.md (este archivo)
```

## Flujo de Datos

### Next.js Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    USER BROWSER                         │
└────────────────────┬────────────────────────────────────┘
                     │
              ┌──────▼─────────┐
              │  NEXT.JS SSR   │
              │  (API Routes)  │
              └──────┬─────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
    ┌───▼──┐  ┌───────▼────┐  ┌──▼────┐
    │ SSG  │  │    ISR     │  │ SSR   │
    │(/)   │  │(/houses/:) │  │(api)  │
    └───┬──┘  └───────┬────┘  └──┬────┘
        │            │            │
        └────────────┼────────────┘
                     │
              ┌──────▼──────────┐
              │   API FETCH     │
              │  (External API) │
              └─────────────────┘
```

**Componentes Next.js:**

```
src/
├── app/
│   ├── layout.tsx (RootLayout con Header)
│   ├── page.tsx (Listado - SSG)
│   └── houses/[id]/page.tsx (Detalle - ISR)
├── components/
│   ├── Header.tsx (Navegación)
│   └── HouseCard.tsx (Tarjeta)
├── lib/
│   └── api.ts (Data fetching)
└── types/
    └── house.ts (Tipos)
```

### Nuxt Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    USER BROWSER                         │
└────────────────────┬────────────────────────────────────┘
                     │
              ┌──────▼─────────┐
              │   NUXT SSR     │
              │  (Node Server) │
              └──────┬─────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
    ┌───▼──────┐ ┌───▼────────┐ ┌──▼────────┐
    │ Listado  │ │  Detalle   │ │Composable │
    │(index)   │ │([id])      │ │(useHouses)│
    └───┬──────┘ └───┬────────┘ └──┬───────┬┘
        │            │             │
        └────────────┼─────────────┘
                     │
              ┌──────▼──────────┐
              │   API FETCH     │
              │  (External API) │
              └─────────────────┘
```

**Componentes Nuxt:**

```
├── pages/
│   ├── index.vue (Listado - SSR)
│   └── houses/[id].vue (Detalle - SSR)
├── components/
│   ├── Header.vue (Navegación)
│   └── HouseCard.vue (Tarjeta)
├── composables/
│   └── useHouses.ts (Lógica datos)
└── types/
    └── house.ts (Tipos)
```

## Flujo de Datos - Detallado

### Next.js: De Listado a Detalle

```
1. Usuario abre http://localhost:3000
   ↓
2. Next.js entrega HTML prebuildeado (SSG)
   ↓
3. HTML contiene lista de casas
   ↓
4. Usuario hace clic en una casa
   ↓
5. Navega a /houses/1
   ↓
6. Si es primera vez: ISR regenera la página
   Si está en caché y <3600s: se sirve del caché
   ↓
7. Usuario ve detalle de la casa
```

### Nuxt: De Listado a Detalle

```
1. Usuario abre http://localhost:3000
   ↓
2. Nuxt renderiza en servidor
   ↓
3. composable useHouses() obtiene datos
   ↓
4. Página se renderiza en servidor
   ↓
5. Se envía HTML completo + JS al cliente
   ↓
6. Cliente "hidrata" la página (Vue toma control)
   ↓
7. Usuario hace clic en una casa
   ↓
8. Vue Router navega a /houses/1
   ↓
9. useHouses retorna datos de la casa
   ↓
10. Vue actualiza el DOM
```

## Componentes Reutilizables

### HouseCard (Next.js)

```
HouseCard ({house})
├── next/link (a /houses/:id)
├── next/image (optimización)
├── Información de casa
└── Efectos de hover
```

### HouseCard (Nuxt)

```
HouseCard ({house})
├── NuxtLink (a /houses/:id)
├── NuxtImg (optimización)
├── Información de casa
└── Efectos de hover
```

## Renderización vs Performance

### Next.js SSG + ISR

```
Build Time:
  1. Genera HTML de listado
  2. Genera HTML de todas las casas (detalle)
  3. Todo preconstruido ✓ (0-5ms en servidor)

Runtime:
  - Listado: Servir HTML estático (0ms latencia)
  - Detalle: Servir HTML estático (0ms latencia)
  - ISR: Regenerar cada 3600 segundos
```

### Nuxt SSR

```
Build Time:
  1. Compila componentes
  2. Prepara código servidor
  3. Prepara código cliente

Runtime:
  1. Usuario pide página
  2. Servidor renderiza (200-600ms)
  3. Envía HTML + JS
  4. Cliente hidrata (toma control)
  5. Cliente es interactivo
```

## Integración de API

Ambas esperan esta estructura de datos:

```
GET /api/houses
├── Retorna array de casas
└── Cada casa tiene:
    ├── id (string)
    ├── name (string)
    ├── description (string)
    ├── location (string)
    ├── bedrooms (number)
    ├── bathrooms (number)
    ├── pricePerNight (number)
    └── image (string - URL)

GET /api/houses/:id
├── Retorna una casa
└── Misma estructura arriba
```

## Estilos

### CSS Stack

**Next.js:**

```
globals.css (Tailwind base)
├── @tailwind base
├── @tailwind components
└── @tailwind utilities
```

**Nuxt:**

```
nuxt.config.ts
├── Tailwind CSS module configured
└── Auto-imports de componentes
```

Ambos usan:

- Tailwind CSS 3
- Grid responsive
- Hover effects
- Transiciones suaves

## Testing & Validation

### Next.js Validation

```
✓ npm run build
  - Compila y genera SSG/ISR
  - Optimiza imágenes
  - Valida TypeScript

✓ npm run dev
  - Hot reload
  - Error overlay
```

### Nuxt Validation

```
✓ npm run build
  - Compila componentes Vue
  - Prepara codigo SSR
  - Optimiza bundle

✓ npm run dev
  - Hot reload
  - Error overlay
```

## Seguridad de Tipos

### Next.js TypeScript

```typescript
interface House {
  id: string
  name: string
  description: string
  location: string
  bedrooms: number
  bathrooms: number
  pricePerNight: number
  image: string
}

async function getHouses(): Promise<House[]>
async function getHouseById(id: string): Promise<House | null>
```

### Nuxt TypeScript

```typescript
interface House {
  id: string;
  name: string;
  description: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  pricePerNight: number;
  image: string;
}

export const useHouses = () => ({
  getHouses(): Promise<House[]>
  getHouseById(id): Promise<House | null>
})
```

## CI/CD Ready

Ambas aplicaciones pueden deployarse con:

**Next.js:**

- Vercel (1-click)
- Netlify
- Self-hosted
- Docker

**Nuxt:**

- Netlify
- Self-hosted
- Docker
- Cualquier Node.js host

```

## Escalabilidad

### Agregar Nueva Funcionalidad

**Búsqueda:**

```

1. Agregar input en página
2. Filtrar casa en composable/api
3. Actualizar resultado

```

**Filtros:**

```

1. Agregar inputs en sidebar
2. Construir query parameters
3. Pasar a API

```

**Carrito:**

```

1. Agregar state (React Context / Nuxt useState)
2. Agregar funciones add/remove
3. Persistir en localStorage

```

---

```
