import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src={logo} alt='Logo Agence Kasa' />
      <nav>
        <NavLink
          to='/'
          className={(nav) => (nav.isActive ? 'nav-Active' : null)}
        >
          Accueil
        </NavLink>
        <NavLink
          to='/About'
          className={(nav) => (nav.isActive ? 'nav-Active' : null)}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
