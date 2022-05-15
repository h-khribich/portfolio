import React from 'react'
import CV from '../../assets/cv_hamza_khribich.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Télécharger CV</a>
      <a href="#contact" className='btn btn-primary'>Faisons connaissance</a>
    </div>
  )
}

export default CTA