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
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <video
              src="/your_logo.mp4"
              autoPlay
              loop
              muted
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onBlur={() => setTimeout(() => setIsServicesOpen(false), 150)}
                className="text-gray-300 hover:text-emerald-400 font-medium transition-colors flex items-center gap-1"
              >
                Services
                <ChevronDown className="w-4 h-4" />
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

            {/* Pricing Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsPricingOpen(!isPricingOpen)}
                onBlur={() => setTimeout(() => setIsPricingOpen(false), 150)}
                className="text-gray-300 hover:text-emerald-400 font-medium transition-colors flex items-center gap-1"
              >
                Pricing
                <ChevronDown className="w-4 h-4" />
              </button>
              {isPricingOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl z-50 py-4">
                  <div className="px-4 mb-3">
                    <h3 className="text-emerald-400 font-semibold text-sm mb-2">Hourly Rates</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Virtual Consultation</span>
                        <span className="text-emerald-400 font-medium">$300/hr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Onsite Consultation</span>
                        <span className="text-emerald-400 font-medium">$500/hr</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-700/50 pt-3 px-4">
                    <h3 className="text-cyan-400 font-semibold text-sm mb-2">Project Types</h3>
                    <div className="space-y-2 text-sm">
                      <div className="text-gray-300">Enterprise AI Strategies</div>
                      <div className="text-gray-300">SMB AI Implementation</div>
                      <div className="text-gray-300">Startup AI Roadmaps</div>
                    </div>
                  </div>
                  <div className="border-t border-gray-700/50 pt-3 px-4 mt-3">
                    <a
                      href="https://calendly.com/sia-sanjeevaniai/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
                      onClick={() => setIsPricingOpen(false)}
                    >
                      Book 1:1 Call
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-green-400 font-medium transition-colors">
              About
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors">
              Case Studies
            </Link>
            <Link to="/frameworks" className="text-gray-300 hover:text-emerald-400 font-medium transition-colors">
              Frameworks
            </Link>
            <Link to="/frameworks-locked" className="text-gray-300 hover:text-red-400 font-medium transition-colors flex items-center gap-1">
              <Lock className="w-4 h-4" />
              Pro Frameworks
            </Link>
            <Link to="/compliances" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">
              Compliances
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-orange-400 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/rai-courses" className="text-gray-300 hover:text-pink-400 font-medium transition-colors">
              RAI Courses
            </Link>
            <Link to="/certifications" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors">
              Certifications
            </Link>
            <a
              href="https://calendly.com/sia-sanjeevaniai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-sky-400/25"
            >
              Get in touch
            </a>
          </nav>

          {/* Hamburger Menu Button - Visible on mobile and tablet */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile/Tablet Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-700/50">
            <nav className="flex flex-col gap-6">
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
                      Data Science & AI Governance
                    </a>
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      AI Strategy Consulting
                    </a>
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      Multi-Agent Systems
                    </a>
                    <a
                      href="#services"
                      className="px-4 py-2 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-colors font-medium rounded-lg"
                      onClick={closeMenu}
                    >
                      AI Ethics & Compliance
                    </a>
                  </div>
                )}
              </div>

              {/* Pricing Mobile Menu */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsPricingOpen(!isPricingOpen)}
                  className="text-gray-300 hover:text-emerald-400 font-medium transition-colors text-left flex items-center justify-between py-2"
                >
                  Pricing
                  <ChevronDown className={`w-4 h-4 transition-transform ${isPricingOpen ? 'rotate-180' : ''}`} />
                </button>
                {isPricingOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    <div className="px-4 py-2 bg-gray-800/50 rounded-lg">
                      <div className="text-emerald-400 font-semibold text-sm mb-2">Hourly Rates</div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Virtual</span>
                          <span className="text-emerald-400 font-medium">$300/hr</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Onsite</span>
                          <span className="text-emerald-400 font-medium">$500/hr</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-gray-800/50 rounded-lg">
                      <div className="text-cyan-400 font-semibold text-sm mb-2">Project Types</div>
                      <div className="text-sm text-gray-300 space-y-1">
                        <div>Enterprise AI Strategies</div>
                        <div>SMB AI Implementation</div>
                        <div>Startup AI Roadmaps</div>
                      </div>
                    </div>
                    <a
                      href="https://calendly.com/sia-sanjeevaniai/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-medium text-center"
                      onClick={closeMenu}
                    >
                      Book 1:1 Call
                    </a>
                  </div>
                )}
              </div>

              {/* Main Navigation Links */}
              <Link
                to="/about"
                className="text-gray-300 hover:text-green-400 font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/case-studies"
                className="text-gray-300 hover:text-cyan-400 font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                Case Studies
              </Link>
              <Link
                to="/frameworks"
                className="text-gray-300 hover:text-emerald-400 font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                Frameworks
              </Link>
              <Link
                to="/frameworks-locked"
                className="text-gray-300 hover:text-red-400 font-medium transition-colors py-2 flex items-center gap-2"
                onClick={closeMenu}
              >
                <Lock className="w-4 h-4" />
                Pro Frameworks
              </Link>
              <Link
                to="/compliances"
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                Compliances
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-orange-400 font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                to="/rai-courses"
                className="text-gray-300 hover:text-pink-400 font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                RAI Courses
              </Link>
              <Link
                to="/certifications"
                className="text-gray-300 hover:text-yellow-400 font-medium transition-colors py-2"
                onClick={closeMenu}
              >
                Certifications
              </Link>
              <a
                href="https://calendly.com/sia-sanjeevaniai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-sky-400/25 text-center mt-2"
                onClick={closeMenu}
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