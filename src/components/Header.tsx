import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Lock } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isPricingOpen, setIsPricingOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Close dropdowns when menu is toggled
    setIsServicesOpen(false)
    setIsPricingOpen(false)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    setIsPricingOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-24 md:h-28 lg:h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <img
              src="/Sanjeevaniai-logo.png"
              alt="SANJEEVANI AI"
              className="h-14 w-auto md:h-18 lg:h-20 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg group-hover:drop-shadow-cyan-500/25"
            />
          </Link>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            {/* Get in Touch Button */}
            <a
              href="https://calendly.com/sia-sanjeevaniai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-sky-400/25"
            >
              Get in touch
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation Menu - Always visible when open */}
        {isMenuOpen && (
          <div className="bg-black/95 backdrop-blur-md max-h-[80vh] overflow-y-auto py-6 border-t border-gray-700/50 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            <nav className="flex flex-col gap-6 px-4">
              {/* Services Mobile Menu */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-300 hover:text-emerald-400 font-medium transition-colors text-left flex items-center justify-between py-2"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      AI Governance & Strategy
                    </a>
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      Responsible AI & Ethics
                    </a>
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      Data Science Consulting
                    </a>
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      AI Model Development
                    </a>
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      AI Evals & Audits
                    </a>
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      Multi-Agent Systems
                    </a>
                  </div>
                )}
              </div>

              {/* Sectors Mobile Menu */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsPricingOpen(!isPricingOpen)}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors text-left flex items-center justify-between py-2"
                >
                  Sectors
                  <ChevronDown className={`w-4 h-4 transition-transform ${isPricingOpen ? 'rotate-180' : ''}`} />
                </button>
                {isPricingOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    <a
                      href="#sectors"
                      className="px-4 py-2 hover:bg-cyan-500/10 hover:text-cyan-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      Life Sciences & Healthcare
                    </a>
                    <a
                      href="#sectors"
                      className="px-4 py-2 hover:bg-cyan-500/10 hover:text-cyan-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      EdTech
                    </a>
                    <a
                      href="#sectors"
                      className="px-4 py-2 hover:bg-cyan-500/10 hover:text-cyan-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      Finance & Insurance
                    </a>
                    <a
                      href="#sectors"
                      className="px-4 py-2 hover:bg-cyan-500/10 hover:text-cyan-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      Other Regulated Industries
                    </a>
                  </div>
                )}
              </div>


              {/* Main Navigation Links */}
              <Link
                to="/case-studies"
                className="text-gray-300 hover:text-cyan-400 font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                Case Studies / Impact
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-green-400 font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                About / Team
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-orange-400 font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                Resources / Insights
              </Link>
              <Link
                to="/certifications"
                className="text-gray-300 hover:text-yellow-400 font-medium transition-colors py-2 flex items-center gap-2"
                onClick={closeMenu}
              >
                <Lock className="w-4 h-4" />
                ISO 42001 Certified
              </Link>
              <a
                href="https://calendly.com/sia-sanjeevaniai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400 font-medium transition-colors py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 px-4 py-2 rounded-lg text-center"
                onClick={closeMenu}
              >
                Book Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header