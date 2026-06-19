import React from 'react'
import { FiCalendar, FiArrowRight } from 'react-icons/fi'

const Conferences = () => {
  const list = [
    {
      title: "DRN Collaborations & Associated Institutions",
      desc: "Explore our growing network of collaborating universities, research institutions, and industry partners.",
      date: 'July 2024',
      img: '🤝',
    },
    {
      title: "Associated Institutions",
      desc: "Connect with leading academic institutions that are part of the DRN Global research ecosystem.",
      date: 'August 2024',
      img: '🏛️',
    },
    {
      title: "Our Research Ecosystem Includes",
      desc: "A comprehensive overview of all research areas, tools, and support systems available through DRN Global.",
      date: 'September 2024',
      img: '🔭',
    },
  ]

  return (
    <section id="conferences" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Explore Here</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-1">Conferences &amp; Events</h2>
          </div>
          <button className="flex items-center gap-2 border border-secondary text-secondary text-sm px-5 py-2.5 rounded font-semibold hover:bg-secondary hover:text-white transition duration-300">
            View All <FiArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left - list */}
          <div className="space-y-4">
            {list.map((item, idx) => (
              <div key={idx}
                className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-secondary/30 hover:shadow-md transition card-hover cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-light flex items-center justify-center text-2xl flex-shrink-0">
                  {item.img}
                </div>
                <div>
                  <h3 className="font-bold text-primary text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - featured */}
          <div className="bg-gradient-to-br from-primary to-dark rounded-2xl p-8 text-white h-full flex flex-col justify-between min-h-72">
            <div>
              <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full font-bold">June 21, 2024</span>
              <h3 className="text-xl font-bold mt-4 mb-3">Connect, Learn &amp; Collaborate</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Join the DRN Global annual conference bringing together researchers,
                academics, and industry professionals for knowledge sharing,
                networking, and collaborative research initiatives worldwide.
              </p>
            </div>
            <button className="mt-6 self-start bg-secondary text-white text-sm px-6 py-2.5 rounded font-semibold hover:bg-white hover:text-primary transition btn-hover">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Conferences
