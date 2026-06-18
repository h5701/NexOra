# NexOra — Cursor Setup Prompt
**Paste this entire prompt at the start of every new Cursor session.**

---

## MASTER PROMPT (paste this first, before any build task)

```
You are building the NexOra Digital Studio website. This is a Next.js 14 (App Router) project with Tailwind CSS. Before writing any code, read and internalize these rules. They override your defaults on every decision.

---

TECH STACK
- Framework: Next.js 14 App Router
- Styling: Tailwind CSS + CSS custom properties for design tokens
- Animations: Framer Motion
- Forms: React Hook Form + Resend
- Fonts: Google Fonts — Syne (600, 700, 800) + DM Sans (300, 400, 500)
- Deployment target: Vercel

---

DESIGN TOKENS (add these to globals.css, use them everywhere — never hardcode hex values)

:root {
  --color-void:           #04061A;
  --color-surface:        #07091D;
  --color-surface-alt:    #030516;
  --color-surface-raised: #0C0F28;
  --color-border:         rgba(255,255,255,0.05);
  --color-border-bright:  rgba(255,255,255,0.12);

  --color-text-primary:   #EDE9F8;
  --color-text-secondary: rgba(237,233,248,0.42);
  --color-text-muted:     rgba(237,233,248,0.22);

  --color-purple:         #7B5EA7;
  --color-purple-dark:    #5B4080;
  --color-purple-hover:   #9170C2;
  --color-purple-glow:    rgba(123,94,167,0.25);

  --color-cyan:           #2DD4BF;
  --color-cyan-glow:      rgba(45,212,191,0.08);

  --gradient-hero:        linear-gradient(110deg, #C4A3E8 0%, #7B9FE8 40%, #2DD4BF 80%);
  --gradient-button:      linear-gradient(135deg, #7B5EA7, #5B4080);
  --gradient-logo:        linear-gradient(110deg, #A07FD4, #2DD4BF);
  --gradient-accent:      linear-gradient(110deg, #A07FD4, #2DD4BF);
  --gradient-line:        linear-gradient(90deg, transparent, rgba(123,94,167,0.3) 30%, rgba(45,212,191,0.3) 70%, transparent);
  --gradient-step-hover:  linear-gradient(90deg, rgba(123,94,167,0.6), rgba(45,212,191,0.6));
}

---

TYPOGRAPHY RULES
- Display font (Syne): all headlines, hero text, section titles, step numbers, card titles
- Body font (DM Sans): all body copy, navigation, buttons, tags, captions
- Hero headline: 72px, weight 800, line-height 0.92, tracking -0.045em
- Section headlines: 44px, weight 700, line-height 1.02, tracking -0.03em — always LEFT-ALIGNED
- Card headlines: 19–20px, weight 600, tracking -0.015em
- Eyebrow labels: 10px, weight 500, uppercase, tracking 0.14em, color: --color-text-muted
- Body text: 13px, weight 300, line-height 1.68, color: --color-text-secondary
- Never centre-align a multi-line section headline
- Never bold text within body paragraphs

---

GRADIENT RULES — CRITICAL
Each gradient has exactly one job. Never use a gradient outside its assigned role.

--gradient-hero     → hero h1 line 2 ("products that work.") ONLY
--gradient-button   → primary CTA button background ONLY
--gradient-logo     → logo "O" character ONLY
--gradient-accent   → stat numbers "100" and "0" ONLY
--gradient-line     → hero section bottom border ONLY
--gradient-step-hover → process step top border on :hover ONLY

If you find yourself applying a gradient anywhere not in this list, stop and use a solid colour instead.

---

LAYOUT RULES
- Page max-width: 1160px, centred, horizontal padding: clamp(24px, 5vw, 80px)
- Section padding: 88px top and bottom minimum
- Every section breathes — if it feels cramped, add padding, never reduce type size
- Alternating section backgrounds: void → surface-alt → void → surface-alt
- Section borders: 1px solid --color-border between sections

---

COMPONENT RULES

Navigation:
- Fixed, transparent by default
- On scroll: background rgba(4,6,26,0.88), backdrop-filter blur(14px), border-bottom 1px solid --color-border
- Logo "O" uses --gradient-logo as background-clip: text
- Links: 13px DM Sans weight 400, color --color-text-muted, hover --color-text-primary
- CTA button: --gradient-button background, 9px 22px padding, 7px border-radius

Hero:
- NO background image
- Two radial gradient orbs (purple top-left, cyan top-right), position absolute, pointer-events none
- Pill badge with glowing cyan dot: "● Digital product studio · UK"
- H1 line 1: white. H1 line 2: --gradient-hero as background-clip:text
- Layout: h1 full width, then flex row (sub-paragraph left + CTA column right, align-items: flex-end)
- Primary button has box-shadow: 0 8px 32px --color-purple-glow

Stats bar:
- 4-column CSS grid, no card wrappers
- Column borders only (1px solid --color-border between columns)
- "100" and "0" wrapped in <span> with --gradient-accent as background-clip:text
- First stat has a decorative bottom gradient line (--gradient-line)

Service cards:
- 2x2 grid with 1px gap — the gap IS the border (background: rgba(255,255,255,0.04) on the grid container)
- Card background: --color-surface. Hover: --color-surface-raised
- Top shimmer line appears on hover (::after pseudo, gradient, opacity 0 → 1)
- Service tag: 10px uppercase with a short horizontal rule before it (::before pseudo, 18px wide)
- NO icons
- AI card has opacity: 0.5 (signals "coming soon" without a badge)

Portfolio cards:
- Asymmetric grid: 1.65fr 1fr
- Cards lift 2px on hover (translateY(-2px)), border-color shifts to rgba(123,94,167,0.35)
- "Live product" / "Live on Play Store" tags use --color-cyan colour and cyan border tint
- Image areas use gradient placeholders until real screenshots are provided

Process steps:
- 4-column grid inside a single border-radius:18px container
- Column borders only (no individual card borders)
- Step numbers: 56px Syne weight 800, color rgba(255,255,255,0.05) — purely decorative
- Gradient top-border appears on :hover only (::before pseudo, --gradient-step-hover)

Why NexOra:
- 3-column equal card grid
- NOT checklist rows. NOT checkbox icons. Pure text cards only.
- Each card: purple index number (01/02/03), Syne headline, DM Sans body
- Hover: border-color rgba(123,94,167,0.25), background rgba(123,94,167,0.04)

---

ANIMATION RULES
- Scroll reveal: fadeUp (opacity 0→1, translateY 16px→0), 0.55s cubic-bezier(0.16,1,0.3,1)
- Trigger with Intersection Observer at threshold 0.1
- Card grids cascade: animation-delay calc(var(--i) * 0.08s)
- Hover: cards translateY(-2px), buttons translateY(-1px), all 0.15–0.2s ease
- NO floating elements, NO continuous rotation, NO parallax, NO animated gradients, NO particles

---

THINGS TO NEVER DO
- Never use a gradient outside its assigned role above
- Never centre-align a multi-line headline
- Never put card boxes around the process steps
- Never use checkbox icons in the Why NexOra section
- Never add icons with coloured circle backgrounds
- Never use the old Lovable template purple/cyan gradient on everything
- Never add the fake portfolio items (Finova, NovaFlow, AuraCore)
- Never use plain <img> tags — always next/image
- Never hardcode colours — always use CSS custom properties
- Never add ambient glow animations or pulsing effects

---

FILE STRUCTURE TO CREATE

/app
  /layout.tsx          ← root layout with font imports and globals
  /page.tsx            ← homepage
  /about/page.tsx
  /services/page.tsx
  /contact/page.tsx
  /work/[slug]/page.tsx ← case study pages

/components
  /layout
    Navbar.tsx
    Footer.tsx
    Section.tsx        ← wrapper with eyebrow + headline + optional lead
  /home
    Hero.tsx
    Stats.tsx
    Services.tsx
    Portfolio.tsx
    Process.tsx
    WhyNexOra.tsx
    CTAStrip.tsx
  /ui
    Button.tsx         ← primary and ghost variants
    EyebrowLabel.tsx
    PortfolioCard.tsx
    ServiceCard.tsx
    ProcessStep.tsx
    WhyCard.tsx
    Tag.tsx

/lib
  /fonts.ts            ← Google Fonts configuration

---

When I give you a task, build exactly what I describe using this system. If anything in my task conflicts with these rules, follow the rules and tell me what you changed and why.
```

---

## COMPONENT-SPECIFIC PROMPTS

Use these when building each section. Paste the master prompt first in a new session, then paste the relevant section prompt.

---

### Navbar

```
Build the Navbar component following the design system.

Requirements:
- Fixed position, full width, z-index 100
- Transparent by default, frosted glass on scroll (useEffect + scroll listener → add .scrolled class)
- Logo: "NexOra" in Syne weight 700. The letter "O" only gets --gradient-logo as background-clip:text. All other characters are --color-text-primary.
- Nav links: Home, About, Services, Contact — 13px DM Sans weight 400, color --color-text-muted, hover --color-text-primary, no underlines
- CTA button: "Start a project" — uses --gradient-button, 9px 22px padding, 7px border-radius, white text, 13px DM Sans weight 500
- On mobile (< 768px): hide nav links and CTA, show hamburger menu icon
- Use next/link for all navigation links
```

---

### Hero Section

```
Build the Hero section component.

Requirements:
- Background: --color-void with two absolutely positioned radial gradient orbs:
  Orb 1 (purple): top:-120px left:-80px, 500x500px, radial-gradient(circle, rgba(123,94,167,0.14) 0%, transparent 65%)
  Orb 2 (cyan): top:40px right:-60px, 380x380px, radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 65%)
- Section bottom border: 1px, background --gradient-line
- Pill badge at top: border 1px solid rgba(45,212,191,0.2), border-radius 100px, content "Digital product studio · UK" with a 6px cyan glowing dot before the text (box-shadow: 0 0 10px rgba(45,212,191,0.8))
- H1: two lines
  Line 1: "We build digital" — color --color-text-primary
  Line 2: "products that work." — --gradient-hero as background-clip:text, -webkit-text-fill-color:transparent
  Font: Syne 800, clamp(52px, 7vw, 72px), line-height 0.92, tracking -0.045em
- Below h1: flex row, align-items flex-end, justify-content space-between
  Left: sub-paragraph "Platforms, applications, and high-performance websites for founders who need it done properly — the first time." — 16px DM Sans weight 300, color --color-text-secondary, max-width 420px
  Right: flex column align-items flex-end gap 16px
    Primary button: "Start a project →" with box-shadow 0 8px 32px --color-purple-glow
    Ghost button: "See our work →" color --color-text-muted, hover --color-cyan
- Scroll reveal animation on pill, h1, and flex row (staggered)
- On mobile: stack flex row to column, align everything left
```

---

### Stats Bar

```
Build the Stats component.

Requirements:
- 4-column CSS grid, no outer border, no card wrappers
- Each column: padding 36px 44px, border-right 1px solid --color-border. Last column no border.
- Stat number: Syne 54px weight 800, line-height 1, tracking -0.05em, color --color-text-primary
- Stat label: 10px DM Sans weight 400, uppercase, tracking 0.10em, color --color-text-muted
- "100%" stat: wrap "100" in a span with --gradient-accent as background-clip:text. The "%" is plain white.
- "0" stat: wrap "0" in a span with --gradient-accent as background-clip:text.
- First stat column gets a decorative ::after line at the bottom: height 1px, background --gradient-line.
- On mobile (< 768px): 2x2 grid, add border-bottom to top row columns.

Data:
{ number: "2", label: "Products delivered" }
{ number: "100%", label: "On-time delivery" }
{ number: "1", label: "Studio. Full team." }
{ number: "0", label: "Scope creep. Ever." }
```

---

### Services Section

```
Build the Services (What We Build) section.

Requirements:
- Eyebrow: "What we build"
- Headline: "Built for founders. Built to last." — Syne 44px weight 700, left-aligned
- Section header: flex row, space-between, with "All services →" link on the right (12px, color --color-text-muted, bottom border, hover --color-cyan)
- Card grid: 2x2, CSS grid with gap:1px. Grid container background: rgba(255,255,255,0.04), border-radius 18px, overflow hidden. This makes the 1px gap look like internal borders.
- Each card: background --color-surface, padding 38px 34px
  - On hover: background --color-surface-raised. A shimmer line (::after pseudo, gradient, opacity 0→1) appears at the top.
  - Service tag: 10px uppercase --color-text-muted with a ::before pseudo (18px wide, 1px height, rgba(237,233,248,0.12)) acting as a short rule
  - Headline: Syne 19px weight 600, --color-text-primary
  - Body: 13px DM Sans weight 300, --color-text-secondary
  - Link: "Learn more →" 12px --color-cyan, arrow shifts 4px right on hover
- Fourth card (AI integration): opacity 0.5
- NO icons anywhere in this section

Services data:
1. Tag: "Built to scale" | Title: "Platforms & web applications" | Body: "Full-stack platforms built around your users and business logic. We architect it properly and build it to scale."
2. Tag: "Native UX at the core" | Title: "Mobile applications" | Body: "iOS and Android built with clean architecture and real user experience at the core. Not templates. Not shortcuts."
3. Tag: "Conversion-engineered" | Title: "High-performance websites" | Body: "Your website is a revenue asset, not a brochure. We build for businesses that understand the difference."
4. Tag: "Expression of interest open" | Title: "AI integration (opening soon)" | Body: "A limited number of AI integration partnerships for businesses ready to embed intelligent automation." | Link text: "Express interest →"
```

---

### Portfolio Section

```
Build the Portfolio (Our Work) section. Background: --color-surface-alt.

Requirements:
- Eyebrow: "Our work"
- Headline: "Real products. Real clients. Real outcomes."
- Asymmetric grid: grid-template-columns 1.65fr 1fr, gap 14px
- Each card: background --color-surface, border 1px solid --color-border, border-radius 18px, overflow hidden
  - Hover: border-color rgba(123,94,167,0.35), transform translateY(-2px), transition 0.2s ease
- Image area:
  Alida Care: height 190px, background linear-gradient(145deg, #0A0F2E 0%, #111638 50%, #0D1830 100%)
  FikrLess: height 150px, background linear-gradient(145deg, #090D28 0%, #0E1035 100%)
  Both: display flex, align-items center, justify-content center, border-bottom 1px solid --color-border, position relative, overflow hidden
  Inside each: a muted domain/app name label (Syne 22px weight 700, color rgba(255,255,255,0.07))
  Plus two radial orbs (teal bottom-right, purple top-left) as atmosphere
- Info area: padding 26px 28px
  - Tags row: pill tags, 10px uppercase, border 1px solid rgba(255,255,255,0.07), color --color-text-muted
  - "Live product" / "Live on Play Store" tags: border-color rgba(45,212,191,0.25), color --color-cyan
  - Project name: Syne 18px weight 600
  - Description: 12px DM Sans weight 300, --color-text-secondary

Portfolio data:
Card 1 (large):
  Image label: "alidacare.com"
  Tags: ["Healthcare platform", "Live product"]
  Title: "Alida Care"
  Body: "End-to-end digital platform connecting families with professional care. Seamless booking, caregiver profiles, backend management — built for scale."

Card 2 (small):
  Image label: "FikrLess"
  Tags: ["Mental health app", "Live on Play Store"]
  Title: "FikrLess"
  Body: "Mental health platform for the Pakistani market. Culturally contextual, accessible at scale."
```

---

### Process Section

```
Build the Process section.

Requirements:
- Eyebrow: "The process"
- Headline: "From brief to live product. No surprises."
- 4-column grid inside a single container: border 1px solid --color-border, border-radius 18px, overflow hidden
- Each step: padding 36px 30px, border-right 1px solid --color-border. Last step no border.
  - Hover: background rgba(255,255,255,0.02)
  - Hover also reveals ::before pseudo at top: height 2px, background --gradient-step-hover, border-radius 0 0 2px 2px, opacity 0→1
- Step number: Syne 56px weight 800, line-height 1, tracking -0.05em, color rgba(255,255,255,0.05) — purely decorative
- Step title: Syne 16px weight 600, --color-text-primary
- Step body: 12px DM Sans weight 300, --color-text-secondary, line-height 1.65

Steps data:
1. "Discover" — "We start with the problem, not the features. We align on what success actually looks like."
2. "Architect" — "We define scope, technical approach, and delivery plan. You see exactly what you're getting and when."
3. "Build" — "Clean architecture. Weekly updates. Full visibility throughout. No black boxes."
4. "Launch" — "On time. As scoped. With full documentation and a team ready to support what comes next."
```

---

### Why NexOra Section

```
Build the Why NexOra section. Background: --color-surface-alt.

Requirements:
- Eyebrow: "Why NexOra"
- Headline: "A studio that treats your product like it's our own."
- 3-column equal card grid, gap 14px
- Each card: padding 36px 30px, border 1px solid --color-border, border-radius 18px
  - Hover: border-color rgba(123,94,167,0.25), background rgba(123,94,167,0.04)
- Card index number: 11px Syne weight 600, uppercase, tracking 0.12em, color rgba(123,94,167,0.5)
- Card title: Syne 17px weight 600, --color-text-primary, tracking -0.01em
- Card body: 12px DM Sans weight 300, --color-text-secondary, line-height 1.7
- NO icons. NO checkboxes. Text only.

Cards data:
1. "01" | "We don't overpromise" | "We'd rather decline a project than take it and underdeliver. Before we start, we align on scope, timeline, and budget — and we hold to it."
2. "02" | "Full studio. One team." | "Strategy, design, and development under one roof. No outsourcing, no handoff gaps, no miscommunication between moving parts."
3. "03" | "Speed without shortcuts" | "We move fast because we plan properly — not because we cut corners. Every product we ship is built to last and built to scale."
```

---

### CTA Strip

```
Build the CTA Strip component — reused at the bottom of every page.

Requirements:
- Background: --color-surface-alt, border-top 1px solid --color-border
- Padding: 80px top and bottom
- Centred content, max-width 560px
- Eyebrow: "What's next"
- Headline: "We're selective about the projects we take on." — Syne 36px weight 700, --color-text-primary, text-align center
- Sub: "If you have something worth building, let's talk." — 16px DM Sans weight 300, --color-text-secondary, text-align center
- Primary button: "Start a project →" — centred, uses --gradient-button, box-shadow 0 8px 32px --color-purple-glow
```

---

### Contact Page Form

```
Build the Contact page.

Page structure:
1. Hero: eyebrow "Project intake", headline "Start a Project", sub "Tell us what you're building. We'll respond within 2 business days with clarity on scope, direction, and next steps."
2. How it works block: 3 short bullet points (no icons, just dash-style list):
   — Clear feedback on feasibility
   — Suggested approach or structure
   — Rough scope direction
3. Contact form (React Hook Form)
4. Pricing note: "Projects typically start from £750. We'll confirm scope and budget in our first response."
5. Email fallback: "Or email us directly at [EMAIL]"

Form fields:
- Name (required)
- Email (required, email validation)
- Company (optional)
- Project type (select: Web Platform, Mobile App, Website, AI Integration, Other)
- Project description (textarea, min 50 chars, placeholder: "What are you building, who's it for, and what does success look like?")
- Submit button: "Submit project →"

Form field styling:
- background: --color-surface
- border: 1px solid --color-border
- border-radius: 8px
- padding: 12px 16px
- color: --color-text-primary
- font-family: DM Sans
- On focus: border-color --color-cyan, outline none
- Width: 100%
- Labels: 12px DM Sans weight 500, --color-text-muted, margin-bottom 6px

On submit: use Resend to send form data to the studio email. Show a success state in the form area — no page redirect.
```

---

## DEBUGGING PROMPTS

Use these when something looks wrong.

**If a section looks cramped:**
```
The [section name] section looks cramped. Increase the section padding to 88px top and bottom. Do not reduce font sizes. Add more space between the eyebrow label and the headline (margin-top: 14px). Add more space between the headline and the content block (margin-top: 52px).
```

**If gradients are appearing in the wrong places:**
```
Audit the entire file for gradient usage. The only permitted gradients are:
- --gradient-hero: hero h1 line 2 only
- --gradient-button: primary CTA button only
- --gradient-logo: logo "O" only
- --gradient-accent: stat "100" and "0" spans only
- --gradient-line: hero bottom border only
- --gradient-step-hover: process step ::before on :hover only
Remove any gradient used outside these rules and replace with the appropriate solid colour.
```

**If a section headline is centred:**
```
Section headlines must be left-aligned. Change text-align to left on the [section] headline. Only single short headlines on dedicated hero/page-header sections may be centred.
```

**If card patterns from the old template appear:**
```
Remove [describe the element]. The design system does not use [checkbox rows / icon circles / floating particles / ambient glow effects]. Replace with the correct pattern from the design brief.
```

**If the font looks wrong:**
```
Check that Syne is applied to all headlines, section titles, card titles, step numbers, and the logo. DM Sans must be applied to all body text, nav links, buttons, tags, eyebrows, and captions. No system fonts should appear anywhere on the page.
```

---

*Keep this file in the project root as `CURSOR_PROMPTS.md`. Reference the master prompt at the start of every new Cursor session.*
ENDOFFILE