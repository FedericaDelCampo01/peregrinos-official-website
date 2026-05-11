import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { StatsSection } from './StatsSection'

describe('StatsSection', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('counts stat values up from zero when the section enters the viewport', () => {
    render(<StatsSection />)

    expect(screen.getAllByText('+0')).toHaveLength(3)

    act(() => {
      vi.advanceTimersByTime(1400)
    })

    expect(screen.getByText('+5')).toBeInTheDocument()
    expect(screen.getByText('+50')).toBeInTheDocument()
    expect(screen.getByText('+100')).toBeInTheDocument()
  })
})
