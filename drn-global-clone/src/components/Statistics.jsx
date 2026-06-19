import React from 'react'
import { FiGlobe, FiUsers, FiBookOpen, FiDownload, FiAward } from 'react-icons/fi'

const Statistics = () => {
  const stats = [
    { icon: FiGlobe, value: '120+', desc: 'Countries' },
    { icon: FiUsers, value: '56,000+', desc: 'Researchers' },
    { icon: FiBookOpen, value: '180,000+', desc: 'Publications' },
    { icon: FiDownload, value: '28,000+', desc: 'Downloads' },
    { icon: FiAward, value: '2,500+', desc: 'Institutions' },
  ]

  return (
    <section className="bg-white py-10 shadow-sm">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-light transition cursor-default group">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition">
                  <Icon className="text-secondary text-lg" />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg leading-tight">{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Statistics
