import {
  AmenityItem,
  FloorPlanUnit,
  CommuteDestination,
  SpecificationCategory,
  ConsultantItem,
  TrackRecordProject,
  MasterPlanPoint,
} from "./types";

export const projectSnapshot = {
  name: "Sukhavas",
  tagline: "A New Standard in Boutique Luxury Living",
  subtitle: "Legacy of Elegance",
  meaning: "Home of Happiness",
  sanskritOrigin:
    "Sukhavas is a serene and positive name rooted in Sanskrit origin - perfect for a residence that aspires to offer harmony, comfort and joy.",
  motto: "Your space, your peace, your sanctuary",
  reraNumber: "HRERA-PKL-PKL-689-2025",
  developer: "SR Paryavaran Engineers (SRP)",
  developerFull: "SR Paryavaran Engineers",
  developerBio:
    "SR Paryavaran Engineers (SRP) is a 35-year-old, family-owned enterprise with a proven track record of delivering over 4,000 successful construction projects. Known for its pioneering work in advanced environmental control systems, SRP has treated more than 6 billion litres of water through its in-house innovations and engineering excellence. With two modern manufacturing units and a multidisciplinary in-house team of over 350 experts, SRP integrates deep domain knowledge across civil, electrical, and automation disciplines—ensuring uncompromising quality and seamless project execution.",
  address: "GH 16, Sector 24, Panchkula, Haryana",
  siteOffice: "GH 16, Sector 24, Panchkula, Haryana",
  headOffice: "70 Phase 1, Industrial Area, Panchkula, Haryana",
  locationName: "Sector 24, Panchkula, Haryana",
  phonePrimary: "+91 7696 769 007",
  phoneSecondary: "+91 7696 769 007",
  phoneRaw: "7696769007",
  email: "info@sukhavas.com",
  website: "www.sukhavas.com",
  residencesCount: "Just 30 Residences",
  density: "Only Two Homes Per Floor",
  configuration: "Spacious 4 BHK Homes (Convertible to 3 BHK + S)",
  construction: "MIVAN Monolithic Concrete Construction",
  greenRating: "Pre-Certified Green Building",
  facing: "All Homes are 100% Park-Facing",
  balconies: "Wrap-Around Panoramic Balconies",
  terrace: "The Adaptive Terrace Sky Lounge with Fire Pits",
};

export const aboutSukhavasContent = {
  title: "About Sukhavas",
  tagline: "Home of Happiness • Legacy of Elegance",
  sanskritNote:
    "Sukhavas is a serene and positive name rooted in Sanskrit origin - perfect for a residence that aspires to offer harmony, comfort and joy.",
  paragraph1:
    "Sukhavas is a contemporary residential project designed to be a sanctuary from the chaos of everyday life. Sukhavas embodies a lifestyle where serenity meets thoughtful living whether in architecture, community or values, everything here is built around the idea of balance - between nature and comfort, privacy and togetherness, simplicity and elegance.",
  paragraph2:
    "At Sukhavas, we believe a true home doesn't just shelter-it nurtures. Every detail is imagined to bring joy, calm and deep sense of belonging. Here, life flows gently, hearts feel lighter and days begin and end with gratitude.",
  motto: "Your space, your peace, your sanctuary",
  rera: "HRERA-PKL-PKL-689-2025",
};

export const keyHighlights = [
  { value: "Just 30", label: "Limited Edition Residences", sub: "For Those Who Value Exclusivity & Elegance" },
  { value: "2 Homes", label: "Per Floor", sub: "Fewer Neighbours, More Personal Space & Privacy" },
  { value: "4 BHK", label: "Spacious Homes", sub: "Dual-Access 4th Bedroom, Convertible to 3 BHK + S" },
  { value: "100%", label: "Park-Facing Homes", sub: "Wake Up to Green Views & Serenity Every Day" },
  { value: "Wrap-Around", label: "Balconies", sub: "Let Nature Surround You with Seamless Views" },
  { value: "MIVAN", label: "Construction Excellence", sub: "Solid Monolithic Structure, Crack-Free & Damp-Resistant" },
  { value: "Pre-Certified", label: "Green Building", sub: "Eco-Conscious, Energy-Efficient & Future-Ready" },
  { value: "Sky Lounge", label: "Adaptive Terrace", sub: "Open-Air Fire Pits, Party Deck & Fitness" },
];

export const residencesFeatures = [
  {
    title: "Thoughtfully Chosen, Beautifully Executed",
    desc: "High end finishes that blend beauty with functionality across every square foot.",
  },
  {
    title: "Low Density Living",
    desc: "Designed to ensure peace, quiet and a sense of exclusivity with only two homes per floor.",
  },
  {
    title: "Pre-Certified Green Building",
    desc: "Eco conscious, energy efficient and future ready, ensuring a healthier lifestyle.",
  },
  {
    title: "All Homes are Park-Facing",
    desc: "Wake up to soothing green park views and serenity every single morning.",
  },
  {
    title: "Wrap Around Balconies",
    desc: "Let nature surround you — enjoy panoramic seamless views from every angle.",
  },
  {
    title: "Spacious 4 BHK Homes",
    desc: "Generously sized interiors that balance privacy and family togetherness.",
  },
  {
    title: "Scenic Outdoor Dining Space",
    desc: "Enjoy meals under the open sky — perfect for gatherings or quiet evenings in your outdoor haven.",
  },
  {
    title: "Separate Outdoor Wet Kitchen",
    desc: "Designed for ease, efficiency, and a cleaner, odor-free indoor kitchen experience.",
  },
  {
    title: "4th Bedroom with Dual Access",
    desc: "Flexible private entry — perfect for guests, staff or a home office; smartly convertible to a 3 BHK + S.",
  },
  {
    title: "Smart Home Automation Provision",
    desc: "Integrated electrical provisions for seamless smart living control.",
  },
];

export const amenitiesData: AmenityItem[] = [
  {
    id: "lifestyle-sanctuary",
    title: "Lifestyle & Amenities",
    category: "A SANCTUARY BEYOND WALLS",
    tagline: "Designed to Relax Your Body, Refresh Your Mind & Elevate Living",
    description:
      "A boutique residential community designed around tranquility, well-being, and effortless sophistication.",
    imageUrl: "/assets/sukhavas/amenities_1.webp",
    images: [
      "/assets/sukhavas/amenities_1.webp",
      "/assets/sukhavas/1.webp",
      "/assets/sukhavas/3.webp",
    ],
    bullets: [
      "Swimming pool equipped with the latest ultra-filtration system ensuring exceptional water purity and hygiene at all times",
      "Wellness centre / Clubhouse with premium sauna and steam experiences",
      "Elegant Reception and comfortable Waiting Lounge for a warm, distinguished first impression",
      "Multi-tier security system featuring round-the-clock surveillance, access control and advanced safety measures",
      "Dedicated kids play area with soft play surfaces for safe and joyful fun",
      "Park-facing landscaped arrivals and tranquil entrance promenades",
    ],
  },
  {
    id: "fitness-wellness",
    title: "Fitness Activities",
    category: "REDEFINING WELLNESS",
    tagline: "Modern Wellness Centre for Holistic Health",
    description:
      "State-of-the-art facilities crafted to support every fitness ambition, active movement, and mindful recovery.",
    imageUrl: "/assets/sukhavas/amenities_2.webp",
    images: [
      "/assets/sukhavas/amenities_2.webp",
      "/assets/sukhavas/amenities_1.webp",
      "/assets/sukhavas/3.webp",
    ],
    bullets: [
      "Modern Wellness Centre dedicated to holistic health and physical vitality",
      "State of the art Gym outfitted with the latest in cardio, strength & functional as well as Pilates training equipment",
      "Calm and thoughtfully designed space dedicated to yoga and meditation promoting balanced and mindful living",
      "Personalized fitness zones designed to support every individual wellness goal right within your community",
      "Rooftop fitness deck offering refreshing open-air workouts with skyline vistas",
    ],
  },
  {
    id: "adaptive-terrace",
    title: "The Adaptive Terrace",
    category: "A SKY LOUNGE FOR EVERY NEED",
    tagline: "From Serene Morning Retreats to Cozy Starlit Evenings",
    description:
      "An exclusive open-air rooftop sanctuary where leisure, wellness, and celebration blend harmoniously under the sky.",
    imageUrl: "/assets/sukhavas/amenities_3.webp",
    images: [
      "/assets/sukhavas/amenities_3.webp",
      "/assets/sukhavas/3.webp",
      "/assets/sukhavas/2.webp",
    ],
    bullets: [
      "Serene morning retreat for quiet contemplation, sunrise coffee, and fresh air",
      "Beautiful rooftop sky lounge to host society parties, celebratory galas, and private gatherings",
      "Open-air lounge with fire pits for cozy, warm evenings under the stars",
      "Rooftop Table Tennis & Fitness Deck — blending wellness with leisure under the sky",
      "Panoramic views overlooking lush green parklands and the Shivalik hill foothills",
    ],
  },
  {
    id: "construction-excellence",
    title: "Construction Excellence",
    category: "BUILT TO LAST, ENGINEERED FOR THE FUTURE",
    tagline: "MIVAN Monolithic Concrete Technology",
    description:
      "Engineered using global monolithic concrete shuttering for crack-free durability, superior safety, and lasting home value.",
    imageUrl: "/assets/sukhavas/amenities_4.webp",
    images: [
      "/assets/sukhavas/amenities_4.webp",
      "/assets/sukhavas/4.webp",
      "/assets/sukhavas/2.webp",
    ],
    bullets: [
      "MIVAN construction offers smooth, crack-free walls and ceilings with flawless aesthetics",
      "Monolithic concrete structure means fewer joints — greatly reducing chances of water leakage and dampness over time",
      "The structure is stronger and more earthquake-resistant, ensuring lasting safety",
      "Thinner walls = more carpet area, giving you extra room to breathe and live",
      "Solid concrete walls don't chip or crack like brick walls, keeping your home looking new for years",
      "Better sound and acoustic insulation for peaceful, quieter living",
      "Dust-free corners and surfaces keep your interiors cleaner",
      "Built using global technology, homes retain long-term value and stay future-ready",
    ],
  },
];

export const floorPlansData: FloorPlanUnit[] = [
  {
    id: "unit-4bhk-parkview",
    unitNo: "4 BHK Residence (Park Facing)",
    title: "4 BHK Luxury Residence with Wrap-Around Balcony",
    type: "4 BHK",
    facing: "100% Park-Facing",
    sbua: "Spacious 4 BHK Layout",
    carpetArea: "Generously Sized Interiors",
    imageUrl: "/assets/silver_horizon/unit_plan_01.webp",
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    highlights: [
      "Only two homes per floor for utmost privacy and openness with fewer neighbours",
      "Expansive Living, Lobby, and Passage with imported marble flooring",
      "Wrap-around balconies allowing nature to surround your home from every angle",
      "Scenic Outdoor Dining Space under the open sky for family celebrations",
      "Separate Outdoor Wet Kitchen for cleaner, odor-free indoor cooking",
      "4th Bedroom with Dual Access: Flexible private entry for guests, staff, or home office; convertible to 3 BHK + S",
      "Pre-certified green building with provision for smart home automation",
    ],
  },
  {
    id: "unit-4bhk-dualliving",
    unitNo: "4 BHK Executive Residence",
    title: "4 BHK Residence with Dual-Access & Outdoor Wet Kitchen",
    type: "4 BHK (Convertible 3 BHK + S)",
    facing: "Serene Green Facing",
    sbua: "Limited Edition Collection (Just 30 Homes)",
    carpetArea: "Optimized Usable Carpet Area",
    imageUrl: "/assets/silver_horizon/unit_plan_02.webp",
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    highlights: [
      "MIVAN monolithic concrete construction delivering crack-free smooth surfaces and thinner walls for maximum carpet area",
      "Laminated wooden flooring & modular cupboards in all bedrooms",
      "Generous living, dining, and entertaining areas in perfect functional balance",
      "Designer toilets with vitrified tiles to ceiling height, geysers, and exhaust fans",
      "Modular kitchen with branded hardware (Panasonic/Indoline), granite counter & RO provision",
      "Direct private access to The Adaptive Terrace sky lounge with fire pits",
      "HRERA approved boutique development: HRERA-PKL-PKL-689-2025",
    ],
  },
];

export const masterPlanPoints: MasterPlanPoint[] = [
  { id: 1, name: "Grand Entrance Portal & Security Gate", category: "Entrance & Arrival" },
  { id: 2, name: "Reception & Waiting Lounge Foyer", category: "Entrance & Arrival" },
  { id: 3, name: "Ultra-Filtration Swimming Pool", category: "Sports & Wellness" },
  { id: 4, name: "Wellness Centre with Sauna & Steam Chambers", category: "Sports & Wellness" },
  { id: 5, name: "Cardio, Strength & Pilates Gym", category: "Sports & Wellness" },
  { id: 6, name: "Dedicated Yoga & Meditation Studio", category: "Sports & Wellness" },
  { id: 7, name: "Dedicated Kids Play Area", category: "Family & Kids" },
  { id: 8, name: "Scenic Park-Facing Landscaped Lawns", category: "Nature & Landscape" },
  { id: 9, name: "Wrap-Around Promenade & Green Buffers", category: "Nature & Landscape" },
  { id: 10, name: "The Adaptive Terrace Sky Lounge", category: "Entrance & Arrival" },
  { id: 11, name: "Open-Air Fire Pits Lounge", category: "Nature & Landscape" },
  { id: 12, name: "Rooftop Table Tennis & Fitness Deck", category: "Sports & Wellness" },
  { id: 13, name: "Pre-Certified Green Infrastructure & Solar Arrays", category: "Infrastructure" },
  { id: 14, name: "Multi-Tier Round-The-Clock Security & Access Hub", category: "Infrastructure" },
];

export const locationsData: CommuteDestination[] = [
  {
    id: "chandigarh-railway",
    name: "Chandigarh Railway Station",
    distance: "8.5 km",
    icon: "train",
    category: "Transit",
    times: { driving: 14, transit: 25, walking: 90 },
  },
  {
    id: "it-park",
    name: "IT Park Chandigarh / DLF",
    distance: "9.0 km",
    icon: "business_center",
    category: "Business",
    times: { driving: 15, transit: 28, walking: 110 },
  },
  {
    id: "sector-20-market",
    name: "Sector 20 Commercial Hub",
    distance: "2.8 km",
    icon: "shopping_bag",
    category: "Leisure",
    times: { driving: 5, transit: 10, walking: 30 },
  },
  {
    id: "alchemist-hospital",
    name: "Alchemist Hospital, Sector 21",
    distance: "3.5 km",
    icon: "local_hospital",
    category: "Hospital",
    times: { driving: 7, transit: 15, walking: 40 },
  },
  {
    id: "city-centre-17",
    name: "Sector 17 City Centre, Chandigarh",
    distance: "14 km",
    icon: "apartment",
    category: "Transit",
    times: { driving: 22, transit: 35, walking: 180 },
  },
  {
    id: "airport-mohali",
    name: "Shaheed Bhagat Singh Int. Airport",
    distance: "19 km",
    icon: "flight_takeoff",
    category: "Transit",
    times: { driving: 25, transit: 45, walking: 240 },
  },
];

export const nearbyPointsOfInterest = {
  businessHubs: [
    { name: "IT Park Chandigarh (Kishangarh)", dist: "9.0 km" },
    { name: "DLF Cyber City / Industrial Area Panchkula", dist: "4.5 km" },
    { name: "Chandigarh City Centre Sector 17", dist: "14 km" },
    { name: "Mohali Commercial & Industrial Zone", dist: "18 km" },
  ],
  schools: [
    { name: "The British School, Sector 12 Panchkula", dist: "3.2 km" },
    { name: "Delhi Public School (DPS) Pinjore / Panchkula", dist: "6.5 km" },
    { name: "Hansraj Public School, Sector 6", dist: "5.8 km" },
    { name: "Bhavan Vidyalaya, Panchkula", dist: "5.0 km" },
    { name: "St. Xavier's High School, Sector 20", dist: "3.5 km" },
  ],
  hospitals: [
    { name: "Alchemist Hospital, Sector 21 Panchkula", dist: "3.5 km" },
    { name: "Ojas Super Speciality Hospital", dist: "4.0 km" },
    { name: "Paras Hospital, Sector 22 Panchkula", dist: "4.8 km" },
    { name: "Command Hospital Western Command", dist: "7.0 km" },
    { name: "PGIMER & GMCH Chandigarh", dist: "16 km" },
  ],
  leisure: [
    { name: "Panchkula Golf Club, Sector 3", dist: "5.5 km" },
    { name: "Cactus Garden, Sector 5", dist: "6.0 km" },
    { name: "Sukhna Lake & Botanical Garden", dist: "13 km" },
    { name: "Pinjore Gardens & Timber Trail Cable Car", dist: "18 km" },
    { name: "Sector 20 & 21 Gourmet Dining Strips", dist: "2.5 km" },
  ],
  infrastructure: [
    {
      title: "Prime Sector 24 Corridor",
      desc: "Nestled in the tranquil, master-planned sector grid of Panchkula adjoining expansive green parklands.",
      badge: "Prime Vicinity",
      img: "/assets/silver_horizon/strr_highway.webp",
    },
    {
      title: "Direct Tricity Arterial Connectivity",
      desc: "Swift signal-free access connecting Panchkula with Chandigarh, Zirakpur, Mohali, and the Himalayan Expressway.",
      badge: "Effortless Commute",
      img: "/assets/silver_horizon/prr_expressway.webp",
    },
    {
      title: "Shaheed Bhagat Singh International Airport",
      desc: "Fast highway access to international and domestic air transit in under 25 minutes.",
      badge: "25 Mins Airport",
      img: "/assets/silver_horizon/bangalore_chennai_exp.webp",
    },
    {
      title: "Pre-Certified Green & Park Facing",
      desc: "Eco-conscious living with unhindered park greenery and fresh Himalayan breeze.",
      badge: "100% Park-Facing",
      img: "/assets/silver_horizon/metro_train.webp",
    },
  ],
};

export const specificationsData: SpecificationCategory[] = [
  {
    title: "Living, Lobby, Passage & Powder Washroom",
    icon: "chair",
    items: [
      "Imported marble flooring across all living, entrance lobby, and main passage areas.",
      "Acrylic emulsion paint on all walls and ceilings with smooth designer finish.",
      "Generous space with thoughtfully planned areas for living, entertaining, and privacy — all in perfect balance.",
      "Direct integration with expansive park-facing wrap-around balconies.",
    ],
  },
  {
    title: "Master Bedroom Suite",
    icon: "bed",
    items: [
      "Laminated wooden flooring providing warm, timeless elegance.",
      "Acrylic emulsion paint on walls and ceiling.",
      "Modular cupboards with precision hardware and generous organized storage.",
      "Panoramic views overlooking serene park greenery with seamless outdoor access.",
    ],
  },
  {
    title: "Bedrooms 2, 3 & 4 (Dual Access)",
    icon: "meeting_room",
    items: [
      "Laminated wooden flooring in all secondary bedrooms.",
      "Acrylic emulsion paint on walls and ceiling with refined finishes.",
      "Modular cupboards in each bedroom balancing style with daily practicality.",
      "4th Bedroom features flexible Dual Access: allows private entry — perfect for guest suite, staff, or a private home office.",
      "Smartly planned to be easily convertible to a 3 BHK + S as family needs evolve.",
    ],
  },
  {
    title: "Designer Toilets & Washrooms",
    icon: "shower",
    items: [
      "Vitrified tiles flooring and wall tiling up to ceiling height.",
      "Sanitary fittings: Designer wash basin and wall hung WC.",
      "CP fittings: Shower panels, taps, health faucet, towel rack, and paper holder.",
      "Geyser and exhaust fan included in every washroom for turnkey comfort.",
    ],
  },
  {
    title: "Kitchen, Dining & Outdoor Wet Kitchen",
    icon: "countertops",
    items: [
      "Imported marble flooring in dining and indoor kitchen zones.",
      "Modular under-counter boxes with branded hardware (Panasonic / Indoline or equivalent).",
      "Granite countertop with durable stainless steel sink.",
      "Complete provision points for RO, hob/chimney & modern kitchen appliances.",
      "Vitrified tile dado up to specified height; acrylic emulsion on ceiling.",
      "Scenic Outdoor Dining Space: enjoy meals under the open sky for family gatherings or quiet evenings.",
      "Separate Outdoor Wet Kitchen: designed for ease, efficiency, and a cleaner indoor kitchen experience.",
    ],
  },
  {
    title: "Construction, Terrace & Smart Automation",
    icon: "construction",
    items: [
      "MIVAN monolithic concrete construction delivering smooth, crack-free walls, thinner walls for maximum carpet area, and damp-resistant durability.",
      "The Adaptive Terrace: beautiful rooftop sky lounge, open-air lounge with fire pits, and rooftop table tennis & fitness deck.",
      "Swimming pool equipped with the latest ultra-filtration system ensuring exceptional water purity and hygiene at all times.",
      "Pre-certified green building — eco-conscious, energy-efficient, and future-ready.",
      "Multi-tier round-the-clock security surveillance, access control, and smart home automation provisions.",
    ],
  },
];

export const approvalsData = [
  { name: "HRERA Registration", authority: "Haryana Real Estate Regulatory Authority", status: "HRERA-PKL-PKL-689-2025" },
  { name: "Pre-Certified Green Building", authority: "Green Building Council", status: "Pre-Certified" },
  { name: "Building Sanction & Plans", authority: "Competent Authority Panchkula", status: "Approved" },
  { name: "Fire Safety NOC", authority: "Haryana Fire & Emergency Services", status: "Sanctioned" },
  { name: "Environmental Clearance", authority: "State Environment Authority", status: "Cleared" },
  { name: "Structural Safety & MIVAN Standards", authority: "Certified Structural Engineering Council", status: "Approved" },
];

export const developerData = {
  name: "SR Paryavaran Engineers (SRP)",
  headline: "35-Year Heritage of Construction & Engineering Excellence",
  description:
    "SR Paryavaran Engineers (SRP) is a 35-year-old, family-owned enterprise with a proven track record of delivering over 4,000 successful construction projects. Known for its pioneering work in advanced environmental control systems, SRP has treated more than 6 billion litres of water through its in-house innovations and engineering excellence.",
  teamSummary:
    "With two modern manufacturing units and a multidisciplinary in-house team of over 350 experts, SRP integrates deep domain knowledge across civil, electrical, and automation disciplines—ensuring uncompromising quality and seamless project execution.",
  stats: [
    { value: "35+", label: "Years of Heritage", sub: "Family-Owned Enterprise" },
    { value: "4,000+", label: "Successful Projects", sub: "Proven Construction Track Record" },
    { value: "6+ Billion", label: "Litres Water Treated", sub: "Pioneering Environmental Tech" },
    { value: "350+", label: "In-House Experts", sub: "Civil, Electrical & Automation" },
  ],
  headOffice: "70 Phase 1, Industrial Area, Panchkula, Haryana",
  siteOffice: "GH 16, Sector 24, Panchkula, Haryana",
  phone: "+91 7696 769 007",
  email: "info@sukhavas.com",
};

export const trackRecordData: TrackRecordProject[] = [
  {
    title: "SUKHAVAS BOUTIQUE RESIDENCES",
    type: "Limited-Edition 4 BHK Luxury Residences",
    location: "GH 16, Sector 24, Panchkula, Haryana",
    imageUrl: "/assets/silver_horizon/building_slide_01.webp",
  },
  {
    title: "SRP ENVIRONMENTAL & INFRA PROJECTS",
    type: "Advanced Environmental Control Systems",
    location: "Over 4,000 Projects Across North India",
    imageUrl: "/assets/silver_horizon/building_slide_02.webp",
  },
  {
    title: "SRP PRECISION WATER TREATMENT PLANTS",
    type: "6+ Billion Litres Water Treatment Infrastructure",
    location: "Integrated In-House Industrial Facilities",
    imageUrl: "/assets/silver_horizon/building_slide_03.webp",
  },
  {
    title: "SRP ADVANCED MANUFACTURING UNITS",
    type: "Civil, Electrical & Automation Hubs",
    location: "350+ Multidisciplinary Technical Specialists",
    imageUrl: "/assets/silver_horizon/building_slide_04.webp",
  },
];
