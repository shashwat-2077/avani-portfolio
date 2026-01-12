# Avani Walture Portfolio

An artistic, high-end portfolio website showcasing the design and art work of Avani Walture.

## 🎨 Design Direction

- **Overall Vibe**: Editorial, gallery-like aesthetic with a warm neutral palette
- **Colors**: Soft cream/beige backgrounds, charcoal text, earth-tone accents
- **Typography**: Playfair Display (serif) for headings, Lato (sans) for body text
- **Motion**: Gentle fade/slide animations on scroll, hover zoom on artworks

## 📂 Project Structure

```
├── data/
│   └── works.ts          # Single source of truth for all projects
├── components/
│   ├── Layout.tsx        # Main layout with nav and footer
│   └── Section.tsx       # Animated section wrapper
├── pages/
│   ├── Home.tsx          # Hero + category tiles
│   ├── Work.tsx          # Gallery with filters
│   ├── ProjectDetail.tsx # Individual project view
│   ├── About.tsx         # About page with bio
│   └── Contact.tsx       # Contact information
├── public/images/        # All provided images (ONLY these used)
│   ├── cover.png
│   ├── about_me.png
│   ├── contents.png
│   ├── product_*.png
│   ├── communication_*.png
│   ├── typography_*.png
│   ├── posters_overview.png
│   ├── fashion_*.png
│   ├── model_making.png
│   ├── different_art_mediums.png
│   ├── mixed_work_collage.png
│   ├── rough_sketches_*.png
│   └── thank_you.png
└── App.tsx               # Main app with routing
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd avani-walture-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📱 Features

- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **Category Filters**: Filter work by Product Design, Posters, Fashion, etc.
- **Smooth Animations**: Scroll-triggered fade-in animations
- **Framed Artwork Feel**: CSS-based borders and shadows for gallery aesthetic
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter cards
- **Accessible**: Proper alt text for all images, semantic HTML

## 🖼️ Content Categories

1. **Product Design** - Books holder, Pouch/Pen stand, Messy Pani Puri
2. **Posters & Typography** - Truth By Design, Abstract Composition, Empathy Trait, Social Posters
3. **Fashion Design** - Navi Vogue (Indo-Western fusion)
4. **Model Making** - Exhibition group model
5. **Different Art Mediums** - Knife painting, block printing, charcoal, etc.
6. **Rough Sketches** - Perspective studies and daily practice
7. **Mixed Work** - Wall painting, book covers, photography

## ✅ Content Verification Checklist

- [x] Uses ONLY provided images (no stock photos or external media)
- [x] Uses ONLY provided text content (no lorem ipsum)
- [x] No invented projects, awards, clients, or testimonials
- [x] No external icon libraries (inline SVGs only)
- [x] No social media links (none provided)
- [x] No blog posts or filler sections
- [x] Contact info: avaniwalture9298@gmail.com, 7058708081

## 📄 License

© Avani Walture. All rights reserved.
