import logo from '../assets/logo-peregrinos.svg'
import { navItems } from '../data/navItems'
import { smoothScrollToId } from '../lib/scroll'
import './Header.css'

function handleAnchorClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  event.preventDefault()
  smoothScrollToId(href.replace('#', ''))
}

export function Header() {
  return (
    <header className="site-header">
      <a
        className="site-header__brand"
        href="#hero"
        aria-label="Peregrinos"
        onClick={(e) => handleAnchorClick(e, '#hero')}
      >
        <img src={logo} alt="Peregrinos" />
      </a>

      <nav className="site-header__nav" aria-label="Secciones principales">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={(e) => handleAnchorClick(e, item.href)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="site-header__cta" href="#sumate" onClick={(e) => handleAnchorClick(e, '#donar')}>
        Quiero ser parte
      </a>
    </header>
  )
}
