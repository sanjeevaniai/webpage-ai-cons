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
