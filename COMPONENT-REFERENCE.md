# 🧩 Component Reference Guide

Quick reference for all reusable components in the NSRIT website.

---

## 1. InstitutionHeader

**Purpose**: Displays institutional branding and accreditations at the top of every page.

**File**: `components/InstitutionHeader.tsx`

### Props
None required - uses internal configuration.

### Example
```tsx
import InstitutionHeader from '@/components/InstitutionHeader';

export default function Layout() {
  return (
    <>
      <InstitutionHeader />
      {/* Rest of layout */}
    </>
  );
}
```

### Customization
Edit the `accreditations` array in the component:
```tsx
const accreditations: AccreditationLogo[] = [
  { name: 'AICTE', alt: 'AICTE Approved', width: 60, height: 60 },
  { name: 'JNTU', alt: 'JNTU-GV Affiliated', width: 60, height: 60 },
  { name: 'NAAC', alt: 'NAAC Accredited', width: 60, height: 60 },
  // Add more as needed
];
```

### Styling Notes
- Uses `section-container` for max-width
- Dark mode compatible
- Responsive padding adjusts on mobile
- Accreditations scroll horizontally on mobile

---

## 2. HeroSection

**Purpose**: Full-featured hero banner with background image, text overlay, and CTAs.

**File**: `components/HeroSection.tsx`

### Props

```typescript
interface HeroSectionProps {
  title: string;                    // Required: Main heading
  subtitle?: string;                // Optional: Small badge/label above title
  description?: string;             // Optional: Supporting text
  primaryCTA?: {
    text: string;
    href: string;
  };                               // Optional: Main action button
  secondaryCTA?: {
    text: string;
    href: string;
  };                               // Optional: Secondary action button
  backgroundImage?: string;         // Default: '/hero-bg.png'
  height?: string;                  // Default: 'min-h-[600px] md:min-h-[700px]'
  overlayOpacity?: number;          // Default: 0.4 (range: 0-1)
}
```

### Examples

**Homepage Hero (Full Featured)**
```tsx
<HeroSection
  title="NSRIT Engineering College"
  subtitle="Excellence in Technical Education"
  description="Empowering the Next Generation of Engineering Leaders Through Innovation, Research, and Industry Collaboration"
  backgroundImage="/hero-bg.png"
  overlayOpacity={0.4}
  primaryCTA={{
    text: 'Apply for Admission',
    href: '/admissions',
  }}
  secondaryCTA={{
    text: 'Explore Programs',
    href: '/academics',
  }}
/>
```

**About Page Hero (Minimal)**
```tsx
<HeroSection
  title="About NSRIT"
  subtitle="Our Institution"
  description="A legacy of excellence in engineering education, committed to producing skilled professionals and innovative leaders."
  backgroundImage="/hero-bg.png"
  overlayOpacity={0.5}
/>
```

**Simple Hero (Title Only)**
```tsx
<HeroSection
  title="Page Title Here"
  backgroundImage="/path/to/image.png"
/>
```

### Features
- ✅ Responsive typography (scales from mobile to desktop)
- ✅ Staggered animations with Framer Motion
- ✅ Floating decorative elements
- ✅ Flexible overlay opacity
- ✅ Dark mode support
- ✅ Accessibility compliant
- ✅ SEO-optimized

### Customization

**Change Hero Height:**
```tsx
<HeroSection
  height="min-h-[400px] md:min-h-[500px]"
  // ... other props
/>
```

**Adjust Text Overlay:**
```tsx
<HeroSection
  overlayOpacity={0.6}  // Darker overlay for readability
  // ... other props
/>
```

**Custom Background:**
```tsx
<HeroSection
  backgroundImage="/campus-photo.png"
  // ... other props
/>
```

### Typography Scaling
| Screen | Title Size | Description Size |
|--------|-----------|-----------------|
| Mobile | text-4xl | text-lg |
| Tablet | text-5xl | text-lg-xl |
| Desktop | text-6xl | text-xl-2xl |
| Large | text-7xl | text-2xl |

---

## 3. AnimatedSection

**Purpose**: Wraps content with staggered fade-in animation.

**File**: `components/AnimatedSection.tsx`

### Props
```tsx
interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;  // Additional delay in seconds
}
```

### Usage
```tsx
<AnimatedSection delay={0.2}>
  <h2>Animated Heading</h2>
  <p>This content fades in smoothly.</p>
</AnimatedSection>
```

---

## 4. ImageGallery

**Purpose**: Responsive grid gallery with lightbox modal.

**File**: `components/ImageGallery.tsx`

### Props
```tsx
interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  columns?: number;  // Default: 3 (responsive)
}
```

### Usage
```tsx
const images = [
  { src: '/image1.jpg', alt: 'Description 1', title: 'Title 1' },
  { src: '/image2.jpg', alt: 'Description 2', title: 'Title 2' },
  // ... more images
];

<ImageGallery images={images} columns={3} />
```

---

## 5. EventCarousel

**Purpose**: Auto-sliding carousel for events/announcements.

**File**: `components/EventCarousel.tsx`

### Props
```tsx
interface EventCarouselProps {
  events: Array<{
    date: string;
    title: string;
    description: string;
    category: string;
    image: string;
  }>;
  autoSlide?: boolean;     // Default: true
  interval?: number;       // Default: 5000 (ms)
}
```

### Usage
```tsx
const events = [
  {
    date: '15 DEC 2024',
    title: 'Campus Placement Drive',
    description: 'Leading companies recruiting...',
    category: 'Placements',
    image: 'https://unsplash.com/...',
  },
  // ... more events
];

<EventCarousel events={events} autoSlide={true} interval={7000} />
```

---

## 6. CourseCard

**Purpose**: Displays academic program with image, details, and CTA.

**File**: `components/CourseCard.tsx`

### Props
```tsx
interface CourseCardProps {
  name: string;
  code: string;
  duration: string;
  seats: number;
  eligibility: string;
  image: string;
  index?: number;
}
```

### Usage
```tsx
<CourseCard
  name="Computer Science & Engineering"
  code="CSE"
  duration="4 Years"
  seats={180}
  eligibility="Minimum 60% in 10+2..."
  image="https://unsplash.com/..."
  index={0}
/>
```

---

## 7. AnimatedCounter

**Purpose**: Animated numeric counter for statistics.

**File**: `components/AnimatedCounter.tsx`

### Props
```tsx
interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}
```

### Usage
```tsx
<div className="text-4xl font-bold">
  <AnimatedCounter end={5000} suffix="+" />
</div>
```

---

## 8. NotificationTicker

**Purpose**: Horizontal scrolling notification banner.

**File**: `components/NotificationTicker.tsx`

### Props
None required.

### Features
- Auto-scrolling announcements
- Multiple notification support
- Fully responsive

### Usage
```tsx
<NotificationTicker />
```

---

## 9. Navbar

**Purpose**: Main navigation with responsive menu and theme toggle.

**File**: `components/Navbar.tsx`

### Features
- ✅ Desktop dropdown menus
- ✅ Mobile hamburger menu
- ✅ Theme toggle (light/dark)
- ✅ Sticky on scroll
- ✅ Quick links in header

### Navigation Structure
Customize in the component:
```tsx
const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'Vision & Mission', href: '/about#vision' },
      // ... more items
    ],
  },
  // ... more links
];
```

---

## 10. Footer

**Purpose**: Site footer with links, contact info, and legal.

**File**: `components/Footer.tsx`

### Features
- ✅ Multi-column layout
- ✅ Contact information
- ✅ Social media links
- ✅ Dark mode support

---

## 11. PartnerLogos

**Purpose**: Grid of partner/sponsor logos with hover effects.

**File**: `components/PartnerLogos.tsx`

### Props
```tsx
interface PartnerLogosProps {
  partners: Array<{
    name: string;
    logo: string;
    href?: string;
  }>;
}
```

### Usage
```tsx
const partners = [
  { name: 'Company A', logo: '/logo-a.png', href: '#' },
  { name: 'Company B', logo: '/logo-b.png', href: '#' },
];

<PartnerLogos partners={partners} />
```

---

## 12. FeedbackForm

**Purpose**: User feedback submission form.

**File**: `components/FeedbackForm.tsx`

### Features
- ✅ Multi-field form
- ✅ Validation
- ✅ Success messaging
- ✅ Dark mode

---

## Component Composition Examples

### Full Page Example
```tsx
'use client';

import HeroSection from '@/components/HeroSection';
import AnimatedSection from '@/components/AnimatedSection';
import ImageGallery from '@/components/ImageGallery';

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Campus Gallery"
        subtitle="Visual Tour"
        description="Explore our state-of-the-art infrastructure..."
      />

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="section-container px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">Our Facilities</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ImageGallery images={galleryImages} columns={3} />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
```

---

## Styling Utilities

### Common TailwindCSS Classes Used

**Containers:**
```tsx
className="section-container px-8"
```

**Typography:**
```tsx
className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white"
```

**Spacing:**
```tsx
className="py-16 md:py-24 gap-6 md:gap-8"
```

**Colors:**
```tsx
className="bg-corporate-background dark:bg-gray-800"
className="border border-corporate-border dark:border-gray-700"
```

**Hover Effects:**
```tsx
className="hover:shadow-lg transition-shadow"
className="hover:scale-105 transition-transform"
```

---

## Animation Patterns

### Fade In with Stagger
```tsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {children.map((child, i) => (
    <motion.div key={i} variants={itemVariants}>
      {child}
    </motion.div>
  ))}
</motion.div>
```

### Simple Fade In
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Slide In
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

---

## Best Practices

### Do ✅
- Use semantic HTML (`<section>`, `<article>`, `<header>`)
- Add descriptive alt text to images
- Use proper heading hierarchy (h1 → h2 → h3)
- Keep animations subtle (300-600ms)
- Test responsiveness on all breakpoints
- Use dark mode safe colors

### Don't ❌
- Use excessive animations
- Skip alt text on images
- Nest components too deeply
- Use inline styles
- Override Tailwind classes without need
- Skip accessibility considerations

---

## Import Examples

```tsx
// Components
import HeroSection from '@/components/HeroSection';
import ImageGallery from '@/components/ImageGallery';
import EventCarousel from '@/components/EventCarousel';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';

// Lucide Icons
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Next.js
import Link from 'next/link';
import Image from 'next/image';
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Hero image not loading | Check `/public` folder, verify file path |
| Animations choppy | Reduce animation duration, check browser performance |
| Dark mode not working | Clear localStorage, check theme provider |
| Text hard to read on hero | Increase `overlayOpacity` value |
| Mobile menu not closing | Check `setIsMenuOpen(false)` in onClick |
| Components not animating | Ensure Framer Motion is installed |

---

## Performance Tips

1. **Use Next.js Image component** for all images
2. **Lazy load** below-fold content
3. **Use priority={true}** only on above-fold images
4. **Keep animations under 600ms** duration
5. **Use `will-change` sparingly** for GPU acceleration
6. **Test with Lighthouse** regularly
7. **Minimize external dependencies**

---

## Accessibility Checklist

- [ ] Proper heading hierarchy
- [ ] Descriptive alt text on images
- [ ] ARIA labels on buttons
- [ ] Focus indicators visible
- [ ] Color contrast ≥ 4.5:1
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] No auto-playing videos/audio

---

**Last Updated**: November 2024  
**Version**: 2.0

---

*For more details, refer to individual component files in `/components/` directory.*
