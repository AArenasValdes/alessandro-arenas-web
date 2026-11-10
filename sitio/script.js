(() => {
  const config = window.BRAND_CONFIG || {};
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navToggle.setAttribute('aria-label', expanded ? 'Abrir navegación' : 'Cerrar navegación');
    navLinks?.classList.toggle('open', !expanded);
  });
  navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Abrir navegación');
    navLinks?.classList.remove('open');
  }));
  document.getElementById('year').textContent = String(new Date().getFullYear());
  ['instagram', 'facebook'].forEach(platform => {
    const anchor = document.querySelector(`[data-social="${platform}"]`);
    const url = String(config[platform] || '').trim();
    if (anchor && /^https:\/\//i.test(url)) {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = platform === 'instagram' ? 'Instagram' : 'Facebook';
      anchor.replaceWith(link);
    }
  });
  const email = String(config.email || '').trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    const footerEmail = document.getElementById('footerEmail');
    footerEmail.href = `mailto:${email}`;
    footerEmail.hidden = false;
  }
  const ventora = document.getElementById('ventoraLink');
  if (ventora && /^https:\/\//i.test(config.ventoraUrl || '')) ventora.href = config.ventoraUrl;
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formMessage');
  const availability = document.getElementById('formAvailability');
  const submit = form?.querySelector('[type=submit]');
  const phone = String(config.whatsapp || '').replace(/[^0-9]/g, '');
  const configured = phone.length >= 10 && phone.length <= 15;
  if (submit && availability) {
    submit.disabled = !configured;
    availability.textContent = configured ? 'Al continuar, podrás revisar el mensaje en WhatsApp antes de enviarlo.' : 'Contacto por WhatsApp temporalmente no disponible.';
  }
  form?.addEventListener('submit', e => {
    e.preventDefault();
    feedback.textContent = '';
    if (!form.reportValidity()) return;
    if (!configured) return;
    const nombre = document.getElementById('nombre').value.trim();
    const empresa = document.getElementById('empresa').value.trim();
    const servicio = document.getElementById('servicio').value;
    const detalle = document.getElementById('detalle').value.trim();
    if (nombre.length < 2 || detalle.length < 10) {
      feedback.textContent = 'Escribe tu nombre y describe tu idea con al menos 10 caracteres, sin contar espacios al inicio o al final.';
      (nombre.length < 2 ? document.getElementById('nombre') : document.getElementById('detalle')).focus();
      return;
    }
    const mensaje = `Hola Alessandro, te contacto desde tu página web.\n\nNombre: ${nombre}\nEmpresa/rubro: ${empresa || 'No indicado'}\nNecesito: ${servicio}\nDetalle: ${detalle}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    feedback.textContent = 'Revisa el mensaje en WhatsApp y presiona Enviar para completar tu consulta. Si no se abrió, permite las ventanas emergentes y vuelve a intentarlo.';
  });

  // Progressive enhancement: everything is visible before motion is applied.
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const activeAnimations = new Set();
  const animate = (element, frames, options) => {
    if (motionPreference.matches || typeof element.animate !== 'function') return;
    const animation = element.animate(frames, options);
    activeAnimations.add(animation);
    animation.finished.then(() => activeAnimations.delete(animation)).catch(() => activeAnimations.delete(animation));
  };
  motionPreference.addEventListener?.('change', event => {
    if (event.matches) activeAnimations.forEach(animation => animation.cancel());
  });
  document.querySelectorAll('.hero-line').forEach((line, index) => {
    animate(line, [{ transform: 'translateY(12px)' }, { transform: 'translateY(0)' }],
      { duration: 650, delay: index * 100, easing: 'cubic-bezier(.22,1,.36,1)' });
  });
  document.querySelectorAll('.flow-step').forEach((step, index) => {
    animate(step, [{ opacity: .7, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 600, delay: 450 + index * 430, easing: 'cubic-bezier(.22,1,.36,1)' });
    const marker = step.querySelector('.flow-marker');
    if (marker) animate(marker, [{ transform: 'scale(.75)', backgroundColor: '#101311' }, { transform: 'scale(1)', backgroundColor: '#92a796' }, { transform: 'scale(1)', backgroundColor: '#101311' }],
      { duration: 700, delay: 450 + index * 430, easing: 'ease-out' });
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animate(entry.target, [{ opacity: .88, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)' });
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    document.querySelectorAll('.section-top, .service-row, .approach-grid, .portfolio-heading, .case-primary, .case-secondary, .process-list article, .faq-grid, .contact-grid').forEach(element => observer.observe(element));
  }
})();
