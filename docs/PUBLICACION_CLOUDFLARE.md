# Publicación barata: Cloudflare Pages + .cl

## Costos y restricciones
- Hosting HTML estático: plan Free de Cloudflare Pages, normalmente $0 mientras se respeten sus límites.
- NIC Chile: dominio .cl, referencia a 10 de noviembre de 2026: $9.990 CLP por año. Comprobar precio y disponibilidad en nic.cl.
- Vercel Hobby no recomendado para captar clientes: sus términos limitan uso gratuito a personal/no comercial.
- Meta Ads, APIs de IA y email comercial son gastos separados, NO necesarios para que la web funcione.

## Antes de GitHub
1. `sitio/config.js`: reemplazar `whatsapp` por el teléfono comercial propio asociado a WhatsApp, solo dígitos en formato internacional (Chile: `56` + número, sin `+`, espacios ni cero inicial). `config.js` se publica en el navegador; no incluir secretos. Con valor vacío, el envío queda deshabilitado. Completar email y redes solo si se desean publicar.
2. Confirmar enlace de Ventora y sustituir cualquier claim no validado.
3. Una vez elegido el dominio, agregar `og:image` con URL HTTPS absoluta al archivo `assets/og-cover.png`, agregar `og:url` y `link rel=canonical` al HTML. Agregar sitemap.xml solamente con URLs públicas finales.
4. Revisar política de privacidad con prácticas reales de tratamiento. Si se instala píxel o analítica, configurar consentimiento/avisos según corresponda.
5. Ejecutar `python scripts/check_site.py` y revisión visual móvil + escritorio.
6. Las vistas previas de Pages llevan `X-Robots-Tag: noindex` por defecto. Confirmar el encabezado en cada preview; evitar indexar preproducción. El host de producción `NOMBRE.pages.dev` queda público y debe tratarse como URL de producción hasta conectar el dominio definitivo.

## Cloudflare Pages conectado a GitHub
1. Crear repositorio GitHub, idealmente privado, y subir el contenido de ESTE paquete a la raíz.
2. Crear cuenta gratuita en Cloudflare.
3. Ir a Workers & Pages > Create > Pages > Connect to Git > GitHub.
4. Seleccionar el repositorio y la rama de producción `main`.
5. Framework preset: None; Build command: `exit 0` (el sitio estático no requiere compilación).
6. Root directory: raíz del repositorio. Build output directory: `sitio`.
7. Desplegar y probar la URL `NOMBRE.pages.dev`, incluyendo `privacidad.html`, formulario, móvil y enlaces.
8. Las actualizaciones en `main` se publicarán automáticamente; usar pull requests y previews antes de fusionar.

## Conectar dominio .cl
1. Comprar el .cl elegido en https://www.nic.cl/ . La disponibilidad no está comprobada.
2. En Cloudflare, añadir el dominio como zona DNS y copiar los nameservers asignados.
3. En NIC Chile, cambiar los servidores DNS por los indicados por Cloudflare.
4. En Cloudflare Pages > Custom domains > Set up a domain, añadir el dominio raíz y opcionalmente `www`.
5. Comprobar HTTPS, redirección www/raíz, certificado, URL canonical, favicon y vista previa al compartir.
6. El DNS puede tardar en propagarse; no adivinar ni configurar nameservers de ejemplo.

## Revisión de calidad después del despliegue
Comprobar desde celular real. Probar WhatsApp sin enviar datos sensibles de terceros. Confirmar que el dominio esté indexable solo cuando esté listo. Registrar conversiones de forma manual hasta implementar una solución analítica conforme a privacidad.

## Estado de preparación

- El repositorio Git local debe contener el proyecto completo, con rama `main`; no necesita remoto hasta que se autorice conectarlo.
- Antes del lanzamiento, configurar el número comercial real en `sitio/config.js` y hacer la prueba descrita abajo, sin enviar el mensaje.
- Revisar privacidad según la operación real, dominio definitivo, enlaces públicos y previsualización al compartir.
- Revisar en celular real y comprobar cabeceras, HTTPS y formulario en la vista previa de Pages antes de abrir el sitio al público.

### Prueba manual de WhatsApp desde celular

1. Configurar `whatsapp` con el número comercial real asociado a WhatsApp. Usar el prefijo `56` y el número nacional, solo dígitos y sin `+`.
2. Abrir la URL de preview de Pages en el celular y comprobar que muestre el aviso de disponibilidad y habilite el botón.
3. Completar el formulario con datos propios de prueba, marcar la casilla de consentimiento y continuar.
4. Confirmar que WhatsApp abra la conversación con el número comercial correcto y que el texto prellenado corresponda a los campos.
5. No presionar Enviar durante esta prueba; regresar a la web y confirmar el mensaje de estado. Si el enlace no abre la aplicación, actualizar WhatsApp y probar la URL en el navegador móvil.
6. Confirmar que el teléfono de prueba no sea visible a terceros en capturas compartidas.

## SEO y vistas previas

- Canonical y `og:image`/`og:url` quedan omitidos hasta conocer el dominio definitivo. No colocar URLs de ejemplo en los metadatos.
- Cloudflare añade `X-Robots-Tag: noindex` a deployments preview por defecto; confirmar con `curl -I` tras crear un preview. La producción en `*.pages.dev` es públicamente accesible.

## Valores exactos de Pages

- Production branch: `main`.
- Build command: `exit 0`.
- Build output directory: `sitio`.
- Root directory: `/`.

Referencias: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/ y https://developers.cloudflare.com/pages/configuration/preview-deployments/
