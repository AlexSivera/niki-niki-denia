// Genera dist/ (español en / e inglés en /en/) desde src/index.html y los datos de src/data.
// Uso: node scripts/build.mjs   (SITE_URL opcional para las URL absolutas)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { T } from '../src/data/i18n.mjs';
import { BIZ, MORAIRA, TOPICS, ORIGINS, VITRINA, DESAYUNOS, EXTRAS, DESTACADOS, BEBIDAS, AFLUENCIA } from '../src/data/site.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');
const SITE = (process.env.SITE_URL || 'https://alexsivera.github.io/niki-niki-denia').replace(/\/$/, '');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const t = (key, lang) => {
  if (!T[key]) throw new Error(`Falta el texto «${key}»`);
  return T[key][lang];
};

// Sello de origen: círculo tipográfico inspirado en las marcas de fábrica de la porcelana.
let sealN = 0;
function seal(top, bottom, cls = 'seal') {
  const id = `s${++sealN}`;
  return `<svg class="${cls}" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
<defs><path id="${id}a" d="M60 104a44 44 0 1 1 0-88a44 44 0 1 1 0 88"/><path id="${id}b" d="M60 10.5a49.5 49.5 0 1 0 0 99a49.5 49.5 0 1 0 0-99"/></defs>
<circle cx="60" cy="60" r="57" class="seal__ring"/><circle cx="60" cy="60" r="31" class="seal__ring seal__ring--in"/>
<text class="seal__txt"><textPath href="#${id}a" startOffset="50%" text-anchor="middle">${esc(top.toUpperCase())}</textPath></text>
<text class="seal__txt seal__txt--b"><textPath href="#${id}b" startOffset="50%" text-anchor="middle">${esc(bottom.toUpperCase())}</textPath></text>
<text x="60" y="71" text-anchor="middle" class="seal__amp">&amp;</text>
<circle cx="13.5" cy="60" r="1.6" class="seal__dot"/><circle cx="106.5" cy="60" r="1.6" class="seal__dot"/>
</svg>`;
}
const MAKER = { es: 'Obrador Niki&Niki', en: 'Baked by Niki&Niki' };

const pic = (name, sizes, w, h, alt, extra = '', eager = false) => {
  const ws = { vit: [420, 760], des: [480, 900], taza: [320] }[sizes];
  const set = ws.map((x) => `{{base}}img/${name}-${x}.webp ${x}w`).join(', ');
  return `<img src="{{base}}img/${name}-${ws[0]}.webp" srcset="${set}" sizes="${extra || '(min-width: 960px) 220px, 44vw'}" width="${w}" height="${h}" alt="${esc(alt)}" ${eager ? '' : 'loading="lazy" '}decoding="async">`;
};

const blocks = {
  topics: (lang) => TOPICS.map((x) => `<li><span class="proof__n">${x.n}</span><span class="proof__w">${esc(x[lang])}</span></li>`).join(''),

  vitrina: (lang) => VITRINA.map((v, i) => `
<li class="piece" data-tags="${v.tags.join(' ')}" style="--i:${i}">
  <button type="button" class="piece__btn" data-piece="${v.id}" aria-haspopup="dialog">
    <span class="plate">${pic(v.img, 'vit', 420, 420, v.name[lang], '(min-width: 1100px) 210px, (min-width: 700px) 26vw, 46vw')}</span>
    ${seal(ORIGINS[v.origin][lang], MAKER[lang], 'seal seal--piece')}
    ${v.popular ? `<span class="piece__pop">${esc(t('vit.popular', lang))}</span>` : ''}
    <span class="piece__name">${esc(v.name[lang])}</span>
    <span class="piece__short">${esc(v.short[lang])}</span>
    <span class="piece__price">${v.price} €</span>
  </button>
</li>`).join(''),

  destacados: (lang) => DESTACADOS.map((d) => `
<li class="dish">
  <figure>${pic(d.img, 'des', 480, 480, d.name[lang], '(min-width: 960px) 22vw, 46vw')}</figure>
  <p class="dish__name">${esc(d.name[lang])} <span>${d.price} €</span></p>
  <p class="dish__note">${esc(d.note[lang])}</p>
</li>`).join(''),

  carta: (lang) => DESAYUNOS.map((g) => `
<div class="carta__group">
  <h4>${esc(g.group[lang])}</h4>
  <ul>${g.items.map((it) => `
    <li><p class="carta__row"><span class="carta__name">${esc(it.name[lang])}${it.popular ? ` <em class="tag">${esc(t('vit.popular', lang))}</em>` : ''}</span><span class="carta__dots" aria-hidden="true"></span><span class="carta__price">${it.price}</span></p><p class="carta__desc">${esc(it.desc[lang])}</p></li>`).join('')}
  </ul>
</div>`).join(''),

  extras: (lang) => `<h4>${esc(EXTRAS.label[lang])}</h4><ul>${EXTRAS.items.map((x) => `<li>${esc(x[lang])} <span>${x.price}</span></li>`).join('')}</ul>`,

  bebidas: (lang) => BEBIDAS.map((g) => `<div><h4>${esc(g.group[lang])}</h4><ul>${g.items.map((x) => `<li>${esc(x[lang])}</li>`).join('')}</ul></div>`).join(''),

  tazas: (lang) => {
    const one = Array.from({ length: 9 }, (_, i) => `<li class="cup" style="--k:${i % 3}">${pic(`taza-${i + 1}`, 'taza', 320, 320, t('taza.alt', lang), '180px', true)}</li>`).join('');
    // Segunda copia para el bucle continuo: oculta a lectores de pantalla.
    const two = one.replace(/<li class="cup"/g, '<li class="cup" aria-hidden="true"').replace(/alt="[^"]*"/g, 'alt=""');
    return one + two;
  },

  afluencia: (lang) => {
    const row = (key, vals) => `<div class="aflu__row"><span class="aflu__lab">${esc(t(key, lang))}</span><div class="aflu__bars">${vals.map((v, i) => `<span style="--v:${v}" title="${AFLUENCIA.hours[i]}:00 · ${v}%"></span>`).join('')}</div></div>`;
    return `<div class="aflu" role="img" aria-label="${esc(t('vis.whenLead', lang))}">${row('vis.weekday', AFLUENCIA.weekday)}${row('vis.weekend', AFLUENCIA.weekend)}<div class="aflu__row aflu__row--axis"><span></span><div class="aflu__bars">${AFLUENCIA.hours.map((h) => `<span>${h}</span>`).join('')}</div></div></div>`;
  },

  footseal: (lang) => seal(lang === 'es' ? 'Plaça Fontanella · Dénia' : 'Plaça Fontanella · Dénia', lang === 'es' ? 'Bakery · Food · Wine' : 'Bakery · Food · Wine', 'seal seal--foot'),
};

function jsonld(lang) {
  const hours = { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: BIZ.open, closes: BIZ.close };
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Bakery', 'CafeOrCoffeeShop'],
        '@id': `${SITE}/#denia`,
        name: 'Niki & Niki — Bakery · Food · Wine',
        description: t('meta.desc', lang),
        url: `${SITE}/`,
        image: `${SITE}/img/og-1200.webp`,
        telephone: BIZ.phone,
        priceRange: '€€',
        servesCuisine: ['Brunch', 'Bakery', 'Eastern European', 'Specialty coffee'],
        address: { '@type': 'PostalAddress', streetAddress: BIZ.address, postalCode: BIZ.postal, addressLocality: BIZ.city, addressRegion: BIZ.region, addressCountry: 'ES' },
        geo: { '@type': 'GeoCoordinates', latitude: BIZ.lat, longitude: BIZ.lng },
        openingHoursSpecification: [hours],
        sameAs: [BIZ.instagram],
        hasMap: BIZ.maps,
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.3', reviewCount: '745', bestRating: '5' },
        acceptsReservations: false,
      },
      {
        '@type': ['Restaurant', 'Bakery'],
        '@id': `${SITE}/#moraira`,
        name: 'Niki & Niki — Moraira',
        telephone: MORAIRA.phone,
        address: { '@type': 'PostalAddress', streetAddress: MORAIRA.address, postalCode: MORAIRA.postal, addressLocality: MORAIRA.city, addressRegion: 'Alicante', addressCountry: 'ES' },
        geo: { '@type': 'GeoCoordinates', latitude: MORAIRA.lat, longitude: MORAIRA.lng },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday'], opens: '08:00', closes: '15:30' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '08:00', closes: '22:00' },
        ],
        acceptsReservations: true,
        sameAs: [BIZ.instagram],
      },
    ],
  }).replace(/</g, '\\u003c');
}

const tpl = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8');
fs.rmSync(DIST, { recursive: true, force: true });

for (const lang of ['es', 'en']) {
  const other = lang === 'es' ? 'en' : 'es';
  const base = lang === 'es' ? './' : '../';
  const url = lang === 'es' ? `${SITE}/` : `${SITE}/en/`;
  const vitrinaJson = JSON.stringify(Object.fromEntries(VITRINA.map((v) => [v.id, {
    name: v.name[lang], desc: v.desc[lang], price: `${v.price} €`, img: v.img, celebrate: v.tags.includes('celebrate'),
    seal: seal(ORIGINS[v.origin][lang], MAKER[lang], 'seal seal--sheet'),
  }]))).replace(/</g, '\\u003c');
  const clientI18n = JSON.stringify(Object.fromEntries(['status.open', 'status.soon', 'status.closed', 'status.short.open', 'status.short.closed'].map((k) => [k, t(k, lang)])));

  let html = tpl
    .replace(/\{\{block:(\w+)\}\}/g, (_, b) => blocks[b](lang))
    .replace(/\{\{t:([\w.]+)\}\}/g, (_, k) => t(k, lang))
    .replace(/\{\{biz\.(\w+)\}\}/g, (_, k) => BIZ[k])
    .replace(/\{\{mor\.(\w+)\}\}/g, (_, k) => MORAIRA[k])
    .replace(/\{\{reviews\}\}/g, BIZ.reviews)
    .replace('{{jsonld}}', () => jsonld(lang))
    .replace('{{clientI18n}}', () => clientI18n)
    .replace('{{vitrinaJson}}', () => vitrinaJson)
    .replace(/\{\{lang\}\}/g, lang)
    .replace(/\{\{locale\}\}/g, lang === 'es' ? 'es_ES' : 'en_GB')
    .replace(/\{\{otherLang\}\}/g, other)
    .replace(/\{\{otherUrl\}\}/g, lang === 'es' ? './en/' : '../')
    .replace(/\{\{url\}\}/g, url)
    .replace(/\{\{site\}\}/g, SITE)
    .replace(/\{\{base\}\}/g, base);

  const left = html.match(/\{\{[^}]+\}\}/g);
  if (left) throw new Error(`Tokens sin resolver (${lang}): ${[...new Set(left)].join(', ')}`);
  const out = path.join(DIST, lang === 'es' ? '' : 'en', 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log(`✓ ${path.relative(ROOT, out)}  ${(html.length / 1024).toFixed(0)} KB`);
}

// Recursos estáticos
fs.cpSync(path.join(SRC, 'img'), path.join(DIST, 'img'), { recursive: true });
for (const f of ['styles.css', 'main.js']) fs.copyFileSync(path.join(SRC, f), path.join(DIST, f));
fs.writeFileSync(path.join(DIST, '.nojekyll'), '');
fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${['', 'en/'].map((p) => `<url><loc>${SITE}/${p}</loc><xhtml:link rel="alternate" hreflang="es" href="${SITE}/"/><xhtml:link rel="alternate" hreflang="en" href="${SITE}/en/"/></url>`).join('\n')}
</urlset>
`);
console.log('✓ dist/ listo');
