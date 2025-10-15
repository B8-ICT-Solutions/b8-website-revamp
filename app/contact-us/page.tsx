import React from 'react'
import CCursor from '../components/common/CCursor'
import CHeader from '../components/common/CHeader'
import CMobileHeader from '../components/common/CMobileHeader'
import CGradientBackground from '../components/common/CGradientBackground'
import CVdBackground from '../components/common/CVdBackground'
import Hero from './components/Hero'

const ContactUs = () => {
  return (
    <div className=''>
         <CCursor/>
         <CVdBackground/>
         <CGradientBackground />
         <CHeader/>
         <CMobileHeader />
         <Hero/>
    </div>
  )
}

export default ContactUs