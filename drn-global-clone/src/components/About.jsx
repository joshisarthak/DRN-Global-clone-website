import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

const About = () => {
  const features = [
    { icon: '🌐', title: 'Empowering Researchers' },
    { icon: '📖', title: 'Advancing Knowledge' },
    { icon: '🔬', title: 'Creating Impact' },
    { icon: '🤝', title: 'Open Learning Spaces' },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Collage */}
          <div className="relative slide-in-left">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden h-52 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-5xl shadow-md">
                👩‍💻
              </div>
              <div className="rounded-xl overflow-hidden h-52 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-5xl shadow-md mt-6">
                🧑‍🔬
              </div>
              <div className="rounded-xl overflow-hidden h-52 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center text-5xl shadow-md -mt-6">
                📊
              </div>
              <div className="rounded-xl overflow-hidden h-52 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-5xl shadow-md">
                🏛️
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-up space-y-5">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">About DRN Global</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4 leading-tight">
                Welcome to DRN Global
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                DRN Global (Digital Research Network) is a platform dedicated to connecting
                researchers, academics, and institutions worldwide. We foster collaboration,
                accelerate discovery, and democratize access to scientific knowledge.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to break down barriers in research communication and create an
                ecosystem where innovation thrives through shared expertise and resources.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {features.map((f, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-light">
                  <span className="text-xl">{f.icon}</span>
                  <span className="text-primary font-semibold text-sm">{f.title}</span>
                </div>
              ))}
            </div>

            <button className="bg-secondary text-white px-7 py-3 rounded font-semibold hover:bg-primary transition duration-300 btn-hover text-sm mt-2">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
