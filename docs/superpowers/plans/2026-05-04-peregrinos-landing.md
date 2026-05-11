# Peregrinos Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first functional version of the Peregrinos one-page landing in `/Users/Babi/Documents/Peregrinos`, including a Figma-faithful hero, in-page navigation, and a real front-end participation form.

**Architecture:** Create a new React + Vite + TypeScript single-page app with a small component structure: `Header`, `HeroSection`, `AutoSlider`, `RotatingShape`, `SectionShell`, and `JoinForm`. Keep design values centralized in a theme file, load the supplied SVG logo as a local asset, use placeholder images for the hero gallery, and isolate form persistence in a small storage helper so a future API can replace `localStorage` without rewriting the form.

**Tech Stack:** React 19, Vite, TypeScript, Vitest, Testing Library, CSS modules or plain CSS files, `localStorage`, SVG asset import.

---

## File Structure

### App shell and config

- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `.gitignore`

### Source files

- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`
- Create: `src/theme.ts`
- Create: `src/assets/logo-peregrinos.svg`
- Create: `src/assets/placeholders/placeholder-1.svg`
- Create: `src/assets/placeholders/placeholder-2.svg`
- Create: `src/assets/placeholders/placeholder-3.svg`
- Create: `src/assets/placeholders/placeholder-4.svg`
- Create: `src/assets/placeholders/placeholder-5.svg`
- Create: `src/components/Header.tsx`
- Create: `src/components/Header.css`
- Create: `src/components/HeroSection.tsx`
- Create: `src/components/HeroSection.css`
- Create: `src/components/AutoSlider.tsx`
- Create: `src/components/AutoSlider.css`
- Create: `src/components/RotatingShape.tsx`
- Create: `src/components/RotatingShape.css`
- Create: `src/components/SectionShell.tsx`
- Create: `src/components/SectionShell.css`
- Create: `src/components/JoinForm.tsx`
- Create: `src/components/JoinForm.css`
- Create: `src/data/navItems.ts`
- Create: `src/data/slides.ts`
- Create: `src/lib/storage.ts`

### Tests

- Create: `src/lib/storage.test.ts`
- Create: `src/components/JoinForm.test.tsx`
- Create: `src/App.test.tsx`
- Create: `src/test/setup.ts`

## Notes Before Starting

- Copy the provided logo from `/Users/Babi/Downloads/Logo_Peregrinos.svg` into `src/assets/logo-peregrinos.svg`.
- Use the provided screenshot as the hero reference until more captures arrive.
- If `Satoshi Variable` is not available as a local file yet, use a temporary `@font-face` placeholder only if the actual font file can be provided quickly; otherwise use a precise fallback stack and document that the real font file must be dropped into `src/assets/fonts/` later. `Libre Baskerville` can be loaded from a web font source for now.

### Task 1: Scaffold The React App

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `.gitignore`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`

- [ ] **Step 1: Create the package manifest**

```json
{
  "name": "peregrinos",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.2.0",
    "@testing-library/user-event": "^14.6.1",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.0",
    "jsdom": "^25.0.1",
    "typescript": "~5.6.0",
    "vite": "^6.0.0",
    "vitest": "^2.1.8"
  }
}
```

- [ ] **Step 2: Create Vite and TypeScript config files**

`tsconfig.json`

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

`tsconfig.app.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": false,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

`tsconfig.node.json`

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

`vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts'
  }
})
```

- [ ] **Step 3: Create the HTML entry and ignore file**

`index.html`

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Peregrinos</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

`.gitignore`

```gitignore
node_modules/
dist/
.DS_Store
.superpowers/
```

- [ ] **Step 4: Create the minimal app entry**

`src/main.tsx`

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

`src/App.tsx`

```tsx
export default function App() {
  return <div>Peregrinos</div>
}
```

`src/index.css`

```css
:root {
  color: #37392f;
  background: #f8f6f1;
  font-family: Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}
```

- [ ] **Step 5: Install dependencies**

Run: `npm install`

Expected: npm installs React, Vite, TypeScript, and test dependencies with no fatal errors.

- [ ] **Step 6: Verify the scaffold builds**

Run: `npm run build`

Expected: `vite build` completes successfully and outputs files under `dist/`.

- [ ] **Step 7: Commit**

```bash
git add package.json tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts index.html .gitignore src/main.tsx src/App.tsx src/index.css package-lock.json
git commit -m "chore: scaffold peregrinos landing app"
```

### Task 2: Add Form Persistence Helper With TDD

**Files:**
- Create: `src/lib/storage.ts`
- Create: `src/lib/storage.test.ts`
- Create: `src/test/setup.ts`

- [ ] **Step 1: Write the failing storage tests**

`src/lib/storage.test.ts`

```ts
import { describe, expect, it, beforeEach } from 'vitest'
import {
  loadJoinFormDraft,
  saveJoinFormDraft,
  clearJoinFormDraft,
  type JoinFormValues
} from './storage'

const sampleDraft: JoinFormValues = {
  fullName: 'Ana Perez',
  email: 'ana@example.com',
  message: 'Quiero colaborar con Peregrinos.'
}

describe('join form storage', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('returns empty defaults when nothing was saved', () => {
    expect(loadJoinFormDraft()).toEqual({
      fullName: '',
      email: '',
      message: ''
    })
  })

  it('saves and reloads a draft', () => {
    saveJoinFormDraft(sampleDraft)

    expect(loadJoinFormDraft()).toEqual(sampleDraft)
  })

  it('clears the saved draft', () => {
    saveJoinFormDraft(sampleDraft)
    clearJoinFormDraft()

    expect(loadJoinFormDraft()).toEqual({
      fullName: '',
      email: '',
      message: ''
    })
  })
})
```

- [ ] **Step 2: Run the storage test to verify it fails**

Run: `npm test -- src/lib/storage.test.ts`

Expected: FAIL because `./storage` does not exist yet.

- [ ] **Step 3: Create the test setup file**

`src/test/setup.ts`

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 4: Write the minimal storage helper**

`src/lib/storage.ts`

```ts
export type JoinFormValues = {
  fullName: string
  email: string
  message: string
}

const STORAGE_KEY = 'peregrinos.join-form'

const emptyDraft: JoinFormValues = {
  fullName: '',
  email: '',
  message: ''
}

export function loadJoinFormDraft(): JoinFormValues {
  const raw = window.localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return emptyDraft
  }

  try {
    const parsed = JSON.parse(raw) as Partial<JoinFormValues>

    return {
      fullName: parsed.fullName ?? '',
      email: parsed.email ?? '',
      message: parsed.message ?? ''
    }
  } catch {
    return emptyDraft
  }
}

export function saveJoinFormDraft(values: JoinFormValues) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values))
}

export function clearJoinFormDraft() {
  window.localStorage.removeItem(STORAGE_KEY)
}
```

- [ ] **Step 5: Run the storage test to verify it passes**

Run: `npm test -- src/lib/storage.test.ts`

Expected: PASS with 3 passing tests.

- [ ] **Step 6: Commit**

```bash
git add src/lib/storage.ts src/lib/storage.test.ts src/test/setup.ts vite.config.ts
git commit -m "test: add join form storage helper"
```

### Task 3: Add Landing Structure, Navigation, And Join Form With TDD

**Files:**
- Create: `src/components/JoinForm.tsx`
- Create: `src/components/JoinForm.css`
- Create: `src/components/SectionShell.tsx`
- Create: `src/components/SectionShell.css`
- Create: `src/data/navItems.ts`
- Create: `src/components/JoinForm.test.tsx`
- Create: `src/App.test.tsx`
- Modify: `src/App.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Write the failing app structure test**

`src/App.test.tsx`

```tsx
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders nav links and section anchors', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: '¿Quiénes somos?' })).toHaveAttribute('href', '#quienes-somos')
    expect(screen.getByRole('link', { name: '¿Qué hacemos?' })).toHaveAttribute('href', '#que-hacemos')
    expect(screen.getByRole('link', { name: '¿Cómo ayudar?' })).toHaveAttribute('href', '#como-ayudar')
    expect(screen.getByRole('link', { name: 'Quiero ser parte' })).toHaveAttribute('href', '#sumate')
    expect(document.getElementById('sumate')).not.toBeNull()
  })
})
```

- [ ] **Step 2: Write the failing join form test**

`src/components/JoinForm.test.tsx`

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { JoinForm } from './JoinForm'

describe('JoinForm', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('validates required fields and saves successful submissions locally', async () => {
    const user = userEvent.setup()

    render(<JoinForm />)

    await user.click(screen.getByRole('button', { name: /enviar/i }))

    expect(screen.getByText('Ingresá tu nombre.')).toBeInTheDocument()
    expect(screen.getByText('Ingresá un email válido.')).toBeInTheDocument()
    expect(screen.getByText('Contanos cómo querés sumarte.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Nombre y apellido'), 'Ana Perez')
    await user.type(screen.getByLabelText('Email'), 'ana@example.com')
    await user.type(screen.getByLabelText('Mensaje'), 'Quiero colaborar con actividades.')
    await user.click(screen.getByRole('button', { name: /enviar/i }))

    expect(screen.getByText('Recibimos tu mensaje. Gracias por sumarte.')).toBeInTheDocument()
    expect(window.localStorage.getItem('peregrinos.join-form')).toBeNull()
    expect(window.localStorage.getItem('peregrinos.join-form-submission')).toContain('Ana Perez')
  })
})
```

- [ ] **Step 3: Run both tests to verify they fail**

Run: `npm test -- src/App.test.tsx src/components/JoinForm.test.tsx`

Expected: FAIL because the components and structure do not exist yet.

- [ ] **Step 4: Extend the storage helper for saved submissions**

Update `src/lib/storage.ts`

```ts
export type JoinFormValues = {
  fullName: string
  email: string
  message: string
}

const DRAFT_KEY = 'peregrinos.join-form'
const SUBMISSION_KEY = 'peregrinos.join-form-submission'

const emptyDraft: JoinFormValues = {
  fullName: '',
  email: '',
  message: ''
}

export function loadJoinFormDraft(): JoinFormValues {
  const raw = window.localStorage.getItem(DRAFT_KEY)

  if (!raw) return emptyDraft

  try {
    const parsed = JSON.parse(raw) as Partial<JoinFormValues>

    return {
      fullName: parsed.fullName ?? '',
      email: parsed.email ?? '',
      message: parsed.message ?? ''
    }
  } catch {
    return emptyDraft
  }
}

export function saveJoinFormDraft(values: JoinFormValues) {
  window.localStorage.setItem(DRAFT_KEY, JSON.stringify(values))
}

export function clearJoinFormDraft() {
  window.localStorage.removeItem(DRAFT_KEY)
}

export function saveJoinFormSubmission(values: JoinFormValues) {
  window.localStorage.setItem(SUBMISSION_KEY, JSON.stringify(values))
}
```

- [ ] **Step 5: Create nav data and section shell**

`src/data/navItems.ts`

```ts
export const navItems = [
  { href: '#quienes-somos', label: '¿Quiénes somos?' },
  { href: '#que-hacemos', label: '¿Qué hacemos?' },
  { href: '#como-ayudar', label: '¿Cómo ayudar?' }
]
```

`src/components/SectionShell.tsx`

```tsx
import './SectionShell.css'
import type { ReactNode } from 'react'

type SectionShellProps = {
  id: string
  title: string
  children?: ReactNode
}

export function SectionShell({ id, title, children }: SectionShellProps) {
  return (
    <section id={id} className="section-shell">
      <div className="section-shell__inner">
        <p className="section-shell__eyebrow">Peregrinos</p>
        <h2>{title}</h2>
        {children ?? <p>Seccion en construccion.</p>}
      </div>
    </section>
  )
}
```

`src/components/SectionShell.css`

```css
.section-shell {
  padding: 120px 24px;
}

.section-shell__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.section-shell__eyebrow {
  margin: 0 0 12px;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

- [ ] **Step 6: Create the minimal join form**

`src/components/JoinForm.tsx`

```tsx
import { useState } from 'react'
import './JoinForm.css'
import {
  clearJoinFormDraft,
  loadJoinFormDraft,
  saveJoinFormDraft,
  saveJoinFormSubmission,
  type JoinFormValues
} from '../lib/storage'

type FormErrors = Partial<Record<keyof JoinFormValues, string>>

function validate(values: JoinFormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.fullName.trim()) errors.fullName = 'Ingresá tu nombre.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Ingresá un email válido.'
  if (!values.message.trim()) errors.message = 'Contanos cómo querés sumarte.'

  return errors
}

export function JoinForm() {
  const [values, setValues] = useState<JoinFormValues>(() => loadJoinFormDraft())
  const [errors, setErrors] = useState<FormErrors>({})
  const [successMessage, setSuccessMessage] = useState('')

  function updateField(field: keyof JoinFormValues, value: string) {
    const nextValues = { ...values, [field]: value }
    setValues(nextValues)
    saveJoinFormDraft(nextValues)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage('')
      return
    }

    saveJoinFormSubmission(values)
    clearJoinFormDraft()
    setValues({ fullName: '', email: '', message: '' })
    setErrors({})
    setSuccessMessage('Recibimos tu mensaje. Gracias por sumarte.')
  }

  return (
    <form className="join-form" onSubmit={handleSubmit} noValidate>
      <label>
        Nombre y apellido
        <input
          aria-label="Nombre y apellido"
          value={values.fullName}
          onChange={(event) => updateField('fullName', event.target.value)}
        />
        {errors.fullName ? <span>{errors.fullName}</span> : null}
      </label>

      <label>
        Email
        <input
          aria-label="Email"
          type="email"
          value={values.email}
          onChange={(event) => updateField('email', event.target.value)}
        />
        {errors.email ? <span>{errors.email}</span> : null}
      </label>

      <label>
        Mensaje
        <textarea
          aria-label="Mensaje"
          value={values.message}
          onChange={(event) => updateField('message', event.target.value)}
        />
        {errors.message ? <span>{errors.message}</span> : null}
      </label>

      <button type="submit">Enviar</button>
      {successMessage ? <p>{successMessage}</p> : null}
    </form>
  )
}
```

`src/components/JoinForm.css`

```css
.join-form {
  display: grid;
  gap: 20px;
  max-width: 680px;
}

.join-form label {
  display: grid;
  gap: 8px;
}

.join-form input,
.join-form textarea {
  width: 100%;
  border: 1px solid #cfc8bb;
  border-radius: 18px;
  padding: 16px 18px;
  background: #fffdf9;
}

.join-form textarea {
  min-height: 160px;
  resize: vertical;
}

.join-form button {
  width: fit-content;
  border: 0;
  border-radius: 999px;
  padding: 14px 28px;
  background: #37392f;
  color: #f8f6f1;
  cursor: pointer;
}
```

- [ ] **Step 7: Replace `App.tsx` with landing anchors and form section**

`src/App.tsx`

```tsx
import { JoinForm } from './components/JoinForm'
import { SectionShell } from './components/SectionShell'
import { navItems } from './data/navItems'

export default function App() {
  return (
    <>
      <header>
        <nav>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#sumate">Quiero ser parte</a>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h1>Peregrinos</h1>
        </section>
        <SectionShell id="quienes-somos" title="¿Quiénes somos?" />
        <SectionShell id="que-hacemos" title="¿Qué hacemos?" />
        <SectionShell id="como-ayudar" title="¿Cómo ayudar?" />
        <SectionShell id="sumate" title="Quiero ser parte">
          <JoinForm />
        </SectionShell>
      </main>
    </>
  )
}
```

- [ ] **Step 8: Run the app and form tests to verify they pass**

Run: `npm test -- src/App.test.tsx src/components/JoinForm.test.tsx`

Expected: PASS with all assertions green.

- [ ] **Step 9: Commit**

```bash
git add src/App.tsx src/App.test.tsx src/components/JoinForm.tsx src/components/JoinForm.css src/components/JoinForm.test.tsx src/components/SectionShell.tsx src/components/SectionShell.css src/data/navItems.ts src/lib/storage.ts
git commit -m "feat: add landing navigation and join form"
```

### Task 4: Build The Figma-Style Hero And Header

**Files:**
- Create: `src/theme.ts`
- Create: `src/components/Header.tsx`
- Create: `src/components/Header.css`
- Create: `src/components/HeroSection.tsx`
- Create: `src/components/HeroSection.css`
- Create: `src/components/AutoSlider.tsx`
- Create: `src/components/AutoSlider.css`
- Create: `src/components/RotatingShape.tsx`
- Create: `src/components/RotatingShape.css`
- Create: `src/data/slides.ts`
- Create: `src/assets/logo-peregrinos.svg`
- Create: `src/assets/placeholders/placeholder-1.svg`
- Create: `src/assets/placeholders/placeholder-2.svg`
- Create: `src/assets/placeholders/placeholder-3.svg`
- Create: `src/assets/placeholders/placeholder-4.svg`
- Create: `src/assets/placeholders/placeholder-5.svg`
- Modify: `src/App.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Write the failing hero rendering test**

Append to `src/App.test.tsx`

```tsx
  it('renders the hero quote and logo-driven header CTA', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: '“Ella es la gran misionera, ella obrará milagros”'
      })
    ).toBeInTheDocument()

    expect(screen.getByAltText('Peregrinos')).toBeInTheDocument()
    expect(screen.getByText(/Peregrinos acompaña a niños/i)).toBeInTheDocument()
  })
```

- [ ] **Step 2: Run the app test to verify it fails**

Run: `npm test -- src/App.test.tsx`

Expected: FAIL because the current hero and header do not match the design.

- [ ] **Step 3: Add shared theme values**

`src/theme.ts`

```ts
export const theme = {
  colors: {
    ink: '#37392f',
    background: '#f8f6f1',
    pink: '#e79be0',
    cardBlue: '#9ecbff',
    border: '#d7d0c4'
  },
  layout: {
    maxWidth: 1440,
    headerPaddingX: 48,
    sectionPaddingX: 24
  },
  motion: {
    shapeRotationSeconds: 28,
    sliderIntervalMs: 2800
  }
} as const
```

- [ ] **Step 4: Copy the logo and create five placeholder slide assets**

Copy:

```bash
cp "/Users/Babi/Downloads/Logo_Peregrinos.svg" "src/assets/logo-peregrinos.svg"
```

Create each placeholder file with distinct label text, for example `src/assets/placeholders/placeholder-1.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="520" viewBox="0 0 360 520" fill="none">
  <rect width="360" height="520" rx="28" fill="#9ECBFF"/>
  <rect x="24" y="24" width="312" height="472" rx="20" fill="#6FB1FF" fill-opacity="0.35"/>
  <text x="50%" y="50%" text-anchor="middle" fill="#FFFFFF" font-family="Arial" font-size="28">Placeholder 1</text>
</svg>
```

Repeat for placeholders 2 to 5, changing the final text label only.

- [ ] **Step 5: Create slide data and rotating shape**

`src/data/slides.ts`

```ts
import placeholder1 from '../assets/placeholders/placeholder-1.svg'
import placeholder2 from '../assets/placeholders/placeholder-2.svg'
import placeholder3 from '../assets/placeholders/placeholder-3.svg'
import placeholder4 from '../assets/placeholders/placeholder-4.svg'
import placeholder5 from '../assets/placeholders/placeholder-5.svg'

export const slides = [
  { id: 'slide-1', src: placeholder1, alt: 'Placeholder 1' },
  { id: 'slide-2', src: placeholder2, alt: 'Placeholder 2' },
  { id: 'slide-3', src: placeholder3, alt: 'Placeholder 3' },
  { id: 'slide-4', src: placeholder4, alt: 'Placeholder 4' },
  { id: 'slide-5', src: placeholder5, alt: 'Placeholder 5' }
]
```

`src/components/RotatingShape.tsx`

```tsx
import './RotatingShape.css'

export function RotatingShape() {
  return <div aria-hidden="true" className="rotating-shape" />
}
```

`src/components/RotatingShape.css`

```css
.rotating-shape {
  width: 320px;
  aspect-ratio: 1;
  background: #e79be0;
  clip-path: polygon(42% 0%, 58% 0%, 58% 34%, 82% 10%, 94% 22%, 70% 46%, 100% 46%, 100% 62%, 70% 62%, 94% 86%, 82% 98%, 58% 74%, 58% 100%, 42% 100%, 42% 74%, 18% 98%, 6% 86%, 30% 62%, 0% 62%, 0% 46%, 30% 46%, 6% 22%, 18% 10%, 42% 34%);
  animation: rotate-shape 28s linear infinite;
}

@keyframes rotate-shape {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

- [ ] **Step 6: Create the auto slider**

`src/components/AutoSlider.tsx`

```tsx
import { useEffect, useState } from 'react'
import './AutoSlider.css'
import { slides } from '../data/slides'

export function AutoSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 2800)

    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="auto-slider" aria-label="Galeria de Peregrinos">
      {slides.map((slide, index) => (
        <article
          key={slide.id}
          className={`auto-slider__card auto-slider__card--${index + 1} ${index === activeIndex ? 'is-active' : ''}`}
        >
          <img src={slide.src} alt={slide.alt} />
        </article>
      ))}
    </div>
  )
}
```

`src/components/AutoSlider.css`

```css
.auto-slider {
  position: relative;
  min-height: 620px;
}

.auto-slider__card {
  position: absolute;
  width: clamp(180px, 18vw, 320px);
  border-radius: 28px;
  overflow: hidden;
  transition: transform 500ms ease, opacity 500ms ease;
  box-shadow: 0 16px 40px rgba(55, 57, 47, 0.1);
  opacity: 0.82;
}

.auto-slider__card.is-active {
  transform: translateY(-18px);
  opacity: 1;
}

.auto-slider__card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.auto-slider__card--1 { left: -40px; top: 40px; height: 440px; }
.auto-slider__card--2 { left: 220px; top: 190px; height: 360px; }
.auto-slider__card--3 { left: 470px; top: 40px; height: 500px; }
.auto-slider__card--4 { left: 760px; top: 190px; height: 320px; }
.auto-slider__card--5 { right: -20px; top: 40px; height: 440px; }

@media (max-width: 900px) {
  .auto-slider {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    min-height: auto;
  }

  .auto-slider__card {
    position: static;
    width: 100%;
    height: 260px;
  }
}
```

- [ ] **Step 7: Create the Figma-style header and hero section**

`src/components/Header.tsx`

```tsx
import './Header.css'
import logo from '../assets/logo-peregrinos.svg'
import { navItems } from '../data/navItems'

export function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#hero" aria-label="Peregrinos">
        <img src={logo} alt="Peregrinos" />
      </a>

      <nav className="site-header__nav" aria-label="Secciones principales">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="site-header__cta" href="#sumate">
        Quiero ser parte
      </a>
    </header>
  )
}
```

`src/components/Header.css`

```css
.site-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 32px;
  padding: 28px 48px 0;
}

.site-header__brand img {
  width: 186px;
  display: block;
}

.site-header__nav {
  display: flex;
  justify-content: center;
  gap: 68px;
  font-size: 22px;
}

.site-header__cta {
  border-radius: 999px;
  padding: 18px 42px;
  background: #37392f;
  color: #f8f6f1;
  font-size: 22px;
}
```

`src/components/HeroSection.tsx`

```tsx
import './HeroSection.css'
import { AutoSlider } from './AutoSlider'
import { RotatingShape } from './RotatingShape'

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__copy">
        <h1>“Ella es la gran misionera, ella obrará milagros”</h1>
        <p>
          Peregrinos acompaña a niños en contexto vulnerable a través de la educación, el apoyo
          escolar y la formación en valores.
        </p>
      </div>

      <div className="hero-section__gallery">
        <div className="hero-section__shape">
          <RotatingShape />
        </div>
        <AutoSlider />
      </div>
    </section>
  )
}
```

`src/components/HeroSection.css`

```css
.hero-section {
  padding: 120px 24px 48px;
  overflow: hidden;
}

.hero-section__copy {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.hero-section__copy h1 {
  margin: 0;
  color: #37392f;
  font-family: 'Libre Baskerville', serif;
  font-size: clamp(54px, 6vw, 98px);
  font-weight: 400;
  line-height: 0.98;
}

.hero-section__copy p {
  max-width: 900px;
  margin: 28px auto 0;
  font-size: clamp(22px, 2vw, 30px);
  line-height: 1.3;
}

.hero-section__gallery {
  position: relative;
  max-width: 1500px;
  margin: 80px auto 0;
}

.hero-section__shape {
  position: absolute;
  left: 40px;
  top: 40px;
  z-index: 0;
}

.hero-section__gallery .auto-slider {
  z-index: 1;
}
```

- [ ] **Step 8: Wire the new header and hero into `App.tsx` and base styles**

Replace `src/App.tsx` with:

```tsx
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { JoinForm } from './components/JoinForm'
import { SectionShell } from './components/SectionShell'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SectionShell id="quienes-somos" title="¿Quiénes somos?" />
        <SectionShell id="que-hacemos" title="¿Qué hacemos?" />
        <SectionShell id="como-ayudar" title="¿Cómo ayudar?" />
        <SectionShell id="sumate" title="Quiero ser parte">
          <JoinForm />
        </SectionShell>
      </main>
    </>
  )
}
```

Update `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');

:root {
  color: #37392f;
  background: #f8f6f1;
  font-family: 'Satoshi Variable', 'Inter', Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: #f8f6f1;
  color: #37392f;
}

#root {
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

img {
  max-width: 100%;
}
```

- [ ] **Step 9: Run the app test to verify it passes**

Run: `npm test -- src/App.test.tsx`

Expected: PASS, including the hero quote and logo assertions.

- [ ] **Step 10: Run the production build for layout verification**

Run: `npm run build`

Expected: PASS with a clean Vite build output.

- [ ] **Step 11: Commit**

```bash
git add src/App.tsx src/App.test.tsx src/components/Header.tsx src/components/Header.css src/components/HeroSection.tsx src/components/HeroSection.css src/components/AutoSlider.tsx src/components/AutoSlider.css src/components/RotatingShape.tsx src/components/RotatingShape.css src/data/slides.ts src/theme.ts src/assets/logo-peregrinos.svg src/assets/placeholders src/index.css
git commit -m "feat: implement peregrinos hero section"
```

## Self-Review

- Spec coverage: the plan covers the requested app foundation, hero fidelity, in-page navigation, placeholder gallery, rotating pink shape, and real front-end form behavior.
- Placeholder scan: no `TODO` or undefined task steps remain; each task names exact files and commands.
- Type consistency: `JoinFormValues`, nav item labels, section IDs, and storage keys stay consistent across tasks.
