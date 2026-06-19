import React from 'react'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="relative bg-primary overflow-hidden" style={{ minHeight: '520px' }}>
      {/* Background overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60 z-10"></div>

      {/* Background image placeholder - in production use actual image */}
      <div className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #001f3f 0%, #0d2d4a 40%, #1a4060 70%, #0d2d4a 100%)',
        }}>
        {/* Decorative circles */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-secondary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute right-40 bottom-0 w-64 h-64 bg-secondary opacity-5 rounded-full translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-20 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="text-white space-y-5 fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Connecting Research.<br />
              <span className="text-secondary">Enabling Knowledge</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed">
              DRN Global is a comprehensive digital research network dedicated to connecting
              researchers, academics, conferences, and institutions to foster collaborative
              research and accelerate knowledge dissemination worldwide.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="bg-secondary text-white px-7 py-3 rounded font-semibold flex items-center gap-2 hover:bg-white hover:text-primary transition duration-300 btn-hover text-sm">
                Get Started
              </button>
              <button className="border border-white/40 text-white px-7 py-3 rounded font-semibold flex items-center gap-2 hover:bg-white/10 transition duration-300 text-sm">
                Know More →
              </button>
            </div>
          </div>

          {/* Right - image area */}
          <div className="hidden lg:flex justify-end slide-in-right">
            <div className="relative w-full max-w-sm">
              <div className="rounded-xl overflow-hidden shadow-2xl"
                style={{ background: 'rgba(255,255,255,0.05)', height: '320px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="text-center text-white/30">
                  <div className="text-8xl mb-4">📚</div>
                  <p className="text-sm">Hero Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40H1440V20C1200 0 900 40 720 20C540 0 240 40 0 20V40Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
