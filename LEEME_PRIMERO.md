# Alessandro Arenas — kit de lanzamiento comercial

Este paquete contiene una landing page estática, identidad visual editable, perfil y portada para redes, seis publicaciones, textos comerciales y plan de Meta Ads.

## Qué está listo

- Sitio responsive completo: `sitio/index.html`, `sitio/styles.css`, `sitio/script.js`.
- Caso Ventora, cuatro servicios, demostraciones conceptuales, preguntas frecuentes y un formulario que prepara el mensaje de WhatsApp sin guardar datos en un servidor.
- Logotipo y favicon vectoriales en `sitio/assets/`.
- Imagen de perfil, portada de Facebook y seis publicaciones en PNG y SVG editable: `redes/`.
- Guías de marca y operación comercial en `guias/`.

## Antes de publicarlo (obligatorio)

1. Abre `sitio/config.js` y agrega tu **número comercial** en `whatsapp`, en formato internacional, solo dígitos, sin el signo `+` (Chile: `56` + número). Sin número, el formulario está en modo demostración y NO envía mensajes.
2. Añade `email`, `instagram` y `facebook` cuando tengas las cuentas. Los enlaces de redes no aparecen si no están configurados.
3. Confirma si la URL de Ventora que deseas publicar es `https://ventorap.cl`.
4. Revisa `sitio/privacidad.html` y ajústala a tu tratamiento real de datos. Si luego usas pixel, Google Analytics, un formulario con backend o remarketing, esta política requiere cambios.
5. Registra o selecciona un dominio. La disponibilidad de los nombres propuestos **no está comprobada**.
6. Una vez tengas dominio, agrega una URL absoluta de imagen Open Graph y etiquetas canonical. Conviene convertir `sitio/assets/og-cover.svg` a PNG para compatibilidad con redes sociales.
7. Prueba el formulario desde un teléfono: verifica el mensaje generado y que WhatsApp abra el número correcto.

## Cómo ver y publicar el sitio

- Vista local rápida: abre `sitio/index.html` en tu navegador. Para probarlo en desarrollo con un servidor local: entra a `sitio/` y ejecuta `python -m http.server 8000`. Visita `http://localhost:8000`.
- Despliegue sencillo: publica el contenido de `sitio/` en un hosting estático (por ejemplo, Netlify, Cloudflare Pages o Vercel). No necesita npm, base de datos ni API para funcionar.
- Esta entrega **no está publicada** ni conectada a Meta; las cuentas y campañas deben crearse con tus accesos.

## Orden de lanzamiento recomendado

Día 1: configurar WhatsApp Business y publicar sitio. Días 2–3: crear Instagram profesional, página de Facebook, vincular ambas y usar los archivos de marca. Días 3–5: publicar al menos tres piezas iniciales. Día 6: lanzar campaña pequeña a conversaciones de WhatsApp con presupuesto total controlado. Días 7–12: evaluar contactos calificados y propuestas, no solo mensajes recibidos.

Consulta `guias/PLAN_COMERCIAL_Y_META_ADS.md` y `guias/TEXTOS_REDES.md`.
