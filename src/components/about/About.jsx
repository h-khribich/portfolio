import React from 'react'
import './about.css'
import Illustration from '../../assets/about_me-illustration.svg'
import ReactLogo from '../../assets/react-logo.svg'
import { FaAward } from 'react-icons/fa'
import { IoLanguageSharp } from 'react-icons/io5'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Mon parcours</h5>
      <h2>À propos</h2>

      <div className="container about__container">
        <div className="about__illustration-container">
          <div className="about__illustration">
            <img src={ReactLogo} alt='' className='react-logo'/>
            <img src={Illustration} alt='' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Développeur d'applications</h5>
              <small>Javascript - React Bac+ 3/4</small>
            </article>
            <article className='about__card'>
              <IoLanguageSharp className='about__icon' />
              <h5>Anglophone</h5>
              <small>Bilingue anglais (niveau C2)</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projets</h5>
              <small>20+ projets terminés</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laudantium, doloribus possimus provident dignissimos eos quae enim natus cupiditate! Illo, quisquam. Molestias magnam vero tempora perspiciatis voluptates nemo, dolore quisquam?
          </p>

          <a href='#contact' className='btn btn-primary'>Prenez contact</a>
        </div>
      </div>
    </section>
  )
}

export default About