# Modulo 03 - Bundling

Este módulo contiene prácticas de bundling con Webpack y Vite.

## Estructura

- `webpack/`: Proyecto con Webpack
- `vite/`: Proyecto con Vite
- `.gitignore`: Ignora node_modules y dist

## Webpack

Proyecto con React, TypeScript, variables de entorno y análisis de bundle.

- ✅ React: "hola mundo" desarrollado con React
- ✅ TypeScript: Configurado con ts-loader
- ✅ Build de producción: `npm run build`
- ✅ Variables de entorno: APP_ENV diferente en dev/prod
- ✅ Análisis de bundle: `npm run analyze` para ver tamaños de librerías

### Comandos

- `npm install`
- `npm run build`: Construir para producción
- `npm run dev`: Construir para desarrollo
- `npm run analyze`: Analizar tamaños del bundle (abre en navegador)

## Vite

Proyecto con TypeScript que muestra un H1 estilado con CSS Modules, variables de entorno y compresión GZIP/BROTLI.

### Comandos

- `npm install`
- `npm run dev`: Servidor de desarrollo
- `npm run build`: Construir para producción
- `npm run preview`: Vista previa de producción
