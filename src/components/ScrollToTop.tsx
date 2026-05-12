import { useEffect, useState } from 'react'
import { smoothScrollToId } from '../lib/scroll'
import './ScrollToTop.css'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`scroll-to-top ${visible ? 'scroll-to-top--visible' : ''}`}
      onClick={() => smoothScrollToId('hero')}
      aria-label="Volver al inicio"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 16V4M4 10l6-6 6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
