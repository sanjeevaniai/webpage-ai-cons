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
      {CaseStudiesSection()}
      {Credentials()}
      {Contact()}
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
              Build AI Systems That
              <br />
              <span className="text-green-600 dark:text-green-400">Actually Work & You Can Trust</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We reduce unnecessary loss for companies by building trustworthy AI systems that deliver real ROI. Our data-driven AI governance and multi-agent systems follow HIPAA compliance and NIST frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="bg-gradient-to-r from-sky-300 to-sky-400 hover:from-sky-400 hover:to-sky-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-sky-300/25">
                Start Your AI Journey
              </a>
              <a href="#services" className="border border-green-400/40 dark:border-green-300/30 text-green-600 dark:text-green-300 px-6 py-3 rounded-xl font-medium hover:bg-green-500/10 dark:hover:bg-green-500/20 transition-all duration-200">
                Explore Services
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
        title: "Data Science & AI Governance",
        description: "Build trustworthy AI systems with comprehensive governance frameworks. We implement data-driven AI solutions that follow HIPAA compliance and NIST frameworks to reduce risk and ensure ethical AI deployment.",
        symbol: "🛡️"
      },
      {
        title: "AI Strategy Consulting",
        description: "Strategic guidance to reduce unnecessary loss and improve ROI through AI. We consult and coach AI strategies that deliver measurable results while maintaining the highest standards of AI ethics and compliance.",
        symbol: "📊"
      },
      {
        title: "Multi-Agent Systems",
        description: "Develop intelligent multi-agent systems that work seamlessly together. Our AI systems are built to be reliable, trustworthy, and deliver consistent results that you can depend on for critical business operations.",
        symbol: "🤖"
      },
      {
        title: "AI Ethics & Compliance",
        description: "Ensure your AI systems meet the highest ethical standards and regulatory requirements. We help you build AI that people can trust, with comprehensive compliance frameworks and ongoing monitoring.",
        symbol: "⚖️"
      },
      {
        title: "ROI Optimization",
        description: "Maximize your return on investment with AI systems that actually work. We focus on delivering measurable business value, cost reduction, and efficiency improvements through strategic AI implementation.",
        symbol: "💰"
      },
      {
        title: "Trustworthy AI Development",
        description: "Build AI systems that people can trust and rely on. Our approach ensures transparency, explainability, and reliability in every AI solution we develop, reducing risk and building confidence.",
        symbol: "🔒"
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

  function CaseStudiesSection() {
    return (
      <section id="case-studies" className="mt-24 md:mt-32 relative">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real-world AI implementations that reduced losses, improved ROI, and built trustworthy AI systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Risk AI System",
                description: "Built trustworthy AI governance system that reduced financial losses by 45% while maintaining 95% security compliance.",
                metrics: "45% Loss Reduction • 95% Security Score"
              },
              {
                title: "Multi-Agent Supply Chain",
                description: "Developed reliable multi-agent system for supply chain optimization, improving ROI by 127% with full compliance.",
                metrics: "127% ROI Improvement • Full Compliance"
              },
              {
                title: "AI Ethics Framework",
                description: "Implemented comprehensive AI ethics and compliance framework, reducing risk by 78% while building stakeholder trust.",
                metrics: "78% Risk Reduction • Stakeholder Trust"
              }
            ].map((study, i) => (
              <div
                key={i}
                className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:bg-gray-800/20 hover:border-emerald-400/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{study.description}</p>
                <div className="text-sm text-emerald-400 font-medium">{study.metrics}</div>
              </div>
            ))}
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
                  Founder & CEO, SANJEEVANI AI | Building AI Governance & Multi-Agent Systems That Actually Work | AI You Can Trust to Increase ROI & Reduce Costs | Award-winning AI & Data Science Leader | O-1A Extraordinary Ability
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
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 mt-20 md:mt-28 mb-16 text-gray-500 dark:text-gray-400 text-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span>© {new Date().getFullYear()} SANJEEVANI AI • Custom AI Agents & LLM Fine-tuning</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors">Publications</a>
          <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">GitHub</a>
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