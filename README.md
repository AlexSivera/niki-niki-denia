# Niki & Niki — web

Panadería y cafetería de brunch en la Plaça Fontanella, 1 (Dénia), con segunda casa en Moraira. Masa madre, repostería del Báltico (medovik, syrniki, bulka) y café de especialidad servido en porcelana antigua.

Publicada en GitHub Pages: https://alexsivera.github.io/niki-niki-denia/ (inglés en `/en/`).

Web estática sin dependencias. El build genera las dos versiones de idioma desde una sola plantilla y un único archivo de datos.

```bash
npm run build     # genera dist/ (es en /, en en /en/)
npm run preview   # sirve dist/ en http://localhost:4321
npm run deploy    # compila y publica dist/ en la rama gh-pages
```

## Cambiar carta, precios, vitrina u horario

- **`src/data/site.mjs`**: contacto, horarios, vitrina (pieza, foto, precio, origen del sello), carta de desayuno, bebidas y afluencia.
- **`src/data/i18n.mjs`**: todos los textos en español e inglés.
- Cambia el horario de Dénia también en `src/main.js` (`OPEN` y `CLOSE`) para el estado «abierto ahora».

Después, `npm run build`.

## Fotos

- `src/img/`: WebP ya optimizados. Se generan con `node scripts/images.mjs` a partir de los originales de `.research/` (Instagram oficial y ficha de Google Maps), que no se suben al repositorio.
- El logo (`src/img/logo.png`) es la caligrafía real del negocio, extraída de su carta impresa y usada como máscara CSS.
- El origen de cada imagen está en `docs/design-direction.md`. Para pasar de demo a producción hay que pedir al propietario los originales y el logo vectorial, y confirmar los permisos de las fotos de clientes.

## Estructura

```
src/
  index.html        plantilla ({{t:clave}}, {{block:nombre}} que rellena el build)
  styles.css
  main.js           estado en vivo, giro de las mesas, vitrina (filtros y ficha), menú, barra móvil
  data/site.mjs     negocio, vitrina, carta, bebidas
  data/i18n.mjs     textos ES/EN
scripts/
  build.mjs  images.mjs  serve.mjs  deploy.mjs
docs/               investigación, estrategia, dirección creativa y QA
```
