import { useState } from 'react'
import { Lock, Eye, EyeOff, Download, ExternalLink, ArrowRight, Shield, Key, Users, Clock } from 'lucide-react'
import Header from '@/components/Header'
import NoiseBg from '@/components/NoiseBg'
import ConsultationModal from '@/components/ConsultationModal'

const LockedFrameworks = () => {
    const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
    const [isAccessRequestOpen, setIsAccessRequestOpen] = useState(false)
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [requestForm, setRequestForm] = useState({
        name: '',
        email: '',
        company: '',
        role: '',
        useCase: '',
        message: ''
    })

    const frameworks = [
        {
            id: 1,
            title: "Multi-Agent Coordination Framework",
            description: "Advanced coordination protocols for managing complex multi-agent systems with dynamic task allocation and conflict resolution.",
            category: "Coordination",
            complexity: "Advanced",
            preview: "Our proprietary framework enables seamless coordination between multiple AI agents through intelligent task distribution, real-time communication protocols, and automated conflict resolution mechanisms.",
            lockedContent: {
                architecture: "Detailed system architecture with agent communication patterns",
                algorithms: "Proprietary coordination algorithms and optimization techniques",
                implementation: "Step-by-step implementation guide with code examples",
                caseStudies: "Real-world deployment case studies and performance metrics"
            },
            benefits: [
                "40% improvement in task completion efficiency",
                "60% reduction in agent conflicts",
                "Real-time adaptive coordination",
                "Scalable to 1000+ agents"
            ],
            icon: "🤖"
        },
        {
            id: 2,
            title: "AI Agent Communication Protocol",
            description: "Secure, efficient communication protocols for multi-agent systems with built-in privacy and authentication mechanisms.",
            category: "Communication",
            complexity: "Intermediate",
            preview: "A robust communication framework that ensures secure, efficient, and reliable information exchange between AI agents while maintaining privacy and preventing unauthorized access.",
            lockedContent: {
                protocols: "Detailed communication protocols and message formats",
                security: "Encryption and authentication mechanisms",
                implementation: "API specifications and integration guides",
                testing: "Testing frameworks and validation procedures"
            },
            benefits: [
                "99.9% message delivery reliability",
                "End-to-end encryption",
                "Zero-trust security model",
                "Sub-millisecond latency"
            ],
            icon: "🔐"
        },
        {
            id: 3,
            title: "Dynamic Agent Orchestration Engine",
            description: "Intelligent orchestration system that dynamically manages agent lifecycle, resource allocation, and performance optimization.",
            category: "Orchestration",
            complexity: "Advanced",
            preview: "An intelligent orchestration engine that automatically manages agent creation, resource allocation, performance monitoring, and lifecycle management in complex multi-agent environments.",
            lockedContent: {
                engine: "Core orchestration engine architecture",
                algorithms: "Dynamic resource allocation algorithms",
                monitoring: "Real-time performance monitoring and optimization",
                scaling: "Auto-scaling and load balancing mechanisms"
            },
            benefits: [
                "Automatic resource optimization",
                "Dynamic scaling based on demand",
                "Intelligent load balancing",
                "Predictive performance management"
            ],
            icon: "⚙️"
        },
        {
            id: 4,
            title: "Agent Conflict Resolution System",
            description: "Advanced conflict detection and resolution mechanisms for multi-agent systems with learning capabilities.",
            category: "Conflict Resolution",
            complexity: "Intermediate",
            preview: "A sophisticated system that automatically detects, analyzes, and resolves conflicts between AI agents using machine learning and game theory principles.",
            lockedContent: {
                detection: "Conflict detection algorithms and patterns",
                resolution: "Resolution strategies and decision trees",
                learning: "Machine learning models for conflict prediction",
                integration: "Integration with existing agent frameworks"
            },
            benefits: [
                "95% automatic conflict resolution",
                "Learning from past conflicts",
                "Minimal human intervention",
                "Adaptive resolution strategies"
            ],
            icon: "⚖️"
        }
    ]

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simple password check - in production, this would be more secure
        if (password === 'sanjeevani2024') {
            setIsAuthenticated(true)
        } else {
            alert('Invalid password. Please contact us for access.')
        }
    }

    const handleAccessRequest = (e: React.FormEvent) => {
        e.preventDefault()
        // In production, this would send data to your backend
        console.log('Access request:', requestForm)
        alert('Access request submitted! We will contact you within 24 hours.')
        setIsAccessRequestOpen(false)
        setRequestForm({
            name: '',
            email: '',
            company: '',
            role: '',
            useCase: '',
            message: ''
        })
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
                <NoiseBg />
                <Header />
                
                <div className="relative z-10">
                    {/* Hero Section */}
                    <section className="mx-auto max-w-7xl px-4 pt-20 md:pt-32 pb-16">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 dark:bg-red-500/20 border border-red-400/30 dark:border-red-300/30 text-sm text-red-600 dark:text-red-300 mb-6">
                                <Lock className="w-4 h-4" />
                                Proprietary Frameworks
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                                Multi-Agent AI Frameworks
                            </h1>
                            
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                Our proprietary frameworks and algorithms for building sophisticated multi-agent AI systems. 
                                Access restricted to verified clients and partners.
                            </p>

                            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-400/20 max-w-4xl mx-auto mb-8">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Shield className="w-6 h-6 text-red-400" />
                                    <h2 className="text-xl font-bold text-white">Protected Content</h2>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    These frameworks contain proprietary algorithms and methodologies developed by SANJEEVANI AI. 
                                    Access is restricted to protect intellectual property and maintain competitive advantage.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <div className="flex items-center gap-2 text-red-300">
                                        <Key className="w-4 h-4" />
                                        <span>Password Protected</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-orange-300">
                                        <Users className="w-4 h-4" />
                                        <span>Client Access Only</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-yellow-300">
                                        <Clock className="w-4 h-4" />
                                        <span>24/7 Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Frameworks Preview */}
                    <section className="mx-auto max-w-7xl px-4 pb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Available Frameworks
                            </h2>
                            <p className="text-xl text-gray-300">
                                Preview of our proprietary multi-agent AI frameworks
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {frameworks.map((framework) => (
                                <div
                                    key={framework.id}
                                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/40 shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="text-4xl">{framework.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-xl font-semibold text-white">{framework.title}</h3>
                                                <Lock className="w-5 h-5 text-red-400" />
                                            </div>
                                            <p className="text-gray-300 text-sm mb-3">{framework.description}</p>
                                            <div className="flex items-center gap-4 text-xs">
                                                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                                                    {framework.category}
                                                </span>
                                                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full">
                                                    {framework.complexity}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-white mb-2">Preview:</h4>
                                        <p className="text-gray-300 text-sm">{framework.preview}</p>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                                        <ul className="space-y-1">
                                            {framework.benefits.map((benefit, index) => (
                                                <li key={index} className="text-xs text-gray-300 flex items-center gap-2">
                                                    <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="text-xs text-gray-400">
                                            Locked Content: {Object.keys(framework.lockedContent).length} sections
                                        </div>
                                        <button
                                            onClick={() => setIsAccessRequestOpen(true)}
                                            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                                        >
                                            Request Access
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Access Options */}
                    <section className="mx-auto max-w-7xl px-4 pb-16">
                        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-400/20 text-center">
                            <h2 className="text-2xl font-bold text-white mb-4">Get Access to Our Frameworks</h2>
                            <p className="text-gray-300 mb-6">
                                Choose your preferred method to access our proprietary multi-agent AI frameworks
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => setIsAccessRequestOpen(true)}
                                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                                >
                                    Request Client Access
                                </button>
                                <button
                                    onClick={() => setIsConsultationModalOpen(true)}
                                    className="border border-emerald-400/40 text-emerald-300 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-500/10 transition-all duration-200"
                                >
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Access Request Modal */}
                {isAccessRequestOpen && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md w-full border border-emerald-400/20 shadow-2xl">
                            <button
                                onClick={() => setIsAccessRequestOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Request Framework Access</h3>
                                <p className="text-gray-300">
                                    Fill out the form below to request access to our proprietary frameworks
                                </p>
                            </div>

                            <form onSubmit={handleAccessRequest} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={requestForm.name}
                                    onChange={(e) => setRequestForm({...requestForm, name: e.target.value})}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={requestForm.email}
                                    onChange={(e) => setRequestForm({...requestForm, email: e.target.value})}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    value={requestForm.company}
                                    onChange={(e) => setRequestForm({...requestForm, company: e.target.value})}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Role/Title"
                                    value={requestForm.role}
                                    onChange={(e) => setRequestForm({...requestForm, role: e.target.value})}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                                    required
                                />
                                <textarea
                                    placeholder="Use Case Description"
                                    value={requestForm.useCase}
                                    onChange={(e) => setRequestForm({...requestForm, useCase: e.target.value})}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 h-20 resize-none"
                                    required
                                />
                                <textarea
                                    placeholder="Additional Message (Optional)"
                                    value={requestForm.message}
                                    onChange={(e) => setRequestForm({...requestForm, message: e.target.value})}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 h-20 resize-none"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                                >
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                <ConsultationModal 
                    isOpen={isConsultationModalOpen} 
                    onClose={() => setIsConsultationModalOpen(false)} 
                />
            </div>
        )
    }

    // Authenticated view - show full content
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            <NoiseBg />
            <Header />
            
            <div className="relative z-10">
                {/* Authenticated Header */}
                <section className="mx-auto max-w-7xl px-4 pt-20 md:pt-32 pb-16">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/20 border border-green-400/30 dark:border-green-300/30 text-sm text-green-600 dark:text-green-300 mb-6">
                            <Shield className="w-4 h-4" />
                            Authenticated Access
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                            Multi-Agent AI Frameworks
                        </h1>
                        
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            Welcome to our proprietary frameworks and algorithms. You now have full access to detailed specifications, 
                            implementation guides, and code examples.
                        </p>

                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                        >
                            Logout
                        </button>
                    </div>
                </section>

                {/* Full Framework Content */}
                <section className="mx-auto max-w-7xl px-4 pb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Framework Library
                        </h2>
                        <p className="text-xl text-gray-300">
                            Complete access to all framework documentation and resources
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {frameworks.map((framework) => (
                            <div
                                key={framework.id}
                                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/40 shadow-lg"
                            >
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="text-5xl">{framework.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-2">{framework.title}</h3>
                                        <p className="text-gray-300 mb-4">{framework.description}</p>
                                        <div className="flex items-center gap-4 text-sm">
                                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                                                {framework.category}
                                            </span>
                                            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full">
                                                {framework.complexity}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">Available Resources:</h4>
                                        <ul className="space-y-2">
                                            {Object.entries(framework.lockedContent).map(([key, value]) => (
                                                <li key={key} className="flex items-center gap-2 text-gray-300">
                                                    <Download className="w-4 h-4 text-emerald-400" />
                                                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                                        <ul className="space-y-2">
                                            {framework.benefits.map((benefit, index) => (
                                                <li key={index} className="text-gray-300 flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-4">
                                    <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105">
                                        Download Framework
                                    </button>
                                    <button className="border border-emerald-400/40 text-emerald-300 px-6 py-3 rounded-lg font-medium hover:bg-emerald-500/10 transition-all duration-200">
                                        View Documentation
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default LockedFrameworks
