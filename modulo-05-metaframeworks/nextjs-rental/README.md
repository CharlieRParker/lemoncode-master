#  Portal de Alquiler Vacacional - Next.js

Una aplicación moderna de alquiler de casas rurales construida con **Next.js 15**, **React 19**, **TypeScript** y **Tailwind CSS**.

##  Características Implementadas

###  Requisitos Principales

- **Listado de Casas Rurales**: Grid responsivo con tarjetas interactivas de todas las casas disponibles
- **Detalle de Casa Rural**: Página completa con información detallada, galería de imágenes y opciones de reserva
- **Navegación Fluida**: Enlaces bidireccionales entre listado y detalle
- **Renderizado Optimizado**:
  - **Página de Listado**: SSG (Static Site Generation) - Se preconstruye en build time
  - **Páginas de Detalle**: ISR (Incremental Static Regeneration) - Se regeneran cada hora para mantener datos frescos

###  Características Técnicas

- **Responsive Design**: Tailwind CSS con breakpoints móvil, tablet y desktop
- **Next.js Image Optimization**: Imágenes optimizadas con \
ext/image\
- **Server Components**: Renderizado en servidor para mejor SEO

##  Stack Tecnológico

- Next.js 15 (App Router)
- React 19 con Server Components
- TypeScript
- Tailwind CSS 3

##  Instalación

\\\ash
npm install
npm run dev
\\\

##  Estructura

- \src/app/page.tsx\ - Página de listado (SSG)
- \src/app/houses/[id]/page.tsx\ - Página de detalle (ISR)
- \src/components/HouseCard.tsx\ - Componente de tarjeta
- \src/lib/api.ts\ - Funciones API

##  Estrategia de Renderización

- **Listado**: SSG para máxima performance
- **Detalle**: ISR (se regenera cada hora) para mantener datos frescos
