# App Asistencia Escolar - PWA

Esta es una Progressive Web App (PWA) para gestionar la asistencia de alumnos en clase.

## Características

✅ **Pasar lista** - Marca presentes, faltas y retrasos  
✅ **Histórico** - Consulta registros de días anteriores  
✅ **Descargar CSV** - Exporta las faltas y retrasos del día  
✅ **Funciona offline** - Sigue funcionando sin conexión  
✅ **Instalable en Android** - Se instala como una app nativa

## Instalación en Android

### Opción 1: Desde Chrome (recomendado)

1. Abre Chrome en tu móvil Android
2. Ve a esta URL: `https://tudominio.com` (donde esté alojada la app)
3. Espera a que aparezca el botón "Instalar" (arriba a la derecha)
4. Toca "Instalar"
5. ¡Listo! La app aparecerá en tu pantalla de inicio

### Opción 2: Menú de Chrome

1. Abre Chrome
2. Toca el menú (⋮) arriba a la derecha
3. Selecciona "Instalar app"
4. Confirma

## Archivos

- `index.html` - La app principal
- `manifest.json` - Metadatos de la PWA (nombre, icono, etc)
- `sw.js` - Service Worker (para offline y cache)
- `README.md` - Este archivo

## Cómo usar

### Tab "Pasar Lista"

1. La fecha de hoy aparece automáticamente
2. Selecciona un grupo del desplegable
3. Para cada alumno marca:
   - **P** (verde) = Presente
   - **F** (rojo) = Falta
   - **R** (naranja) = Retraso
4. Los datos se guardan automáticamente en tu móvil
5. Toca "Descargar CSV" para exportar las faltas/retrasos

### Tab "Histórico"

- Ve todos los días que has pasado lista
- Toca un día para ver los detalles de faltas y retrasos por grupo
- Los datos se guardan automáticamente

## Despliegue (para alojar la app)

Necesitas un servidor web que sirva estos archivos. Algunas opciones gratuitas:

### GitHub Pages

```bash
git init
git add .
git commit -m "Inicial"
git remote add origin https://github.com/tuusuario/asistencia.git
git push -u origin main
```

Luego en los settings de GitHub Pages, activa "GitHub Pages" y selecciona la rama "main".

### Netlify (aún más fácil)

1. Entra en netlify.com
2. Arrastra la carpeta con los archivos
3. ¡Listo! Tu app tendrá una URL pública

### Vercel

1. Entra en vercel.com
2. Conecta tu repo de GitHub o arrastra los archivos
3. Se despliega automáticamente

## Requisitos

- Navegador moderno (Chrome, Firefox, Samsung Internet)
- Conexión a internet para la primera instalación (luego funciona offline)

## Datos

Los datos de asistencia se guardan en el almacenamiento local del navegador (`localStorage`). No se envía información a ningún servidor - todo es privado en tu móvil.

Para borrar todos los datos: Ajustes > Apps > Chrome > Almacenamiento > Limpiar caché

## Licencia

Libre para usar y modificar.
