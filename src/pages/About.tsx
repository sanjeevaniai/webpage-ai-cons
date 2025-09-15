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