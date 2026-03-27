# 🚀 Quick Start - Portal de Alquiler Vacacional

Guía rápida para ejecutar ambas aplicaciones localmente.

## 📋 Pre-requisitos

- Node.js 18.17+ instalado
- npm o yarn disponible
- Git instalado (opcional, para versionado)

## ⚡ Quick Start (5 minutos)

### Opción 1: Solo Next.js

```bash
cd nextjs-rental
npm install
npm run dev
```

Abre http://localhost:3000

### Opción 2: Solo Nuxt

```bash
cd nuxt-rental
npm install
npm run dev
```

Abre http://localhost:3000 (o el puerto que indique la terminal)

### Opción 3: Ambas aplicaciones simultáneamente

**Terminal 1** - Next.js:

```bash
cd nextjs-rental
npm install
npm run dev
```

**Terminal 2** - Nuxt:

```bash
cd nuxt-rental
npm install
npm run dev -- --port 3001
```

Abre:

- http://localhost:3000 (Next.js)
- http://localhost:3001 (Nuxt)

## 📝 Mock API Setup

Las aplicaciones esperan datos de un servidor. Hay dos opciones:

### Opción A: Mock API Local (Recomendado para testing)

Ver [SETUP_API.md](./SETUP_API.md) para instrucciones completas.

### Opción B: Usar datos mock inline

Edita `src/lib/api.ts` (Next.js) o `composables/useHouses.ts` (Nuxt) para retornar datos mockados:

```typescript
export async function getHouses(): Promise<House[]> {
  // Datos mockados en lugar de fetch
  return [
    {
      id: '1',
      name: 'Casa Rural Asturias',
      description: 'Hermosa casa con vistas a la montaña',
      location: 'Asturias, España',
      bedrooms: 4,
      bathrooms: 2,
      pricePerNight: 150,
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400',
    },
    // ... más casas
  ]
}
```

## 🎯 Features Principales

### Ambas aplicaciones incluyen:

✅ **Listado de Casas**

- Grid responsivo (mobile/tablet/desktop)
- Tarjetas con información básica
- Precio destacado

✅ **Detalle de Casa**

- Imagen completa
- Información detallada
- Botones de reserva

✅ **Navegación**

- Header sticky con branding
- Links funcionales entre páginas

✅ **Diseño Moderno**

- Tailwind CSS
- Efectos hover
- Transiciones suaves

## 📊 Diferencias Clave

| Aspecto           | Next.js                  | Nuxt                  |
| ----------------- | ------------------------ | --------------------- |
| Framework         | React                    | Vue 3                 |
| Renderizado       | SSG + ISR                | SSR                   |
| Performance       | Excelente                | Excelente             |
| DX                | Muy buena                | Muy buena             |
| Curva aprendizaje | Media (si no usas React) | Baja (si no usas Vue) |

## 🔧 Troubleshooting

### Puerto 3000 en uso

```bash
# Next.js en otro puerto
npm run dev -- -p 3001

# Nuxt en otro puerto
npm run dev -- --port 3002
```

### Módulos no encontrados

```bash
# Limpiar node_modules e instalar de nuevo
rm -rf node_modules
npm install
```

### Error de CORS

Si ves errores de CORS, asegúrate de que:

1. El mock server tiene CORS habilitado
2. La URL de la API es correcta

## 📚 Documentación Completa

- [README Principal](./README.md) - Visión general del módulo
- [README Next.js](./nextjs-rental/README.md) - Detalles de implementación
- [README Nuxt](./nuxt-rental/README.md) - Detalles de implementación
- [SETUP_API.md](./SETUP_API.md) - Configuración API completa
- [IMPLEMENTACION_COMPLETADA.md](./IMPLEMENTACION_COMPLETADA.md) - Verificación de requisitos

## 🎓 Tips de Aprendizaje

### Comprende la Diferencia de Renderización

**Next.js SSG + ISR:**

- Página prebuildeada en build time
- Ideal cuando datos no cambian frecuentemente
- Cero latencia de servidor en client

**Nuxt SSR:**

- Página renderizada en cada request
- Más flexible para datos dinámicos
- Tiempos de respuesta típicos 200-600ms

### Experimente con Ambas

1. Cambia URLs de API en ambas apps
2. Los detalles se cargarán automáticamente
3. Observa cómo se comportan diferente

### Personaliza con Tus Datos

Reemplaza las imágenes y descripción para practicar:

- Edita composables/tipos
- Agrega nuevo campos
- Actualiza UI

## 🚀 Próximos Pasos

Después de que funcione:

1. **Agrega búsqueda**

   ```vue
   <!-- Entrada en página de listado -->
   <input v-model="search" placeholder="Buscar casas..." />
   ```

2. **Agrega filtros**
   - Por precio
   - Por ubicación
   - Por número de habitaciones

3. **Agrega carrito**
   - Guardar casas favorites
   - Gestionar reservas

4. **Agrega autenticación**
   - Login/Register
   - Mi cuenta

## 📲 Deploy

### Deploy Next.js en Vercel

```bash
cd nextjs-rental
npm install -g vercel
vercel
```

### Deploy Nuxt en Netlify

```bash
cd nuxt-rental
npm install -g netlify-cli
netlify deploy
```
