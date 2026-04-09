import React from 'react'
import './PrincipalPage.css'
import HeroSection from '../../components/HeroSection/HeroSection'
import IntroSection from '../../components/Portada/IntroSection'
import Estado from '../../components/Estado/Estado'

export default function PrincipalPage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <IntroSection></IntroSection>
      <Estado></Estado>
    </div>
  )
}
