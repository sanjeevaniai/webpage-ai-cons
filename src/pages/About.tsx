import Header from '@/components/Header'
import NoiseBg from '@/components/NoiseBg'
import ISOCertifications from '@/components/ISOCertifications'
import { useState } from 'react'
import ConsultationModal from '@/components/ConsultationModal'

const About = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <NoiseBg />
      <Header />
      <div className="mx-auto max-w-7xl px-4 pt-20 md:pt-32 pb-16">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-green-400">SANJEEVANI AI</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            SANJEEVANI AI helps regulated enterprises govern and deploy multi-agent AI systems safely, responsibly, and profitably. We are the first governance-first advisory and engineering firm aligning ISO/IEC 42001, NIST AI RMF, and modern GRC frameworks to real-world AI engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30">
            <h2 className="text-xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To help regulated enterprises build AI that is governed, safe, and profitable by design. We bridge compliance, risk, and responsible AI design to help leaders ship AI that is safe to scale and simple to govern.
            </p>
          </div>

          <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30">
            <h2 className="text-xl font-semibold text-white mb-4">Our Approach</h2>
            <p className="text-gray-300">
              Non-OSFA (One Size Fits All) approach. We design customized frameworks that align with your specific industry, size, risk profile, and growth stage. Governance is not 'One Size Fits All'.
            </p>
          </div>
        </div>

        {/* Detailed Our Approach Section */}
        <div className="mt-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-400/30 dark:border-cyan-300/30 text-sm text-cyan-600 dark:text-cyan-300 mb-6">
              <div className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse"></div>
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Non-OSFA: Governance is not 'One Size Fits All'</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every organization is unique. We don't believe in generic AI governance templates. Instead, we design customized frameworks that align with your specific industry, size, risk profile, and growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-3">Industry-Specific</h3>
              <p className="text-gray-300 text-sm">
                Healthcare gets HIPAA-focused controls, finance gets SOX compliance, edtech gets FERPA safeguards. No generic templates.
              </p>
            </div>

            <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl mb-4">📏</div>
              <h3 className="text-lg font-semibold text-white mb-3">Size-Appropriate</h3>
              <p className="text-gray-300 text-sm">
                Startup governance looks different from enterprise. We scale frameworks to your team size and complexity.
              </p>
            </div>

            <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold text-white mb-3">Risk-Calibrated</h3>
              <p className="text-gray-300 text-sm">
                High-risk AI gets more controls, low-risk gets streamlined processes. We match governance to actual risk levels.
              </p>
            </div>

            <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-3">Growth-Stage Ready</h3>
              <p className="text-gray-300 text-sm">
                Frameworks that evolve with you—from MVP to IPO. Built to scale, not to constrain.
              </p>
            </div>

            <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-white mb-3">Implementation-Focused</h3>
              <p className="text-gray-300 text-sm">
                Not just policies—actual code, processes, and tools that your team can use day one.
              </p>
            </div>

            <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-lg font-semibold text-white mb-3">ROI-Driven</h3>
              <p className="text-gray-300 text-sm">
                Every control ties back to business value: risk reduction, cost savings, or revenue protection.
              </p>
            </div>
          </div>
        </div>

        {/* About Suneeta Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-4">
              <div className="relative">
                <img
                  src="/suneeta-profile.png"
                  alt="Suneeta Modekurty"
                  className="w-full max-w-sm mx-auto lg:mx-0 rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                  O-1A Visa Holder
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Suneeta Modekurty</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Suneeta Modekurty is an AI & Data Governance Consultant and Responsible AI Strategist, helping regulated enterprises build AI that is governed, safe, and profitable by design. With 25+ years of cross-industry experience, she advises leadership teams on AI policy, compliance, and scalable architecture.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Suneeta holds the prestigious O-1A U.S. visa for extraordinary ability in AI & Data Science, and is the recipient of the AI Thought Leadership Award (2025). She is the author of <em className="text-emerald-400">The AI-Human Synergy</em> (Amazon, 2024) and has served as a mentor, speaker, and AI policy advisor across global platforms.
                </p>
              </div>

              {/* Expertise Areas */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Her expertise spans:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gray-800/20 backdrop-blur-xl rounded-xl p-4 border border-emerald-400/20">
                      <h4 className="text-emerald-400 font-semibold mb-2">Governance Frameworks</h4>
                      <p className="text-gray-300 text-sm">NIST AI RMF, EU AI Act, ISO 42001, HIPAA, GDPR, CPRA</p>
                    </div>
                    <div className="bg-gray-800/20 backdrop-blur-xl rounded-xl p-4 border border-cyan-400/20">
                      <h4 className="text-cyan-400 font-semibold mb-2">Responsible AI & LLM Safety</h4>
                      <p className="text-gray-300 text-sm">Bias mitigation, XAI, ALTAI, Model Cards, LLMOps</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-800/20 backdrop-blur-xl rounded-xl p-4 border border-sky-400/20">
                      <h4 className="text-sky-400 font-semibold mb-2">Engineering Strategy</h4>
                      <p className="text-gray-300 text-sm">Multi-agent systems, RAG pipelines, LLM fine-tuning</p>
                    </div>
                    <div className="bg-gray-800/20 backdrop-blur-xl rounded-xl p-4 border border-purple-400/20">
                      <h4 className="text-purple-400 font-semibold mb-2">Privacy & Security</h4>
                      <p className="text-gray-300 text-sm">Differential Privacy, PETs, OWASP LLM, MITRE ATLAS, AI Red-Teaming</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Work */}
              <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-6 border border-emerald-400/20">
                <h3 className="text-lg font-semibold text-white mb-4">Current Work</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Suneeta currently advises founders, digital health teams, and compliance leaders across healthcare, finance, and edtech — helping them move from pilot models to production-grade, audit-ready systems with clear business ROI.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  She also mentors early-stage teams and is building her next venture, <span className="text-emerald-400 font-semibold">SANJEEVANI AI</span>, a consultancy and platform dedicated to governance-first AI adoption.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 text-center"
                >
                  Book Your Free Consultation Call
                </button>
                <a
                  href="https://www.linkedin.com/company/sanjeevani-ai-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-xl font-medium transition-all duration-200 text-center"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why Teams Choose Us Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Teams Choose Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver AI solutions that are not just technically sound, but built for real-world compliance and business success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-gray-800/10 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/30 hover:border-emerald-400/50 hover:bg-emerald-500/5 hover:shadow-emerald-500/10 transition-all duration-300 shadow-lg hover:shadow-2xl hover:backdrop-blur-2xl">
              <div className="text-center">
                <div className="text-4xl mb-4 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  🛡️
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors">
                  Compliance-first by design
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  Solutions and artifacts stand up to audits, security reviews, and regulators.
                </p>
              </div>
            </div>

            <div className="group bg-gray-800/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/50 hover:bg-cyan-500/5 hover:shadow-cyan-500/10 transition-all duration-300 shadow-lg hover:shadow-2xl hover:backdrop-blur-2xl">
              <div className="text-center">
                <div className="text-4xl mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  ⚙️
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors">
                  Pragmatic engineering
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  Production-ready patterns, not slideware—built for maintainability and scale.
                </p>
              </div>
            </div>

            <div className="group bg-gray-800/10 backdrop-blur-xl rounded-2xl p-8 border border-sky-400/30 hover:border-sky-400/50 hover:bg-sky-500/5 hover:shadow-sky-500/10 transition-all duration-300 shadow-lg hover:shadow-2xl hover:backdrop-blur-2xl">
              <div className="text-center">
                <div className="text-4xl mb-4 text-sky-400 group-hover:text-sky-300 transition-colors">
                  📈
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors">
                  Business outcomes
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  Clear metrics tied to revenue, cost, risk reduction, and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Certifications Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Certifications</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Certified expertise in AI governance, data security, privacy operations, and compliance frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Security & Governance Certification */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 backdrop-blur-xl rounded-2xl p-6 border border-emerald-400/40 hover:border-emerald-400/60 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
              <div className="text-center">
                <img
                  src="/AI Security & Governance.png"
                  alt="AI Security & Governance Certification"
                  className="w-full h-32 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-white mb-2">AI Security & Governance</h3>
                <div className="text-xs text-emerald-300 font-medium bg-emerald-500/20 px-2 py-1 rounded-full inline-block mb-3">
                  VERIFIED
                </div>
                <a
                  href="https://education.securiti.ai/verification/1332C68E8-1332C6757-12D084B90/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-300 hover:text-emerald-200 text-sm font-medium transition-colors"
                >
                  Verify Certificate →
                </a>
              </div>
            </div>

            {/* DSPM Certification */}
            <div className="bg-gradient-to-br from-sky-500/20 to-sky-400/10 backdrop-blur-xl rounded-2xl p-6 border border-sky-400/40 hover:border-sky-400/60 transition-all duration-300 shadow-lg hover:shadow-sky-500/20">
              <div className="text-center">
                <img
                  src="/DSPM.png"
                  alt="DSPM Certification"
                  className="w-full h-32 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-white mb-2">DSPM</h3>
                <div className="text-xs text-sky-300 font-medium bg-sky-500/20 px-2 py-1 rounded-full inline-block">
                  IN PROGRESS
                </div>
              </div>
            </div>

            {/* PrivacyOps Certification */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 backdrop-blur-xl rounded-2xl p-6 border border-emerald-400/40 hover:border-emerald-400/60 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
              <div className="text-center">
                <img
                  src="/PrivacyOps.png"
                  alt="PrivacyOps Certification"
                  className="w-full h-32 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-white mb-2">PrivacyOps</h3>
                <div className="text-xs text-emerald-300 font-medium bg-emerald-500/20 px-2 py-1 rounded-full inline-block">
                  IN PROGRESS
                </div>
              </div>
            </div>

            {/* HIPAA Compliance */}
            <div className="bg-gradient-to-br from-sky-500/20 to-sky-400/10 backdrop-blur-xl rounded-2xl p-6 border border-sky-400/40 hover:border-sky-400/60 transition-all duration-300 shadow-lg hover:shadow-sky-500/20">
              <div className="text-center">
                <div className="w-full h-32 flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-sky-500/30 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🏥</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">HIPAA</h3>
                <div className="text-xs text-sky-300 font-medium bg-sky-500/20 px-2 py-1 rounded-full inline-block">
                  IN PROGRESS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ISO Certifications Section */}
        <div className="mt-16">
          <ISOCertifications
            title="Our ISO Certifications"
            subtitle="Certified in international standards for AI governance, information security, and privacy"
            showDownloadButtons={true}
            compact={false}
          />
        </div>

        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-300 to-sky-400 hover:from-sky-400 hover:to-sky-500 text-white rounded-xl font-medium transition-all duration-200"
          >
            ← Back to Home
          </a>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
    </div>
  )
}

export default About