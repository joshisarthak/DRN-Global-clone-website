import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const LatestResearch = () => {
  const articles = [
    {
      id: 1,
      title: 'Assistive Technology in Computational Engineering',
      category: 'Engineering',
      image: '🔬',
      bg: 'from-blue-800 to-blue-600',
    },
    {
      id: 2,
      title: 'The Role of Artificial Intelligence in Transforming Technology',
      category: 'AI',
      image: '🤖',
      bg: 'from-purple-800 to-purple-600',
    },
    {
      id: 3,
      title: 'Augmented Reality and Mixed Reality Technologies: Deep Dive',
      category: 'Technology',
      image: '🥽',
      bg: 'from-teal-800 to-teal-600',
    },
    {
      id: 4,
      title: 'Open Source Project Repository System for the Community',
      category: 'Open Source',
      image: '📂',
      bg: 'from-orange-800 to-orange-600',
    },
  ]

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Research &amp; Innovation</h2>
          </div>
          <button className="flex items-center gap-2 bg-secondary text-white text-sm px-5 py-2.5 rounded font-semibold hover:bg-white hover:text-primary transition duration-300 btn-hover">
            View All Articles <FiArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((article) => (
            <div key={article.id} className="bg-white/5 rounded-xl overflow-hidden card-hover group cursor-pointer border border-white/10 hover:border-secondary/40">
              <div className={`bg-gradient-to-br ${article.bg} h-36 flex items-center justify-center text-5xl`}>
                {article.image}
              </div>
              <div className="p-4">
                <span className="text-secondary text-xs font-bold uppercase">{article.category}</span>
                <h3 className="text-white text-sm font-semibold mt-1 mb-3 leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <a href="#" className="text-secondary text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <FiArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestResearch
