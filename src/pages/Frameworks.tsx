import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award, Target, Lock, Users, Home } from 'lucide-react'

const Frameworks = () => {
    const frameworks = [
        {
            name: "NIST AI Risk Management Framework",
            description: "Comprehensive framework for managing AI risks across the entire lifecycle",
            features: [
                "Risk identification and assessment",
                "Governance and oversight structures",
                "Continuous monitoring and evaluation",
                "Incident response planning"
            ],
            icon: Shield,
            color: "from-blue-500 to-blue-600"
        },
        {
            name: "NIST Cybersecurity Framework",
            description: "Industry-standard framework for managing cybersecurity risks",
            features: [
                "Identify critical assets and risks",
                "Protect systems and data",
                "Detect security events",
                "Respond to incidents",
                "Recover from attacks"
            ],
            icon: Lock,
            color: "from-green-500 to-green-600"
        },
        {
            name: "ISO/IEC 23053 AI Risk Management",
            description: "International standard for AI risk management processes",
            features: [
                "Risk assessment methodologies",
                "Risk treatment strategies",
                "Monitoring and review processes",
                "Documentation requirements"
            ],
            icon: Award,
            color: "from-purple-500 to-purple-600"
        },
        {
            name: "IEEE 2859 AI Ethics Framework",
            description: "Ethical guidelines for AI system development and deployment",
            features: [
                "Ethical principles and values",
                "Bias detection and mitigation",
                "Transparency and explainability",
                "Human oversight requirements"
            ],
            icon: Users,
            color: "from-orange-500 to-orange-600"
        },
        {
            name: "COBIT 2019 for AI Governance",
            description: "Governance framework for AI implementation and management",
            features: [
                "Strategic alignment",
                "Value delivery",
                "Risk management",
                "Resource optimization",
                "Performance measurement"
            ],
            icon: Target,
            color: "from-red-500 to-red-600"
        },
        {
            name: "FAIR AI Risk Framework",
            description: "Quantitative framework for AI risk assessment and management",
            features: [
                "Risk quantification methods",
                "Loss event frequency analysis",
                "Loss magnitude assessment",
                "Risk aggregation techniques"
            ],
            icon: CheckCircle,
            color: "from-teal-500 to-teal-600"
        }
    ]

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
                        Frameworks
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">
                        How we operationalize AI governance: RAI/XAI • Model Cards • Audit Logs • Human-in-the-Loop • Evaluation & Drift Monitoring
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-2">6+</div>
                        <div className="text-gray-300">Frameworks Supported</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-2">95%</div>
                        <div className="text-gray-300">Compliance Rate</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <Award className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-2">100%</div>
                        <div className="text-gray-300">Framework Coverage</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <Target className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-2">127%</div>
                        <div className="text-gray-300">ROI Improvement</div>
                    </div>
                </div>

                {/* Our Approach Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
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
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                            <div className="text-3xl mb-4">🎯</div>
                            <h3 className="text-lg font-semibold text-white mb-3">Industry-Specific</h3>
                            <p className="text-gray-300 text-sm">
                                Healthcare gets HIPAA-focused controls, finance gets SOX compliance, edtech gets FERPA safeguards. No generic templates.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                            <div className="text-3xl mb-4">📏</div>
                            <h3 className="text-lg font-semibold text-white mb-3">Size-Appropriate</h3>
                            <p className="text-gray-300 text-sm">
                                Startup governance looks different from enterprise. We scale frameworks to your team size and complexity.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                            <div className="text-3xl mb-4">⚖️</div>
                            <h3 className="text-lg font-semibold text-white mb-3">Risk-Calibrated</h3>
                            <p className="text-gray-300 text-sm">
                                High-risk AI gets more controls, low-risk gets streamlined processes. We match governance to actual risk levels.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                            <div className="text-3xl mb-4">🚀</div>
                            <h3 className="text-lg font-semibold text-white mb-3">Growth-Stage Ready</h3>
                            <p className="text-gray-300 text-sm">
                                Frameworks that evolve with you—from MVP to IPO. Built to scale, not to constrain.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                            <div className="text-3xl mb-4">🔧</div>
                            <h3 className="text-lg font-semibold text-white mb-3">Implementation-Focused</h3>
                            <p className="text-gray-300 text-sm">
                                Not just policies—actual code, processes, and tools that your team can use day one.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                            <div className="text-3xl mb-4">📈</div>
                            <h3 className="text-lg font-semibold text-white mb-3">ROI-Driven</h3>
                            <p className="text-gray-300 text-sm">
                                Every control ties back to business value: risk reduction, cost savings, or revenue protection.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Frameworks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {frameworks.map((framework, index) => {
                        const IconComponent = framework.icon
                        const frameworkId = framework.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
                        return (
                            <Link
                                key={index}
                                to={`/frameworks/${frameworkId}`}
                                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-r ${framework.color} rounded-xl flex items-center justify-center mb-6`}>
                                    <IconComponent className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {framework.name}
                                </h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {framework.description}
                                </p>
                                <ul className="space-y-3">
                                    {framework.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        )
                    })}
                </div>

                {/* Implementation Process */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Our Implementation Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">1</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Assessment</h3>
                            <p className="text-gray-300">Evaluate current AI systems and identify gaps</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">2</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
                            <p className="text-gray-300">Create custom framework implementation plan</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">3</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Implement</h3>
                            <p className="text-gray-300">Deploy frameworks with monitoring systems</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">4</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Optimize</h3>
                            <p className="text-gray-300">Continuous improvement and compliance monitoring</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-emerald-600 to-sky-600 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to Implement AI Governance Frameworks?
                    </h3>
                    <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                        Let's discuss which frameworks are right for your organization and how we can help you achieve full compliance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://calendly.com/sia-sanjeevaniai/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Schedule Consultation
                        </a>
                        <a
                            href="/case-studies"
                            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
                        >
                            View Success Stories
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frameworks
