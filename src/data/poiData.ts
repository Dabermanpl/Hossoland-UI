export type POICategory = 'attraction' | 'attraction_kids' | 'food' | 'toilet' | 'ar_node' | 'info';
export type ParkZone = 'Miasto Syrenki' | 'Baltambrya' | 'Kraina Wikingów' | 'Smocza Dolina' | 'Centrum';
export type POIStatus = 'open' | 'closed' | 'maintenance' | 'busy';

export interface IParkPOI {
  id: string;
  name: string;
  category: POICategory;
  zone: ParkZone;
  status: POIStatus;
  waitTimeMinutes?: number;
  minHeightAlone?: number;
  minHeightWithGuardian?: number;
  arPoints?: number;
  x: number;
  y: number;
  description?: string;
  imageUrl?: string;
}

export const hossolandPOIs: IParkPOI[] = [
  // ZONA: Smocza Dolina
  {
    id: 'sd-1',
    name: 'Aurora',
    category: 'attraction',
    zone: 'Smocza Dolina',
    status: 'open',
    waitTimeMinutes: 25,
    minHeightAlone: 130,
    minHeightWithGuardian: 110,
    arPoints: 45,
    x: 420,
    y: 350,
    description: 'Flagowa kolejka podwieszana. Poczuj wiatr we włosach!',
    imageUrl: '/Hossoland-UI/aurora.png'
  },
  {
    id: 'sd-2',
    name: 'Little Dragons',
    category: 'attraction_kids',
    zone: 'Smocza Dolina',
    status: 'open',
    waitTimeMinutes: 5,
    minHeightAlone: 90,
    minHeightWithGuardian: 0,
    x: 480,
    y: 400,
    description: 'Spokojna przejażdżka dla najmłodszych odkrywców.',
    imageUrl: '/Hossoland-UI/Little Dragons.png'
  },
  {
    id: 'sd-3',
    name: 'Dragon School',
    category: 'attraction_kids',
    zone: 'Smocza Dolina',
    status: 'open',
    waitTimeMinutes: 10,
    minHeightAlone: 0,
    x: 500,
    y: 380,
    description: 'Szkoła latania dla małych smoków.',
    imageUrl: '/Hossoland-UI/Driving School.png'
  },
  {
    id: 'sd-food-1',
    name: 'Smokowa Kuchnia',
    category: 'food',
    zone: 'Smocza Dolina',
    status: 'open',
    x: 440,
    y: 370,
    description: 'Najlepsze smakołyki prosto z ognia.',
    imageUrl: 'https://loremflickr.com/800/600/restaurant,fire'
  },
  {
    id: 'sd-ar-1',
    name: 'AR: Rzeźba Smoka Igora',
    category: 'ar_node',
    zone: 'Smocza Dolina',
    status: 'open',
    arPoints: 70,
    x: 450,
    y: 420,
    description: 'Zeskanuj smoka, aby odkryć jego historię.',
    imageUrl: 'https://loremflickr.com/800/600/statue,dragon'
  },

  // ZONA: Kraina Wikingów
  {
    id: 'kw-1',
    name: 'Thor',
    category: 'attraction',
    zone: 'Kraina Wikingów',
    status: 'open',
    waitTimeMinutes: 15,
    minHeightAlone: 120,
    minHeightWithGuardian: 100,
    arPoints: 55,
    x: 150,
    y: 600,
    description: 'Rodzinna kolejka górska z dreszczykiem emocji.',
    imageUrl: '/Hossoland-UI/Thor.png'
  },
  {
    id: 'kw-2',
    name: 'Astrid',
    category: 'attraction',
    zone: 'Kraina Wikingów',
    status: 'open',
    waitTimeMinutes: 10,
    minHeightAlone: 105,
    minHeightWithGuardian: 90,
    x: 200,
    y: 650,
    description: 'Karuzela łańcuchowa dla odważnych wikingów.',
    imageUrl: '/Hossoland-UI/Astrid.png'
  },
  {
    id: 'kw-3',
    name: 'Loki',
    category: 'attraction',
    zone: 'Kraina Wikingów',
    status: 'open',
    waitTimeMinutes: 20,
    minHeightAlone: 110,
    x: 100,
    y: 580,
    description: 'Bóg psot zaprasza na szaloną przejażdżkę.',
    imageUrl: '/Hossoland-UI/Loki.png'
  },
  {
    id: 'kw-4',
    name: 'Odyn',
    category: 'attraction',
    zone: 'Kraina Wikingów',
    status: 'open',
    waitTimeMinutes: 30,
    minHeightAlone: 120,
    x: 80,
    y: 620,
    description: 'Potężna wieża zrzutu dla najodważniejszych.',
    imageUrl: '/Hossoland-UI/Odyn.png'
  },
  {
    id: 'kw-food-1',
    name: 'Karczma Wikinga',
    category: 'food',
    zone: 'Kraina Wikingów',
    status: 'open',
    x: 180,
    y: 550,
    description: 'Obfite posiłki dla głodnych wojowników.',
    imageUrl: 'https://loremflickr.com/800/600/tavern,viking'
  },
  {
    id: 'kw-ar-1',
    name: 'AR: Mjolnir Thora',
    category: 'ar_node',
    zone: 'Kraina Wikingów',
    status: 'open',
    arPoints: 60,
    x: 160,
    y: 610,
    description: 'Mityczny młot boga piorunów.',
    imageUrl: 'https://loremflickr.com/800/600/statue,hammer'
  },

  // ZONA: Baltambrya
  {
    id: 'ba-1',
    name: 'Poseidon',
    category: 'attraction',
    zone: 'Baltambrya',
    status: 'open',
    waitTimeMinutes: 40,
    minHeightAlone: 140,
    minHeightWithGuardian: 120,
    arPoints: 65,
    x: 550,
    y: 200,
    description: 'Ekstremalne wahadło obracające się o 360 stopni.',
    imageUrl: '/Hossoland-UI/poseidon.png'
  },
  {
    id: 'ba-2',
    name: 'Marina Carousel',
    category: 'attraction_kids',
    zone: 'Baltambrya',
    status: 'open',
    waitTimeMinutes: 5,
    minHeightAlone: 0,
    x: 520,
    y: 220,
    description: 'Klasyczna karuzela w morskiej odsłonie.',
    imageUrl: '/Hossoland-UI/Marina Carousel.png'
  },
  {
    id: 'ba-3',
    name: 'Fisher Boat',
    category: 'attraction_kids',
    zone: 'Baltambrya',
    status: 'busy',
    waitTimeMinutes: 15,
    minHeightAlone: 90,
    x: 580,
    y: 250,
    description: 'Wyrusz w rejs kutrem rybackim.',
    imageUrl: '/Hossoland-UI/Fisher Boat.png'
  },
  {
    id: 'ba-4',
    name: 'Safari',
    category: 'attraction',
    zone: 'Baltambrya',
    status: 'open',
    waitTimeMinutes: 20,
    minHeightAlone: 100,
    x: 600,
    y: 280,
    description: 'Wodne safari w krainie Baltambryi.',
    imageUrl: '/Hossoland-UI/Safari.png'
  },
  {
    id: 'ba-food-1',
    name: 'Karczma Baltambryjska',
    category: 'food',
    zone: 'Baltambrya',
    status: 'open',
    x: 540,
    y: 240,
    description: 'Świeże ryby i morskie specjały.',
    imageUrl: 'https://loremflickr.com/800/600/tavern,amber'
  },

  // ZONA: Miasto Syrenki
  {
    id: 'ms-1',
    name: 'Hossolino',
    category: 'attraction_kids',
    zone: 'Miasto Syrenki',
    status: 'open',
    waitTimeMinutes: 10,
    minHeightAlone: 0,
    x: 800,
    y: 150,
    description: 'Parkowa kolejka retro objeżdżająca całą krainę.',
    imageUrl: '/Hossoland-UI/Hossolino.png'
  },
  {
    id: 'ms-2',
    name: 'Mermaid Ride',
    category: 'attraction_kids',
    zone: 'Miasto Syrenki',
    status: 'open',
    waitTimeMinutes: 5,
    minHeightAlone: 0,
    x: 780,
    y: 120,
    description: 'Magiczna przejażdżka w głębinach oceanu.',
    imageUrl: '/Hossoland-UI/Mermaid Ride.png'
  },
  {
    id: 'ms-3',
    name: 'Laguna',
    category: 'attraction',
    zone: 'Miasto Syrenki',
    status: 'open',
    waitTimeMinutes: 25,
    minHeightAlone: 120,
    x: 850,
    y: 180,
    description: 'Wodny rollercoaster pełen niespodzianek.',
    imageUrl: '/Hossoland-UI/Laguna.png'
  },
  {
    id: 'ms-food-1',
    name: 'Kawiarnia Morska',
    category: 'food',
    zone: 'Miasto Syrenki',
    status: 'open',
    x: 820,
    y: 160,
    description: 'Słodkie desery i aromatyczna kawa.',
    imageUrl: 'https://loremflickr.com/800/600/cafe,ocean'
  },
  {
    id: 'ms-ar-1',
    name: 'AR: Posąg Syrenki',
    category: 'ar_node',
    zone: 'Miasto Syrenki',
    status: 'open',
    arPoints: 50,
    x: 750,
    y: 180,
    description: 'Legendarne serce Mermaid City.',
    imageUrl: 'https://loremflickr.com/800/600/statue,mermaid'
  },

  // Inne Atrakcje
  {
    id: 'oth-1',
    name: 'Auto Racer',
    category: 'attraction',
    zone: 'Centrum',
    status: 'open',
    waitTimeMinutes: 15,
    minHeightAlone: 130,
    x: 350,
    y: 450,
    description: 'Poczuj prędkość na torze wyścigowym.',
    imageUrl: '/Hossoland-UI/Auto Racer.png'
  },
  {
    id: 'oth-2',
    name: 'Crazy Cars',
    category: 'attraction_kids',
    zone: 'Centrum',
    status: 'open',
    waitTimeMinutes: 5,
    minHeightAlone: 90,
    x: 380,
    y: 480,
    description: 'Zabawne samochodziki dla dzieci.',
    imageUrl: '/Hossoland-UI/Crazy Cars.png'
  },
  {
    id: 'oth-3',
    name: 'Eureka',
    category: 'attraction',
    zone: 'Centrum',
    status: 'maintenance',
    minHeightAlone: 110,
    x: 400,
    y: 500,
    description: 'Odkryj tajemnice nauki w szalonym tempie.',
    imageUrl: '/Hossoland-UI/Eureka.png'
  },
  {
    id: 'oth-4',
    name: 'Fjord',
    category: 'attraction',
    zone: 'Kraina Wikingów',
    status: 'open',
    waitTimeMinutes: 35,
    minHeightAlone: 100,
    x: 120,
    y: 650,
    description: 'Wodna wyprawa przez urwiste fiordy.',
    imageUrl: '/Hossoland-UI/Fjord.png'
  },
  {
    id: 'oth-5',
    name: 'Flying Motors',
    category: 'attraction_kids',
    zone: 'Centrum',
    status: 'open',
    waitTimeMinutes: 10,
    minHeightAlone: 90,
    x: 300,
    y: 400,
    description: 'Podniebne motory dla małych pilotów.',
    imageUrl: '/Hossoland-UI/Flying Motors.png'
  },
  {
    id: 'oth-6',
    name: 'Galleon',
    category: 'attraction',
    zone: 'Baltambrya',
    status: 'open',
    waitTimeMinutes: 20,
    minHeightAlone: 110,
    x: 500,
    y: 150,
    description: 'Wielki statek piracki kołyszący się na falach.',
    imageUrl: '/Hossoland-UI/Galleon.png'
  },
  {
    id: 'oth-7',
    name: 'Stere',
    category: 'attraction',
    zone: 'Baltambrya',
    status: 'open',
    waitTimeMinutes: 15,
    minHeightAlone: 120,
    arPoints: 40,
    x: 650,
    y: 200,
    description: 'Poczuj siłę morskiego sztormu.',
    imageUrl: '/Hossoland-UI/Stere.png'
  },
  {
    id: 'oth-8',
    name: 'Storm',
    category: 'attraction',
    zone: 'Kraina Wikingów',
    status: 'open',
    waitTimeMinutes: 45,
    minHeightAlone: 140,
    x: 50,
    y: 700,
    description: 'Największy drewniany rollercoaster w regionie.',
    imageUrl: '/Hossoland-UI/Storm.png'
  },
  {
    id: 'oth-9',
    name: 'Veyron',
    category: 'attraction',
    zone: 'Centrum',
    status: 'open',
    waitTimeMinutes: 15,
    minHeightAlone: 130,
    x: 250,
    y: 350,
    description: 'Luksus i prędkość w jednym.',
    imageUrl: '/Hossoland-UI/Veyron.png'
  },
  {
    id: 'oth-10',
    name: 'Vintage Cars',
    category: 'attraction_kids',
    zone: 'Centrum',
    status: 'open',
    waitTimeMinutes: 10,
    minHeightAlone: 0,
    x: 220,
    y: 380,
    description: 'Stylowa przejażdżka klasycznymi autami.',
    imageUrl: '/Hossoland-UI/Vintage Cars.png'
  },

  // Services & AR
  {
    id: 'sd-ar-2',
    name: 'AR: Posąg Feniksa',
    category: 'ar_node',
    zone: 'Smocza Dolina',
    status: 'open',
    arPoints: 80,
    x: 410,
    y: 330,
    description: 'Mityczny ptak odradzający się z popiołów.',
    imageUrl: 'https://loremflickr.com/800/600/statue,phoenix'
  },
  {
    id: 'food-court-1',
    name: 'Food Court Hossoland',
    category: 'food',
    zone: 'Centrum',
    status: 'open',
    x: 400,
    y: 400,
    description: 'Wszystkie kuchnie świata w jednym miejscu.',
    imageUrl: 'https://loremflickr.com/800/600/foodcourt'
  },
  {
    id: 'info-1',
    name: 'Punkt Informacyjny',
    category: 'info',
    zone: 'Centrum',
    status: 'open',
    x: 350,
    y: 350,
    description: 'Tu uzyskasz pomoc i informacje o parku.',
    imageUrl: 'https://loremflickr.com/800/600/information,desk'
  },
  {
    id: 'util-toilet-1',
    name: 'Toalety - Centrum',
    category: 'toilet',
    zone: 'Centrum',
    status: 'open',
    x: 380,
    y: 420,
    description: 'Czyste i ogólnodostępne toalety.',
    imageUrl: 'https://loremflickr.com/800/600/restroom,sign'
  },
  {
    id: 'util-toilet-2',
    name: 'Toalety - Kraina Wikingów',
    category: 'toilet',
    zone: 'Kraina Wikingów',
    status: 'open',
    x: 150,
    y: 620,
    description: 'Toalety stylizowane na wioskę wikingów.',
    imageUrl: 'https://loremflickr.com/800/600/restroom,sign'
  }
];
