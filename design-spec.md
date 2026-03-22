# Design Specification — Feifei Deng Portfolio

> **Personality:** Thoughtful, Creative, Technical, Craft-focused  
> **Direction:** Minimal structure with personality-driven details  
> **Audience:** Design hiring managers, recruiters, peers in UX/HRI/robotics

---

## 1. Typography

A serif + sans-serif pairing that signals craft and intentionality.

### Recommended Pairing

| Role | Font | Fallback | Weight |
|------|------|----------|--------|
| Display / Headings | **DM Serif Display** | Georgia, serif | 400 |
| Body / UI | **Inter** | system-ui, sans-serif | 300, 400, 500, 600 |
| Monospace (tags, metadata) | **JetBrains Mono** | monospace | 400 |

**Why this pairing:** You already explored DM Serif Display in effect006.html and it has beautiful character. Inter is clean and highly legible. The contrast between a warm serif and a geometric sans says "I care about typography" without being flashy.

**Alternative pairings to consider:**
- **Fraunces** (quirky optical-size serif) + **DM Sans** — warmer, more playful
- **Playfair Display** + **Source Sans 3** — more classic editorial
- **Space Grotesk** (mono only heading) + **Inter** — more technical/systematic feel

### Type Scale

```
Hero heading:     clamp(48px, 7vw, 80px)  — weight 400, serif
Section heading:  clamp(36px, 5vw, 56px)  — weight 400, serif
Card title:       clamp(24px, 3vw, 36px)  — weight 400, serif
Body large:       21px                     — weight 400, sans, 1.5 line-height
Body:             17px                     — weight 400, sans, 1.6 line-height
Caption/meta:     14px                     — weight 500, sans, letter-spacing: 0.02em
Tag/label:        12px                     — weight 500, mono, letter-spacing: 0.06em, uppercase
```

### Type Principles
- Headings in serif — this is the personality layer
- Body in sans — this is the readability layer
- Generous line-height (1.5–1.6 for body) — let text breathe
- Tight letter-spacing on headings (-.01em), slightly open on captions
- Never bold the serif — DM Serif Display at 400 weight is already commanding

---

## 2. Color

Not the Apple gray scale. A palette with a signature that feels warm but sophisticated.

### Primary Palette

```
--bg:              #faf9f6    Warm off-white (not pure white — softer on eyes, warmer feel)
--bg-secondary:    #f0eeeb    Subtle warm gray for sections/cards
--text-primary:    #1a1a1e    Near-black with warmth (not pure black)
--text-secondary:  #5c5c66    Muted for descriptions, captions
--text-tertiary:   #8e8e99    Light metadata, timestamps
--separator:       #e4e2de    Warm divider lines
```

### Accent Color — Choose One Signature

Pick ONE accent that runs through the entire site. This becomes your visual identity.

**Option A: Lime `#b8f000`** (from your effect006.html)
- Bold and unexpected for a UX designer
- Great contrast on both light and dark backgrounds
- Signals: creative, confident, not afraid to stand out
- Use for: links, hover states, active indicators, pull quotes

**Option B: Sage `#7d8c6e`**
- Nods to your landscape architecture roots
- Sophisticated and calming
- Signals: grounded, thoughtful, connected to the physical world
- Use for: links, accents, subtle background washes

**Option C: Deep Terracotta `#c76f4e`**
- Warm, material, references craft and physical design
- Pairs beautifully with the warm off-white background
- Signals: warm, approachable, design-as-craft
- Use for: links, hover states, accent elements

**Option D: Ink Blue `#2d4a7a`**
- Professional but not corporate
- Technical, trustworthy, sophisticated
- Signals: systematic, reliable, deep thinker
- Use for: links, interactive elements, data visualization accents

### Dark Mode (optional, future)

If you want a theme toggle later:
```
--bg:              #111113
--bg-secondary:    #1a1a1e
--text-primary:    #e8e6e1
--text-secondary:  #9a9aa0
--accent:          (same accent, possibly lightened 10%)
```

### Color Principles
- Background should feel warm, not clinical (avoid pure white #fff)
- Only one accent color — restraint is the craft signal
- Text hierarchy through opacity/lightness, not different hues
- Project cards can each have their own `color` (defined in frontmatter) for covers/accents

---

## 3. Spacing & Layout

Inspired by your interior design background — generous, intentional use of space.

### Grid

```
Columns:          12-column on desktop, 4-column on mobile
Max content width: 960px  (reading content, about page)
Max tile width:    1080px (project card grid)
Page margins:      clamp(24px, 5vw, 48px)
Section padding:   clamp(64px, 10vh, 120px) vertical
```

### Spacing Scale (8px base)

```
--space-xs:   4px
--space-sm:   8px
--space-md:   16px
--space-lg:   24px
--space-xl:   32px
--space-2xl:  48px
--space-3xl:  64px
--space-4xl:  96px
--space-5xl:  128px
```

### Layout Principles
- Generous whitespace between sections — let each section have its own "room"
- Cards: subtle border-radius (12px), no drop shadows at rest
- Asymmetric layouts welcome (text left + image right) — more dynamic than centered everything
- Max reading width ~680px for case study body text (optimal readability)

---

## 4. Components

### Navigation
- Fixed, frosted glass (backdrop-filter blur)
- Logo "FD" left, links right
- Height: 48px desktop, 44px mobile
- Collapses to hamburger below 734px
- Subtle shadow or border on scroll

### Project Cards (Home Grid)
- 2-column grid on desktop, 1 on mobile
- Featured project spans full width
- Each card: image top, text below
- Hover: subtle scale (1.01) + soft shadow fade-in
- Status badge for "coming soon" projects
- Card background can use project's accent color for dark-themed cards

### Case Study Layout
- Hero: centered title, subtitle, meta (role, team, timeline)
- Cover image: full-width, edge-to-edge
- Body: centered column, max-width 680px
- Section headings in serif
- Images: full-width within the column, 12px border-radius
- Pull quotes: left border accent line, italic serif
- Decision cards: grouped in a subtle grid with light background
- Bottom navigation: prev/next project links

### Footer
- Directory-style columns (Explore, Projects, Connect)
- Compact, 12px type
- Warm separator line
- Copyright notice

### Illustrations Gallery
- Masonry grid, 3 columns desktop, 2 mobile
- Cards with subtle hover scale
- Optional: lightbox on click

---

## 5. Animation & Interaction

**Core principle:** Every animation serves a purpose — guide attention, provide feedback, or create continuity. No decoration-only motion.

### Scroll Reveal (Global)
```
Trigger:    Element enters viewport (top 80%)
Animation:  opacity 0 → 1, translateY 20px → 0
Duration:   600ms
Easing:     cubic-bezier(.25, .1, .25, 1)  — smooth deceleration
Stagger:    150ms between sibling elements
Library:    GSAP ScrollTrigger (or native Intersection Observer for simpler reveals)
```

### Page Load (Hero)
```
Sequence:
  1. Hero image/illustration fades in         — 600ms, power2.out
  2. Headline text fades up                   — 800ms, stagger by word or line
  3. Description fades up                     — 600ms, 200ms delay
  4. CTAs fade up                             — 400ms, 100ms delay
Total perceived duration: ~1.2s
```

### Hover States
```
Project cards:   scale(1.01), box-shadow fade-in         — 400ms, ease-out
Navigation links: underline grows from left               — 300ms, ease
CTA links:       arrow nudges right 4px                   — 300ms, cubic-bezier
Illustration cards: scale(1.02), subtle shadow            — 400ms, ease-out
```

### Page Transitions (Enhancement — Phase 2)
```
Exit:    Current page content fades out                   — 300ms
Enter:   New page content fades in                        — 400ms
Method:  Astro View Transitions API (built-in, zero config)
```

### Micro-interactions (Pick 2-3 for personality)

**Recommended:**
1. **Staggered text reveal on scroll** — Hero and section headings reveal word-by-word or line-by-line. Subtle but shows craft.
2. **Smooth page transitions** — Crossfade between pages using Astro's View Transitions. Low effort, high polish feel.
3. **Magnetic hover on project cards** — Card tilts very slightly (2-3 degrees) toward cursor position. Delightful without being distracting.

**Optional/future:**
- Custom cursor on project pages (changes to a "view" label)
- A small illustrated character that reacts to scroll position
- Theme toggle with a satisfying morph animation
- Parallax on case study cover images (very subtle, 5-10% offset)

### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
Always respect reduced-motion preferences. Animations enhance but should never be required.

---

## 6. Image Guidelines

### Project Thumbnails (Home Grid)
- Aspect ratio: 16:9 or 3:2
- Min resolution: 1200px wide
- Show the product/interface, not just mockups in device frames
- Consistent treatment across all thumbnails (similar lighting, framing)

### Case Study Images
- Full-width within 680px column
- Include process artifacts: sketches, flows, wireframes (shows your thinking)
- Final UI screens in context (device mockups OK here)
- Annotated screenshots for key decisions
- 12px border-radius

### Profile Photo
- Circular crop, minimum 400x400px
- Natural, approachable (not overly corporate)

### Illustrations
- High-resolution exports from your illustration work
- Consistent background treatment (transparent or matching site bg)

---

## 7. Technical Stack

### Astro (Static Site Generator)
- Content in Markdown, pages auto-generated
- Component-based (`.astro` files are just HTML with slots)
- Built-in View Transitions for page animations
- Zero JavaScript by default — only loads JS for interactive islands
- Output: static HTML/CSS/JS — deploy anywhere

### GSAP (Animation)
- ScrollTrigger for scroll-based reveals
- Timeline for sequenced page-load animations
- Loaded from CDN, only on pages that need it

### Hosting
- **Netlify** or **Vercel** — free tier, auto-deploy from Git
- Custom domain when ready

### Image Optimization
- Astro's built-in `<Image>` component for automatic WebP/AVIF conversion
- Lazy loading for below-fold images
- Responsive srcset for different viewport sizes

---

## 8. Open Design Questions

Things to decide before or during implementation:

1. **Accent color** — Which of the 4 options (or something else) feels most like you?
2. **Dark mode** — Do you want a theme toggle, or just pick one theme?
3. **Hero element** — Illustration of yourself (like current site), photo, or abstract graphic?
4. **Project card style** — Image + text below (current), or more editorial (side-by-side text + image)?
5. **Illustrations** — Dedicated page, or integrated into the about page?
6. **Case study depth** — Full narrative (current Wyze Air level), or shorter with more visuals?
7. **Font pairing** — DM Serif Display + Inter (recommended), or want to explore alternatives?

---

## Visual References

<!-- 
  Collect 3-5 portfolio sites or design references that match the vibe you want.
  Paste URLs here as you find them:
  
  - [reference name](url) — what you like about it
  - [reference name](url) — what you like about it
  - [reference name](url) — what you like about it
-->
