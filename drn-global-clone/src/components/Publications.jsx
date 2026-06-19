import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Publications = () => {
  const pubTypes = [
    { icon: '📄', title: 'Journals', desc: 'Peer-reviewed academic journals across all disciplines.' },
    { icon: '📰', title: 'Magazines', desc: 'Research-focused magazines and periodical publications.' },
    { icon: '📕', title: 'Book Chapters', desc: 'Collaborative and standalone research book publications.' },
    { icon: '🎤', title: 'Conference Proceedings', desc: 'Indexed conference papers and symposium proceedings.' },
  ]

  return (
    <section id="publications" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="fade-in-up">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Explore Here</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 leading-tight">
              Explore Publications
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Access a vast repository of peer-reviewed research publications including journals,
              magazines, book chapters, and conference proceedings from leading institutions worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pubTypes.map((p, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-secondary/40 transition card-hover">
                  <div className="text-3xl mb-2">{p.icon}</div>
                  <h3 className="font-bold text-white text-sm mb-1">{p.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right graphic */}
          <div className="slide-in-right hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-secondary/10 rounded-full flex items-center justify-center">
                <div className="w-52 h-52 bg-secondary/15 rounded-full flex items-center justify-center">
                  <div className="text-8xl">📚</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-white text-xs px-3 py-2 rounded-lg font-bold shadow-lg">
                100K+ Papers
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-primary text-xs px-3 py-2 rounded-lg font-bold shadow-lg">
                Open Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications
