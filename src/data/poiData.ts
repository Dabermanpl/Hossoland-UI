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
  x: number; // Coordinate for the map image
  y: number; // Coordinate for the map image
  description?: string;
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
    x: 420,
    y: 350,
    description: 'Flagowa kolejka podwieszana. Poczuj wiatr we włosach!'
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
    description: 'Spokojna przejażdżka dla najmłodszych odkrywców.'
  },
  {
    id: 'sd-ar-1',
    name: 'Posąg Smoka Igora',
    category: 'ar_node',
    zone: 'Smocza Dolina',
    status: 'open',
    arPoints: 70,
    x: 450,
    y: 420,
    description: 'Zeskanuj smoka, aby odkryć jego historię.'
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
    x: 150,
    y: 600,
    description: 'Rodzinna kolejka górska z dreszczykiem emocji.'
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
    description: 'Karuzela łańcuchowa dla odważnych wikingów.'
  },
  {
    id: 'kw-food-1',
    name: 'Karczma Wikinga',
    category: 'food',
    zone: 'Kraina Wikingów',
    status: 'open',
    x: 180,
    y: 550,
    description: 'Obfite posiłki dla głodnych wojowników.'
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
    x: 550,
    y: 200,
    description: 'Ekstremalne wahadło obracające się o 360 stopni.'
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
    description: 'Klasyczna karuzela w morskiej odsłonie.'
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
    description: 'Parkowa kolejka retro objeżdżająca całą krainę.'
  },
  {
    id: 'ms-ar-1',
    name: 'Posąg Syrenki',
    category: 'ar_node',
    zone: 'Miasto Syrenki',
    status: 'open',
    arPoints: 50,
    x: 750,
    y: 180,
    description: 'Legendarne serce Mermaid City.'
  },

  // Services
  {
    id: 'util-toilet-1',
    name: 'Toalety - Centrum',
    category: 'toilet',
    zone: 'Centrum',
    status: 'open',
    x: 500,
    y: 500,
    description: 'Czyste i ogólnodostępne toalety.'
  }
];
