# Guía de Contribución - Lemoncode Master Frontend

## Setup Inicial

### Requisitos
- Node.js 16+ 
- npm 8+ (para soporte de workspaces) o yarn/pnpm

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd lemoncode-master

# Instalar dependencias de todos los módulos
npm install
```

## Estructura de Módulos

Cada módulo sigue una estructura consistente:

```
modulo-XX-nombre/
├── package.json          # Dependencias específicas del módulo
├── README.md            # Documentación del módulo
├── src/                 # Código fuente (si aplica)
└── [otros archivos específicos del módulo]
```

## Estándares de Código

### ESLint
El proyecto utiliza ESLint para mantener la calidad del código:

```bash
# Verificar linting en todos los archivos
npm run lint

# Corregir automáticamente errores
npm run lint:fix
```

### Prettier
Prettier se encarga del formateo consistente:

```bash
# Formatear todos los archivos
npm run format

# Verificar formato sin cambios
npm run format:check
```

### TypeScript
Se verifica la integridad de tipos:

```bash
# Verificar tipos
npm run type-check
```

## Flujo de Trabajo

1. **Crear una rama** para tu cambio:
   ```bash
   git checkout -b feature/descripcion-cambio
   ```

2. **Realizar cambios** en el módulo correspondiente

3. **Verificar calidad de código**:
   ```bash
   npm run lint:fix
   npm run format
   npm run type-check
   ```

4. **Hacer commit**:
   ```bash
   git add .
   git commit -m "feat: descripción del cambio"
   ```

5. **Hacer push y crear PR**:
   ```bash
   git push origin feature/descripcion-cambio
   ```

## Módulos Disponibles

### Módulo 1 - Layout
Maquetación y CSS (HTML, SCSS, CSS)
- Laboratorios básicos
- Laboratorios avanzados
- Ejercicios extras

### Módulo 2 - Lenguajes
JavaScript y TypeScript
- Operaciones con arrays
- Operaciones con objetos
- Búsqueda y manipulación de datos
- Clases y POO

### Módulo 3 - Bundling
Herramientas de empaquetado (Webpack, Vite, etc.)

### Módulo 4.1 - React
Laboratorios de React
- Componentes funcionales
- Hooks
- State management

### Módulo 4.2 - Angular
Laboratorios de Angular
- Componentes
- Servicios
- Módulos

### Módulo 4.3 - Vue
Laboratorios de Vue
- Single File Components
- Composables
- Estado reactivo

## Convenciones de Commit

Utilizamos Conventional Commits:

```
type(scope): subject

body

footer
```

Tipos:
- `feat`: Nueva funcionalidad
- `fix`: Corrección de errores
- `docs`: Cambios en documentación
- `style`: Formateo de código
- `refactor`: Refactorización de código
- `test`: Adición o cambios en tests

Ejemplo:
```
feat(modulo-02): implementar función de búsqueda en array

Agrega la función find para buscar elementos en arrays
```

## Antes de Hacer Commit

Asegúrate de ejecutar:

```bash
npm run lint:fix
npm run format
npm run type-check
```

## Preguntas o Dudas

Consulta la documentación específica de cada módulo en su archivo README.md

