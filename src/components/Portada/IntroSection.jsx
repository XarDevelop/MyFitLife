import React from 'react'
import './IntroSection.css'
import { useNavigate } from 'react-router-dom';

export default function IntroSection() {
  const navigate=useNavigate();
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
        <div className="intro-buttons">
          <a href='#estado' className='btn-intro btn-primary'>
            Ver Estado
          </a>
          <button className='btn-intro btn-secondary' onClick={(e)=>{
            e.preventDefault();
            navigate('/Consejos')
            }}>
            Ayuda
          </button>
        </div>
      </div>
      {/* TODO: Agrega tu imagen de fondo en el CSS: .intro-section { background-image: url('/src/assets/Hero.jfif') } */}
    </section>
  )
}