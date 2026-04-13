import './PrincipalPage.css'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import IntroSection from '../../components/Portada/IntroSection'
import Estado from '../../components/Estado/Estado'
import ButtonExit from '../../components/ButtonExit/ButtonExit'
import BotonNav from '../../components/BotonNav/BotonNav'

export default function PrincipalPage() {
  return (
    <div className="principal-container">
      <HeroSection />
      
      <main className="main-content">
        <IntroSection />
        
        <div className="nav-controls">
          <ButtonExit dir={'/'} name={'← Volver'} />
        </div>

        <Estado />

        <section className="menu-secciones">
          <div className="seccion-grupo-salud">
            <h3 className="seccion-titulo"> Secciones de Salud</h3>
            <div className="cards-navegacion">
              <BotonNav 
                dir={'/Nutricion'} 
                name={'Nutrición'} 
                icono={'🥗'}
                desc={'Descubre nutrientes esenciales y calcula tus calorías'}
              />
              <BotonNav 
                dir={'/Consejos'} 
                name={'Consejos'} 
                icono={'💡'}
                desc={'Tips prácticos para una vida más saludable'}
              />
            </div>
          </div>

          <div className="seccion-grupo-entrenamiento">
            <h3 className="seccion-titulo">Secciones de Entrenamiento</h3>
            <div className="cards-navegacion">
              <BotonNav 
                dir={'/Gym'} 
                name={'Gym'} 
                icono={'🏋️'}
                desc={'Rutinas y ejercicios con pesas'}
              />
              <BotonNav 
                dir={'/Calistenia'} 
                name={'Calistenia'} 
                icono={'🤸'}
                desc={'Entrenamiento con tu propio peso corporal'}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}