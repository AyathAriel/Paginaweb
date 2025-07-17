# Guía de Deployment - ADO CODE Technologies

## Resumen
Esta aplicación Next.js está configurada para generar archivos estáticos que pueden ser desplegados en cualquier servidor web o CDN.

## Configuración de Build

### Next.js Configuration
El archivo `next.config.mjs` está configurado para static export:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
```

### Scripts de Build
```bash
# Instalar dependencias y generar build estático
pnpm run build

# O manualmente:
pnpm install --frozen-lockfile
next build
```

## Estructura de Archivos Generados

Después del build, se genera el directorio `out/` con la siguiente estructura:

```
out/
├── index.html              # Página principal
├── 404.html               # Página de error 404
├── nosotros/
│   └── index.html         # Página "Quiénes Somos"
├── servicios/
│   └── index.html         # Página "Servicios"
├── proyectos/
│   └── index.html         # Página "Proyectos"
├── contacto/
│   └── index.html         # Página "Contacto"
├── _next/                 # Assets de Next.js (CSS, JS, etc.)
└── [archivos estáticos]   # Imágenes, favicon, etc.
```

## Deployment en Diferentes Plataformas

### 1. Netlify
1. Conecta tu repositorio de GitHub
2. Configuración de build:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `out`
   - **Node version**: `18` o superior

### 2. Vercel
1. Conecta tu repositorio
2. Vercel detectará automáticamente Next.js
3. La configuración de `output: 'export'` será respetada

### 3. GitHub Pages
1. Usa GitHub Actions para el deployment
2. El directorio `out/` debe ser publicado en la rama `gh-pages`

### 4. Servidor Web Tradicional (Apache/Nginx)
1. Sube todo el contenido del directorio `out/` al directorio raíz del servidor
2. Configura el servidor para servir `index.html` por defecto
3. Configura redirects para manejar rutas SPA

## Configuración del Servidor Web

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Habilitar compresión
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

### Nginx
```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /path/to/out;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # Configuración de cache para assets estáticos
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Compresión
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

## Variables de Entorno

No se requieren variables de entorno para el build estático, pero si necesitas configurar URLs base o APIs:

```bash
# .env.local (para desarrollo)
NEXT_PUBLIC_API_URL=https://api.tu-dominio.com

# .env.production (para producción)
NEXT_PUBLIC_API_URL=https://api.tu-dominio.com
```

## Verificación Post-Deployment

1. **Página Principal**: Verifica que `https://tu-dominio.com` cargue correctamente
2. **Navegación**: Prueba todas las rutas:
   - `/nosotros/`
   - `/servicios/`
   - `/proyectos/`
   - `/contacto/`
3. **404 Page**: Verifica que rutas inexistentes muestren la página 404 personalizada
4. **Assets**: Confirma que imágenes, CSS y JS se carguen correctamente
5. **Responsive**: Prueba en dispositivos móviles
6. **Performance**: Usa herramientas como Lighthouse para verificar rendimiento

## Troubleshooting

### Problema: Rutas no funcionan (404 en navegación)
**Solución**: Configura el servidor para servir `index.html` para rutas no encontradas

### Problema: Assets no se cargan
**Solución**: Verifica que el directorio `_next/` esté correctamente subido al servidor

### Problema: Imágenes no se muestran
**Solución**: Confirma que las imágenes en `public/` estén en el directorio raíz del servidor

### Problema: CSS no se aplica
**Solución**: Verifica que los archivos CSS en `_next/static/css/` estén accesibles

## Comandos Útiles

```bash
# Build local para testing
pnpm run build

# Servir archivos estáticos localmente para testing
npx serve out -p 3000

# Verificar que no hay errores en el build
pnpm run build 2>&1 | grep -i error
```

## Notas Importantes

1. **Trailing Slashes**: La configuración incluye `trailingSlash: true` para compatibilidad con servidores estáticos
2. **Image Optimization**: Las imágenes están configuradas como `unoptimized: true` para static export
3. **Client-Side Routing**: Next.js maneja la navegación del lado del cliente
4. **SEO**: Todas las páginas tienen metadata apropiada para SEO

## Contacto

Para soporte técnico relacionado con el deployment, contacta al equipo de desarrollo de ADO CODE Technologies.