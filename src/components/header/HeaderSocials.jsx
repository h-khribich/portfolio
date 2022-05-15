import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { IconContext } from "react-icons";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <IconContext.Provider value={{ size: '1.2rem' }}>
        <a href='https://www.linkedin.com/in/hamzakhribich/' rel='noreferrer' target='_blank'>
          <BsLinkedin />
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: '1.2rem' }}>
        <a href='https://github.com/h-khribich' rel='noreferrer' target='_blank'>
          <FaGithub />
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: '1.2rem' }}>
        <a href='https://www.facebook.com/hamza.khribich/' rel='noreferrer' target='_blank'>
          <BsFacebook />
        </a>
      </IconContext.Provider>
    </div>
  )
}

export default HeaderSocials