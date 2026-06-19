import React from 'react'
import { FiCheck } from 'react-icons/fi'

const WhyChooseUs = () => {
  const leftReasons = [
    'About Research Community',
    'High Quality Publications',
    'Research Support Services',
    'DRI & Professional Learning',
    'Conferences & Events Management',
  ]
  const rightReasons = [
    'Global Repository',
    'Academic Mentorship',
    'Multidisciplinary Research Platform',
    'Industry-Academia Research Platform',
    'Technology-Driven Research Ecosystem',
  ]

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative question mark */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center opacity-10 select-none">
        <span className="text-white" style={{ fontSize: '300px', fontWeight: 'bold' }}>?</span>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Explore Here</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 leading-tight">
              Why Choose DRN Global?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              A comprehensive platform for researchers, academics, and institutions to
              collaborate, publish, and advance knowledge across disciplines worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              <div className="space-y-3">
                {leftReasons.map((r, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FiCheck className="text-secondary flex-shrink-0" size={16} />
                    <span className="text-white text-sm">{r}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {rightReasons.map((r, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FiCheck className="text-secondary flex-shrink-0" size={16} />
                    <span className="text-white text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-80 h-80 border-2 border-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-secondary/30 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-8xl">🌐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
