import { useEffect, useState } from 'react'
import './JoinForm.css'
import { helpOptions } from '../data/helpOptions'
import {
  clearJoinFormDraft,
  loadJoinFormDraft,
  saveJoinFormDraft,
  saveJoinFormSubmission,
  type JoinFormValues,
} from '../lib/storage'

type FormErrors = Partial<Record<keyof JoinFormValues, string>>

function validate(values: JoinFormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Ingresá tu nombre.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Ingresá un email válido.'
  }

  if (!values.message.trim()) {
    errors.message = 'Contanos cómo querés sumarte.'
  }

  return errors
}

type JoinFormProps = {
  className?: string
  submitLabel?: string
  prefilledHelpIntent?: string
}

export function JoinForm({
  className = '',
  submitLabel = 'Enviar',
  prefilledHelpIntent = '',
}: JoinFormProps) {
  const [values, setValues] = useState<JoinFormValues>(() => loadJoinFormDraft())
  const [errors, setErrors] = useState<FormErrors>({})
  const [successMessage, setSuccessMessage] = useState('')

  function updateField(field: keyof JoinFormValues, value: string) {
    const nextValues = { ...values, [field]: value }
    setValues(nextValues)
    saveJoinFormDraft(nextValues)
  }

  useEffect(() => {
    if (!prefilledHelpIntent) {
      return
    }

    setValues((currentValues) => {
      if (currentValues.helpIntent === prefilledHelpIntent) {
        return currentValues
      }

      const nextValues = { ...currentValues, helpIntent: prefilledHelpIntent }
      saveJoinFormDraft(nextValues)
      return nextValues
    })
  }, [prefilledHelpIntent])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage('')
      return
    }

    saveJoinFormSubmission(values)
    clearJoinFormDraft()
    setValues({ fullName: '', email: '', message: '', helpIntent: '' })
    setErrors({})
    setSuccessMessage('Recibimos tu mensaje. Gracias por sumarte.')
  }

  return (
    <form className={`join-form ${className}`.trim()} onSubmit={handleSubmit} noValidate>
      <label>
        Nombre y apellido
        <input
          aria-label="Nombre y apellido"
          placeholder="Tu nombre"
          value={values.fullName}
          onChange={(event) => updateField('fullName', event.target.value)}
        />
        {errors.fullName ? <span>{errors.fullName}</span> : null}
      </label>

      <label>
        Email
        <input
          aria-label="Email"
          type="email"
          placeholder="ejemplo@email.com"
          value={values.email}
          onChange={(event) => updateField('email', event.target.value)}
        />
        {errors.email ? <span>{errors.email}</span> : null}
      </label>

      <label>
        Cómo quiero ayudar
        <select
          aria-label="Cómo quiero ayudar"
          value={values.helpIntent}
          onChange={(event) => updateField('helpIntent', event.target.value)}
        >
          <option value="">Elegí una opción</option>
          {helpOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </label>

      <label>
        Mensaje
        <textarea
          aria-label="Mensaje"
          placeholder="Dejanos tu mensaje!"
          value={values.message}
          onChange={(event) => updateField('message', event.target.value)}
        />
        {errors.message ? <span>{errors.message}</span> : null}
      </label>

      <button type="submit">{submitLabel}</button>
      {successMessage ? <p>{successMessage}</p> : null}
    </form>
  )
}
