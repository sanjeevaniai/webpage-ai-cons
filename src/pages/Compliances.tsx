import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, FileText, Lock, Users, CheckCircle, AlertTriangle, Home } from 'lucide-react'

const Compliances = () => {
    const compliances = [
        {
            name: "HIPAA",
            description: "Protects patient health information and ensures privacy in healthcare",
            implementation: "We implement administrative, physical, and technical safeguards, conduct risk assessments, and establish business associate agreements.",
            icon: Shield,
            color: "from-blue-500 to-blue-600",
            category: "Healthcare"
        },
        {
            name: "NIST AI RMF",
            description: "Risk Management Framework for AI systems",
            implementation: "We apply the 6-step process: Govern, Map, Measure, Manage, Categorize, and Select controls for AI risk management.",
            icon: FileText,
            color: "from-green-500 to-green-600",
            category: "AI Governance"
        },
        {
            name: "GDPR",
            description: "EU regulation for data protection and privacy",
            implementation: "We ensure lawful basis for processing, implement data subject rights, conduct DPIAs, and maintain privacy by design principles.",
            icon: Users,
            color: "from-orange-500 to-orange-600",
            category: "Privacy"
        },
        {
            name: "CPRA",
            description: "California Consumer Privacy Rights Act",
            implementation: "We implement consumer rights management, opt-out mechanisms, data deletion processes, and privacy policy updates.",
            icon: CheckCircle,
            color: "from-teal-500 to-teal-600",
            category: "Privacy"
        },
        {
            name: "DSPM",
            description: "Data Security Posture Management",
            implementation: "We provide continuous monitoring, data discovery, classification, and security posture assessment for data assets.",
            icon: Lock,
            color: "from-purple-500 to-purple-600",
            category: "Data Security"
        },
        {
            name: "AI Evaluations",
            description: "The proof layer of governance—measurable controls that gate releases and generate audit-ready evidence",
            implementation: "We design comprehensive eval suites covering quality, responsible AI, security, privacy, reliability, and business KPIs with clear thresholds and monitoring dashboards.",
            icon: CheckCircle,
            color: "from-indigo-500 to-indigo-600",
            category: "AI Governance"
        }
    ]

    const categories = ["All", "Healthcare", "AI Governance", "Privacy", "Data Security"]
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredCompliances = selectedCategory === "All"
        ? compliances
        : compliances.filter(compliance => compliance.category === selectedCategory)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-sky-900">
            {/* Back Home Button */}
            <div className="container mx-auto px-4 pt-4 sm:pt-8">
                <Link
                    to="/"
                    className="inline-flex items-center text-emerald-300 hover:text-white transition-colors mb-4 sm:mb-8 text-sm sm:text-base"
                >
                    <Home className="w-4 h-4 mr-2" />
                    Back Home
                </Link>
            </div>

            <div className="container mx-auto px-4 py-8 sm:py-16">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        Compliances
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">
                        HIPAA, NIST AI RMF, GDPR, CPRA, DSPM — brief 1-line explainer each + how we implement controls.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-2">8+</div>
                        <div className="text-gray-300">Compliance Standards</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-2">100%</div>
                        <div className="text-gray-300">Audit Success Rate</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <FileText className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-2">0</div>
                        <div className="text-gray-300">Compliance Violations</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <Users className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-2">50+</div>
                        <div className="text-gray-300">Clients Compliant</div>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${selectedCategory === category
                                ? 'bg-emerald-500 text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Compliances Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredCompliances.map((compliance, index) => {
                        const IconComponent = compliance.icon
                        const complianceId = compliance.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
                        return (
                            <Link
                                key={index}
                                to={`/compliances/${complianceId}`}
                                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${compliance.color} rounded-xl flex items-center justify-center`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full">
                                        {compliance.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {compliance.name}
                                </h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {compliance.description}
                                </p>
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">How We Implement:</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {compliance.implementation}
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>

                {/* Compliance Process */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Our Compliance Implementation Process
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
                        A structured approach to AI governance that scales from quick triage to comprehensive implementation.
                    </p>

                    {/* Process Steps */}
                    <div className="space-y-8 mb-12">
                        {[
                            {
                                step: "Step 1",
                                title: "Quick Triage Call (15 min)",
                                description: "We briefly discuss your AI goals, challenges, or concerns. I assess if my expertise is the right fit — and what support you need most.",
                                highlight: "🕐 Free Office Hours available",
                                icon: "📞",
                                color: "emerald"
                            },
                            {
                                step: "Step 2",
                                title: "Strategy Session (45 min)",
                                description: "We deep-dive into one specific problem: compliance, RAI, governance, etc. You get a 1-page actionable plan in 24h — tailored to your org.",
                                highlight: "💡 Popular starting point for most clients",
                                icon: "🎯",
                                color: "cyan"
                            },
                            {
                                step: "Step 3",
                                title: "Deep-Dive Advisory (90 min)",
                                description: "We co-create your governance, architecture, or adoption framework. You receive a 2–3 page brief with tailored implementation insights.",
                                highlight: "📄 Ideal for leaders ready to act",
                                icon: "🔍",
                                color: "sky"
                            },
                            {
                                step: "Step 4",
                                title: "Ongoing Advisory / Fractional Engagement",
                                description: "Weekly/monthly consulting to guide your AI journey end-to-end. From model guardrails to audit documentation, we ensure you're safe, aligned, and ahead.",
                                highlight: "📈 Custom retainers available on request",
                                icon: "🤝",
                                color: "purple"
                            }
                        ].map((step, i) => {
                            const colorClasses = {
                                emerald: 'border-emerald-400/30 bg-emerald-500/5',
                                cyan: 'border-cyan-400/30 bg-cyan-500/5',
                                sky: 'border-sky-400/30 bg-sky-500/5',
                                purple: 'border-purple-400/30 bg-purple-500/5'
                            }

                            const textColorClasses = {
                                emerald: 'text-emerald-400',
                                cyan: 'text-cyan-400',
                                sky: 'text-sky-400',
                                purple: 'text-purple-400'
                            }

                            return (
                                <div
                                    key={i}
                                    className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 shadow-lg hover:shadow-2xl hover:backdrop-blur-2xl ${colorClasses[step.color]}`}
                                >
                                    <div className="flex items-start gap-6">
                                        {/* Step Number & Icon */}
                                        <div className="flex-shrink-0">
                                            <div className={`w-16 h-16 rounded-2xl ${colorClasses[step.color]} flex items-center justify-center mb-4`}>
                                                <div className="text-2xl">{step.icon}</div>
                                            </div>
                                            <div className={`text-sm font-bold ${textColorClasses[step.color]}`}>
                                                {step.step}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                                                {step.description}
                                            </p>
                                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${colorClasses[step.color]} ${textColorClasses[step.color]}`}>
                                                {step.highlight}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Optional Add-Ons */}
                    <div className="bg-gradient-to-r from-gray-800/20 to-gray-700/20 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/30">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Optional Add-Ons</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Governance dashboards",
                                "Bias/explainability workflows",
                                "Policy documents & model cards",
                                "Custom workshops or stakeholder briefings"
                            ].map((addOn, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-300">{addOn}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* AI Evaluations Section */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        AI Evaluations: The Proof Layer of Governance
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto text-center mb-12">
                        AI evaluations are a core part of AI governance—measurable controls that gate releases and generate audit-ready evidence.
                    </p>

                    {/* Why AI Evals Belong Under Governance */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Why AI Evals Belong Under Governance</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-3xl mb-4">🎯</div>
                                <h4 className="text-lg font-semibold text-white mb-3">Policy to Controls</h4>
                                <p className="text-gray-300">Turn policies (fairness, safety, privacy) into testable controls with clear thresholds</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-3xl mb-4">📊</div>
                                <h4 className="text-lg font-semibold text-white mb-3">Audit Evidence</h4>
                                <p className="text-gray-300">Produce reports, model cards, and logs for audits, risk reviews, and sign-off</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-3xl mb-4">🚪</div>
                                <h4 className="text-lg font-semibold text-white mb-3">Release Gates</h4>
                                <p className="text-gray-300">Enforce gates before release and during change management</p>
                            </div>
                        </div>
                    </div>

                    {/* Eval Lifecycle */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Where Evals Fit in the Lifecycle</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Pre-deployment</h4>
                                    <p className="text-gray-300">Acceptance tests tied to risk controls</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Change Management</h4>
                                    <p className="text-gray-300">Re-eval on model/data/prompt updates</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Post-deployment</h4>
                                    <p className="text-gray-300">Continuous monitoring, drift alerts, incident reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Minimum Eval Suite */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Minimum Eval Suite (Governance Coverage)</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    category: "Quality/Capability",
                                    tests: ["Task accuracy", "RAG grounding", "Hallucination rate"],
                                    color: "from-blue-500 to-blue-600"
                                },
                                {
                                    category: "Responsible AI",
                                    tests: ["Toxicity", "Bias/fairness by segment", "Safety policy compliance"],
                                    color: "from-emerald-500 to-emerald-600"
                                },
                                {
                                    category: "Security/Robustness",
                                    tests: ["Jailbreak resistance", "Prompt-injection resistance", "Red teaming"],
                                    color: "from-red-500 to-red-600"
                                },
                                {
                                    category: "Privacy",
                                    tests: ["PII/PHI leakage checks", "Data minimization", "DP budgets"],
                                    color: "from-purple-500 to-purple-600"
                                },
                                {
                                    category: "Reliability/Ops",
                                    tests: ["Latency", "Cost", "Availability", "Rate-limit behavior"],
                                    color: "from-orange-500 to-orange-600"
                                },
                                {
                                    category: "Business/KPIs",
                                    tests: ["Impact metrics", "Deflection", "AHT", "Revenue", "Risk reduction"],
                                    color: "from-indigo-500 to-indigo-600"
                                }
                            ].map((suite, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <div className={`w-12 h-12 bg-gradient-to-r ${suite.color} rounded-lg flex items-center justify-center mb-4`}>
                                        <span className="text-white font-bold text-lg">{suite.category.split('/')[0][0]}</span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-3">{suite.category}</h4>
                                    <ul className="space-y-2">
                                        {suite.tests.map((test, j) => (
                                            <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></div>
                                                {test}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Required Artifacts */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Required Artifacts</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Test plan with metrics & thresholds, coverage map, and sampling method",
                                "Evaluation report (results, residual risk, waivers)",
                                "Model card / system card referencing controls",
                                "Monitoring dashboard + alert runbooks"
                            ].map((artifact, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white font-bold text-sm">{i + 1}</span>
                                    </div>
                                    <p className="text-gray-300">{artifact}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RACI */}
                    <div className="bg-gradient-to-r from-gray-800/20 to-gray-700/20 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/30">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">RACI (Example)</h3>
                        <div className="space-y-4">
                            {[
                                "Product/Owner: define success & risk appetite",
                                "ML/Engineering: implement evals & telemetry",
                                "Risk/Compliance/Security: set thresholds, review evidence, approve/deny",
                                "Data/Privacy: ensure lawful basis & data controls"
                            ].map((role, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-300">{role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-emerald-600 to-sky-600 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Need Help with AI Compliance?
                    </h3>
                    <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                        Our experts can help you navigate complex compliance requirements and ensure your AI systems meet all regulatory standards.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://calendly.com/sia-sanjeevaniai/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Get Compliance Assessment
                        </a>
                        <a
                            href="/frameworks"
                            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
                        >
                            View Frameworks
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compliances
