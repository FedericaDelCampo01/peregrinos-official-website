type SendBody = {
  fullName: string
  email: string
  message: string
  helpIntent: string
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default async function handler(req: Request): Promise<Response> {
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: 'Email service not configured' }, { status: 500 })
  }

  if (req.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  let body: SendBody
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { fullName, email, message, helpIntent } = body

  if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 8000)

  let res: globalThis.Response
  try {
    res = await fetch('https://api.resend.com/emails', {
      signal: controller.signal,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Peregrinos <noreply@peregrinos.com.uy>',
        to: 'movimiento.peregrinos@gmail.com',
        reply_to: email,
        subject: `Nuevo mensaje de ${fullName}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #37392f; margin-top: 0;">Nuevo mensaje del formulario de contacto</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 180px; vertical-align: top; color: #37392f;">Nombre</td>
                <td style="padding: 8px 0; color: #37392f;">${escapeHtml(fullName)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top; color: #37392f;">Email</td>
                <td style="padding: 8px 0; color: #37392f;">${escapeHtml(email)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top; color: #37392f;">Cómo quiere ayudar</td>
                <td style="padding: 8px 0; color: #37392f;">${escapeHtml(helpIntent || 'No especificado')}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top; color: #37392f;">Mensaje</td>
                <td style="padding: 8px 0; color: #37392f;">${escapeHtml(message).replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>
        `,
      }),
    })
  } catch (err) {
    clearTimeout(timeoutId)
    const isAbort = err instanceof Error && err.name === 'AbortError'
    console.error('Fetch error:', err)
    return Response.json(
      { error: isAbort ? 'Timeout al enviar el email' : 'No se pudo enviar el email' },
      { status: 500 },
    )
  }

  clearTimeout(timeoutId)

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}))
    console.error('Resend error:', errorData)
    return Response.json({ error: 'No se pudo enviar el email' }, { status: 500 })
  }

  return Response.json({ success: true })
}
