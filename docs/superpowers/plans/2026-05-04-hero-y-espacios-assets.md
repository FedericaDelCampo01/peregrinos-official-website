# Hero And Espacios Asset Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hero rotating shape with the provided SVG asset and update `Nuestros espacios` cards to use supplied decorative assets with richer hover states.

**Architecture:** Keep the hero change isolated to the rotating shape component so the section layout stays stable. For `Nuestros espacios`, move card data into a richer structure including decorative asset and description, then layer the hover composition inside each card with stable dimensions and CSS transitions.

**Tech Stack:** React, TypeScript, CSS, Vite, Vitest.

---

## File Structure

- Modify: `src/components/RotatingShape.tsx`
- Modify: `src/components/RotatingShape.css`
- Modify: `src/components/ProgramsSection.tsx`
- Modify: `src/components/ProgramsSection.css`
- Create: `src/data/programOptions.ts`
- Modify: `src/App.test.tsx`

## Self-Review

- Spec coverage: includes hero asset swap and all-card richer hover state.
- Placeholder scan: no TODOs or undefined tasks.
- Type consistency: card data stays centralized and shared by the card renderer.
