// Datos del negocio, carta y vitrina. Todo bilingüe: { es, en }.
// Fuentes: ficha de Google Maps, cartas fotografiadas en Google Maps e Instagram @nikiniki.bakery (oct. 2026).

export const BIZ = {
  name: 'Niki & Niki',
  phone: '+34605458474',
  phoneLabel: '605 45 84 74',
  address: 'Plaça Fontanella, 1',
  postal: '03700',
  city: 'Dénia',
  region: 'Alicante',
  lat: 38.8433588,
  lng: 0.1100511,
  open: '08:00',
  close: '17:00',
  instagram: 'https://www.instagram.com/nikiniki.bakery/',
  maps: 'https://www.google.com/maps/place/Cafeter%C3%ADa+Niki+%26+Niki/@38.8433588,0.1100511,19z/data=!4m6!3m5!1s0x129e1b18bb44fa1b:0x8229be70f495bfa9!8m2!3d38.8433588!4d0.1100511!16s%2Fg%2F11t85c3wxj',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=38.8433588,0.1100511',
  rating: '4,3',
  reviews: '745',
};

export const MORAIRA = {
  phone: '+34625026300',
  phoneLabel: '625 02 63 00',
  address: 'Av. de la Paz, 4',
  postal: '03724',
  city: 'Moraira',
  lat: 38.6887569,
  lng: 0.131908,
  directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6887569,0.131908',
};

// Temas que Google Maps detecta en las reseñas (número de reseñas que los mencionan).
export const TOPICS = [
  { n: 29, es: 'café de especialidad', en: 'specialty coffee' },
  { n: 26, es: 'tarta de queso', en: 'cheesecake' },
  { n: 22, es: 'pan de masa madre', en: 'sourdough bread' },
  { n: 15, es: 'shakshuka', en: 'shakshuka' },
  { n: 13, es: 'syrniki', en: 'syrniki' },
  { n: 10, es: 'medovik', en: 'medovik' },
  { n: 10, es: 'porcelana', en: 'porcelain' },
  { n: 7, es: 'canelé', en: 'canelé' },
];

// Orígenes para el sello (marca de fábrica).
export const ORIGINS = {
  baltic: { es: 'Receta del Báltico', en: 'A Baltic recipe' },
  france: { es: 'Receta de Francia', en: 'A French recipe' },
  bordeaux: { es: 'Receta de Burdeos', en: 'From Bordeaux' },
  donostia: { es: 'Receta de Donostia', en: 'From San Sebastián' },
  england: { es: 'Receta inglesa', en: 'An English classic' },
  denmark: { es: 'Receta danesa', en: 'A Danish classic' },
};

export const VITRINA = [
  {
    id: 'medovik', img: 'vit-medovik', price: '6,65', origin: 'baltic', tags: ['baltic', 'celebrate'],
    name: { es: 'Medovik · Medus kūka', en: 'Medovik · Medus kūka' },
    short: { es: 'Tarta de miel en capas', en: 'Layered honey cake' },
    desc: {
      es: 'Capas finas de bizcocho de miel y crema, con miel de castaño y nueces. En Letonia se llama Medus kūka. También la hacemos entera, por encargo.',
      en: 'Thin layers of honey sponge and cream, with chestnut honey and walnuts. In Latvia it’s called Medus kūka. We also bake it whole, to order.',
    },
  },
  {
    id: 'tarta-queso', img: 'vit-tarta-queso', price: '5,65', origin: 'donostia', tags: ['celebrate'],
    name: { es: 'Tarta de queso San Sebastián', en: 'San Sebastián cheesecake' },
    short: { es: 'Caramelo salado y vainilla', en: 'Salted caramel and vanilla' },
    desc: {
      es: 'Tostada por fuera y cremosa por dentro, con caramelo salado y vainilla. Es lo que más se repite en nuestras reseñas después del café.',
      en: 'Burnt outside, creamy inside, with salted caramel and vanilla. After the coffee, it’s what our reviews mention most.',
    },
  },
  {
    id: 'croissant-almendra', img: 'vit-croissant-almendra', price: '3,65', origin: 'france', tags: ['france'], popular: true,
    name: { es: 'Croissant de almendra', en: 'Almond croissant' },
    short: { es: 'Frangipane y un toque de ron', en: 'Frangipane and a dash of rum' },
    desc: {
      es: 'Relleno de crema frangipane con ron y cubierto de almendra. Toda nuestra masa de hojaldre y de croissant se hace solo con mantequilla francesa Lescure.',
      en: 'Filled with frangipane and rum, topped with almonds. All our puff and croissant dough is made exclusively with French Lescure butter.',
    },
  },
  {
    id: 'croissant', img: 'vit-croissant', price: '2,35', origin: 'france', tags: ['france'],
    name: { es: 'Croissant', en: 'Croissant' },
    short: { es: 'Con mantequilla Lescure', en: 'Made with Lescure butter' },
    desc: {
      es: 'Hecho con mantequilla Lescure, de Charentes. Tal cual, o en el desayuno con mermelada de fresa y mantequilla francesa.',
      en: 'Made with Lescure butter from Charentes. Have it plain, or at breakfast with strawberry jam and French butter.',
    },
  },
  {
    id: 'cardamomo', img: 'vit-cardamomo', price: '3,10', origin: 'baltic', tags: ['baltic'],
    name: { es: 'Bulka de cardamomo', en: 'Cardamom bulka' },
    short: { es: 'Bollo trenzado con cardamomo', en: 'Braided cardamom bun' },
    desc: {
      es: '«Bulka» es como se llama al bollo en el Báltico. Este va trenzado, con cardamomo y azúcar perlado. También lo hacemos de canela.',
      en: '“Bulka” is what a sweet bun is called around the Baltic. This one is braided, with cardamom and pearl sugar. We also make a cinnamon one.',
    },
  },
  {
    id: 'amapola', img: 'vit-amapola', price: '3,10', origin: 'baltic', tags: ['baltic'],
    name: { es: 'Bulka de amapola', en: 'Poppy seed bulka' },
    short: { es: 'Espiral de semillas de amapola', en: 'Poppy seed swirl' },
    desc: {
      es: 'Una espiral de masa tierna con capas de crema de semillas de amapola: un clásico de las panaderías del Báltico. Hay versión con chocolate blanco o negro.',
      en: 'A soft swirl layered with poppy seed filling, a classic of Baltic bakeries. There’s also a version with dark or white chocolate.',
    },
  },
  {
    id: 'canele', img: 'vit-canele', price: '1,95', origin: 'bordeaux', tags: ['france'],
    name: { es: 'Canelé', en: 'Canelé' },
    short: { es: 'Corteza caramelizada', en: 'Caramelised crust' },
    desc: {
      es: 'Por fuera, corteza caramelizada. Por dentro, tierno y con vainilla. Es pequeño, así que es difícil pedir solo uno.',
      en: 'A caramelised crust with a soft vanilla centre. It’s small, which makes it hard to stop at one.',
    },
  },
  {
    id: 'carrot', img: 'vit-carrot', price: '5,65', origin: 'england', tags: ['celebrate'],
    name: { es: 'Carrot cake', en: 'Carrot cake' },
    short: { es: 'Crema suave y lima', en: 'Soft cream and lime' },
    desc: {
      es: 'Bizcocho especiado de zanahoria con nueces, crema suave y ralladura de lima.',
      en: 'Spiced carrot sponge with walnuts, soft cream and lime zest.',
    },
  },
  {
    id: 'danish', img: 'vit-danish', price: '3,65', origin: 'denmark', tags: [],
    name: { es: 'Danish de frutos rojos', en: 'Berry danish' },
    short: { es: 'Hojaldre y frangipane', en: 'Puff pastry and frangipane' },
    desc: {
      es: 'Hojaldre con mantequilla Lescure, crema frangipane y frutos rojos.',
      en: 'Lescure-butter puff pastry with frangipane and berries.',
    },
  },
  {
    id: 'madeleine', img: 'vit-madeleine', price: '1,25', origin: 'france', tags: ['france'],
    name: { es: 'Madeleine', en: 'Madeleine' },
    short: { es: 'Limón o frambuesa', en: 'Lemon or raspberry' },
    desc: {
      es: 'Pequeña y esponjosa, de limón o de frambuesa. Perfecta para acompañar el café.',
      en: 'Small and spongy, lemon or raspberry. Made for a coffee.',
    },
  },
];

// Carta de desayunos (carta impresa «BREAKFAST»).
export const DESAYUNOS = [
  { group: { es: 'Con nuestro pan de masa madre', en: 'On our sourdough' }, items: [
    { price: '11,00', popular: true, name: { es: 'Huevos turcos', en: 'Turkish eggs' }, desc: { es: 'Yogur griego con ajo y menta, dos huevos escalfados y mantequilla especiada', en: 'Greek yoghurt with garlic and mint, two poached eggs, spiced butter' } },
    { price: '12,50', name: { es: 'Shakshuka', en: 'Shakshuka' }, desc: { es: 'Huevos en salsa de tomate picante, con pan de masa madre', en: 'Eggs in spicy tomato sauce, with sourdough' } },
    { price: '10,50', name: { es: 'Tostada de salmón curado en casa', en: 'House-cured salmon toast' }, desc: { es: 'Con queso crema al eneldo y ajo', en: 'With dill and garlic cream cheese' } },
    { price: '10,50', name: { es: 'Tostada de huevos revueltos', en: 'Scrambled egg toast' }, desc: { es: 'Huevos esponjosos, espárragos salteados al limón y queso Comté', en: 'Fluffy eggs, lemon-sautéed asparagus and Comté' } },
    { price: '9,50', name: { es: 'Huevo pasado por agua', en: 'Soft-boiled egg' }, desc: { es: 'Con mantequilla de trufa, queso y pan tostado', en: 'With truffle butter, cheese and toasted sourdough' } },
    { price: '6,50', name: { es: 'Tostada de aguacate', en: 'Avocado toast' }, desc: { es: 'Con el extra que quieras', en: 'With a topping of your choice' } },
    { price: '5,50', name: { es: 'Tostada con tomate', en: 'Tomato toast' }, desc: { es: 'Con el extra que quieras', en: 'With a topping of your choice' } },
  ] },
  { group: { es: 'Dulce y de cuchara', en: 'Sweet & by the spoon' }, items: [
    { price: '13,50', name: { es: 'Syrniki', en: 'Syrniki' }, desc: { es: 'Tortitas de requesón hecho en casa, con crema agria y leche condensada', en: 'Pancakes of house-made cottage cheese, with sour cream and condensed milk' } },
    { price: '8,90', name: { es: 'Granola casera', en: 'Homemade granola' }, desc: { es: 'Con yogur griego, fruta fresca y miel de castaño', en: 'With Greek yoghurt, fresh fruit and chestnut honey' } },
    { price: '6,20', name: { es: 'Porridge de avena', en: 'Oatmeal' }, desc: { es: 'En agua o bebida de avena, con frutos rojos, yogur griego y miel de castaño', en: 'Cooked in water or oat milk, with berries, Greek yoghurt and chestnut honey' } },
    { price: '11,50', name: { es: 'Açaí bowl', en: 'Açaí bowl' }, desc: { es: 'Con granola casera, fruta de temporada y coco', en: 'With homemade granola, seasonal fruit and coconut' } },
    { price: '3,60', name: { es: 'Croissant con mermelada', en: 'Croissant with jam' }, desc: { es: 'Mermelada de fresa y mantequilla francesa', en: 'Strawberry jam and French butter' } },
  ] },
  { group: { es: 'Salado de la casa', en: 'House savouries' }, items: [
    { price: '11,50', name: { es: 'Tortilla', en: 'Omelette' }, desc: { es: 'Con jamón casero y queso trufado', en: 'With house-made ham and truffle cheese' } },
    { price: '9,90', name: { es: 'Truffle blanche', en: 'Truffle blanche' }, desc: { es: 'Pan crujiente con pavo, queso de oveja trufado y gouda fundido', en: 'Crisp bread with turkey, truffled sheep’s cheese and melted gouda' } },
    { price: '8,50', name: { es: 'Ensaladilla rusa', en: 'Russian salad' }, desc: { es: 'Con ternera casera', en: 'With house-cooked beef' } },
    { price: '7,50', name: { es: 'Paté de pollo casero', en: 'Homemade chicken pâté' }, desc: { es: 'Con pan de masa madre', en: 'With sourdough' } },
  ] },
];

export const EXTRAS = {
  label: { es: 'Extras para tu tostada', en: 'Toast toppings' },
  items: [
    { price: '4,00', es: 'Salmón curado en casa', en: 'House-cured salmon' },
    { price: '4,50', es: 'Salmón al horno', en: 'Baked salmon' },
    { price: '3,50', es: 'Jamón ibérico', en: 'Jamón ibérico' },
    { price: '1,70', es: 'Huevo escalfado', en: 'Poached egg' },
    { price: '3,50', es: 'Fruta', en: 'Fruit' },
  ],
};

// Platos fotografiados en la sección de desayunos.
export const DESTACADOS = [
  { img: 'des-turcos', price: '11,00', name: { es: 'Huevos turcos', en: 'Turkish eggs' }, note: { es: 'Marcado como «popular» en Google', en: 'Marked “popular” on Google' } },
  { img: 'des-syrniki', price: '13,50', name: { es: 'Syrniki', en: 'Syrniki' }, note: { es: 'Requesón casero y mermelada de grosella negra', en: 'House cottage cheese, blackcurrant jam' } },
  { img: 'des-shakshuka', price: '12,50', name: { es: 'Shakshuka', en: 'Shakshuka' }, note: { es: 'Picante, con pan para mojar', en: 'Spicy, with bread for dipping' } },
  { img: 'des-tostada', price: '6,50 + 1,70', name: { es: 'Aguacate y huevo escalfado', en: 'Avocado & poached egg' }, note: { es: 'Sobre masa madre', en: 'On sourdough' } },
];

export const BEBIDAS = [
  { group: { es: 'Café', en: 'Coffee' }, items: [
    { es: 'Espresso', en: 'Espresso' }, { es: 'Americano', en: 'Americano' }, { es: 'Cortado', en: 'Cortado' },
    { es: 'Flat white', en: 'Flat white' }, { es: 'Cappuccino', en: 'Cappuccino' }, { es: 'Café latte', en: 'Café latte' },
    { es: 'Iced latte', en: 'Iced latte' }, { es: 'Espresso tonic', en: 'Espresso tonic' },
    { es: 'Bumble — espresso con zumo de naranja', en: 'Bumble — espresso with orange juice' },
    { es: 'Café bombón', en: 'Bombón (condensed milk)' }, { es: 'Carajillo', en: 'Carajillo' },
  ] },
  { group: { es: 'Té y más', en: 'Tea & more' }, items: [
    { es: 'Tés de Letonia (pregunta cuáles hay)', en: 'Teas from Latvia (ask what’s in)' },
    { es: 'Té verde de montaña', en: 'Mountain green tea' }, { es: 'Earl Grey', en: 'Earl Grey' }, { es: 'Té negro', en: 'Black tea' },
    { es: 'Chai latte', en: 'Chai latte' }, { es: 'Matcha · matcha latte', en: 'Matcha · matcha latte' },
    { es: 'Matcha con zumo de naranja', en: 'Matcha with orange juice' }, { es: 'Cacao natural', en: 'Natural cocoa' },
    { es: 'Vino natural', en: 'Natural wine' },
  ] },
];

// Afluencia habitual según Google Maps (porcentaje relativo, de 8 a 16 h).
export const AFLUENCIA = {
  hours: [8, 9, 10, 11, 12, 13, 14, 15, 16],
  weekday: [12, 20, 25, 33, 45, 52, 50, 35, 29],
  weekend: [10, 18, 41, 70, 93, 95, 100, 93, 89],
};
