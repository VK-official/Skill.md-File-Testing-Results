---

title: "Hero Page Design & Animation"
id: hero-page-skill
version: 1.0.0
description: "A reusable skill module that enables an agent to produce high-end, accessible, performant hero sections with Apple-level polish and layered animations."
tags: [hero, animation, design-system, accessibility, performance]
author: "Designer / Frontend Engineer"
date: 2026-05-04
license: MIT
------------

# Hero Page Design & Animation — skill.md

## Purpose

Provide a prescriptive, production-ready skill the agent can use to generate pixel-perfect, responsive, accessible, and highly polished hero sections (static → interactive, mobile → desktop) including complex, layered animations and operational guidelines.

## Scope

* Full-screen and stacked hero variants.
* Static, interactive, and media-backed backgrounds (image, video, Lottie, WebGL).
* Entrance/scroll/gesture-driven and micro-interaction animations.
* Responsive, accessible, and performance-first implementations.

## Principles & Rules

* **Design fidelity:** Match tokens (spacing, type, color, radii) and preserve motion intent.
* **Polish:** Use layered motion (primary, secondary, micro), spring physics, and refined easing (example: cubic-bezier(0.22, 1, 0.36, 1)).
* **Performance-first:** Animate only composited properties (transform, opacity); avoid layout-triggering properties in animations.
* **Progressive enhancement:** Baseline works without JS; enhance with JS where supported.
* **Accessibility:** Keyboard navigation, semantic HTML, alt text, ARIA only where necessary, and respect prefers-reduced-motion.
* **Responsiveness:** Provide distinct layout and asset variants for small/medium/large viewports.
* **Maintainability:** Centralize motion tokens and document variants and fallbacks.

## Capabilities (agent outcomes)

* Generate HTML/CSS/JS component bundles and Storybook stories.
* Produce motion specs (timing charts, sequence diagrams, keyframes).
* Recommend asset strategies (formats, sizes, CDN, caching).
* Output accessibility checklists, QA steps, tests, and CI gates.
* Export production-ready snippets for major stacks (React + Framer Motion, vanilla + GSAP, Web Animations API).

## Required Dependencies (recommended stack)

Core

* Node.js >= 18
* Vite or esbuild
* TypeScript (recommended)
* PostCSS / Tailwind CSS (token-driven styling)
* Autoprefixer
* CSS modules / CSS-in-JS / Stitches / vanilla-extract (pick one for scoping)
  Primary animation libraries (choose one)
* Framer Motion (React)
* GSAP (framework-agnostic)
* Web Animations API (+ polyfill if needed)
  Enhancers (optional)
* Lottie / Bodymovin
* Three.js or PixiJS (for WebGL)
* IntersectionObserver polyfill
* sharp / Squoosh scripts (image generation)
* hls.js (adaptive video)
  Testing & QA
* Playwright or Cypress (end-to-end & visual)
* Storybook + Chromatic (visual review)
* axe-core (accessibility)
  Performance & CI
* Lighthouse CI
* Bundle analyzer (vite-plugin-visualizer)
* GitHub Actions templates (lint, test, build)

## Tokens & Conventions

* Durations: micro 75ms, short 200ms, standard 400ms, long 700ms
* Easing:

  * micro: cubic-bezier(0.4, 0.0, 0.2, 1)
  * primary: cubic-bezier(0.22, 1, 0.36, 1)
  * entrance: cubic-bezier(0.16, 1, 0.3, 1)
* Z-layering: base 0, surface 10, overlay 50, motion 100
* Motion groups: primary (headline), secondary (subtitle/CTA), micro (icons/ornaments)

## File & Component Structure (recommended)

* /src/components/Hero/

  * Hero.tsx (or Hero.jsx / Hero.js)
  * hero.module.css (or hero.css / hero.st.css)
  * animations.ts (timelines/variants)
  * assets/ (images, Lottie JSON, video)
  * types.ts
  * README.md (usage + props)
* /tokens/motion.json
* /stories/Hero.stories.tsx
* /tests/hero.spec.ts
* /design/hero-specs.fig (Figma/Sketch reference)

## Component API (example)

* heading: string | ReactNode
* subheading?: string | ReactNode
* ctas?: Array<{ label: string; href?: string; action?: () => void; primary?: boolean }>
* background: { type: 'image'|'video'|'gradient'|'canvas'|'lottie'; src: string; options?: object }
* layout: 'centered'|'split'|'left'|'right'
* height: 'screen'|'min-screen'|'auto'
* animationPreset?: 'subtle'|'cinematic'|'dramatic'|'custom'
* prefersReducedMotion?: boolean (internal detection)

## Animation Patterns & Recipes

Entrance sequence (recommended)

1. Background reveal (opacity/scale/clip-path)
2. Headline (translateY 12–24px + opacity)
3. Subtitle/supporting copy (stagger 40–80ms)
4. Primary CTA (scale 0.96 → 1, shadow)
5. Micro ornaments (parallax, subtle rotation)

Scroll-tied parallax

* Use translate3d on layered elements; drive with requestAnimationFrame or a performant scroll driver (e.g., ScrollTimeline / ScrollTrigger).

Hover & focus micro-interactions

* Scale 1.02, translateY -2px; apply subtle backdrop blur where appropriate; use will-change: transform.

Background video

* Include poster, muted, playsinline, loop; provide compressed poster fallback and no auto-playing audio.

Lottie

* Use segments and controlled playback; defer until visible.

## Accessibility Checklist

* Keyboard reachable interactives; logical tab order.
* Visible, high-contrast focus indicators.
* Respect prefers-reduced-motion via CSS and JS fallbacks.
* Alt text for images; captions/transcripts for video.
* Single H1 per page; semantic structure.
* Live regions only when necessary for screen readers.
* Color contrast: ≥ 4.5:1 for normal body text; ≥ 3:1 for large text.

## Performance Checklist

* Inline critical CSS for hero; defer non-critical CSS/JS.
* Defer/hydrate animations after first paint.
* Serve responsive images via srcset + sizes; AVIF/WebP preferred.
* Lazy-load offscreen media; defer Lottie until visible.
* Use requestIdleCallback for non-essential preloads.
* Target hero bundle delta < 50 KB gzipped where feasible.

## QA & Testing

* Visual regression tests for breakpoints and motion states.
* Interaction tests: keyboard navigation, reduced-motion, focus states.
* Performance tests: Lighthouse gates and TTI thresholds.
* Accessibility audits: axe + manual screen-reader checks.

## Example Code — HTML skeleton

<section class="hero" role="region" aria-label="Hero">
  <div class="hero__bg" aria-hidden="true"></div>
  <div class="hero__content">
    <h1 class="hero__title">Product name</h1>
    <p class="hero__sub">Short explanation that sells value.</p>
    <div class="hero__actions">
      <a class="btn btn--primary" href="/get-started">Get started</a>
      <a class="btn" href="/learn">Learn more</a>
    </div>
  </div>
</section>

## Reduced-motion CSS

@media (prefers-reduced-motion: reduce) {
.hero * {
animation: none !important;
transition: none !important;
}
}

## Delivery Options (agent actions)

* Produce a component bundle (HTML/CSS/JS + assets + README).
* Produce Storybook stories + visual snapshots.
* Produce a motion spec (timing chart, keyframes, short demo GIF).
* Produce a lightweight static fallback (CSS-only) plus a pixel-perfect JS-enhanced variant.

## High-end Enhancements (optional)

* 3D parallax via CSS or small WebGL layer.
* Dynamic color/lighting extraction to adapt UI accents to background imagery.
* Server-driven, content-aware image cropping (SmartCrop).
* Predictive prefetch of next route on CTA hover using idle time.
* Theme-aware motion (auto-adapt animations to dark/light mode).
* An interactive motion playground for QA (controls for timing/easing/offsets).

## Maintenance & Documentation

* Single source of truth for motion tokens.
* Versioned motion tokens; document breaking motion changes.
* One-page quickstart in component README; list fallbacks and performance budgets.

## Acceptance Criteria (example PR gates)

* Visual match within ±2px of design at common breakpoints.
* Lighthouse performance >= 90 (subject to asset constraints).
* Zero critical axe-core violations.
* Reduced-motion honored and documented.

## Use Cases & Examples the Agent Should Produce

* Pixel-perfect React + Framer Motion hero component (desktop → mobile).
* Vanilla JS + GSAP timeline with progressive enhancement fallback.
* Lottie-backed hero with controlled playback and segment triggers.
* Video-backed hero with poster, adaptive bitrate suggestion, and fallbacks.

## Quick Checklist (copy-paste for PRs / QA)

* [ ] Semantic HTML and single H1
* [ ] Keyboard accessible CTAs (focus visible)
* [ ] prefers-reduced-motion respected
* [ ] Responsive assets (srcset / sizes)
* [ ] Hero bundle delta under target
* [ ] Visual tests added for breakpoints & motion states
* [ ] Axe-core automated tests passing
* [ ] Performance gate (Lighthouse) added to CI

## Example Agent Prompts (to produce deliverables)

* "Generate a React + Framer Motion Hero component with three responsive breakpoints, Lottie accent, Storybook story, and Playwright tests; prioritize performance and accessibility."
* "Export a CSS-only hero variant with entrance animations replaced by CSS transitions and a JS-enhanced variant using GSAP timelines."

## Notes

* Keep motion token names stable across releases.
* Provide explicit fallbacks for all advanced features (Lottie → SVG/PNG; video → poster image).
* For live production, estimate bandwidth cost and set performance budgets before adding heavy visual effects.

---
