import React from 'react'
import { FiEdit, FiBookOpen, FiHeadphones, FiTool } from 'react-icons/fi'

const ResearchSupport = () => {
  const services = [
    { icon: FiEdit, title: 'Academic Writing', desc: 'Research papers, journal articles, thesis writing support.' },
    { icon: FiBookOpen, title: 'Literature Review', desc: 'Systematic reviews, meta-analysis, citation management.' },
    { icon: FiHeadphones, title: 'AI & ML Support', desc: 'Model training, data preprocessing, experiment design.' },
    { icon: FiTool, title: 'Engineering Research', desc: 'CAD tools, simulation, prototyping and testing support.' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Support Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3 leading-tight">
              Research Support &amp; Services
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Comprehensive Research Support Solutions to Elevate Academic Excellence.
              We provide specialized research assistance that bridges the gap between
              your ideas and impactful publications.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {services.map((s, idx) => {
                const Icon = s.icon
                return (
                  <div key={idx} className="group">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-secondary/20 transition">
                      <Icon className="text-secondary text-lg" />
                    </div>
                    <h3 className="font-bold text-primary text-sm mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="slide-in-right">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 h-80 flex items-center justify-center text-8xl">
              📚
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResearchSupport
