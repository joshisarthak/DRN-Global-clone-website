import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  const publications = ['Journals', 'Magazines', 'Book Chapters', 'Research News']
  const quickLinks = ['Home', 'Pathways', 'Conferences', 'Submission', 'Contact Us']

  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border border-secondary rounded flex items-center justify-center">
                <div className="w-4 h-4 border border-secondary/60 rounded-full"></div>
              </div>
              <div>
                <div className="font-black text-lg text-white leading-tight">DRN<span className="text-secondary">|</span>Global</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              DRN Global – Connecting researchers, academics, and institutions worldwide.
              Fostering collaboration and advancing knowledge for a better future.
            </p>
            <div className="flex gap-3">
              {[FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition duration-200">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Publications</h3>
            <ul className="space-y-2.5">
              {publications.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm hover:text-secondary transition duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm hover:text-secondary transition duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FiMail className="text-secondary mt-0.5 flex-shrink-0" size={15} />
                <div>
                  <p className="text-gray-400 text-sm">info@drnglobal.com</p>
                  <p className="text-gray-400 text-sm">support@drnglobal.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="text-secondary mt-0.5 flex-shrink-0" size={15} />
                <p className="text-gray-400 text-sm">+1 (555) 000-0000</p>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="text-secondary mt-0.5 flex-shrink-0" size={15} />
                <p className="text-gray-400 text-sm">Global Research Hub,<br />123 Innovation Drive,<br />New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">© 2024 DRN Global. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 text-xs hover:text-secondary transition">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-secondary transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
