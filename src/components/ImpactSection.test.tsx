import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ImpactSection } from './ImpactSection'

describe('ImpactSection', () => {
  it('renders the delivered impact asset instead of the old content collage', () => {
    const { container, queryByText } = render(<ImpactSection />)

    const desktopImage = container.querySelector('.impact-section__image--desktop')
    const mobileImage = container.querySelector('.impact-section__image--mobile')

    expect(desktopImage?.tagName).toBe('IMG')
    expect(desktopImage).toHaveAttribute('src', expect.stringContaining('Impact%20Container'))
    expect(mobileImage?.tagName).toBe('IMG')
    expect(mobileImage).toHaveAttribute('src', expect.stringContaining('Impact%20Box_Mobile'))
    expect(queryByText(/Cristina “Tata” Rodriguez/i)).toBeNull()
  })
})
