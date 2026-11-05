// Niki & Niki — interacción mínima, sin dependencias.
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const T = JSON.parse($('#i18n').textContent);
  const base = $('script[src$="main.js"]').getAttribute('src').replace('main.js', '');
  document.documentElement.classList.add('js');

  /* Preferencia de idioma (solo para recordarla al volver) */
  $$('[data-lang]').forEach((a) => a.addEventListener('click', () => {
    try { localStorage.setItem('nn-lang', a.dataset.lang); } catch (e) { /* sin almacenamiento */ }
  }));

  /* Estado abierto/cerrado con la hora de España (Europe/Madrid).
     Dénia: todos los días de 8:00 a 17:00. Moraira: lun–mar de 8:00 a 15:30, mié–dom de 8:00 a 22:00. */
  const OPEN = 8 * 60, CLOSE = 17 * 60;
  const paint = (sel, open, text) => $$(sel).forEach((el) => {
    el.classList.toggle('is-open', open);
    el.classList.toggle('is-closed', !open);
    const t = $('[data-status-text]', el); if (t) t.textContent = (el.dataset.prefix || '') + text;
    const s = $('[data-status-short]', el); if (s) s.textContent = open ? T['status.short.open'] : T['status.short.closed'];
  });
  function status() {
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
    const get = (k) => parts.find((p) => p.type === k).value;
    const now = +get('hour') * 60 + +get('minute');
    const open = now >= OPEN && now < CLOSE;
    paint('[data-status]', open, open ? T['status.open'] : now < OPEN ? T['status.soon'] : T['status.closed']);
    const short = ['Mon', 'Tue'].includes(get('weekday'));
    const mClose = short ? 15 * 60 + 30 : 22 * 60;
    const mOpen = now >= OPEN && now < mClose;
    paint('[data-mstatus]', mOpen, mOpen ? T['mstatus.open'].replace('%h', short ? '15:30' : '22:00') : T['mstatus.closed']);
  }
  status();
  setInterval(status, 60000);

  /* Cabecera y menú móvil */
  const top = $('[data-top]');
  const burger = $('[data-burger]');
  const nav = $('#nav');
  const setMenu = (open) => {
    burger.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    top.classList.toggle('menu-open', open);
  };
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  $$('a', nav).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  /* Las mesas giran despacio con el scroll */
  const spins = $$('[data-spin]').map((el) => ({ disc: $('.table__disc', el), k: +el.dataset.spin }));
  let ticking = false;
  function onScroll() {
    const y = scrollY;
    top.classList.toggle('is-scrolled', y > 20);
    if (!reduce) spins.forEach(({ disc, k }) => disc.style.setProperty('--rot', `${Math.max(-40, Math.min(40, y * k))}deg`));
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* Leyenda de la mesa ↔ marcas */
  $$('[data-legend]').forEach((li) => {
    const pin = $(`[data-pin="${li.dataset.legend}"]`);
    const on = (v) => { li.classList.toggle('is-on', v); pin && pin.classList.toggle('is-on', v); };
    li.addEventListener('mouseenter', () => on(true));
    li.addEventListener('mouseleave', () => on(false));
    pin && pin.addEventListener('mouseenter', () => on(true));
    pin && pin.addEventListener('mouseleave', () => on(false));
  });

  /* Vitrina: filtros */
  const pieces = $$('.piece');
  $$('[data-filter]').forEach((b) => b.addEventListener('click', () => {
    $$('[data-filter]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    const f = b.dataset.filter;
    pieces.forEach((p) => p.classList.toggle('is-hidden', f !== 'all' && !p.dataset.tags.split(' ').includes(f)));
    const sh = $('[data-shelf]'); if (sh) sh.scrollLeft = 0;
  }));

  /* Vitrina en móvil: indicador de cuánto queda por ver en la balda */
  const shelf = $('[data-shelf]');
  const shelfBar = $('[data-shelf-bar]');
  if (shelf && shelfBar) {
    const prog = () => {
      const max = shelf.scrollWidth - shelf.clientWidth;
      shelfBar.hidden = max < 8;
      shelfBar.style.setProperty('--w', `${Math.min(100, (shelf.clientWidth / shelf.scrollWidth) * 100)}%`);
      shelfBar.style.setProperty('--x', `${max > 0 ? (shelf.scrollLeft / max) * (100 - (shelf.clientWidth / shelf.scrollWidth) * 100) : 0}%`);
    };
    shelf.addEventListener('scroll', prog, { passive: true });
    addEventListener('resize', prog);
    $$('[data-filter]').forEach((b) => b.addEventListener('click', () => requestAnimationFrame(prog)));
    prog();
  }

  /* Carta de desayuno: pestañas (con flechas del teclado) */
  const tabs = $$('[data-tabs] [role="tab"]');
  const selectTab = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => selectTab(t));
    t.addEventListener('keydown', (e) => {
      const k = { ArrowRight: 1, ArrowLeft: -1, Home: -i, End: tabs.length - 1 - i }[e.key];
      if (k === undefined) return;
      e.preventDefault();
      selectTab(tabs[(i + k + tabs.length) % tabs.length], true);
    });
  });
  if (tabs.length) selectTab(tabs[0]);

  /* Vitrina: ficha de cada pieza (solo en la portada) */
  const sheet = $('[data-sheet]');
  const data = sheet ? JSON.parse($('#vitrina-data').textContent) : {};
  let opener = null;
  $$('[data-piece]').forEach((btn) => btn.addEventListener('click', () => {
    const d = data[btn.dataset.piece];
    const img = $('[data-sheet-img]', sheet);
    img.src = `${base}img/${d.img}-760.webp`;
    img.alt = d.name;
    $('[data-sheet-name]', sheet).textContent = d.name;
    $('[data-sheet-price]', sheet).textContent = d.price;
    $('[data-sheet-desc]', sheet).textContent = d.desc;
    $('[data-sheet-seal]', sheet).innerHTML = d.seal;
    $('[data-sheet-order]', sheet).hidden = !d.celebrate;
    opener = btn;
    if (typeof sheet.showModal === 'function') sheet.showModal(); else sheet.setAttribute('open', '');
  }));
  if (sheet) {
    sheet.addEventListener('click', (e) => { if (e.target === sheet) sheet.close(); });
    sheet.addEventListener('close', () => opener && opener.focus());
  }

  /* Tira de tazas: pausa */
  const belt = $('[data-belt]');
  const pause = $('[data-belt-pause]');
  if (belt && pause) {
    pause.addEventListener('click', () => {
      const p = pause.getAttribute('aria-pressed') !== 'true';
      pause.setAttribute('aria-pressed', String(p));
      belt.classList.toggle('is-paused', p);
    });
    belt.addEventListener('mouseenter', () => belt.classList.add('is-paused'));
    belt.addEventListener('mouseleave', () => pause.getAttribute('aria-pressed') !== 'true' && belt.classList.remove('is-paused'));
  }

  /* Barra móvil. Por defecto, la de la página (elegir local en la portada, o la del local en su página).
     Dentro de una zona de un local (data-bar-zone) pasa a ser la de ese local: llamar, cómo llegar, reservar. */
  const bar = $('[data-bar]');
  const foot = $('[data-foot]');
  const sets = $$('[data-bar-set]', bar);
  const zones = new Set();
  const showBar = () => {
    const z = [...zones].pop();
    const name = (z && z.dataset.barZone) || document.body.dataset.barDefault || 'pick';
    sets.forEach((set) => { set.hidden = set.dataset.barSet !== name; });
    bar.classList.toggle('is-night', name === 'moraira');
  };
  document.addEventListener('nn:zone', showBar);
  showBar();
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => bar.classList.toggle('is-away', e.isIntersecting), { threshold: 0.05 }).observe(foot);

    const zio = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? zones.add(e.target) : zones.delete(e.target)));
      showBar();
    }, { rootMargin: '-40% 0px -40% 0px' });
    $$('[data-bar-zone]').forEach((z) => zio.observe(z));

    /* Sección actual en el menú */
    const current = new IntersectionObserver((entries) => entries.forEach((e) => {
      const a = $(`.nav a[href="#${e.target.id}"]`);
      if (a) a.setAttribute('aria-current', String(e.isIntersecting));
    }), { rootMargin: '-45% 0px -50% 0px' });
    $$('a', nav).forEach((a) => { const s = document.getElementById(a.getAttribute('href').slice(1)); if (s) current.observe(s); });
  }

  /* Aparición suave al entrar en pantalla */
  if (!reduce && 'IntersectionObserver' in window) {
    const els = $$('.sec-head, .piece, .dish, .carta, .drinks, .tazas__head, .pan__text, .pan__miga, .order, .visita .card, .visita__fachada, .map, .moraira__text, .moraira__pics img, .proof__quotes li');
    els.forEach((el) => {
      el.classList.add('rv');
      const sib = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0;
      el.style.setProperty('--d', Math.min(sib, 6));
    });
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
  }
})();
