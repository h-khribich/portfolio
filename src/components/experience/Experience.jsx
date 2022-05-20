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
              <div className="experience__title">
                <i class="devicon-html5-plain-wordmark experience__icon"></i>
                <h4>HTML/CSS</h4>
              </div>
              <p className='text-light'>Créer des sites web modernes en utilisant de bonnes pratiques avec HTML et CSS</p>
            </article>
            <article className='experience__details'>
              <div className="experience__title">
                <i class="devicon-sass-original experience__icon"></i>
                <h4>SASS</h4>
              </div>
              <p className='text-light'>Mettre en place un pré-processeur pour générer du style de manière plus efficace</p>
            </article>
            <article className='experience__details'>
              <div className="experience__title">
                <i class="devicon-bootstrap-plain experience__icon"></i>
                <h4>BOOTSTRAP</h4>
              </div>
              <p className='text-light'>Développer des applications web responsives avec une librairie Bootstrap</p>
            </article>
            <article className='experience__details'>
              <div className="experience__title">
                <i class="devicon-javascript-plain experience__icon"></i>
                <h4>JAVASCRIPT</h4>
              </div>
              <p className='text-light'>Créer une application web dynamique grâce à un langage de programmation</p>
            </article>
            <article className='experience__details'>
              <div className="experience__title">
                <i class="devicon-react-original experience__icon"></i>
                <h4>REACT</h4>
              </div>
              <p className='text-light'>Utiliser un framework pour créer des composants et applications modernes</p>
            </article>
            <article className='experience__details'>
              <div className="experience__title">
                <i class="devicon-redux-original experience__icon"></i>
                <h4>REDUX</h4>
              </div>
              <p className='text-light'>Centraliser des états dans une application grâce à une librairie de gestion d'état </p>
            </article>
            <article className='experience__details'>
              <div className="experience__title">
                <i class="devicon-jest-plain experience__icon"></i>
                <h4>JEST</h4>
              </div>
              <p className='text-light'>Mettre en œuvre des test unitaires et d’intégration et débugger le code</p>
            </article>
            <article className='experience__details'>
              <div className="experience__title">
                <i class="devicon-git-plain experience__icon"></i>
                <h4>GIT</h4>
              </div>
              <p className='text-light'>Utiliser un système de versionning dans le cadre d'un projet</p>
            </article>
            <article className='experience__details'>
              <div className="experience__title">
                <i class="devicon-figma-plain experience__icon"></i>
                <h4>FIGMA</h4>
              </div>
              <p className='text-light'>Utiliser un outil de prototypage pour la création et édition de maquettes pour améliorer l'UI-UX</p>
            </article>
            <article className='experience__details'>
              <div className="experience__title">
                <i class="devicon-vscode-plain experience__icon"></i>
                <h4>VSCODE</h4>
              </div>
              <p className='text-light'>Utiliser un IDE et une méthodologie agile dans un processus de développement intégré</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience