import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProgramsSection } from './ProgramsSection'

describe('ProgramsSection', () => {
  it('renders a stagger-ready grid wrapper that becomes visible in viewport', () => {
    const { container } = render(<ProgramsSection />)

    expect(container.querySelector('.programs-section__grid.is-visible')).not.toBeNull()
  })
})
