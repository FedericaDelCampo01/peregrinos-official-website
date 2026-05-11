# Como Ayudar Hover Interaction Design

## Objective

Update the `Cómo ayudar` list interaction so it matches the Figma hover state more closely and connects directly to the contact form flow.

## Scope

### In scope

- Hover animation for each `Cómo ayudar` item on desktop
- Tap-triggered animation plus delayed scroll on mobile
- Expanded state showing description text inside the item
- Background color growing outward from the arrow circle toward the full item width
- New optional form field: `Cómo quiero ayudar`
- Automatic prefill of that form field when the user activates one of the `Cómo ayudar` items

### Out of scope

- Changing the existing required validation rules for name, email, and message
- Turning the `Cómo ayudar` area into a persistent accordion
- Adding backend integration for help-intent submissions

## Interaction Design

Each `Cómo ayudar` row will have two visual states:

- default: light neutral background, title visible, description hidden, colored arrow circle on the right
- active: item background filled with the row color, description visible, arrow circle visually absorbed into the expanded background

### Desktop behavior

- `hover` triggers the active state
- `focus-visible` should match hover for accessibility
- clicking the row scrolls to `#sumate`
- clicking also preselects the corresponding `Cómo quiero ayudar` dropdown option

### Mobile behavior

- tapping a row briefly triggers the active state first
- after a short delay, the page scrolls to `#sumate`
- the matching dropdown option is preselected before or during that navigation
- the active state does not need to remain open after navigation begins

## Visual Behavior

- The color expansion should feel like it originates from the right-side colored circle and spreads across the full row
- The description text should fade and slide in subtly, not pop abruptly
- The transition should stay smooth and quick, prioritizing polish over theatrical motion
- The row should preserve the rounded capsule silhouette throughout the transition

## Data Model

The `Cómo ayudar` options should become structured objects with:

- title
- description
- color
- form value

That same source of truth will be used by:

- the `Cómo ayudar` list
- the new dropdown field in the form
- the prefill logic

## Form Changes

Add a new optional select field:

- label: `Cómo quiero ayudar`
- options:
  - `Hacer una donación`
  - `Ser madrina o padrino`
  - `Ser voluntario`
  - `Tengo una idea`

Rules:

- the field is optional
- the user may edit it manually
- when arriving from a `Cómo ayudar` item, it should already be selected
- if the user changes it afterward, their manual selection should be respected

## Implementation Notes

- Prefer CSS-driven animation using pseudo-elements or an inner expanding layer for the background fill
- Use React state only for activation/prefill timing, not for complex animation choreography
- Use a short delay before mobile scroll so the animation is perceivable
- Keep the form field integrated into the existing persistence helper so draft state remains consistent

## Testing

Add behavior coverage for:

- rendering the new optional select field
- preselecting the dropdown when an item is activated
- preserving the selected help intent in local draft state if the form is edited afterward

## Decisions Made

- desktop uses hover/focus for expansion
- mobile uses tap, short animation, then navigation to the form
- the new help-intent field is optional
- selecting an item should prepopulate the form automatically
