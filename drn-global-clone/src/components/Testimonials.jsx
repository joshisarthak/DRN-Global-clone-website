import React from 'react'
import { FiStar } from 'react-icons/fi'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Austin Barry',
      role: 'Research Scholar',
      quote: "DRN Global's research network has significantly improved the quality and reach of our research work.",
      avatar: '👨‍🎓',
      rating: 5,
    },
    {
      name: 'Angela Cameron',
      role: 'Research Director',
      quote: "DRN Global provides extraordinary collaboration tools for researchers worldwide, publications, conferences, academic communities.",
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      name: 'Nathan Cornish',
      role: 'Senior Researcher',
      quote: "A transformative platform for collaborative research across disciplines and institutions globally.",
      avatar: '👨‍🔬',
      rating: 5,
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in-up">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">What Researchers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx}
              className="bg-light rounded-xl p-6 card-hover relative"
              style={{ animationDelay: `${idx * 0.1}s` }}>
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <FiStar key={i} className="text-secondary fill-current" size={14} />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
