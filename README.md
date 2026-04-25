# SkillLeo Design System

## Company Context

**SkillLeo (SMC-Private) Limited** is Pakistan's most advanced digital agency platform — a premium dark-mode SaaS product targeting international clients, banks, and investors. Founded March 2026, SECP registered (Inc. No. 0330718), PSEB certified (Reg. No. Z-25-19355/26), FBR NTN registered (I750441). 25+ team of developers, designers, and digital marketers based in Sargodha, Punjab, Pakistan.

**CEO & Founder:** Hassam Mehmood  
**Website:** skillleo.com  
**Tagline:** "One Platform. Every Tool a Digital Agency Needs."

**Product:** An all-in-one agency platform replacing 10+ tools — Project Management, Client Portal, CRM & Leads, Invoicing, Contracts, Team Chat, Portfolio Profiles, and Analytics.

### Sources
- Logo files: 12 PNG variants provided (horizontal, stacked, icon-only × light/dark/blue backgrounds)
- Brand brief: detailed design philosophy document specifying dark premium SaaS aesthetic

---

## CONTENT FUNDAMENTALS

**Tone:** Bold, confident, premium. Corporate authority meets tech-forward energy. Never casual.  
**Voice:** First-person plural ("We build. We deliver.") when speaking as company; second-person ("Your agency deserves better.") when addressing clients.  
**Casing:** Sentence case for body copy. Title Case for headings and navigation. UPPERCASE for overlines and badges only.  
**Emoji:** Never used. No unicode icon substitutes.  
**Copy style:** Short, punchy declarative sentences. Fragmented headlines encouraged ("Build. Deliver. Scale."). Technical competence implied, not overstated. Registration credentials (SECP, PSEB) displayed prominently — these are trust signals for banks, government, and investors.

**Example headlines:**
- "Build. Deliver. Scale."
- "Pakistan's Most Advanced Agency Platform"
- "One Platform. Every Tool a Digital Agency Needs."
- "We are not a freelancer marketplace."
- "25+ Experts. One Vision."

---

## VISUAL FOUNDATIONS

### Color System
- **Background:** Deep navy-black (#0A0A0F) as root. Layered surfaces at #0F0F17 → #14141F → rgba white overlays at 3-6% for card depth.
- **Primary accent:** Electric blue #2563EB with gradient to #1D4ED8. Used for CTAs, focus rings, active states, overlines, and key highlights.
- **Text:** Bright white #F8FAFC for primary. Slate gray #94A3B8 for secondary. #64748B for tertiary. #475569 for muted/disabled.
- **Semantic:** Success #10B981, Warning #F59E0B, Error #EF4444.

### Typography
- **Font family:** Geist (Google Fonts). Fallback: system sans-serif stack.
- **Display:** 72px / bold / -0.04em tracking / 1.1 line-height — for hero headlines
- **H1:** 48px / bold / -0.025em / 1.1
- **H2:** 36px / semibold / -0.025em / 1.25
- **H3:** 24px / semibold / 1.25
- **Body:** 16px / regular / 1.5 / #94A3B8
- **Caption:** 12px / medium / wide tracking / #64748B
- **Overline:** 12px / semibold / UPPERCASE / 0.1em tracking / electric blue
- **Mono:** Geist Mono for code snippets

### Spacing
- 4px base unit. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px.
- Section padding: 96–128px vertical, max-width 1280px centered.

### Corner Radii
- Small interactive elements: 6px
- Cards & inputs: 8–12px
- Feature cards & modals: 16px
- Pills & badges: 24px or full (9999px)

### Borders
- Default: rgba(255,255,255,0.06) — barely visible structural lines
- Hover: rgba(255,255,255,0.12)
- Focus: solid electric blue with glow shadow
- Glass borders: rgba(255,255,255,0.08) on frosted surfaces

### Shadows
- Cards: 0 4px 12px rgba(0,0,0,0.4) — deep and soft
- Elevated: 0 8px 32px rgba(0,0,0,0.5)
- Glow effects: 0 0 32px rgba(37,99,235,0.15) — blue ambient glow on primary elements
- No light-mode outer shadows; depth is communicated via background layering + borders

### Glassmorphism
- Background: rgba(15,15,23,0.7) with backdrop-filter: blur(16–24px)
- Border: 1px solid rgba(255,255,255,0.08)
- Used for: navbar, modal overlays, floating panels, feature card backgrounds
- Subtle grain texture overlay optional (noise at 2–4% opacity)

### Backgrounds & Surfaces
- Full dark. No images as section backgrounds. Depth via layered opacity surfaces.
- Gradient mesh (animated, breathing) for hero sections — electric blue + deep navy, very subtle
- Radial blue glow behind key sections (hero, CTA) at very low opacity (~5-10%)
- No hand-drawn illustrations. No stock photos. Abstract geometric/grid patterns if needed.

### Animation & Motion
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1) for standard transitions. Spring easing (0.34, 1.56, 0.64, 1) for interactive feedback.
- **Duration:** 150ms for micro (hover, press), 250ms for standard (reveals, toggles), 400ms for dramatic (page transitions, modals).
- **Entrance:** Fade up (translateY 20px → 0, opacity 0 → 1). Staggered for lists.
- **Hover states:** Subtle Y-lift (-2px to -4px) + glow intensification on cards. Opacity fade (0.7→1) on secondary elements. Background color shift on buttons.
- **Press states:** Scale down (0.97–0.98) briefly.
- **No bounces.** No elastic overshoots. Motion is controlled and precise — Linear.app aesthetic.
- **Shimmer:** Horizontal sweep gradient for trust badges and CTA buttons on hover.
- **Counter animations:** Number counting up with easing for stats (25+, 100+, etc.)

### Cards
- Background: rgba(255,255,255,0.03) or glass
- Border: 1px solid rgba(255,255,255,0.06)
- Radius: 12–16px
- Hover: background brightens to 0.06, border to 0.12, subtle Y-lift, optional blue glow
- No colored left-border accents. No drop shadows on dark bg.
- Bento grid layout: asymmetric grid with varying card sizes

### Imagery
- Cool-toned. No warm filters. If photos used: desaturated, high contrast, blue-tinted.
- Prefer abstract UI mockups, wireframe-style illustrations, or pure CSS visuals.
- Brand blue as overlay/tint on any imagery.

---

## ICONOGRAPHY

**System:** Lucide Icons — consistent 24px, 1.5px stroke weight, rounded line caps.  
**CDN:** `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`  
**Usage:** Icons are secondary to text. Used in feature cards, navigation, and badges. Never as primary content.  
**Emoji:** Never.  
**Custom icons:** None provided — Lucide covers all use cases.  
**Registration badges:** SECP and PSEB displayed as styled text badges with official formatting, not as icon images.

---

## File Index

```
├── README.md                    ← This file
├── SKILL.md                     ← Agent skill definition
├── colors_and_type.css          ← CSS variables: colors, type, spacing, shadows
├── assets/
│   ├── logo-horizontal-light.png   ← Blue icon + black text on white
│   ├── logo-horizontal-dark.png    ← Blue icon + white text on black
│   ├── logo-horizontal-blue.png    ← White icon + white text on blue
│   ├── logo-horizontal-blue-alt.png
│   ├── logo-icon-light.png         ← Icon only on white
│   ├── logo-icon-dark.png          ← Icon only on black
│   ├── logo-icon-blue.png          ← Icon only on blue
│   ├── logo-stacked-light.png      ← Stacked on white
│   ├── logo-stacked-dark.png       ← Stacked on black
│   ├── logo-stacked-blue.png       ← Stacked on blue
│   ├── logo-stacked-blue-alt.png
│   └── logo-stacked-blue-gradient.png
├── preview/                     ← Design system preview cards
│   └── *.html
└── ui_kits/
    └── website/                 ← Premium agency website UI kit
        ├── README.md
        ├── index.html
        └── *.jsx
```
