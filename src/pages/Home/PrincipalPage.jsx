import React from 'react'
import './PrincipalPage.css'
import HeroSection from '../../components/HeroSection/HeroSection'
import IntroSection from '../../components/Portada/IntroSection'
import Estado from '../../components/Estado/Estado'
import ButtonExit from '../../components/ButtonExit/ButtonExit'

export default function PrincipalPage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <IntroSection></IntroSection>
      <ButtonExit dir={'/'}></ButtonExit>
      <Estado></Estado>
    </div>
  )
}
