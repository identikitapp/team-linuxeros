import '../assets/css/Header.css'
import { useState } from 'react'
import logotype from '../assets/img/logo-favicon.svg'
import { BiMenu, BiX } from 'react-icons/Bi'
import { Link } from 'react-router-dom'

const showOrHide = (element, value, icon = null) => {
  if (element === 'menu') return !value ? 'hidden__menu' : ''
  if (element === 'icon') {
    if (!value) return icon === 'open' ? '' : 'hidden__icon'
    else return icon === 'open' ? 'hidden__icon' : ''
  }
}

const Header = () => {
  const [show, setShow] = useState(false)

  return (
    <header className="header">
      <nav className="nav">
        <span className="logotype">
          <Link to={'/'}>
            <img
              src={logotype}
              alt="ecobella logo vivero"
              className="logotype__img"
            />
          </Link>
          <h1 className="nav__title">Ecobella</h1>
        </span>

        <span className="nav__icon">
          <BiMenu
            size="30px"
            onClick={() => setShow(!show)}
            className={`nav__svg ${showOrHide('icon', show, 'open')}`}
          />
          <BiX
            size="30px"
            onClick={() => setShow(!show)}
            className={`nav__svg ${showOrHide('icon', show, 'close')}`}
          />
        </span>

        <ul className={`nav__menu ${showOrHide('menu', show)}`}>
          <li className="nav__item" onClick={() => setShow(false)}>
            <Link to={'/'}>Home</Link>
          </li>
          <li className="nav__item" onClick={() => setShow(false)}>
            <Link to={'/products'}>Products</Link>
          </li>
          <li className="nav__item" onClick={() => setShow(false)}>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
