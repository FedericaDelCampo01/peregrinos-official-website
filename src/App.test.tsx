import { render, screen } from '@testing-library/react'
import { act } from 'react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import { programOptions } from './data/programOptions'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders nav links and section anchors', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: '¿Quiénes somos?' })).toHaveAttribute(
      'href',
      '#quienes-somos',
    )
    expect(screen.getByRole('link', { name: '¿Qué hacemos?' })).toHaveAttribute(
      'href',
      '#que-hacemos',
    )
    expect(screen.getByRole('link', { name: '¿Cómo ayudar?' })).toHaveAttribute(
      'href',
      '#como-ayudar',
    )
    expect(screen.getByRole('link', { name: 'Quiero ser parte' })).toHaveAttribute(
      'href',
      '#sumate',
    )
    expect(document.getElementById('sumate')).not.toBeNull()
  })

  it('renders the hero quote and logo-driven header CTA', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: '“Ella es la gran misionera, ella obrará milagros”',
      }),
    ).toBeInTheDocument()

    expect(screen.getByAltText('Peregrinos')).toBeInTheDocument()
    expect(screen.getByText(/Peregrinos acompaña a niños/i)).toBeInTheDocument()
  })

  it('renders the stats section content from figma', () => {
    vi.useFakeTimers()

    render(<App />)

    act(() => {
      vi.advanceTimersByTime(1400)
    })

    expect(screen.getByText('Un camino que crece con cada encuentro')).toBeInTheDocument()
    expect(screen.getByText('+5')).toBeInTheDocument()
    expect(screen.getByText('años juntos')).toBeInTheDocument()
    expect(screen.getByText('+50')).toBeInTheDocument()
    expect(screen.getByText('voluntarios')).toBeInTheDocument()
    expect(screen.getByText('+100')).toBeInTheDocument()
    expect(screen.getByText('niños alcanzados')).toBeInTheDocument()

    vi.useRealTimers()
  })

  it('renders the remaining figma section headings', () => {
    render(<App />)

    expect(screen.getByText('Nuestra historia')).toBeInTheDocument()
    expect(screen.getByText('Nuestros espacios')).toBeInTheDocument()
    expect(screen.getByText('Formá parte!')).toBeInTheDocument()
    expect(screen.getByText(/Bajo Tu manto/i)).toBeInTheDocument()
    expect(screen.getByText('¿Querés saber más?')).toBeInTheDocument()
    expect(screen.getByText('movimiento.peregrinos@gmail.com')).toBeInTheDocument()
  })

  it('renders enriched program card content', () => {
    render(<App />)

    expect(screen.getByText('Apoyo escolar')).toBeInTheDocument()
    expect(screen.getByText(/Los acompañamos en su proceso educativo/i)).toBeInTheDocument()
  })

  it('uses the delivered hero accent asset and local apoyo escolar image', () => {
    const { container } = render(<App />)

    const heroAccent = container.querySelector('.hero-section__accent')

    expect(heroAccent?.tagName).toBe('IMG')
    expect(heroAccent).toHaveAttribute('src', expect.stringContaining('Shape%20grow'))
    expect(programOptions[0].image).toContain('Program%20Image_1')
  })

  it('prefills the help-intent select when a help item is activated', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('link', { name: /ser madrina o padrino/i }))

    expect(screen.getByLabelText('Cómo quiero ayudar')).toHaveValue('Ser madrina o padrino')
  })
})
