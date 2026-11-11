# Cierre de lanzamiento — Alessandro Arenas
Fecha: 2026-11-11. Rama base: `design/atelier-nocturno`.

## Decisión de dirección artística
Conservar Instrument Serif, Manrope, carbón `#101311`, marfil `#F3F0E9` y salvia `#92A796`. No introducir otro framework, una nueva paleta, 3D ni animaciones decorativas. Los casos reales son la pieza que falta para demostrar competencia y diferenciar la web.

## Activos auténticos a producir (orden)
1. **Ventora — captura principal:** resolución origen >=1440 px de ancho, interfaz visible de cotización comercial usando organización, cliente e ítems ficticios. Evitar RUT, teléfonos, correos, precios confidenciales, cuentas o sesiones reales. Exportar imagen optimizada a `sitio/assets/ventora-caso.webp` (~200–350 KB como objetivo orientativo). Incluir texto alternativo descriptivo. No modificar el producto para sacar la captura.
2. **ICT Zella — captura secundaria:** panel o bitácora real con datos simulados y autorización del propietario para publicar; `sitio/assets/zella-caso.webp`. Mostrar qué hace el producto, no solo su logo. No reutilizar capturas de terceros sin permiso.
3. **Hero — clip real:** grabar de 6 a 10 segundos un recorrido simple con datos ficticios: solicitud recibida → cotización preparada → documento o estado resultante. Evitar texto demasiado pequeño. Exportar MP4 H.264 sin audio, `muted`, `playsinline`, `loop`. Tamaño objetivo <=2 MB si preserva legibilidad; no sacrificar la calidad del texto solo para llegar a una cifra. Crear poster con la misma composición. Guardar `sitio/assets/hero-demo.mp4` y `sitio/assets/hero-poster.webp`. WebM es opcional.
4. **Material ambiental opcional:** un máximo de una textura o escena abstracta original y discreta, siempre subordinada a las capturas del software. No sustituir pruebas del producto por imágenes generadas.

## Integración
- En `sitio/index.html`, reemplazar los dos posters SVG por capturas auténticas solo cuando las imágenes estén autorizadas y sean legibles. Mantener `width` y `height`, `loading="lazy"`, `decoding="async"` en portafolio; no usar lazy loading en el poster crítico del hero si afecta LCP.
- Para el video completar `data-video-mp4`, `data-video-poster` y `data-video-label` del `figure.visual-demo` existente; evitar reescribir `script.js` salvo fallo demostrado. Ver `docs/DEMO_VISUAL.md`.
- Respetar `prefers-reduced-motion`, conexiones con ahorro de datos y pausa por teclado.
- Verificar derechos sobre nombres, capturas y marcas de terceros; textos comerciales veraces.
- **No fabricar imágenes de una interfaz real con IA.** Si se usan visuales conceptuales, etiquetarlos explícitamente.

## Bloqueantes antes de publicidad
1. Configurar WhatsApp comercial real en `sitio/config.js` (solo dígitos internacionales públicos; no colocar credenciales). Probar apertura del mensaje desde Android y/o iPhone y confirmar destinatario y contenido.
2. Verificar sitio en el dominio público y revisar responsive 319/390/768/1440, teclado, errores de consola, enlaces, FAQ, navegación, privacidad y formulario.
3. Publicar una vez aprobado; añadir canonical, `og:url` y `og:image` con URL HTTPS absoluta cuando se decida la dirección canónica. No confundir URL temporal de preview con dominio definitivo.
4. Comprobar headers, compresión y caché desde Cloudflare, no extrapolar resultados del servidor local.
5. Registrar consultas cualificadas, reuniones y propuestas por campaña. No interpretar solo clics como clientes.

## Criterio de cierre
La primera versión comercial está lista cuando el botón de contacto funciona, hay al menos un proyecto auténtico documentado y las pruebas reales no muestran problemas bloqueantes. El video de hero y una segunda captura son mejoras de alta prioridad, pero no deben bloquear indefinidamente el lanzamiento.

## Trabajo de esta rama
Ajustes acotados de tipografía: mejor legibilidad en navegación, CTA, texto explicativo, casos y preguntas; campos de formulario de 16 px para evitar zoom automático de Safari iOS. Deben revisarse en preview antes de integrar, porque estas modificaciones no fueron verificadas visualmente aquí.
