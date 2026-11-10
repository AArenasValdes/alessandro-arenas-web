# Alessandro Arenas — instrucciones para agentes

## Objetivo
Convertir esta landing personal en un canal profesional de generación de contactos calificados para servicios de software a medida, desarrollo web y automatización en Chile.

## Estado real
- Sitio estático HTML/CSS/JS en `sitio/`. Sin backend, base de datos ni CMS.
- Contacto vía WhatsApp preparado en navegador (`sitio/config.js`); requiere teléfono comercial real antes de publicar.
- Proyecto real: Ventora (`https://ventorap.cl`), marca separada. No atribuir resultados, clientes o testimonios sin permiso y verificación.
- Los flujos de automatización dibujados son demostraciones conceptuales, NO screenshots funcionales.

## Reglas de ingeniería
- Priorizar simplicidad, accesibilidad, rendimiento móvil, SEO técnico básico, seguridad y claridad comercial.
- No migrar a Next.js, React, bases de datos o servicios de pago sin demostrar necesidad concreta y obtener aprobación.
- Conservar identidad actual: azul noche, azul digital, menta, blanco frío; tipografía de sistema.
- No inventar métricas, fotografías de clientes, casos de éxito, reseñas, certificaciones, empresas ni alianzas.
- No exponer credenciales. Configuración de contacto de `sitio/config.js` es pública; nunca guardar secretos allí.
- No modificar la plataforma Ventora ni mezclar sus códigos: solo se referencia como caso propio.
- Mantener la página completamente usable en ancho 320px a 1440px.
- Mantener las secciones y CTAs funcionales; no romper formulario que abre WhatsApp.
- Respetar consentimiento y legislación de datos personales de Chile; actualizar política si se agrega analítica/píxeles/backend.
- No instalar dependencias por estética; primero CSS y JavaScript nativos.

## Flujo por tarea
1. Inspeccionar archivos relevantes y resumir el cambio propuesto.
2. Implementar cambios pequeños y autocontenidos.
3. Ejecutar `python scripts/check_site.py` y revisar consola del navegador.
4. Revisar escritorio (1440px), tablet (768px) y móvil (390px, 320px), interacciones, foco de teclado y contraste.
5. Informar archivos editados, pruebas, limitaciones y pasos de publicación.
6. No desplegar en producción, registrar dominios, publicar anuncios ni gastar dinero sin autorización explícita.

## Despliegue de referencia
Cloudflare Pages Free + GitHub, directorio de salida `sitio`, sin compilación. No usar Vercel Hobby para el sitio de captación comercial por sus restricciones de uso.

## Criterio de terminado
La página carga sin errores, es clara en móvil, enlaza correctamente, no promete capacidades no demostradas y mantiene costo de infraestructura cercano a cero.
