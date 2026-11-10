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
  const demo = document.querySelector('.visual-demo');
  if (demo) {
    const stage = demo.querySelector('.demo-stage');
    const artwork = demo.querySelector('.concept-art');
    const toggle = demo.querySelector('.demo-toggle');
    const caption = demo.querySelector('figcaption');
    const conceptCaption = caption.textContent;
    const connection = navigator.connection;
    const mobile = window.matchMedia('(max-width: 760px)');
    const localUrl = value => {
      if (!value) return '';
      try {
        const url = new URL(value, document.baseURI);
        return url.origin === location.origin && /^https?:$/.test(url.protocol) ? url.href : '';
      } catch { return ''; }
    };
    const mp4 = localUrl(demo.dataset.videoMp4);
    const webm = localUrl(demo.dataset.videoWebm);
    const posterUrl = localUrl(demo.dataset.videoPoster);
    const hasVideo = Boolean(mp4 && posterUrl);
    const mediaCaption = String(demo.dataset.videoLabel || '').trim() || 'Grabación del software';
    const staticOnly = () => motionPreference.matches || Boolean(connection?.saveData) ||
      (mobile.matches && ['slow-2g', '2g', '3g'].includes(connection?.effectiveType));
    let inView = false;
    let userPaused = false;
    let videoFailed = false;
    let video;
    let poster;

    const showConcept = () => {
      if (video) { video.pause(); video.hidden = true; }
      if (poster) poster.hidden = true;
      artwork.hidden = false;
      caption.textContent = conceptCaption;
      demo.classList.toggle('is-animated', !staticOnly() && inView);
      demo.classList.toggle('is-paused', userPaused);
      toggle.hidden = staticOnly();
      toggle.textContent = userPaused ? 'Reanudar animación' : 'Pausar animación';
    };
    const ensurePoster = () => {
      if (poster || !hasVideo || videoFailed) return;
      poster = document.createElement('img');
      poster.className = 'demo-video-poster';
      poster.alt = '';
      poster.loading = 'lazy';
      poster.hidden = false;
      poster.addEventListener('load', () => {
        if (!videoFailed && (staticOnly() || !video || video.paused)) {
          artwork.hidden = true; poster.hidden = false; poster.classList.add('is-ready'); caption.textContent = mediaCaption;
        }
      });
      poster.addEventListener('error', () => { videoFailed = true; showConcept(); });
      poster.src = posterUrl;
      stage.append(poster);
    };
    const showPoster = () => {
      ensurePoster();
      if (poster) poster.hidden = false;
      if (poster?.complete && poster.naturalWidth) {
        artwork.hidden = true; poster.classList.add('is-ready'); caption.textContent = mediaCaption;
      }
    };
    const failVideo = () => { videoFailed = true; showConcept(); };
    const ensureVideo = () => {
      if (video || videoFailed || !hasVideo) return;
      video = document.createElement('video');
      video.className = 'demo-video';
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
      video.autoplay = true;
      video.preload = 'none';
      video.poster = posterUrl;
      video.setAttribute('aria-label', mediaCaption);
      video.hidden = false;
      const sources = [[webm, 'video/webm'], [mp4, 'video/mp4']].filter(([url]) => url);
      let failedSources = 0;
      sources.forEach(([url, type]) => {
        const source = document.createElement('source');
        source.src = url; source.type = type;
        source.addEventListener('error', () => { if (++failedSources === sources.length) failVideo(); });
        video.append(source);
      });
      video.addEventListener('playing', () => {
        if (videoFailed || staticOnly() || !inView || userPaused) { video.pause(); return; }
        demo.classList.remove('is-animated');
        artwork.hidden = true;
        if (poster) poster.hidden = true;
        video.hidden = false;
        video.classList.add('is-playing');
        caption.textContent = mediaCaption;
        toggle.hidden = false;
        toggle.textContent = 'Pausar video';
      });
      video.addEventListener('error', failVideo);
      stage.append(video);
    };
    const refreshDemo = () => {
      if (staticOnly()) {
        demo.classList.remove('is-animated', 'is-paused');
        if (video) { video.pause(); video.hidden = true; video.classList.remove('is-playing'); }
        artwork.hidden = false;
        toggle.hidden = true;
        if (hasVideo && !videoFailed) showPoster();
        else { artwork.hidden = false; caption.textContent = conceptCaption; }
        return;
      }
      if (!hasVideo || videoFailed) { showConcept(); return; }
      if (!inView) { if (video) video.pause(); demo.classList.remove('is-animated'); toggle.hidden = false; toggle.textContent = 'Reproducir video'; return; }
      ensurePoster();
      showPoster();
      ensureVideo();
      video.hidden = false;
      toggle.hidden = false;
      if (userPaused) { toggle.textContent = 'Reproducir video'; return; }
      video.play().catch(() => { if (!videoFailed && video.paused) { showPoster(); toggle.textContent = 'Reproducir video'; } });
    };
    toggle.addEventListener('click', () => {
      if (hasVideo && !video && !videoFailed) {
        userPaused = false;
        inView = true;
        refreshDemo();
      } else if (video && !videoFailed) {
        if (video.paused) { userPaused = false; video.play().catch(() => { if (!videoFailed) toggle.textContent = 'Reproducir video'; }); }
        else { userPaused = true; video.pause(); toggle.textContent = 'Reanudar video'; }
      } else {
        userPaused = !userPaused;
        demo.classList.toggle('is-paused', userPaused);
        toggle.textContent = userPaused ? 'Reanudar animación' : 'Pausar animación';
      }
    });
    motionPreference.addEventListener?.('change', refreshDemo);
    mobile.addEventListener?.('change', refreshDemo);
    connection?.addEventListener?.('change', refreshDemo);
    if ('IntersectionObserver' in window) {
      const demoObserver = new IntersectionObserver(entries => {
        inView = entries[0].isIntersecting;
        refreshDemo();
      }, { threshold: .1 });
      demoObserver.observe(stage);
    } else {
      let scheduled = false;
      const checkVisibility = () => {
        scheduled = false;
        const rect = stage.getBoundingClientRect();
        const visible = rect.bottom > 0 && rect.top < innerHeight && rect.right > 0 && rect.left < innerWidth;
        if (visible !== inView) { inView = visible; refreshDemo(); }
      };
      const scheduleVisibilityCheck = () => {
        if (!scheduled) { scheduled = true; requestAnimationFrame(checkVisibility); }
      };
      window.addEventListener('scroll', scheduleVisibilityCheck, { passive: true });
      window.addEventListener('resize', scheduleVisibilityCheck, { passive: true });
      checkVisibility();
    }
    refreshDemo();
  }
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
