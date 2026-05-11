export type JoinFormValues = {
  fullName: string
  email: string
  message: string
  helpIntent: string
}

const DRAFT_KEY = 'peregrinos.join-form'
const SUBMISSION_KEY = 'peregrinos.join-form-submission'

const emptyDraft: JoinFormValues = {
  fullName: '',
  email: '',
  message: '',
  helpIntent: '',
}

export function loadJoinFormDraft(): JoinFormValues {
  const raw = window.localStorage.getItem(DRAFT_KEY)

  if (!raw) {
    return emptyDraft
  }

  try {
    const parsed = JSON.parse(raw) as Partial<JoinFormValues>

    return {
      fullName: parsed.fullName ?? '',
      email: parsed.email ?? '',
      message: parsed.message ?? '',
      helpIntent: parsed.helpIntent ?? '',
    }
  } catch {
    return emptyDraft
  }
}

export function saveJoinFormDraft(values: JoinFormValues) {
  window.localStorage.setItem(DRAFT_KEY, JSON.stringify(values))
}

export function clearJoinFormDraft() {
  window.localStorage.removeItem(DRAFT_KEY)
}

export function saveJoinFormSubmission(values: JoinFormValues) {
  window.localStorage.setItem(SUBMISSION_KEY, JSON.stringify(values))
}
