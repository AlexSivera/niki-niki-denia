# Dirección creativa — Niki & Niki

## Concepto central

> **Una mesa del Báltico en una plaza del Mediterráneo.**

Recetas de casa de Letonia y del este de Europa (medovik, syrniki, Vecrīga, bulka), pan de masa madre y café de especialidad, servidos en porcelana antigua bajo un toldo verde, con sillas amarillas y luz de Dénia.

Conceptos que se valoraron:
1. **«Ninguna taza es igual»**: la porcelana desparejada. Es lo más memorable, pero solo explica la experiencia y deja fuera el producto. Queda como capítulo, no como eje.
2. **«La vitrina»**: el mostrador como interfaz. Vende muy bien, pero por sí solo es genérico de pastelería. Se convierte en el momento firma.
3. **«Una mesa del Báltico en el Mediterráneo»**: el elegido. Une origen, producto, lugar y porcelana, y es lo que ningún competidor de Dénia puede decir.

## Idea visual

> **La web se mira como se mira su mesa: desde arriba.**

El Instagram del negocio está hecho casi entero de **fotos cenitales de mesas redondas** (de mármol en Dénia y oscuras en la terraza) con porcelana floral, bandejas de plata y latte art. La web recoge ese gesto: las fotos de mesa se recortan en **círculo**, como mesas flotando, y cada pieza de la vitrina lleva un **sello de origen** circular, igual que la marca que la porcelana lleva debajo del plato.

## Personalidad

- **Hospitalaria**: casa de la abuela, porcelana con flores, «absolutely no reason to rush».
- **Precisa**: Lescure, requesón casero, grano de Brasil, SCA. El cuidado se nota en los detalles.
- **De otro sitio, con orgullo**: nombres letones sin traducirlos del todo, pero explicados.
- **Soleada**: amarillo de las sillas y del menú, terraza en la plaza.
- **Contemporánea**: vino natural, música, terrazo, Instagram en inglés.

## Paleta (sacada del local real)

| Token | Color | De dónde sale |
|---|---|---|
| `--marble` | #F4F0E8 | Mesas de mármol blanco (fondo principal) |
| `--paper` | #FBF8F1 | Papel de la carta de desayunos |
| `--awning` | #1D3A2E | Toldo verde botella y círculo del logo de Instagram |
| `--tile` | #24503F | Azulejo verde detrás de la vitrina |
| `--sun` | #F1C232 | Sillas amarillas de la terraza y carta mostaza |
| `--peach` | #EBC3A6 | Fachada color melocotón |
| `--terracotta` | #B9654A | Pared terracota del interior |
| `--rose` | #C24E6B | Rosas de la porcelana (con mucha moderación) |
| `--gilt` | #A88442 | Filos dorados de los platos (líneas finas) |
| `--ink` | #1B1A17 | Mesas oscuras de la terraza y noche de Moraira |

Reglas: el fondo es mármol o papel y **nunca blanco puro**. El amarillo sirve para acentos y botones, nunca como fondo grande, salvo la banda de reseñas. El verde ocupa los bloques de vitrina. El negro tinta solo se usa para la noche (Moraira).

## Tipografía

- **Logo**: el **logo caligráfico real** «Niki&Niki», extraído de su carta impresa y convertido en máscara para colorearlo. No se ha dibujado ningún logo nuevo.
- **Titulares: Young Serif.** Una serif cálida y algo antigua, de libro de recetas de los 60 y de marca de porcelana. Tiene carácter sin ser «lujo» y conversa con la caligrafía del logo.
- **Texto, interfaz y sellos: Archivo** (variable). En el cuerpo se usa a anchura normal. En las etiquetas y los sellos, en **mayúsculas expandidas** (wdth 125) con mucho tracking, como las cajas de sección de su carta («BISTRO», «DESSERTS», «COFFEE») y las marcas de fábrica.
- Precios en cifras tabulares.

## Fotografía

- **Solo fotos reales del negocio** de Instagram (propias, muy buenas) y de Google Maps (las del propietario y las de clientes mejor resueltas).
- **Cenitales recortadas en círculo**: mesas, platos y tazas.
- **Verticales a sangre** para el local: fachada, barra de terrazo y vitrina.
- Ni stock, ni ilustraciones de producto, ni imágenes generadas. El producto tiene que dar hambre: medovik en capas, croissant de almendra, huevos turcos y miga de masa madre.
- La foto con mejor apetito manda. Las de Instagram tienen un tono cálido y apagado, así que se ajustan las de clientes para que no desentonen (contraste y saturación suaves).

## Composición y ritmo

- Desayuno lento: márgenes amplios, columnas de lectura de carta y **ritmo alterno** entre secciones claras de mármol y secciones de color (verde vitrina, amarillo reseñas y tinta noche).
- Círculos (mesas, platos y sellos) contra rectángulos verticales (local y puertas). Nada de rejillas de tarjetas iguales.
- Hairlines doradas como los filos de los platos para separar elementos de la carta.

## Elemento firma

**El sello de origen**: un círculo tipográfico (SVG con texto en arco) inspirado en las marcas de fábrica de la porcelana: «RECETA DE RĪGA · OBRADOR NIKI&NIKI». Aparece en cada pieza de la vitrina y, en pequeño, como marca de agua en el pie.

## Momento firma (WOW)

1. **«La mesa»** (hero): la mesa real de los syrniki, con sus bandejas de plata, vista desde arriba en un círculo grande que **gira despacio con el scroll**. Encima, una segunda mesa con el café en taza floral gira en sentido contrario. Lleva **anotaciones a mano alzada** que nombran lo que hay en la mesa. Es la foto del propio negocio convertida en interfaz.
2. **La vitrina** sobre azulejo verde: piezas en estantes de cristal, cada una con su sello, filtros por origen y ficha con historia y precio.

## Movimiento

- Rotación de las mesas ligada al scroll, suave (máximo de unos 30°).
- Aparición escalonada de las piezas de la vitrina (opacidad y 8 px).
- Tira de tazas en desplazamiento lento, que se puede pausar.
- Todo se desactiva con `prefers-reduced-motion`.

## Qué NO se hace

- Ilustrar pasteles. Hay fotos reales mejores.
- Folclore báltico (bordados, banderas o trajes). El origen se cuenta con palabras y sellos.
- Ocultar los precios.
- Hacer «premium = negro + serif». El negocio es luminoso, amarillo y verde.

## Origen de las imágenes (demo)

| Archivo web | Origen |
|---|---|
| hero-syrniki, hero-cafe, cardamomo, moraira-* | Instagram oficial @nikiniki.bakery (posts de 2026) |
| medovik, croissant-almendra, croissant, huevos-turcos, shakshuka, canele, tarta-queso, carrot-cake, tostada-*, pan-*, fachada, barra, vitrina-*, mascotas, tazas-* | Fotos de la ficha de Google Maps (subidas por el propietario o por clientes) |
| logo | Extraído de la carta impresa del local (foto de Google Maps) |

**Antes de publicar en definitiva**: pedir al propietario los originales y el logo vectorial, y confirmar permisos de las fotos de clientes.
