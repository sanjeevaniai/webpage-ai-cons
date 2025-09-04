import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <video
              src="/your_logo.mp4"
              autoPlay
              loop
              muted
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onBlur={() => setTimeout(() => setIsServicesOpen(false), 150)}
                className="text-gray-300 hover:text-emerald-400 font-medium transition-colors flex items-center gap-1"
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl z-50 py-2">
                  <a
                    href="#services"
                    className="block px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-300 transition-colors font-medium"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Data Science & AI Governance
                  </a>
                  <a
                    href="#services"
                    className="block px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-300 transition-colors font-medium"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    AI Strategy Consulting
                  </a>
                  <a
                    href="#services"
                    className="block px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-300 transition-colors font-medium"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Multi-Agent Systems
                  </a>
                  <a
                    href="#services"
                    className="block px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-300 transition-colors font-medium"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    AI Ethics & Compliance
                  </a>
                </div>
              )}
            </div>
            <a href="#case-studies" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors">
              Case Studies
            </a>
            <a href="https://calendly.com/sia-sanjeevaniai/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-sky-400/25">
              Get in touch
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700/50">
            <nav className="flex flex-col gap-4">
              {/* Services Mobile Menu */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-300 hover:text-emerald-400 font-medium transition-colors text-left flex items-center justify-between"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Data Science & AI Governance
                    </a>
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      AI Strategy Consulting
                    </a>
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Multi-Agent Systems
                    </a>
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      AI Ethics & Compliance
                    </a>
                  </div>
                )}
              </div>
              <a
                href="#case-studies"
                className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </a>
              <a
                href="https://calendly.com/sia-sanjeevaniai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-sky-400/25 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in touch
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
