# Peregrinos Landing Design

## Objective

Build a one-page landing site for Peregrinos in `/Users/Babi/Documents/Peregrinos` that matches the provided Figma design as closely as possible while delivering real front-end behavior for:

- in-page navigation with smooth scrolling
- working forms with validation and success/error states

The first implementation milestone covers the shared app foundation plus the hero section only. Additional sections will be added incrementally as more screenshots are provided.

## Scope

### In scope

- New single-page web app
- Sticky or top-positioned navigation aligned to the Figma design
- Hero section matching the provided screenshot
- Automatic image slider in the hero using temporary placeholders
- Slowly rotating pink decorative shape in the hero
- Navigation links that scroll to landing sections
- CTA button that scrolls to the participation form section
- At least one real front-end form in the landing
- Form validation, submission feedback, and local persistence with `localStorage`
- Responsive adaptation for mobile while preserving the visual language from desktop
- Local asset handling for logo, future images, and fonts

### Out of scope for now

- Authentication
- Backend or API integration
- Payments or checkout
- Non-visible functionality not present in the landing
- Final production image set for the gallery

## Product Structure

The site will be a single scrolling landing page with section anchors.

Initial sections:

- `hero`
- placeholder shells for `quienes-somos`, `que-hacemos`, `como-ayudar`
- `sumate` form section

The header links:

- `¿Quiénes somos?` -> `#quienes-somos`
- `¿Qué hacemos?` -> `#que-hacemos`
- `¿Cómo ayudar?` -> `#como-ayudar`
- `Quiero ser parte` -> `#sumate`

## Visual System

### Fonts

- Headings: `Libre Baskerville`
- Body and interface text: `Satoshi Variable`

### Hero composition

The hero will preserve these visible characteristics from the screenshot:

- large centered serif quote headline
- supporting paragraph centered below the headline
- horizontal navigation with generous whitespace
- dark rounded CTA button on the top right
- logo on the top left using the provided SVG
- collage-like photo strip near the lower portion of the hero
- large pink decorative flower/star shape positioned behind part of the gallery

### Responsive behavior

Desktop fidelity is the first priority. Mobile will adapt the same composition with these rules:

- navigation collapses into a simpler pattern if needed, while preserving the same branding and CTA prominence
- hero text scales down without changing font pairing or tone
- gallery cards stack or partially overflow in a controlled way rather than shrinking to unreadable sizes
- decorative shape remains visible but secondary to content

## Architecture

The implementation will use a React + Vite app because it supports component-driven UI, animations, and form state cleanly while keeping iteration fast.

Planned top-level pieces:

- `App`
- `Header`
- `HeroSection`
- `AutoSlider`
- `RotatingShape`
- `SectionShell`
- `JoinForm`

Supporting modules:

- shared design tokens or constants for colors, spacing, layout widths, and transitions
- local data for nav items, placeholder slides, and form defaults
- utility functions for scroll behavior and local storage persistence

## Behavior Design

### Navigation

- Header links perform smooth scrolling to target sections
- CTA scrolls to the form section
- Active section highlighting is optional for the first implementation and should only be added if it does not introduce unnecessary complexity

### Slider

- Slider auto-advances on a timed interval
- Uses placeholder slides until final images are supplied
- Keeps a layout consistent with the overlapping editorial composition shown in the screenshot, rather than a generic full-width carousel
- Manual controls are not required unless later screenshots show them

### Rotating decorative shape

- The pink shape rotates slowly around its own center
- Motion should be continuous and subtle
- Animation must not interfere with text readability or trigger layout shifts

### Form

The first form should be real on the front end and support:

- required field validation
- inline or adjacent error messages
- disabled or loading-like submit state if needed
- success confirmation after submit
- saving form progress or submitted payload locally via `localStorage`

Since there is no backend yet, submission will be treated as locally successful after client-side validation passes. The implementation should isolate submit handling so a future API can replace local persistence with minimal changes.

## Asset Strategy

- Use `/Users/Babi/Downloads/Logo_Peregrinos.svg` as the navbar logo source
- Use temporary gallery placeholders in the hero until final photos are provided
- Keep future photo replacement simple by sourcing slides from a data array instead of hardcoding inside markup
- Fonts should be loaded in a way compatible with the app setup and stable across local development

## Testing Strategy

Implementation should follow a test-first workflow for behavior changes:

- component or behavior tests for smooth-scroll trigger logic where practical
- tests for form validation and successful local submission flow
- tests for any storage helper logic

Visual fidelity itself will be validated manually against the screenshot during implementation.

## Risks And Constraints

- Figma file access is currently unavailable through the integration, so screenshots are the temporary source of truth
- Only the hero screenshot is available so far, so later section spacing and rhythm may need small adjustments once new screenshots arrive
- Exact mobile behavior is inferred until dedicated mobile designs are provided

## Delivery Plan

Phase 1:

- scaffold the app
- wire fonts and base styles
- build header and hero
- add rotating shape and placeholder auto-slider
- add anchor sections and form section foundation

Phase 2:

- refine hero fidelity against additional user feedback
- replace placeholder images with final gallery photos
- add subsequent landing sections from future screenshots

## Open Inputs Expected From User

- remaining landing screenshots after the hero
- final gallery photos
- any specific form fields required for the participation flow

## Decisions Made

- the site is a single landing page, not multi-page
- only navigation and forms need to be functional in the first version
- auth, checkout, and backend integrations are intentionally excluded
- the recommended workflow is to build the real landing foundation now and add sections incrementally as screenshots arrive
