import React from 'react'
import Navbar from './Components/Navbar'
import { LogIn } from 'lucide-react'
import HeroSection from './Components/HeroSection'
import Features from './Components/Features'
import  Workflow  from './Components/Workflow'
import Pricing from './Components/Pricing'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-6xl pt-20 mx-auto px-6">
      <HeroSection/>
      <Features/>
      <Workflow/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
      </div>
  
     
    </div>
  )
}

export default App

