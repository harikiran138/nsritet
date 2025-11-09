# NSRIT Design Tokens & Component Library

## Quick Reference Guide

### Color Palette

#### Primary Colors
```css
--color-navy:       #0047BA (Corporate Navy - Primary)
--color-blue:       #007ACC (Corporate Blue - Secondary)
--color-light-blue: #2196F3 (Light Blue - Tertiary)
```

#### Accent Colors
```css
--color-pink:      #FF007A (Magenta)
--color-magenta:   #FF1493 (Hot Pink)
```

#### Neutral Colors
```css
--color-white:           #FFFFFF
--color-background:      #F5F7FA (Light Gray Background)
--color-text-primary:    #1A1A1A (Dark Text)
--color-text-secondary:  #5A5A5A (Gray Text)
--color-border:          #E4E7EB (Light Border)
--color-gray-50:         #F9FAFB
--color-gray-100:        #F3F4F6
--color-gray-900:        #111827 (Dark Mode)
```

#### Usage Examples
```tsx
// Primary actions
className="bg-corporate-navy text-white"

// Secondary buttons
className="border border-corporate-blue"

// Background sections
className="bg-corporate-background"

// Text hierarchy
className="text-corporate-navy" // Primary
className="text-corporate-textSecondary" // Secondary

// Accent highlights
className="text-accent-pink"
```

---

## Typography System

### Font Weights
```
Light:     300 (--font-light)
Regular:   400 (--font-regular)
Semibold:  600 (--font-semibold)
Bold:      700 (--font-bold)
Black:     900 (--font-black)
```

### Font Sizes
```
xs:   0.75rem   (12px)
sm:   0.875rem  (14px)
base: 1rem      (16px)
lg:   1.125rem  (18px)
xl:   1.25rem   (20px)
2xl:  1.5rem    (24px)
3xl:  1.875rem  (30px)
4xl:  2.25rem   (36px)
5xl:  3rem      (48px)
6xl:  3.75rem   (60px)
7xl:  4.5rem    (72px)
8xl:  6rem      (96px)
```

### Component Typography
```tsx
// Hero Title
<h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black">
  NSRIT
</h1>

// Section Heading
<h2 className="text-3xl md:text-4xl font-bold">
  Section Title
</h2>

// Card Heading
<h3 className="text-lg md:text-xl font-semibold">
  Card Title
</h3>

// Body Text
<p className="text-base md:text-lg font-light">
  Body text with light weight for readability
</p>

// Label/Badge
<span className="text-xs md:text-sm font-semibold">
  Badge Text
</span>
```

---

## Spacing System

### Spacing Values
```
0:    0rem      (0px)
1:    0.25rem   (4px)
2:    0.5rem    (8px)
3:    0.75rem   (12px)
4:    1rem      (16px)
5:    1.25rem   (20px)
6:    1.5rem    (24px)
8:    2rem      (32px)
10:   2.5rem    (40px)
12:   3rem      (48px)
14:   3.5rem    (56px)
16:   4rem      (64px)
20:   5rem      (80px)
24:   6rem      (96px)
```

### Component Spacing Patterns
```tsx
// Section Padding
<section className="py-16 md:py-24">

// Container Padding
<div className="px-8">

// Card Padding
<div className="p-6 md:p-8">

// Gap Between Items
<div className="gap-6 md:gap-8 lg:gap-12">

// Margin Below Heading
<h2 className="mb-4 md:mb-6">

// Margin Below Section
<section className="mb-12 md:mb-16">
```

---

## Shadow System

### Shadow Levels
```css
shadow-sm:  0 1px 2px 0 rgba(0, 0, 0, 0.05)
shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.1)
shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1)
shadow-xl:  0 20px 25px -5px rgba(0, 0, 0, 0.1)
shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

### Usage in Components
```tsx
// Subtle elevation
<div className="shadow-sm">

// Medium elevation (cards)
<div className="shadow-md hover:shadow-lg transition-shadow">

// Strong elevation (modals)
<div className="shadow-2xl">
```

---

## Border Radius System

### Radius Values
```
none:  0
sm:    0.375rem  (6px)
md:    0.5rem    (8px)
lg:    0.75rem   (12px)
xl:    1rem      (16px)
2xl:   1.5rem    (24px)
full:  9999px    (circular)
```

### Component Radius
```tsx
// Buttons & Small Elements
className="rounded-lg" // 12px

// Cards & Containers
className="rounded-xl" // 16px

// Icons & Badges
className="rounded-full" // Circular

// Larger Components
className="rounded-2xl" // 24px
```

---

## Button Styles

### Primary Button
```tsx
<button className="
  px-8 py-4
  bg-gradient-to-r from-blue-500 to-blue-600
  text-white font-bold
  rounded-lg
  hover:shadow-2xl hover:scale-110
  transition-all duration-300
">
  Primary Action
</button>
```

### Secondary Button
```tsx
<button className="
  px-8 py-4
  bg-white/15 text-white
  border-2 border-white/40
  rounded-lg
  hover:bg-white/25 hover:border-white/60
  backdrop-blur-sm
  transition-all duration-300
">
  Secondary Action
</button>
```

### Text Button
```tsx
<button className="
  text-corporate-blue font-semibold
  hover:text-corporate-navy
  transition-colors
">
  Text Link
</button>
```

---

## Card Components

### Basic Card
```tsx
<div className="
  bg-white dark:bg-gray-800
  border border-corporate-border dark:border-gray-700
  rounded-xl
  p-6 md:p-8
  shadow-md hover:shadow-lg
  transition-all
">
  {/* Content */}
</div>
```

### Featured Card (with Image)
```tsx
<div className="
  bg-white dark:bg-gray-800
  rounded-xl
  overflow-hidden
  shadow-lg hover:shadow-xl
  transition-all
  hover:-translate-y-2
">
  <img className="w-full h-48 object-cover" />
  <div className="p-6">
    {/* Content */}
  </div>
</div>
```

---

## Input & Form Elements

### Text Input
```tsx
<input
  className="
    w-full
    px-4 py-3
    border border-corporate-border
    rounded-lg
    focus:outline-none focus:ring-2 focus:ring-corporate-blue
    dark:bg-gray-800 dark:border-gray-600
  "
  placeholder="Enter text..."
/>
```

### Select/Dropdown
```tsx
<select className="
  w-full
  px-4 py-3
  border border-corporate-border
  rounded-lg
  appearance-none
  cursor-pointer
  dark:bg-gray-800
">
  <option>Select option</option>
</select>
```

### Checkbox
```tsx
<label className="flex items-center gap-2">
  <input type="checkbox" className="w-5 h-5 rounded" />
  <span className="text-corporate-textSecondary">
    Checkbox label
  </span>
</label>
```

---

## Responsive Breakpoints

### Mobile First Approach
```tsx
// Base (mobile): < 640px
className="text-base" // 16px

// sm: 640px+
className="sm:text-lg" // 18px

// md: 768px+
className="md:text-xl" // 20px

// lg: 1024px+
className="lg:text-2xl" // 24px

// xl: 1280px+
className="xl:text-3xl" // 30px

// 2xl: 1536px+
className="2xl:text-4xl" // 36px
```

### Grid Layouts
```tsx
// Mobile: 1 column
<div className="grid grid-cols-1">

// Tablet+: 2 columns
<div className="grid grid-cols-1 md:grid-cols-2">

// Desktop+: 3-4 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

---

## Animation & Transition Utilities

### Duration
```
100: 100ms (quick feedback)
200: 200ms (standard)
300: 300ms (default)
500: 500ms (smooth)
700: 700ms (slow)
1000: 1000ms (very slow)
```

### Easing Functions
```
ease-out:    cubic-bezier(0, 0, 0.2, 1) - Entrance
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1) - Continuous
ease-in:     cubic-bezier(0.4, 0, 1, 1) - Exit
linear:      linear - Infinite loops
```

### Common Patterns
```tsx
// Hover Scale & Shadow
className="hover:shadow-lg hover:scale-105 transition-all duration-300"

// Hover Color
className="hover:text-corporate-blue transition-colors duration-200"

// Hover Translate
className="hover:-translate-y-2 transition-transform duration-300"

// Fade In
className="animate-fade-in"

// Slide Up
className="animate-slide-up"
```

---

## Dark Mode Classes

### Color Inversion
```tsx
// Light mode → Dark mode
className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-white
  border-gray-200 dark:border-gray-700
"

// Text colors
className="
  text-corporate-navy dark:text-white
  text-corporate-textSecondary dark:text-gray-400
"

// Background
className="
  bg-corporate-background dark:bg-gray-800
"
```

---

## Accessibility Classes

### Focus States
```tsx
className="
  focus:outline-none
  focus:ring-2
  focus:ring-corporate-blue
  focus:ring-offset-2
"
```

### Screen Reader Only
```tsx
<span className="sr-only">Hidden from visual users</span>
```

### Skip Links
```tsx
<a href="#main" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

## Hero Section Template

```tsx
<HeroSection
  title="NSRIT"
  subtitle="Excellence in Technical Education"
  tagline="Learn by Doing. Lead by Becoming."
  showTagline={true}
  description="Empowering the Next Generation of Engineering Leaders"
  backgroundImage="/hero-bg.png"
  overlayOpacity={0.35}
  primaryCTA={{
    text: 'Apply Now',
    href: '/admissions'
  }}
  secondaryCTA={{
    text: 'Explore',
    href: '/academics'
  }}
/>
```

---

## Navigation Template

```tsx
const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'Vision & Mission', href: '/about#vision' },
      { name: 'Management', href: '/about#management' },
    ],
  },
  // More links...
];
```

---

## Component Reusability Examples

### Styled Badge
```tsx
<span className="
  inline-block
  px-3 py-1
  bg-blue-100 dark:bg-blue-900
  text-corporate-blue dark:text-blue-200
  rounded-full
  text-xs font-semibold
">
  Badge Text
</span>
```

### Icon Wrapper
```tsx
<div className="
  w-12 h-12
  bg-corporate-background dark:bg-gray-800
  rounded-lg
  flex items-center justify-center
">
  <Icon className="w-6 h-6 text-corporate-blue" />
</div>
```

### Section Container
```tsx
<section className="py-16 md:py-24 bg-white dark:bg-gray-900">
  <div className="section-container px-8">
    {/* Content */}
  </div>
</section>
```

---

## Utility Classes Reference

### Display & Visibility
```
flex, grid, hidden, block, inline, inline-block
```

### Positioning
```
relative, absolute, fixed, sticky, top, left, right, bottom
```

### Sizing
```
w-full, h-full, min-h-screen, max-w-4xl
```

### Text Alignment
```
text-left, text-center, text-right, justify-between, items-center
```

### Overflow
```
overflow-hidden, overflow-auto, truncate, line-clamp-2
```

---

## Quick Copy-Paste Components

### Call-to-Action Section
```tsx
<section className="py-16 md:py-24 bg-corporate-navy">
  <div className="section-container px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Ready to Join?
    </h2>
    <p className="text-gray-200 mb-8 text-lg">
      Take the first step towards your future.
    </p>
    <a
      href="/admissions"
      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl transition-all"
    >
      Apply Now
    </a>
  </div>
</section>
```

### Feature Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {features.map((feature) => (
    <div
      key={feature.title}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
    >
      <feature.icon className="w-12 h-12 text-corporate-blue mb-4" />
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-corporate-textSecondary dark:text-gray-400">
        {feature.description}
      </p>
    </div>
  ))}
</div>
```

---

## Verifying Implementation

### Checklist
- [ ] All colors match the palette
- [ ] Typography follows the scale
- [ ] Spacing uses the system values
- [ ] Shadows are from the defined levels
- [ ] Border radius uses consistent values
- [ ] Animations have proper durations
- [ ] Dark mode works on all components
- [ ] Responsive breakpoints are correct
- [ ] Accessibility features are present
- [ ] Components are reusable and composable

---

*Last Updated: November 9, 2025*
