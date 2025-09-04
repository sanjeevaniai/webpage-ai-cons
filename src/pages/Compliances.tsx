import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, FileText, Lock, Users, CheckCircle, AlertTriangle, Home } from 'lucide-react'

const Compliances = () => {
    const compliances = [
        {
            name: "HIPAA (Health Insurance Portability and Accountability Act)",
            description: "Protects patient health information and ensures privacy in healthcare",
            requirements: [
                "Administrative safeguards for PHI",
                "Physical safeguards for data centers",
                "Technical safeguards for systems",
                "Breach notification procedures",
                "Business associate agreements"
            ],
            icon: Shield,
            color: "from-blue-500 to-blue-600",
            category: "Healthcare"
        },
        {
            name: "PHI (Protected Health Information)",
            description: "Safeguards for individually identifiable health information",
            requirements: [
                "Minimum necessary standard",
                "Access controls and authentication",
                "Audit logs and monitoring",
                "Data encryption at rest and in transit",
                "Workforce training programs"
            ],
            icon: Lock,
            color: "from-green-500 to-green-600",
            category: "Healthcare"
        },
        {
            name: "ePHI (Electronic Protected Health Information)",
            description: "Electronic safeguards for protected health information",
            requirements: [
                "Encryption of ePHI in transit",
                "Encryption of ePHI at rest",
                "Access controls and unique user identification",
                "Audit controls and logging",
                "Transmission security measures"
            ],
            icon: FileText,
            color: "from-purple-500 to-purple-600",
            category: "Healthcare"
        },
        {
            name: "GDPR (General Data Protection Regulation)",
            description: "EU regulation for data protection and privacy",
            requirements: [
                "Lawful basis for processing",
                "Data subject rights management",
                "Privacy by design principles",
                "Data protection impact assessments",
                "Breach notification within 72 hours"
            ],
            icon: Users,
            color: "from-orange-500 to-orange-600",
            category: "Privacy"
        },
        {
            name: "CCPA (California Consumer Privacy Act)",
            description: "California state law for consumer privacy rights",
            requirements: [
                "Consumer rights disclosure",
                "Opt-out mechanisms for data sales",
                "Data deletion requests",
                "Non-discrimination policies",
                "Privacy policy updates"
            ],
            icon: CheckCircle,
            color: "from-teal-500 to-teal-600",
            category: "Privacy"
        },
        {
            name: "SOX (Sarbanes-Oxley Act)",
            description: "Financial reporting and corporate governance standards",
            requirements: [
                "Internal control over financial reporting",
                "Management assessment of controls",
                "Auditor attestation requirements",
                "Whistleblower protection",
                "Document retention policies"
            ],
            icon: AlertTriangle,
            color: "from-red-500 to-red-600",
            category: "Financial"
        },
        {
            name: "PCI DSS (Payment Card Industry Data Security Standard)",
            description: "Security standards for payment card data",
            requirements: [
                "Secure network and systems maintenance",
                "Protection of cardholder data",
                "Vulnerability management programs",
                "Strong access control measures",
                "Regular security testing"
            ],
            icon: Shield,
            color: "from-indigo-500 to-indigo-600",
            category: "Financial"
        },
        {
            name: "FedRAMP (Federal Risk and Authorization Management Program)",
            description: "US government cloud security authorization program",
            requirements: [
                "Security assessment and authorization",
                "Continuous monitoring capabilities",
                "Incident response procedures",
                "Personnel security controls",
                "System and communications protection"
            ],
            icon: Lock,
            color: "from-cyan-500 to-cyan-600",
            category: "Government"
        }
    ]

    const categories = ["All", "Healthcare", "Privacy", "Financial", "Government"]
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
                        AI Compliance Standards
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">
                        We ensure your AI systems meet all relevant compliance requirements across healthcare, privacy, financial, and government sectors.
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
                                    <h4 className="text-lg font-semibold text-white mb-3">Key Requirements:</h4>
                                    <ul className="space-y-2">
                                        {compliance.requirements.slice(0, 3).map((requirement, reqIndex) => (
                                            <li key={reqIndex} className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-300 text-sm">{requirement}</span>
                                            </li>
                                        ))}
                                        {compliance.requirements.length > 3 && (
                                            <li className="text-gray-400 text-sm">
                                                +{compliance.requirements.length - 3} more requirements
                                            </li>
                                        )}
                                    </ul>
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">1</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Gap Analysis</h3>
                            <p className="text-gray-300">Assess current compliance status and identify gaps</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">2</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
                            <p className="text-gray-300">Deploy compliance controls and monitoring systems</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">3</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Testing</h3>
                            <p className="text-gray-300">Conduct compliance testing and validation</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">4</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Monitoring</h3>
                            <p className="text-gray-300">Ongoing compliance monitoring and reporting</p>
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
