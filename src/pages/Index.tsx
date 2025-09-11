import Header from '@/components/Header'
import NoiseBg from '@/components/NoiseBg'
import Rotator from '@/components/Rotator'

const words = [
  "AI Governance",
  "Data-Driven AI",
  "Multi-Agent Systems",
  "AI Ethics & Compliance",
  "ROI Optimization",
  "Trustworthy AI"
]

const Index = () => {

  return (
    <div className="min-h-screen">
      <NoiseBg />
      <Header />
      {Masthead()}
      {ServicesSection()}
      {WhatYouGetSection()}
      {UserGroupsSection()}
      {CaseStudiesSection()}
      {Credentials()}
      {Certifications()}
      {Contact()}
      {PlatformLinksSection()}
      {CTAStrip()}
      <Footer />
    </div>
  )

  function Masthead() {
    return (
      <section className="relative mx-auto max-w-7xl px-4 pt-20 md:pt-32 pb-16">
        {/* Green/Light Blue gradient background accents */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl opacity-70"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 dark:bg-green-500/20 border border-green-400/30 dark:border-green-300/30 text-sm text-green-600 dark:text-green-300 mb-6">
              <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Build AI Systems That Work — And You Can Trust
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Governance, compliance, and Responsible AI for healthcare, finance/insurance, and the public sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://calendly.com/sia-sanjeevaniai/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-sky-300 to-sky-400 hover:from-sky-400 hover:to-sky-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-sky-300/25">
                Get a Governance Consultation
              </a>
              <a href="#services" className="border border-green-400/40 dark:border-green-300/30 text-green-600 dark:text-green-300 px-6 py-3 rounded-xl font-medium hover:bg-green-500/10 dark:hover:bg-green-500/20 transition-all duration-200">
                See Services
              </a>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <div className="mb-2 text-sky-400 dark:text-sky-300 font-medium">Expertise in:</div>
              <div className="text-green-600 dark:text-green-400 font-medium"><Rotator items={words} /></div>
            </div>
          </div>

          {/* Graphic */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              {/* Main graphic container */}
              <div className="relative bg-gray-800/10 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 shadow-lg hover:bg-gray-800/20 transition-all duration-200">
                {/* AI Governance Dashboard */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-gray-300/70 font-medium hover:text-gray-200 transition-colors duration-200 cursor-default">AI Governance Dashboard</div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Security & Ethics Indicators */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Security Score</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-5/6 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"></div>
                        </div>
                        <span className="text-emerald-400 text-sm font-medium">95%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Ethics Compliance</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
                        </div>
                        <span className="text-cyan-400 text-sm font-medium">92%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">ROI Improvement</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
                        </div>
                        <span className="text-green-400 text-sm font-medium">127%</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-900/20 rounded-xl p-3 border border-emerald-800/30">
                      <div className="text-emerald-400 text-xs font-medium">Cost Reduction</div>
                      <div className="text-white font-semibold">45%</div>
                    </div>
                    <div className="bg-cyan-900/20 rounded-xl p-3 border border-cyan-800/30">
                      <div className="text-cyan-400 text-xs font-medium">Risk Mitigation</div>
                      <div className="text-white font-semibold">78%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-emerald-500 to-emerald-600 backdrop-blur-sm rounded-2xl p-4 border border-emerald-400/30 shadow-lg">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="text-white font-bold text-sm">🛡️</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-cyan-400 to-cyan-500 backdrop-blur-sm rounded-2xl p-3 border border-cyan-300/30 shadow-lg">
                <div className="text-white text-sm font-medium">AI You Can Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function ServicesSection() {
    const services = [
      {
        title: "AI Governance & Compliance Audit",
        description: "Gap analysis vs. HIPAA/NIST/GDPR/CPRA, data flows & access, model lifecycle. Outcome: lower regulatory exposure, executive clarity.",
        symbol: "🛡️"
      },
      {
        title: "Responsible AI Strategy (RAI/XAI)",
        description: "Bias testing & mitigation, explainability playbook, model cards & audit logs, governance KPIs. Outcome: trustworthy AI that passes scrutiny.",
        symbol: "📊"
      },
      {
        title: "Executive Training & Workshops",
        description: "Board/executive briefings, policy templates, AI risk & procurement checklists, team enablement. Outcome: leaders aligned; faster, safer adoption.",
        symbol: "🎓"
      },
      {
        title: "Applied AI Advisory (LLM/RAG/Agents)",
        description: "Use-case selection, guardrails, RAG architecture & evaluation, LoRA/QLoRA guidance. Outcome: useful AI with reduced hallucinations.",
        symbol: "🤖"
      }
    ]

    return (
      <section id="services" className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Services That Actually Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We build AI systems that people can trust, reduce unnecessary loss, and deliver measurable ROI. Our data-driven approach ensures compliance, ethics, and real business value.
            </p>
          </div>

          {/* Main services grid */}
          <div className="grid md:grid-cols-2 gap-8">
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

  function WhatYouGetSection() {
    const deliverables = [
      {
        category: "AI Governance & Compliance",
        items: [
          "Complete HIPAA/NIST/GDPR/CPRA gap analysis",
          "Data flow mapping and access control review",
          "Model lifecycle governance framework",
          "Risk assessment and mitigation strategies",
          "Compliance monitoring dashboards",
          "Executive summary with actionable recommendations"
        ],
        icon: "🛡️",
        color: "emerald"
      },
      {
        category: "Responsible AI Implementation",
        items: [
          "Bias testing and mitigation protocols",
          "Explainable AI (XAI) implementation guide",
          "Model cards and audit trail documentation",
          "Ethical AI decision-making frameworks",
          "Transparency and accountability measures",
          "Stakeholder communication templates"
        ],
        icon: "📊",
        color: "cyan"
      },
      {
        category: "Training & Enablement",
        items: [
          "Executive AI governance training sessions",
          "Team workshops on AI ethics and compliance",
          "Policy templates and implementation guides",
          "AI procurement and vendor evaluation checklists",
          "Risk management playbooks",
          "Ongoing support and consultation"
        ],
        icon: "🎓",
        color: "sky"
      },
      {
        category: "Technical Implementation",
        items: [
          "Custom LLM and RAG architecture design",
          "Multi-agent system development and deployment",
          "AI guardrails and safety mechanisms",
          "Performance monitoring and evaluation metrics",
          "Integration with existing systems",
          "Scalable AI infrastructure recommendations"
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You'll Get</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions that deliver measurable results, complete transparency, and long-term value for your organization.
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
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-colors ${
                          deliverable.color === 'emerald' ? 'bg-emerald-400 group-hover:bg-emerald-300' :
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
                <a
                  href="https://calendly.com/sia-sanjeevaniai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
                >
                  Book Your Consultation
                </a>
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

  function UserGroupsSection() {
    return (
      <section id="user-groups" className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Solutions for Every Healthcare Stakeholder</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tailored AI governance and implementation strategies that address the unique needs of each healthcare ecosystem participant
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* For Clinicians */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/40 hover:border-emerald-400/60 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👩‍⚕️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">For Clinicians</h3>
                <p className="text-emerald-300 text-sm font-medium">AI-Powered Clinical Decision Support</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Personalized AI recommendations that enhance diagnostic accuracy while maintaining clinical autonomy</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">HIPAA-compliant AI tools that integrate seamlessly with existing EHR systems</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Real-time clinical insights with full audit trails and explainable AI decision support</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Reduced administrative burden through intelligent automation of routine clinical tasks</p>
                </div>
              </div>
            </div>

            {/* For Researchers */}
            <div className="bg-gradient-to-br from-sky-500/20 to-sky-400/10 backdrop-blur-xl rounded-2xl p-8 border border-sky-400/40 hover:border-sky-400/60 transition-all duration-300 shadow-lg hover:shadow-sky-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-sky-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔬</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">For Researchers</h3>
                <p className="text-sky-300 text-sm font-medium">Advanced AI Research Infrastructure</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Multi-agent AI systems for complex research data analysis and hypothesis generation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Ethical AI frameworks ensuring research integrity and reproducible results</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Data governance solutions for secure collaboration across research institutions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">AI-powered literature review and knowledge synthesis for faster discovery</p>
                </div>
              </div>
            </div>

            {/* For Survivors/Caregivers */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/40 hover:border-emerald-400/60 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">For Survivors & Caregivers</h3>
                <p className="text-emerald-300 text-sm font-medium">Compassionate AI Support Systems</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Personalized AI companions that provide emotional support and health monitoring</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Privacy-first AI tools that respect patient autonomy and data ownership</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Accessible AI interfaces designed for diverse needs and technical comfort levels</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Community-driven AI solutions that connect survivors and caregivers for mutual support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 mb-6">
              Ready to implement AI solutions tailored to your specific healthcare role?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-300 to-sky-400 hover:from-sky-400 hover:to-sky-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-sky-300/25"
            >
              Get Started with Your AI Journey
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>
    )
  }

  function CaseStudiesSection() {
    return (
      <section id="case-studies" className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mini Case Studies</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Anonymous success stories showcasing real-world AI governance implementations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare Payer",
                description: "RAG + PHI controls → 60% faster review, audit-ready logs.",
                industry: "Healthcare"
              },
              {
                title: "Insurance Underwriting",
                description: "GPT+OCR pipeline w/ SHAP & exception workflow → 15–20% better risk accuracy, ~$5M est. annual savings.",
                industry: "Insurance"
              },
              {
                title: "Public Sector",
                description: "NIST AI RMF training & templates → standardized evaluation, faster approvals.",
                industry: "Public Sector"
              }
            ].map((study, i) => (
              <div
                key={i}
                className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:bg-gray-800/20 hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                  <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/case-studies" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-200">
              View All Case Studies →
            </a>
          </div>
        </div>
      </section>
    )
  }

  function Credentials() {
    return (
      <section id="credentials" className="mx-auto max-w-6xl px-4 mt-20 md:mt-28 relative">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl"></div>

        <div className="grid md:grid-cols-12 gap-8 items-start relative z-10">
          <div className="md:col-span-5">
            <h2 className="text-xl tracking-wide text-green-400 dark:text-green-300 font-semibold">Meet the Founder</h2>
            <div className="mt-6 space-y-4">
              <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30">
                <h3 className="text-green-600 dark:text-green-400 font-medium mb-3">Suneeta Modekurty</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  Suneeta Modekurty is an AI & Data Governance Consultant recognized with the O-1A Visa, recipient of an AI Thought Leadership Award (2025), and author of The AI-Human Synergy (2024). She helps healthcare, finance, and public-sector leaders adopt AI with governance, transparency, and measurable ROI.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Available for new projects
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="bg-gray-800/10 backdrop-blur-xl rounded-3xl border border-gray-700/30 shadow-lg hover:bg-gray-800/20 hover:shadow-2xl transition-all duration-300 p-6 grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Trust & Reliability",
                  desc: "We build AI systems that people can trust, with comprehensive governance frameworks and ethical compliance.",
                  accent: "green"
                },
                {
                  title: "ROI Focused",
                  desc: "Every AI solution we develop is designed to reduce unnecessary loss and deliver measurable business value.",
                  accent: "sky"
                },
                {
                  title: "Compliance First",
                  desc: "HIPAA compliance and NIST frameworks ensure your AI systems meet the highest regulatory standards.",
                  accent: "green"
                },
              ].map((c) => (
                <div key={c.title} className="text-center">
                  <div className={`font-medium mb-2 ${c.accent === 'green' ? 'text-emerald-400' : 'text-cyan-400'
                    }`}>{c.title}</div>
                  <div className={`mt-2 h-px mx-auto w-8 ${c.accent === 'green' ? 'bg-emerald-400' : 'bg-cyan-400'
                    }`} />
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  function Certifications() {
    return (
      <section id="certifications" className="mx-auto max-w-6xl px-4 mt-20 md:mt-28 relative">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl"></div>

        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Certified expertise in AI governance, data security, privacy operations, and compliance frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
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
      </section>
    )
  }

  function Contact() {
    return (
      <section id="contact" className="mx-auto max-w-5xl px-4 mt-24 relative">
        {/* Background accents */}
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-gradient-to-br from-green-500/10 to-sky-500/10 rounded-full blur-3xl"></div>

        <div className="bg-gray-800/10 backdrop-blur-xl rounded-3xl border border-gray-700/30 shadow-lg hover:bg-gray-800/20 hover:shadow-2xl transition-all duration-300 p-6 md:p-10 relative z-10">
          <div className="md:flex md:items-end md:justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-medium text-white">Ready to Build AI That Actually Works?</h2>
              <p className="mt-3 text-gray-300">
                Let's discuss how our AI governance and multi-agent systems can reduce your losses, improve ROI, and build AI you can trust.
              </p>
              <div className="mt-6 text-sm text-gray-400">
                Email us directly: <a className="underline underline-offset-4 text-sky-400 hover:text-sky-300 font-medium" href="mailto:suneeta@sanjeevaniai.com">suneeta@sanjeevaniai.com</a>
                <br className="mt-2" />
                <span className="mt-2 inline-block">Or schedule a conversation: <a className="underline underline-offset-4 text-emerald-400 hover:text-emerald-300 font-medium" href="https://calendly.com/sia-sanjeevaniai/30min" target="_blank" rel="noopener noreferrer">Book a call</a></span>
              </div>
            </div>
            <div className="mt-8 md:mt-0 w-full md:w-auto">
              <a href="https://calendly.com/sia-sanjeevaniai/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-2xl px-5 py-3 bg-gradient-to-r from-sky-300 to-sky-400 hover:from-sky-400 hover:to-sky-500 text-white font-medium shadow-lg hover:shadow-sky-300/25 transition-all duration-200">
                Schedule Consultation →
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function PlatformLinksSection() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Me On These Platforms</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with me across multiple professional platforms for AI consulting, governance, and implementation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, i) => (
              <a
                key={i}
                href={platform.url}
                target={platform.status === 'active' ? '_blank' : undefined}
                rel={platform.status === 'active' ? 'noopener noreferrer' : undefined}
                className={`group bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 shadow-lg hover:shadow-2xl hover:backdrop-blur-2xl ${
                  platform.status === 'active' 
                    ? 'border-emerald-400/30 hover:border-emerald-400/50 hover:bg-emerald-500/5 hover:shadow-emerald-500/10 cursor-pointer' 
                    : 'border-gray-700/30 hover:border-gray-600/50 cursor-not-allowed opacity-60'
                }`}
                onClick={platform.status === 'coming-soon' ? (e) => e.preventDefault() : undefined}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`text-2xl transition-colors ${
                    platform.status === 'active' 
                      ? 'text-emerald-400 group-hover:text-emerald-300' 
                      : 'text-gray-500'
                  }`}>
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold transition-colors ${
                      platform.status === 'active' 
                        ? 'text-white group-hover:text-gray-100' 
                        : 'text-gray-500'
                    }`}>
                      {platform.name}
                    </h3>
                    <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                      platform.status === 'active' 
                        ? 'bg-emerald-500/20 text-emerald-300' 
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {platform.status === 'active' ? 'Available' : 'Coming Soon'}
                    </div>
                  </div>
                </div>
                
                <p className={`text-sm leading-relaxed transition-colors ${
                  platform.status === 'active' 
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
                <a
                  href="https://calendly.com/sia-sanjeevaniai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
                >
                  Book a 1:1 Call
                </a>
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

  function CTAStrip() {
    return (
      <section className="bg-gradient-to-r from-emerald-600 to-sky-600 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to make AI trustworthy?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/sia-sanjeevaniai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Request an Assessment
              </a>
              <a
                href="https://calendly.com/sia-sanjeevaniai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 mt-20 md:mt-28 mb-16 text-gray-500 dark:text-gray-400 text-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span>© {new Date().getFullYear()} SANJEEVANI AI • Custom AI Agents & LLM Fine-tuning</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="https://www.linkedin.com/company/sanjeevani-ai-llc/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">LinkedIn</a>
          <a href="https://www.upwork.com/freelancers/~01968cb9a3759f39de?mp_source=share" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Upwork</a>
          <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Publications</a>
          <a href="#" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Speaking</a>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <a href="/privacy" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Index