import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'

import TrustedBrandsSection from '../components/Home/TrustedBrandsSection'
import WhyChooseUsSection from '../components/Home/WhyChooseUsSection'
import TestimonialSection from '../components/Home/TestimonialSection'
import ProjectLifecycleSection from '../components/Home/ProjectLifecycleSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      
      <TrustedBrandsSection/>
      <WhyChooseUsSection/>
      <TestimonialSection/>
      <ProjectLifecycleSection/>
    </div>
  )
}

export default Home
