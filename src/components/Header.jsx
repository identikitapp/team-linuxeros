import '../assets/css/Header.css'
import { useState } from 'react'
import logotype from '../assets/img/logo-favicon.svg'
import { BiMenu, BiX } from 'react-icons/Bi'

const showOrHide = (element, value, icon = null) => {
  if (element === 'menu') return !value ? 'hidden__menu' : '';
  if (element === 'icon') {
    if (!value) return icon === 'open' ? '' : 'hidden__icon'
    else return icon === 'open' ? 'hidden__icon' : ''
  }
}

const Header = () => {
  const [hidden, setHidden] = useState(false)

  return (
    <header className='header'>
      <nav className='nav'>
        <span className='logotype'>
          <img src={logotype} alt="ecobella logo vivero" className='logotype__img' />
          <h1 className='nav__title'>Ecobella</h1>
        </span>

        <span className='nav__icon'>
          <BiMenu size='30px' onClick={() => setHidden(!hidden)} className={`nav__svg ${showOrHide('icon', hidden, 'open')}`} />
          <BiX size='30px' onClick={() => setHidden(!hidden)} className={`nav__svg ${showOrHide('icon', hidden, 'close')}`} />
        </span>

        <ul className={`nav__menu ${showOrHide('menu', hidden)}`}>
          <li className="nav__item">Home</li>
          <li className="nav__item">Products</li>
          <li className="nav__item">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header