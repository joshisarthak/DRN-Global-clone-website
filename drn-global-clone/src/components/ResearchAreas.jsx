import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const ResearchAreas = () => {
  const areas = [
    {
      title: 'Civil Engineering',
      desc: 'Infrastructure, construction, transportation, water resources, geotechnical.',
      icon: '🏗️',
    },
    {
      title: 'Computer Science',
      desc: 'Software development, Smart systems, algorithms, AI, and data-driven technology.',
      icon: '💻',
    },
    {
      title: 'Electrical Engineering',
      desc: 'Power systems, electronics, renewable energy, electromagnetic, microelectronics.',
      icon: '⚡',
    },
    {
      title: 'Biochemistry & Comm.',
      desc: 'Molecular biology, cellular processes, genetic expression, Biotechnology, Research.',
      icon: '🧬',
    },
    {
      title: 'AI & Machine Learning',
      desc: 'Deep learning, neural networks, computer vision, NLP, intelligent automation.',
      icon: '🤖',
    },
    {
      title: 'Pharmacy & Healthcare',
      desc: 'Drug discovery, clinical research, pharmacology, Public Health, pharmaceutical.',
      icon: '💊',
    },
  ]

  return (
    <section id="research" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in-up">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Explore Here</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Research Areas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <div key={idx}
              className="bg-white rounded-xl p-6 shadow-sm card-hover group cursor-pointer border border-transparent hover:border-secondary/20"
              style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-secondary/20 transition">
                  {area.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1 text-base">{area.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-secondary text-xs font-semibold mt-3 hover:gap-2 transition-all">
                    Explore <FiArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResearchAreas
