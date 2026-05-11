import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { slides } from '../data/slides'
import { AutoSlider } from './AutoSlider'

describe('AutoSlider', () => {
  it('renders a looping carousel track with duplicated slides', () => {
    const { container } = render(<AutoSlider />)

    const track = container.querySelector('.auto-slider__track')
    const cards = container.querySelectorAll('.auto-slider__card')

    expect(track).not.toBeNull()
    expect(cards).toHaveLength(slides.length * 2)
  })

  it('uses the delivered hero photos instead of placeholder assets', () => {
    expect(slides.every((slide) => !slide.alt.includes('Placeholder'))).toBe(true)
    expect(slides[0]?.src).toContain('1E9A')
  })
})
