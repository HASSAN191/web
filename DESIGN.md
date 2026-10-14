# DESIGN.md: GOLDEN LENS STUDIO Design System

## Overview & Philosophy
A luxury cinematic production studio design system embodying:
- **Emil Kowalski's Mobile-Native & Apple Design**: Strict mobile platform layer perfection (`100svh`, `100dvh`, zero-lag `:active` press feedback, no sticky hover, safe-area inset adaptation for Dynamic Island and notch, and flawless Android/Samsung S24 Ultra rendering).
- **High-End Visual Design (Leon Lin)**: Restrained champagne gold accents (`#c5a059`), deep obsidian background (`#08090b`), high-contrast typographic hierarchy, and warm editorial light mode (`#f8f6f0`).
- **GSAP Silky Motion**: 60fps hardware-accelerated animations (`transform`, `opacity`), spring easing curves (`cubic-bezier(0.16, 1, 0.3, 1)`), desktop magnetic buttons and 3D tilts, guaranteed 100% visibility fallback.

---

## Design Tokens

### Colors
#### Dark Mode (Default Cinematic Obsidian)
- `--bg-deep`: `#08090b` (Deep obsidian black)
- `--bg-card`: `#111318` (Refined card slate)
- `--bg-card-hover`: `#181b22` (Lifted card highlight)
- `--bg-card-glass`: `rgba(17, 19, 24, 0.75)` (Glassmorphic panels)
- `--gold-primary`: `#c5a059` (Champagne gold)
- `--gold-light`: `#e8d5ab` (Soft luminous gold)
- `--gold-dark`: `#8c6c2e` (Deep bronze gold)
- `--gold-glow`: `rgba(197, 160, 89, 0.22)` (Subtle gold aura)
- `--border-gold`: `rgba(197, 160, 89, 0.20)` (Hairline gold border)
- `--border-subtle`: `rgba(255, 255, 255, 0.08)` (Subtle white separator)
- `--text-main`: `#fbf9f5` (Warm off-white)
- `--text-cream`: `#f1ece2` (Editorial cream)
- `--text-muted`: `#9d988d` (Muted caption)
- `--text-dim`: `#68645c` (Dim label)
- `--whatsapp`: `#238853` (Luxury subdued green)
- `--whatsapp-hover`: `#1c7344`

#### Light Mode (Editorial Cashmere & Sand)
- `--bg-deep`: `#f8f6f0` (Warm cashmere background)
- `--bg-card`: `#ffffff` (Pure white card)
- `--bg-card-hover`: `#f3efe6` (Warm hover tone)
- `--bg-card-glass`: `rgba(255, 255, 255, 0.85)`
- `--gold-primary`: `#9e7428` (Rich antique gold)
- `--gold-light`: `#775618` (Deep gold text)
- `--gold-dark`: `#523a0d`
- `--gold-glow`: `rgba(158, 116, 40, 0.15)`
- `--border-gold`: `rgba(158, 116, 40, 0.25)`
- `--border-subtle`: `rgba(0, 0, 0, 0.07)`
- `--text-main`: `#151619` (Deep slate)
- `--text-cream`: `#1a1c22`
- `--text-muted`: `#565962`
- `--text-dim`: `#7e828d`

---

### Typography
- **Arabic Primary**: `'Alexandria', system-ui, -apple-system, sans-serif` (Clean geometric Arabic, legible on iOS & Android One UI)
- **English Brand/Display**: `'Cinzel', serif` (Luxury cinematic serif for GOLDEN LENS logo)
- **English Numbers & Secondary**: `'Plus Jakarta Sans', sans-serif` (Crisp modern sans-serif)

#### Fluid Scale (Mobile & Desktop)
- Hero Title: `clamp(1.95rem, 6.5vw, 4.2rem)`
- Section Title: `clamp(1.65rem, 4.5vw, 2.6rem)`
- Card Title: `clamp(1.05rem, 2.2vw, 1.35rem)`
- Body Text: `clamp(0.88rem, 1.8vw, 1.05rem)`
- Minimum Input Size: `16px !important` (Zero iOS zoom on focus)

---

### Spacing & Grid System
- Max Container Width: `1200px` (`--container-max: 1200px`)
- Container Padding: `clamp(16px, 3.5vw, 28px)` (Unified Across All Pages)
- Border Radius:
  - `--radius-xs`: `6px`
  - `--radius-sm`: `10px`
  - `--radius-md`: `16px`
  - `--radius-lg`: `24px`
  - `--radius-pill`: `999px`

---

### Mobile-Native Rules (Emil Kowalski Philosophy)
1. **Kill sticky hover**: Every `:hover` rule strictly wrapped under `@media (hover: hover) and (pointer: fine)`.
2. **Instant press feedback**: `:active` with `transform: scale(0.97)` and `100ms cubic-bezier(0.16, 1, 0.3, 1)` easing.
3. **No tap delay**: `touch-action: manipulation` on buttons, anchors, and cards.
4. **No tap highlight**: `-webkit-tap-highlight-color: transparent` globally on `html`.
5. **No input zoom**: `input, textarea, select { font-size: 16px !important; }`.
6. **Viewport stability**: `100svh` for hero (stable across mobile URL bar collapse), `100dvh` for full-screen drawers.
7. **Cross-Platform Adaptability**:
   - iPhone: Dynamic Island and bottom indicator support via `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.
   - Samsung S24 Ultra / Android: Full width responsiveness, zero pinched margins (`width: 100%`), `text-size-adjust: 100%`.
