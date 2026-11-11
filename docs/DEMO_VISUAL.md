# Demostración del hero

Mientras no exista una grabación auténtica y autorizada, el hero muestra una ilustración vectorial conceptual. Su animación puede pausarse y también funciona como imagen estática sin JavaScript, con movimiento reducido o con ahorro de datos. `sitio/assets/hero-concept-poster.svg` es una versión estática optimizada de esa ilustración; no es una captura de ningún producto.

## Incorporar un video real

1. Preparar una grabación autorizada de 6–10 segundos, sin sonido ni datos privados, en MP4 H.264. Añadir WebM solo si es realmente más liviano y conserva calidad comparable.
2. Crear una imagen poster optimizada y representativa de la grabación, sin datos privados, preferentemente con proporción 720:520. Guardar los archivos dentro de `sitio/assets/`.
3. En la etiqueta `<figure class="hero-art visual-demo">` de `sitio/index.html`, completar `data-video-mp4` y `data-video-poster` con las rutas relativas reales. Completar `data-video-webm` solo si existe esa versión, y `data-video-label` con una descripción veraz y breve.
4. Comprobar reproducción, pausa y reanudación con teclado, móvil y escritorio. Verificar que el poster aparezca con movimiento reducido y ahorro de datos, que no se solicite el video antes de entrar en pantalla y que el contenido conceptual reaparezca si el archivo falla.

El video se crea únicamente cuando hay MP4 y poster configurados y el área entra en pantalla. Se reproduce sin sonido, en bucle y en línea cuando el navegador lo permite; si bloquea la reproducción automática, el poster ofrece un botón para iniciarla. Con movimiento reducido, `saveData` o conexión móvil `slow-2g`, `2g` o `3g`, se muestra el poster y no se solicita el video. La detección de ahorro de datos y tipo de conexión depende de que el navegador proporcione esa información. Las rutas de medios deben pertenecer al mismo origen del sitio.

Los posters de Ventora e ICT Zella son composiciones editoriales originales, no capturas de las aplicaciones. Pueden sustituirse por imágenes auténticas autorizadas, manteniendo dimensiones declaradas, carga diferida y textos alternativos descriptivos.
