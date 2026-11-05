# QA y autocrítica — Niki & Niki

Revisión del 4 de octubre de 2026 con Chrome (Playwright) sobre `dist/` servido en local y después sobre la URL publicada.

## Comprobaciones

| Área | Qué se comprobó | Resultado |
|---|---|---|
| Consola | Errores JS y de página en `/` y `/en/` | 0 errores |
| Imágenes | `naturalWidth` de todas las imágenes, `alt` presente | Todas cargan (las tazas eran *lazy* dentro de una cinta animada y se cambiaron a carga inmediata). 0 sin `alt` |
| Desbordamiento | `scrollWidth` frente a `clientWidth` a 375, 768 y 1440 px | Había desbordamiento en móvil: «porcelana antigua» con `nowrap` y la rejilla `1fr` se ensanchaban. **Corregido** con `minmax(0,1fr)`, salto de línea permitido y `overflow-x: clip` |
| Estado en vivo | Hora de Madrid (de madrugada) | «Cerrado · abrimos a las 8:00» en cabecera, ficha de visita y barra móvil |
| Menú móvil | Abrir, navegar a una sección y cerrarse solo | OK. También se cierra con Escape |
| Vitrina | Filtros (Del Báltico, De Francia, Para celebrar) | «Para celebrar» muestra Medovik, Tarta de queso y Carrot cake |
| Ficha (`<dialog>`) | Apertura, botón de encargo solo en tartas, cierre con Escape, el foco vuelve a la pieza | OK. **Corregido**: en escritorio el `<form>` del botón de cerrar ocupaba una celda de la rejilla y desordenaba la ficha |
| Sellos de origen | Legibilidad del texto en arco | **Corregido**: la «R» de «RECETA» se cortaba porque el texto era más largo que medio arco. Ahora el trazado empieza en el punto opuesto |
| Idiomas | `/en/` con `lang="en"`, títulos traducidos, `hreflang` y enlace ES↔EN | OK |
| Contraste | Ratios WCAG calculados | Terracota sobre mármol subió de ~3,9 a **4,70:1** (color oscurecido). Título de la leyenda (dorado, 3,3:1) cambiado a un dorado oscuro. Amarillo sobre verde: 5,45:1. Verde sobre amarillo: 7,37:1 |
| Teclado | Foco visible (anillo amarillo), salto al contenido, piezas de vitrina como `<button>` | OK |
| Movimiento | `prefers-reduced-motion` | Desactiva el giro de las mesas, las apariciones y la cinta de tazas (que pasa a scroll manual). La cinta tiene botón de pausa |
| Táctil | Botones e interactivos ≥ 44 px | OK (chips, barra, cerrar, idioma, menú) |
| SEO | `title`, `description`, `canonical`, `hreflang`, OG, JSON-LD `Bakery` + `CafeOrCoffeeShop` (Dénia) y `Restaurant` (Moraira), `sitemap.xml`, `robots.txt` | OK |

## Correcciones de diseño hechas tras revisar la web funcionando

1. **Marcas de la mesa del hero**: la 1 caía sobre las servilletas y la 2 y la 3 quedaban debajo de la leyenda. Se recolocaron sobre los syrniki, la mermelada y la bandeja de plata.
2. **Fachada**: el recorte 3:2 dentro de una celda alta cortaba el toldo («…OOD. WINE»). Se rehízo la composición de «Visítanos»: la fachada en 4:3 con el toldo entero y el logo, y la información y «Bueno saber» en una columna lateral.
3. **Foto de la estantería del pan** (bolsas de plástico, poco apetecible), sustituida por la hogaza entera sobre la tabla.
4. **Inicio en móvil**: la leyenda empujaba el titular por debajo del pliegue. En móvil la mesa es más compacta, sin marcas ni leyenda, y el titular y el CTA se ven al primer vistazo.
5. **Barra móvil**: «Cómo llegar» se partía en dos líneas (`nowrap`).
6. **Azulejo de la vitrina**: las juntas pesaban demasiado y parecía papel cuadriculado. Ahora son más sutiles.
7. **Mapa**: el `iframe` no llenaba su caja (ahora tiene posición absoluta).

## Autocrítica honesta

**¿Parece hecha para esta empresa?** Sí. Usa su logo real, su fachada con el toldo verde y las sillas amarillas, su barra de terrazo, sus syrniki en bandeja de plata, su medovik con vela y su porcelana. Los nombres bálticos están explicados y Moraira aparece. Cambiando el nombre por otro café no funcionaría.

**¿Existe un concepto y un WOW?** Sí: «una mesa del Báltico en una plaza del Mediterráneo». El WOW tiene dos tiempos: la mesa cenital real que gira con el scroll y lleva las anotaciones de lo que hay en ella, y la vitrina sobre azulejo verde con baldas de cristal y sellos de origen tipo marca de porcelana.

**¿El producto se vende visualmente?** Sí. Todas las fotos son reales del negocio. Las de Instagram son muy buenas. Algunas de clientes (la miga del pan, la hogaza) son de móvil y se notan algo planas: es lo primero que pediría mejorar con fotos del propietario.

**Lo que todavía es mejorable (sin bloquear la demo):**
- **Precios**: salen de cartas fotografiadas y coinciden con reseñas recientes, pero hay que confirmarlos con el propietario. Los de café no se publican porque no coinciden con lo que se ha pagado según las reseñas.
- **Fotos de clientes**: confirmar permisos o sustituirlas por originales del negocio antes de publicar en definitiva.
- **La sección de bebidas** es una lista correcta pero sin imagen. Con una foto del servicio de té en plata (hay buenas en Google Maps) ganaría.
- El *pattern* de *eyebrow* con línea es un recurso habitual. Se mantiene porque ordena bien las secciones, no por personalidad.
- Faltan alérgenos por plato porque el negocio no los publica. La web replica su aviso.

**Test de 5 segundos (móvil):** mesa real con syrniki y café → «Masa madre, tartas del Báltico y café en porcelana antigua» → «Plaça Fontanella, Dénia» → barra con «Cerrado/Abierto», «Llamar» y «Cómo llegar». Se entiende qué es, qué ofrece, qué carácter tiene y qué hacer.

**Test de identidad (sin logo, nombre, colores ni fotos):** quedan los sellos de origen tipo marca de porcelana, los platos con filo dorado, las baldas de cristal, los nombres *syrniki / medovik / bulka / Vecrīga* y el puente de mañana a noche con Moraira. Sigue siendo reconocible.

## Revisión del 5 de noviembre de 2026

Recorrido pantalla a pantalla de la URL publicada (390 px y 1440 px) y nueva visita a Google Maps e Instagram. Cambios aplicados:

| Área | Cambio |
|---|---|
| Moraira | Botón **«Reservar mesa»** con la reserva online real (CoverManager desde su ficha de Google). Carta de noche con los platos que publicaron en octubre, en lugar del menú degustación (sin confirmar). Fotos nuevas de Instagram: mesa de la carta de noche y pato |
| Barra móvil | En la sección de Moraira pasa a modo noche con estado de Moraira, «Cómo llegar» y «Reservar». Muestra «Dénia» o «Moraira» junto al estado |
| Cabecera | El estado indica el local: «Dénia · Abierto ahora…» |
| Reseñas | En vez de la cuadrícula de cifras: nota, 3 citas literales y los temas como etiquetas (datos del 5/11: 759 reseñas, «panadería» en cabeza) |
| Desayunos | Carta en pestañas accesibles (Con pan / Dulce / Salado, con flechas del teclado; sin JavaScript se ve entera). La sección pasa de ~3.800 a ~2.950 px en móvil. Bebidas en línea y foto del servicio de té |
| Fotos | Tazas con la porcelana a la vista (4 sustituidas), syrniki y tostada de aguacate de mejor calidad, miga sin la mano, hogaza más luminosa, tartas enteras para «Encargos» (antes repetía el medovik de la vitrina) |
| Pan y encargos | El botón ya no parte el teléfono («Encargar · 605 45 84 74»). Mención a Glovo |
| Detalles | Texto superior del hero sin cortes en móvil, pie de foto de la mesa en móvil, «Bueno saber» con iconos iguales y en una columna en móvil, indicador de desplazamiento de la vitrina, nota «4.3» en inglés, imagen para compartir en JPG con medidas |

Comprobado en local (`dist/` servido en http://localhost:4321): consola sin errores propios (solo avisos del iframe de Google Maps), sin desbordamiento horizontal a 390 px, pestañas con ratón y teclado, barra de Moraira a la vista en su sección, versión inglesa con textos traducidos. Altura total en móvil: de 13.390 a ~12.790 px.

**Pendiente de confirmar con el negocio**: si sigue el menú degustación de Moraira y su precio, y el enlace directo a su tienda de Glovo.
