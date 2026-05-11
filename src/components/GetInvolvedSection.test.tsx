import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { GetInvolvedSection } from './GetInvolvedSection'

describe('GetInvolvedSection', () => {
  it('renders a stagger-ready help list that becomes visible in viewport', () => {
    const { container } = render(<GetInvolvedSection onSelectHelpIntent={vi.fn()} />)

    expect(container.querySelector('.get-involved-section__list.is-visible')).not.toBeNull()
  })

  it('keeps the tapped help item active after click', async () => {
    const user = userEvent.setup()
    const onSelectHelpIntent = vi.fn()
    const scrollIntoView = vi.fn()

    Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView,
    })

    render(<GetInvolvedSection onSelectHelpIntent={onSelectHelpIntent} />)

    const item = screen.getByRole('link', { name: /ser madrina o padrino/i })

    await user.click(item)

    expect(onSelectHelpIntent).toHaveBeenCalledWith('Ser madrina o padrino')
    expect(item).toHaveClass('is-active')
  })
})
