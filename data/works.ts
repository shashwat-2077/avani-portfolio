// Single source of truth for all works/projects
// Uses ONLY the provided images and content

export type CategoryType = 
  | 'All' 
  | 'Product Design' 
  | 'Posters & Typography' 
  | 'Fashion Design' 
  | 'Model Making' 
  | 'Different Art Mediums' 
  | 'Rough Sketches'
  | 'Mixed Work';

export interface WorkItem {
  slug: string;
  title: string;
  category: CategoryType;
  image: string;
  description: string;
  captions?: string[];
  additionalImages?: { url: string; caption?: string }[];
}

export const WORKS: WorkItem[] = [
  // --- Product Design ---
  {
    slug: 'books-key-holder',
    title: 'Books Holder and Key Holder',
    category: 'Product Design',
    image: '/images/product_1_books_key_holder.webp',
    description: 'Made of mould. A hand form used as a book stand and key holder; keys can be placed near the candle area or hung on fingers; a mix of productivity + decor.',
  },
  {
    slug: 'pouch-pen-stand',
    title: 'Pouch and Pen Stand',
    category: 'Product Design',
    image: '/images/product_2_pouch_pen_stand.webp',
    description: 'A pouch/pen stand with changeable aesthetic designs using an LED cloth controlled via Bluetooth app; multiple compartments; detachable top becomes a pen stand; portable.',
  },
  {
    slug: 'messy-pani-puri',
    title: 'Messy Pani Puri',
    category: 'Product Design',
    image: '/images/product_3_messy_pani_puri.webp',
    description: 'Concept: redesign a food product if taken back to the Mughal era. A flower-inspired puri: 6 puris attached like petals, filled with different flavors to taste together.',
  },

  // --- Posters & Typography ---
  {
    slug: 'truth-by-design',
    title: 'Truth By Design',
    category: 'Posters & Typography',
    image: '/images/communication_truth_by_design.webp',
    description: 'A reality check about how people believe what they hear; a face combined with an empty/negative box: box-lens eye, box ears, half box mouth — reflecting thoughts borrowed from others.',
  },
  {
    slug: 'abstract-composition-on-myself',
    title: 'Abstract Composition On Myself',
    category: 'Posters & Typography',
    image: '/images/communication_abstract_composition_on_myself.webp',
    description: 'Abstract forms with different textures/colors representing traits: focused, messy but silent, maximum happy, mood swings, never give up, anger, curiosity, always cry, not going with others, confusion.',
  },
  {
    slug: 'empathy-trait',
    title: 'Based On Empathy Trait',
    category: 'Posters & Typography',
    image: '/images/typography_empathy_trait.webp',
    description: 'Empathy creates change on both sides; shown through light and dark lines.',
  },
  {
    slug: 'posters-overview',
    title: 'Social Posters Collection',
    category: 'Posters & Typography',
    image: '/images/posters_overview.webp',
    description: 'A collection of posters addressing important social themes.',
    captions: ['Gender Equality', 'Save Girl Child', "Archie's Book Cover", 'Freedom of Speech'],
  },

  // --- Fashion Design ---
  {
    slug: 'navi-vogue',
    title: 'Navi Vogue',
    category: 'Fashion Design',
    image: '/images/fashion_navi_vogue.webp',
    description: 'Inspired by Nauvari saree; Indo-western + Maharashtrian fusion; pencil skirt with pleats; golden lace lines; halter neck blouse; accessories set (shelaa/head/neck/hand/earrings).',
  },

  // --- Model Making ---
  {
    slug: 'exhibition-model',
    title: 'Exhibition Group Model',
    category: 'Model Making',
    image: '/images/model_making.webp',
    description: 'Built in a group of 8–10; foam sheets for walls and furniture; cloth for sofas; transparent papers for windows; printed mats, etc.',
  },

  // --- Different Art Mediums ---
  {
    slug: 'different-art-mediums',
    title: 'Different Medium Art',
    category: 'Different Art Mediums',
    image: '/images/different_art_mediums.webp',
    description: 'Explorations across various artistic techniques and mediums.',
    captions: ['Knife painting', 'Block printing', 'Charcoal portrait', 'Staedtler drawing', 'Acrylic canvas', 'Graphite portrait', 'Poster colour'],
  },

  // --- Rough Sketches ---
  {
    slug: 'rough-sketches',
    title: 'Rough Sketches',
    category: 'Rough Sketches',
    image: '/images/rough_sketches_1.webp',
    description: 'The raw thinking process—perspective studies, rapid ideation, and daily practice.',
    additionalImages: [
      { url: '/images/rough_sketches_2.webp', caption: 'Sketches Part 2' }
    ],
  },

  // --- Mixed Work ---
  {
    slug: 'mixed-work-collage',
    title: 'Mixed Work Collage',
    category: 'Mixed Work',
    image: '/images/mixed_work_collage.webp',
    description: 'A collection of diverse creative works across different contexts.',
    captions: ['Wall painting in a cafe', 'Book cover', 'Lal Baugh Cha Raja (graphite pencils)', 'Photography'],
  },
];

export const CATEGORIES: { id: string; name: CategoryType; image: string }[] = [
  { id: 'product', name: 'Product Design', image: '/images/product_1_books_key_holder.webp' },
  { id: 'posters', name: 'Posters & Typography', image: '/images/posters_overview.webp' },
  { id: 'fashion', name: 'Fashion Design', image: '/images/fashion_navi_vogue.webp' },
  { id: 'model', name: 'Model Making', image: '/images/model_making.webp' },
  { id: 'art', name: 'Different Art Mediums', image: '/images/different_art_mediums.webp' },
  { id: 'sketches', name: 'Rough Sketches', image: '/images/rough_sketches_1.webp' },
  { id: 'mixed', name: 'Mixed Work', image: '/images/mixed_work_collage.webp' },
];

export const SITE_INFO = {
  name: 'Avani Walture',
  email: 'avaniwalture9298@gmail.com',
  phone: '7058708081',
  tagline: 'Where Art Meets Purpose',
  about: `Art has always been an inspiration for me. For me, designing is a way of connecting with people and experiencing their problems and working on it.

Hi, I am Avani Walture, a 12th grader with dreams of becoming a successful designer. My goal is not just to design a solution, but to ensure that the solution conveys the stories behind it and the connections it creates.

I also love playing badminton, spending time with my close ones, and travelling. I am empathetic—some of my works represent fashion designs, some are skill-based artworks, rough sketches, and posters.`,
  interests: ['Design', 'Badminton', 'Travel', 'Empathy'],
};

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return WORKS.find(w => w.slug === slug);
}

export function getWorksByCategory(category: CategoryType): WorkItem[] {
  if (category === 'All') return WORKS;
  return WORKS.filter(w => w.category === category);
}
