import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const read = (file) => readFileSync(resolve(process.cwd(), file), 'utf8')

const headerCss = read('src/components/Header.css')
const programsCss = read('src/components/ProgramsSection.css')
const joinFormCss = read('src/components/JoinForm.css')
const contactCss = read('src/components/ContactSection.css')
const testimonialsCss = read('src/components/TestimonialsSection.css')
const footerCss = read('src/components/Footer.css')
const indexCss = read('src/index.css')
const autoSliderCss = read('src/components/AutoSlider.css')
const programsSectionCss = read('src/components/ProgramsSection.css')
const getInvolvedCss = read('src/components/GetInvolvedSection.css')
const heroCss = read('src/components/HeroSection.css')
const aboutCss = read('src/components/AboutSection.css')
const statsCss = read('src/components/StatsSection.css')
const rotatingShapeCss = read('src/components/RotatingShape.css')

describe('visual style regressions', () => {
  it('adds an animated underline treatment to plain links', () => {
    expect(headerCss).toContain('.site-header__nav a::after')
    expect(headerCss).toContain('transform: scaleX(0);')
    expect(headerCss).toContain('transform: scaleX(1);')
  })

  it('changes solid CTA backgrounds to #93978F on hover', () => {
    expect(headerCss).toContain('background: #93978f;')
    expect(programsCss).toContain('background: #93978f;')
    expect(joinFormCss).toContain('background: #93978f;')
    expect(contactCss).toContain('background: #37392f;')
    expect(contactCss).toContain('background: #93978f;')
  })

  it('uses the updated testimonials image shell border and radius', () => {
    expect(testimonialsCss).toContain('border: 30px solid #e8e9e7;')
    expect(testimonialsCss).toContain('border-radius: 999px 999px 200px 200px;')
  })

  it('keeps the contact text 20px below the contact header', () => {
    expect(contactCss).toContain('margin-top: 20px;')
    expect(contactCss).toContain('margin-top: auto;')
    expect(contactCss).toContain('.contact-section__text p:first-child {\n  font-size: 20px;')
  })

  it('uses the tighter contact form field spacing and padding', () => {
    expect(joinFormCss).toContain('padding: 12px 16px;')
    expect(joinFormCss).toContain('.join-form--contact {\n  max-width: none;\n  gap: 20px;')
    expect(joinFormCss).toContain('font-size: 16px;')
    expect(joinFormCss).toContain('font-family: inherit;')
    expect(joinFormCss).toContain('appearance: none;')
    expect(joinFormCss).toContain('padding-right: 52px;')
  })

  it('offsets the testimonials shape 20px further left and down', () => {
    expect(testimonialsCss).toContain('left: -116px;')
    expect(testimonialsCss).toContain('bottom: -22px;')
    expect(testimonialsCss).toContain('width: 232px;')
  })

  it('pins the contact icon container to the right screen edge and lifts it 200px', () => {
    expect(contactCss).toContain('right: calc(-1 * var(--contact-shell-inline));')
    expect(contactCss).toContain('top: 0px;')
    expect(contactCss).toContain('width: 290px;')
  })

  it('uses the reduced contact form card padding', () => {
    expect(contactCss).toContain('padding: 40px;')
  })

  it('uses a 100px desktop gap in the footer and removes contact section padding', () => {
    expect(footerCss).toContain('gap: 100px;')
    expect(contactCss).toContain('padding: 300px 0 0;')
    expect(contactCss).not.toContain('border-top-left-radius')
    expect(contactCss).not.toContain('border-top-right-radius')
  })

  it('defines viewport reveal animation styles', () => {
    expect(indexCss).toContain('.viewport-reveal')
    expect(indexCss).toContain('.viewport-reveal.is-visible')
    expect(indexCss).toContain('transform: translateY(32px);')
    expect(indexCss).toContain('overflow-x: hidden;')
  })

  it('animates the auto slider as a looping rightward carousel', () => {
    expect(autoSliderCss).toContain('.auto-slider__track')
    expect(autoSliderCss).toContain('animation: auto-slider-scroll')
    expect(autoSliderCss).toContain('translateX')
  })

  it('stagger animates program cards and help items from below', () => {
    expect(programsSectionCss).toContain('.programs-section__card')
    expect(programsSectionCss).toContain('animation-delay: 120ms;')
    expect(programsSectionCss).toContain('translateY(32px)')
    expect(getInvolvedCss).toContain('.get-involved-section__item')
    expect(getInvolvedCss).toContain('animation-delay: 120ms;')
    expect(getInvolvedCss).toContain('translateY(32px)')
  })

  it('animates the hero accent with a slow pulse loop', () => {
    expect(heroCss).toContain('animation: hero-accent-pulse')
    expect(heroCss).toContain('@keyframes hero-accent-pulse')
    expect(heroCss).toContain('scale(1.08)')
  })

  it('hides the hero accent on mobile and keeps the hero gallery compact enough to avoid clipping', () => {
    expect(heroCss).toContain('display: none;')
    expect(heroCss).toContain('margin-top: 56px;')
    expect(heroCss).toContain('min-height: 320px;')
    expect(heroCss).toContain('top: 126px;')
    expect(rotatingShapeCss).toContain('@media (max-width: 1100px)')
    expect(rotatingShapeCss).toContain('width: 170px;')
  })

  it('uses the requested mobile header layout', () => {
    expect(headerCss).toContain('@media (max-width: 1100px)')
    expect(headerCss).toContain('grid-template-columns: auto auto;')
    expect(headerCss).toContain('justify-content: space-between;')
    expect(headerCss).toContain('display: none;')
  })

  it('keeps the slider as a carousel on mobile', () => {
    expect(autoSliderCss).toContain('width: 100vw;')
    expect(autoSliderCss).toContain('margin-left: calc(50% - 50vw);')
    expect(autoSliderCss).toContain('animation: auto-slider-scroll 48s linear infinite;')
    expect(autoSliderCss).toContain('display: flex;')
  })

  it('adds more breathing room between mobile stats metrics', () => {
    expect(statsCss).toContain('padding-inline: 12px;')
    expect(statsCss).toContain('gap: 40px;')
  })

  it('shows only the large about image on mobile', () => {
    expect(aboutCss).toContain('.about-section__logo-card,')
    expect(aboutCss).toContain('display: none;')
    expect(aboutCss).toContain('.about-section__image--large-bottom')
  })

  it('shows program card hover content by default on mobile', () => {
    expect(programsSectionCss).toContain('.programs-section__card > p')
    expect(programsSectionCss).toContain('max-height: 140px;')
    expect(programsSectionCss).toContain('opacity: 1;')
  })

  it('shows help item descriptions by default on mobile and keeps the arrow centered', () => {
    expect(getInvolvedCss).toContain('.get-involved-section__description')
    expect(getInvolvedCss).toContain('.get-involved-section__icon > span')
    expect(getInvolvedCss).toContain('justify-content: center;')
    expect(getInvolvedCss).toContain('opacity: 1;')
    expect(getInvolvedCss).toContain('align-items: start;')
    expect(getInvolvedCss).toContain('grid-template-columns: 1fr auto;')
    expect(getInvolvedCss).toContain('position: static;')
    expect(getInvolvedCss).toContain('width: 64px;')
    expect(getInvolvedCss).toContain('border-radius: 16px;')
    expect(getInvolvedCss).toContain('.get-involved-section__item::before')
    expect(getInvolvedCss).toContain('right: 16px;')
    expect(getInvolvedCss).toContain('.get-involved-section__item.is-active .get-involved-section__title')
    expect(getInvolvedCss).toContain('transform: none;')
    expect(getInvolvedCss).toContain('background: var(--help-accent);')
    expect(getInvolvedCss).toContain('transition: none;')
  })

  it('moves the mobile contact decoration 200px to the right', () => {
    expect(contactCss).toContain('transform: translateX(200px);')
  })
})
