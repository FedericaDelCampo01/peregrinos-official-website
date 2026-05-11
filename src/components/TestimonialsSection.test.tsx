import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TestimonialsSection } from './TestimonialsSection'

describe('TestimonialsSection', () => {
  it('renders the delivered decorative shape asset and a dedicated lead paragraph', () => {
    const { container } = render(<TestimonialsSection />)

    const decorativeShape = container.querySelector('.testimonials-section__shape')
    const imageShell = container.querySelector('.testimonials-section__image-shell')
    const testimonialImage = imageShell?.querySelector('img')
    const leadParagraph = container.querySelector('.testimonials-section__lead')

    expect(decorativeShape?.tagName).toBe('IMG')
    expect(decorativeShape).toHaveAttribute('src', expect.stringContaining('shape%203'))
    expect(imageShell?.contains(decorativeShape as Node)).toBe(false)
    expect(testimonialImage).toHaveAttribute('src', expect.stringContaining('Testimonial%20Image'))
    expect(leadParagraph).not.toBeNull()
    expect(
      screen.getByText(/Aspiramos a que niños y adolescentes crezcan rodeados/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Construyendo una comunidad con acceso a oportunidades reales/i),
    ).toBeInTheDocument()
  })
})
