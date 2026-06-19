import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import About from './components/About'
import ResearchAreas from './components/ResearchAreas'
import LatestResearch from './components/LatestResearch'
import ResearchSupport from './components/ResearchSupport'
import Publications from './components/Publications'
import Conferences from './components/Conferences'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Statistics />
      <About />
      <ResearchAreas />
      <LatestResearch />
      <ResearchSupport />
      <Publications />
      <Conferences />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
