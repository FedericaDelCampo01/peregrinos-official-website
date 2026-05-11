import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the centered Peregrinos contact details', () => {
    render(<Footer />)

    expect(screen.getByText('movimiento.peregrinos@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('@peregrinos.uy')).toBeInTheDocument()
    expect(screen.getByText('+598 98 340 451')).toBeInTheDocument()
  })

  it('links email, instagram, and whatsapp contact actions', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'movimiento.peregrinos@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:movimiento.peregrinos@gmail.com',
    )
    expect(screen.getByRole('link', { name: '@peregrinos.uy' })).toHaveAttribute(
      'href',
      'https://www.instagram.com/peregrinos.uy',
    )
    expect(screen.getByRole('link', { name: '+598 98 340 451' })).toHaveAttribute(
      'href',
      'https://wa.me/59898340451',
    )
  })
})
