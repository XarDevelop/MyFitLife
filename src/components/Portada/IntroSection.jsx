import React from 'react'
import './IntroSection.css'

export default function IntroSection() {
  return (
    <section className='intro-section'>
      <div className="intro-overlay">
        <span className="intro-badge">✨ Bienestar Total</span>
        <h2 className="intro-title">
          Página creada para fomentar una <span>salud sana</span> y <span>balanceada</span>
        </h2>
        <p className="intro-description">
          Descubre herramientas, consejos y recursos para mejorar tu calidad de vida 
          a través de la nutrición y el ejercicio.
        </p>
      </div>
      {/* TODO: Agrega tu imagen de fondo en el CSS: .intro-section { background-image: url('/src/assets/Hero.jfif') } */}
    </section>
  )
}