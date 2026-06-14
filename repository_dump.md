# Repository Dump (AI Friendly)

> Generated: 2026-06-13T19:06:52.686Z

## Folder Structure

```txt
dat2
├── .github
│   └── agents
├── components.json
├── eslint.config.mjs
├── generate-repo-md.cjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public
│   ├── applications
│   ├── logo
│   ├── news
│   ├── solutions
│   └── team
├── src
│   ├── app
│   │   ├── careers
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── solution
│   │   │   └── page.tsx
│   │   └── team
│   │       └── page.tsx
│   ├── components
│   │   ├── AlreadyRegisteredDialog.tsx
│   │   ├── AnnouncementTicker.tsx
│   │   ├── CoreFeature.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── LogoScroll.tsx
│   │   ├── Navbar.tsx
│   │   ├── NewsSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── Technology.tsx
│   │   ├── TimeLine.tsx
│   │   ├── WorkshopLaunchDialog.tsx
│   │   ├── WorkshopRegistrationDialog.tsx
│   │   └── ui
│   │       ├── border-trail.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── cursor.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── select.tsx
│   │       ├── sparkles-text.tsx
│   │       ├── text-scramble.tsx
│   │       └── text-shimmer.tsx
│   └── lib
│       ├── cloudinary-utils.ts
│       ├── firebase-utils.ts
│       ├── upi-qr.ts
│       └── utils.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Files (with line numbers)


---

## 📄 components.json
**hash:** `73b89727`

### Chunk 1/1

```json
   1 | {
   2 |   "$schema": "https://ui.shadcn.com/schema.json",
   3 |   "style": "new-york",
   4 |   "rsc": true,
   5 |   "tsx": true,
   6 |   "tailwind": {
   7 |     "config": "tailwind.config.ts",
   8 |     "css": "src/app/globals.css",
   9 |     "baseColor": "neutral",
  10 |     "cssVariables": true,
  11 |     "prefix": ""
  12 |   },
  13 |   "aliases": {
  14 |     "components": "@/components",
  15 |     "utils": "@/lib/utils",
  16 |     "ui": "@/components/ui",
  17 |     "lib": "@/lib",
  18 |     "hooks": "@/hooks"
  19 |   },
  20 |   "iconLibrary": "lucide"
  21 | }
```


---

## 📄 next-env.d.ts
**hash:** `4911db4d`

### Chunk 1/1

```typescript
   1 | /// <reference types="next" />
   2 | /// <reference types="next/image-types/global" />
   3 | /// <reference path="./.next/types/routes.d.ts" />
   4 | 
   5 | // NOTE: This file should not be edited
   6 | // see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
   7 | 
```


---

## 📄 next.config.ts
**hash:** `6aced5d5`

### Chunk 1/1

```typescript
   1 | import type { NextConfig } from "next";
   2 | 
   3 | const nextConfig: NextConfig = {
   4 |   /* config options here */
   5 | };
   6 | 
   7 | export default nextConfig;
   8 | 
```


---

## 📄 package.json
**hash:** `72a0e447`

### Chunk 1/1

```json
   1 | {
   2 |   "name": "dat2",
   3 |   "version": "0.1.0",
   4 |   "private": true,
   5 |   "scripts": {
   6 |     "dev": "next dev",
   7 |     "build": "next build",
   8 |     "start": "next start",
   9 |     "lint": "next lint"
  10 |   },
  11 |   "dependencies": {
  12 |     "@headlessui/react": "^2.2.4",
  13 |     "@radix-ui/react-dialog": "^1.1.5",
  14 |     "@radix-ui/react-label": "^2.1.1",
  15 |     "@radix-ui/react-select": "^2.1.5",
  16 |     "@radix-ui/react-slot": "^1.2.3",
  17 |     "@splinetool/react-spline": "^4.0.0",
  18 |     "@splinetool/runtime": "^1.9.54",
  19 |     "@studio-freight/react-lenis": "^0.0.47",
  20 |     "axios": "^1.7.9",
  21 |     "class-variance-authority": "^0.7.1",
  22 |     "clsx": "^2.1.1",
  23 |     "embla-carousel-react": "^8.6.0",
  24 |     "firebase": "^11.2.0",
  25 |     "framer-motion": "^11.15.0",
  26 |     "lenis": "^1.1.18",
  27 |     "lucide-react": "^0.469.0",
  28 |     "motion": "^11.15.0",
  29 |     "next": "^15.5.18",
  30 |     "qrcode": "^1.5.4",
  31 |     "react": "^19.0.0",
  32 |     "react-dom": "^19.0.0",
  33 |     "react-hot-toast": "^2.5.1",
  34 |     "react-icons": "^5.4.0",
  35 |     "react-use-measure": "^2.1.1",
  36 |     "styled-components": "^6.1.13",
  37 |     "tailwind-merge": "^2.6.0",
  38 |     "tailwindcss-animate": "^1.0.7"
  39 |   },
  40 |   "devDependencies": {
  41 |     "@eslint/eslintrc": "^3",
  42 |     "@types/node": "^20",
  43 |     "@types/qrcode": "^1.5.5",
  44 |     "@types/react": "19.0.2",
  45 |     "@types/react-dom": "^19",
  46 |     "eslint": "^9",
  47 |     "eslint-config-next": "^15.5.18",
  48 |     "postcss": "^8",
  49 |     "tailwindcss": "^3.4.1",
  50 |     "typescript": "^5"
  51 |   }
  52 | }
  53 | 
```


---

## 📄 src\app\careers\page.tsx
**hash:** `49f6d2d6`

### Chunk 1/2

```tsx
   1 | 'use client';
   2 | import React, { useState } from 'react';
   3 | import { motion, AnimatePresence } from 'framer-motion';
   4 | import { MapPin, X, ArrowRight } from 'lucide-react';
   5 | import Nav from '@/components/Navbar';
   6 | import Footer from '@/components/Footer';
   7 | import Image from 'next/image';
   8 | 
   9 | interface Position {
  10 |   id: string;
  11 |   title: string;
  12 |   type: 'fulltime' | 'internship';
  13 |   location: string;
  14 |   mode: string;
  15 |   department: string;
  16 |   description: string;
  17 |   requirements: string[];
  18 |   formLink: string;
  19 | }
  20 | 
  21 | const CareersPage = () => {
  22 |   const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  23 |   const [activeFilter, setActiveFilter] = useState<'all' | 'fulltime' | 'internship'>('all');
  24 | 
  25 |   const positions: Position[] = [
  26 |     {
  27 |       id: 'cad-intern',
  28 |       title: 'CAD Intern',
  29 |       type: 'internship',
  30 |       location: 'Chennai',
  31 |       mode: 'Hybrid',
  32 |       department: 'Engineering',
  33 |       description: 'Support the engineering team in creating and refining 3D models, assemblies, and detailed drawings for product design and manufacturing.',
  34 |       requirements: [
  35 |         'Basic experience with CAD software such as SolidWorks, CATIA, or Autodesk Inventor.',
  36 |         'Understanding of engineering drawings, tolerances, and manufacturing processes.',
  37 |         'Ability to convert conceptual sketches into accurate 3D models.',
  38 |         'Familiarity with PLM systems is a plus.',
  39 |         'Strong attention to detail and willingness to learn.'
  40 |       ],
  41 |       formLink: 'https://forms.gle/ZTL7oGpZyJZ1EAjh8'
  42 |     },
  43 |     {
  44 |       id: 'cfd/feq-analysis-intern',
  45 |       title: 'CFD/FEA Analysis Intern',
  46 |       type: 'internship',
  47 |       location: 'Chennai',
  48 |       mode: 'Hybrid',
  49 |       department: 'Engineering',
  50 |       description: 'Assist in performing Computational Fluid Dynamics (CFD) and Finite Element Analysis (FEA) to evaluate and optimize product designs.',
  51 |       requirements: [
  52 |         'Basic knowledge of simulation tools such as ANSYS, COMSOL, or Abaqus.',
  53 |         'Understanding of fluid mechanics, thermodynamics, and structural analysis fundamentals.',
  54 |         'Ability to set up and run simulations for flow, heat transfer, and stress analysis.',
  55 |         'Familiarity with pre-processing (meshing) and post-processing of simulation results.',
  56 |         'Strong analytical and problem-solving skills.'
  57 |       ],
  58 |       formLink: 'https://forms.gle/ZTL7oGpZyJZ1EAjh8'
  59 |     }
  60 |   ];
  61 | 
  62 |   const collaborationTypes = [
  63 |     {
  64 |       title: 'Knowledge Partnership',
  65 |       description: 'Partner with us for groundbreaking research in aerospace technology. Join our network of academic institutions and research centers.',
  66 |       email: 'info@dashagriv.in',
  67 |       subject: '[Dashagriv Website] - Knowledge Partnership Inquiry'
  68 |     },
  69 |     {
  70 |       title: 'Educational Alliance',
  71 |       description: 'Create opportunities for students through internships, workshops, and collaborative projects. Help shape the future workforce.',
  72 |       email: 'info@dashagriv.in',
  73 |       subject: '[Dashagriv Website] - Educational Alliance Inquiry'
  74 |     },
  75 |     {
  76 |       title: 'Industry Collaboration',
  77 |       description: 'Form strategic partnerships to develop innovative aerospace solutions. Leverage our expertise and infrastructure for mutual growth.',
  78 |       email: 'info@dashagriv.in',
  79 |       subject: '[Dashagriv Website] - Industry Collaboration Inquiry'
  80 |     }
  81 |   ];
  82 | 
  83 |   const filteredPositions = positions.filter(position => 
  84 |     activeFilter === 'all' ? true : position.type === activeFilter
  85 |   );
  86 | 
  87 |   return (
  88 |     <div className="min-h-screen bg-black text-white">
  89 |       <Nav />
  90 | 
  91 |       {/* Hero Section */}
  92 |       <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 border-b border-white/10">
  93 |         <div className="absolute inset-0 z-0">
  94 |           <Image
  95 |             src="/Career_bg.png"
  96 |             alt="Hero background"
  97 |             fill
  98 |             className="object-cover opacity-40 grayscale"
  99 |             priority
 100 |           />
 101 |           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
 102 |         </div>
 103 | 
 104 |         <div className="container mx-auto px-6 relative z-10 max-w-7xl">
 105 |           <motion.div 
 106 |             initial={{ opacity: 0, scale: 0.98 }}
 107 |             animate={{ opacity: 1, scale: 1 }}
 108 |             transition={{ duration: 1 }}
 109 |             className="max-w-3xl"
 110 |           >
 111 |             <p className="eyebrow mb-4 tracking-[0.25em] text-zinc-400 font-medium">Careers</p>
 112 |             <h1 className="text-4xl md:text-6xl font-display uppercase font-bold tracking-tight leading-tight text-white mb-6">
 113 |               Join Our Mission To<br/>The Stratosphere
 114 |             </h1>
 115 |             <p className="text-base md:text-lg text-zinc-400 mb-10 font-body">
 116 |               Be part of India&apos;s pioneering aerospace innovation.
 117 |             </p>
 118 |             <div className="flex flex-wrap gap-4">
 119 |               <button
 120 |                 className="solid-btn"
 121 |                 onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
 122 |               >
 123 |                 View Positions
 124 |               </button>
 125 |               <button
 126 |                 className="ghost-btn"
 127 |                 onClick={() => document.getElementById('collaborate')?.scrollIntoView({ behavior: 'smooth' })}
 128 |               >
 129 |                 Collaborate
 130 |               </button>
 131 |             </div>
 132 |           </motion.div>
 133 |         </div>
 134 |       </section>
 135 | 
 136 |       {/* Open Positions */}
 137 |       <section id="positions" className="py-32 bg-black border-b border-white/10">
 138 |         <div className="container mx-auto px-6 max-w-5xl">
 139 |           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
 140 |             <div>
 141 |               <p className="eyebrow mb-4">Opportunities</p>
 142 |               <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">Open Positions</h2>
 143 |             </div>
 144 |             
 145 |             <div className="flex gap-4">
 146 |               {[
 147 |                 { id: 'all', label: 'All' },
 148 |                 { id: 'fulltime', label: 'Full-time' },
 149 |                 { id: 'internship', label: 'Internships' }
 150 |               ].map((filter) => (
 151 |                 <button
 152 |                   key={filter.id}
 153 |                   onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
 154 |                   className={`px-4 py-2 font-display uppercase tracking-widest text-xs transition-colors border-b-2 ${
 155 |                     activeFilter === filter.id
 156 |                       ? 'border-white text-white'
 157 |                       : 'border-transparent text-zinc-500 hover:text-white'
 158 |                   }`}
 159 |                 >
 160 |                   {filter.label}
 161 |                 </button>
 162 |               ))}
 163 |             </div>
 164 |           </div>
 165 | 
 166 |           <div className="flex flex-col gap-4">
 167 |             <AnimatePresence mode="wait">
 168 |               {filteredPositions.length > 0 ? filteredPositions.map((position) => (
 169 |                 <motion.div
 170 |                   key={position.id}
 171 |                   initial={{ opacity: 0, y: 10 }}
 172 |                   animate={{ opacity: 1, y: 0 }}
 173 |                   exit={{ opacity: 0, y: -10 }}
 174 |                   className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 border border-white/10 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors"
 175 |                   onClick={() => setSelectedPosition(position)}
 176 |                 >
 177 |                   <div>
 178 |                     <h3 className="text-2xl font-display uppercase tracking-wide mb-2 group-hover:text-white transition-colors">
 179 |                       {position.title}
 180 |                     </h3>
 181 |                     <div className="flex gap-4 eyebrow text-zinc-500">
 182 |                       <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {position.location}</span>
 183 |                       <span>{position.mode}</span>
 184 |                       <span>{position.type === 'internship' ? 'Internship' : 'Full-time'}</span>
 185 |                     </div>
 186 |                   </div>
 187 |                   <div className="mt-6 md:mt-0 opacity-50 group-hover:opacity-100 transition-opacity">
 188 |                     <ArrowRight className="w-6 h-6" />
 189 |                   </div>
 190 |                 </motion.div>
 191 |               )) : (
 192 |                 <div className="p-12 text-center border border-white/10 text-zinc-500 font-display uppercase tracking-widest">
 193 |                   No positions match your filter.
 194 |                 </div>
 195 |               )}
 196 |             </AnimatePresence>
 197 |           </div>
 198 |         </div>
 199 |       </section>
 200 | 
```

### Chunk 2/2

```tsx
 201 |       {/* Collaborate */}
 202 |       <section id="collaborate" className="py-32 bg-zinc-950 border-b border-white/10">
 203 |         <div className="container mx-auto px-6 max-w-7xl">
 204 |           <div className="text-center mb-24">
 205 |             <p className="eyebrow mb-4">Partnerships</p>
 206 |             <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">Collaborate With Us</h2>
 207 |           </div>
 208 | 
 209 |           <div className="grid md:grid-cols-3 gap-6">
 210 |             {collaborationTypes.map((collab, index) => (
 211 |               <div key={index} className="p-10 border border-white/10 bg-black flex flex-col hover:bg-zinc-900 transition-colors">
 212 |                 <h3 className="text-xl font-display uppercase tracking-wide mb-6 text-white">{collab.title}</h3>
 213 |                 <p className="text-zinc-400 text-sm leading-relaxed mb-10 flex-1">{collab.description}</p>
 214 |                 <a
 215 |                   href={`mailto:${collab.email}?subject=${encodeURIComponent(collab.subject)}`}
 216 |                   className="ghost-btn w-max self-start"
 217 |                 >
 218 |                   Connect
 219 |                 </a>
 220 |               </div>
 221 |             ))}
 222 |           </div>
 223 |         </div>
 224 |       </section>
 225 | 
 226 |       {/* Job Details Modal */}
 227 |       <AnimatePresence>
 228 |         {selectedPosition && (
 229 |           <motion.div 
 230 |             initial={{ opacity: 0 }}
 231 |             animate={{ opacity: 1 }}
 232 |             exit={{ opacity: 0 }}
 233 |             className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
 234 |           >
 235 |             <div className="bg-zinc-950 border border-white/10 p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
 236 |               <button
 237 |                 onClick={() => setSelectedPosition(null)}
 238 |                 className="absolute top-6 right-6 text-zinc-500 hover:text-white"
 239 |               >
 240 |                 <X className="w-6 h-6" />
 241 |               </button>
 242 |               
 243 |               <h3 className="text-3xl font-display uppercase tracking-wide mb-4 pr-12">{selectedPosition.title}</h3>
 244 |               
 245 |               <div className="flex gap-6 mb-8 eyebrow text-zinc-500 border-b border-white/10 pb-6">
 246 |                 <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {selectedPosition.location}</span>
 247 |                 <span>{selectedPosition.mode}</span>
 248 |                 <span>{selectedPosition.type === 'internship' ? 'Internship' : 'Full-time'}</span>
 249 |               </div>
 250 |               
 251 |               <div className="mb-8">
 252 |                 <h4 className="eyebrow mb-4">About the Role</h4>
 253 |                 <p className="text-zinc-300 text-sm leading-relaxed">{selectedPosition.description}</p>
 254 |               </div>
 255 |               
 256 |               <div className="mb-12">
 257 |                 <h4 className="eyebrow mb-4">Requirements</h4>
 258 |                 <ul className="space-y-3">
 259 |                   {selectedPosition.requirements.map((req, index) => (
 260 |                     <li key={index} className="text-zinc-300 text-sm flex gap-3">
 261 |                       <span className="text-white mt-1 opacity-50">-</span>
 262 |                       <span>{req}</span>
 263 |                     </li>
 264 |                   ))}
 265 |                 </ul>
 266 |               </div>
 267 |               
 268 |               <a
 269 |                 href={selectedPosition.formLink}
 270 |                 target="_blank"
 271 |                 rel="noopener noreferrer"
 272 |                 className="solid-btn text-center block w-full py-4"
 273 |               >
 274 |                 Apply Now
 275 |               </a>
 276 |             </div>
 277 |           </motion.div>
 278 |         )}
 279 |       </AnimatePresence>
 280 | 
 281 |       <Footer />
 282 |     </div>
 283 |   );
 284 | };
 285 | 
 286 | export default CareersPage;
 287 | 
```


---

## 📄 src\app\globals.css
**hash:** `6f9a244d`

### Chunk 1/2

```css
   1 | @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500&family=Space+Grotesk:wght@500;600;700&family=Rajdhani:wght@500;600;700&display=swap");
   2 | @tailwind base;
   3 | @tailwind components;
   4 | @tailwind utilities;
   5 | 
   6 | @layer base {
   7 |   :root {
   8 |     --background: 0 0% 0%;
   9 |     --foreground: 0 0% 100%;
  10 |     --card: 0 0% 5%;
  11 |     --card-foreground: 0 0% 100%;
  12 |     --popover: 0 0% 5%;
  13 |     --popover-foreground: 0 0% 100%;
  14 |     --primary: 0 0% 100%;
  15 |     --primary-foreground: 0 0% 0%;
  16 |     --secondary: 0 0% 15%;
  17 |     --secondary-foreground: 0 0% 100%;
  18 |     --muted: 0 0% 15%;
  19 |     --muted-foreground: 0 0% 64%;
  20 |     --accent: 0 0% 15%;
  21 |     --accent-foreground: 0 0% 100%;
  22 |     --destructive: 0 84.2% 60.2%;
  23 |     --destructive-foreground: 0 0% 98%;
  24 |     --border: 0 0% 15%;
  25 |     --input: 0 0% 15%;
  26 |     --ring: 0 0% 83.1%;
  27 |     --radius: 0rem;
  28 |   }
  29 | }
  30 | 
  31 | @layer base {
  32 |   * {
  33 |     @apply border-border;
  34 |   }
  35 |   body {
  36 |     @apply bg-background text-foreground;
  37 |   }
  38 |   h1,
  39 |   h2,
  40 |   h3,
  41 |   h4,
  42 |   h5,
  43 |   h6 {
  44 |     @apply font-display tracking-tight uppercase;
  45 |   }
  46 | }
  47 | 
  48 | /* Minimalist Utilities */
  49 | @layer utilities {
  50 |   .eyebrow {
  51 |     @apply text-[10px] sm:text-xs font-display uppercase tracking-widest text-zinc-400;
  52 |   }
  53 | 
  54 |   .ghost-btn {
  55 |     @apply px-6 py-2 border border-white/40 bg-transparent text-white font-display uppercase tracking-widest text-sm hover:border-white hover:bg-white hover:text-black transition-colors duration-300 rounded-full cursor-pointer;
  56 |   }
  57 |   .solid-btn {
  58 |     @apply px-6 py-2 border border-white bg-white text-black font-display uppercase tracking-widest text-sm hover:bg-transparent hover:text-white transition-colors duration-300 rounded-full cursor-pointer;
  59 |   }
  60 |   .kicker {
  61 |     @apply text-[9px] font-display uppercase tracking-[0.3em] text-zinc-600;
  62 |   }
  63 | }
  64 | 
  65 | .logo-scroll-container {
  66 |   display: flex;
  67 |   flex-direction: column;
  68 |   align-items: center;
  69 |   justify-content: center;
  70 |   width: 100%;
  71 |   overflow: hidden;
  72 |   position: relative;
  73 | }
  74 | 
  75 | .logo-scroll {
  76 |   width: 65%;
  77 |   overflow: hidden;
  78 |   position: relative;
  79 | }
  80 | 
  81 | .logo-track {
  82 |   display: flex;
  83 |   width: calc(200%);
  84 |   animation: scrollX 20s linear infinite;
  85 | }
  86 | 
  87 | .logo-item {
  88 |   display: flex;
  89 |   justify-content: center;
  90 |   align-items: center;
  91 |   min-width: 10rem;
  92 |   padding: 1rem;
  93 |   transition: transform 0.3s ease-in-out;
  94 | }
  95 | 
  96 | .logo-item img {
  97 |   width: 100%;
  98 |   height: auto;
  99 |   object-fit: contain;
 100 |   filter: grayscale(100%) brightness(200%);
 101 | }
 102 | 
 103 | @keyframes scrollX {
 104 |   from {
 105 |     transform: translateX(0);
 106 |   }
 107 |   to {
 108 |     transform: translateX(-50%);
 109 |   }
 110 | }
 111 | 
 112 | body {
 113 |   overflow-x: hidden;
 114 | }
 115 | 
 116 | /* ─── Announcement Ticker ─────────────────────────────────── */
 117 | 
 118 | .ticker-bar {
 119 |   position: fixed;
 120 |   top: 0;
 121 |   left: 0;
 122 |   right: 0;
 123 |   z-index: 200;
 124 |   height: 44px;
 125 |   display: flex;
 126 |   align-items: center;
 127 |   justify-content: center;
 128 |   gap: 0;
 129 |   background-color: #000;
 130 |   border-bottom: 1px solid rgba(255, 255, 255, 0.08);
 131 |   overflow: hidden;
 132 | }
 133 | 
 134 | /* Left label block */
 135 | .ticker-label-wrap {
 136 |   display: flex;
 137 |   align-items: center;
 138 |   gap: 8px;
 139 |   padding: 0 16px;
 140 |   border-right: 1px solid rgba(255, 255, 255, 0.08);
 141 |   flex-shrink: 0;
 142 |   height: 100%;
 143 | }
 144 | 
 145 | .ticker-dot {
 146 |   width: 6px;
 147 |   height: 6px;
 148 |   border-radius: 50%;
 149 |   background-color: #fff;
 150 |   box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.3);
 151 |   flex-shrink: 0;
 152 |   animation: ticker-pulse 3s ease-in-out infinite;
 153 | }
 154 | 
 155 | @keyframes ticker-pulse {
 156 |   0%,
 157 |   100% {
 158 |     opacity: 1;
 159 |     box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.3);
 160 |   }
 161 |   50% {
 162 |     opacity: 0.4;
 163 |     box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.1);
 164 |   }
 165 | }
 166 | 
 167 | .ticker-label-text {
 168 |   font-family: var(--font-display, "Space Grotesk", sans-serif);
 169 |   font-size: 9px;
 170 |   letter-spacing: 0.2em;
 171 |   text-transform: uppercase;
 172 |   color: rgba(255, 255, 255, 0.6);
 173 |   white-space: nowrap;
 174 | }
 175 | 
 176 | .ticker-text {
 177 |   font-family: var(--font-body, "Manrope", sans-serif);
 178 |   font-size: 11px;
 179 |   letter-spacing: 0.04em;
 180 |   color: rgba(255, 255, 255, 0.45);
 181 |   padding-right: 0;
 182 | }
 183 | 
 184 | .ticker-text strong {
 185 |   color: rgba(255, 255, 255, 0.85);
 186 | }
 187 | 
 188 | /* Right CTA */
 189 | .ticker-cta {
 190 |   display: flex;
 191 |   align-items: center;
 192 |   gap: 4px;
 193 |   padding: 0 16px;
 194 |   border-left: 1px solid rgba(255, 255, 255, 0.08);
 195 |   flex-shrink: 0;
 196 |   height: 100%;
 197 |   font-family: var(--font-display, "Space Grotesk", sans-serif);
 198 |   font-size: 9px;
 199 |   letter-spacing: 0.18em;
 200 |   text-transform: uppercase;
```

### Chunk 2/2

```css
 201 |   color: rgba(255, 255, 255, 0.5);
 202 |   text-decoration: none;
 203 |   transition: color 0.2s ease;
 204 |   white-space: nowrap;
 205 | }
 206 | 
 207 | .ticker-cta:hover {
 208 |   color: #fff;
 209 | }
 210 | 
 211 | .ticker-arrow {
 212 |   display: inline-block;
 213 |   transition: transform 0.2s ease;
 214 | }
 215 | 
 216 | .ticker-cta:hover .ticker-arrow {
 217 |   transform: translateX(3px);
 218 | }
 219 | 
```


---

## 📄 src\app\layout.tsx
**hash:** `4e95ace0`

### Chunk 1/1

```tsx
   1 | import type { Metadata } from "next";
   2 | import "./globals.css";
   3 | import AnnouncementTicker from "@/components/AnnouncementTicker";
   4 | 
   5 | export const metadata: Metadata = {
   6 |   title: "Dashagriv Aerospace Technology",
   7 |   description: "Mission-oriented aerospace brand building next-gen platforms for the stratosphere.",
   8 | };
   9 | 
  10 | export default function RootLayout({
  11 |   children,
  12 | }: Readonly<{
  13 |   children: React.ReactNode;
  14 | }>) {
  15 |   return (
  16 |     <html lang="en" className="dark">
  17 |       <head />
  18 |       <body className={`font-body antialiased bg-black text-white`}>
  19 |         <AnnouncementTicker />
  20 |         {children}
  21 |       </body>
  22 |     </html>
  23 |   );
  24 | }
  25 | 
```


---

## 📄 src\app\page.tsx
**hash:** `1b7bbfaa`

### Chunk 1/2

```tsx
   1 | "use client";
   2 | 
   3 | import { ReactLenis } from "@studio-freight/react-lenis";
   4 | import { motion } from "framer-motion";
   5 | import { FC, useEffect, useRef } from "react";
   6 | import Image from "next/image";
   7 | import Technology from "@/components/Technology";
   8 | import Timeline from "@/components/TimeLine";
   9 | import Footer from "@/components/Footer";
  10 | import Nav from "@/components/Navbar";
  11 | import NewsSection from "@/components/NewsSection";
  12 | 
  13 | const SmoothScrollPage: FC = () => {
  14 |   return (
  15 |     <div className="bg-black min-h-screen relative text-white">
  16 |       {/* @ts-expect-error - Known issue with ReactLenis types */}
  17 |       <ReactLenis root options={{ lerp: 0.05 }}>
  18 |         <Nav />
  19 |         <Hero />
  20 |         <About />
  21 |         <LogoShowcase />
  22 |         <Technology />
  23 |         <Timeline />
  24 |         <NewsSection />
  25 |         <Contact />
  26 |         <Footer />
  27 |       </ReactLenis>
  28 |     </div>
  29 |   );
  30 | };
  31 | 
  32 | const HeroBackground = () => {
  33 |   const videoRef = useRef<HTMLVideoElement>(null);
  34 | 
  35 |   useEffect(() => {
  36 |     const video = videoRef.current;
  37 |     if (video) {
  38 |       const playVideo = () => {
  39 |         if (video) {
  40 |           video.play().catch(() => console.log("Autoplay prevented"));
  41 |         }
  42 |       };
  43 |       video.addEventListener("loadeddata", playVideo);
  44 |       return () => {
  45 |         if (video) video.removeEventListener("loadeddata", playVideo);
  46 |       };
  47 |     }
  48 |   }, []);
  49 | 
  50 |   return (
  51 |     <div className="absolute inset-0 w-full h-full overflow-hidden">
  52 |       <video
  53 |         ref={videoRef}
  54 |         className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
  55 |         autoPlay
  56 |         muted
  57 |         loop
  58 |         playsInline
  59 |       >
  60 |         <source src="/herovideo.mp4" type="video/mp4" />
  61 |       </video>
  62 |       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
  63 |     </div>
  64 |   );
  65 | };
  66 | 
  67 | const Hero = () => {
  68 |   return (
  69 |     <section className="relative w-full h-screen flex flex-col items-center justify-center pt-20">
  70 |       <HeroBackground />
  71 |       <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
  72 |         <motion.div
  73 |           initial={{ opacity: 0, scale: 0.98 }}
  74 |           animate={{ opacity: 1, scale: 1 }}
  75 |           transition={{ duration: 1 }}
  76 |           className="relative px-8 py-12 md:px-16 md:py-20 w-full mb-12"
  77 |         >
  78 |           <motion.p
  79 |             className="eyebrow mb-6 tracking-[0.25em] text-zinc-400 font-medium"
  80 |             initial={{ opacity: 0, y: 10 }}
  81 |             animate={{ opacity: 1, y: 0 }}
  82 |             transition={{ duration: 0.8, delay: 0.2 }}
  83 |           >
  84 |             Dashagriv Aerospace
  85 |           </motion.p>
  86 | 
  87 |           <motion.h1
  88 |             className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-tight text-white mb-8"
  89 |             initial={{ opacity: 0, y: 20 }}
  90 |             animate={{ opacity: 1, y: 0 }}
  91 |             transition={{ duration: 1, delay: 0.3 }}
  92 |           >
  93 |             Pioneering the
  94 |             <br />
  95 |             Near Space Frontier
  96 |           </motion.h1>
  97 | 
  98 |           <motion.p
  99 |             className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-body leading-relaxed"
 100 |             initial={{ opacity: 0, y: 20 }}
 101 |             animate={{ opacity: 1, y: 0 }}
 102 |             transition={{ duration: 1, delay: 0.4 }}
 103 |           >
 104 |             High-Altitude Platform Systems (HAPS) engineered for next-generation
 105 |             stratospheric operations.
 106 |           </motion.p>
 107 |         </motion.div>
 108 | 
 109 |         <motion.div
 110 |           initial={{ opacity: 0, y: 10 }}
 111 |           animate={{ opacity: 1, y: 0 }}
 112 |           transition={{ duration: 1, delay: 0.6 }}
 113 |         >
 114 |           <button
 115 |             className="solid-btn"
 116 |             onClick={() =>
 117 |               document
 118 |                 .getElementById("about")
 119 |                 ?.scrollIntoView({ behavior: "smooth" })
 120 |             }
 121 |           >
 122 |             Discover More
 123 |           </button>
 124 |         </motion.div>
 125 |       </div>
 126 |     </section>
 127 |   );
 128 | };
 129 | 
 130 | const About = () => {
 131 |   return (
 132 |     <section id="about" className="py-32 bg-black border-t border-white/10">
 133 |       <div className="container mx-auto px-6 max-w-5xl text-center">
 134 |         <p className="eyebrow mb-8">Who We Are</p>
 135 |         <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight leading-tight mb-8">
 136 |           India&apos;s pioneering force in stratospheric innovation
 137 |         </h2>
 138 |         <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
 139 |           We design and manufacture state-of-the-art operational platforms that
 140 |           bridge the crucial gap between satellites and traditional aerial
 141 |           systems. The stratosphere is no longer out of reach.
 142 |         </p>
 143 |       </div>
 144 |     </section>
 145 |   );
 146 | };
 147 | 
 148 | const Contact = () => {
 149 |   return (
 150 |     <section
 151 |       id="contact"
 152 |       className="py-32 bg-zinc-950 border-t border-white/10 text-white"
 153 |     >
 154 |       <div className="container mx-auto px-6">
 155 |         <div className="max-w-3xl mx-auto">
 156 |           <div className="text-center mb-16">
 157 |             <p className="eyebrow mb-4">Connection</p>
 158 |             <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">
 159 |               Get In Touch
 160 |             </h2>
 161 |           </div>
 162 |           <form className="space-y-8 text-left">
 163 |             <div className="grid md:grid-cols-2 gap-8">
 164 |               <input
 165 |                 type="text"
 166 |                 placeholder="NAME"
 167 |                 className="w-full px-4 py-3 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors font-display uppercase text-sm"
 168 |               />
 169 |               <input
 170 |                 type="email"
 171 |                 placeholder="EMAIL"
 172 |                 className="w-full px-4 py-3 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors font-display uppercase text-sm"
 173 |               />
 174 |             </div>
 175 |             <textarea
 176 |               placeholder="MESSAGE"
 177 |               rows={4}
 178 |               className="w-full px-4 py-3 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors font-display uppercase text-sm resize-none"
 179 |             />
 180 |             <div className="pt-8">
 181 |               <button className="solid-btn w-full py-4">Send Message</button>
 182 |             </div>
 183 |           </form>
 184 |         </div>
 185 |       </div>
 186 |     </section>
 187 |   );
 188 | };
 189 | 
 190 | const LogoShowcase = () => {
 191 |   const logos = [
 192 |     "/logo/Ediit-tn-logo.png",
 193 |     "/logo/haps-alliance.png",
 194 |     "/logo/SI.png",
 195 |     "/logo/TAA.png",
 196 |     "/logo/startup tn.png",
 197 |     "/logo/kcg.png",
 198 |     "/logo/kiet.png",
 199 |   ];
 200 | 
```

### Chunk 2/2

```tsx
 201 |   return (
 202 |     <section className="py-24 bg-black border-t border-white/10">
 203 |       <div className="container mx-auto px-6">
 204 |         <p className="eyebrow text-center mb-12">
 205 |           Supported and Partnered with
 206 |         </p>
 207 |         <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
 208 |           {logos.map((logo, index) => (
 209 |             <div
 210 |               key={index}
 211 |               className="transition-all duration-300 ease-in-out hover:scale-105"
 212 |             >
 213 |               <Image
 214 |                 src={logo}
 215 |                 alt={`Partner ${index + 1}`}
 216 |                 width={120}
 217 |                 height={60}
 218 |                 className="object-contain cursor-pointer filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out"
 219 |               />
 220 |             </div>
 221 |           ))}
 222 |         </div>
 223 |       </div>
 224 |     </section>
 225 |   );
 226 | };
 227 | 
 228 | export default SmoothScrollPage;
 229 | 
```


---

## 📄 src\app\solution\page.tsx
**hash:** `72d76c09`

### Chunk 1/2

```tsx
   1 | "use client";
   2 | import React from "react";
   3 | import { motion } from "framer-motion";
   4 | import Nav from "@/components/Navbar";
   5 | import Footer from "@/components/Footer";
   6 | import Image from "next/image";
   7 | import { StaticGallery } from "@/components/Gallery";
   8 | import StatsSection from "@/components/StatsSection";
   9 | 
  10 | const SolutionPage = () => {
  11 |   const applications = [
  12 |     {
  13 |       title: "Earth Observation",
  14 |       description: "Remote sensing and data access in isolated areas.",
  15 |       image: "/applications/earth-observation.jpg",
  16 |     },
  17 |     {
  18 |       title: "Emergency Response",
  19 |       description: "Rapid deployment for disaster recovery.",
  20 |       image: "/applications/emergency.jpg",
  21 |     },
  22 |     {
  23 |       title: "Border Surveillance",
  24 |       description: "Real-time monitoring with wide-area coverage.",
  25 |       image: "/applications/border-survilance.jpg",
  26 |     },
  27 |     {
  28 |       title: "Urban Air Mobility",
  29 |       description: "Support infrastructure for future urban transportation.",
  30 |       image: "/applications/urban.jpg",
  31 |     },
  32 |     {
  33 |       title: "Fixed Wireless Access",
  34 |       description: "Reliable connectivity for remote regions.",
  35 |       image: "/applications/fixed_wireless.jpg",
  36 |     },
  37 |     {
  38 |       title: "Private Networks",
  39 |       description: "Secure and dedicated communication networks.",
  40 |       image: "/applications/private_networks.jpg",
  41 |     },
  42 |     {
  43 |       title: "Maritime Surveillance",
  44 |       description: "Offshore tracking and vessel monitoring at scale.",
  45 |       image: "/applications/marirtime-survilance.jpg",
  46 |     },
  47 |     {
  48 |       title: "White Spot Reduction",
  49 |       description: "Bridging connectivity gaps in under-served areas.",
  50 |       image: "/applications/white_spot.jpg",
  51 |     },
  52 |     {
  53 |       title: "Terrestrial Backhaul",
  54 |       description: "High-capacity backhaul for terrestrial networks.",
  55 |       image: "/applications/terrestrial_backhaul.jpg",
  56 |     },
  57 |   ];
  58 | 
  59 |   const features = [
  60 |     {
  61 |       title: "Stratospheric HAPS Development",
  62 |       description:
  63 |         "Building high-altitude platforms for long-endurance missions in research, surveillance, and advanced communications.",
  64 |     },
  65 |     {
  66 |       title: "Payload Hosting Services (HaaS)",
  67 |       description:
  68 |         "Host your payloads on our stratospheric platforms with plug-and-play ease.",
  69 |     },
  70 |     {
  71 |       title: "Stratospheric Subsystems",
  72 |       description:
  73 |         "Reliable integration-ready subsystems for HAPS-based missions.",
  74 |     },
  75 |     {
  76 |       title: "Flight Data & Planning",
  77 |       description:
  78 |         "Advanced software suite for mission planning and flight data analytics.",
  79 |     },
  80 |   ];
  81 | 
  82 |   return (
  83 |     <div className="min-h-screen bg-black text-white relative">
  84 |       <Nav />
  85 | 
  86 |       {/* Hero Section */}
  87 |       <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
  88 |         <div className="absolute inset-0 z-0">
  89 |           <Image
  90 |             src="/solutions/solution-bg1.png"
  91 |             alt="Hero background"
  92 |             fill
  93 |             className="object-cover opacity-60 grayscale"
  94 |             priority
  95 |           />
  96 |         </div>
  97 |         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-10" />
  98 | 
  99 |         <motion.div
 100 |           initial={{ opacity: 0, scale: 0.98 }}
 101 |           animate={{ opacity: 1, scale: 1 }}
 102 |           transition={{ duration: 1 }}
 103 |           className="container mx-auto px-6 relative z-20 text-center max-w-4xl"
 104 |         >
 105 |           <p className="eyebrow mb-6 tracking-[0.25em] text-zinc-400 font-medium">
 106 |             Capabilities
 107 |           </p>
 108 |           <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase font-bold tracking-tight leading-tight text-white mb-8">
 109 |             Stratospheric
 110 |             <br />
 111 |             Solutions
 112 |           </h1>
 113 |           <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto font-body leading-relaxed">
 114 |             Revolutionizing near-space operations with cutting-edge HAPS
 115 |             technology.
 116 |           </p>
 117 |         </motion.div>
 118 |       </section>
 119 | 
 120 |       <section className="py-32 bg-black border-t border-white/10">
 121 |         <div className="container mx-auto px-6 max-w-6xl">
 122 |           <div className="text-center mb-24">
 123 |             <p className="eyebrow mb-4">Core Systems</p>
 124 |             <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight">
 125 |               What We Do
 126 |             </h2>
 127 |           </div>
 128 |           <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
 129 |             {features.map((feature, index) => (
 130 |               <div
 131 |                 key={index}
 132 |                 className="bg-black p-12 group hover:bg-zinc-900 transition-colors"
 133 |               >
 134 |                 <div className="text-zinc-600 font-display text-xl mb-6 group-hover:text-white transition-colors">
 135 |                   0{index + 1}
 136 |                 </div>
 137 |                 <h3 className="text-2xl font-display uppercase mb-4">
 138 |                   {feature.title}
 139 |                 </h3>
 140 |                 <p className="text-zinc-400 leading-relaxed">
 141 |                   {feature.description}
 142 |                 </p>
 143 |               </div>
 144 |             ))}
 145 |           </div>
 146 |         </div>
 147 |       </section>
 148 | 
 149 |       <StaticGallery />
 150 | 
 151 |       <StatsSection />
 152 | 
 153 |       {/* Applications Section */}
 154 |       <section className="py-32 bg-zinc-950 border-t border-white/10">
 155 |         <div className="container mx-auto px-6">
 156 |           <div className="text-center mb-24">
 157 |             <p className="eyebrow mb-4">Deployments</p>
 158 |             <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight">
 159 |               Applications
 160 |             </h2>
 161 |           </div>
 162 | 
 163 |           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
 164 |             {applications.map((app, index) => (
 165 |               <motion.div
 166 |                 key={index}
 167 |                 initial={{ opacity: 0 }}
 168 |                 whileInView={{ opacity: 1 }}
 169 |                 viewport={{ once: true }}
 170 |                 className="relative group aspect-square overflow-hidden bg-black"
 171 |               >
 172 |                 <Image
 173 |                   src={app.image}
 174 |                   alt={app.title}
 175 |                   fill
 176 |                   className="object-cover grayscale opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
 177 |                 />
 178 |                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
 179 |                 <div className="absolute bottom-0 left-0 p-8 w-full">
 180 |                   <h3 className="text-xl font-display uppercase tracking-wide mb-2">
 181 |                     {app.title}
 182 |                   </h3>
 183 |                   <p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transform">
 184 |                     {app.description}
 185 |                   </p>
 186 |                 </div>
 187 |               </motion.div>
 188 |             ))}
 189 |           </div>
 190 |         </div>
 191 |       </section>
 192 | 
 193 |       <section className="py-32 bg-black text-center border-t border-white/10">
 194 |         <div className="container mx-auto px-6">
 195 |           <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight mb-8">
 196 |             Ready to Transform Your Operations?
 197 |           </h2>
 198 |           <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
 199 |             Join us in revolutionizing near-space technology and unlock new
 200 |             possibilities.
```

### Chunk 2/2

```tsx
 201 |           </p>
 202 |           <a
 203 |             href="mailto:info@dashagriv.in?subject=Inquiry about solutions"
 204 |             className="ghost-btn"
 205 |           >
 206 |             Contact Us
 207 |           </a>
 208 |         </div>
 209 |       </section>
 210 | 
 211 |       <Footer />
 212 |     </div>
 213 |   );
 214 | };
 215 | 
 216 | export default SolutionPage;
 217 | 
```


---

## 📄 src\app\team\page.tsx
**hash:** `7a4f6a2d`

### Chunk 1/2

```tsx
   1 | 'use client';
   2 | import React from 'react';
   3 | import { FaLinkedin } from 'react-icons/fa';
   4 | import Navbar from '@/components/Navbar';
   5 | import Footer from '@/components/Footer';
   6 | import Image from 'next/image';
   7 | import { motion } from 'framer-motion';
   8 | 
   9 | const TeamsPage = () => {
  10 |   const mentors = [
  11 |     {
  12 |       name: "Dr. Vijayraja K",
  13 |       role: "Mentor",
  14 |       position: "Professor & Head, Aero & Aerospace, KCG Tech",
  15 |       linkedin: "https://www.linkedin.com/in/dr-vijayraja-kvijayraja-2627ba2a/",
  16 |       image: "/team/vijayaraja.png"
  17 |     }
  18 |   ];
  19 | 
  20 |   const founders = [
  21 |     {
  22 |       name: "Logeshwaran M",
  23 |       role: "Founder & CEO",
  24 |       education: "Aerospace Engineer",
  25 |       image: "/team/loki.png",
  26 |       linkedin: "https://www.linkedin.com/in/logeshwaran-mahendran-ba27572b7/"
  27 |     },
  28 |     {
  29 |       name: "Jayashree B",
  30 |       role: "Founder & COO",
  31 |       education: "Coventry University",
  32 |       image: "/team/jayashree.jpg",
  33 |       linkedin: "https://www.linkedin.com/in/jayashree-b-67950621a/"
  34 |     },
  35 |     {
  36 |       name: "Hariharan R",
  37 |       role: "Founder & CTO",
  38 |       education: "University of Leicester",
  39 |       image: "/team/hariharan.jpg",
  40 |       linkedin: "https://www.linkedin.com/in/hariharan-rajaraman/"
  41 |     }
  42 |   ];
  43 | 
  44 |   const teamMembers = {
  45 |     aerospace: [
  46 |       { name: "Srinivasan A", role: "Chief Manufacturing Officer", linkedin: "https://www.linkedin.com/in/srinivasan-arumugam16601/", education: " ", image: "/team/srinivasan.jpg" },
  47 |       { name: "Barani L", role: "Re-entry Vehicles", education: "IIT MADRAS", linkedin: "https://www.linkedin.com/in/barani-l-aa679323b/", image: "/team/barani.jpeg" },
  48 |       { name: "Hariharamadhavan M", role: "Chief Innovation Officer", education: " ", linkedin: "https://www.linkedin.com/in/hariharamadhavan-m-3121b522b/", image: "/team/harimahadev.png" },
  49 |       { name: "Srikanth R", role: "Space Vehicle Design", education: "Coventry University", linkedin: "https://www.linkedin.com/in/srikanth-ravichandran-9974b521a/", image: "/team/srikanth.jpg" },
  50 |       { name: "Balajee E", role: "Design Engineer", education: "MIT, Anna University", linkedin: "https://www.linkedin.com/in/balajee-e-a35755230/", image: "/team/balaji.png" },
  51 |       { name: "Barath Kanna B O", role: "Avionics", education: "MIT, Anna University", linkedin: "https://www.linkedin.com/in/barath-kanna-079074289/", image: "/team/barath.png" },
  52 |       { name: "Sabari Balan G", role: "Flight System Engineer", linkedin: "https://www.linkedin.com/in/sabaribalan1710/", education: " ", image: "/team/sabari.png" },
  53 |       { name: "Karpaganathan N", role: "Embedded Engineer", linkedin: "https://www.linkedin.com/in/karpaganathan-nagendran-5791551ab/", education: " ", image: "/team/karpagaanathan.jpg" },
  54 |       { name: "Atharva Atul Gado", role: "R&D advisor", linkedin: "https://www.linkedin.com/in/atharva-atul-gado-516ba81b8/", education: "University of Wisconsin", image: "/team/atul.jpg" }
  55 |     ],
  56 |     technical: [
  57 |       { name: "Dhilagam Parvathi Nathan C", role: "Technical Engineer", linkedin: "https://www.linkedin.com/in/dhilagam-parvathi-nathan-39701526b/", image: "/team/avatar.png" }
  58 |     ],
  59 |     software: [
  60 |       { name: "Vijayaraj Anbalagan", role: "AI & Software Developer", linkedin: "https://www.linkedin.com/in/vijayarajanbalagan/", image: "/team/vijay.jpg" },
  61 |       { name: "Ravikumar G", role: "Data Engineer", linkedin: "https://www.linkedin.com/in/ravikumar-g-605305263/", image: "/team/ravi.jpg" }
  62 |     ],
  63 |     operations: [
  64 |       { name: "Sowmya R", role: "Chief Human Resource Officer", linkedin: "https://www.linkedin.com/in/sowmya-ramesh-0b1650251/", image: "/team/sowmya.png" }
  65 |     ]
  66 |   };
  67 | 
  68 |   interface TeamMember {
  69 |     name: string;
  70 |     role: string;
  71 |     education?: string;
  72 |     image?: string;
  73 |     linkedin: string;
  74 |   }
  75 | 
  76 |   const ProfileCard = ({ member }: { member: TeamMember }) => (
  77 |     <div className="flex flex-col border border-white/10 p-6 bg-zinc-950 group hover:bg-zinc-900 transition-colors">
  78 |       <div className="relative aspect-square w-full mb-6 overflow-hidden bg-black">
  79 |         <Image
  80 |           src={member.image || "/team/avatar.png"}
  81 |           alt={member.name}
  82 |           layout="fill"
  83 |           objectFit="cover"
  84 |           className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
  85 |         />
  86 |       </div>
  87 |       <div className="text-left flex-1 flex flex-col">
  88 |         <h3 className="text-xl font-display uppercase tracking-wide mb-1">{member.name}</h3>
  89 |         <p className="eyebrow mb-2">{member.role}</p>
  90 |         <p className="text-zinc-500 text-sm mb-4 flex-1">{member.education || "\u00A0"}</p>
  91 |         <a href={member.linkedin} className="text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
  92 |           <FaLinkedin className="w-5 h-5" />
  93 |         </a>
  94 |       </div>
  95 |     </div>
  96 |   );
  97 | 
  98 |   return (
  99 |     <div className="min-h-screen bg-black text-white">
 100 |       <Navbar />
 101 | 
 102 |       <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 border-b border-white/10">
 103 |         <div className="absolute inset-0 z-0">
 104 |           <Image
 105 |             src="/team/Team_bg.png"
 106 |             alt="Team background"
 107 |             fill
 108 |             className="object-cover opacity-30 grayscale"
 109 |             priority
 110 |           />
 111 |           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
 112 |         </div>
 113 | 
 114 |         <div className="relative z-10 container px-6 mx-auto max-w-7xl">
 115 |           <motion.div 
 116 |             initial={{ opacity: 0, scale: 0.98 }}
 117 |             animate={{ opacity: 1, scale: 1 }}
 118 |             transition={{ duration: 1 }}
 119 |             className="max-w-3xl"
 120 |           >
 121 |             <p className="eyebrow mb-4 tracking-[0.25em] text-zinc-400 font-medium">Our Story</p>
 122 |             <h1 className="text-4xl md:text-6xl font-display uppercase font-bold tracking-tight leading-tight text-white mb-6">
 123 |               The People<br/>Behind The Mission
 124 |             </h1>
 125 |             <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-body">
 126 |               Exactly two years ago, what began as a simple college project fueled by curiosity, late nights, and pure ambition has transformed into a full-fledged spacetech revolution.
 127 |             </p>
 128 |             <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-body">
 129 |               Today, <strong className="text-white font-normal">Dashagriv Aerospace</strong> is proud to be India&apos;s first dedicated HAPS spacetech startup, building next-gen platforms for surveillance, Earth observation, defense, telecom, and scientific research.
 130 |             </p>
 131 |           </motion.div>
 132 |         </div>
 133 |       </section>
 134 | 
 135 |       <section className="py-32 bg-black border-b border-white/10">
 136 |         <div className="container mx-auto px-6 max-w-7xl">
 137 |           <div className="mb-20">
 138 |             <p className="eyebrow mb-4">Leadership</p>
 139 |             <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">Founders</h2>
 140 |           </div>
 141 |           <div className="grid md:grid-cols-3 gap-6">
 142 |             {founders.map((founder, idx) => <ProfileCard key={idx} member={founder} />)}
 143 |           </div>
 144 |         </div>
 145 |       </section>
 146 | 
 147 |       <section className="py-32 bg-zinc-950 border-b border-white/10">
 148 |         <div className="container mx-auto px-6 max-w-7xl">
 149 |           <div className="mb-20">
 150 |             <p className="eyebrow mb-4">Guidance</p>
 151 |             <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">Mentor</h2>
 152 |           </div>
 153 |           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
 154 |             {mentors.map((mentor, idx) => <ProfileCard key={idx} member={mentor} />)}
 155 |           </div>
 156 |         </div>
 157 |       </section>
 158 | 
 159 |       <section className="py-32 bg-black">
 160 |         <div className="container mx-auto px-6 max-w-7xl">
 161 |           <div className="mb-20">
 162 |             <p className="eyebrow mb-4">The Crew</p>
 163 |             <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">Engineering Team</h2>
 164 |           </div>
 165 |           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
 166 |             {teamMembers.aerospace.map((member, idx) => <ProfileCard key={idx} member={member} />)}
 167 |           </div>
 168 | 
 169 |           <div className="flex gap-6 mb-20">
 170 |             {/* Software & Data */}
 171 |             <div className="flex flex-col flex-[2]">
 172 |               <h3 className="text-2xl font-display uppercase tracking-wide mb-6 text-white border-b border-white/10 pb-4">Software &amp; Data</h3>
 173 |               <div className="grid grid-cols-2 gap-6">
 174 |                 {teamMembers.software.map((member, idx) => (
 175 |                   <div key={idx} className="flex flex-col border border-white/10 p-6 bg-zinc-950 group hover:bg-zinc-900 transition-colors">
 176 |                     <div className="relative aspect-square w-full mb-6 overflow-hidden bg-black">
 177 |                       <Image src={member.image || "/team/avatar.png"} alt={member.name} layout="fill" objectFit="cover" className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
 178 |                     </div>
 179 |                     <div className="text-left flex-1 flex flex-col">
 180 |                       <h3 className="text-xl font-display uppercase tracking-wide mb-1">{member.name}</h3>
 181 |                       <p className="eyebrow mb-2">{member.role}</p>
 182 |                       <p className="text-zinc-500 text-sm mb-4 flex-1">{member.education || '\u00A0'}</p>
 183 |                       <a href={member.linkedin} className="text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-5 h-5" /></a>
 184 |                     </div>
 185 |                   </div>
 186 |                 ))}
 187 |               </div>
 188 |             </div>
 189 | 
 190 |             {/* Technical */}
 191 |             <div className="flex flex-col flex-1">
 192 |               <h3 className="text-2xl font-display uppercase tracking-wide mb-6 text-white border-b border-white/10 pb-4">Technical</h3>
 193 |               <div className="flex flex-col gap-6">
 194 |                 {teamMembers.technical.map((member, idx) => (
 195 |                   <div key={idx} className="flex flex-col border border-white/10 p-6 bg-zinc-950 group hover:bg-zinc-900 transition-colors">
 196 |                     <div className="relative aspect-square w-full mb-6 overflow-hidden bg-black">
 197 |                       <Image src={member.image || "/team/avatar.png"} alt={member.name} layout="fill" objectFit="cover" className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
 198 |                     </div>
 199 |                     <div className="text-left flex-1 flex flex-col">
 200 |                       <h3 className="text-xl font-display uppercase tracking-wide mb-1">{member.name}</h3>
```

### Chunk 2/2

```tsx
 201 |                       <p className="eyebrow mb-2">{member.role}</p>
 202 |                       <p className="text-zinc-500 text-sm mb-4 flex-1">{member.education || '\u00A0'}</p>
 203 |                       <a href={member.linkedin} className="text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-5 h-5" /></a>
 204 |                     </div>
 205 |                   </div>
 206 |                 ))}
 207 |               </div>
 208 |             </div>
 209 | 
 210 |             {/* Operations */}
 211 |             <div className="flex flex-col flex-1">
 212 |               <h3 className="text-2xl font-display uppercase tracking-wide mb-6 text-white border-b border-white/10 pb-4">Operations</h3>
 213 |               <div className="flex flex-col gap-6">
 214 |                 {teamMembers.operations.map((member, idx) => (
 215 |                   <div key={idx} className="flex flex-col border border-white/10 p-6 bg-zinc-950 group hover:bg-zinc-900 transition-colors">
 216 |                     <div className="relative aspect-square w-full mb-6 overflow-hidden bg-black">
 217 |                       <Image src={member.image || "/team/avatar.png"} alt={member.name} layout="fill" objectFit="cover" className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
 218 |                     </div>
 219 |                     <div className="text-left flex-1 flex flex-col">
 220 |                       <h3 className="text-xl font-display uppercase tracking-wide mb-1">{member.name}</h3>
 221 |                       <p className="eyebrow mb-2">{member.role}</p>
 222 |                       <p className="text-zinc-500 text-sm mb-4 flex-1">{member.education || '\u00A0'}</p>
 223 |                       <a href={member.linkedin} className="text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-5 h-5" /></a>
 224 |                     </div>
 225 |                   </div>
 226 |                 ))}
 227 |               </div>
 228 |             </div>
 229 |           </div>
 230 |         </div>
 231 |       </section>
 232 | 
 233 |       <Footer />
 234 |     </div>
 235 |   );
 236 | };
 237 | 
 238 | export default TeamsPage;
 239 | 
```


---

## 📄 src\components\AlreadyRegisteredDialog.tsx
**hash:** `2d68a51b`

### Chunk 1/2

```tsx
   1 | "use client"
   2 | 
   3 | import React, { useState } from 'react'
   4 | import { Button } from "@/components/ui/button"
   5 | import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
   6 | import { Input } from "@/components/ui/input"
   7 | import { Label } from "@/components/ui/label"
   8 | import { toast } from "react-hot-toast"
   9 | import { checkRegistrationStatus, db, updateRegistrationFeedback } from "@/lib/firebase-utils"
  10 | import { generateRegQR } from "@/lib/upi-qr"
  11 | import { Calendar, MapPin, Clock, Phone, Mail, Star } from "lucide-react"
  12 | import { doc, getDoc } from 'firebase/firestore'
  13 | import { Inter } from 'next/font/google'
  14 | 
  15 | const inter = Inter({
  16 |   subsets: ["latin"],
  17 |   variable: "--font-inter",
  18 | })
  19 | 
  20 | export function AlreadyRegisteredDialog() {
  21 |   const [isOpen, setIsOpen] = useState(false)
  22 |   const [identifier, setIdentifier] = useState('')
  23 |   interface RegistrationData {
  24 |     name: string;
  25 |     email: string;
  26 |     phone: string;
  27 |     amount: number;
  28 |     status: 'Pending' | 'Approved' | 'Rejected' | 'Completed';
  29 |     catagory: 'Undergraduate' | 'Postgraduate' | 'Research Scholar' | 'Startup/Industrial';
  30 |     institution: string;
  31 |     attended?: boolean;
  32 |     feedback?: string;
  33 |     feedbackContent?: string;
  34 |   }
  35 | 
  36 |   const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null)
  37 |   const [registrationQR, setRegistrationQR] = useState('')
  38 |   const [isLoading, setIsLoading] = useState(false)
  39 |   const [feedbackRating, setFeedbackRating] = useState(0)
  40 |   const [feedbackContent, setFeedbackContent] = useState('')
  41 | 
  42 |   const FeedbackStars = ({ rating, onRatingChange }: { 
  43 |     rating: number, 
  44 |     onRatingChange: (newRating: number) => void 
  45 |   }) => {
  46 |     return (
  47 |       <div className="flex space-x-1 mb-4 justify-center items-center text-center">
  48 |         {[1, 2, 3, 4, 5].map((star) => (
  49 |           <Star 
  50 |             key={star}
  51 |             className={`cursor-pointer w-8 h-8 ${
  52 |               star <= rating 
  53 |                 ? 'fill-yellow-400 text-yellow-400' 
  54 |                 : 'text-gray-300'
  55 |             }`}
  56 |             onClick={() => onRatingChange(star)}
  57 |           />
  58 |         ))}
  59 |       </div>
  60 |     )
  61 |     }
  62 | 
  63 |   const checkRegistration = async () => {
  64 |     if (!identifier.trim()) {
  65 |       toast.error("Please enter email or phone number")
  66 |       return
  67 |     }
  68 | 
  69 |     setIsLoading(true)
  70 |     try {
  71 |       // Determine if input is email or phone
  72 |       
  73 |       const status = await checkRegistrationStatus(identifier)
  74 |       
  75 |       if (status === null) {
  76 |         toast.error("No registration found")
  77 |         return
  78 |       }
  79 | 
  80 |       // Fetch full registration data
  81 |       const docRef = doc(db, 'workshop1', identifier)
  82 |       const docSnap = await getDoc(docRef)
  83 |       
  84 |       if (docSnap.exists()) {
  85 |         const data = docSnap.data()
  86 |         console.log("Registration data:", data);
  87 |         if (!data.status) {
  88 |             console.error("No status found in registration data")
  89 |             toast.error("Invalid registration data")
  90 |             return
  91 |           }
  92 |         setRegistrationData(data as RegistrationData)
  93 | 
  94 |         // Generate registration QR
  95 |         if (data.status === 'Approved') {
  96 |             const registrationQRCode = await generateRegQR(
  97 |               data.email, 
  98 |               data.name,
  99 |               data.phone,
 100 |               data.institution,
 101 |               data.catagory,
 102 |               data.status
 103 |             )
 104 |             setRegistrationQR(registrationQRCode)
 105 |           }
 106 |         } else {
 107 |           toast.error("Registration details not found")
 108 |         }
 109 |       } catch (error) {
 110 |         console.error('Registration check error:', error)
 111 |         toast.error("Error checking registration")
 112 |       } finally {
 113 |         setIsLoading(false)
 114 |       }
 115 |     }
 116 | 
 117 | 
 118 |   const submitFeedback = async () => {
 119 |     if (feedbackRating === 0) {
 120 |       toast.error("Please select a rating")
 121 |       return
 122 |     }
 123 | 
 124 |     if (!registrationData?.email) {
 125 |       toast.error("No registration data found")
 126 |       return
 127 |     }
 128 | 
 129 |     try {
 130 |       await updateRegistrationFeedback(
 131 |         registrationData.email, 
 132 |         feedbackRating.toString(), 
 133 |         feedbackContent
 134 |       )
 135 |       toast.success("Thank you for your feedback!")
 136 |       setIsOpen(false)
 137 |     } catch (error) {
 138 |       console.error('Feedback submission error:', error)
 139 |       toast.error("Failed to submit feedback")
 140 |     }
 141 |   }
 142 | 
 143 | 
 144 |   const renderStatusBadge = () => {
 145 |     switch (registrationData?.status) {
 146 |       case 'Pending':
 147 |         return (
 148 |           <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-flex items-center">
 149 |             <span className="mr-2">🕒</span> Pending Approval
 150 |           </div>
 151 |         )
 152 |       case 'Approved':
 153 |         return (
 154 |           <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-flex items-center">
 155 |             <span className="mr-2">✅</span> Approved
 156 |           </div>
 157 |         )
 158 |       case 'Rejected':
 159 |         return (
 160 |           <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full inline-flex items-center">
 161 |             <span className="mr-2">❌</span> Rejected
 162 |           </div>
 163 |         )
 164 |         case 'Completed':
 165 |         return (
 166 |           <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-flex items-center">
 167 |             <span className="mr-2">📝</span> Feedback
 168 |           </div>
 169 |         )
 170 |       default:
 171 |         return null
 172 |     }
 173 |   }
 174 | 
 175 |   const renderRegistrationContent = () => {
 176 |     if (!registrationData) return null
 177 | 
 178 |     switch (registrationData.status) {
 179 |       case 'Pending':
 180 |         return (
 181 |           <div className="space-y-4">
 182 |             <p>Your registration is currently under review. We will update you soon.</p>
 183 |             <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
 184 |               <h3 className="font-semibold mb-2">Contact Information</h3>
 185 |               <div className="flex items-center space-x-2 mb-1">
 186 |                 <Phone size={16} />
 187 |                 <a href={`tel:${registrationData.phone}`} className="hover:underline">
 188 |                   {registrationData.phone}
 189 |                 </a>
 190 |               </div>
 191 |               <div className="flex items-center space-x-2">
 192 |                 <Mail size={16} />
 193 |                 <a href={`mailto:${registrationData.email}`} className="hover:underline">
 194 |                   {registrationData.email}
 195 |                 </a>
 196 |               </div>
 197 |             </div>
 198 |           </div>
 199 |         )
 200 |       case 'Approved':
```

### Chunk 2/2

```tsx
 201 |         return (
 202 |           <div className="space-y-4 md:flex md:space-y-0 md:space-x-4">
 203 |             <div className="bg-green-50 border border-green-200 p-4 rounded-lg md:max-w-xl">
 204 |               <h2 className="text-xl font-bold text-green-800 mb-4">Congratulations!</h2>
 205 |               <div className="space-y-2">
 206 |                 <div className="flex items-center space-x-2">
 207 |                   <Calendar size={16} />
 208 |                   <span>Date: January 30, 2025</span>
 209 |                 </div>
 210 |                 <div className="flex items-center space-x-2">
 211 |                   <Clock size={16} />
 212 |                   <span>Time: 9:00 AM - 5:00 PM</span>
 213 |                 </div>
 214 |                 <div className="flex items-center space-x-2">
 215 |                   <MapPin size={16} />
 216 |                   <span>Venue: KCG Campus, Chennai</span>
 217 |                 </div>
 218 |               </div>
 219 |             </div>
 220 |             {registrationQR && (
 221 |               <div className="mt-4 md:mt-0 md:flex-shrink-0">
 222 |                 <h3 className="text-center mb-2">Your Registration QR Code</h3>
 223 |                 <img 
 224 |                   src={registrationQR} 
 225 |                   alt="Registration QR Code" 
 226 |                   className="mx-auto max-w-[200px] rounded-lg"
 227 |                 />
 228 |               </div>
 229 |             )}
 230 |           </div>
 231 |         )
 232 |       case 'Rejected':
 233 |         localStorage.removeItem('registrationStep')
 234 |         localStorage.removeItem('dashagrivemail')
 235 |         localStorage.removeItem('registrationFormData')
 236 |         return (
 237 |           <div className="space-y-4">
 238 |             <p className="text-red-600">
 239 |               Your registration has been rejected. Please review and update your submission.
 240 |             </p>
 241 |             <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
 242 |               <h3 className="font-semibold mb-2">Next Steps</h3>
 243 |               <p>
 244 |                 Please verify your payment details and contact information. 
 245 |                 Reach out to our support team for further assistance.
 246 |               </p>
 247 |               <div className="flex items-center space-x-2 mt-2">
 248 |                 <Phone size={16} />
 249 |                 <a href="tel:+917358551897" className="hover:underline">+91 7358551897</a>
 250 |               </div>
 251 |               <div className="flex items-center space-x-2 mt-1">
 252 |                 <Mail size={16} />
 253 |                 <a href="mailto:support@example.com" className="hover:underline">
 254 |                   support@example.com
 255 |                 </a>
 256 |               </div>
 257 |             </div>
 258 |           </div>
 259 |         )
 260 |         case 'Completed':
 261 |             return (
 262 |               <div className="space-y-4">
 263 |                 <p>Thank you for attending our event. We would love to hear your feedback.</p>
 264 |                 <FeedbackStars 
 265 |                   rating={feedbackRating} 
 266 |                   onRatingChange={setFeedbackRating} 
 267 |                 />
 268 |                 <Label>Feedback</Label>
 269 |                 <Input
 270 |                   value={feedbackContent}
 271 |                   onChange={(e) => setFeedbackContent(e.target.value)}
 272 |                   placeholder="Your feedback..."
 273 |                   className="mt-2"
 274 |                 />
 275 |                 <Button onClick={submitFeedback} className="w-full">
 276 |                   Submit Feedback
 277 |                 </Button>
 278 |               </div>
 279 |             )
 280 |           default:
 281 |             console.error("Unexpected status:", registrationData.status)
 282 |             return <p>Registration Status: {registrationData.status}</p>
 283 |     }
 284 |   }
 285 | 
 286 |   return (
 287 |     <>
 288 |       <span 
 289 |         className="text-blue-600 underline cursor-pointer"
 290 |         onClick={() => setIsOpen(true)}
 291 |       >
 292 |         Already Registered?
 293 |       </span>
 294 |       
 295 |       <Dialog open={isOpen} onOpenChange={setIsOpen}>
 296 |         <DialogContent  className={`${inter.className} bg-white text-black max-w-md`}>
 297 |           <DialogHeader>
 298 |             <DialogTitle>Check Registration Status</DialogTitle>
 299 |             <DialogDescription>
 300 |               Enter your registered Email
 301 |             </DialogDescription>
 302 |           </DialogHeader>
 303 |           <div className="space-y-4">
 304 |             <div>
 305 |               <Label>Email</Label>
 306 |               <Input
 307 |                 value={identifier}
 308 |                 onChange={(e) => setIdentifier(e.target.value)}
 309 |                 placeholder="Enter Email"
 310 |                 className="mt-2"
 311 |               />
 312 |             </div>
 313 |             
 314 |             <Button 
 315 |               onClick={checkRegistration} 
 316 |               disabled={isLoading}
 317 |               className="w-full"
 318 |             >
 319 |               {isLoading ? "Checking..." : "Check Status"}
 320 |             </Button>
 321 |             
 322 |             {registrationData && (
 323 |               <div className="mt-4 space-y-4">
 324 |                 <div className="flex justify-between items-center">
 325 |                   <h3 className="text-xl font-bold">{registrationData.name}</h3>
 326 |                   {renderStatusBadge()}
 327 |                 </div>
 328 |                 {renderRegistrationContent()}
 329 |               </div>
 330 |             )}
 331 |           </div>
 332 |         </DialogContent>
 333 |       </Dialog>
 334 |     </>
 335 |   )
 336 | }
```


---

## 📄 src\components\AnnouncementTicker.tsx
**hash:** `5a550340`

### Chunk 1/1

```tsx
   1 | "use client";
   2 | import { useState, useEffect } from "react";
   3 | import { AnimatePresence, motion } from "framer-motion";
   4 | 
   5 | const announcements = [
   6 |   {
   7 |     label: "Milestone",
   8 |     text: (
   9 |       <>
  10 |         Mid-sea stratospheric trials off Nagapattinam coast — supported by
  11 |         Indian Coast Guard &amp; Navy
  12 |       </>
  13 |     ),
  14 |     link: {
  15 |       href: "https://www.linkedin.com/posts/dashagriv-aerospace_dashagrivaerospace-haps-nearspace-activity-7455941013778386944--KAw",
  16 |       text: "View on Linkedin",
  17 |     },
  18 |   },
  19 |   {
  20 |     label: "Breaking",
  21 |     text: (
  22 |       <>Dashagriv secured it&apos;s Pre-Seed fund from InnoSphere Ventures</>
  23 |     ),
  24 |     link: {
  25 |       href: "https://www.linkedin.com/posts/dashagriv-aerospace_dashagrivaerospace-haps-india-activity-7462489311913922560-N28Z",
  26 |       text: "View on Linkedin",
  27 |     },
  28 |   },
  29 | ];
  30 | 
  31 | export default function AnnouncementTicker() {
  32 |   const [current, setCurrent] = useState(0);
  33 | 
  34 |   useEffect(() => {
  35 |     const timer = setInterval(() => {
  36 |       setCurrent((prev) => (prev + 1) % announcements.length);
  37 |     }, 5000);
  38 |     return () => clearInterval(timer);
  39 |   }, []);
  40 | 
  41 |   const ann = announcements[current];
  42 | 
  43 |   return (
  44 |     <div className="ticker-bar">
  45 |       {/* Left label block */}
  46 |       <div className="ticker-label-wrap">
  47 |         <span className="ticker-dot" />
  48 |         <AnimatePresence mode="wait">
  49 |           <motion.span
  50 |             key={`label-${current}`}
  51 |             className="ticker-label-text"
  52 |             initial={{ opacity: 0, y: 4 }}
  53 |             animate={{ opacity: 1, y: 0 }}
  54 |             exit={{ opacity: 0, y: -4 }}
  55 |             transition={{ duration: 0.25 }}
  56 |           >
  57 |             {ann.label}
  58 |           </motion.span>
  59 |         </AnimatePresence>
  60 |       </div>
  61 | 
  62 |       {/* Centre scrolling message */}
  63 |       <div className="flex-1 overflow-hidden px-4 flex items-center justify-center">
  64 |         <AnimatePresence mode="wait">
  65 |           <motion.p
  66 |             key={`text-${current}`}
  67 |             className="ticker-text text-center"
  68 |             initial={{ opacity: 0, y: 6 }}
  69 |             animate={{ opacity: 1, y: 0 }}
  70 |             exit={{ opacity: 0, y: -6 }}
  71 |             transition={{ duration: 0.3 }}
  72 |           >
  73 |             {ann.text}
  74 |           </motion.p>
  75 |         </AnimatePresence>
  76 |       </div>
  77 | 
  78 |       {/* Right CTA */}
  79 |       <AnimatePresence mode="wait">
  80 |         <motion.a
  81 |           key={`cta-${current}`}
  82 |           href={ann.link.href}
  83 |           className="ticker-cta"
  84 |           initial={{ opacity: 0 }}
  85 |           animate={{ opacity: 1 }}
  86 |           exit={{ opacity: 0 }}
  87 |           transition={{ duration: 0.25 }}
  88 |         >
  89 |           {ann.link.text} <span className="ticker-arrow">→</span>
  90 |         </motion.a>
  91 |       </AnimatePresence>
  92 | 
  93 |       {/* Progress indicator dots */}
  94 |       <div
  95 |         className="flex items-center gap-1.5 px-4 border-l flex-shrink-0"
  96 |         style={{ borderLeftColor: "rgba(255,255,255,0.08)" }}
  97 |       >
  98 |         {announcements.map((_, i) => (
  99 |           <button
 100 |             key={i}
 101 |             onClick={() => setCurrent(i)}
 102 |             aria-label={`Announcement ${i + 1}`}
 103 |             style={{
 104 |               width: 5,
 105 |               height: 5,
 106 |               borderRadius: "50%",
 107 |               border: "none",
 108 |               cursor: "pointer",
 109 |               backgroundColor:
 110 |                 i === current
 111 |                   ? "rgba(255,255,255,0.6)"
 112 |                   : "rgba(255,255,255,0.18)",
 113 |               transition: "background-color 0.3s ease",
 114 |               padding: 0,
 115 |             }}
 116 |           />
 117 |         ))}
 118 |       </div>
 119 |     </div>
 120 |   );
 121 | }
 122 | 
```


---

## 📄 src\components\CoreFeature.tsx
**hash:** `45373b78`

### Chunk 1/1

```tsx
   1 | "use client";
   2 | 
   3 | import { motion } from "framer-motion";
   4 | import { SatelliteDish, Zap, Layers, Code, ArrowRight } from "lucide-react";
   5 | import { cn } from "@/lib/utils";
   6 | import React from "react";
   7 | 
   8 | // ─── Types ─────────────────────────────────────────────
   9 | 
  10 | interface BentoGridItemProps {
  11 |   title: string;
  12 |   description: string;
  13 |   icon: React.ReactNode;
  14 |   size: "large" | "medium" | "small";
  15 |   className?: string;
  16 | }
  17 | 
  18 | // ─── Individual card ────────────────────────────────────
  19 | 
  20 | const BentoGridItem: React.FC<BentoGridItemProps> = ({
  21 |   title,
  22 |   description,
  23 |   icon,
  24 |   className,
  25 | }) => {
  26 |   const itemVariants = {
  27 |     hidden: { opacity: 0, y: 16 },
  28 |     visible: {
  29 |       opacity: 1,
  30 |       y: 0,
  31 |       transition: { duration: 0.5, ease: "easeOut" },
  32 |     },
  33 |   };
  34 | 
  35 |   return (
  36 |     <motion.div
  37 |       variants={itemVariants}
  38 |       className={cn(
  39 |         "group relative overflow-hidden border-0 bg-black p-10 transition-colors duration-300 hover:bg-zinc-900",
  40 |         className,
  41 |       )}
  42 |     >
  43 |       {/* Subtle grid texture */}
  44 |       <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px]" />
  45 | 
  46 |       {/* Content */}
  47 |       <div className="relative z-10 flex h-full flex-col justify-between text-white">
  48 |         <div>
  49 |           {/* Icon container */}
  50 |           <div className="mb-8 inline-flex h-10 w-10 items-center justify-center border border-white/10 text-zinc-400 transition-colors duration-300 group-hover:border-white/30 group-hover:text-white">
  51 |             {icon}
  52 |           </div>
  53 | 
  54 |           <h3 className="mb-3 font-display text-xl uppercase tracking-wide text-white leading-tight">
  55 |             {title}
  56 |           </h3>
  57 |           <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
  58 |             {description}
  59 |           </p>
  60 |         </div>
  61 | 
  62 |         {/* Arrow */}
  63 |         <div className="mt-8">
  64 |           <ArrowRight className="h-4 w-4 text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-400" />
  65 |         </div>
  66 |       </div>
  67 | 
  68 |       {/* Bottom edge sweep on hover */}
  69 |       <div className="absolute bottom-0 left-0 h-px w-0 bg-white/30 transition-all duration-500 ease-out group-hover:w-full" />
  70 |     </motion.div>
  71 |   );
  72 | };
  73 | 
  74 | // ─── Data ────────────────────────────────────────────────
  75 | 
  76 | const items = [
  77 |   {
  78 |     title: "Stratospheric HAPS Development",
  79 |     description:
  80 |       "Building high-altitude platform systems for long-endurance missions in research, surveillance, and advanced communications — operating at 18–20 km.",
  81 |     icon: <SatelliteDish className="h-5 w-5" />,
  82 |     size: "large" as const,
  83 |   },
  84 |   {
  85 |     title: "Payload Hosting Services (HaaS)",
  86 |     description:
  87 |       "Deploy your sensors and payloads on our stratospheric platforms with plug-and-play integration.",
  88 |     icon: <Zap className="h-5 w-5" />,
  89 |     size: "small" as const,
  90 |   },
  91 |   {
  92 |     title: "Stratospheric Subsystems",
  93 |     description:
  94 |       "Reliable, integration-ready subsystems purpose-built for HAPS-based missions.",
  95 |     icon: <Layers className="h-5 w-5" />,
  96 |     size: "medium" as const,
  97 |   },
  98 |   {
  99 |     title: "Flight Data & Planning Software",
 100 |     description:
 101 |       "Advanced software suite for mission planning, real-time telemetry, and flight data analytics.",
 102 |     icon: <Code className="h-5 w-5" />,
 103 |     size: "medium" as const,
 104 |   },
 105 | ];
 106 | 
 107 | // ─── Grid ────────────────────────────────────────────────
 108 | 
 109 | export default function CoreFeature() {
 110 |   const containerVariants = {
 111 |     hidden: {},
 112 |     visible: {
 113 |       transition: {
 114 |         staggerChildren: 0.1,
 115 |         delayChildren: 0.05,
 116 |       },
 117 |     },
 118 |   };
 119 | 
 120 |   return (
 121 |     <section className="bg-black py-32 border-t border-white/10">
 122 |       <div className="mx-auto max-w-6xl px-6">
 123 |         {/* Header */}
 124 |         <div className="mb-16 text-center">
 125 |           <p className="eyebrow mb-4">Core Systems</p>
 126 |           <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-white">
 127 |             What We Do
 128 |           </h2>
 129 |         </div>
 130 | 
 131 |         {/* Bento grid */}
 132 |         <motion.div
 133 |           className="grid grid-cols-1 gap-px bg-white/10 border border-white/10 sm:grid-cols-2 md:grid-cols-6"
 134 |           variants={containerVariants}
 135 |           initial="hidden"
 136 |           whileInView="visible"
 137 |           viewport={{ once: true, amount: 0.15 }}
 138 |         >
 139 |           {items.map((item, i) => (
 140 |             <BentoGridItem
 141 |               key={i}
 142 |               title={item.title}
 143 |               description={item.description}
 144 |               icon={item.icon}
 145 |               size={item.size}
 146 |               className={cn(
 147 |                 item.size === "large"
 148 |                   ? "md:col-span-4"
 149 |                   : item.size === "medium"
 150 |                     ? "md:col-span-3"
 151 |                     : "md:col-span-2",
 152 |                 "min-h-[200px]",
 153 |               )}
 154 |             />
 155 |           ))}
 156 |         </motion.div>
 157 |       </div>
 158 |     </section>
 159 |   );
 160 | }
 161 | 
```


---

## 📄 src\components\Footer.tsx
**hash:** `35ffebc8`

### Chunk 1/1

```tsx
   1 | import React from "react";
   2 | import { FiLinkedin, FiYoutube, FiInstagram } from "react-icons/fi";
   3 | 
   4 | // ─── Data ────────────────────────────────────────────────
   5 | 
   6 | const socialLinks = [
   7 |   {
   8 |     icon: <FiLinkedin className="h-4 w-4" />,
   9 |     href: "https://www.linkedin.com/company/dashagriv-aerospace-technology/",
  10 |     label: "LinkedIn",
  11 |   },
  12 |   {
  13 |     icon: <FiYoutube className="h-4 w-4" />,
  14 |     href: "https://www.youtube.com/@Dashagriv_Aerospace",
  15 |     label: "YouTube",
  16 |   },
  17 |   {
  18 |     // Verify the Instagram URL — update if handle differs
  19 |     icon: <FiInstagram className="h-4 w-4" />,
  20 |     href: "https://www.instagram.com/dashagriv_aerospace/",
  21 |     label: "Instagram",
  22 |   },
  23 | ];
  24 | 
  25 | const navLinks = [
  26 |   { label: "Solutions", href: "/solution" },
  27 |   { label: "Team", href: "/team" },
  28 |   { label: "Careers", href: "/careers" },
  29 | ];
  30 | 
  31 | // ─── Component ───────────────────────────────────────────
  32 | 
  33 | const Footer = () => {
  34 |   return (
  35 |     <footer className="bg-black border-t border-white/10 pt-20 pb-8">
  36 |       <div className="mx-auto max-w-7xl px-6">
  37 |         {/* Mission statement header */}
  38 |         <div className="mb-16 pb-16 border-b border-white/10">
  39 |           <p className="text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-tight text-white leading-tight max-w-2xl">
  40 |             The stratosphere is no longer
  41 |             <br className="hidden md:block" /> out of reach.
  42 |           </p>
  43 |         </div>
  44 | 
  45 |         {/* Four-column grid */}
  46 |         <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-16">
  47 |           {/* Brand column */}
  48 |           <div className="lg:col-span-2">
  49 |             <h3 className="eyebrow mb-4">Dashagriv Aerospace Technology</h3>
  50 |             <p className="text-zinc-500 text-sm max-w-sm mb-8 leading-relaxed font-body">
  51 |               India&apos;s first dedicated HAPS spacetech startup — building
  52 |               stratospheric platforms at 18–20 km for surveillance, Earth
  53 |               observation, defence, and advanced telecommunications.
  54 |             </p>
  55 |             {/* Social icons */}
  56 |             <div className="flex gap-2">
  57 |               {socialLinks.map((social, index) => (
  58 |                 <a
  59 |                   key={index}
  60 |                   href={social.href}
  61 |                   aria-label={social.label}
  62 |                   target="_blank"
  63 |                   rel="noopener noreferrer"
  64 |                   className="flex h-8 w-8 items-center justify-center border border-white/10 text-zinc-600 transition-colors duration-200 hover:border-white/40 hover:text-white"
  65 |                 >
  66 |                   {social.icon}
  67 |                 </a>
  68 |               ))}
  69 |             </div>
  70 |           </div>
  71 | 
  72 |           {/* Navigate column */}
  73 |           <div>
  74 |             <h3 className="eyebrow mb-6">Navigate</h3>
  75 |             <ul className="space-y-4">
  76 |               {navLinks.map((link) => (
  77 |                 <li key={link.label}>
  78 |                   <a
  79 |                     href={link.href}
  80 |                     className="text-sm text-zinc-500 hover:text-white transition-colors duration-200 font-body"
  81 |                   >
  82 |                     {link.label}
  83 |                   </a>
  84 |                 </li>
  85 |               ))}
  86 |             </ul>
  87 |           </div>
  88 | 
  89 |           {/* Contact column */}
  90 |           <div>
  91 |             <h3 className="eyebrow mb-6">Contact</h3>
  92 |             <ul className="space-y-4 text-sm font-body">
  93 |               <li>
  94 |                 <a
  95 |                   href="mailto:info@dashagriv.in"
  96 |                   className="text-zinc-500 hover:text-white transition-colors duration-200"
  97 |                 >
  98 |                   info@dashagriv.in
  99 |                 </a>
 100 |               </li>
 101 |               <li>
 102 |                 <a
 103 |                   href="tel:+916382497619"
 104 |                   className="text-zinc-500 hover:text-white transition-colors duration-200"
 105 |                 >
 106 |                   +91 63824 97619
 107 |                 </a>
 108 |               </li>
 109 |               <li className="text-zinc-700 leading-relaxed">
 110 |                 Chennai, Tamil Nadu, India
 111 |               </li>
 112 |             </ul>
 113 |           </div>
 114 |         </div>
 115 | 
 116 |         {/* Bottom bar */}
 117 |         <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
 118 |           <p className="text-xs text-zinc-700 font-body">
 119 |             &copy; {new Date().getFullYear()} Dashagriv Aerospace Technology.
 120 |             All rights reserved.
 121 |           </p>
 122 |           <p
 123 |             style={{
 124 |               fontSize: "9px",
 125 |               letterSpacing: "0.25em",
 126 |               textTransform: "uppercase",
 127 |               fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
 128 |               color: "rgba(255,255,255,0.2)",
 129 |             }}
 130 |           >
 131 |             Pioneering the Near Space Frontier
 132 |           </p>
 133 |         </div>
 134 |       </div>
 135 |     </footer>
 136 |   );
 137 | };
 138 | 
 139 | export default Footer;
 140 | 
```


---

## 📄 src\components\Gallery.tsx
**hash:** `3ee1c50d`

### Chunk 1/1

```tsx
   1 | "use client";
   2 | 
   3 | import Image from "next/image";
   4 | import { useState } from "react";
   5 | import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
   6 | 
   7 | const imageList = [
   8 |   "/solutions/gallery-6.jpg",
   9 |   "/solutions/gallery-5.jpg",
  10 | ];
  11 | 
  12 | export const StaticGallery = () => {
  13 |   const [zoomImage, setZoomImage] = useState<string | null>(null);
  14 | 
  15 |   return (
  16 |     <>
  17 |       <section className="w-full py-32 bg-black border-t border-white/10">
  18 |         <div className="max-w-7xl mx-auto px-6">
  19 |           <div className="mb-20 text-center">
  20 |             <p className="eyebrow mb-4">Gallery</p>
  21 |             <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white">
  22 |               Visuals
  23 |             </h2>
  24 |           </div>
  25 | 
  26 |           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  27 |             {imageList.map((src, index) => (
  28 |               <div
  29 |                 key={index}
  30 |                 className="relative aspect-video overflow-hidden cursor-pointer group bg-zinc-900 border border-white/10"
  31 |                 onClick={() => setZoomImage(src)}
  32 |               >
  33 |                 <Image
  34 |                   src={src}
  35 |                   alt={`Gallery image ${index + 1}`}
  36 |                   fill
  37 |                   className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
  38 |                 />
  39 |               </div>
  40 |             ))}
  41 |           </div>
  42 |         </div>
  43 |       </section>
  44 | 
  45 |       <Dialog open={!!zoomImage} onOpenChange={() => setZoomImage(null)}>
  46 |         <DialogContent className="max-w-6xl w-full h-[80vh] p-0 bg-black border border-white/10" aria-describedby="Zoomed Image">
  47 |           <DialogTitle className="sr-only">Zoomed Image</DialogTitle>
  48 |           {zoomImage && (
  49 |             <div className="relative w-full h-full p-4">
  50 |               <Image
  51 |                 src={zoomImage}
  52 |                 alt="Zoomed image"
  53 |                 fill
  54 |                 className="object-contain"
  55 |               />
  56 |             </div>
  57 |           )}
  58 |         </DialogContent>
  59 |       </Dialog>
  60 |     </>
  61 |   );
  62 | };
  63 | 
```


---

## 📄 src\components\LogoScroll.tsx
**hash:** `3626d3e3`

### Chunk 1/1

```tsx
   1 | import React from "react";
   2 | 
   3 | function LogoScroll() {
   4 |   const logos = [
   5 |     "/logo/DPIIT.png",
   6 |     "/logo/HAPS.png",
   7 |     "/logo/MSME.png",
   8 |     "/logo/SI.png",
   9 |     "/logo/TAA.png",
  10 |     "/logo/TS.png",
  11 |     "/logo/kcg.png",
  12 |     "/logo/kiet.png",
  13 |   ];
  14 | 
  15 |   return (
  16 |     <div className="logo-scroll-container mt-96">
  17 |       <p className="text-center text-md mt-4 text-white">
  18 |         {" "}
  19 |         Supported and Partnered with{" "}
  20 |       </p>
  21 |       <div className="logo-scroll">
  22 |         <div className="logo-track">
  23 |           {logos.map((logo, index) => (
  24 |             <div className="logo-item" key={`logo-${index}`}>
  25 |               <img src={logo} alt={`Logo ${index + 1}`} />
  26 |             </div>
  27 |           ))}
  28 |           {logos.map((logo, index) => (
  29 |             <div className="logo-item" key={`logo-duplicate-${index}`}>
  30 |               <img src={logo} alt={`Logo Duplicate ${index + 1}`} />
  31 |             </div>
  32 |           ))}
  33 |         </div>
  34 |       </div>
  35 |     </div>
  36 |   );
  37 | }
  38 | 
  39 | export default LogoScroll;
  40 | 
  41 | /* Ensure the accompanying CSS file is added as follows */
  42 | 
```


---

## 📄 src\components\Navbar.tsx
**hash:** `632e9fb2`

### Chunk 1/1

```tsx
   1 | import { useState, useEffect } from "react";
   2 | import { AnimatePresence, motion } from "framer-motion";
   3 | import { FiMenu, FiX } from "react-icons/fi";
   4 | import Image from "next/image";
   5 | import { usePathname, useRouter } from "next/navigation";
   6 | 
   7 | const Nav = () => {
   8 |   const [isOpen, setIsOpen] = useState(false);
   9 |   const [scrolled, setScrolled] = useState(false);
  10 |   const pathname = usePathname();
  11 |   const router = useRouter();
  12 | 
  13 |   useEffect(() => {
  14 |     const handleScroll = () => setScrolled(window.scrollY > 50);
  15 |     window.addEventListener("scroll", handleScroll);
  16 |     return () => window.removeEventListener("scroll", handleScroll);
  17 |   }, []);
  18 | 
  19 |   const menuItems = [
  20 |     { name: "About", type: "section", sectionId: "about" },
  21 |     { name: "Technology", type: "section", sectionId: "technology" },
  22 |     { name: "Solution", type: "page", path: "/solution" },
  23 |     { name: "Team", type: "page", path: "/team" },
  24 |     { name: "Careers", type: "page", path: "/careers" },
  25 |   ];
  26 | 
  27 |   const handleMenuClick = async (item: (typeof menuItems)[0]) => {
  28 |     if (item.type === "section") {
  29 |       if (pathname !== "/") {
  30 |         await router.push("/");
  31 |         setTimeout(() => {
  32 |           if (item.sectionId) {
  33 |             if (item.sectionId) document.getElementById(item.sectionId)?.scrollIntoView({ behavior: "smooth" });
  34 |           }
  35 |         }, 100);
  36 |       } else {
  37 |         if (item.sectionId) document.getElementById(item.sectionId)?.scrollIntoView({ behavior: "smooth" });
  38 |       }
  39 |     } else if (item.path) {
  40 |       router.push(item.path);
  41 |     }
  42 |     setTimeout(() => setIsOpen(false), 300);
  43 |   };
  44 | 
  45 |   return (
  46 |     <nav className={`fixed left-0 right-0 top-[44px] z-[100] transition-colors duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
  47 |       <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
  48 |         <motion.div
  49 |           className="relative cursor-pointer flex items-center gap-2"
  50 |           onClick={() => router.push("/")}
  51 |         >
  52 |           <Image
  53 |             src="/logo.png"
  54 |             alt="Dashagriv Aerospace"
  55 |             width={120}
  56 |             height={30}
  57 |             className="filter grayscale brightness-200"
  58 |             priority
  59 |           />
  60 |         </motion.div>
  61 | 
  62 |         <div className="hidden md:flex items-center gap-8">
  63 |           {menuItems.map((item, index) => (
  64 |             <button
  65 |               key={index}
  66 |               onClick={() => handleMenuClick(item)}
  67 |               className={`text-xs tracking-[0.2em] uppercase font-display transition-colors ${
  68 |                 item.type === "page" && pathname === item.path
  69 |                   ? "text-white"
  70 |                   : "text-zinc-400 hover:text-white"
  71 |               }`}
  72 |             >
  73 |               {item.name}
  74 |             </button>
  75 |           ))}
  76 |         </div>
  77 | 
  78 |         <div className="hidden md:block">
  79 |           <button
  80 |             onClick={() => (window.location.href = "tel:+916382497619")}
  81 |             className="ghost-btn"
  82 |           >
  83 |             Contact
  84 |           </button>
  85 |         </div>
  86 | 
  87 |         <div className="md:hidden">
  88 |           <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
  89 |             {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
  90 |           </button>
  91 |         </div>
  92 |       </div>
  93 | 
  94 |       <AnimatePresence>
  95 |         {isOpen && (
  96 |           <motion.div
  97 |             initial={{ opacity: 0, height: 0 }}
  98 |             animate={{ opacity: 1, height: "auto" }}
  99 |             exit={{ opacity: 0, height: 0 }}
 100 |             className="md:hidden bg-black border-b border-white/10"
 101 |           >
 102 |             <div className="px-6 py-6 flex flex-col gap-6">
 103 |               {menuItems.map((item, index) => (
 104 |                 <button
 105 |                   key={index}
 106 |                   onClick={() => handleMenuClick(item)}
 107 |                   className={`text-left text-sm uppercase tracking-widest font-display ${
 108 |                     item.type === "page" && pathname === item.path
 109 |                       ? "text-white"
 110 |                       : "text-zinc-400 hover:text-white"
 111 |                   }`}
 112 |                 >
 113 |                   {item.name}
 114 |                 </button>
 115 |               ))}
 116 |               <button
 117 |                 onClick={() => (window.location.href = "tel:+916382497619")}
 118 |                 className="ghost-btn w-max mt-4"
 119 |               >
 120 |                 Contact
 121 |               </button>
 122 |             </div>
 123 |           </motion.div>
 124 |         )}
 125 |       </AnimatePresence>
 126 |     </nav>
 127 |   );
 128 | };
 129 | 
 130 | export default Nav;
 131 | 
```


---

## 📄 src\components\NewsSection.tsx
**hash:** `61679e8a`

### Chunk 1/1

```tsx
   1 | 'use client';
   2 | 
   3 | import { motion } from 'framer-motion';
   4 | import { ArrowUpRight } from 'lucide-react';
   5 | 
   6 | // ─── Press data ──────────────────────────────────────────
   7 | // Update href values as new coverage appears
   8 | 
   9 | const pressItems = [
  10 |   {
  11 |     publication: 'StartupPedia',
  12 |     date: 'May 2, 2026',
  13 |     title:
  14 |       'Dashagriv Aerospace conducts high-altitude airship prototype trial in mid-sea off Nagapattinam coast',
  15 |     href: 'https://startuppedia.in/startup-stories/dashagriv-aerospace-conducts-high-altitude-airship-prototype-trial-mid-sea-11789471',
  16 |     tag: 'Breakthrough',
  17 |   },
  18 |   {
  19 |     publication: 'Indian Defence News',
  20 |     date: 'May 2, 2026',
  21 |     title:
  22 |       'Dashagriv Aerospace successfully trials high-altitude airship in mid-sea conditions off Nagapattinam',
  23 |     href: 'https://www.indiandefensenews.in/2026/05/dashagriv-aerospace-successfully-trials.html',
  24 |     tag: 'Defence',
  25 |   },
  26 |   {
  27 |     publication: 'IDRW.org',
  28 |     date: 'March 26, 2026',
  29 |     title:
  30 |       "Dashagriv Aerospace unveils India's HAPS pseudo-satellite platform, targets 20 KM stratospheric operations",
  31 |     href: 'https://idrw.org/dashagriv-aerospace-unveils-indias-haps-pseudo-satellite-platform-targets-20-km-stratospheric-operations/',
  32 |     tag: 'Aerospace',
  33 |   },
  34 |   {
  35 |     publication: 'StartupPedia',
  36 |     date: 'March 28, 2026',
  37 |     title:
  38 |       "This startup is building India's 1st High-Altitude Pseudo Satellite (HAPS) platform for surveillance in remote areas & disaster response",
  39 |     href: 'https://startuppedia.in/trending/this-startup-is-building-indias-1st-high-altitude-pseudo-satellite-haps-platform-for-surveillance-in-remote-areas-disaster-response-11429479',
  40 |     tag: 'Feature',
  41 |   },
  42 | ];
  43 | 
  44 | // ─── Component ───────────────────────────────────────────
  45 | 
  46 | export default function NewsSection() {
  47 |   return (
  48 |     <section className="bg-black border-t border-white/10 py-32">
  49 |       <div className="container mx-auto px-6 max-w-7xl">
  50 | 
  51 |         {/* Header row */}
  52 |         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
  53 |           <div>
  54 |             <p className="eyebrow mb-4">Press</p>
  55 |             <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white">
  56 |               In the News
  57 |             </h2>
  58 |           </div>
  59 |           <p className="text-sm text-zinc-600 max-w-xs leading-relaxed font-body">
  60 |             Dashagriv Aerospace covered by global aerospace and defence media.
  61 |           </p>
  62 |         </div>
  63 | 
  64 |         {/* Press list */}
  65 |         <div className="border-t border-white/10">
  66 |           {pressItems.map((item, i) => (
  67 |             <motion.a
  68 |               key={i}
  69 |               href={item.href}
  70 |               target="_blank"
  71 |               rel="noopener noreferrer"
  72 |               initial={{ opacity: 0, y: 10 }}
  73 |               whileInView={{ opacity: 1, y: 0 }}
  74 |               viewport={{ once: true }}
  75 |               transition={{ duration: 0.4, delay: i * 0.07 }}
  76 |               className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/10 gap-4 hover:bg-zinc-950 px-3 -mx-3 transition-colors duration-200 rounded-none"
  77 |             >
  78 |               {/* Left */}
  79 |               <div className="flex-1 min-w-0">
  80 |                 <div className="flex items-center gap-3 mb-2 flex-wrap">
  81 |                   <span className="eyebrow">{item.publication}</span>
  82 |                   <span
  83 |                     style={{
  84 |                       fontSize: '9px',
  85 |                       letterSpacing: '0.15em',
  86 |                       textTransform: 'uppercase',
  87 |                       fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
  88 |                       color: 'rgba(255,255,255,0.25)',
  89 |                     }}
  90 |                   >
  91 |                     {item.date}
  92 |                   </span>
  93 |                   <span
  94 |                     style={{
  95 |                       fontSize: '8px',
  96 |                       letterSpacing: '0.15em',
  97 |                       textTransform: 'uppercase',
  98 |                       fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
  99 |                       border: '1px solid rgba(255,255,255,0.12)',
 100 |                       padding: '2px 7px',
 101 |                       color: 'rgba(255,255,255,0.35)',
 102 |                     }}
 103 |                   >
 104 |                     {item.tag}
 105 |                   </span>
 106 |                 </div>
 107 |                 <h3 className="text-sm md:text-base font-body text-zinc-400 group-hover:text-white transition-colors duration-200 leading-snug max-w-3xl">
 108 |                   {item.title}
 109 |                 </h3>
 110 |               </div>
 111 | 
 112 |               {/* Right arrow */}
 113 |               <ArrowUpRight className="w-5 h-5 text-zinc-700 group-hover:text-white transition-all duration-200 flex-shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
 114 |             </motion.a>
 115 |           ))}
 116 |         </div>
 117 |       </div>
 118 |     </section>
 119 |   );
 120 | }
 121 | 
```


---

## 📄 src\components\StatsSection.tsx
**hash:** `7f6a00ad`

### Chunk 1/1

```tsx
   1 | 'use client';
   2 | 
   3 | import { motion } from 'framer-motion';
   4 | 
   5 | // ─── Stats data ──────────────────────────────────────────
   6 | 
   7 | const stats = [
   8 |   {
   9 |     value: '20',
  10 |     unit: 'KM',
  11 |     label: 'Stratospheric Altitude',
  12 |     note: 'Operating ceiling in near-space — bridging satellites and drones',
  13 |   },
  14 |   {
  15 |     value: '1st',
  16 |     unit: '',
  17 |     label: 'In India',
  18 |     note: 'Dedicated HAPS spacetech startup — built from a college project',
  19 |   },
  20 |   {
  21 |     value: '6+',
  22 |     unit: '',
  23 |     label: 'Partners & Backers',
  24 |     note: 'MeitY, StartupTN, EDII Tamil Nadu, InnoSphere, Indian Coast Guard & Navy',
  25 |   },
  26 |   {
  27 |     value: '2024',
  28 |     unit: '→',
  29 |     label: 'Now',
  30 |     note: 'Prototype to sea-trial validation in under two years',
  31 |   },
  32 | ];
  33 | 
  34 | // ─── Component ───────────────────────────────────────────
  35 | 
  36 | export default function StatsSection() {
  37 |   return (
  38 |     <section className="bg-zinc-950 border-t border-white/10">
  39 |       <div className="container mx-auto px-6 max-w-7xl">
  40 |         <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 border-b border-white/10">
  41 |           {stats.map((stat, i) => (
  42 |             <motion.div
  43 |               key={i}
  44 |               initial={{ opacity: 0, y: 16 }}
  45 |               whileInView={{ opacity: 1, y: 0 }}
  46 |               viewport={{ once: true }}
  47 |               transition={{ duration: 0.5, delay: i * 0.08 }}
  48 |               className="p-8 md:p-12 group hover:bg-black transition-colors duration-300"
  49 |             >
  50 |               {/* Number */}
  51 |               <div className="mb-3 flex items-baseline gap-1.5">
  52 |                 <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-white leading-none">
  53 |                   {stat.value}
  54 |                 </span>
  55 |                 {stat.unit && (
  56 |                   <span className="text-base md:text-lg font-display uppercase text-zinc-600 leading-none">
  57 |                     {stat.unit}
  58 |                   </span>
  59 |                 )}
  60 |               </div>
  61 | 
  62 |               {/* Label */}
  63 |               <p className="text-xs font-display uppercase tracking-widest text-zinc-400 mb-2">
  64 |                 {stat.label}
  65 |               </p>
  66 | 
  67 |               {/* Supporting note */}
  68 |               <p className="text-xs text-zinc-600 leading-relaxed max-w-[18ch] group-hover:text-zinc-500 transition-colors duration-300">
  69 |                 {stat.note}
  70 |               </p>
  71 |             </motion.div>
  72 |           ))}
  73 |         </div>
  74 |       </div>
  75 |     </section>
  76 |   );
  77 | }
  78 | 
```


---

## 📄 src\components\Technology.tsx
**hash:** `419db8a8`

### Chunk 1/1

```tsx
   1 | import React from 'react';
   2 | import { motion } from 'framer-motion';
   3 | 
   4 | const Technology = () => {
   5 |   const technologies = [
   6 |     {
   7 |       title: "AI-Powered Intelligence",
   8 |       description: "Advanced autonomous operations with real-time decision making capabilities and predictive analytics.",
   9 |       id: "01"
  10 |     },
  11 |     {
  12 |       title: "Extended Endurance",
  13 |       description: "Revolutionary power systems enabling continuous stratospheric operation for weeks to months.",
  14 |       id: "02"
  15 |     },
  16 |     {
  17 |       title: "Versatile Applications",
  18 |       description: "Multi-purpose platform supporting ISR, telecommunications, and environmental monitoring missions.",
  19 |       id: "03"
  20 |     },
  21 |     {
  22 |       title: "Data Processing",
  23 |       description: "Real-time edge computing and data analysis for immediate insights and decision-making.",
  24 |       id: "04"
  25 |     }
  26 |   ];
  27 | 
  28 |   return (
  29 |     <section id="technology" className="py-32 relative bg-black border-t border-white/10">
  30 |       <div className="absolute inset-0 z-0">
  31 |         <img 
  32 |           src="/technology.png" 
  33 |           alt="Abstract Technology" 
  34 |           className="w-full h-full object-cover object-center opacity-30 grayscale"
  35 |         />
  36 |         <div className="absolute inset-0 bg-black/80" />
  37 |       </div>
  38 |       
  39 |       <div className="container mx-auto px-6 relative z-10">
  40 |         <div className="mb-20 text-center">
  41 |           <p className="eyebrow mb-4">Capabilities</p>
  42 |           <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight">
  43 |             Why Us
  44 |           </h2>
  45 |         </div>
  46 | 
  47 |         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
  48 |           {technologies.map((tech, index) => (
  49 |             <motion.div
  50 |               key={tech.title}
  51 |               initial={{ opacity: 0 }}
  52 |               whileInView={{ opacity: 1 }}
  53 |               transition={{ duration: 0.5, delay: index * 0.1 }}
  54 |               className="bg-black p-8 group hover:bg-zinc-900 transition-colors"
  55 |             >
  56 |               <div className="text-zinc-600 font-display text-xl mb-8 group-hover:text-white transition-colors">{tech.id}</div>
  57 |               <h3 className="text-xl font-display uppercase tracking-wide mb-4 text-white">
  58 |                 {tech.title}
  59 |               </h3>
  60 |               <p className="text-zinc-400 text-sm leading-relaxed">
  61 |                 {tech.description}
  62 |               </p>
  63 |             </motion.div>
  64 |           ))}
  65 |         </div>
  66 |       </div>
  67 |     </section>
  68 |   );
  69 | };
  70 | 
  71 | export default Technology;
  72 | 
```


---

## 📄 src\components\TimeLine.tsx
**hash:** `566c3a5a`

### Chunk 1/2

```tsx
   1 | import { motion } from "framer-motion";
   2 | import { X } from "lucide-react";
   3 | import Image from "next/image";
   4 | import { useState, useEffect, useRef } from "react";
   5 | 
   6 | const Timeline = () => {
   7 |   const [selectedImage, setSelectedImage] = useState<string | null>(null);
   8 |   const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
   9 | 
  10 |   const milestones = [
  11 |     {
  12 |       title: "Prototype Developed and Tested",
  13 |       date: "August 2024",
  14 |       category: "Demonstration",
  15 |       image: "/demohaps.png",
  16 |       location: "Testing Facility",
  17 |     },
  18 |     {
  19 |       title: "Inauguration",
  20 |       date: "September 2024",
  21 |       category: "Achievement",
  22 |       image: "/incubation.jpg",
  23 |       location: "KCG College",
  24 |     },
  25 |     {
  26 |       title: "Low Altitude Trials",
  27 |       date: "January 2025",
  28 |       category: "Achievement",
  29 |       image: "/low-altitude.jpg",
  30 |       location: "Testing Field",
  31 |     },
  32 |     {
  33 |       title: "Pre-flight Medium Altitude Trials",
  34 |       date: "May 2025",
  35 |       category: "Achievement",
  36 |       image: "/mid-flight.jpg",
  37 |       location: "Testing Field",
  38 |     },
  39 |     {
  40 |       title: "Mid-Sea Stratospheric Airship Trial",
  41 |       date: "April 2026",
  42 |       category: "Breakthrough",
  43 |       image: "/trials.png", // ← Add this image from your media
  44 |       location:
  45 |         "Off Nagapattinam Coast — with Indian Coast Guard & Indian Navy",
  46 |     },
  47 |     {
  48 |       title: "Stratospheric Operations",
  49 |       date: "2026–2027",
  50 |       category: "Upcoming",
  51 |       location: "Target: 18–20 km altitude",
  52 |       upcoming: true,
  53 |     },
  54 |   ];
  55 | 
  56 |   return (
  57 |     <section
  58 |       id="company-journey"
  59 |       className="relative bg-black border-t border-white/10 mx-auto w-full px-6 py-32 text-white"
  60 |     >
  61 |       <div className="max-w-5xl mx-auto">
  62 |         <motion.div
  63 |           initial={{ y: 20, opacity: 0 }}
  64 |           whileInView={{ y: 0, opacity: 1 }}
  65 |           transition={{ duration: 0.5 }}
  66 |         >
  67 |           <p className="eyebrow mb-4">Traction</p>
  68 |           <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight mb-16">
  69 |             Company Journey
  70 |           </h2>
  71 |         </motion.div>
  72 | 
  73 |         <div className="space-y-0">
  74 |           {milestones.map((milestone, index) => (
  75 |             <TimelineItem
  76 |               key={index}
  77 |               index={index}
  78 |               isActive={index === activeItemIndex}
  79 |               onVisible={(idx) => setActiveItemIndex(idx)}
  80 |               {...milestone}
  81 |               onImageClick={(image) => setSelectedImage(image)}
  82 |             />
  83 |           ))}
  84 |         </div>
  85 |       </div>
  86 | 
  87 |       {selectedImage && (
  88 |         <motion.div
  89 |           initial={{ opacity: 0 }}
  90 |           animate={{ opacity: 1 }}
  91 |           exit={{ opacity: 0 }}
  92 |           className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4"
  93 |           onClick={() => setSelectedImage(null)}
  94 |         >
  95 |           <div className="relative max-w-6xl w-full">
  96 |             <button
  97 |               onClick={() => setSelectedImage(null)}
  98 |               className="absolute -top-12 right-0 text-white opacity-50 hover:opacity-100 transition-opacity"
  99 |             >
 100 |               <X className="w-8 h-8" />
 101 |             </button>
 102 |             <div
 103 |               className="relative aspect-video w-full overflow-hidden"
 104 |               onClick={(e) => e.stopPropagation()}
 105 |             >
 106 |               <Image
 107 |                 src={selectedImage}
 108 |                 alt="Enlarged view"
 109 |                 layout="fill"
 110 |                 objectFit="contain"
 111 |               />
 112 |             </div>
 113 |           </div>
 114 |         </motion.div>
 115 |       )}
 116 |     </section>
 117 |   );
 118 | };
 119 | 
 120 | interface TimelineItemProps {
 121 |   index: number;
 122 |   isActive: boolean;
 123 |   onVisible: (index: number) => void;
 124 |   title: string;
 125 |   date: string;
 126 |   category: string;
 127 |   location: string;
 128 |   image?: string;
 129 |   upcoming?: boolean;
 130 |   onImageClick: (image: string) => void;
 131 | }
 132 | 
 133 | const TimelineItem: React.FC<TimelineItemProps> = ({
 134 |   index,
 135 |   isActive,
 136 |   onVisible,
 137 |   title,
 138 |   date,
 139 |   category,
 140 |   location,
 141 |   image,
 142 |   upcoming,
 143 |   onImageClick,
 144 | }) => {
 145 |   const ref = useRef<HTMLDivElement>(null);
 146 | 
 147 |   useEffect(() => {
 148 |     if (upcoming || !image) return;
 149 | 
 150 |     const observer = new IntersectionObserver(
 151 |       ([entry]) => {
 152 |         if (entry.isIntersecting) {
 153 |           onVisible(index);
 154 |         }
 155 |       },
 156 |       {
 157 |         rootMargin: "-35% 0px -35% 0px",
 158 |         threshold: 0,
 159 |       },
 160 |     );
 161 | 
 162 |     if (ref.current) {
 163 |       observer.observe(ref.current);
 164 |     }
 165 | 
 166 |     return () => {
 167 |       observer.disconnect();
 168 |     };
 169 |   }, [index, upcoming, image, onVisible]);
 170 | 
 171 |   const imageVariants = {
 172 |     grayscale: { filter: "grayscale(100%)", opacity: 0.7 },
 173 |     color: { filter: "grayscale(0%)", opacity: 1 },
 174 |   };
 175 | 
 176 |   return (
 177 |     <motion.div
 178 |       ref={ref}
 179 |       initial={{ opacity: 0, y: 20 }}
 180 |       whileInView={{ opacity: 1, y: 0 }}
 181 |       viewport={{ once: true, amount: 0.2 }}
 182 |       transition={{ duration: 0.5 }}
 183 |       className={`border-t border-white/10 py-8 ${upcoming ? "opacity-50" : ""}`}
 184 |     >
 185 |       <div className="grid md:grid-cols-4 gap-8 items-start">
 186 |         <div className="md:col-span-1">
 187 |           <p className="text-sm font-display uppercase tracking-widest text-zinc-500 mb-2">
 188 |             {date}
 189 |           </p>
 190 |           <p className="eyebrow">
 191 |             {category} / {location}
 192 |           </p>
 193 |         </div>
 194 | 
 195 |         <div className="md:col-span-3">
 196 |           <h3 className="text-2xl font-display uppercase tracking-wide mb-6">
 197 |             {title}
 198 |           </h3>
 199 | 
 200 |           {!upcoming && image && (
```

### Chunk 2/2

```tsx
 201 |             <div
 202 |               className="relative aspect-video w-full max-w-2xl cursor-pointer overflow-hidden bg-zinc-900"
 203 |               onClick={() => onImageClick(image)}
 204 |             >
 205 |               <motion.div
 206 |                 variants={imageVariants}
 207 |                 animate={isActive ? "color" : "grayscale"}
 208 |                 whileHover={{ scale: 1.03 }}
 209 |                 transition={{ duration: 0.5, ease: "easeInOut" }}
 210 |                 className="relative w-full h-full"
 211 |               >
 212 |                 <Image
 213 |                   src={image}
 214 |                   alt={title}
 215 |                   layout="fill"
 216 |                   objectFit="cover"
 217 |                 />
 218 |               </motion.div>
 219 |             </div>
 220 |           )}
 221 |         </div>
 222 |       </div>
 223 |     </motion.div>
 224 |   );
 225 | };
 226 | 
 227 | export default Timeline;
 228 | 
```


---

## 📄 src\components\ui\border-trail.tsx
**hash:** `298de79f`

### Chunk 1/1

```tsx
   1 | 'use client';
   2 | import { cn } from '@/lib/utils';
   3 | import { motion, Transition } from 'motion/react';
   4 | 
   5 | type BorderTrailProps = {
   6 |   className?: string;
   7 |   size?: number;
   8 |   transition?: Transition;
   9 |   delay?: number;
  10 |   onAnimationComplete?: () => void;
  11 |   style?: React.CSSProperties;
  12 | };
  13 | 
  14 | export function BorderTrail({
  15 |   className,
  16 |   size = 60,
  17 |   transition,
  18 |   delay,
  19 |   onAnimationComplete,
  20 |   style,
  21 | }: BorderTrailProps) {
  22 |   const BASE_TRANSITION = {
  23 |     repeat: Infinity,
  24 |     duration: 5,
  25 |     ease: 'linear',
  26 |   };
  27 | 
  28 |   return (
  29 |     <div className='pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]'>
  30 |       <motion.div
  31 |         className={cn('absolute aspect-square bg-zinc-500', className)}
  32 |         style={{
  33 |           width: size,
  34 |           offsetPath: `rect(0 auto auto 0 round ${size}px)`,
  35 |           ...style,
  36 |         }}
  37 |         animate={{
  38 |           offsetDistance: ['0%', '100%'],
  39 |         }}
  40 |         transition={{
  41 |           ...(transition ?? BASE_TRANSITION),
  42 |           delay: delay,
  43 |         }}
  44 |         onAnimationComplete={onAnimationComplete}
  45 |       />
  46 |     </div>
  47 |   );
  48 | }
  49 | 
```


---

## 📄 src\components\ui\button.tsx
**hash:** `3affd1c3`

### Chunk 1/1

```tsx
   1 | import * as React from "react"
   2 | import { Slot } from "@radix-ui/react-slot"
   3 | import { cva, type VariantProps } from "class-variance-authority"
   4 | 
   5 | import { cn } from "@/lib/utils"
   6 | 
   7 | const buttonVariants = cva(
   8 |   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
   9 |   {
  10 |     variants: {
  11 |       variant: {
  12 |         default:
  13 |           "bg-primary text-primary-foreground shadow hover:bg-primary/90",
  14 |         destructive:
  15 |           "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
  16 |         outline:
  17 |           "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
  18 |         secondary:
  19 |           "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
  20 |         ghost: "hover:bg-accent hover:text-accent-foreground",
  21 |         link: "text-primary underline-offset-4 hover:underline",
  22 |       },
  23 |       size: {
  24 |         default: "h-9 px-4 py-2",
  25 |         sm: "h-8 rounded-md px-3 text-xs",
  26 |         lg: "h-10 rounded-md px-8",
  27 |         icon: "h-9 w-9",
  28 |       },
  29 |     },
  30 |     defaultVariants: {
  31 |       variant: "default",
  32 |       size: "default",
  33 |     },
  34 |   }
  35 | )
  36 | 
  37 | export interface ButtonProps
  38 |   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  39 |     VariantProps<typeof buttonVariants> {
  40 |   asChild?: boolean
  41 | }
  42 | 
  43 | const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  44 |   ({ className, variant, size, asChild = false, ...props }, ref) => {
  45 |     const Comp = asChild ? Slot : "button"
  46 |     return (
  47 |       <Comp
  48 |         className={cn(buttonVariants({ variant, size, className }))}
  49 |         ref={ref}
  50 |         {...props}
  51 |       />
  52 |     )
  53 |   }
  54 | )
  55 | Button.displayName = "Button"
  56 | 
  57 | export { Button, buttonVariants }
  58 | 
```


---

## 📄 src\components\ui\card.tsx
**hash:** `63d783e2`

### Chunk 1/1

```tsx
   1 | import * as React from "react"
   2 | 
   3 | import { cn } from "@/lib/utils"
   4 | 
   5 | const Card = React.forwardRef<
   6 |   HTMLDivElement,
   7 |   React.HTMLAttributes<HTMLDivElement>
   8 | >(({ className, ...props }, ref) => (
   9 |   <div
  10 |     ref={ref}
  11 |     className={cn(
  12 |       "rounded-xl border bg-card text-card-foreground shadow",
  13 |       className
  14 |     )}
  15 |     {...props}
  16 |   />
  17 | ))
  18 | Card.displayName = "Card"
  19 | 
  20 | const CardHeader = React.forwardRef<
  21 |   HTMLDivElement,
  22 |   React.HTMLAttributes<HTMLDivElement>
  23 | >(({ className, ...props }, ref) => (
  24 |   <div
  25 |     ref={ref}
  26 |     className={cn("flex flex-col space-y-1.5 p-6", className)}
  27 |     {...props}
  28 |   />
  29 | ))
  30 | CardHeader.displayName = "CardHeader"
  31 | 
  32 | const CardTitle = React.forwardRef<
  33 |   HTMLDivElement,
  34 |   React.HTMLAttributes<HTMLDivElement>
  35 | >(({ className, ...props }, ref) => (
  36 |   <div
  37 |     ref={ref}
  38 |     className={cn("font-semibold leading-none tracking-tight", className)}
  39 |     {...props}
  40 |   />
  41 | ))
  42 | CardTitle.displayName = "CardTitle"
  43 | 
  44 | const CardDescription = React.forwardRef<
  45 |   HTMLDivElement,
  46 |   React.HTMLAttributes<HTMLDivElement>
  47 | >(({ className, ...props }, ref) => (
  48 |   <div
  49 |     ref={ref}
  50 |     className={cn("text-sm text-muted-foreground", className)}
  51 |     {...props}
  52 |   />
  53 | ))
  54 | CardDescription.displayName = "CardDescription"
  55 | 
  56 | const CardContent = React.forwardRef<
  57 |   HTMLDivElement,
  58 |   React.HTMLAttributes<HTMLDivElement>
  59 | >(({ className, ...props }, ref) => (
  60 |   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  61 | ))
  62 | CardContent.displayName = "CardContent"
  63 | 
  64 | const CardFooter = React.forwardRef<
  65 |   HTMLDivElement,
  66 |   React.HTMLAttributes<HTMLDivElement>
  67 | >(({ className, ...props }, ref) => (
  68 |   <div
  69 |     ref={ref}
  70 |     className={cn("flex items-center p-6 pt-0", className)}
  71 |     {...props}
  72 |   />
  73 | ))
  74 | CardFooter.displayName = "CardFooter"
  75 | 
  76 | export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
  77 | 
```


---

## 📄 src\components\ui\carousel.tsx
**hash:** `8ca8651`

### Chunk 1/2

```tsx
   1 | "use client"
   2 | 
   3 | import * as React from "react"
   4 | import useEmblaCarousel, {
   5 |   type UseEmblaCarouselType,
   6 | } from "embla-carousel-react"
   7 | import { ArrowLeft, ArrowRight } from "lucide-react"
   8 | 
   9 | import { cn } from "@/lib/utils"
  10 | import { Button } from "@/components/ui/button"
  11 | 
  12 | type CarouselApi = UseEmblaCarouselType[1]
  13 | type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
  14 | type CarouselOptions = UseCarouselParameters[0]
  15 | type CarouselPlugin = UseCarouselParameters[1]
  16 | 
  17 | type CarouselProps = {
  18 |   opts?: CarouselOptions
  19 |   plugins?: CarouselPlugin
  20 |   orientation?: "horizontal" | "vertical"
  21 |   setApi?: (api: CarouselApi) => void
  22 | }
  23 | 
  24 | type CarouselContextProps = {
  25 |   carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  26 |   api: ReturnType<typeof useEmblaCarousel>[1]
  27 |   scrollPrev: () => void
  28 |   scrollNext: () => void
  29 |   canScrollPrev: boolean
  30 |   canScrollNext: boolean
  31 | } & CarouselProps
  32 | 
  33 | const CarouselContext = React.createContext<CarouselContextProps | null>(null)
  34 | 
  35 | function useCarousel() {
  36 |   const context = React.useContext(CarouselContext)
  37 | 
  38 |   if (!context) {
  39 |     throw new Error("useCarousel must be used within a <Carousel />")
  40 |   }
  41 | 
  42 |   return context
  43 | }
  44 | 
  45 | function Carousel({
  46 |   orientation = "horizontal",
  47 |   opts,
  48 |   setApi,
  49 |   plugins,
  50 |   className,
  51 |   children,
  52 |   ...props
  53 | }: React.ComponentProps<"div"> & CarouselProps) {
  54 |   const [carouselRef, api] = useEmblaCarousel(
  55 |     {
  56 |       ...opts,
  57 |       axis: orientation === "horizontal" ? "x" : "y",
  58 |     },
  59 |     plugins
  60 |   )
  61 |   const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  62 |   const [canScrollNext, setCanScrollNext] = React.useState(false)
  63 | 
  64 |   const onSelect = React.useCallback((api: CarouselApi) => {
  65 |     if (!api) return
  66 |     setCanScrollPrev(api.canScrollPrev())
  67 |     setCanScrollNext(api.canScrollNext())
  68 |   }, [])
  69 | 
  70 |   const scrollPrev = React.useCallback(() => {
  71 |     api?.scrollPrev()
  72 |   }, [api])
  73 | 
  74 |   const scrollNext = React.useCallback(() => {
  75 |     api?.scrollNext()
  76 |   }, [api])
  77 | 
  78 |   const handleKeyDown = React.useCallback(
  79 |     (event: React.KeyboardEvent<HTMLDivElement>) => {
  80 |       if (event.key === "ArrowLeft") {
  81 |         event.preventDefault()
  82 |         scrollPrev()
  83 |       } else if (event.key === "ArrowRight") {
  84 |         event.preventDefault()
  85 |         scrollNext()
  86 |       }
  87 |     },
  88 |     [scrollPrev, scrollNext]
  89 |   )
  90 | 
  91 |   React.useEffect(() => {
  92 |     if (!api || !setApi) return
  93 |     setApi(api)
  94 |   }, [api, setApi])
  95 | 
  96 |   React.useEffect(() => {
  97 |     if (!api) return
  98 |     onSelect(api)
  99 |     api.on("reInit", onSelect)
 100 |     api.on("select", onSelect)
 101 | 
 102 |     return () => {
 103 |       api?.off("select", onSelect)
 104 |     }
 105 |   }, [api, onSelect])
 106 | 
 107 |   return (
 108 |     <CarouselContext.Provider
 109 |       value={{
 110 |         carouselRef,
 111 |         api: api,
 112 |         opts,
 113 |         orientation:
 114 |           orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
 115 |         scrollPrev,
 116 |         scrollNext,
 117 |         canScrollPrev,
 118 |         canScrollNext,
 119 |       }}
 120 |     >
 121 |       <div
 122 |         onKeyDownCapture={handleKeyDown}
 123 |         className={cn("relative", className)}
 124 |         role="region"
 125 |         aria-roledescription="carousel"
 126 |         data-slot="carousel"
 127 |         {...props}
 128 |       >
 129 |         {children}
 130 |       </div>
 131 |     </CarouselContext.Provider>
 132 |   )
 133 | }
 134 | 
 135 | function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
 136 |   const { carouselRef, orientation } = useCarousel()
 137 | 
 138 |   return (
 139 |     <div
 140 |       ref={carouselRef}
 141 |       className="overflow-hidden"
 142 |       data-slot="carousel-content"
 143 |     >
 144 |       <div
 145 |         className={cn(
 146 |           "flex",
 147 |           orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
 148 |           className
 149 |         )}
 150 |         {...props}
 151 |       />
 152 |     </div>
 153 |   )
 154 | }
 155 | 
 156 | function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
 157 |   const { orientation } = useCarousel()
 158 | 
 159 |   return (
 160 |     <div
 161 |       role="group"
 162 |       aria-roledescription="slide"
 163 |       data-slot="carousel-item"
 164 |       className={cn(
 165 |         "min-w-0 shrink-0 grow-0 basis-full",
 166 |         orientation === "horizontal" ? "pl-4" : "pt-4",
 167 |         className
 168 |       )}
 169 |       {...props}
 170 |     />
 171 |   )
 172 | }
 173 | 
 174 | function CarouselPrevious({
 175 |   className,
 176 |   variant = "outline",
 177 |   size = "icon",
 178 |   ...props
 179 | }: React.ComponentProps<typeof Button>) {
 180 |   const { orientation, scrollPrev, canScrollPrev } = useCarousel()
 181 | 
 182 |   return (
 183 |     <Button
 184 |       data-slot="carousel-previous"
 185 |       variant={variant}
 186 |       size={size}
 187 |       className={cn(
 188 |         "absolute size-8 rounded-full",
 189 |         orientation === "horizontal"
 190 |           ? "top-1/2 -left-12 -translate-y-1/2"
 191 |           : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
 192 |         className
 193 |       )}
 194 |       disabled={!canScrollPrev}
 195 |       onClick={scrollPrev}
 196 |       {...props}
 197 |     >
 198 |       <ArrowLeft />
 199 |       <span className="sr-only">Previous slide</span>
 200 |     </Button>
```

### Chunk 2/2

```tsx
 201 |   )
 202 | }
 203 | 
 204 | function CarouselNext({
 205 |   className,
 206 |   variant = "outline",
 207 |   size = "icon",
 208 |   ...props
 209 | }: React.ComponentProps<typeof Button>) {
 210 |   const { orientation, scrollNext, canScrollNext } = useCarousel()
 211 | 
 212 |   return (
 213 |     <Button
 214 |       data-slot="carousel-next"
 215 |       variant={variant}
 216 |       size={size}
 217 |       className={cn(
 218 |         "absolute size-8 rounded-full",
 219 |         orientation === "horizontal"
 220 |           ? "top-1/2 -right-12 -translate-y-1/2"
 221 |           : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
 222 |         className
 223 |       )}
 224 |       disabled={!canScrollNext}
 225 |       onClick={scrollNext}
 226 |       {...props}
 227 |     >
 228 |       <ArrowRight />
 229 |       <span className="sr-only">Next slide</span>
 230 |     </Button>
 231 |   )
 232 | }
 233 | 
 234 | export {
 235 |   type CarouselApi,
 236 |   Carousel,
 237 |   CarouselContent,
 238 |   CarouselItem,
 239 |   CarouselPrevious,
 240 |   CarouselNext,
 241 | }
 242 | 
 243 | 
```


---

## 📄 src\components\ui\cursor.tsx
**hash:** `125e2ecc`

### Chunk 1/1

```tsx
   1 | 'use client';
   2 | import React, { useEffect, useState, useRef } from 'react';
   3 | import {
   4 |   motion,
   5 |   SpringOptions,
   6 |   useMotionValue,
   7 |   useSpring,
   8 |   AnimatePresence,
   9 |   Transition,
  10 |   Variant,
  11 | } from 'motion/react';
  12 | import { cn } from '@/lib/utils';
  13 | 
  14 | type CursorProps = {
  15 |   children: React.ReactNode;
  16 |   className?: string;
  17 |   springConfig?: SpringOptions;
  18 |   attachToParent?: boolean;
  19 |   transition?: Transition;
  20 |   variants?: {
  21 |     initial: Variant;
  22 |     animate: Variant;
  23 |     exit: Variant;
  24 |   };
  25 |   onPositionChange?: (x: number, y: number) => void;
  26 | };
  27 | 
  28 | export function Cursor({
  29 |   children,
  30 |   className,
  31 |   springConfig,
  32 |   attachToParent,
  33 |   variants,
  34 |   transition,
  35 |   onPositionChange,
  36 | }: CursorProps) {
  37 |   const cursorX = useMotionValue(
  38 |     typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  39 |   );
  40 |   const cursorY = useMotionValue(
  41 |     typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  42 |   );
  43 |   const cursorRef = useRef<HTMLDivElement>(null);
  44 |   const [isVisible, setIsVisible] = useState(!attachToParent);
  45 | 
  46 |   useEffect(() => {
  47 |     if (!attachToParent) {
  48 |       document.body.style.cursor = 'none';
  49 |     } else {
  50 |       document.body.style.cursor = 'auto';
  51 |     }
  52 | 
  53 |     const updatePosition = (e: MouseEvent) => {
  54 |       cursorX.set(e.clientX);
  55 |       cursorY.set(e.clientY);
  56 |       onPositionChange?.(e.clientX, e.clientY);
  57 |     };
  58 | 
  59 |     document.addEventListener('mousemove', updatePosition);
  60 | 
  61 |     return () => {
  62 |       document.removeEventListener('mousemove', updatePosition);
  63 |     };
  64 |   }, [cursorX, cursorY, onPositionChange]);
  65 | 
  66 |   const cursorXSpring = useSpring(cursorX, springConfig || { duration: 0 });
  67 |   const cursorYSpring = useSpring(cursorY, springConfig || { duration: 0 });
  68 | 
  69 |   useEffect(() => {
  70 |     const handleVisibilityChange = (visible: boolean) => {
  71 |       setIsVisible(visible);
  72 |     };
  73 | 
  74 |     if (attachToParent && cursorRef.current) {
  75 |       const parent = cursorRef.current.parentElement;
  76 |       if (parent) {
  77 |         parent.addEventListener('mouseenter', () => {
  78 |           parent.style.cursor = 'none';
  79 |           handleVisibilityChange(true);
  80 |         });
  81 |         parent.addEventListener('mouseleave', () => {
  82 |           parent.style.cursor = 'auto';
  83 |           handleVisibilityChange(false);
  84 |         });
  85 |       }
  86 |     }
  87 | 
  88 |     return () => {
  89 |       if (attachToParent && cursorRef.current) {
  90 |         const parent = cursorRef.current.parentElement;
  91 |         if (parent) {
  92 |           parent.removeEventListener('mouseenter', () => {
  93 |             parent.style.cursor = 'none';
  94 |             handleVisibilityChange(true);
  95 |           });
  96 |           parent.removeEventListener('mouseleave', () => {
  97 |             parent.style.cursor = 'auto';
  98 |             handleVisibilityChange(false);
  99 |           });
 100 |         }
 101 |       }
 102 |     };
 103 |   }, [attachToParent]);
 104 | 
 105 |   return (
 106 |     <motion.div
 107 |       ref={cursorRef}
 108 |       className={cn('pointer-events-none fixed left-0 top-0 z-50', className)}
 109 |       style={{
 110 |         x: cursorXSpring,
 111 |         y: cursorYSpring,
 112 |         translateX: '-50%',
 113 |         translateY: '-50%',
 114 |       }}
 115 |     >
 116 |       <AnimatePresence>
 117 |         {isVisible && (
 118 |           <motion.div
 119 |             initial='initial'
 120 |             animate='animate'
 121 |             exit='exit'
 122 |             variants={variants}
 123 |             transition={transition}
 124 |           >
 125 |             {children}
 126 |           </motion.div>
 127 |         )}
 128 |       </AnimatePresence>
 129 |     </motion.div>
 130 |   );
 131 | }
 132 | 
```


---

## 📄 src\components\ui\dialog.tsx
**hash:** `23a82bdb`

### Chunk 1/1

```tsx
   1 | "use client"
   2 | 
   3 | import * as React from "react"
   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
   5 | import { X } from "lucide-react"
   6 | 
   7 | import { cn } from "@/lib/utils"
   8 | 
   9 | const Dialog = DialogPrimitive.Root
  10 | 
  11 | const DialogTrigger = DialogPrimitive.Trigger
  12 | 
  13 | const DialogPortal = DialogPrimitive.Portal
  14 | 
  15 | const DialogClose = DialogPrimitive.Close
  16 | 
  17 | const DialogOverlay = React.forwardRef<
  18 |   React.ElementRef<typeof DialogPrimitive.Overlay>,
  19 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
  20 | >(({ className, ...props }, ref) => (
  21 |   <DialogPrimitive.Overlay
  22 |     ref={ref}
  23 |     className={cn(
  24 |       "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  25 |       className
  26 |     )}
  27 |     {...props}
  28 |   />
  29 | ))
  30 | DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
  31 | 
  32 | const DialogContent = React.forwardRef<
  33 |   React.ElementRef<typeof DialogPrimitive.Content>,
  34 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
  35 | >(({ className, children, ...props }, ref) => (
  36 |   <DialogPortal>
  37 |     <DialogOverlay />
  38 |     <DialogPrimitive.Content
  39 |       ref={ref}
  40 |       className={cn(
  41 |         "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
  42 |         className
  43 |       )}
  44 |       {...props}
  45 |     >
  46 |       {children}
  47 |       <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
  48 |         <X className="h-4 w-4" />
  49 |         <span className="sr-only">Close</span>
  50 |       </DialogPrimitive.Close>
  51 |     </DialogPrimitive.Content>
  52 |   </DialogPortal>
  53 | ))
  54 | DialogContent.displayName = DialogPrimitive.Content.displayName
  55 | 
  56 | const DialogHeader = ({
  57 |   className,
  58 |   ...props
  59 | }: React.HTMLAttributes<HTMLDivElement>) => (
  60 |   <div
  61 |     className={cn(
  62 |       "flex flex-col space-y-1.5 text-center sm:text-left",
  63 |       className
  64 |     )}
  65 |     {...props}
  66 |   />
  67 | )
  68 | DialogHeader.displayName = "DialogHeader"
  69 | 
  70 | const DialogFooter = ({
  71 |   className,
  72 |   ...props
  73 | }: React.HTMLAttributes<HTMLDivElement>) => (
  74 |   <div
  75 |     className={cn(
  76 |       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
  77 |       className
  78 |     )}
  79 |     {...props}
  80 |   />
  81 | )
  82 | DialogFooter.displayName = "DialogFooter"
  83 | 
  84 | const DialogTitle = React.forwardRef<
  85 |   React.ElementRef<typeof DialogPrimitive.Title>,
  86 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
  87 | >(({ className, ...props }, ref) => (
  88 |   <DialogPrimitive.Title
  89 |     ref={ref}
  90 |     className={cn(
  91 |       "text-lg font-semibold leading-none tracking-tight",
  92 |       className
  93 |     )}
  94 |     {...props}
  95 |   />
  96 | ))
  97 | DialogTitle.displayName = DialogPrimitive.Title.displayName
  98 | 
  99 | const DialogDescription = React.forwardRef<
 100 |   React.ElementRef<typeof DialogPrimitive.Description>,
 101 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
 102 | >(({ className, ...props }, ref) => (
 103 |   <DialogPrimitive.Description
 104 |     ref={ref}
 105 |     className={cn("text-sm text-muted-foreground", className)}
 106 |     {...props}
 107 |   />
 108 | ))
 109 | DialogDescription.displayName = DialogPrimitive.Description.displayName
 110 | 
 111 | export {
 112 |   Dialog,
 113 |   DialogPortal,
 114 |   DialogOverlay,
 115 |   DialogTrigger,
 116 |   DialogClose,
 117 |   DialogContent,
 118 |   DialogHeader,
 119 |   DialogFooter,
 120 |   DialogTitle,
 121 |   DialogDescription,
 122 | }
 123 | 
```


---

## 📄 src\components\ui\input.tsx
**hash:** `738894f1`

### Chunk 1/1

```tsx
   1 | import * as React from "react"
   2 | 
   3 | import { cn } from "@/lib/utils"
   4 | 
   5 | const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
   6 |   ({ className, type, ...props }, ref) => {
   7 |     return (
   8 |       <input
   9 |         type={type}
  10 |         className={cn(
  11 |           "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  12 |           className
  13 |         )}
  14 |         ref={ref}
  15 |         {...props}
  16 |       />
  17 |     )
  18 |   }
  19 | )
  20 | Input.displayName = "Input"
  21 | 
  22 | export { Input }
  23 | 
```


---

## 📄 src\components\ui\label.tsx
**hash:** `602bebad`

### Chunk 1/1

```tsx
   1 | "use client"
   2 | 
   3 | import * as React from "react"
   4 | import * as LabelPrimitive from "@radix-ui/react-label"
   5 | import { cva, type VariantProps } from "class-variance-authority"
   6 | 
   7 | import { cn } from "@/lib/utils"
   8 | 
   9 | const labelVariants = cva(
  10 |   "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  11 | )
  12 | 
  13 | const Label = React.forwardRef<
  14 |   React.ElementRef<typeof LabelPrimitive.Root>,
  15 |   React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  16 |     VariantProps<typeof labelVariants>
  17 | >(({ className, ...props }, ref) => (
  18 |   <LabelPrimitive.Root
  19 |     ref={ref}
  20 |     className={cn(labelVariants(), className)}
  21 |     {...props}
  22 |   />
  23 | ))
  24 | Label.displayName = LabelPrimitive.Root.displayName
  25 | 
  26 | export { Label }
  27 | 
```


---

## 📄 src\components\ui\select.tsx
**hash:** `2a7fd9bd`

### Chunk 1/1

```tsx
   1 | "use client"
   2 | 
   3 | import * as React from "react"
   4 | import * as SelectPrimitive from "@radix-ui/react-select"
   5 | import { Check, ChevronDown, ChevronUp } from "lucide-react"
   6 | 
   7 | import { cn } from "@/lib/utils"
   8 | 
   9 | const Select = SelectPrimitive.Root
  10 | 
  11 | const SelectGroup = SelectPrimitive.Group
  12 | 
  13 | const SelectValue = SelectPrimitive.Value
  14 | 
  15 | const SelectTrigger = React.forwardRef<
  16 |   React.ElementRef<typeof SelectPrimitive.Trigger>,
  17 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
  18 | >(({ className, children, ...props }, ref) => (
  19 |   <SelectPrimitive.Trigger
  20 |     ref={ref}
  21 |     className={cn(
  22 |       "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
  23 |       className
  24 |     )}
  25 |     {...props}
  26 |   >
  27 |     {children}
  28 |     <SelectPrimitive.Icon asChild>
  29 |       <ChevronDown className="h-4 w-4 opacity-50" />
  30 |     </SelectPrimitive.Icon>
  31 |   </SelectPrimitive.Trigger>
  32 | ))
  33 | SelectTrigger.displayName = SelectPrimitive.Trigger.displayName
  34 | 
  35 | const SelectScrollUpButton = React.forwardRef<
  36 |   React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  37 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
  38 | >(({ className, ...props }, ref) => (
  39 |   <SelectPrimitive.ScrollUpButton
  40 |     ref={ref}
  41 |     className={cn(
  42 |       "flex cursor-default items-center justify-center py-1",
  43 |       className
  44 |     )}
  45 |     {...props}
  46 |   >
  47 |     <ChevronUp className="h-4 w-4" />
  48 |   </SelectPrimitive.ScrollUpButton>
  49 | ))
  50 | SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName
  51 | 
  52 | const SelectScrollDownButton = React.forwardRef<
  53 |   React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  54 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
  55 | >(({ className, ...props }, ref) => (
  56 |   <SelectPrimitive.ScrollDownButton
  57 |     ref={ref}
  58 |     className={cn(
  59 |       "flex cursor-default items-center justify-center py-1",
  60 |       className
  61 |     )}
  62 |     {...props}
  63 |   >
  64 |     <ChevronDown className="h-4 w-4" />
  65 |   </SelectPrimitive.ScrollDownButton>
  66 | ))
  67 | SelectScrollDownButton.displayName =
  68 |   SelectPrimitive.ScrollDownButton.displayName
  69 | 
  70 | const SelectContent = React.forwardRef<
  71 |   React.ElementRef<typeof SelectPrimitive.Content>,
  72 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
  73 | >(({ className, children, position = "popper", ...props }, ref) => (
  74 |   <SelectPrimitive.Portal>
  75 |     <SelectPrimitive.Content
  76 |       ref={ref}
  77 |       className={cn(
  78 |         "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  79 |         position === "popper" &&
  80 |           "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
  81 |         className
  82 |       )}
  83 |       position={position}
  84 |       {...props}
  85 |     >
  86 |       <SelectScrollUpButton />
  87 |       <SelectPrimitive.Viewport
  88 |         className={cn(
  89 |           "p-1",
  90 |           position === "popper" &&
  91 |             "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
  92 |         )}
  93 |       >
  94 |         {children}
  95 |       </SelectPrimitive.Viewport>
  96 |       <SelectScrollDownButton />
  97 |     </SelectPrimitive.Content>
  98 |   </SelectPrimitive.Portal>
  99 | ))
 100 | SelectContent.displayName = SelectPrimitive.Content.displayName
 101 | 
 102 | const SelectLabel = React.forwardRef<
 103 |   React.ElementRef<typeof SelectPrimitive.Label>,
 104 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
 105 | >(({ className, ...props }, ref) => (
 106 |   <SelectPrimitive.Label
 107 |     ref={ref}
 108 |     className={cn("px-2 py-1.5 text-sm font-semibold", className)}
 109 |     {...props}
 110 |   />
 111 | ))
 112 | SelectLabel.displayName = SelectPrimitive.Label.displayName
 113 | 
 114 | const SelectItem = React.forwardRef<
 115 |   React.ElementRef<typeof SelectPrimitive.Item>,
 116 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
 117 | >(({ className, children, ...props }, ref) => (
 118 |   <SelectPrimitive.Item
 119 |     ref={ref}
 120 |     className={cn(
 121 |       "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
 122 |       className
 123 |     )}
 124 |     {...props}
 125 |   >
 126 |     <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
 127 |       <SelectPrimitive.ItemIndicator>
 128 |         <Check className="h-4 w-4" />
 129 |       </SelectPrimitive.ItemIndicator>
 130 |     </span>
 131 |     <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
 132 |   </SelectPrimitive.Item>
 133 | ))
 134 | SelectItem.displayName = SelectPrimitive.Item.displayName
 135 | 
 136 | const SelectSeparator = React.forwardRef<
 137 |   React.ElementRef<typeof SelectPrimitive.Separator>,
 138 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
 139 | >(({ className, ...props }, ref) => (
 140 |   <SelectPrimitive.Separator
 141 |     ref={ref}
 142 |     className={cn("-mx-1 my-1 h-px bg-muted", className)}
 143 |     {...props}
 144 |   />
 145 | ))
 146 | SelectSeparator.displayName = SelectPrimitive.Separator.displayName
 147 | 
 148 | export {
 149 |   Select,
 150 |   SelectGroup,
 151 |   SelectValue,
 152 |   SelectTrigger,
 153 |   SelectContent,
 154 |   SelectLabel,
 155 |   SelectItem,
 156 |   SelectSeparator,
 157 |   SelectScrollUpButton,
 158 |   SelectScrollDownButton,
 159 | }
 160 | 
```


---

## 📄 src\components\ui\sparkles-text.tsx
**hash:** `e2bf77e`

### Chunk 1/1

```tsx
   1 | "use client";
   2 | 
   3 | import { CSSProperties, ReactElement, useEffect, useState } from "react";
   4 | import { motion } from "framer-motion";
   5 | 
   6 | import { cn } from "@/lib/utils";
   7 | 
   8 | interface Sparkle {
   9 |   id: string;
  10 |   x: string;
  11 |   y: string;
  12 |   color: string;
  13 |   delay: number;
  14 |   scale: number;
  15 |   lifespan: number;
  16 | }
  17 | 
  18 | interface SparklesTextProps {
  19 |   /**
  20 |    * @default <div />
  21 |    * @type ReactElement
  22 |    * @description
  23 |    * The component to be rendered as the text
  24 |    * */
  25 |   as?: ReactElement;
  26 | 
  27 |   /**
  28 |    * @default ""
  29 |    * @type string
  30 |    * @description
  31 |    * The className of the text
  32 |    */
  33 |   className?: string;
  34 | 
  35 |   /**
  36 |    * @required
  37 |    * @type string
  38 |    * @description
  39 |    * The text to be displayed
  40 |    * */
  41 |   text: string;
  42 | 
  43 |   /**
  44 |    * @default 10
  45 |    * @type number
  46 |    * @description
  47 |    * The count of sparkles
  48 |    * */
  49 |   sparklesCount?: number;
  50 | 
  51 |   /**
  52 |    * @default "{first: '#9E7AFF', second: '#FE8BBB'}"
  53 |    * @type string
  54 |    * @description
  55 |    * The colors of the sparkles
  56 |    * */
  57 |   colors?: {
  58 |     first: string;
  59 |     second: string;
  60 |   };
  61 | }
  62 | 
  63 | const SparklesText: React.FC<SparklesTextProps> = ({
  64 |   text,
  65 |   colors = { first: "#9E7AFF", second: "#FE8BBB" },
  66 |   className,
  67 |   sparklesCount = 10,
  68 |   ...props
  69 | }) => {
  70 |   const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  71 | 
  72 |   useEffect(() => {
  73 |     const generateStar = (): Sparkle => {
  74 |       const starX = `${Math.random() * 100}%`;
  75 |       const starY = `${Math.random() * 100}%`;
  76 |       const color = Math.random() > 0.5 ? colors.first : colors.second;
  77 |       const delay = Math.random() * 2;
  78 |       const scale = Math.random() * 1 + 0.3;
  79 |       const lifespan = Math.random() * 10 + 5;
  80 |       const id = `${starX}-${starY}-${Date.now()}`;
  81 |       return { id, x: starX, y: starY, color, delay, scale, lifespan };
  82 |     };
  83 | 
  84 |     const initializeStars = () => {
  85 |       const newSparkles = Array.from({ length: sparklesCount }, generateStar);
  86 |       setSparkles(newSparkles);
  87 |     };
  88 | 
  89 |     const updateStars = () => {
  90 |       setSparkles((currentSparkles) =>
  91 |         currentSparkles.map((star) => {
  92 |           if (star.lifespan <= 0) {
  93 |             return generateStar();
  94 |           } else {
  95 |             return { ...star, lifespan: star.lifespan - 0.1 };
  96 |           }
  97 |         }),
  98 |       );
  99 |     };
 100 | 
 101 |     initializeStars();
 102 |     const interval = setInterval(updateStars, 100);
 103 | 
 104 |     return () => clearInterval(interval);
 105 |   }, [colors.first, colors.second, sparklesCount]);
 106 | 
 107 |   return (
 108 |     <div
 109 |       className={cn("text-6xl font-bold", className)}
 110 |       {...props}
 111 |       style={
 112 |         {
 113 |           "--sparkles-first-color": `${colors.first}`,
 114 |           "--sparkles-second-color": `${colors.second}`,
 115 |         } as CSSProperties
 116 |       }
 117 |     >
 118 |       <span className="relative inline-block">
 119 |         {sparkles.map((sparkle) => (
 120 |           <Sparkle key={sparkle.id} {...sparkle} />
 121 |         ))}
 122 |         <strong>{text}</strong>
 123 |       </span>
 124 |     </div>
 125 |   );
 126 | };
 127 | 
 128 | const Sparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
 129 |   return (
 130 |     <motion.svg
 131 |       key={id}
 132 |       className="pointer-events-none absolute z-20"
 133 |       initial={{ opacity: 0, left: x, top: y }}
 134 |       animate={{
 135 |         opacity: [0, 1, 0],
 136 |         scale: [0, scale, 0],
 137 |         rotate: [75, 120, 150],
 138 |       }}
 139 |       transition={{ duration: 0.8, repeat: Infinity, delay }}
 140 |       width="21"
 141 |       height="21"
 142 |       viewBox="0 0 21 21"
 143 |     >
 144 |       <path
 145 |         d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
 146 |         fill={color}
 147 |       />
 148 |     </motion.svg>
 149 |   );
 150 | };
 151 | 
 152 | export default SparklesText;
 153 | 
```


---

## 📄 src\components\ui\text-scramble.tsx
**hash:** `5aa22576`

### Chunk 1/1

```tsx
   1 | 'use client';
   2 | import { type JSX, useEffect, useState } from 'react';
   3 | import { motion, MotionProps } from 'motion/react';
   4 | 
   5 | type TextScrambleProps = {
   6 |   children: string;
   7 |   duration?: number;
   8 |   speed?: number;
   9 |   characterSet?: string;
  10 |   as?: React.ElementType;
  11 |   className?: string;
  12 |   trigger?: boolean;
  13 |   onScrambleComplete?: () => void;
  14 | } & MotionProps;
  15 | 
  16 | const defaultChars =
  17 |   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  18 | 
  19 | export function TextScramble({
  20 |   children,
  21 |   duration = 0.8,
  22 |   speed = 0.04,
  23 |   characterSet = defaultChars,
  24 |   className,
  25 |   as: Component = 'p',
  26 |   trigger = true,
  27 |   onScrambleComplete,
  28 |   ...props
  29 | }: TextScrambleProps) {
  30 |   const MotionComponent = motion.create(
  31 |     Component as keyof JSX.IntrinsicElements
  32 |   );
  33 |   const [displayText, setDisplayText] = useState(children);
  34 |   const [isAnimating, setIsAnimating] = useState(false);
  35 |   const text = children;
  36 | 
  37 |   const scramble = async () => {
  38 |     if (isAnimating) return;
  39 |     setIsAnimating(true);
  40 | 
  41 |     const steps = duration / speed;
  42 |     let step = 0;
  43 | 
  44 |     const interval = setInterval(() => {
  45 |       let scrambled = '';
  46 |       const progress = step / steps;
  47 | 
  48 |       for (let i = 0; i < text.length; i++) {
  49 |         if (text[i] === ' ') {
  50 |           scrambled += ' ';
  51 |           continue;
  52 |         }
  53 | 
  54 |         if (progress * text.length > i) {
  55 |           scrambled += text[i];
  56 |         } else {
  57 |           scrambled +=
  58 |             characterSet[Math.floor(Math.random() * characterSet.length)];
  59 |         }
  60 |       }
  61 | 
  62 |       setDisplayText(scrambled);
  63 |       step++;
  64 | 
  65 |       if (step > steps) {
  66 |         clearInterval(interval);
  67 |         setDisplayText(text);
  68 |         setIsAnimating(false);
  69 |         onScrambleComplete?.();
  70 |       }
  71 |     }, speed * 1000);
  72 |   };
  73 | 
  74 |   useEffect(() => {
  75 |     if (!trigger) return;
  76 | 
  77 |     scramble();
  78 |   }, [trigger]);
  79 | 
  80 |   return (
  81 |     <MotionComponent className={className} {...props}>
  82 |       {displayText}
  83 |     </MotionComponent>
  84 |   );
  85 | }
  86 | 
```


---

## 📄 src\components\ui\text-shimmer.tsx
**hash:** `f5f96c9`

### Chunk 1/1

```tsx
   1 | 'use client';
   2 | import React, { useMemo, type JSX } from 'react';
   3 | import { motion } from 'motion/react';
   4 | import { cn } from '@/lib/utils';
   5 | 
   6 | interface TextShimmerProps {
   7 |   children: string;
   8 |   as?: React.ElementType;
   9 |   className?: string;
  10 |   duration?: number;
  11 |   spread?: number;
  12 | }
  13 | 
  14 | export function TextShimmer({
  15 |   children,
  16 |   as: Component = 'p',
  17 |   className,
  18 |   duration = 2,
  19 |   spread = 2,
  20 | }: TextShimmerProps) {
  21 |   const MotionComponent = motion.create(
  22 |     Component as keyof JSX.IntrinsicElements
  23 |   );
  24 | 
  25 |   const dynamicSpread = useMemo(() => {
  26 |     return children.length * spread;
  27 |   }, [children, spread]);
  28 | 
  29 |   return (
  30 |     <MotionComponent
  31 |       className={cn(
  32 |         'relative inline-block bg-[length:250%_100%,auto] bg-clip-text',
  33 |         'text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]',
  34 |         '[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]',
  35 |         'dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',
  36 |         className
  37 |       )}
  38 |       initial={{ backgroundPosition: '100% center' }}
  39 |       animate={{ backgroundPosition: '0% center' }}
  40 |       transition={{
  41 |         repeat: Infinity,
  42 |         duration,
  43 |         ease: 'linear',
  44 |       }}
  45 |       style={
  46 |         {
  47 |           '--spread': `${dynamicSpread}px`,
  48 |           backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
  49 |         } as React.CSSProperties
  50 |       }
  51 |     >
  52 |       {children}
  53 |     </MotionComponent>
  54 |   );
  55 | }
  56 | 
```


---

## 📄 src\components\WorkshopLaunchDialog.tsx
**hash:** `34d5f8b7`

### Chunk 1/1

```tsx
   1 | import React, { useState } from 'react'
   2 | import { motion, AnimatePresence } from 'framer-motion'
   3 | import { Clock, Calendar, MapPin } from 'lucide-react'
   4 | 
   5 | const WorkshopLaunchDialog = () => {
   6 |     const [isOpen, setIsOpen] = useState(true)
   7 | 
   8 |     return (
   9 |         <AnimatePresence>
  10 |             {isOpen && (
  11 |                 <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
  12 |                     <motion.div
  13 |                         initial={{ opacity: 0, scale: 0.8 }}
  14 |                         animate={{ opacity: 1, scale: 1 }}
  15 |                         exit={{ opacity: 0, scale: 0.8 }}
  16 |                         className="bg-zinc-900 rounded-2xl p-8 max-w-md w-full text-white border border-zinc-800 shadow-2xl"
  17 |                     >
  18 |                         <h2 className="text-3xl font-bold mb-4 text-blue-400 text-center">
  19 |                             Satellite Tracking Workshop
  20 |                         </h2>
  21 |                         
  22 |                         <div className="space-y-4 mb-6">
  23 |                             <div className="flex items-center space-x-4">
  24 |                                 <Calendar className="text-blue-500" />
  25 |                                 <span>Coming Soon</span>
  26 |                             </div>
  27 |                             <div className="flex items-center space-x-4">
  28 |                                 <Clock className="text-blue-500" />
  29 |                                 <span>To Be Announced</span>
  30 |                             </div>
  31 |                             <div className="flex items-center space-x-4">
  32 |                                 <MapPin className="text-blue-500" />
  33 |                                 <span>Location To Be Announced</span>
  34 |                             </div>
  35 |                         </div>
  36 | 
  37 |                         <div className="bg-zinc-800/50 rounded-lg p-4 mb-6 text-center">
  38 |                             <h3 className="text-xl mb-2 text-blue-300">Stay Tuned For More Details</h3>
  39 |                         </div>
  40 | 
  41 |                         <div className="flex space-x-4">
  42 |                             <button 
  43 |                                 onClick={() => setIsOpen(false)}
  44 |                                 className="w-full bg-zinc-800 text-zinc-300 py-3 rounded-lg hover:bg-zinc-700 transition-colors"
  45 |                             >
  46 |                                 Close
  47 |                             </button>
  48 |                         </div>
  49 |                     </motion.div>
  50 |                 </div>
  51 |             )}
  52 |         </AnimatePresence>
  53 |     )
  54 | }
  55 | 
  56 | export default WorkshopLaunchDialog
  57 | 
```


---

## 📄 src\components\WorkshopRegistrationDialog.tsx
**hash:** `5c8fcdc6`

### Chunk 1/4

```tsx
   1 | "use client"
   2 | 
   3 | import type React from "react"
   4 | import { useState, useEffect } from "react"
   5 | import { Copy, ArrowRight, ArrowLeft, Upload } from "lucide-react"
   6 | import { Button } from "@/components/ui/button"
   7 | import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
   8 | import { SiPhonepe, SiPaytm } from "react-icons/si"
   9 | import { FaGooglePay } from "react-icons/fa"
  10 | import { toast, Toaster } from "react-hot-toast"
  11 | import { Input } from "@/components/ui/input"
  12 | import { Label } from "@/components/ui/label"
  13 | import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  14 | import { Inter } from "next/font/google"
  15 | import { generateUPIQRCode } from "@/lib/upi-qr"
  16 | import { saveRegistration, type RegistrationData, checkRegistrationStatus } from "@/lib/firebase-utils"
  17 | import { uploadToCloudinary } from "@/lib/cloudinary-utils"
  18 | import { AlreadyRegisteredDialog } from "./AlreadyRegisteredDialog"
  19 | 
  20 | type ReferralSource = "College" | "Faculty" | "Friends" | "SocialMedia" | `Others - ${string}`
  21 | 
  22 | type Category = "Undergraduate" | "Postgraduate" | "Research Scholar" | "Startup/Industrial"
  23 | 
  24 | 
  25 | const inter = Inter({
  26 |   subsets: ["latin"],
  27 |   variable: "--font-inter",
  28 | })
  29 | 
  30 | const pricingDetails = {
  31 |   Undergraduate: { 
  32 |     normal: 1999, 
  33 |     earlyBird: 1499,
  34 |     kcgDiscount: {
  35 |       earlyBird: 759,
  36 |       normal: 999
  37 |     }
  38 |   },
  39 |   Postgraduate: { 
  40 |     normal: 2499, 
  41 |     earlyBird: 1999,
  42 |     kcgDiscount: {
  43 |       earlyBird: 999,
  44 |       normal: 1249
  45 |     }
  46 |   },
  47 |   "Research Scholar": { 
  48 |     normal: 2499, 
  49 |     earlyBird: 1999,
  50 |     kcgDiscount: {
  51 |       earlyBird: 999,
  52 |       normal: 1249
  53 |     }
  54 |   },
  55 |   "Startup/Industrial": { 
  56 |     normal: 2999, 
  57 |     earlyBird: 2499,
  58 |     kcgDiscount: {
  59 |       earlyBird: 1249,
  60 |       normal: 1499
  61 |     }
  62 |   },
  63 | }
  64 | 
  65 | const upiDetails = {
  66 |   upiId: "vijayaraj.anbalagan@oksbi",
  67 |   phoneNumber: "+91 7358551897",
  68 |   apps: [
  69 |     { name: "Google Pay", icon: FaGooglePay },
  70 |     { name: "PhonePe", icon: SiPhonepe },
  71 |     { name: "Paytm", icon: SiPaytm },
  72 |   ],
  73 | }
  74 | 
  75 | const copyToClipboard = (text: string) => {
  76 |   navigator.clipboard.writeText(text)
  77 |   toast.success("Copied to clipboard")
  78 | }
  79 | 
  80 | const openUPIApp = ( isEarlyBirdActive: boolean, formData: RegistrationData & { category: Category} ) => {
  81 |     const price = isEarlyBirdActive
  82 |         ? pricingDetails[formData.category].earlyBird
  83 |         : pricingDetails[formData.category].normal
  84 | 
  85 |     const upiLink = `upi://pay?pa=${upiDetails.upiId}&pn=${formData.name}&am=${price}&cu=INR`
  86 |     window.open(upiLink, "_blank")
  87 | }
  88 | 
  89 | 
  90 | const FileUploader = ({ 
  91 |   onFileUpload, 
  92 |   existingImage 
  93 | }: { 
  94 |   onFileUpload: (file: File) => void, 
  95 |   existingImage?: string 
  96 | }) => {
  97 |   const [dragOver, setDragOver] = useState(false)
  98 |   const [preview, setPreview] = useState<string | null>(existingImage || null)
  99 | 
 100 |   const handleFileChange = (file: File) => {
 101 |     if (file.size > 5 * 1024 * 1024) {
 102 |       toast.error("File size exceeds 5MB")
 103 |       return
 104 |     }
 105 | 
 106 |     const reader = new FileReader()
 107 |     reader.onloadend = () => {
 108 |       setPreview(reader.result as string)
 109 |     }
 110 |     reader.readAsDataURL(file)
 111 | 
 112 |     onFileUpload(file)
 113 |   }
 114 | 
 115 |  
 116 |   
 117 |   
 118 | 
 119 |   return (
 120 |     <div 
 121 |       className={`
 122 |         border-2 border-dashed rounded-lg p-6 text-center 
 123 |         transition-colors duration-300 group
 124 |         ${dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}
 125 |       `}
 126 |       onDragOver={(e) => {
 127 |         e.preventDefault()
 128 |         setDragOver(true)
 129 |       }}
 130 |       onDragLeave={() => setDragOver(false)}
 131 |       onDrop={(e) => {
 132 |         e.preventDefault()
 133 |         setDragOver(false)
 134 |         const file = e.dataTransfer.files[0]
 135 |         handleFileChange(file)
 136 |       }}
 137 |     >
 138 |       {preview ? (
 139 |         <img 
 140 |           src={preview} 
 141 |           alt="Payment screenshot" 
 142 |           className="mx-auto max-h-48 rounded-lg shadow-md"
 143 |         />
 144 |       ) : (
 145 |         <>
 146 |           <input 
 147 |             type="file" 
 148 |             accept="image/*" 
 149 |             className="hidden" 
 150 |             id="fileUpload"
 151 |             onChange={(e) => {
 152 |               if (e.target.files?.[0]) {
 153 |                 handleFileChange(e.target.files[0])
 154 |               }
 155 |             }}
 156 |           />
 157 |           <Label 
 158 |             htmlFor="fileUpload" 
 159 |             className="
 160 |               cursor-pointer text-gray-600 hover:text-blue-600 
 161 |               flex flex-col items-center space-y-2
 162 |             "
 163 |           >
 164 |             <Upload className="w-12 h-12 text-gray-400 group-hover:text-blue-500" />
 165 |             <span>Drag and drop or click to upload payment screenshot</span>
 166 |           </Label>
 167 |         </>
 168 |       )}
 169 |     </div>
 170 |   )
 171 | }
 172 | 
 173 | export function WorkshopRegistrationDialog() {
 174 |   const [isOpen, setIsOpen] = useState(false)
 175 |   const [step, setStep] = useState(1)
 176 |   const [formData, setFormData] = useState<RegistrationData & { category: Category , isKcgSudent : boolean, otherReferralDetails?: string }>({
 177 |     name: "",
 178 |     email: "",
 179 |     phone: "",
 180 |     institution: "",
 181 |     category: "Undergraduate",
 182 |     paymentScreenshot: "",
 183 |     transactionId: "",
 184 |     amount: 0,
 185 |     status: "Pending",
 186 |     timestamp: new Date().toISOString(),
 187 |     attended: false,
 188 |     feedback: "0",
 189 |     feedbackContent: "",
 190 |     isKcgSudent : false,
 191 |     referralSource: "College",
 192 |   })
 193 |   const [formErrors, setFormErrors] = useState({
 194 |     name: "",
 195 |     email: "",
 196 |     phone: "",
 197 |     institution: "",
 198 |     category: "",
 199 |     referralSource: "",
 200 |     otherReferralDetails: "",
```

### Chunk 2/4

```tsx
 201 |   })
 202 |   const [upiQRCode, setUpiQRCode] = useState("")
 203 |   const [isLoading, setIsLoading] = useState(false)
 204 |   const [isEarlyBirdActive, setIsEarlyBirdActive] = useState(false)
 205 | 
 206 |   useEffect(() => {
 207 |     const checkEarlyBirdStatus = () => {
 208 |         const earlyBirdDeadline = new Date("2025-01-30T23:59:59")
 209 |         const now = new Date()
 210 |         setIsEarlyBirdActive(now < earlyBirdDeadline)
 211 |       }
 212 |   
 213 |       checkEarlyBirdStatus()
 214 |       const intervalId = setInterval(checkEarlyBirdStatus, 3600000)
 215 |   
 216 |       return () => clearInterval(intervalId)
 217 |   }, [])
 218 | 
 219 |   // Local Storage Effects
 220 |   useEffect(() => {
 221 |     const savedStep = localStorage.getItem('registrationStep')
 222 |     const savedFormData = localStorage.getItem('registrationFormData')
 223 |     const savedEmail = localStorage.getItem('dashagrivemail')
 224 | 
 225 |     if (savedStep) setStep(parseInt(savedStep))
 226 |     if (savedFormData) {
 227 |       try {
 228 |         const parsedData = JSON.parse(savedFormData)
 229 |         setFormData(parsedData)
 230 |       } catch (error) {
 231 |         console.error('Failed to parse saved form data',error)
 232 |       }
 233 |     }
 234 |     if (savedEmail) {
 235 |       checkRegistrationStatus(savedEmail).then((status) => {
 236 |         if (status === "Completed") {
 237 |           toast.success("Registration already completed")
 238 |         } else if (status === "Pending") {
 239 |           setIsOpen(true)
 240 |           setStep(3)
 241 |         }
 242 |       })
 243 |     }
 244 |   }, [])
 245 | 
 246 |   useEffect(() => {
 247 |     localStorage.setItem('registrationStep', step.toString())
 248 |     localStorage.setItem('registrationFormData', JSON.stringify(formData))
 249 |   }, [step, formData])
 250 | 
 251 |   // Early Bird Effect
 252 |   useEffect(() => {
 253 |     const checkEarlyBirdStatus = () => {
 254 |       const earlyBirdDeadline = new Date("2025-01-30T23:59:59")
 255 |       const now = new Date()
 256 |       setIsEarlyBirdActive(now < earlyBirdDeadline)
 257 |     }
 258 | 
 259 |     checkEarlyBirdStatus()
 260 |     const intervalId = setInterval(checkEarlyBirdStatus, 3600000)
 261 | 
 262 |     return () => clearInterval(intervalId)
 263 |   }, [])
 264 | 
 265 |   // Validation and Input Handlers
 266 |   const validateForm = () => {
 267 |     const errors = {
 268 |       name: formData.name.trim() ? "" : "Name is required",
 269 |       email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Enter a valid email address",
 270 |       phone: /^[6-9]\d{9}$/.test(formData.phone) ? "" : "Enter a valid 10-digit Indian mobile number",
 271 |       institution: formData.institution.trim() ? "" : "Institution is required",
 272 |       category: formData.category ? "" : "Select a category",
 273 |       referralSource: formData.referralSource ? "" : "Please select how you knew about us",
 274 |       otherReferralDetails: formData.referralSource === "Others - " && !formData.otherReferralDetails?.trim()
 275 |         ? "Please specify how you knew about us" 
 276 |         : ""
 277 |     }
 278 | 
 279 |     const isKcgStudent = formData.email.toLowerCase().endsWith("kcgcollege.in") ||
 280 |     ["kcg", "kcg college of technology", "kcg college"].some(institution =>
 281 |       formData.institution.toLowerCase().includes(institution)
 282 |     )
 283 |     setFormData(prev => ({ ...prev, isKcgStudent }))
 284 | 
 285 |     setFormErrors(errors)
 286 |     return Object.values(errors).every((error) => error === "")
 287 |   }
 288 |   
 289 |   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
 290 |     const { name, value } = e.target
 291 |     setFormData((prev) => ({ 
 292 |       ...prev, 
 293 |       [name]: value, 
 294 |       timestamp: new Date().toISOString() 
 295 |     }))
 296 |     if (name in formErrors) {
 297 |       setFormErrors((prev) => ({ ...prev, [name]: "" }))
 298 |     }
 299 |   }
 300 | 
 301 |   const handleFileUpload = async (file: File) => {
 302 |     try {
 303 |       const cloudinaryUrl = await uploadToCloudinary(file, "workshop-payments")
 304 |       setFormData((prev) => ({
 305 |         ...prev,
 306 |         paymentScreenshot: cloudinaryUrl,
 307 |         timestamp: new Date().toISOString(),
 308 |       }))
 309 |       toast.success("Payment screenshot uploaded successfully")
 310 |     } catch (error) {
 311 |       console.error("Upload error:", error)
 312 |       toast.error("Failed to upload screenshot")
 313 |     }
 314 |   }
 315 | 
 316 |   const calculatePricing = () => {
 317 |     const isEarlyBird = isEarlyBirdActive
 318 |     const category = formData.category
 319 |     const isKcgStudent = formData.email.toLowerCase().endsWith("@kcgcollege.com")
 320 | 
 321 |     if (isKcgStudent) {
 322 |       return isEarlyBird 
 323 |         ? pricingDetails[category].kcgDiscount.earlyBird 
 324 |         : pricingDetails[category].kcgDiscount.normal
 325 |     }
 326 | 
 327 |     return isEarlyBird 
 328 |       ? pricingDetails[category].earlyBird 
 329 |       : pricingDetails[category].normal
 330 |   }
 331 | 
 332 |   const calculateDiscountDetails = () => {
 333 |     const category = formData.category
 334 |     const isKcgStudent = formData.email.toLowerCase().endsWith("@kcgcollege.com")
 335 | 
 336 |     if (!isKcgStudent) return null
 337 | 
 338 |     const originalPrice = isEarlyBirdActive 
 339 |       ? pricingDetails[category].earlyBird 
 340 |       : pricingDetails[category].normal
 341 | 
 342 |     const discountedPrice = isEarlyBirdActive 
 343 |       ? pricingDetails[category].kcgDiscount.earlyBird 
 344 |       : pricingDetails[category].kcgDiscount.normal
 345 | 
 346 |     const savedAmount = originalPrice - discountedPrice
 347 |     const discountPercentage = Math.round((savedAmount / originalPrice) * 100)
 348 | 
 349 |     return {
 350 |       originalPrice,
 351 |       discountedPrice,
 352 |       savedAmount,
 353 |       discountPercentage
 354 |     }
 355 |   }
 356 | 
 357 |   const generateQRCode = async () => {
 358 |     setIsLoading(true)
 359 |     try {
 360 |       const price = calculatePricing()
 361 | 
 362 |       const qrCode = await generateUPIQRCode(upiDetails.upiId, price, formData.name)
 363 | 
 364 |       setFormData((prev) => ({
 365 |         ...prev,
 366 |         amount: price,
 367 |         timestamp: new Date().toISOString(),
 368 |       }))
 369 | 
 370 |       setUpiQRCode(qrCode)
 371 |     } catch (error) {
 372 |       console.error("QR Code generation error:", error)
 373 |       toast.error("Failed to generate QR code")
 374 |     } finally {
 375 |       setIsLoading(false)
 376 |     }
 377 |   }
 378 | 
 379 |   const submitRegistration = async () => {
 380 |     if (!formData.paymentScreenshot || !formData.transactionId) {
 381 |       toast.error("Please upload payment screenshot and enter transaction ID")
 382 |       return
 383 |     }
 384 | 
 385 |     setIsLoading(true)
 386 |     try {
 387 |       const finalFormData: RegistrationData = {
 388 |         ...formData,
 389 |         // If referral source is "Others", combine it with the details
 390 |         referralSource: formData.referralSource.startsWith("Others - ")
 391 |           ? `Others - ${formData.otherReferralDetails}`
 392 |           : formData.referralSource
 393 |       }
 394 |       await saveRegistration(formData.email, finalFormData)
 395 |       localStorage.setItem("dashagrivemail", formData.email)
 396 | 
 397 |       toast.success("Registration submitted successfully!")
 398 |       setStep(4)
 399 |     } catch (error) {
 400 |       console.error("Registration submission error:", error)
```

### Chunk 3/4

```tsx
 401 |       toast.error("Registration submission failed")
 402 |     } finally {
 403 |       setIsLoading(false)
 404 |     }
 405 |   }
 406 | 
 407 | 
 408 |   const renderPricingDetails = () => {
 409 |     const discountDetails = calculateDiscountDetails()
 410 |     const price = calculatePricing()
 411 |     const isKcgStudent = formData.email.toLowerCase().endsWith("@kcgcollege.com")
 412 | 
 413 |     return (
 414 |       <div className="mt-4 space-y-4">
 415 |   {upiQRCode ? (
 416 |     <div className="relative flex flex-col items-center">
 417 |       <div className="w-full max-w-[300px] relative">
 418 |         <img
 419 |           src={upiQRCode || "/placeholder.svg"}
 420 |           alt="UPI QR Code"
 421 |           className="mx-auto mb-2 max-w-full rounded-lg"
 422 |         />
 423 |       </div>
 424 | 
 425 |       <div className="bg-zinc-800 rounded-lg p-4 w-full space-y-3">
 426 |         <div className="flex justify-between items-center">
 427 |           <span>Registration Fee</span>
 428 |           <div className="flex items-center space-x-2">
 429 |             {isKcgStudent && discountDetails ? (
 430 |               <>
 431 |                 <span className="line-through text-gray-500">
 432 |                   ₹{discountDetails.originalPrice}
 433 |                 </span>
 434 |                 <span className="font-bold text-green-500">
 435 |                   ₹{discountDetails.discountedPrice}
 436 |                 </span>
 437 |               </>
 438 |             ) : (
 439 |               <span className={isEarlyBirdActive ? 'text-green-500' : 'text-white'}>
 440 |                 ₹{price}
 441 |               </span>
 442 |             )}
 443 |           </div>
 444 |         </div>
 445 | 
 446 |         {isKcgStudent && discountDetails && (
 447 |           <div className="bg-green-900/30 p-3 rounded-lg">
 448 |             <div className="flex justify-between items-center">
 449 |               <span className="text-green-400">KCG Student Discount</span>
 450 |               <span className="font-bold text-green-300">
 451 |                 {discountDetails.discountPercentage}% OFF
 452 |               </span>
 453 |             </div>
 454 |             <div className="text-sm text-green-200 mt-1">
 455 |               You saved ₹{discountDetails.savedAmount}
 456 |             </div>
 457 |           </div>
 458 |         )}
 459 | 
 460 |         {isEarlyBirdActive && !isKcgStudent && (
 461 |           <div className="bg-blue-900/30 p-3 rounded-lg text-blue-300">
 462 |             Early Bird Discount Applied
 463 |           </div>
 464 |         )}
 465 |       </div>
 466 | 
 467 |       <div className="mt-4 w-full">
 468 |         <div className="flex justify-between items-center bg-zinc-700 p-2 rounded-lg">
 469 |           <span>UPI ID</span>
 470 |           <div className="flex items-center">
 471 |             <span className="mr-2">{upiDetails.upiId}</span>
 472 |             <Button variant="ghost" size="sm" onClick={() => copyToClipboard(upiDetails.upiId)}>
 473 |               <Copy size={16} />
 474 |             </Button>
 475 |           </div>
 476 |         </div>
 477 |       </div>
 478 |     </div>
 479 |   ) : (
 480 |     <div className="text-center text-gray-400">Generating QR Code...</div>
 481 |   )}
 482 | </div>
 483 |     )
 484 |   }
 485 | 
 486 |   // Rendering Logic
 487 |   const renderStep = () => {
 488 |     switch (step) {
 489 |       case 1:
 490 |         return (
 491 |           <div className="space-y-3">
 492 |             <DialogHeader>
 493 |               <DialogTitle className="text-white">Registration Details</DialogTitle>
 494 |               <DialogDescription>Enter your personal information</DialogDescription>
 495 |             </DialogHeader>
 496 |             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 497 |               {["name", "email", "phone", "institution"].map((field) => (
 498 |                 <div key={field}>
 499 |                   <Label htmlFor={field} className="text-white">{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
 500 |                   <Input
 501 |                     id={field}
 502 |                     name={field}
 503 |                     value={String(formData[field as keyof typeof formData])}
 504 |                     onChange={handleInputChange}
 505 |                     className={`
 506 |                       ${formErrors[field as keyof typeof formErrors] 
 507 |                         ? "border-red-500" 
 508 |                         : "border-gray-700 focus:border-blue-500"
 509 |                       } bg-zinc-900 text-white
 510 |                     `}
 511 |                   />
 512 |                   {formErrors[field as keyof typeof formErrors] && (
 513 |                     <p className="text-red-500 text-sm mt-1">
 514 |                       {formErrors[field as keyof typeof formErrors]}
 515 |                     </p>
 516 |                   )}
 517 |                 </div>
 518 |               ))}
 519 |               <div>
 520 |                 <Label className="text-white">Category</Label>
 521 |                 <Select
 522 |                   name="category"
 523 |                   value={formData.category}
 524 |                   onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value as Category }))}
 525 |                 >
 526 |                   <SelectTrigger className="bg-zinc-900 text-white border-gray-700 focus:border-blue-500">
 527 |                     <SelectValue placeholder="Select category" />
 528 |                   </SelectTrigger>
 529 |                   <SelectContent className="bg-zinc-900 text-white">
 530 |                     {Object.keys(pricingDetails).map((category) => (
 531 |                       <SelectItem 
 532 |                         key={category} 
 533 |                         value={category} 
 534 |                         className="hover:bg-zinc-800"
 535 |                       >
 536 |                         {category}
 537 |                       </SelectItem>
 538 |                     ))}
 539 |                   </SelectContent>
 540 |                 </Select>
 541 |               </div>
 542 |               <div >
 543 |   <Label className="text-white">How did you know about us?</Label>
 544 |   <Select
 545 |     name="referralSource"
 546 |     value={formData.referralSource}
 547 |     onValueChange={(value: ReferralSource) => {
 548 |       setFormData(prev => ({
 549 |         ...prev,
 550 |         referralSource: value,
 551 |         otherReferralDetails: !value.startsWith("Others - ") ? "" : prev.otherReferralDetails
 552 |       }))
 553 |       setFormErrors(prev => ({ ...prev, referralSource: "", otherReferralDetails: "" }))
 554 |     }}
 555 |   >
 556 |     <SelectTrigger className="bg-zinc-900 text-white border-gray-700 focus:border-blue-500">
 557 |       <SelectValue placeholder="Select how you knew about us" />
 558 |     </SelectTrigger>
 559 |     <SelectContent className="bg-zinc-900 text-white">
 560 |       {["College", "Faculty", "Friends", "SocialMedia", "Others - "].map((source) => (
 561 |         <SelectItem
 562 |           key={source}
 563 |           value={source}
 564 |           className="hover:bg-zinc-800"
 565 |         >
 566 |           {source}
 567 |         </SelectItem>
 568 |       ))}
 569 |     </SelectContent>
 570 |   </Select>
 571 |   {formErrors.referralSource && (
 572 |     <p className="text-red-500 text-sm mt-1">{formErrors.referralSource}</p>
 573 |   )}
 574 | </div>
 575 |             </div>
 576 |             
 577 | {formData.referralSource.startsWith("Others - ") && (
 578 |   <div className="col-span-2">
 579 |     <Label className="text-white">Please specify</Label>
 580 |     <Input
 581 |       name="otherReferralDetails"
 582 |       value={formData.otherReferralDetails}
 583 |       onChange={handleInputChange}
 584 |       placeholder="Tell us how you knew about us"
 585 |       className={`
 586 |         ${formErrors.otherReferralDetails ? "border-red-500" : "border-gray-700 focus:border-blue-500"}
 587 |         bg-zinc-900 text-white
 588 |       `}
 589 |     />
 590 |     {formErrors.otherReferralDetails && (
 591 |       <p className="text-red-500 text-sm mt-1">{formErrors.otherReferralDetails}</p>
 592 |     )}
 593 |   </div>
 594 | )}
 595 |             <div className="flex justify-end mt-4">
 596 |               <Button
 597 |                 onClick={() => {
 598 |                   if (validateForm()) {
 599 |                     setStep(2)
 600 |                     generateQRCode()
```

### Chunk 4/4

```tsx
 601 |                   }
 602 |                 }}
 603 |                 className="bg-blue-600 hover:bg-blue-700"
 604 |               >
 605 |                 Next <ArrowRight className="ml-2" />
 606 |               </Button>
 607 |             </div>
 608 |           </div>
 609 |         )
 610 | 
 611 |         case 2:
 612 |           return (
 613 |             <>
 614 |             <DialogHeader>
 615 |               <DialogTitle>Payment Details</DialogTitle>
 616 |               <DialogDescription>Complete your payment</DialogDescription>
 617 |             </DialogHeader>
 618 |             {renderPricingDetails()}
 619 |             <div className="flex justify-center mt-4">
 620 |               <div className="grid grid-cols-3 gap-4">
 621 |               {upiDetails.apps.map((app) => (
 622 |                 <div 
 623 |                 key={app.name} 
 624 |                 onClick={() => openUPIApp(isEarlyBirdActive, formData)} 
 625 |                 className="cursor-pointer text-gray-400 hover:text-blue-500 flex flex-col items-center"
 626 |                 >
 627 |                 <app.icon className="w-12 h-12" />
 628 |                 </div>
 629 |               ))}
 630 |               </div>
 631 |             </div>
 632 |             <div className="flex justify-between mt-4">
 633 |                 <Button onClick={() => setStep(1)} className="bg-white text-black hover:bg-slate-50">
 634 |                 <ArrowLeft className="mr-2" /> Back
 635 |                 </Button>
 636 |               <Button onClick={() => setStep(3)}>
 637 |                 Next <ArrowRight className="ml-2" />
 638 |               </Button>
 639 |             </div>
 640 |             </>
 641 |           )
 642 |         case 3:
 643 |           return (
 644 |             <>
 645 |             <DialogHeader>
 646 |               <DialogTitle>Payment Proof</DialogTitle>
 647 |               <DialogDescription>Upload your payment screenshot and enter transaction ID</DialogDescription>
 648 |             </DialogHeader>
 649 |             <div className="space-y-4 mt-4">
 650 |               <div>
 651 |                 <Label htmlFor="paymentScreenshot">Payment Screenshot</Label>
 652 |                 <FileUploader onFileUpload={handleFileUpload} existingImage={formData.paymentScreenshot} />
 653 |               </div>
 654 |               <div>
 655 |                 <Label htmlFor="transactionId">Transaction ID</Label>
 656 |                 <Input
 657 |                 id="transactionId"
 658 |                 name="transactionId"
 659 |                 value={formData.transactionId}
 660 |                 onChange={handleInputChange}
 661 |                 className="bg-zinc-900 text-white border-gray-700 focus:border-blue-500"
 662 |                 />
 663 |               </div>
 664 |             </div>
 665 |             <div className="flex justify-between mt-4">
 666 |               <Button onClick={() => setStep(2)} className="bg-white text-black hover:bg-slate-50">
 667 |                 <ArrowLeft className="mr-2" /> Back
 668 |               </Button>
 669 |               <Button onClick={submitRegistration} disabled={isLoading}>
 670 |                 {isLoading ? "Submitting..." : "Submit Registration"}
 671 |               </Button>
 672 |             </div>
 673 |             </>
 674 |           )
 675 |         case 4:
 676 |           return (
 677 |             <>
 678 |             <DialogHeader>
 679 |               <DialogTitle>Registration Complete</DialogTitle>
 680 |               <DialogDescription>Thank you for registering!</DialogDescription>
 681 |             </DialogHeader>
 682 |             <div className="mt-4">
 683 |               <p>Your registration has been submitted successfully.</p>
 684 |               <p className="mt-2">Check your Status using the below link by Entering your Email.</p>
 685 |             </div>
 686 |             <div className="mt-4">
 687 |               <AlreadyRegisteredDialog />
 688 |             </div>
 689 |             <div className="flex justify-end mt-4">
 690 |               <Button onClick={() => setIsOpen(false)}>Close</Button>
 691 |             </div>
 692 |             </>
 693 |           )
 694 |       // Other steps remain similar, with UI updates matching step 1's style
 695 |       // I'll omit them for brevity, but they would follow the same dark theme
 696 |       // with white text and blue accents
 697 |       default:
 698 |         return null
 699 |     }
 700 |   }
 701 | 
 702 |   return (
 703 |     <div>
 704 |       <Button 
 705 |         className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg mb-4"  
 706 |         onClick={() => setIsOpen(true)}
 707 |       >
 708 |         Register Now
 709 |       </Button>
 710 |       <Dialog open={isOpen} onOpenChange={setIsOpen}>
 711 |         <DialogContent 
 712 |           className={`${inter.className}
 713 |             bg-black text-white max-w-md sm:max-w-xl 
 714 |             border border-gray-800 rounded-xl shadow-2xl
 715 |           `}
 716 |         >
 717 |           {renderStep()}
 718 |         </DialogContent>
 719 |       </Dialog>
 720 |       <Toaster position="top-right" />
 721 |     </div>
 722 |   )
 723 | }
 724 | 
 725 | 
```


---

## 📄 src\lib\cloudinary-utils.ts
**hash:** `19ed1c22`

### Chunk 1/1

```typescript
   1 | import axios from 'axios';
   2 | 
   3 | export const uploadToCloudinary = async (file: File, folder: string) => {
   4 |   const formData = new FormData();
   5 |   formData.append('file', file);
   6 |   formData.append('upload_preset', 'screenshot-workshop');
   7 |   formData.append('folder', folder);
   8 | 
   9 |   try {
  10 |     const response = await axios.post(
  11 |       `https://api.cloudinary.com/v1_1/dyi9uhwfq/upload`,
  12 |       formData,
  13 |       {
  14 |         headers: { 'Content-Type': 'multipart/form-data' }
  15 |       }
  16 |     );
  17 | 
  18 |     return response.data.secure_url;
  19 |   } catch (error) {
  20 |     console.error('Cloudinary Upload Error:', error);
  21 |     throw error;
  22 |   }
  23 | };
```


---

## 📄 src\lib\firebase-utils.ts
**hash:** `4e685c0e`

### Chunk 1/1

```typescript
   1 | import { initializeApp } from 'firebase/app';
   2 | import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
   3 | import { getFirestore } from 'firebase/firestore';
   4 | 
   5 | 
   6 | // Your Firebase configuration
   7 | const firebaseConfig = {
   8 |     apiKey: "AIzaSyAZ-dW0yrz9x03-0Y7-tYAymTaVCUKp0DA",
   9 |     authDomain: "dat-tools.firebaseapp.com",
  10 |     projectId: "dat-tools",
  11 |     storageBucket: "dat-tools.firebasestorage.app",
  12 |     messagingSenderId: "788326049198",
  13 |     appId: "1:788326049198:web:82ab1ac5b289e1f7a4143f",
  14 |     measurementId: "G-D1EHPLLN9D",
  15 |   };
  16 |   
  17 |   export default firebaseConfig;
  18 | 
  19 | // Initialize Firebase
  20 | export const app = initializeApp(firebaseConfig);
  21 | 
  22 | // Firestore database
  23 | 
  24 | export const db = getFirestore(app);
  25 | 
  26 | type ReferralSource = "College" | "Faculty" | "Friends" | "SocialMedia" | `Others - ${string}`
  27 | export interface RegistrationData {
  28 |   name: string;
  29 |   email: string;
  30 |   phone: string;
  31 |   institution: string;
  32 |   category: 'Undergraduate' | 'Postgraduate' | 'Research Scholar' | 'Startup/Industrial';
  33 |   paymentScreenshot: string;
  34 |   transactionId: string;
  35 |   status: 'Pending' | 'Approved' | 'Rejected' | 'Completed';
  36 |   amount: number;
  37 |   timestamp: string;
  38 |   attended: boolean;
  39 |   feedback: string;
  40 |   isKcgSudent: boolean;
  41 |   feedbackContent: string
  42 |   referralSource: ReferralSource
  43 | }
  44 | 
  45 | 
  46 | export async function saveRegistration(email: string, data: RegistrationData) {
  47 |   try {
  48 |     const registrationRef = doc(db, 'workshop1', email);
  49 |     await setDoc(registrationRef, {
  50 |       ...data,
  51 |       createdAt: new Date().toISOString(),
  52 |     }, { merge: true });
  53 |     return true;
  54 |   } catch (error) {
  55 |     console.error('Registration save error:', error);
  56 |     throw error;
  57 |   }
  58 | }
  59 | 
  60 | export async function checkRegistrationStatus(email: string): Promise<string | null> {
  61 |   try {
  62 |     const registrationRef = doc(db, 'workshop1', email);
  63 |     const docSnap = await getDoc(registrationRef);
  64 |     
  65 |     if (docSnap.exists()) {
  66 |       return docSnap.data()?.status || 'Not Found';
  67 |     }
  68 |     return null;
  69 |   } catch (error) {
  70 |     console.error('Registration status check error:', error);
  71 |     return null;
  72 |   }
  73 | }
  74 | 
  75 | export const updateRegistrationFeedback = async (
  76 |   email: string, 
  77 |   feedback: string, 
  78 |   feedbackContent: string
  79 | ) => {
  80 |   const docRef = doc(db, 'workshop1', email)
  81 |   await updateDoc(docRef, {
  82 |     feedback,
  83 |     feedbackContent,
  84 |     attendedFeedbackSubmitted: true
  85 |   })
  86 | }
```


---

## 📄 src\lib\upi-qr.ts
**hash:** `2c404848`

### Chunk 1/1

```typescript
   1 | import QRCode from 'qrcode';
   2 | 
   3 | export const generateUPIQRCode = async (
   4 |   upiId: string,
   5 |   amount: number,
   6 |   name: string
   7 | ) => {
   8 |   const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;
   9 |   try {
  10 |     const qrCode = await QRCode.toDataURL(upiUrl);
  11 |     return qrCode;
  12 |   } catch (error) {
  13 |     console.error('UPI QR Code Generation Error:', error);
  14 |     throw error;
  15 |   }
  16 | };
  17 | 
  18 | export const generateRegQR = async (
  19 |   email: string,
  20 |   name: string,
  21 |   phone: string,
  22 |   institution: string,
  23 |   category: string,
  24 |   status: string
  25 | ) => {
  26 |   const regurl = `https://datworkspace.in/dashboard/qr?email=${email}&name=${name}&phone=${phone}&institution=${institution}&category=${category}&status=${status}`;
  27 |   try {
  28 |     const qrCode = await QRCode.toDataURL(regurl);
  29 |     return qrCode;
  30 |   } catch (error) {
  31 |     console.error('Registration QR Code Generation Error:', error);
  32 |     throw error;
  33 |   }
  34 | };
```


---

## 📄 src\lib\utils.ts
**hash:** `73e1548f`

### Chunk 1/1

```typescript
   1 | import { clsx, type ClassValue } from "clsx"
   2 | import { twMerge } from "tailwind-merge"
   3 | 
   4 | export function cn(...inputs: ClassValue[]) {
   5 |   return twMerge(clsx(inputs))
   6 | }
   7 | 
```


---

## 📄 tailwind.config.ts
**hash:** `6cc975b`

### Chunk 1/1

```typescript
   1 | import type { Config } from "tailwindcss";
   2 | 
   3 | export default {
   4 |     darkMode: ["class"],
   5 |     content: [
   6 |     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
   7 |     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
   8 |     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   9 |   ],
  10 |   theme: {
  11 |   extend: {
  12 |       fontFamily: {
  13 |         display: ['Space Grotesk', 'sans-serif'],
  14 |         body: ['Manrope', 'sans-serif'],
  15 |         rajdhani: ['Rajdhani', 'sans-serif'],
  16 |       },
  17 |   colors: {
  18 |   background: 'hsl(var(--background))',
  19 |   foreground: 'hsl(var(--foreground))',
  20 |   card: {
  21 |   DEFAULT: 'hsl(var(--card))',
  22 |   foreground: 'hsl(var(--card-foreground))'
  23 |   },
  24 |   popover: {
  25 |   DEFAULT: 'hsl(var(--popover))',
  26 |   foreground: 'hsl(var(--popover-foreground))'
  27 |   },
  28 |   primary: {
  29 |   DEFAULT: 'hsl(var(--primary))',
  30 |   foreground: 'hsl(var(--primary-foreground))'
  31 |   },
  32 |   secondary: {
  33 |   DEFAULT: 'hsl(var(--secondary))',
  34 |   foreground: 'hsl(var(--secondary-foreground))'
  35 |   },
  36 |   muted: {
  37 |   DEFAULT: 'hsl(var(--muted))',
  38 |   foreground: 'hsl(var(--muted-foreground))'
  39 |   },
  40 |   accent: {
  41 |   DEFAULT: 'hsl(var(--accent))',
  42 |   foreground: 'hsl(var(--accent-foreground))'
  43 |   },
  44 |   destructive: {
  45 |   DEFAULT: 'hsl(var(--destructive))',
  46 |   foreground: 'hsl(var(--destructive-foreground))'
  47 |   },
  48 |   border: 'hsl(var(--border))',
  49 |   input: 'hsl(var(--input))',
  50 |   ring: 'hsl(var(--ring))'
  51 |   },
  52 |   borderRadius: {
  53 |   lg: 'var(--radius)',
  54 |   md: 'calc(var(--radius) - 2px)',
  55 |   sm: 'calc(var(--radius) - 4px)'
  56 |   }
  57 |   }
  58 |   },
  59 |   plugins: [require("tailwindcss-animate")],
  60 | } satisfies Config;
  61 | 
```


---

## 📄 tsconfig.json
**hash:** `741bb36c`

### Chunk 1/1

```json
   1 | {
   2 |   "compilerOptions": {
   3 |     "target": "ES2017",
   4 |     "lib": ["dom", "dom.iterable", "esnext"],
   5 |     "allowJs": true,
   6 |     "skipLibCheck": true,
   7 |     "strict": true,
   8 |     "noEmit": true,
   9 |     "esModuleInterop": true,
  10 |     "module": "esnext",
  11 |     "moduleResolution": "bundler",
  12 |     "resolveJsonModule": true,
  13 |     "isolatedModules": true,
  14 |     "jsx": "preserve",
  15 |     "incremental": true,
  16 |     "plugins": [
  17 |       {
  18 |         "name": "next"
  19 |       }
  20 |     ],
  21 |     "paths": {
  22 |       "@/*": ["./src/*"]
  23 |     }
  24 |   },
  25 |   "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  26 |   "exclude": ["node_modules"]
  27 | }
  28 | 
```

