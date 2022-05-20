import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Connaissances</h5>
      <h2>Principaux outils</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Développement Front-End</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <i class="devicon-html5-plain-wordmark experience__icon"></i>
              <h4>HTML/CSS</h4>
              <p className='text-light'>Créer des sites web modernes avec HTML et CSS</p>
            </article>
            <article className='experience__details'>
            <i class="devicon-sass-original experience__icon"></i>
              <h4>SASS</h4>
              <p className='text-light'>Résoudre des problèmes techniques avec un langage de programmation et des algorithmes</p>
            </article>
            <article className='experience__details'>
            <i class="devicon-javascript-plain experience__icon"></i>
              <h4>JAVASCRIPT</h4>
              <p className='text-light'>Résoudre des problèmes techniques avec un langage de programmation et des algorithmes</p>
            </article>
            <article className='experience__details'>
            <i class="devicon-react-original experience__icon"></i>
              <h4>REACT</h4>
              <p className='text-light'>Résoudre des problèmes techniques avec un langage de programmation et des algorithmes</p>
            </article>
            <article className='experience__details'>
            <i class="devicon-redux-original experience__icon"></i>
              <h4>REDUX</h4>
              <p className='text-light'>Résoudre des problèmes techniques avec un langage de programmation et des algorithmes</p>
            </article>
            <article className='experience__details'>
            <i class="devicon-jest-plain experience__icon"></i>
              <h4>JEST</h4>
              <p className='text-light'>Résoudre des problèmes techniques avec un langage de programmation et des algorithmes</p>
            </article>
            <article className='experience__details'>
            <i class="devicon-git-plain experience__icon"></i>
              <h4>GIT</h4>
              <p className='text-light'>Résoudre des problèmes techniques avec un langage de programmation et des algorithmes</p>
            </article>
            <article className='experience__details'>
            <i class="devicon-figma-plain experience__icon"></i>
              <h4>FIGMA</h4>
              <p className='text-light'>Résoudre des problèmes techniques avec un langage de programmation et des algorithmes</p>
            </article>
            <article className='experience__details'>
            <i class="devicon-vscode-plain experience__icon"></i>
              <h4>VSCODE</h4>
              <p className='text-light'>Résoudre des problèmes techniques avec un langage de programmation et des algorithmes</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience