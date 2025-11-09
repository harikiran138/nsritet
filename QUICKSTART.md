# 🚀 Quick Start Guide

Get up and running with the new NSRIT website components in 5 minutes.

---

## Installation & Setup

### Prerequisites
```bash
Node.js 18+
npm or yarn
```

### Clone & Install
```bash
git clone https://github.com/harikiran138/nsritet.git
cd nsritet
npm install
```

### Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000 to see the site in action.

---

## Using the New Components

### 1. HeroSection - The Easy Way

```tsx
import HeroSection from '@/components/HeroSection';

export default function MyPage() {
  return (
    <HeroSection
      title="Page Title Here"
      subtitle="Optional subtitle"
      description="Optional description text"
      backgroundImage="/path/to/image.png"
      primaryCTA={{
        text: 'Button Text',
        href: '/link',
      }}
    />
  );
}
```

**That's it!** No need to write 50+ lines of hero code anymore.

### 2. InstitutionHeader - Automatic

The institutional header is automatically displayed on every page. It's already added to `app/layout.tsx`.

No additional setup needed!

---

## Common Customizations

### Change Hero Title Size

By default, the hero title is `text-7xl` on large screens.

To make it smaller:
```tsx
// Inside HeroSection component, modify:
className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-6 text-white"
//        ↑ Change text-4xl to suit your needs
```

### Add More Accreditation Badges

Edit `/components/InstitutionHeader.tsx`:

```tsx
const accreditations: AccreditationLogo[] = [
  { name: 'AICTE', alt: 'AICTE Approved', width: 60, height: 60 },
  { name: 'JNTU', alt: 'JNTU-GV Affiliated', width: 60, height: 60 },
  { name: 'NAAC', alt: 'NAAC Accredited', width: 60, height: 60 },
  // ADD HERE:
  { name: 'NEW_BADGE', alt: 'New Certification', width: 60, height: 60 },
];
```

### Adjust Hero Overlay Darkness

```tsx
<HeroSection
  overlayOpacity={0.5}  // 0 = transparent, 1 = completely black
  // ... other props
/>
```

### Change Button Colors

Edit `/components/HeroSection.tsx` button classes:

```tsx
// Primary button (main CTA)
className="... bg-corporate-blue hover:bg-blue-700 ..."

// Secondary button
className="... bg-white/10 hover:bg-white/20 ..."
```

---

## File Structure

```
nsritet/
├── app/
│   ├── layout.tsx                 ← InstitutionHeader imported here
│   ├── page.tsx                   ← Homepage uses HeroSection
│   ├── about/page.tsx             ← About page uses HeroSection
│   ├── admissions/page.tsx        ← Admissions uses HeroSection
│   └── [other pages]/
├── components/
│   ├── InstitutionHeader.tsx      ← NEW: Institutional header
│   ├── HeroSection.tsx            ← NEW: Hero banner component
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── [other components]/
├── public/
│   ├── hero-bg.png                ← Hero background image
│   ├── main-logo1.png             ← College logo
│   └── [other images]/
├── tailwind.config.ts             ← Updated with scrollbar-hide
├── package.json
└── [config files]/
```

---

## Common Tasks

### Add HeroSection to New Page

```tsx
'use client';

import HeroSection from '@/components/HeroSection';
import AnimatedSection from '@/components/AnimatedSection';

export default function NewPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="New Page Title"
        subtitle="Subtitle"
        description="Description text..."
        backgroundImage="/hero-bg.png"
      />

      {/* Your content sections */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="section-container px-8">
          <AnimatedSection>
            <h2>Content Section</h2>
            {/* ... */}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
```

### Update Meta Tags

In any `page.tsx` file:

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title - NSRIET',
  description: 'Page description for SEO',
  keywords: 'keyword1, keyword2, keyword3',
};
```

### Change Hero Background

```tsx
<HeroSection
  backgroundImage="/your-custom-image.png"  // Change this
  // ... other props
/>
```

### Add Dark Mode Support

All new components are dark mode ready! Just use TailwindCSS dark: prefix:

```tsx
className="bg-white dark:bg-gray-900"
className="text-gray-700 dark:text-gray-200"
```

---

## Styling Guide

### Colors Available

```tsx
// Primary colors
bg-corporate-navy          // #002B5B (dark blue)
bg-corporate-blue          // #007ACC (professional blue)
bg-corporate-background    // #F5F7FA (light background)

// Text colors
text-corporate-navy        // Dark text
text-corporate-textSecondary  // Gray text

// Dark mode (automatic)
dark:bg-gray-900
dark:text-white
dark:border-gray-700
```

### Spacing System

```tsx
// Padding
p-4    p-6    p-8      // Small, medium, large padding
px-8   py-16  py-24    // Horizontal/vertical

// Margins
m-4    m-6    m-8
mx-auto        // Center horizontally

// Gaps (grid/flex)
gap-4  gap-6  gap-8
```

### Typography

```tsx
// Sizes
text-xs   text-sm   text-base   text-lg   text-xl
text-2xl  text-3xl  text-4xl    text-5xl  text-6xl
text-7xl  // Use for hero titles

// Weights
font-light      // 300
font-normal     // 400
font-semibold   // 600
font-bold       // 700
```

---

## Testing

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Check for Errors
```bash
npm run lint
```

---

## Deployment

### Build Locally
```bash
npm run build
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
The build output is in `.next/` directory. Most platforms support Next.js directly.

---

## Troubleshooting

### Issue: Hero image not showing
**Solution:**
1. Check image exists in `/public/` folder
2. Verify correct file path in component
3. Try different image format (PNG vs JPG)

### Issue: Animations not working
**Solution:**
1. Check Framer Motion is installed: `npm list framer-motion`
2. Verify component uses `motion` wrapper
3. Check browser supports WebGL (most do)

### Issue: Dark mode not toggling
**Solution:**
1. Clear browser LocalStorage: F12 → Application → LocalStorage → Clear
2. Hard refresh page: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. Check `ThemeProvider` is in layout

### Issue: TypeScript errors
**Solution:**
```bash
npm run build  # Check full errors
# Fix any type mismatches shown
npm run dev    # Retry
```

---

## Next Steps

1. **Read Documentation**
   - Full API: `DESIGN-ENHANCEMENTS-v2.md`
   - Component Reference: `COMPONENT-REFERENCE.md`
   - Implementation Details: `IMPLEMENTATION-SUMMARY.md`

2. **Customize Content**
   - Update college name in InstitutionHeader
   - Add real accreditation logos
   - Replace demo images with campus photos
   - Update contact information in Footer

3. **Test Everything**
   - Test on mobile device
   - Check all links work
   - Verify dark mode
   - Test forms

4. **Deploy**
   - Build locally: `npm run build`
   - Deploy to Vercel/hosting platform
   - Monitor performance with Lighthouse

---

## Key Files to Know

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout (InstitutionHeader is here) |
| `components/HeroSection.tsx` | Reusable hero component |
| `components/InstitutionHeader.tsx` | Institutional header |
| `tailwind.config.ts` | Tailwind configuration |
| `app/page.tsx` | Homepage |
| `app/globals.css` | Global styles |

---

## Pro Tips 💡

1. **Use `npm run dev`** while developing for hot reload
2. **Test dark mode** by toggling theme button
3. **Check responsiveness** using browser DevTools (F12)
4. **Use `priority={true}`** on above-fold images only
5. **Keep animations under 600ms** for smooth performance
6. **Test accessibility** with keyboard navigation (Tab key)

---

## Getting Help

### Documentation
- **Component API**: See `COMPONENT-REFERENCE.md`
- **Design System**: See `CORPORATE-DESIGN-SYSTEM.md`
- **Examples**: Check existing pages in `/app/`

### Code Examples
All new components include JSDoc comments. Hover over imports in your editor for inline help.

### Community
- Next.js: https://nextjs.org/docs
- TailwindCSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |
| IE 11 | ❌ Not supported |

---

## Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse | > 90 | ✅ Passing |
| First Load JS | < 160kB | ✅ 155kB |
| LCP | < 2.5s | ✅ Optimized |
| CLS | < 0.1 | ✅ Optimized |

---

## Version Info

```
Next.js: 15.5.6
React: 19.0.0
TailwindCSS: 3.4.17
Framer Motion: 11.15.0
TypeScript: 5.6.2
```

---

## Quick Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run lint             # Check code quality

# Useful
npm list framer-motion   # Check package version
npm update               # Update dependencies
npm install              # Install all packages
```

---

## What's New?

✨ **November 2024 Release**

- ✅ HeroSection component (reusable, configurable)
- ✅ InstitutionHeader component (institutional branding)
- ✅ Updated Homepage, About, Admissions pages
- ✅ Enhanced typography and animations
- ✅ Full dark mode support
- ✅ Comprehensive documentation
- ✅ Accessibility improvements

---

## Questions?

Refer to:
1. Component JSDoc comments in source files
2. `COMPONENT-REFERENCE.md` for API details
3. `DESIGN-ENHANCEMENTS-v2.md` for full documentation
4. Existing page examples in `/app/`

---

**Ready to build something amazing? Let's go!** 🚀

*Last Updated: November 9, 2024*
