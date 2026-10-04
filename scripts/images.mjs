// Prepara las fotos de la web en WebP a varios tamaños usando Chrome (canvas), sin dependencias.
// Uso: node scripts/images.mjs [filtro]   (lee de .research/, escribe en src/img/)
// Necesita playwright-core y Chrome instalados (solo para preparar imágenes, no para el build).
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, '.research');
const OUT = path.join(root, 'src', 'img');
const PW = process.env.PLAYWRIGHT_CORE || 'C:/Users/Alex Sivera/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright-core';
const { chromium } = require(PW);

// [origen, nombre, anchos, opciones]
// ar: proporción ancho/alto del recorte (por defecto la del original).
// fx, fy: centro del recorte en fracción del original. z: zoom (1 = el mayor recorte posible con esa proporción).
// tone: ajuste suave para igualar fotos de clientes con el tono cálido de Instagram.
const SQ = { ar: 1 };
const JOBS = [
  // Hero: las dos mesas (Instagram oficial)
  ['ig/DdCVLtvsrln_0.jpg', 'mesa-syrniki', [560, 900, 1400], { ...SQ, fx: 0.5, fy: 0.5, z: 1.04, q: 0.82 }],
  ['ig/DeB7SX6iE1G_0.jpg', 'mesa-cafe', [360, 600, 900], { ...SQ, fx: 0.56, fy: 0.665, z: 1.42 }],
  ['ig/DdCVLtvsrln_0.jpg', 'og', [1200], { ar: 1200 / 630, fx: 0.5, fy: 0.5, z: 1 }],

  // Vitrina (cuadradas: se muestran como plato redondo)
  ['gm/gm070.jpg', 'vit-medovik', [420, 760], { ...SQ, fx: 0.5, fy: 0.56, z: 1.06, tone: 1 }],
  ['gm/gm115.jpg', 'vit-croissant-almendra', [420, 760], { ...SQ, fx: 0.47, fy: 0.68, z: 1.25, tone: 1 }],
  ['gm/gm120.jpg', 'vit-croissant', [420, 760], { ...SQ, fx: 0.5, fy: 0.45, z: 1.3, tone: 1 }],
  ['gm/gm004.jpg', 'vit-cardamomo', [420, 760], { ...SQ, fx: 0.4, fy: 0.27, z: 1.75, tone: 1 }],
  ['gm/gm009.jpg', 'vit-amapola', [420, 760], { ...SQ, fx: 0.5, fy: 0.6, z: 1.25, tone: 1 }],
  ['gm/gm039.jpg', 'vit-canele', [420, 760], { ...SQ, fx: 0.55, fy: 0.58, z: 1.15, tone: 1 }],
  ['gm/gm042.jpg', 'vit-tarta-queso', [420, 760], { ...SQ, fx: 0.43, fy: 0.66, z: 1.55, tone: 1 }],
  ['gm/gm087.jpg', 'vit-carrot', [420, 760], { ...SQ, fx: 0.52, fy: 0.6, z: 1.2, tone: 1 }],
  ['owner/owner26.jpg', 'vit-madeleine', [420, 760], { ...SQ, fx: 0.5, fy: 0.5, z: 1.3 }],
  ['gm/gm013.jpg', 'vit-danish', [420, 760], { ...SQ, fx: 0.5, fy: 0.47, z: 1.15, tone: 1 }],

  // Desayunos
  ['gm/gm113.jpg', 'des-turcos', [480, 900], { ...SQ, fx: 0.42, fy: 0.5, z: 1, tone: 1 }],
  ['gm/gm157.jpg', 'des-shakshuka', [480, 900], { ...SQ, fx: 0.55, fy: 0.45, z: 1, tone: 1 }],
  ['ig/DdCVLtvsrln_0.jpg', 'des-syrniki', [480, 900], { ...SQ, fx: 0.63, fy: 0.74, z: 2.1 }],
  ['gm/gm021.jpg', 'des-tostada', [480, 900], { ...SQ, fx: 0.62, fy: 0.62, z: 1.2, tone: 1 }],

  // Tazas (círculos)
  ['gm/gm075.jpg', 'taza-1', [320], { ...SQ, fx: 0.5, fy: 0.45, z: 1.0, tone: 1 }],
  ['gm/gm177.jpg', 'taza-2', [320], { ...SQ, fx: 0.52, fy: 0.5, z: 1.15, tone: 1 }],
  ['gm/gm102.jpg', 'taza-3', [320], { ...SQ, fx: 0.52, fy: 0.36, z: 1.35, tone: 1 }],
  ['gm/gm184.jpg', 'taza-4', [320], { ...SQ, fx: 0.33, fy: 0.6, z: 1.9, tone: 1 }],
  ['gm/gm154.jpg', 'taza-5', [320], { ...SQ, fx: 0.52, fy: 0.5, z: 1.3, tone: 1 }],
  ['gm/gm181.jpg', 'taza-6', [320], { ...SQ, fx: 0.42, fy: 0.62, z: 1.6, tone: 1 }],
  ['gm/gm069.jpg', 'taza-7', [320], { ...SQ, fx: 0.42, fy: 0.55, z: 1.45, tone: 1 }],
  ['gm/gm147.jpg', 'taza-8', [320], { ...SQ, fx: 0.47, fy: 0.55, z: 1.55, tone: 1 }],
  ['ig/DcrGY-Xo1Wz_0.jpg', 'taza-9', [320], { ...SQ, fx: 0.33, fy: 0.72, z: 2.1 }],

  // Pan y encargos
  ['gm/gm132.jpg', 'pan-miga', [600, 1100], { ar: 4 / 3, fx: 0.5, fy: 0.5, z: 1, tone: 1 }],
  ['gm/gm054.jpg', 'pan-hogaza', [500, 900], { ar: 4 / 5, fx: 0.52, fy: 0.5, z: 1, tone: 1 }],
  ['gm/gm070.jpg', 'encargo-medovik', [500, 900], { ar: 4 / 5, fx: 0.5, fy: 0.5, z: 1, tone: 1 }],

  // Local
  ['gm/gm109.jpg', 'fachada', [700, 1200, 1600], { ar: 4 / 3, fx: 0.5, fy: 0.5, z: 1, tone: 1 }],
  ['gm/gm020.jpg', 'barra', [500, 900], { ar: 4 / 5, fx: 0.5, fy: 0.55, z: 1, tone: 1 }],
  ['gm/gm149.jpg', 'mascotas', [240], { ...SQ, fx: 0.55, fy: 0.5, z: 1.45 }],

  // Moraira (Instagram oficial)
  ['ig/DdvrVLaIHPw_0.jpg', 'moraira-tartar', [500, 900], { ar: 4 / 5, fx: 0.5, fy: 0.5, z: 1 }],
  ['ig/DY4RS7CI_PG_0.jpg', 'moraira-sala', [500, 900], { ar: 4 / 5, fx: 0.5, fy: 0.5, z: 1 }],
  ['ig/DdobieeoVkO_0.jpg', 'moraira-degustacion', [500, 900], { ar: 4 / 5, fx: 0.5, fy: 0.5, z: 1 }],
];

const filter = process.argv[2];
const toUrl = (p) => 'file:///' + p.split(path.sep).join('/');

const browser = await chromium.launch({ channel: 'chrome', args: ['--allow-file-access-from-files'] });
const page = await browser.newPage();
const tmp = path.join(SRC, '_img.html');
fs.writeFileSync(tmp, '<canvas id=c></canvas>');
await page.goto(toUrl(tmp));
fs.mkdirSync(OUT, { recursive: true });

for (const [src, name, widths, opt] of JOBS) {
  if (filter && !name.includes(filter)) continue;
  for (const w of widths) {
    const data = await page.evaluate(async ({ url, w, opt }) => {
      const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
      const W = img.naturalWidth, H = img.naturalHeight;
      const ar = opt.ar || W / H;
      let cw = W, ch = W / ar;
      if (ch > H) { ch = H; cw = H * ar; }
      cw /= opt.z || 1; ch /= opt.z || 1;
      let sx = (opt.fx ?? 0.5) * W - cw / 2, sy = (opt.fy ?? 0.5) * H - ch / 2;
      sx = Math.max(0, Math.min(W - cw, sx)); sy = Math.max(0, Math.min(H - ch, sy));
      const scale = Math.min(1, w / cw);
      const c = document.getElementById('c');
      c.width = Math.round(cw * scale); c.height = Math.round(ch * scale);
      const g = c.getContext('2d');
      g.imageSmoothingQuality = 'high';
      if (opt.tone) g.filter = 'saturate(0.88) contrast(1.04) sepia(0.06)';
      g.drawImage(img, sx, sy, cw, ch, 0, 0, c.width, c.height);
      return c.toDataURL('image/webp', opt.q || 0.8);
    }, { url: toUrl(path.join(SRC, src)), w, opt });
    const file = path.join(OUT, `${name}-${w}.webp`);
    fs.writeFileSync(file, Buffer.from(data.split(',')[1], 'base64'));
    console.log(`${path.relative(root, file)}  ${(fs.statSync(file).size / 1024).toFixed(0)} KB`);
  }
}

// Logo: máscara del logo caligráfico real (sale de la carta impresa) y favicon/icono como su avatar de Instagram.
if (!filter || filter === 'logo') {
  fs.copyFileSync(path.join(SRC, 'logo-script.png'), path.join(OUT, 'logo.png'));
  for (const size of [32, 180, 512]) {
    const data = await page.evaluate(async ({ url, size }) => {
      const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
      const c = document.getElementById('c'); c.width = c.height = size;
      const g = c.getContext('2d');
      g.fillStyle = '#1D3A2E'; g.beginPath(); g.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2); g.fill();
      // logo teñido de crema
      const t = document.createElement('canvas'); t.width = img.width; t.height = img.height;
      const tg = t.getContext('2d'); tg.drawImage(img, 0, 0); tg.globalCompositeOperation = 'source-in'; tg.fillStyle = '#F4E9CF'; tg.fillRect(0, 0, t.width, t.height);
      const lw = size * (size < 64 ? 0.92 : 0.78), lh = lw * img.height / img.width;
      g.drawImage(t, (size - lw) / 2, (size - lh) / 2 - size * 0.02, lw, lh);
      return c.toDataURL('image/png');
    }, { url: toUrl(path.join(SRC, 'logo-script.png')), size });
    fs.writeFileSync(path.join(OUT, `icon-${size}.png`), Buffer.from(data.split(',')[1], 'base64'));
  }
  console.log('src/img/logo.png + icon-32/180/512.png');
}

await browser.close();
fs.unlinkSync(tmp);
