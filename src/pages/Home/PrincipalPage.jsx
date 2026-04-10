import './PrincipalPage.css'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import IntroSection from '../../components/Portada/IntroSection'
import Estado from '../../components/Estado/Estado'
import ButtonExit from '../../components/ButtonExit/ButtonExit'
import BotonNav from '../../components/BotonNav/BotonNav'

export default function PrincipalPage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <IntroSection></IntroSection>
      <ButtonExit dir={'/'} name={'Atras'}></ButtonExit>
      <Estado></Estado>
      <div className='menu-botones'>
        <h3>Secciones de Salud</h3>
        <section className='section-salud'>
          <BotonNav dir={'/Nutricion'} name={'Nutricion'}></BotonNav>
          <BotonNav dir={'/Consejos'} name={'Consejos'}></BotonNav>
        </section>

        <h3>Secciones de Entrenamiento</h3>
        <section className='section-entrenamiento'>
          <BotonNav dir={'/Gym'} name={'Gym'}></BotonNav>
          <BotonNav dir={'/Calistenia'} name={'Calistenia'}></BotonNav>
        </section>
      </div>
      <Footer></Footer>
    </div>
  )
}
