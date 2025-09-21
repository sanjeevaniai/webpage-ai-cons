import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import NoiseBg from '@/components/NoiseBg'
import Rotator from '@/components/Rotator'
import ConsultationModal from '@/components/ConsultationModal'
import NewsletterPopup from '@/components/NewsletterPopup'

const words = [
  "AI Governance",
  "Data-Driven AI",
  "Multi-Agent Systems",
  "AI Ethics & Responsibility",
  "ROI Optimization",
  "Trustworthy AI"
]

const Index = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
  const [isNewsletterPopupOpen, setIsNewsletterPopupOpen] = useState(false)

  // Show newsletter popup after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('newsletter-popup-seen')
      if (!hasSeenPopup) {
        setIsNewsletterPopupOpen(true)
      }
    }, 30000) // 30 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleNewsletterClose = () => {
    setIsNewsletterPopupOpen(false)
    localStorage.setItem('newsletter-popup-seen', 'true')
  }

  return (
    <div className="min-h-screen">
      <NoiseBg />
      <Header />
      {Masthead(setIsConsultationModalOpen)}
      {ServicesSection()}
      {SectorsSection()}
      {HowWeEngageSection()}
      {WhyUsSection()}
      {GRCServicesSection()}
      {NonOSFASection()}
      {WhatYouGetSection(setIsConsultationModalOpen)}
      {CaseStudiesSection(setIsConsultationModalOpen)}
      {PlatformLinksSection(setIsConsultationModalOpen)}
      {FAQSection(setIsConsultationModalOpen)}
      <Footer />
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
      <NewsletterPopup
        isOpen={isNewsletterPopupOpen}
        onClose={handleNewsletterClose}
      />

    </div>
  )

  function Masthead(openModal: () => void) {
    return (
      <section className="relative mx-auto max-w-7xl px-4 pt-24 md:pt-32 lg:pt-36 pb-16">
        {/* Green/Light Blue gradient background accents */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl opacity-70"></div>

        <div className="relative z-10">
          {/* Top section with headline, subheadlines, and image */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-12">
            {/* Text content - takes up 3/5 of the width */}
            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 dark:bg-green-500/20 border border-green-400/30 dark:border-green-300/30 text-sm text-green-600 dark:text-green-300">
                  <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                  Available for new projects
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 dark:bg-yellow-500/20 border border-yellow-400/30 dark:border-yellow-300/30 text-sm text-yellow-600 dark:text-yellow-300">
                  <div className="w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full"></div>
                  ISO/IEC 42001:2023 Certified
                </div>
              </div>

              {/* Main Headline */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span>AI That's </span>
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  Safe to Ship
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl text-gray-300 font-medium">
                  {" "}& Simple to Govern
                </span>
              </motion.h1>

              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 font-medium mb-4">
                  Why not follow best practices from day one?
                </p>
                <p className="text-lg md:text-xl text-emerald-300 font-semibold">
                  Build the best AI–human synergy the world has ever seen.
                </p>
              </motion.div>

              {/* Secondary Section */}
              <motion.div
                className="mb-8 p-6 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Complete AI GRC Services
                </h2>
                <p className="text-xl md:text-2xl text-cyan-300 font-semibold mb-4">
                  Governance • Risk • Compliance
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  We provide technical GRC services for AI systems.
                </p>
                <p className="text-base text-emerald-300 font-medium">
                  Data Science • Risk Assessment • Compliance Readiness
                </p>
              </motion.div>
            </div>

            {/* Graphic - takes up 2/5 of the width */}
            <motion.div
              className="lg:col-span-2 relative lg:mt-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-full">
                {/* Main graphic container */}
                <motion.div
                  className="relative bg-gray-800/10 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 shadow-lg hover:bg-gray-800/20 transition-all duration-200"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* AI Governance Dashboard */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-gray-300/70 font-medium hover:text-gray-200 transition-colors duration-200 cursor-default">AI Governance Dashboard</div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>

                    {/* Security & Ethics Indicators */}
                    <div className="space-y-4">
                      <motion.div
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                      >
                        <span className="text-sm text-gray-400">Security Score</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: '95%' }}
                              transition={{ delay: 1.6, duration: 1.5, ease: "easeOut" }}
                            ></motion.div>
                          </div>
                          <span className="text-emerald-400 text-sm font-medium">95%</span>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                      >
                        <span className="text-sm text-gray-400">Ethics Score</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: '92%' }}
                              transition={{ delay: 1.8, duration: 1.5, ease: "easeOut" }}
                            ></motion.div>
                          </div>
                          <span className="text-cyan-400 text-sm font-medium">92%</span>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6, duration: 0.6 }}
                      >
                        <span className="text-sm text-gray-400">ROI Improvement</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ delay: 2.0, duration: 1.5, ease: "easeOut" }}
                            ></motion.div>
                          </div>
                          <span className="text-green-400 text-sm font-medium">127%</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Key Metrics */}
                    <motion.div
                      className="grid grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2, duration: 0.6 }}
                    >
                      <motion.div
                        className="bg-emerald-900/20 rounded-xl p-3 border border-emerald-800/30"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-emerald-400 text-xs font-medium">Cost Reduction</div>
                        <div className="text-white font-semibold">45%</div>
                      </motion.div>
                      <motion.div
                        className="bg-cyan-900/20 rounded-xl p-3 border border-cyan-800/30"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-cyan-400 text-xs font-medium">Risk Mitigation</div>
                        <div className="text-white font-semibold">78%</div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-emerald-500 to-emerald-600 backdrop-blur-sm rounded-2xl p-4 border border-emerald-400/30 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.4, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-white font-bold text-sm">🛡️</div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-cyan-400 to-cyan-500 backdrop-blur-sm rounded-2xl p-3 border border-cyan-300/30 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.6, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-white text-sm font-medium">AI You Can Trust</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom section with descriptive paragraphs */}
          <div className="mt-12">
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              SANJEEVANI AI is a technical GRC consulting firm specializing in AI systems for Life Sciences, EdTech, and Finance. We provide data science consulting, AI risk assessments, and compliance readiness services - helping you build trustworthy AI without crossing into legal compliance work.
            </motion.p>

            <motion.p
              className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Our services include: AI governance frameworks, technical risk assessments, compliance readiness evaluations, data science consulting, and AI model development. We focus on the technical and operational aspects of GRC - not legal compliance certification or regulatory sign-off.
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-400/30 dark:border-emerald-300/30 text-sm text-emerald-600 dark:text-emerald-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">Non-OSFA Approach:</span>
              <span>Governance is not 'One Size Fits All'</span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.button
                onClick={openModal}
                className="bg-gradient-to-r from-sky-300 to-sky-400 hover:from-sky-400 hover:to-sky-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-sky-300/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Free Consultation Call
              </motion.button>
              <motion.a
                href="#services"
                className="border border-green-400/40 dark:border-green-300/30 text-green-600 dark:text-green-300 px-6 py-3 rounded-xl font-medium hover:bg-green-500/10 dark:hover:bg-green-500/20 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Services
              </motion.a>
            </motion.div>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              <div className="mb-2 text-sky-400 dark:text-sky-300 font-medium">Expertise in:</div>
              <div className="text-green-600 dark:text-green-400 font-medium"><Rotator items={words} /></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function SectorsSection() {
    const sectors = [
      {
        title: "Life Sciences & Healthcare",
        description: "HIPAA-compliant AI systems for clinical decision support, drug discovery, patient monitoring, and diagnostic assistance. From pilot models to production-grade, audit-ready systems.",
        icon: "🏥",
        color: "emerald"
      },
      {
        title: "EdTech",
        description: "Responsible AI implementation for personalized learning, content generation, and student assessment. Building trustworthy AI that enhances education outcomes while protecting student data.",
        icon: "🎓",
        color: "cyan"
      },
      {
        title: "Finance & Insurance",
        description: "AI governance frameworks for risk management, fraud detection, and regulatory reporting. Ensuring AI systems meet financial regulations and audit requirements.",
        icon: "💼",
        color: "sky"
      },
      {
        title: "Other Regulated Industries",
        description: "Custom AI solutions for manufacturing, energy, transportation, and other highly regulated sectors requiring robust governance and ethical AI practices.",
        icon: "🏭",
        color: "purple"
      }
    ]

    return (
      <section id="sectors" className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sectors We Serve</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Deep expertise across highly regulated industries where AI governance and ethical practices are critical for success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, i) => {
              const colorClasses = {
                emerald: 'border-emerald-400/30 hover:border-emerald-400/50 hover:bg-emerald-500/5 hover:shadow-emerald-500/10',
                cyan: 'border-cyan-400/30 hover:border-cyan-400/50 hover:bg-cyan-500/5 hover:shadow-cyan-500/10',
                sky: 'border-sky-400/30 hover:border-sky-400/50 hover:bg-sky-500/5 hover:shadow-sky-500/10',
                purple: 'border-purple-400/30 hover:border-purple-400/50 hover:bg-purple-500/5 hover:shadow-purple-500/10'
              }

              return (
                <div
                  key={i}
                  className={`group bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 shadow-lg hover:shadow-2xl hover:backdrop-blur-2xl ${colorClasses[sector.color]}`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{sector.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                      {sector.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  function ServicesSection() {
    const services = [
      {
        title: "AI Governance & Strategy",
        description: "Internal governance frameworks and ethical AI policies for Life Sciences, EdTech, and Finance. Technical/operational policies aligned with global standards.",
        symbol: "🛡️"
      },
      {
        title: "AI Risk Assessment & Management",
        description: "Comprehensive risk identification, analysis, and mitigation for algorithmic, model, and data risks including bias, security vulnerabilities, and model drift.",
        symbol: "⚠️"
      },
      {
        title: "Compliance Readiness & Advisory",
        description: "Technical adherence to ISO/IEC 42001, GDPR, HIPAA, FERPA, SOC2 standards. Process mapping, readiness assessments, and mock audits for certification preparation.",
        symbol: "📋"
      },
      {
        title: "Data Science Consulting",
        description: "Bioinformatics, Health Analytics, Insurance, Educational Analytics, Financial Modeling, and predictive analytics for regulated industries.",
        symbol: "⚙️"
      },
      {
        title: "AI Model Development",
        description: "End-to-end model development, validation, and deployment for all regulated and high-stakes sectors with technical excellence.",
        symbol: "🎓"
      },
      {
        title: "AI Evals & Audits",
        description: "Comprehensive evaluation of AI models for bias, fairness, transparency, and explainability with technical mitigation strategies.",
        symbol: "🔍"
      }
    ]

    return (
      <section id="services" className="mt-12 md:mt-16 relative">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide technical GRC services for AI systems. Our expertise covers AI governance frameworks, risk assessments, compliance readiness, and data science consulting - helping you build trustworthy AI without legal compliance work.
            </p>
          </div>

          {/* Main services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const isGreen = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`group bg-gray-800/10 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:backdrop-blur-2xl ${isGreen
                    ? 'hover:bg-emerald-500/5 hover:border-emerald-400/30 hover:shadow-emerald-500/10'
                    : 'hover:bg-cyan-500/5 hover:border-cyan-400/30 hover:shadow-cyan-500/10'
                    }`}
                >
                  <div className={`text-3xl mb-4 transition-colors ${isGreen ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-cyan-400 group-hover:text-cyan-300'}`}>{service.symbol}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white transition-colors">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed transition-colors group-hover:text-gray-200">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )
  }

  function HowWeEngageSection() {
    const engagementSteps = [
      {
        step: "01",
        title: "Baseline",
        description: "Comprehensive assessment of your current AI systems, governance maturity, and technical readiness for trustworthy AI deployment.",
        icon: "📊"
      },
      {
        step: "02",
        title: "Guardrails",
        description: "Design and implement governance frameworks, ethical controls, and technical protocols tailored to your multi-agent AI systems.",
        icon: "🛡️"
      },
      {
        step: "03",
        title: "Operationalize",
        description: "Deploy governance systems, monitoring dashboards, and operational processes for ongoing trustworthy AI management.",
        icon: "⚙️"
      },
      {
        step: "04",
        title: "Enablement",
        description: "Train your teams, establish governance operating models, and provide ongoing advisory support for sustainable AI governance.",
        icon: "🎓"
      }
    ]

    return (
      <section className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Engage</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our proven 4-step methodology ensures your multi-agent AI systems are governed, compliant, and ready for production scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementSteps.map((step, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/40 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-purple-400 font-bold text-lg mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  function WhyUsSection() {
    const differentiators = [
      {
        title: "Governance-First by Design",
        description: "We don't retrofit governance - we build it into your AI systems from day one, ensuring ethical AI practices and risk management are natural outcomes, not afterthoughts.",
        icon: "✅"
      },
      {
        title: "Pragmatic Engineering",
        description: "25+ years of cross-industry expertise means we understand both the technical complexity and business realities of deploying AI in regulated environments.",
        icon: "🔧"
      },
      {
        title: "Business Outcomes",
        description: "Our governance frameworks tie directly to revenue growth, cost reduction, risk mitigation, and customer trust - measurable ROI from day one.",
        icon: "📈"
      }
    ]

    return (
      <section className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are technical GRC specialists with 25+ years of data science expertise. We provide AI governance, risk assessment, and compliance readiness services - not legal compliance work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/40 shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  function GRCServicesSection() {
    const grcServices = [
      {
        title: "AI Governance Frameworks",
        description: "Internal governance frameworks, ethical AI policies, and technical standards aligned with global best practices.",
        icon: "🛡️"
      },
      {
        title: "AI Risk Assessment & Management",
        description: "Comprehensive risk identification, analysis, and mitigation for algorithmic, model, and data risks including bias and security vulnerabilities.",
        icon: "⚠️"
      },
      {
        title: "Compliance Readiness & Advisory",
        description: "Technical adherence to ISO/IEC 42001, GDPR, HIPAA, FERPA, SOC2 standards. Process mapping and readiness assessments for certification preparation.",
        icon: "📋"
      },
      {
        title: "Data Science Consulting",
        description: "Bioinformatics, Health Analytics, Insurance, Educational Analytics, Financial Modeling, and predictive analytics for regulated industries.",
        icon: "⚙️"
      },
      {
        title: "AI Model Development & Validation",
        description: "End-to-end model development, validation, and deployment for all regulated and high-stakes sectors with technical excellence.",
        icon: "🎓"
      },
      {
        title: "AI Evals & Technical Audits",
        description: "Comprehensive evaluation of AI models for bias, fairness, transparency, and explainability with technical mitigation strategies.",
        icon: "🔍"
      }
    ]

    return (
      <section className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services: Complete GRC Support</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide technical GRC services for AI systems: Governance frameworks, Risk assessments, and Compliance readiness. We focus on technical and operational aspects - not legal compliance certification or regulatory sign-off.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grcServices.map((service, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/40 shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  function NonOSFASection() {
    const customizations = [
      {
        title: "Industry-Specific Frameworks",
        description: "Healthcare AI governance differs from EdTech requirements. We tailor frameworks to your specific regulatory landscape and operational needs.",
        icon: "🏥"
      },
      {
        title: "Organization-Size Appropriate",
        description: "Startup governance needs differ from enterprise requirements. We scale our approach from lean frameworks to comprehensive systems.",
        icon: "📏"
      },
      {
        title: "Risk Profile Customization",
        description: "Each organization has unique technical requirements and ethical standards. We design governance that matches your specific AI deployment needs.",
        icon: "🎯"
      },
      {
        title: "Technology Stack Integration",
        description: "Your existing tech stack and AI tools determine governance implementation. We integrate with your current systems, not replace them.",
        icon: "🔧"
      },
      {
        title: "Regulatory Environment Focus",
        description: "HIPAA for healthcare, FERPA for EdTech, plus state and international regulations. We focus on the governance frameworks that matter to you.",
        icon: "⚖️"
      },
      {
        title: "Growth Stage Alignment",
        description: "Pilot-stage governance differs from production-scale needs. We design frameworks that grow with your AI maturity.",
        icon: "📈"
      }
    ]

    return (
      <section className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-400/30 dark:border-cyan-300/30 text-sm text-cyan-600 dark:text-cyan-300 mb-6">
              <div className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse"></div>
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Non-OSFA: Governance is not 'One Size Fits All'</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every organization is unique. We don't believe in generic AI governance templates. Instead, we design customized frameworks that align with your specific industry, size, risk profile, and growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customizations.map((item, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/40 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyan-900/20 to-emerald-900/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-700/30">
              <h3 className="text-2xl font-bold text-white mb-4">Why Non-OSFA Matters</h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Generic AI governance frameworks often create technical gaps, operational inefficiencies, and unnecessary complexity.
                Our Non-OSFA approach ensures your AI governance is <span className="text-cyan-400 font-semibold">precisely tailored</span> to your organization's needs,
                <span className="text-emerald-400 font-semibold"> cost-effective</span> to implement, and
                <span className="text-sky-400 font-semibold"> scalable</span> as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function WhatYouGetSection(openModal: () => void) {
    const deliverables = [
      {
        category: "AI Governance & Risk Management",
        items: [
          "AI governance frameworks and ethical policies",
          "Technical risk assessments and mitigation strategies",
          "AI system evaluations and monitoring dashboards",
          "ISO/IEC 42001, GDPR, HIPAA compliance readiness assessments",
          "Technical documentation and audit-ready processes",
          "Risk management frameworks and controls"
        ],
        icon: "🛡️",
        color: "emerald"
      },
      {
        category: "Data Science & AI Development",
        items: [
          "Data science consulting and predictive analytics",
          "AI model development and validation",
          "Multi-agent system architecture and orchestration",
          "Bias detection and fairness evaluation",
          "Model performance monitoring and drift detection",
          "Technical standards and best practices implementation"
        ],
        icon: "⚙️",
        color: "cyan"
      },
      {
        category: "Compliance Readiness & Advisory",
        items: [
          "Compliance readiness evaluations and gap analysis",
          "Process mapping to regulatory frameworks",
          "Mock audits and certification preparation",
          "Technical adherence to global standards",
          "Training and enablement for technical teams",
          "Ongoing technical support and consultation"
        ],
        icon: "📋",
        color: "sky"
      },
      {
        category: "Responsible AI Implementation",
        items: [
          "Bias testing and fairness assessment protocols",
          "Explainable AI (XAI) implementation guide",
          "Model cards and audit trail documentation",
          "Human-in-the-loop design patterns",
          "Ethical decision-making frameworks",
          "Transparency and accountability measures"
        ],
        icon: "🤖",
        color: "purple"
      }
    ]

    return (
      <section id="what-you-get" className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You Get</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete technical GRC support for AI systems: governance frameworks, risk assessments, compliance readiness, data science consulting, and AI model development. We focus on technical and operational aspects - not legal compliance work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {deliverables.map((deliverable, i) => {
              const colorClasses = {
                emerald: 'border-emerald-400/30 hover:border-emerald-400/50 hover:bg-emerald-500/5 hover:shadow-emerald-500/10',
                cyan: 'border-cyan-400/30 hover:border-cyan-400/50 hover:bg-cyan-500/5 hover:shadow-cyan-500/10',
                sky: 'border-sky-400/30 hover:border-sky-400/50 hover:bg-sky-500/5 hover:shadow-sky-500/10',
                purple: 'border-purple-400/30 hover:border-purple-400/50 hover:bg-purple-500/5 hover:shadow-purple-500/10'
              }

              const textColorClasses = {
                emerald: 'text-emerald-400 group-hover:text-emerald-300',
                cyan: 'text-cyan-400 group-hover:text-cyan-300',
                sky: 'text-sky-400 group-hover:text-sky-300',
                purple: 'text-purple-400 group-hover:text-purple-300'
              }

              return (
                <div
                  key={i}
                  className={`group bg-gray-800/10 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-300 shadow-lg hover:shadow-2xl hover:backdrop-blur-2xl ${colorClasses[deliverable.color]}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`text-3xl transition-colors ${textColorClasses[deliverable.color]}`}>
                      {deliverable.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-gray-100">
                      {deliverable.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {deliverable.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-colors ${deliverable.color === 'emerald' ? 'bg-emerald-400 group-hover:bg-emerald-300' :
                          deliverable.color === 'cyan' ? 'bg-cyan-400 group-hover:bg-cyan-300' :
                            deliverable.color === 'sky' ? 'bg-sky-400 group-hover:bg-sky-300' :
                              'bg-purple-400 group-hover:bg-purple-300'
                          }`}></div>
                        <span className="text-gray-300 leading-relaxed transition-colors group-hover:text-gray-200">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your AI Strategy?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Book a 1:1 consultation to discuss your specific needs and get a customized roadmap for implementing trustworthy AI in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
                >
                  Book Your Free Consultation Call
                </button>
                <a
                  href="https://www.linkedin.com/company/sanjeevani-ai-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl font-medium transition-all duration-200"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }



  function CaseStudiesSection(openModal: () => void) {
    return (
      <section id="case-studies" className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Digital health teams and technical leaders across healthcare, finance, and edtech who need AI that's safe to ship and simple to govern.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Health Teams",
                description: "HIPAA-compliant AI systems for clinical decision support, patient monitoring, and diagnostic assistance. From pilot models to production-grade, audit-ready systems.",
                industry: "Healthcare",
                icon: "🏥",
                color: "emerald"
              },
              {
                title: "Finance Risk Leaders",
                description: "AI governance frameworks for risk management, fraud detection, and regulatory reporting. Ensuring AI systems meet financial governance standards and audit requirements.",
                industry: "Finance",
                icon: "💼",
                color: "cyan"
              },
              {
                title: "EdTech Founders",
                description: "Responsible AI implementation for personalized learning, content generation, and student assessment. Building trustworthy AI that enhances education outcomes.",
                industry: "EdTech",
                icon: "🎓",
                color: "sky"
              },
              {
                title: "Healthcare Governance Teams",
                description: "NIST AI RMF alignment, PHI protection, and audit-ready documentation. Moving from governance burden to competitive advantage through AI governance.",
                industry: "Healthcare",
                icon: "🛡️",
                color: "purple"
              },
              {
                title: "FinTech Startups",
                description: "AI safety and governance for payment systems, lending algorithms, and customer service. Building AI that regulators trust and customers rely on.",
                industry: "FinTech",
                icon: "🚀",
                color: "emerald"
              },
              {
                title: "EdTech Governance Officers",
                description: "Student data protection, algorithmic transparency, and educational equity. Ensuring AI in education serves all learners fairly and safely.",
                industry: "EdTech",
                icon: "📚",
                color: "cyan"
              }
            ].map((audience, i) => {
              const colorClasses = {
                emerald: 'border-emerald-400/30 hover:border-emerald-400/50 hover:bg-emerald-500/5 hover:shadow-emerald-500/10',
                cyan: 'border-cyan-400/30 hover:border-cyan-400/50 hover:bg-cyan-500/5 hover:shadow-cyan-500/10',
                sky: 'border-sky-400/30 hover:border-sky-400/50 hover:bg-sky-500/5 hover:shadow-sky-500/10',
                purple: 'border-purple-400/30 hover:border-purple-400/50 hover:bg-purple-500/5 hover:shadow-purple-500/10'
              }

              return (
                <div
                  key={i}
                  className={`group bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 shadow-lg hover:shadow-2xl hover:backdrop-blur-2xl ${colorClasses[audience.color]}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{audience.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">{audience.title}</h3>
                      <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded-full">
                        {audience.industry}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {audience.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Move from Pilot to Production?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you're a digital health team, governance leader, or edtech founder, we help you build AI systems that are audit-ready, regulator-approved, and business-ready.
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
              >
                Book Your Free Consultation Call
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }



  function PlatformLinksSection(openModal: () => void) {
    const platforms = [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/sanjeevani-ai-llc/",
        description: "Professional network and company updates",
        icon: "💼",
        status: "active"
      },
      {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/~01968cb9a3759f39de?mp_source=share",
        description: "Expert-Vetted AI Consultant",
        icon: "🚀",
        status: "active"
      },
      {
        name: "Topmate",
        url: "https://topmate.io/suneeta19",
        description: "1:1 AI Strategy Consultations - $149",
        icon: "💬",
        status: "active"
      },
      {
        name: "Toptal",
        url: "#",
        description: "Top 3% AI talent network",
        icon: "⭐",
        status: "coming-soon"
      },
      {
        name: "Fiverr Pro",
        url: "#",
        description: "Premium AI consulting services",
        icon: "🎯",
        status: "coming-soon"
      },
      {
        name: "Wellfound",
        url: "#",
        description: "Startup-focused AI expertise",
        icon: "🌱",
        status: "coming-soon"
      },
      {
        name: "Aquent",
        url: "#",
        description: "Enterprise AI consulting",
        icon: "🏢",
        status: "coming-soon"
      },
      {
        name: "FlexJobs",
        url: "#",
        description: "Flexible AI project work",
        icon: "⚡",
        status: "coming-soon"
      }
    ]

    return (
      <section id="platforms" className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Platforms</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect across multiple professional platforms for AI consulting, governance, and implementation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, i) => (
              <a
                key={i}
                href={platform.url}
                target={platform.status === 'active' ? '_blank' : undefined}
                rel={platform.status === 'active' ? 'noopener noreferrer' : undefined}
                className={`group bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 shadow-lg hover:shadow-2xl hover:backdrop-blur-2xl ${platform.status === 'active'
                  ? 'border-emerald-400/30 hover:border-emerald-400/50 hover:bg-emerald-500/5 hover:shadow-emerald-500/10 cursor-pointer'
                  : 'border-gray-700/30 hover:border-gray-600/50 cursor-not-allowed opacity-60'
                  }`}
                onClick={platform.status === 'coming-soon' ? (e) => e.preventDefault() : undefined}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`text-2xl transition-colors ${platform.status === 'active'
                    ? 'text-emerald-400 group-hover:text-emerald-300'
                    : 'text-gray-500'
                    }`}>
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold transition-colors ${platform.status === 'active'
                      ? 'text-white group-hover:text-gray-100'
                      : 'text-gray-500'
                      }`}>
                      {platform.name}
                    </h3>
                    <div className={`text-xs px-2 py-1 rounded-full inline-block ${platform.status === 'active'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-gray-500/20 text-gray-400'
                      }`}>
                      {platform.status === 'active' ? 'Available' : 'Coming Soon'}
                    </div>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed transition-colors ${platform.status === 'active'
                  ? 'text-gray-300 group-hover:text-gray-200'
                  : 'text-gray-500'
                  }`}>
                  {platform.description}
                </p>

                {platform.status === 'active' && (
                  <div className="mt-4 flex items-center text-emerald-400 text-sm font-medium group-hover:text-emerald-300 transition-colors">
                    Visit Profile
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you're an enterprise, SMB, or startup implementing AI strategies, I'm here to help you build trustworthy, compliant, and effective AI systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
                >
                  Book Your Free Consultation Call
                </button>
                <a
                  href="https://www.linkedin.com/company/sanjeevani-ai-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl font-medium transition-all duration-200"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }



  function FAQSection(openModal: () => void) {
    const [openFAQs, setOpenFAQs] = useState<number[]>([])

    const faqs = [
      {
        question: "What exactly do you provide - are you a legal compliance firm?",
        answer: "No, we are NOT a legal compliance firm. We provide technical GRC services: AI governance frameworks, risk assessments, compliance readiness evaluations, and data science consulting. We focus on technical and operational aspects - not legal compliance certification or regulatory sign-off. We help you prepare for compliance but don't provide legal advice."
      },
      {
        question: "What's the difference between your services and legal compliance?",
        answer: "We provide technical GRC services: governance frameworks, risk assessments, compliance readiness, and data science consulting. Legal compliance involves regulatory certification, legal advice, and regulatory sign-off - which we don't provide. We help you build trustworthy AI systems and prepare for compliance, but you'll need legal experts for final compliance certification."
      },
      {
        question: "How do you help with AI risk assessment?",
        answer: "We conduct comprehensive technical risk assessments including algorithmic bias detection, model drift analysis, security vulnerability assessment, and data integrity review. We provide technical mitigation strategies and monitoring frameworks - not legal risk assessment or regulatory compliance certification."
      },
      {
        question: "What does compliance readiness mean?",
        answer: "Compliance readiness means we help you prepare for regulatory compliance by conducting gap analyses, process mapping, mock audits, and technical evaluations. We ensure your AI systems meet technical standards but don't provide legal compliance certification or regulatory sign-off - that requires licensed legal experts."
      },
      {
        question: "Do you provide data science consulting?",
        answer: "Yes, we provide comprehensive data science consulting including predictive analytics, AI model development, bioinformatics, health analytics, financial modeling, and educational analytics. Our 25+ years of expertise covers all regulated industries with technical excellence and ethical AI principles."
      },
      {
        question: "What industries do you specialize in?",
        answer: "We specialize in Life Sciences, EdTech, Finance, and other regulated industries. Our technical GRC services help these sectors build trustworthy AI systems through governance frameworks, risk assessments, compliance readiness, and data science consulting - all focused on technical and operational aspects."
      }
    ]

    const toggleFAQ = (index: number) => {
      setOpenFAQs(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    }

    return (
      <section id="faq" className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Common questions about our technical GRC services for AI systems.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFAQs.includes(i)
              return (
                <div
                  key={i}
                  className="bg-gray-800/10 backdrop-blur-xl rounded-2xl border border-gray-700/30 hover:border-emerald-400/30 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/10 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-white flex items-start gap-3 pr-4">
                      <span className="text-emerald-400 text-xl">Q</span>
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-emerald-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 ml-8">
                      <p className="text-gray-300 leading-relaxed">
                        <span className="text-cyan-400 font-medium">A: </span>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Book a free 30-minute consultation to discuss your specific AI governance needs and get personalized recommendations.
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
              >
                Book Your Free Consultation Call
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

function Footer() {
  return (
    <footer className="mt-16 md:mt-20 relative">
      <div className="mx-auto max-w-6xl px-4">
        {/* Simple Footer */}
        <div className="border-t border-gray-700/30 pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <span className="text-gray-400">© {new Date().getFullYear()} SANJEEVANI AI • Technical GRC Services for AI Systems</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="mailto:suneeta@sanjeevaniai.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Email
              </a>
              <a href="https://calendly.com/sia-sanjeevaniai/30min" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
                Book Call
              </a>
              <a href="https://www.linkedin.com/company/sanjeevani-ai-llc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                LinkedIn
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-sky-400 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Index