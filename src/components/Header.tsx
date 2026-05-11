import logo from '../assets/logo-peregrinos.svg'
import { navItems } from '../data/navItems'
import './Header.css'

export function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#hero" aria-label="Peregrinos">
        <img src={logo} alt="Peregrinos" />
      </a>

      <nav className="site-header__nav" aria-label="Secciones principales">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="site-header__cta" href="#sumate">
        Quiero ser parte
      </a>
    </header>
  )
}
