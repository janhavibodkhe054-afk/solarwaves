import React from 'react'
import AboutHero from '../components/About/AboutHero'
import TechnologyQualitySection from '../components/About/TechnologyQualitySection'
import SolarWaves from '../components/About/SolarWaves'
import VisionMissionSection from '../components/About/VisionMissionSection'
import CoreValuesSection from '../components/About/CoreValuesSection'
import DesignSection from '../components/About/DesignSection'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <TechnologyQualitySection/>
      <SolarWaves/>
      <VisionMissionSection/>
      <CoreValuesSection/>
      <DesignSection/>
    </div>
  )
}

export default About
