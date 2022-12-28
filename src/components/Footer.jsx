import '../assets/css/Footer.css'

import { BsFacebook, BsInstagram, BsFillTelephoneFill, BsLink } from 'react-icons/bs'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__info'>
        <div className="footer__contact">
          <h3 className="footer__title">
            Contacto
          </h3>
          <p className='footer__text'>
            <BsInstagram className='footer__icon' />@ecobella
          </p>
          <p className='footer__text'>
            <BsFacebook className='footer__icon' />Ecobella Vivero
          </p>
          <p className='footer__text'>
            <BsFillTelephoneFill className='footer__icon' />+54 9 11 1111-1111
          </p>
        </div>
        <div className="footer__nav">
          <h3 className="footer__title">
            Navegación
          </h3>
          <p className='footer__text'>
            <BsLink />Home
          </p>
          <p className='footer__text'>
            <BsLink />Products
          </p>
          <p className='footer__text'>
            <BsLink />Contact
          </p>
        </div>
      </section>
      <p>
        Ecobella <AiOutlineCopyrightCircle color='#efefef' /> All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
