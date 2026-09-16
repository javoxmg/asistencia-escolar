# Changelog — AsistenciApp

Aquí se recogen los cambios de cada versión. El número de versión coincide con el que aparece en la pantalla de inicio de la app ("v. X.X").

---

## Historial previo (antes de empezar a numerar versiones)

Estos cambios se hicieron antes de que existiera el número de versión visible en pantalla, así que no tienen un número asociado. Se listan en orden cronológico:

- **15 de septiembre de 2026** — Creación inicial de la app: pasar lista con tres estados (Presente/Falta/Retraso), descarga de CSV del día, pestaña de Histórico, funcionamiento como PWA instalable offline. Despliegue en GitHub Pages.
- Añadido el botón "Pasar Lista" para marcar automáticamente como Presente a los alumnos sin marcar.
- Corregidas rutas absolutas en `manifest.json` y `sw.js` que causaban un error 404 al instalar la app (debían ser relativas a la subcarpeta `/asistencia-escolar/`).
- Cambiados los iconos de la PWA de SVG a PNG, porque Chrome/Android no los reconocía como válidos para permitir la instalación completa.
- Añadido "cache-busting" (`?v=X`) al manifest y al service worker, para forzar que el móvil descargue las actualizaciones en vez de quedarse con una copia antigua en caché.
- Añadido el botón "Descargar histórico completo", que exporta a CSV todos los días guardados (no solo el día actual), como copia de seguridad.
- Corregida la codificación de los CSV (tildes y la Ñ se veían mal en Excel) añadiendo un BOM UTF-8 al inicio del archivo.
- **16 de septiembre de 2026** — Recuperado el botón "Pasar Lista" (se había perdido en un cambio anterior) y añadido que, tras marcar a los alumnos, la app vuelva automáticamente a la pantalla principal.
- Añadido un selector de fecha editable: por defecto siempre se abre en el día de hoy, pero se puede cambiar explícitamente para corregir un día anterior. Aviso visual (⚠️) cuando se está editando un día distinto a hoy.
- Mejorada la visibilidad del selector de fecha en móvil (icono de calendario, apertura forzada del selector nativo), ya que no quedaba claro que el campo fuera pulsable.
- Separadas las dos funciones que antes compartía el botón "Pasar Lista": ahora "✅ Pasar Lista" solo marca como Presente a los alumnos en blanco (y te quedas en la pantalla), y un nuevo botón "⬅️ Volver" es el que regresa a la pantalla principal.

---

## v0.1 — 16 de septiembre de 2026

- Añadido el nombre de la app y el número de versión visible en la pantalla de inicio: **"AsistenciApp - v. 0.1 · Creada por Javier Martín"**. A partir de esta versión, cada cambio relevante incrementará este número, para poder comprobar de un vistazo si el móvil tiene ya la última versión desplegada.
- Creado este `CHANGELOG.md` para llevar un registro ordenado de los cambios por versión.

---

## v0.2 — 16 de septiembre de 2026

- La app pasa a llamarse oficialmente **AsistenciApp** en todos los sitios: título de la pestaña, cabecera de la pantalla de inicio, y nombre mostrado al instalarla en el móvil (`manifest.json`).

---

## v0.3 — 16 de septiembre de 2026

- Añadido el logo del IES Virgen de la Calle en la cabecera, centrado sobre el título.
- El título "AsistenciApp" ahora aparece centrado arriba del todo; el mensaje de versión ("v. X.X · Creada por Javier Martín") se ha movido al final de la pantalla, también centrado.
- Aplicada la paleta de colores del logo del instituto (azul marino `#0D2551` y azul claro `#3A6A9B`) a la pestaña activa, al color del tema del navegador y a los iconos de la app instalada.

---

## v0.4 — 16 de septiembre de 2026

- Extendido el uso de la paleta de colores del instituto: fondo de la app con un azul muy claro (en vez del gris genérico anterior), y bordes de tarjetas, botones y campos con un tono azul suave a juego, en vez de los grises por defecto.

---

## v0.5 — 16 de septiembre de 2026

- La app detecta automáticamente, al abrirla, qué grupo toca según el horario semanal de Javier y el día/hora actual, y lo preselecciona en el desplegable (sin necesidad de elegirlo a mano). Si es recreo, hora libre o fuera de horario lectivo, no preselecciona nada, como antes. Se puede cambiar el grupo manualmente en cualquier momento.
