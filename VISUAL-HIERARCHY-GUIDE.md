# NSRIT Website - Visual Hierarchy & Layout Guide

## Visual Hierarchy Levels

### Level 1: Primary Focus (Hero Section)
```
┌─────────────────────────────────────────────┐
│                                             │
│        NSRIT (8xl font-black)              │
│                                             │
│  Learn by Doing. Lead by Becoming.         │
│  (4xl-5xl with gradient highlight)         │
│                                             │
│  Supporting description text               │
│  (xl-2xl font-light gray-100)              │
│                                             │
│  [Primary Button]  [Secondary Button]      │
│                                             │
│              Scroll Indicator ↓            │
│                                             │
└─────────────────────────────────────────────┘

Importance:   CRITICAL - First impression
Positioning:  Top of page, full width
Visibility:   100% viewport, immediately visible
```

---

### Level 2: Institution Identification (Header)
```
┌─────────────────────────────────────────────┐
│  [LOGO] NSRIT              [4 Badges]       │
│         Engineering Excellence              │
│                                             │
│ 🏆 AICTE | JNTU-GV | NAAC | ISO 9001      │
└─────────────────────────────────────────────┘

Importance:   HIGH - Branding & credibility
Positioning:  Below hero, 72px height
Visibility:   Always visible (sticky potential)
```

---

### Level 3: Main Navigation (Navbar)
```
┌─────────────────────────────────────────────┐
│ [Top Bar - Info Links] ← Desktop only       │
├─────────────────────────────────────────────┤
│ [LOGO] NSRIT    [Nav Menu]    [Theme]       │
│        Excellence in Engineering             │
└─────────────────────────────────────────────┘

Importance:   HIGH - User navigation
Positioning:  Sticky, z-50, full width
Visibility:   Always accessible
Menu Items:   Home, About, Governance, etc.
```

---

### Level 4: Section Headers (2xl-4xl)
```
┌─────────────────────────────────────────────┐
│                                             │
│  Why Choose NSRIET                          │
│  (3xl-4xl font-bold text-corporate-navy)    │
│                                             │
│  Supporting paragraph                       │
│  (lg text-corporate-textSecondary)          │
│                                             │
└─────────────────────────────────────────────┘

Importance:   HIGH - Section introduction
Positioning:  Top of each section
Spacing:      mb-4 to mb-6 from title
```

---

### Level 5: Card Titles (lg-2xl)
```
┌──────────────────────┐
│  Feature Title       │  ← lg-2xl font-semibold
│  (Feature icon)      │
│                      │
│  Description text    │  ← base-lg font-light
│  showing benefits    │
└──────────────────────┘

Importance:   MEDIUM - Component focus
Positioning:  Within cards/containers
Spacing:      mb-2 to mb-4
```

---

### Level 6: Body & Label Text (base-sm)
```
Regular paragraph text providing additional
context and information. Uses font-light
or font-regular depending on emphasis.

Labels, badges, and small text:
(text-xs-sm font-semibold)

Importance:   MEDIUM - Supporting content
Usage:        Fill content areas
```

---

## Spatial Relationships

### Hero Section Spacing
```
┌──────────────────────────────────────┐
│    py-16 md:py-24                    │  ← Vertical padding
│                                       │
│  px-8                   px-8          │  ← Horizontal padding
│                                       │
│  max-w-5xl              Container     │  ← Max width constraint
│                                       │
│  Subtitle Badge         mb-6          │
│  |                                    │
│  Main Title             mb-6          │
│  |                                    │
│  Tagline                mb-8          │
│  |                                    │
│  Description            mb-10         │
│  |                                    │
│  [Buttons]              pt-4          │
│                                       │
└──────────────────────────────────────┘
```

### Section Layout
```
┌──────────────────────────────────────┐
│ py-16 md:py-24                       │  ← Section padding
│                                      │
│  section-container px-8              │  ← Container
│                                      │
│  max-w-3xl                           │
│  ├─ Heading          (mb-4 md:mb-6)  │
│  └─ Paragraph        (mb-12)         │
│                                      │
│  Grid Layout                         │
│  ├─ grid-cols-1                      │  ← Mobile
│  ├─ md:grid-cols-2                   │  ← Tablet
│  ├─ lg:grid-cols-3                   │  ← Desktop
│  └─ gap-8 md:gap-12                  │  ← Spacing
│                                      │
└──────────────────────────────────────┘
```

---

## Component Hierarchy Map

```
                    WEBPAGE
                       │
        ┌──────────────┼──────────────┐
        │              │              │
      HEADER       CONTENT        FOOTER
        │              │              │
    ┌───┴───┐     ┌────┴────┐
    │       │     │         │
NAVBAR BADGES  SECTIONS  CARDS
    │
  ┌─┴─┐
MENU  ITEMS
```

---

## Visual Weight Distribution

### High Weight Elements
```
✓ Hero Section Background     → Full color + overlay
✓ Primary Buttons             → Gradient + shadow
✓ Section Headings            → 3xl-4xl bold text
✓ Featured Images             → Large aspect ratio
✓ Main Content               → White background, shadows
```

### Medium Weight Elements
```
◆ Card Titles                → lg-2xl semibold
◆ Secondary Buttons          → Outline style
◆ Navigation Links           → Medium weight
◆ Accreditation Badges       → Colored backgrounds
```

### Low Weight Elements
```
○ Helper Text                → Small, gray, light
○ Dividers                   → Thin lines, subtle
○ Secondary Copy             → Gray-500, light weight
○ Icons (non-interactive)    → Muted colors
```

---

## Color Hierarchy

### Primary Colors (High Contrast)
```
corporate-navy (#0047BA)      → Main titles, primary actions
corporate-blue (#007ACC)      → Interactive elements
corporate-lightBlue (#2196F3) → Hover states, accents
```

### Secondary Colors (Medium Contrast)
```
white (#FFFFFF)                    → Backgrounds, text
corporate-background (#F5F7FA)     → Section backgrounds
corporate-textSecondary (#5A5A5A)  → Body text
```

### Accent Colors (Highlights)
```
accent-pink (#FF007A)    → Tagline highlights
accent-magenta (#FF1493) → Special features
```

### Low Contrast (Subtle)
```
corporate-border (#E4E7EB)  → Dividers, borders
gray-400 / gray-500        → Disabled states
```

---

## Responsive Hierarchy Adjustments

### Mobile View (<640px)
```
H1 (Hero):    5xl (48px)   ← Reduced from 8xl
H2 (Section): 2xl (24px)   ← Reduced from 4xl
H3 (Card):    lg  (18px)   ← Same
P (Body):     base (16px)  ← Same
```

**Visual Impact**: Maintained hierarchy, adjusted for smaller screens

### Tablet View (640-1024px)
```
H1 (Hero):    6xl (64px)   ← Mid-sized
H2 (Section): 3xl (30px)   ← Standard
H3 (Card):    lg  (18px)   ← Same
P (Body):     lg  (18px)   ← Slightly larger
```

**Visual Impact**: Balanced proportions for medium screens

### Desktop View (1024px+)
```
H1 (Hero):    7xl-8xl (72-96px) ← Full size
H2 (Section): 3xl-4xl (30-36px) ← Large
H3 (Card):    lg-2xl  (18-24px) ← Prominent
P (Body):     lg (18px)          ← Readable
```

**Visual Impact**: Maximum visual presence on large screens

---

## Navigation Hierarchy

### Top-Level Navigation
```
Priority: HOME > ADMISSIONS > ABOUT > ACADEMICS > GOVERNANCE

Color:     navy → blue gradient background
Size:      16px bold
Spacing:   px-3 py-2 per item
Hover:     bg-blue-50 dark:bg-gray-800/50
```

### Sub-Navigation (Dropdowns)
```
About
├─ Vision & Mission     (Most important)
├─ Management           (Leadership)
└─ Infrastructure       (Facilities)

Display:  Mega-menu, elevated shadow
Styling:  White background, rounded-xl
Spacing:  px-5 py-3 per item
Hover:    bg-blue-50 (light), bg-gray-700 (dark)
```

### Mobile Navigation
```
Structure: Hamburger menu (mobile only)
Collapse:  All items in vertical list
Submenu:   Indented below parent
Spacing:   More generous for touch targets
```

---

## Depth & Layers

### Hero Section Layers (Bottom to Top)
```
Layer 1: Background Image
Layer 2: Black Overlay (opacity 0.35)
Layer 3: Gradient from-black/70 via-black/50 to-transparent
Layer 4: Bottom gradient to-blue-900/40
Layer 5: Content (text + buttons)
Layer 6: Decorative floating elements
Layer 7: Scroll indicator (z-20)
```

### Navigation Layers
```
Layer 1: Main navbar background
Layer 2: Submenu background
Layer 3: Navigation text
Layer 4: Icons/chevrons
Layer 5: Hover states (shadow + color)
```

### Card Layers
```
Layer 1: Card background
Layer 2: Border (optional)
Layer 3: Content
Layer 4: Shadow (elevation)
Layer 5: Hover effects
```

---

## Emphasis Techniques

### Primary Emphasis
```
1. Size        → Larger text (5xl-8xl)
2. Weight      → Bold/black font weight
3. Color       → Corporate navy or blue
4. Position    → Top of page/section
5. Shadow      → Elevated shadows
6. Animation   → Entrance animations
```

### Secondary Emphasis
```
1. Color       → Slightly different hue
2. Size        → Moderate text size
3. Background  → Subtle background color
4. Border      → Optional border
5. Position    → Center of section
```

### Minimal Emphasis
```
1. Light gray  → corporate-textSecondary
2. Small size  → base or sm text
3. Light font  → font-light or font-regular
4. Inline      → Within paragraph
5. No shadow   → Flat design
```

---

## Visual Alignment

### Horizontal Alignment
```
┌─────────────────────────────────┐
│                                 │
│  Left Padding: px-8             │  Content starts here
│                                 │
│  ┌─────────────────────────┐    │
│  │                         │    │
│  │    Max Width: xl        │    │
│  │    (1280px)             │    │
│  │                         │    │
│  └─────────────────────────┘    │
│                                 │
│                    Right Padding: px-8
│                                 │
└─────────────────────────────────┘
```

### Vertical Alignment
```
Section 1 (py-16)          ← Top padding
├─ Content area
└─ Bottom padding          ← py-16

Section 2 (py-16)          ← Top padding
├─ Content area
└─ Bottom padding          ← py-16

Total gap between sections: py-16 + py-16 = 128px
```

---

## Focus & Attention

### Primary Call-to-Action (Hero)
```
Characteristics:
├─ Gradient button (blue-500 → blue-600)
├─ Padding: px-8 py-4
├─ Font: bold (font-bold)
├─ Hover: scale-110, shadow-2xl
├─ Icon: Right-aligned arrow
└─ Color: White text

Result: ~140-150px total width, high contrast
```

### Secondary Call-to-Action (Hero)
```
Characteristics:
├─ Transparent with border (white/15)
├─ Padding: px-8 py-4
├─ Font: semibold (font-semibold)
├─ Hover: bg-white/25, enhanced border
├─ No icon
└─ Color: White text

Result: ~120px width, medium contrast
```

---

## Motion & Animation Hierarchy

### High-Priority Animations (Entrance)
```
1. Fade In       (entrance, 0.6s)
2. Slide Up      (entrance, 0.6s)
3. Stagger       (0.15s delay per child)
→ Used for: Main content, hero text, section headers
```

### Medium-Priority Animations (Interaction)
```
1. Hover Scale   (200-300ms)
2. Color Change  (200-300ms)
3. Shadow Lift   (200-300ms)
→ Used for: Buttons, cards, links
```

### Low-Priority Animations (Decoration)
```
1. Float Motion  (8-10s loop)
2. Pulse         (2s loop)
3. Rotate        (180° on hover)
→ Used for: Decorative elements, icons
```

---

## Accessibility Hierarchy

### Critical (Must Have)
```
✓ Color contrast 4.5:1 (text)
✓ Semantic HTML
✓ ARIA labels on buttons
✓ Alt text on images
✓ Keyboard navigation
✓ Focus indicators
```

### Important (Should Have)
```
◆ Focus ring styling
◆ Skip to main content
◆ Form labels properly associated
◆ Error message clarity
◆ Loading state indicators
```

### Nice to Have (Enhancement)
```
○ Animation preference respects prefers-reduced-motion
○ High contrast mode support
○ Text scaling (up to 200%)
○ Language alternatives
○ Extended color palette options
```

---

## Practical Application Examples

### Homepage Hero
```
┌─────────────────────────────────────┐
│ [Background Image]                  │
│                                     │
│  Subtitle Badge (text-sm)           │
│  │                                  │
│  NSRIT (text-8xl font-black)        │
│  │                                  │
│  Learn by Doing...                  │
│  (text-5xl font-bold)               │
│  │                                  │
│  Supporting description             │
│  (text-2xl font-light)              │
│  │                                  │
│  [Primary CTA] [Secondary CTA]      │
│                                     │
│  ↓ Scroll Indicator                 │
│                                     │
└─────────────────────────────────────┘

Min Height: 650px (mobile)
           750px (tablet)
           800px (desktop)
```

### Features Section
```
┌─────────────────────────────────────┐
│ py-16 md:py-24                      │
│                                     │
│ Why Choose NSRIET (text-3xl)        │
│ Subtitle paragraph (text-lg)        │
│                                     │
│ ┌─────────┐ ┌─────────┐ ┌────────┐ │
│ │ Card 1  │ │ Card 2  │ │ Card 3 │ │
│ │         │ │         │ │        │ │
│ │ Icon    │ │ Icon    │ │ Icon   │ │
│ │ Title   │ │ Title   │ │ Title  │ │
│ │ Desc    │ │ Desc    │ │ Desc   │ │
│ └─────────┘ └─────────┘ └────────┘ │
│                                     │
│ gap-6 md:gap-8                      │
│                                     │
└─────────────────────────────────────┘
```

---

## Quick Reference Checklist

When designing new sections:

- [ ] Use appropriate heading size (H1-H6)
- [ ] Set proper vertical spacing (py-16 or py-24)
- [ ] Apply horizontal padding (px-8)
- [ ] Use color hierarchy (navy > blue > gray)
- [ ] Add hover/focus states
- [ ] Test on 3 breakpoints (mobile, tablet, desktop)
- [ ] Check color contrast (4.5:1 min)
- [ ] Add alt text to images
- [ ] Include ARIA labels where needed
- [ ] Test keyboard navigation
- [ ] Verify dark mode appearance
- [ ] Check animation performance
- [ ] Ensure responsive images
- [ ] Validate semantic HTML

---

*Last Updated: November 9, 2025*
