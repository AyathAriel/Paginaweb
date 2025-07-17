# Design Document

## Overview

El problema de 404 Not Found se debe a una configuración incorrecta de deployment. El proyecto tiene una configuración híbrida problemática con tanto Next.js como Astro, lo que está causando conflictos en el build y deployment. La aplicación principal está construida con Next.js pero hay archivos de configuración de Astro que pueden estar interfiriendo.

## Architecture

### Current State Analysis
- **Framework Principal**: Next.js 15.2.4 con App Router
- **Problema Identificado**: Configuración híbrida con Astro causando conflictos
- **Build Output**: Probablemente generando archivos en ubicaciones incorrectas
- **Deployment Target**: Static export requerido para hosting estático

### Target Architecture
- **Framework**: Next.js puro sin Astro
- **Build Configuration**: Static export optimizado
- **Deployment**: Archivos estáticos servidos correctamente
- **Routing**: App Router de Next.js manejando todas las rutas

## Components and Interfaces

### 1. Build Configuration
- **next.config.mjs**: Configuración para static export
- **package.json**: Scripts de build optimizados
- **Removal**: Eliminación de configuración de Astro

### 2. Static Export Setup
- **Output**: Directorio `out/` con archivos estáticos
- **Routing**: Configuración de trailing slashes y redirects
- **Assets**: Optimización de imágenes para static export

### 3. Deployment Structure
```
out/
├── index.html (página principal)
├── nosotros/
│   └── index.html
├── servicios/
│   └── index.html
├── proyectos/
│   └── index.html
├── contacto/
│   └── index.html
├── _next/ (assets de Next.js)
└── static/ (archivos estáticos)
```

## Data Models

### Build Configuration Model
```typescript
interface NextConfig {
  output: 'export'
  trailingSlash: boolean
  images: {
    unoptimized: boolean
  }
  eslint: {
    ignoreDuringBuilds: boolean
  }
  typescript: {
    ignoreBuildErrors: boolean
  }
}
```

### Deployment Configuration
```typescript
interface DeploymentConfig {
  buildCommand: string
  outputDirectory: string
  nodeVersion: string
  environmentVariables: Record<string, string>
}
```

## Error Handling

### Build Errors
- **Astro Conflicts**: Remover completamente la configuración de Astro
- **Import Errors**: Verificar que todas las importaciones sean válidas para Next.js
- **Static Assets**: Asegurar que las rutas de assets sean correctas

### Runtime Errors
- **404 Handling**: Configurar página 404 personalizada
- **Route Fallbacks**: Implementar redirects para rutas no encontradas
- **Asset Loading**: Verificar que todos los recursos se carguen correctamente

## Testing Strategy

### Build Testing
1. **Local Build**: Verificar que `npm run build` funcione sin errores
2. **Static Export**: Confirmar que se genere el directorio `out/`
3. **File Structure**: Validar que todas las páginas tengan sus archivos HTML

### Deployment Testing
1. **Local Server**: Servir archivos estáticos localmente
2. **Route Testing**: Verificar que todas las rutas funcionen
3. **Asset Loading**: Confirmar que CSS, JS e imágenes se carguen
4. **Mobile Testing**: Verificar responsividad en dispositivos móviles

### Production Testing
1. **Domain Access**: Verificar que el dominio principal cargue
2. **Navigation**: Probar navegación entre todas las páginas
3. **Performance**: Verificar tiempos de carga
4. **SEO**: Confirmar que meta tags y sitemap funcionen

## Implementation Approach

### Phase 1: Configuration Cleanup
- Remover configuración de Astro
- Limpiar dependencias no utilizadas
- Configurar Next.js para static export

### Phase 2: Build Optimization
- Actualizar next.config.mjs
- Modificar scripts de package.json
- Configurar optimización de assets

### Phase 3: Deployment Setup
- Generar build estático
- Verificar estructura de archivos
- Configurar servidor para servir archivos estáticos

### Phase 4: Testing & Validation
- Probar build localmente
- Validar todas las rutas
- Verificar funcionalidad completa