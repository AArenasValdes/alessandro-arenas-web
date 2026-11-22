# Eventos comerciales

El sitio emite eventos DOM locales en `document`. No carga herramientas de analítica ni transmite eventos a terceros. El formulario conserva sus datos en el navegador hasta que la persona decide abrir WhatsApp.

- `contact_whatsapp_click`: clic en el acceso directo del hero.
- `contact_form_start`: primer foco dentro del formulario, una vez por carga.
- `contact_form_whatsapp_click`: envío válido del formulario antes de abrir WhatsApp.
- `portfolio_project_click`: clic al enlace de una aplicación. `event.detail.project` contiene `ventora` o `trading-ict`.

Para inspeccionarlos durante una prueba local, registrar desde la consola del navegador:

```js
['contact_whatsapp_click', 'contact_form_start', 'contact_form_whatsapp_click', 'portfolio_project_click']
  .forEach(name => document.addEventListener(name, event => console.log(event.type, event.detail)));
```

Una futura integración de analítica autorizada puede suscribirse con `document.addEventListener`. Antes de enviar datos a un proveedor hay que configurar el servicio, revisar consentimiento y privacidad y validar sus eventos. No incluir los campos del formulario, teléfonos ni el texto del mensaje en la instrumentación.
