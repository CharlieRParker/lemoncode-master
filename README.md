# Lemoncode - Máster Front End XVIII
Monorepo con todos los laboratorios y ejercicios del Máster Front End XVIII de Lemoncode.
## Estructura del Monorepo
Este proyecto utiliza npm workspaces para organizar múltiples módulos:
```
lemoncode-master/
├── modulo-01-layout/           # Módulo 1: Maquetación y CSS
├── modulo-02-lenguajes/        # Módulo 2: JavaScript y TypeScript
├── modulo-03-bundling/         # Módulo 3: Empaquetado con Webpack/Vite
├── modulo-04.1-frameworks-react/    # Módulo 4.1: React
├── modulo-04.2-frameworks-angular/  # Módulo 4.2: Angular
└── modulo-04.3-frameworks-vue/      # Módulo 4.3: Vue
```
## Configuración Global
El proyecto cuenta con las siguientes herramientas configuradas a nivel raíz:
- **ESLint**: Linting de JS/TS con soporte para React
- **Prettier**: Formateador de código
- **TypeScript**: Soporte para TypeScript en todo el monorepo
- **EditorConfig**: Consistencia entre editores
## Scripts Disponibles
- `npm run lint` - Ejecuta ESLint en todos los archivos
- `npm run lint:fix` - Corrige automáticamente los errores de linting
- `npm run format` - Formatea todos los archivos con Prettier
- `npm run format:check` - Verifica el formato sin aplicar cambios
- `npm run type-check` - Verifica tipos con TypeScript
## Instalación y Setup
See [CONTRIBUTING.md](./CONTRIBUTING.md) para instrucciones detalladas de setup y desarrollo.
