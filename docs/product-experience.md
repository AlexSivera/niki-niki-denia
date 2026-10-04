# Product experience — Niki & Niki

## Usuario principal

| Perfil | Intención | Qué necesita saber primero |
|---|---|---|
| **Visitante internacional o residente extranjero** en Dénia (británico, nórdico, alemán, báltico) | «¿Dónde desayuno bien hoy?» | Si está abierto, dónde está, qué se come y si está en su idioma |
| **Local *foodie*** de Dénia | Pan de verdad, una tarta para el domingo, un brunch distinto | Qué hay en la vitrina, si puede encargar y cuánto cuesta |
| **Turista nacional de paso** (paseo marítimo y puerto) | Un café y algo dulce cerca del puerto | Precio, qué es cada cosa y si hay sitio |
| **Quien celebra algo** | Tarta entera para un cumpleaños | Qué tartas hay y cómo encargarla |
| **Quien está en Moraira o quiere cenar** | Cena con vino natural | Horario de noche, menú degustación y reserva |

## Tareas principales (por orden de frecuencia)

1. ¿Está abierto ahora? ¿Hasta qué hora?
2. ¿Dónde está y cómo llego?
3. ¿Qué se come? ¿Cuánto cuesta?
4. ¿Qué es eso de *syrniki*, *medovik*, *Vecrīga*, *bulka*?
5. ¿Puedo ir con mi perro? ¿Hay terraza? ¿Habrá mesa?
6. ¿Puedo encargar una tarta o una hogaza?
7. ¿Y por la noche? → Moraira.

## Objeciones y cómo las responde la web

| Objeción (sale de las reseñas) | Respuesta en la web |
|---|---|
| «Es caro» o «no hay precios a la vista» | Carta de desayunos y vitrina **con precios**, junto a lo que hay detrás de cada uno: mantequilla Lescure, requesón hecho en casa, salmón curado en casa y masa madre. Sin justificarse, solo con transparencia |
| «Nombres raros que solo entienden ellos» | Cada pieza báltica se explica en español con una frase y lleva su **sello de origen** |
| «Tardan mucho» | Bloque «Cuándo venir», sacado de las horas punta de Google: entre semana antes de las 10 hay mesa; los fines de semana de 12 a 15 h hay más espera |
| «No me atendieron en castellano» o «la carta solo en inglés» | Web **en español primero**, con versión completa en inglés |
| «¿Alérgenos?» | Aviso visible: casi todo contiene alérgenos y hay que preguntar al equipo (es lo que dice su carta) |
| «La vitrina estaba vacía a primera hora» | Nota honesta: la vitrina cambia cada día. Para asegurarte una tarta o una hogaza, encárgala |

## Objetivo comercial y CTA

- **CTA principal: «Cómo llegar»** (Google Maps). Una cafetería convierte cuando la gente cruza la puerta.
- **CTA secundario: «Ver la carta»** (ancla).
- **CTA de encargo: «Llamar para encargar»** (tel. 605 45 84 74) en la vitrina y en el pan.
- **CTA de Moraira: «Llamar a Moraira»** (625 02 63 00) en la sección de noche.
- En móvil, una **barra fija** con estado en vivo, «Cómo llegar» y «Llamar».

## Arquitectura

**One-page en dos idiomas** (`/` en español y `/en/` en inglés, generadas desde la misma fuente y enlazadas con `hreflang`). Es una cafetería de un local con una carta corta: todo lo que se busca cabe en un recorrido. Separar en páginas obligaría a más clics en móvil sin aportar nada. Moraira tiene su propio bloque, que es un puente y no una web aparte.

```
Cabecera fija   logo real · Vitrina · Desayunos · Pan · Visítanos · Moraira · ES/EN · estado en vivo
1. Hero         «La mesa»: foto cenital real que gira con el scroll + titular + Cómo llegar / Ver la carta
2. Lo que dicen Las palabras que más repiten 745 reseñas de Google (dato real de Google)
3. La vitrina   Momento firma: piezas sobre azulejo verde con sello de origen, filtros, ficha y precio, encargos
4. Desayunos    Carta completa de desayuno y brunch (hasta las 17:00) con 4 platos fotografiados + bebidas
5. Porcelana    «Ninguna taza es igual»: tira de tazas reales
6. El pan       Masa madre en hogaza o media, cita real de reseña y encargos
7. Visítanos    Fachada real, dirección, horario en vivo, cuándo venir, perros, terraza y mapa
8. Moraira      Sección oscura de noche: cocina de 16 a 22 h, menú degustación y vino natural
Pie             direcciones, horarios, Instagram, aviso de alérgenos
```

## Información prioritaria (lo que aparece sin hacer scroll)

Qué es (panadería y cafetería de brunch), qué la hace única (masa madre, tartas del Báltico, porcelana), dónde (Plaça Fontanella, Dénia), si está abierta ahora y el botón para ir.

## Comportamiento móvil

- La mesa del hero pasa **encima** del titular, más pequeña, y las anotaciones se convierten en una leyenda numerada.
- La vitrina es un **carrusel horizontal con *scroll snap***, con los filtros como chips desplazables. La ficha se abre como hoja inferior.
- La carta va en una sola columna con los precios alineados. Bebidas en acordeón.
- **Barra inferior fija**: estado · Cómo llegar · Llamar. Se oculta cuando el pie está a la vista.
- Áreas táctiles de 44 px como mínimo.

## Comportamiento desktop

- Hero en dos columnas: el texto a la izquierda y las dos mesas superpuestas a la derecha.
- Vitrina en estantes de 4 o 5 piezas con la ficha en panel lateral (`<dialog>`).
- Carta en dos columnas: los platos fotografiados a la izquierda y la lista completa a la derecha.

## Elementos diferenciales

1. **Sello de origen** (inspirado en las marcas de fábrica de la porcelana) en cada pieza de la vitrina.
2. **«La mesa»**: la propia fotografía cenital del negocio convertida en interfaz.
3. **Prueba social con datos reales**: los temas que Google extrae de 745 reseñas, sin testimonios inventados.
4. **Puente mañana y noche** entre Dénia y Moraira.
5. **Estado abierto o cerrado en vivo**, con la hora de Madrid.
