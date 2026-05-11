# Como Ayudar Hover Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the Figma-style hover/tap interaction to `Cómo ayudar` items and connect each option to a new optional prefilled help-intent field in the contact form.

**Architecture:** Keep a single source of truth for help options and reuse it in both the interactive list and the form select. Use CSS-driven expansion for the hover fill, a small React state for the temporarily active item plus mobile delayed navigation, and extend the existing form draft persistence to include the optional help-intent field.

**Tech Stack:** React, TypeScript, CSS, Vitest, Testing Library, localStorage.

---

## File Structure

- Modify: `src/components/GetInvolvedSection.tsx`
- Modify: `src/components/GetInvolvedSection.css`
- Modify: `src/components/JoinForm.tsx`
- Modify: `src/components/JoinForm.css`
- Modify: `src/lib/storage.ts`
- Modify: `src/lib/storage.test.ts`
- Modify: `src/components/JoinForm.test.tsx`
- Modify: `src/App.test.tsx`
- Create: `src/data/helpOptions.ts`

## Self-Review

- Spec coverage: covers hover/tap animation, description reveal, delayed mobile scroll, optional select field, and prefill flow.
- Placeholder scan: no TODOs or undefined steps.
- Type consistency: one shared option type and one shared form field key.
