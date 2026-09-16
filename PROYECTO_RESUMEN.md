# Proyecto: AsistenciApp (App PWA de Asistencia Escolar)

## Resumen Ejecutivo

App Progressive Web App (PWA) para gestionar la asistencia de alumnos en clase. Se puede instalar en Android como una app nativa. Los datos se guardan localmente en el móvil sin conexión a servidor.

**Estado:** Desplegado en GitHub Pages y en producción

**Versión actual de la app:** 0.1 (visible en la propia pantalla de inicio de la app, debajo del título)

---

## Sistema de versiones (IMPORTANTE para futuras sesiones)

A partir de la versión 0.1 (16 de septiembre de 2026), la app muestra su número de versión directamente en la pantalla de inicio: **"AsistenciApp - v. X.X · Creada por Javier Martín"**.

**Regla a seguir en cada cambio futuro:**
1. Cada vez que se haga un cambio relevante en el código, hay que **subir el número de `APP_VERSION`** en `index.html` (busca la constante `const APP_VERSION = '0.1';` cerca del principio del `<script>`).
2. El objetivo de esto es que Javier, con solo mirar la pantalla de inicio de la app instalada en su móvil, pueda saber si ya tiene la última versión desplegada o si todavía le falta actualizarse (recordemos que las PWA a veces tardan en refrescar la caché). Esto es independiente de si el último cambio funciona bien o no — solo indica qué versión de código tiene cargada.
3. Incrementos pequeños (arreglos, ajustes menores) → sube el segundo número (0.1 → 0.2 → 0.3...).
4. Cambios grandes o un conjunto amplio de funcionalidades nuevas → se puede saltar a la siguiente versión "entera" (0.9 → 1.0), a criterio del asistente.
5. No olvidar subir también el número de cache-busting (`manifest.json?v=X` y `sw.js?v=X` en `index.html`, y `CACHE_NAME` en `sw.js`) en cada despliegue, como se viene haciendo desde antes — son cosas distintas: el cache-busting fuerza la actualización técnica, y `APP_VERSION` es la etiqueta visible para Javier.

---

## Funcionalidades Implementadas

### 1. Pasar Lista
- Selector de fecha (detecta automáticamente hoy)
- Selector de grupo (5 grupos de matemáticas)
- Para cada alumno: tres botones de estado
  - **P** (verde) = Presente
  - **F** (rojo) = Falta
  - **R** (naranja) = Retraso
- Los datos se guardan automáticamente en `localStorage`

### 2. Botón "Pasar Lista" (marcado automático de presentes)
- Como lo habitual es que la mayoría de alumnos asista, solo hace falta marcar las faltas y los retrasos
- Botón verde "✅ Pasar Lista" junto al de descargar CSV
- Al pulsarlo, marca automáticamente como **Presente** a todos los alumnos del grupo que aún no tengan ningún estado asignado
- No modifica a los alumnos ya marcados como falta o retraso
- Se puede pulsar varias veces sin problema (es idempotente)

### 3. Descarga de CSV
- Botón "Descargar CSV" que exporta solo faltas y retrasos
- Formato: Fecha, Grupo, Alumno, Estado
- Abre automáticamente el descargador del navegador

### 4. Histórico
- Pestaña "Histórico" que muestra todos los días registrados
- Muestra resumen: número de faltas y retrasos por día
- Click en un día = abre modal con detalles por grupo
- Organizado por grupo y tipo de incidencia

### 5. Funcionalidad PWA
- Instalable en Android desde Chrome (botón "Instalar")
- Funciona offline gracias al Service Worker
- Icono personalizado en la pantalla de inicio
- Cache automático de archivos

---

## Datos de Alumnos (5 grupos)

### 1. Matemáticas II - 2BCB (9 alumnos)
DE LA FUENTE ALONSO, RUBÉN | DEL RÍO OLMEDO, CARLA | DIEZ URCARREGUI, PAOLA | GÓMEZ GARCÍA, RODRIGO | MARCOS MANCHÓN, RUBÉN | MORO EMPERADOR, DIEGO | PLAZA PÉREZ, JORGE | PRADOS TORRES, HUGO | ROMERO MUSLARES, DANIEL

### 2. Matemáticas Aplicadas a las Ciencias Sociales I - 1BHS (28 alumnos)
AGUADO HUSILLOS, MATEO | ALEJO PÉREZ, JOSÉ ROBERTO | ALONSO ALONSO, MIGUEL | ABIA ENRÍQUEZ, VEGA | ATOCHE SENDINO, CARMEN | AZPILETA GALLARDO, JIMENA | CALLEJA MIGUEL, ALBA | CAMPO ÁLVAREZ, THAIS | CASÍN RUBIO, SAMUEL | CUESTA MERINO, MARCOS | DE CASTRO PÉREZ, LEYRE | DE LA FUENTE ABARQUERO, EMMA | GARCÍA HERRARTE, NAIRA | GONZALEZ MORENO, NATALIA | HERRERO DE FRÁDEL, DIEGO | HERRERO CISNEROS, RODRIGO | IGLESIAS MORENO, LUCÍA | INDICOL MAYORDOMO, IRENE | PANIAGUA RESA, LUCÍA CARLOTA | PARDO SOLÁ, NACHO | PARIENTE ABIA, LUCÍA | PARIENTE ABIA, ZAIRA | QUIÑONEZ ÁLVAREZ, DANIEL | RENEDO VARGAS, ALEJANDRA | RODRÍGUEZ MARTÍN, EMMA | RODRÍGUEZ SALAZAR, DOUGLAS YANILO | SALVADOR LÓPEZ, ÁLVARO | ZAPATERO SALVADOR, ADRIANA

### 3. Matemáticas - 03A, 03B (19 alumnos)
ANDRÉS GARCÍA, ALMA | ANTOLÍN AMOR, IKER | ANTOLÍN BRAZ, BÁRBARA LINA | CABRERA ROJO, HUGO | CALLE VALVERDE, ARIADNE | CALVO SASTRE, DAKOTA | CAMPOS CALLEJA, ANDRÉS | CHOAIBI ALVAREZ, VIDAL | EL FADILY, ROUMAISSA | GÓMEZ REBOLLEDO, JOEL | GUTIÉRREZ IGLESIAS, ROBERTO | HERRERAS GARCÍA, NAHIA | LAMNINI KARMOUCHE, RAJAA | MACHO ARÍA, ROCÍO | MACHÓN MANGAS, JOEL | PÉREZ BERNARDO, ELENA | SALVADOR LÓPEZ, DARÍO | TORIBIO CARDEÑOSO, IVÁN | ULACIA FERRER, ITZIAR

### 4. Conocimiento de las Matemáticas - 03A, 03D (10 alumnos)
AMOR ROJO, NEREA | BOUTACHKOURT ZAOUATI, ABDELKARIM | CABRERA ROJO, HUGO | CEINOS ARCONADA, SARA | GUANTES MERINO, PAOLA | GUTIÉRREZ IGLESIAS, ROBERTO | ORE HUANCA, IKER ISMAEL | ROJO PÉREZ, MIRIAM | SANZ CANO, INÉS | TORIBIO CARDEÑOSO, IVÁN

### 5. Conocimiento de las Matemáticas - 02B, 02D (10 alumnos)
ACOSTA PEDROSA, GABRIEL | ANDRÉS GARCÍA, MANUEL | EL MAHFOUDI BRAHIM, BRAHIM | GABARRE JIMÉNEZ, REINALDO | GARCÍA FRÍAS, IZAN | GONZALEZ GUTIÉRREZ, ALEJANDRO | POLVOROSA GÓMEZ, SAÚL | POZA VALLE, RUBÉN | RODRÍGUEZ MORÁN, LUCAS | RUBIO MORO, ÁLVARO

---

## Archivos del Proyecto

### 1. **index.html** (Principal)
- Página HTML única con toda la lógica de la app
- Dos pestañas: "Pasar Lista" e "Histórico"
- Estilos CSS inline
- JavaScript con toda la funcionalidad
- Almacenamiento en `localStorage`

### 2. **manifest.json**
- Metadatos de la PWA
- Define nombre, icono, colores, orientación
- Permite la instalación en Android

### 3. **sw.js** (Service Worker)
- Permite funcionamiento offline
- Cachea los archivos
- Sincroniza nuevas versiones

### 4. **README.md**
- Instrucciones de uso
- Cómo instalar en Android
- Opciones de despliegue

---

## Despliegue

### GitHub Pages (Configurado)

Usuario: `javoxmg`
Repositorio: `asistencia-escolar`

**Pasos completados:**
1. ✅ Crear repo en GitHub
2. ✅ Hacer push de archivos
3. ✅ Activar GitHub Pages

**URL de la app:**
```
https://javoxmg.github.io/asistencia-escolar
```

**Instalación en Android:**
1. Abre Chrome en Android
2. Navega a la URL anterior
3. Aparecerá botón "Instalar"
4. La app se instala en la pantalla de inicio

---

## Almacenamiento de Datos

**Método:** `localStorage` del navegador

**Formato de clave:**
```
{grupo}_{alumno}_{fecha}
```

**Valor almacenado:**
- `present` = Presente
- `absent` = Falta
- `late` = Retraso

**Ejemplo:**
```
Matemáticas II - 2BCB_DE LA FUENTE ALONSO, RUBÉN_2026-09-15 = "absent"
```

**Privacidad:**
- Los datos NO se envían a ningún servidor
- Todo es privado en el móvil del usuario
- No hay sincronización en la nube

---

## Estructura del Código

### index.html

**HTML:**
- Header con título
- Tabs para navegar entre vistas
- Formularios de selección
- Contenedor de estudiantes
- Modal para detalles del histórico

**CSS:**
- Estilos responsive
- Colores: azul (#3b82f6), rojo, naranja
- Mobile-first design
- Transiciones suaves

**JavaScript:**
- Objeto `groups` con lista de alumnos
- Funciones principales:
  - `initializeDateAndGroups()` - Inicializa fecha y grupos
  - `generateStudentRows(group)` - Genera filas de alumnos
  - `markAttendanceBtn` (listener) - Marca como Presente a los alumnos sin estado asignado
  - `loadHistory()` - Carga histórico de asistencias
  - `showDetail(date)` - Muestra detalles de un día
  - Download CSV

### manifest.json
- Define que es PWA instalable
- Iconos en SVG (A azul)
- Tema: azul (#3b82f6)
- Orientación: portrait

### sw.js
- `install`: cachea archivos iniciales
- `activate`: limpia caches antiguos
- `fetch`: sirve desde cache, con fallback a red
- `CACHE_NAME`: `asistencia-v2` (se incrementa en cada cambio relevante de `index.html` para forzar la actualización en los móviles con la app instalada)

---

## Próximos Pasos Opcionales

1. **Agregar autenticación** - Logins para diferentes maestros
2. **Sincronización con servidor** - Guardar en base de datos
3. **Reportes** - Gráficos de asistencia
4. **Notificaciones** - Alertas de faltas
5. **Múltiples periodos** - Separar por trimestres
6. **Exportar a Excel** - Formato más avanzado
7. **Temas personalizados** - Cambiar colores
8. **Biometría** - Login con huella dactilar en Android

---

## Notas Técnicas

- **Framework:** Vanilla JavaScript (sin dependencias)
- **Compatibilidad:** Chrome 40+, Firefox 40+, Safari 12+
- **Tamaño:** ~40KB (index.html solo)
- **Performance:** Carga instantánea offline
- **SEO:** No aplica (es una app)
- **Seguridad:** XSS protegido, almacenamiento local

---

## Comandos Útiles

**Para actualizar el repo:**
```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```

**Para ver cambios:**
```bash
git status
git log
```

**Para revertir cambios:**
```bash
git checkout -- archivo.html
git reset HEAD~1
```

---

## Contacto y Soporte

Si necesitas:
- Modificar grupos de alumnos → editar objeto `groups` en index.html
- Cambiar colores → modificar variables en `<style>`
- Agregar funciones → extender JavaScript en index.html
- Desplegar en otro servidor → cambiar HTTPS en manifest.json

---

**Última actualización:** 16 de septiembre de 2026  
**Estado:** Producción  
**Versión de la app (visible en pantalla):** 0.1 — botones "Pasar Lista" y "Volver" separados, selector de fecha para corregir días anteriores, y versión visible en pantalla de inicio
