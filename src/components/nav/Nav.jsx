import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { MdOutlineScreenSearchDesktop } from 'react-icons/md'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' id='home-navlink' className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')} ><AiOutlineHome /></a>
      <a href='#about' id='about-navlink' className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>
      <a href='#experience' id='experience-navlink' className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><BiBook /></a>
      <a href='#projects' id='projects-navlink' className={activeNav === '#projects' ? 'active' : ''} onClick={() => setActiveNav('#projects')}><MdOutlineScreenSearchDesktop /></a>
      <a href='#contact' id='contact-navlink' className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav