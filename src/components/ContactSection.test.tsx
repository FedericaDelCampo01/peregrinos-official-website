import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('uses the delivered arrow asset in the instagram CTA icon', () => {
    const { container } = render(<ContactSection />)

    const instagramLink = container.querySelector('.contact-section__instagram')
    const instagramIcon = container.querySelector('.contact-section__instagram-icon')

    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/peregrinos.uy')
    expect(instagramIcon?.tagName).toBe('IMG')
    expect(instagramIcon).toHaveAttribute('src', expect.stringContaining('arrow%20upright'))
  })

  it('renders the contact icon container behind the form and removes the old decorative shapes', () => {
    const { container } = render(<ContactSection />)

    const contactIconContainer = container.querySelector('.contact-section__icon-container')
    const formCard = container.querySelector('.contact-section__form-card')

    expect(contactIconContainer?.tagName).toBe('IMG')
    expect(contactIconContainer).toHaveAttribute(
      'src',
      expect.stringContaining('Contact%20Icon%20Container'),
    )
    expect(formCard?.compareDocumentPosition(contactIconContainer as Node)).toBe(
      Node.DOCUMENT_POSITION_PRECEDING,
    )
    expect(container.querySelector('.contact-section__photo-wrap')).toBeNull()
    expect(container.querySelector('.contact-section__pink-shape')).toBeNull()
    expect(container.querySelector('.contact-section__mini-shapes')).toBeNull()
  })

  it('renders the updated single contact paragraph copy', () => {
    const { container } = render(<ContactSection />)

    expect(
      container.querySelector('.contact-section__text')?.textContent?.replace(/\s+/g, ' ').trim(),
    ).toBe(
      'Si querés conocer más sobre Peregrinos, colaborar con el proyecto o sumarte de alguna manera, escribinos. Nos encantaría escucharte!',
    )
  })
})
