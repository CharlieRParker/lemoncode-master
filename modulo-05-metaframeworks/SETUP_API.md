# 🔌 Guía de Configuración - Mock API

Este documento explica cómo configurar ambas aplicaciones para conectar con un servidor mock.

## 📋 Requisitos Previos

- Node.js 18.17 o superior
- npm o yarn instalado
- Un servidor mock API que proporcione los endpoints

## 🚀 Setup Rápido

### 1. Next.js (nextjs-rental)

**Paso 1**: Navegar al directorio

```bash
cd nextjs-rental
npm install
```

**Paso 2**: Configurar variables de entorno
Crear archivo `.env.local` en la raíz:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

**Paso 3**: Actualizar `src/lib/api.ts`
Reemplaza la línea:

```typescript
const API_BASE_URL = 'https://api.example.com'
```

Por:

```typescript
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com'
```

**Paso 4**: Iniciar servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

**Para Production:**

```bash
npm run build
npm run start
```

---

### 2. Nuxt (nuxt-rental)

**Paso 1**: Navegar al directorio

```bash
cd nuxt-rental
npm install
```

**Paso 2**: Configurar variables de entorno
Crear archivo `.env` en la raíz:

```env
NUXT_PUBLIC_API_URL=http://localhost:3001
```

**Paso 3**: Actualizar `composables/useHouses.ts`
Reemplaza la línea:

```typescript
const API_BASE_URL = 'https://api.example.com'
```

Por:

```typescript
const API_BASE_URL =
  process.env.NUXT_PUBLIC_API_URL || 'https://api.example.com'
```

**Paso 4**: Iniciar servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

**Para Production:**

```bash
npm run build
npm run preview
```

---

## 🔗 Endpoints Esperados

Ambas aplicaciones esperan conectar a los siguientes endpoints:

### GET `/api/houses`

**Descripción**: Obtiene la lista de todas las casas rurales disponibles

**Respuesta esperada:**

```json
[
  {
    "id": "1",
    "name": "Casa Rural en Asturias",
    "description": "Hermosa casa con amplio jardín, vistas a la montaña y cerca de pueblos tradicionales.",
    "location": "Asturias, España",
    "bedrooms": 4,
    "bathrooms": 2,
    "pricePerNight": 150,
    "image": "https://example.com/images/house1.jpg"
  },
  {
    "id": "2",
    "name": "Cabaña en Cataluña",
    "description": "Cabaña acogedora perfecta para desconectarse y disfrutar de la naturaleza.",
    "location": "Pirineos, Cataluña",
    "bedrooms": 3,
    "bathrooms": 1,
    "pricePerNight": 120,
    "image": "https://example.com/images/house2.jpg"
  }
]
```

### GET `/api/houses/:id`

**Descripción**: Obtiene los detalles de una casa específica

**Parámetros:**

- `id` (string): Identificador único de la casa

**Respuesta esperada:**

```json
{
  "id": "1",
  "name": "Casa Rural en Asturias",
  "description": "Hermosa casa con amplio jardín, vistas a la montaña y cerca de pueblos tradicionales.",
  "location": "Asturias, España",
  "bedrooms": 4,
  "bathrooms": 2,
  "pricePerNight": 150,
  "image": "https://example.com/images/house1.jpg"
}
```

---

## 📝 Estructura de Datos esperada

Cada casa debe tener la siguiente estructura:

```typescript
interface House {
  id: string // Identificador único
  name: string // Nombre de la casa
  description: string // Descripción detallada
  location: string // Ubicación (ciudad/región)
  bedrooms: number // Número de habitaciones
  bathrooms: number // Número de baños
  pricePerNight: number // Precio por noche en dólares
  image: string // URL de la imagen principal
}
```

---

## 🛠️ Configurar Mock Server Local

Si necesitas un servidor mock simple, puedes usar este ejemplo con Node.js + Express:

**Crear archivo `mock-server.js`:**

```javascript
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const houses = [
  {
    id: '1',
    name: 'Casa Rural en Asturias',
    description:
      'Hermosa casa con amplio jardín, vistas a la montaña y cerca de pueblos tradicionales.',
    location: 'Asturias, España',
    bedrooms: 4,
    bathrooms: 2,
    pricePerNight: 150,
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Cabaña en Cataluña',
    description:
      'Cabaña acogedora perfecta para desconectarse y disfrutar de la naturaleza.',
    location: 'Pirineos, Cataluña',
    bedrooms: 3,
    bathrooms: 1,
    pricePerNight: 120,
    image:
      'https://images.unsplash.com/photo-1570129477492-45ac003d2e0b?w=500&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Finca en Andalucía',
    description:
      'Finca tradicional con piscina, perfecto para familias grandes.',
    location: 'Córdoba, Andalucía',
    bedrooms: 5,
    bathrooms: 3,
    pricePerNight: 200,
    image:
      'https://images.unsplash.com/photo-1586375967514-8aae3682b20b?w=500&h=400&fit=crop',
  },
]

app.get('/api/houses', (req, res) => {
  res.json(houses)
})

app.get('/api/houses/:id', (req, res) => {
  const house = houses.find((h) => h.id === req.params.id)
  if (house) {
    res.json(house)
  } else {
    res.status(404).json({ error: 'House not found' })
  }
})

app.listen(3001, () => {
  console.log('Mock server running on http://localhost:3001')
})
```

**Instalar dependencias:**

```bash
npm install express cors
```

**Iniciar servidor:**

```bash
node mock-server.js
```

---

## 🧪 Probar la Aplicación

1. **Asegúrate de que el mock server está corriendo:**

   ```bash
   node mock-server.js
   # Output: Mock server running on http://localhost:3001
   ```

2. **En otra terminal, inicia Next.js:**

   ```bash
   cd nextjs-rental
   npm run dev
   ```

3. **En otra terminal, inicia Nuxt:**

   ```bash
   cd nuxt-rental
   npm run dev
   ```

4. **Abre los navegadores:**
   - Next.js: http://localhost:3000 (si es el primero)
   - Si Next.js tomó el puerto 3000, Nuxt usará 3001

5. **Verifica que:**
   - ✅ Se cargan las casas en el listado
   - ✅ Puedes hacer clic en una casa
   - ✅ Se muestra el detalle
   - ✅ Puedes volver al listado

---

## 🐛 Troubleshooting

### Las casas no cargan

1. Verifica que el mock server está ejecutándose
2. Revisa la consola del navegador (F12) por errores
3. Verifica que la URL de la API es correcta en `.env.local` o `.env`

### Error CORS

1. Asegúrate de que el mock server tiene `cors` habilitado
2. Verifica que el navegador permite requests ajax

### Puerto en uso

Si el puerto 3000 está en uso:

```bash
# Next.js en puerto diferente
npm run dev -- -p 3001

# Nuxt en puerto diferente
npm run dev -- --port 3002
```

---

## 📚 También de Interés

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Nuxt](https://nuxt.com/docs)
- [Express.js Guide](https://expressjs.com/en/starter/hello-world.html)

---
