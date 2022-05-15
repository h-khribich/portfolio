import React from 'react'
import './header.css'
import CTA from './CTA'
import ProfilePic from '../../assets/photo_de_profil.png'
import HeaderSocials from './HeaderSocials'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour, je suis</h5>
        <h1>Hamza Khribich</h1>
        <h5 className="text-light job-title">Développeur Front-End</h5>

        <CTA />
        <HeaderSocials />

        <div className="profile">
          <img src={ProfilePic} alt="Hamza KHRIBICH" className='profile__img' />
        </div>

        
        <a href='mailto: hamza.khribich@gmail.com' rel='noreferrer' className='email' target='_blank'>hamza.khribich@gmail.com</a>
        <IconContext.Provider value={{ size: '1.2rem' }}>
        <a href='#contact' className='scroll-down'>
          <BsFillArrowDownCircleFill />
        </a>
      </IconContext.Provider>
      </div>
    </header>
  )
}

export default Header