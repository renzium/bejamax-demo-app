# Loom Video Script - Bejamas Hiring Task (5 Minutes Max)

## Quick Intro (0:00 - 0:15)

"Hi! I'm [Your Name]. This Next.js 16 + React 19.2 demo covers four areas: JavaScript event loop, performance debugging, CMS integration, and multi-brand theming. Let's dive in!"

**Action:** Show homepage briefly, then navigate to first demo

---

## Part 1: Event Loop (0:15 - 1:15)

**Action:** Click "Event Loop" → Show code block → Click "Run Demo"

"JavaScript concurrency: call stack runs first (A, D), then microtask queue (B from Promise), finally macrotask queue (C from setTimeout). The colored logs visualize each queue."

**Action:** Quickly show `src/app/event-loop/page.tsx` - highlight the execution order logic

"Implementation uses React state to simulate the event loop, respecting JavaScript's execution model."

---

## Part 2: Performance Debugging (1:15 - 2:30)

**Action:** Navigate to Performance page → Click "Run Slow Task (Blocks UI)"

"Blocking task freezes the UI - red status shows it's blocking the main thread. In Chrome DevTools Performance tab, you'd see a long task blocking everything."

**Action:** Click "Run Slow Task with WebWorker"

"Same computation in a Web Worker keeps UI responsive - green status. The worker runs in a separate thread."

**Action:** Quick peek at `src/workers/slowWorker.ts`

"Web Worker handles heavy computation off the main thread. For debugging, use Chrome DevTools Performance tab, Lighthouse, and React DevTools Profiler."

---

## Part 3: CMS Integration (2:30 - 3:15)

**Action:** Navigate to CMS page → Click "Refresh Content"

"Headless CMS integration pattern - here using mock data, but same approach works with Sanity, Contentful, Strapi, or others."

**Action:** Quick look at `src/data/cms-data.ts`

"Fetch function simulates CMS API call. In production, use Next.js ISR for caching. I've worked with Sanity, Contentful, Strapi, Prismic, and Hygraph - each has strengths for different use cases."

---

## Part 4: Multi-Brand Theming (3:15 - 4:30)

**Action:** Navigate to Theming page → Switch themes (Brand A → B → C)

"Multi-brand theming system: CSS variables + Tailwind + CVA. Watch colors update instantly across all components."

**Action:** Open `src/app/globals.css` - show theme variables

"Each theme defines CSS variables. Applied via `data-theme` attribute on document root."

**Action:** Open `src/components/ui/button.tsx` - show CVA usage

"CVA provides type-safe variants. Components use `bg-brand-primary` which maps to CSS variables, so themes update automatically."

**Action:** Quick look at `tailwind.config.ts`

"Tailwind maps CSS variables to utility classes. ThemeProvider manages state and applies themes instantly without re-renders."

---

## Architecture & Wrap-up (4:30 - 5:00)

**Action:** Show folder structure quickly: `app/`, `components/ui/`, `components/theme/`, `data/`, `workers/`

"Next.js 16 App Router, Server Components by default, Client Components only for interactivity. TypeScript throughout."

**Action:** Back to homepage

"Summary: Event loop visualization, performance debugging with Web Workers, CMS integration patterns, and scalable multi-brand theming. All production-ready code. Thanks for watching!"

---

## Quick Recording Tips:

1. **Speed:** Speak clearly but efficiently - no long pauses
2. **Code:** Show key files only, skip less important details
3. **Browser:** Have app ready, demonstrate quickly
4. **Focus:** Hit the main points, don't over-explain
5. **Practice:** Run through once before recording to time it

