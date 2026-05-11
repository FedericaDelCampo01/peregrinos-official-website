import type { ReactNode } from 'react'
import './SectionShell.css'

type SectionShellProps = {
  id: string
  title: string
  children?: ReactNode
}

export function SectionShell({ id, title, children }: SectionShellProps) {
  return (
    <section id={id} className="section-shell">
      <div className="section-shell__inner">
        <p className="section-shell__eyebrow">Peregrinos</p>
        <h2>{title}</h2>
        {children ?? <p>Seccion en construccion.</p>}
      </div>
    </section>
  )
}
