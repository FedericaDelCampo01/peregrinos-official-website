import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { JoinForm } from './JoinForm'

describe('JoinForm', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('validates required fields and saves successful submissions locally', async () => {
    const user = userEvent.setup()

    render(<JoinForm />)

    await user.click(screen.getByRole('button', { name: /enviar/i }))

    expect(screen.getByText('Ingresá tu nombre.')).toBeInTheDocument()
    expect(screen.getByText('Ingresá un email válido.')).toBeInTheDocument()
    expect(screen.getByText('Contanos cómo querés sumarte.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Nombre y apellido'), 'Ana Perez')
    await user.type(screen.getByLabelText('Email'), 'ana@example.com')
    await user.type(screen.getByLabelText('Mensaje'), 'Quiero colaborar con actividades.')
    await user.click(screen.getByRole('button', { name: /enviar/i }))

    expect(screen.getByText('Recibimos tu mensaje. Gracias por sumarte.')).toBeInTheDocument()
    expect(window.localStorage.getItem('peregrinos.join-form')).toBeNull()
    expect(window.localStorage.getItem('peregrinos.join-form-submission')).toContain('Ana Perez')
  })

  it('renders an optional help-intent select field', () => {
    render(<JoinForm />)

    const select = screen.getByLabelText('Cómo quiero ayudar')
    expect(select).toBeInTheDocument()
    expect(select).toHaveValue('')
  })
})
