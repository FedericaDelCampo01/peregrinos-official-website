# Hero And Espacios Asset Update Design

## Objective

Replace the current CSS-built rotating hero shape with the provided hero SVG asset and update `Nuestros espacios` cards so their hover state matches the new visual reference more closely using the per-card decorative assets supplied by the user.

## Scope

### In scope

- Replace the hero rotating decorative shape with `src/assets/hero/Shape Rotating.svg`
- Preserve the current slow rotation behavior in the hero
- Add hover-state decorative shapes to each `Nuestros espacios` card using the provided `src/assets/espacios/*` files
- Update card hover layout so it resembles the supplied screenshot more closely
- Add per-card descriptive copy for the hover state

### Out of scope

- Reworking the full gallery system in the hero
- Changing the section order or card count in `Nuestros espacios`
- Adding new navigation or form behavior

## Hero Update

- The rotating pink shape in the hero should use the real SVG asset instead of the current CSS-generated polygon shape
- Rotation remains slow and continuous
- Positioning should stay visually aligned with the current hero composition unless the asset dimensions require a small offset adjustment

## Program Cards Update

Each program card should have:

- title
- background color
- image
- hover description
- decorative shape asset

### Resting state

- same overall grid placement
- title and image visible
- decorative shape hidden or visually inactive
- no descriptive paragraph visible

### Hover state

- decorative shape appears within the card composition
- title, image, and description shift into the Figma-inspired arrangement
- description becomes visible with motion but without breaking the grid or pushing surrounding cards
- card dimensions remain stable enough to avoid layout jumps across the whole row

## Implementation Notes

- Store each program's decorative asset in the data model alongside title, color, image, and description
- Prefer layered absolute positioning inside the card for the decorative shapes
- Use transitions for opacity and transform rather than height-based layout changes where possible
- Keep the card container stable so hover feels premium rather than jumpy

## Testing

Behavior coverage can remain lightweight for this change:

- app still renders `Nuestros espacios`
- build remains successful
- existing interaction tests stay green

## Decisions Made

- use the real hero SVG asset
- implement the richer card hover for all cards, not only one
- keep the section structure stable while improving the internal hover composition
