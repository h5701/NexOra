# NexOra Digital Studio — Visual Style Brief
**For: React rebuild handoff**
**Version: 2.0 | June 2026**

---

## 1. The Design Directive

This is not a template reskin. The objective is a studio website that reads as **deliberate, expensive, and human-made** — energetic enough to feel alive, spacious enough to feel premium. Every decision exists to remove signals that say "Lovable/Framer template" and replace them with signals that say "serious UK digital studio worth £1,500–£2,500 a project."

The site has one job: convert a UK founder or small business owner into a discovery call booking. Every section serves that job or it does not exist.

**Design feeling:** Energetic but never cheap. Luxurious but never slow. Think: a studio that moves fast and charges properly.

---

## 2. Colour System

### Core Tokens

```css
--color-void:           #04061A;   /* Page background only */
--color-surface:        #07091D;   /* Card and section backgrounds */
--color-surface-alt:    #030516;   /* Alternating section backgrounds */
--color-surface-raised: #0C0F28;   /* Hover states on cards */
--color-border:         rgba(255,255,255,0.05);  /* Default borders */
--color-border-bright:  rgba(255,255,255,0.12);  /* Hover border states */

--color-text-primary:   #EDE9F8;   /* Headlines, primary body */
--color-text-secondary: rgba(237,233,248,0.42);  /* Supporting body */
--color-text-muted:     rgba(237,233,248,0.22);  /* Eyebrows, metadata */

--color-purple:         #7B5EA7;   /* CTA buttons, brand accents */
--color-purple-dark:    #5B4080;   /* Button gradient end stop */
--color-purple-hover:   #9170C2;   /* Button hover state */
--color-purple-glow:    rgba(123,94,167,0.25);   /* Button shadow only */

--color-cyan:           #2DD4BF;   /* Links, live tags, interactive states */
--color-cyan-glow:      rgba(45,212,191,0.08);   /* Subtle orb backgrounds */
```

### Gradient Tokens

```css
/* Hero headline — used ONCE on the page, on "products that work." only */
--gradient-hero: linear-gradient(110deg, #C4A3E8 0%, #7B9FE8 40%, #2DD4BF 80%);

/* CTA button background */
--gradient-button: linear-gradient(135deg, #7B5EA7, #5B4080);

/* Logo "O" character */
--gradient-logo: linear-gradient(110deg, #A07FD4, #2DD4BF);

/* Stats accent — applied to "100" and "0" only */
--gradient-accent: linear-gradient(110deg, #A07FD4, #2DD4BF);

/* Section bottom-border line — hero only */
--gradient-line: linear-gradient(90deg, transparent, rgba(123,94,167,0.3) 30%, rgba(45,212,191,0.3) 70%, transparent);

/* Process step top-border — on hover only */
--gradient-step-hover: linear-gradient(90deg, rgba(123,94,167,0.6), rgba(45,212,191,0.6));
```

### Gradient Usage Rules

| Gradient | Where | Never |
|---|---|---|
| `--gradient-hero` | Hero h1 line 2 only | Anywhere else |
| `--gradient-button` | Primary CTA bg | Secondary buttons, links |
| `--gradient-logo` | Logo "O" only | Nav links, body text |
| `--gradient-accent` | Stats: "100" and "0" only | All other stat numbers |
| `--gradient-line` | Hero section bottom border | Section dividers elsewhere |
| `--gradient-step-hover` | Process step top border on hover | Default state |

---

## 3. Typography

### Typeface Stack

```css
--font-display: 'Syne', sans-serif;         /* Headlines, hero, section titles, step numbers */
--font-body:    'DM Sans', sans-serif;       /* All body, UI, navigation, buttons */
--font-mono:    'JetBrains Mono', monospace; /* Technical labels only, if needed */
```

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

### Type Scale

| Role | Font | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|---|
| Hero headline | Syne | clamp(52px, 7vw, 72px) | 800 | 0.92 | -0.045em |
| Section headline | Syne | clamp(32px, 4vw, 44px) | 700 | 1.02 | -0.03em |
| Card headline | Syne | 19–20px | 600 | 1.2 | -0.015em |
| Process step number | Syne | 56px | 800 | 1 | -0.05em |
| Eyebrow label | DM Sans | 10px | 500 | 1 | 0.14em (uppercase) |
| Hero pill label | DM Sans | 11px | 500 | 1 | 0.10em (uppercase) |
| Body — lead | DM Sans | 16–17px | 300 | 1.72 | 0 |
| Body — default | DM Sans | 13px | 300 | 1.68 | 0 |
| Caption / meta / tags | DM Sans | 10px | 500 | 1 | 0.07–0.10em |
| Button | DM Sans | 13–14px | 500 | 1 | 0.01em |
| Nav links | DM Sans | 13px | 400 | 1 | 0 |
| Card links | DM Sans | 12px | 500 | 1 | 0.03em |

### Typography Rules

- All section headlines are **left-aligned**. Never centre-align a multi-line section headline.
- Eyebrow labels are always uppercase, 10px, `--color-text-muted`. Never apply gradient to an eyebrow.
- Lead body (first paragraph after a section headline): 16–17px weight 300.
- Card body: 13px weight 300, `--color-text-secondary`.
- No bold within body paragraphs.
- The hero sub-paragraph sits left-aligned, max-width 420–480px, paired with the CTA block in a flex row.

---

## 4. Spacing & Layout

### Spacing Scale

```css
--space-xs:  4px
--space-sm:  8px
--space-md:  14px
--space-lg:  22px
--space-xl:  36px
--space-2xl: 52px
--space-3xl: 80px
--space-4xl: 96px
```

### Page Container

```css
.container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 80px);
}
```

### Section Anatomy

```
[padding-top: --space-4xl]
  [eyebrow — 10px uppercase muted]
  [section headline — left-aligned, margin-top: 14px]
  [optional lead paragraph — max-width 480px]
  [content block — margin-top: --space-2xl]
[padding-bottom: --space-4xl]
```

Every section alternates between `--color-void` and `--color-surface-alt` backgrounds. The border between them is always `1px solid --color-border`.

### Alternating Section Backgrounds

| Section | Background |
|---|---|
| Hero | `--color-void` |
| Stats bar | `--color-void` (no separator needed — grid borders do the work) |
| Services | `--color-void` |
| Portfolio | `--color-surface-alt` |
| Process | `--color-void` |
| Why NexOra | `--color-surface-alt` |
| About | `--color-void` |
| Contact | `--color-surface-alt` |

---

## 5. Component Specifications

### Navigation

```css
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px clamp(24px, 5vw, 80px);
  background: transparent;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
  border-bottom: 1px solid transparent;
}

.nav.scrolled {
  background: rgba(4, 6, 26, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom-color: var(--color-border);
}
```

**Logo:** Syne 17px weight 700, `--color-text-primary`. The "O" character uses `--gradient-logo` as `background-clip: text`. No other characters.

**Nav links:** DM Sans 13px weight 400, `rgba(237,233,248,0.38)`. Hover: `--color-text-primary`. No underlines. No movement.

**Nav CTA button:** Uses `--gradient-button`. 9px 22px padding, 7px border-radius, 13px DM Sans weight 500.

### Hero Pill Badge

```css
.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 14px;
  border: 1px solid rgba(45, 212, 191, 0.2);
  border-radius: 100px;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: rgba(237, 233, 248, 0.4);
  margin-bottom: 36px;
}

.hero-pill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #2DD4BF;
  box-shadow: 0 0 10px rgba(45, 212, 191, 0.8);
}
```

Content: `● Digital product studio · UK`

### Hero Background Orbs

Two radial gradients, positioned absolutely, pointer-events none:

```css
/* Orb 1 — purple, top-left */
position: absolute; top: -120px; left: -80px;
width: 500px; height: 500px;
background: radial-gradient(circle, rgba(123,94,167,0.14) 0%, transparent 65%);

/* Orb 2 — cyan, top-right */
position: absolute; top: 40px; right: -60px;
width: 380px; height: 380px;
background: radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 65%);
```

Bottom border of hero section:
```css
height: 1px;
background: var(--gradient-line);
```

### Hero Layout

```
[pill badge]
[h1 — line 1: white | line 2: gradient]
[flex row, align-items: flex-end, justify-content: space-between]
  [sub-paragraph — max-width: 420px, weight 300, color secondary]
  [flex column, align-items: flex-end, gap: 16px]
    [primary button]
    [ghost link — "See our work →"]
```

### Primary CTA Button

```css
.btn-primary {
  padding: 15px 30px;
  background: var(--gradient-button);
  color: #ffffff;
  border: none;
  border-radius: 9px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 8px 32px var(--color-purple-glow);
  transition: opacity 0.15s ease, transform 0.1s ease;
}

.btn-primary:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}
```

### Ghost / Secondary Link

```css
.btn-ghost {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 400;
  color: rgba(237, 233, 248, 0.35);
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color 0.15s;
}

.btn-ghost:hover { color: #2DD4BF; }
```

### Stats Bar

Four columns. No card wrappers. Grid borders only.

```css
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat {
  padding: 36px 44px;
  border-right: 1px solid var(--color-border);
  position: relative;
}

.stat:last-child { border-right: none; }

.stat-number {
  font-family: var(--font-display);
  font-size: 54px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--color-text-primary);
  margin-bottom: 7px;
}

/* Apply --gradient-accent as background-clip:text to "100" and "0" spans only */
.stat-number .accent {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}
```

The first stat ("2 Products delivered") gets a decorative bottom accent line:
```css
.stat:first-child::after {
  content: '';
  position: absolute;
  bottom: 0; left: 44px; right: 44px;
  height: 1px;
  background: var(--gradient-line);
}
```

### Service Card Grid

```css
.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgba(255,255,255,0.04);
  border-radius: 18px;
  overflow: hidden;
  gap: 1px; /* The 1px gap IS the border between cards */
}

.service-card {
  background: var(--color-surface);
  padding: 38px 34px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background 0.2s ease;
}

.service-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.service-card:hover { background: var(--color-surface-raised); }
.service-card:hover::after { opacity: 1; }

/* Service tag */
.service-tag {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.service-tag::before {
  content: '';
  display: block;
  width: 18px;
  height: 1px;
  background: rgba(237, 233, 248, 0.12);
}

/* AI card — dimmed to signal selectivity */
.service-card.coming-soon { opacity: 0.5; }
```

No icons on service cards. The tag line rule + headline carries the hierarchy.

### Portfolio Cards

```css
.portfolio-grid {
  display: grid;
  grid-template-columns: 1.65fr 1fr;
  gap: 14px;
  margin-top: var(--space-2xl);
}

.portfolio-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.portfolio-card:hover {
  border-color: rgba(123, 94, 167, 0.35);
  transform: translateY(-2px);
}

.portfolio-image {
  height: 190px; /* 150px for the smaller card */
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;
}

/* Image area background — replace with real screenshots when available */
.portfolio-image.alida {
  background: linear-gradient(145deg, #0A0F2E 0%, #111638 50%, #0D1830 100%);
}

.portfolio-image.fikrless {
  background: linear-gradient(145deg, #090D28 0%, #0E1035 100%);
}

/* Subtle orbs inside image area */
.portfolio-image-orb {
  position: absolute;
  border-radius: 50%;
}

.portfolio-image-orb.teal {
  bottom: -40px; right: -40px;
  width: 160px; height: 160px;
  background: radial-gradient(circle, rgba(45,212,191,0.10) 0%, transparent 70%);
}

.portfolio-image-orb.purple {
  top: -30px; left: -30px;
  width: 120px; height: 120px;
  background: radial-gradient(circle, rgba(123,94,167,0.12) 0%, transparent 70%);
}

.portfolio-image-label {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: rgba(255,255,255,0.07);
  letter-spacing: -0.02em;
  z-index: 1;
}

.portfolio-info { padding: 26px 28px; }

.portfolio-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 13px;
}

.portfolio-tag {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.07);
  color: rgba(237, 233, 248, 0.28);
}

.portfolio-tag.live {
  border-color: rgba(45, 212, 191, 0.25);
  color: #2DD4BF;
}
```

**Important:** Replace the gradient image backgrounds with real screenshots of Alida Care and FikrLess as early as possible. The gradient placeholders are acceptable for launch but real screenshots add significant credibility.

### Process Steps

```css
.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: var(--space-2xl);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  overflow: hidden;
}

.process-step {
  padding: 36px 30px;
  border-right: 1px solid var(--color-border);
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;
}

.process-step:last-child { border-right: none; }
.process-step:hover { background: rgba(255,255,255,0.02); }

/* Gradient top-border — appears on hover only */
.process-step::before {
  content: '';
  position: absolute;
  top: 0; left: 30px; right: 30px;
  height: 2px;
  background: var(--gradient-step-hover);
  border-radius: 0 0 2px 2px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.process-step:hover::before { opacity: 1; }

.process-number {
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
  color: rgba(255, 255, 255, 0.05);
  margin-bottom: 18px;
}

.process-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 10px;
  letter-spacing: -0.01em;
}

.process-body {
  font-size: 12px;
  font-weight: 300;
  color: var(--color-text-secondary);
  line-height: 1.65;
}
```

### Why NexOra Cards

Three equal cards. NOT checklist rows. NOT a card-with-checkbox pattern.

```css
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: var(--space-2xl);
}

.why-card {
  padding: 36px 30px;
  border: 1px solid var(--color-border);
  border-radius: 18px;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.why-card:hover {
  border-color: rgba(123, 94, 167, 0.25);
  background: rgba(123, 94, 167, 0.04);
}

.why-number {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: rgba(123, 94, 167, 0.5);
  margin-bottom: 18px;
}

.why-title {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
  margin-bottom: 12px;
  line-height: 1.2;
}

.why-body {
  font-size: 12px;
  font-weight: 300;
  color: var(--color-text-secondary);
  line-height: 1.7;
}
```

---

## 6. Page-by-Page Build Notes

### Home Page (/)

Section order:
1. Hero
2. Stats bar
3. Services (What we build)
4. Portfolio (Our work)
5. Process (From brief to live product)
6. Why NexOra
7. CTA strip — full-width, `--color-surface-alt`, centred headline + primary button

**CTA strip copy:**
> *Headline:* We're selective about the projects we take on.
> *Sub:* If you have something worth building, let's talk.
> *Button:* Start a project →

### About Page (/about)

Section order:
1. Page hero — eyebrow "Software studio", headline "About NexOra", sub "A modern software studio built for founders and businesses who want execution, not excuses."
2. Our story — prose block, no card styling, no quote box. Two short paragraphs max.
3. Team — founder cards (see below)
4. Our mission — single centred statement, large Syne type, no card
5. CTA strip — same as homepage

**Team card:**
```
[initials avatar — 44px circle, background: rgba(123,94,167,0.15), color: #A07FD4]
[name — Syne 18px weight 600]
[role — DM Sans 11px uppercase, color: #2DD4BF, letter-spacing: 0.1em]
[body — DM Sans 13px weight 300, color secondary]
[key strengths — pill tags, border: --color-border, color: --color-text-muted]
```

**Critical:** Update team information to reflect the actual current studio structure before launch. The About page showing inaccurate co-founder information is a credibility and trust risk with UK clients doing due diligence.

### Services Page (/services)

Section order:
1. Page hero — headline "Services", sub "We design and build software systems, digital products, and AI-powered tools for startups and businesses."
2. What we do — prose block (no card), two paragraphs
3. Core capabilities — 3-column card grid (Product Development, Website Development, UX & Product Design)
4. Additional services — 2-column (System Rebuilds, AI Product Development)
5. Why NexOra — same 3-card grid as homepage
6. CTA strip

**Services page does not repeat the homepage 2×2 grid.** It expands into the full 5-service layout with individual descriptions.

### Contact Page (/contact — or /start)

Section order:
1. Page hero — eyebrow "Project intake", headline "Start a Project", sub "Tell us what you're building. We'll respond within 2 business days with clarity on scope, direction, and next steps."
2. How it works — 3 bullet points: "Clear feedback on feasibility", "Suggested approach or structure", "Rough scope direction"
3. Contact form
4. Direct email fallback

**Form fields:**
- Name
- Email
- Company (optional)
- Project type (dropdown)
- Project description (textarea — placeholder: "What are you building, who's it for, and what does success look like?")
- Submit: "Submit project →"

**Form styling:**
```css
.form-field {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-size: 14px;
  width: 100%;
  transition: border-color 0.15s;
}

.form-field:focus {
  outline: none;
  border-color: #2DD4BF;
}
```

Add below the form: "Or email us directly at [your email]" — plain text link, `--color-cyan`.

Add pricing signal somewhere on this page: "Projects typically start from £750. We'll confirm scope and budget in our first response."

---

## 7. Animation & Motion

### Scroll Reveal

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.reveal {
  opacity: 0;
  animation: fadeUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

Trigger with Intersection Observer at `threshold: 0.1`. Cascade card grids with `animation-delay: calc(var(--i, 0) * 0.08s)`.

### Hover Micro-interactions

| Element | Hover effect |
|---|---|
| Service cards | Background lightens (`--color-surface-raised`), top shimmer appears |
| Portfolio cards | `translateY(-2px)`, border-color to purple tint |
| Process steps | Background lightens, gradient top-border fades in |
| Why NexOra cards | Border-color to purple tint, background purple tint |
| Primary button | `opacity: 0.88`, `translateY(-1px)` |
| Ghost button | Color shifts to `--color-cyan` |
| Nav links | Color shifts to `--color-text-primary` |
| Card links ("Learn more →") | Arrow shifts `4px` right |
| Portfolio cards | `translateY(-2px)` |

### What NOT to Animate

- No floating or bobbing elements
- No continuous rotation or spinning
- No parallax scrolling
- No animated gradients (the gradient is static)
- No particle effects or canvas animations
- No ambient glow pulses
- No skeleton loaders unless actually needed

---

## 8. What to Remove from the Current Site

Non-negotiable removals. Each one is a template signal.

| Remove | Reason |
|---|---|
| AI cityscape hero background image | Generic stock — template signal #1 |
| Gradient applied to hero text + buttons + borders + icons simultaneously | Gradient overuse — template signal #2 |
| Purple ambient glow pulsing behind every section | Reads as "I found the effects panel" |
| Finova, NovaFlow, AuraCore portfolio cards | Not real — active credibility damage |
| Card boxes around process steps | Over-boxed template pattern |
| Checkbox rows in "Why NexOra" | The single most template-looking element on the current site |
| Coloured circle backgrounds behind service icons | Template default — removed entirely |
| Floating particle dots in background sections | Decorative noise, no design value |
| Centre-aligned multi-line section headlines | Template layout habit |

---

## 9. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 App Router | SEO, file-based routing, performance — do not use plain React |
| Styling | Tailwind CSS + CSS custom properties for design tokens | Utility-first with the token system defined in this brief on top |
| Animations | Framer Motion | Scroll reveals and hover micro-interactions |
| Content — case studies | MDX or Contentlayer | Allows Hina to update case study copy without touching component code |
| Forms | React Hook Form + Resend | Clean validation, email delivery without a third-party form platform |
| Deployment | Vercel | Replaces Lovable deployment, free tier sufficient for current scale |
| Fonts | Google Fonts — Syne + DM Sans | Defined in brand playbook, already in use |

---

## 10. Launch Checklist

### Before writing any code
- [ ] Confirm accurate team information for About page
- [ ] Gather real screenshots of Alida Care and FikrLess interfaces
- [ ] Confirm email address for contact form delivery
- [ ] Set up Vercel account and connect to repo

### Before going live
- [ ] Remove Finova, NovaFlow, AuraCore — permanently
- [ ] About page reflects accurate current team
- [ ] Real screenshots in portfolio image areas (not gradient placeholders)
- [ ] At least one real case study page exists (Alida Care minimum)
- [ ] Pricing signal on contact page ("Projects typically start from £750")
- [ ] Response time promise on contact page ("We'll respond within 2 business days")
- [ ] All "Learn more" and "View case study" links resolve to real pages
- [ ] Contact form tested end-to-end (submits → email received)
- [ ] Mobile tested at 375px, 390px, 768px breakpoints
- [ ] Meta title and description on all pages
- [ ] OG image set (for when shared on LinkedIn/WhatsApp)
- [ ] Google Search Console submitted post-launch
- [ ] Favicon updated (not the Lovable default)

---

*Version 2.0 reflects the final approved visual direction: energetic but never cheap, luxurious but never slow. All decisions in this brief supersede the Lovable template. When uncertain, refer to Section 1.*
