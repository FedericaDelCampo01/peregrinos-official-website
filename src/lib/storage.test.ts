import { beforeEach, describe, expect, it } from 'vitest'
import {
  clearJoinFormDraft,
  loadJoinFormDraft,
  saveJoinFormDraft,
  type JoinFormValues,
} from './storage'

const sampleDraft: JoinFormValues = {
  fullName: 'Ana Perez',
  email: 'ana@example.com',
  message: 'Quiero colaborar con Peregrinos.',
  helpIntent: 'Ser voluntario',
}

describe('join form storage', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('returns empty defaults when nothing was saved', () => {
    expect(loadJoinFormDraft()).toEqual({
      fullName: '',
      email: '',
      message: '',
      helpIntent: '',
    })
  })

  it('saves and reloads a draft', () => {
    saveJoinFormDraft(sampleDraft)

    expect(loadJoinFormDraft()).toEqual(sampleDraft)
  })

  it('clears the saved draft', () => {
    saveJoinFormDraft(sampleDraft)
    clearJoinFormDraft()

    expect(loadJoinFormDraft()).toEqual({
      fullName: '',
      email: '',
      message: '',
      helpIntent: '',
    })
  })
})
