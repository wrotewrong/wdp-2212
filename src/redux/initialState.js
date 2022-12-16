const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  compareList: [],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      photo: 'https://images.pexels.com/photos/930390/pexels-photo-930390.jpeg',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      oldPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      photo: 'https://images.pexels.com/photos/3965513/pexels-photo-3965513.jpeg',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/6585614/pexels-photo-6585614.jpeg',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/2258083/pexels-photo-2258083.jpeg',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      photo: 'https://images.pexels.com/photos/4846086/pexels-photo-4846086.jpeg',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      photo: 'https://images.pexels.com/photos/4210805/pexels-photo-4210805.jpeg',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      oldPrice: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/2052939/pexels-photo-2052939.jpeg',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      oldPrice: 32,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      oldPrice: 46,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/707579/pexels-photo-707579.jpeg',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/3705539/pexels-photo-3705539.jpeg',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/1517145/pexels-photo-1517145.jpeg',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/271696/pexels-photo-271696.jpeg',
    },

    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/5716713/pexels-photo-5716713.jpeg',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/8346055/pexels-photo-8346055.jpeg',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/4273433/pexels-photo-4273433.jpeg',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      photo: 'https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg',
    },
  ],
  brands: [
    {
      id: 'item-1',
      alt: 'pict-1',
      image: 'https://imgur.com/mI34Zer.jpg',
    },
    {
      id: 'item-2',
      alt: 'pict-2',
      image: 'https://imgur.com/V5aHrvU.jpg',
    },
    {
      id: 'item-3',
      alt: 'pict-3',
      image: 'https://imgur.com/dSeDGGa.jpg',
    },
    {
      id: 'item-4',
      alt: 'pict-4',
      image: 'https://imgur.com/M0vcrFI.jpg',
    },
    {
      id: 'item-5',
      alt: 'pict-5',
      image: 'https://imgur.com/8WlFg6T.jpg',
    },
    {
      id: 'item-6',
      alt: 'pict-6',
      image: 'https://imgur.com/ioTN2D4.jpg',
    },
  ],
  cart: {
    products: [],
  },
  clientFeedback: [
    {
      clientId: '0',
      clientName: 'Sideshow Bob',
      clientJob: 'Comedian',
      clientPhoto:
        'https://cdn.pixabay.com/photo/2017/02/09/15/06/girl-2052641_960_720.jpg',
      clientText:
        'A, wie pan, moim zdaniem to nie ma tak, że dobrze, albo że niedobrze. Gdybym miał powiedzieć, co cenię w życiu najbardziej, powiedziałbym, że ludzi. Ludzi, którzy podali mi pomocną dłoń, kiedy sobie nie radziłem, kiedy byłem sam, i co ciekawe, to właśnie przypadkowe spotkania wpływają na nasze życie.',
    },
    {
      clientId: '1',
      clientName: 'Spike Spiegel',
      clientJob: 'Bount Hunter',
      clientPhoto:
        'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      clientText:
        'Chodzi o to, że kiedy wyznaje się pewne wartości, nawet pozornie uniwersalne, bywa, że nie znajduje się zrozumienia, które by tak rzec, które pomaga się nam rozwijać. Ja miałem szczęście, by tak rzec, ponieważ je znalazłem, i dziękuję życiu!',
    },
    {
      clientId: '2',
      clientName: 'Mateo Moravietti',
      clientJob: 'Liar',
      clientPhoto:
        'https://images.pexels.com/photos/3761521/pexels-photo-3761521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      clientText:
        'To umiłowanie życia. To właśnie ono sprawia, że dzisiaj na przykład buduję maszyny, a jutro – kto wie? Dlaczego by nie – oddam się pracy społecznej i będę, ot, choćby, sadzić... doć— m-marchew...',
    },
    {
      clientId: '3',
      clientName: 'Random Cat',
      clientJob: 'Killing machine',
      clientPhoto:
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg',
      clientText:
        'Miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau miau',
    },
  ],

  Deals: {
    sofa:
      'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    officeChair:
      'https://zona-design.pl/29946-large_default/krzeslo-biurowe-turin-.jpg',
    bed: 'https://kolo-materace.com/1755-large_default/lozko-tapicerowane-80295.jpg',
    info1a: 'GUEST ROOM',
    info1b: 'SOFA',
    bargain: '-20%',
    info2a: 'OFFICE ',
    info2b: 'CHAIR',
    info2c: 'COLLECTION',
    price: '$200.00',
    info3a: 'SPECIAL',
    info3b: 'COLLECTION',
    infoDeal: 'SAVE UP 45% OF FURNITURE',
  },

  display: {
    size: '',
  },
};

export default initialState;
