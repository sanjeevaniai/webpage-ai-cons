import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { caseStudiesService, CaseStudy } from '@/lib/caseStudies'
import { ArrowLeft, TrendingUp, Shield, DollarSign, Clock, CheckCircle, Users, Home, BarChart3, ExternalLink } from 'lucide-react'

// Simple markdown to HTML converter
const markdownToHtml = (markdown: string) => {
    return markdown
        .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mb-2">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mb-3">$1</h2>')
        .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mb-4">$1</h1>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/^- (.*$)/gim, '<li class="text-gray-300 mb-1">$1</li>')
        .replace(/(<li.*<\/li>)/gims, '<ul class="list-disc list-inside text-gray-300 mb-4 space-y-1">$1</ul>')
        .replace(/^(?!<[h|u|l])(.*$)/gim, '<p class="text-gray-300 mb-4">$1</p>')
        .replace(/<p class="text-gray-300 mb-4"><\/p>/g, '')
        .replace(/<p class="text-gray-300 mb-4">\s*<\/p>/g, '')
}

const CaseStudyDetail = () => {
    const { id } = useParams<{ id: string }>()
    const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null)
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        if (!id) return

        const fetchCaseStudy = async () => {
            try {
                const data = await caseStudiesService.getCaseStudyById(id)
                if (data) {
                    setCaseStudy(data)
                } else {
                    setNotFound(true)
                }
            } catch (error) {
                console.error('Error fetching case study:', error)
                setNotFound(true)
            } finally {
                setLoading(false)
            }
        }

        fetchCaseStudy()
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading case study...</div>
            </div>
        )
    }

    if (notFound || !caseStudy) {
        return <Navigate to="/case-studies" replace />
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-sky-900">
            {/* Back Buttons */}
            <div className="container mx-auto px-4 pt-4 sm:pt-8">
                <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center text-emerald-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Back Home
                    </Link>
                    <Link
                        to="/case-studies"
                        className="inline-flex items-center text-blue-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Case Studies
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                            {caseStudy.industry}
                        </span>
                        {caseStudy.featured && (
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                                Featured
                            </span>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {caseStudy.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-4xl">
                        {caseStudy.description}
                    </p>
                </div>

                {/* Client Info */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">{caseStudy.client_name}</h3>
                            <p className="text-gray-300">{caseStudy.industry} Industry</p>
                        </div>
                    </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-1">
                            {caseStudy.metrics.roi_improvement}%
                        </div>
                        <div className="text-gray-300">ROI Improvement</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <DollarSign className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-1">
                            {caseStudy.metrics.cost_reduction}%
                        </div>
                        <div className="text-gray-300">Cost Reduction</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-1">
                            {caseStudy.metrics.security_score}%
                        </div>
                        <div className="text-gray-300">Security Score</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                        <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-1">
                            {caseStudy.metrics.ethics_compliance}%
                        </div>
                        <div className="text-gray-300">Ethics Compliance</div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Challenge */}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                        <p className="text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
                        <p className="text-gray-300 leading-relaxed">{caseStudy.solution}</p>
                    </div>
                </div>

                {/* Healthcare Framework Mix - Special section for Healthcare AI Platform */}
                {caseStudy.title === 'Healthcare AI Platform' && (
                    <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-8 mb-12">
                        <h3 className="text-3xl font-bold text-white mb-6 text-center">Healthcare Framework Mix</h3>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Core Framework Stack */}
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                                <h4 className="text-xl font-bold text-emerald-300 mb-4">Core Framework Stack</h4>

                                <div className="space-y-4">
                                    <div>
                                        <h5 className="text-lg font-semibold text-white mb-2">Regulatory Compliance</h5>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                                <span className="text-gray-300">HIPAA (US compliance)</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                                <span className="text-gray-300">GDPR (International operations)</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                                <span className="text-gray-300">FDA AI/ML Guidance</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h5 className="text-lg font-semibold text-white mb-2">Security & Risk Management</h5>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                <span className="text-gray-300">NIST Cybersecurity Framework</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                <span className="text-gray-300">HITRUST CSF</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                <span className="text-gray-300">ISO 27001</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                <span className="text-gray-300">DSPM (Cloud data security)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h5 className="text-lg font-semibold text-white mb-2">Interoperability</h5>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                <span className="text-gray-300">HL7 FHIR</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Best Practices */}
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                                <h4 className="text-xl font-bold text-blue-300 mb-4">Best Practices</h4>

                                <div className="space-y-4">
                                    <div>
                                        <h5 className="text-lg font-semibold text-white mb-2">Security Architecture</h5>
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                                                <span className="text-gray-300 text-sm">Implement zero-trust architecture with microsegmentation</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                                                <span className="text-gray-300 text-sm">Deploy continuous monitoring for PHI access patterns</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                                                <span className="text-gray-300 text-sm">Establish data governance councils with clinical and privacy expertise</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h5 className="text-lg font-semibold text-white mb-2">AI/ML Safety</h5>
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                                                <span className="text-gray-300 text-sm">Use federated learning for AI training to minimize data exposure</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                                                <span className="text-gray-300 text-sm">Implement differential privacy for research datasets</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Results */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-12">
                    <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">{caseStudy.results}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {caseStudy.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Risk Reduction</h4>
                            <div className="text-3xl font-bold text-green-400">
                                {caseStudy.metrics.risk_reduction}%
                            </div>
                            <p className="text-gray-300">Reduction in business risk</p>
                        </div>
                    </div>
                </div>

                {/* Full Content */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-12">
                    <h3 className="text-2xl font-bold text-white mb-6">Case Study Details</h3>
                    <div className="prose prose-invert max-w-none">
                        <div
                            className="text-gray-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: markdownToHtml(caseStudy.content) }}
                        />
                    </div>
                </div>

                {/* Interactive Dashboard CTA */}
                <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Explore Interactive Analytics
                    </h3>
                    <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                        Dive deeper into our case studies with interactive dashboards, demos, and comprehensive analytics.
                    </p>
                    <div className="space-y-4">
                        <a
                            href="http://localhost:8501"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <BarChart3 className="w-5 h-5 mr-2" />
                            Open Interactive Dashboard
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <div className="bg-white/10 rounded-lg p-4 text-left max-w-md mx-auto">
                            <p className="text-emerald-100 font-semibold mb-2">🚀 Quick Start:</p>
                            <p className="text-sm text-emerald-100 mb-1">1. Run: <code className="bg-emerald-800 px-2 py-1 rounded">python launch_streamlit.py</code></p>
                            <p className="text-sm text-emerald-100 mb-1">2. Or use: <code className="bg-emerald-800 px-2 py-1 rounded">./launch_dashboard.sh</code></p>
                            <p className="text-sm text-emerald-100">3. Dashboard opens at localhost:8501</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to Transform Your AI Strategy?
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Let's discuss how we can help your organization achieve similar results with trustworthy AI systems.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/about"
                            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Learn More About Us
                        </Link>
                        <a
                            href="https://calendly.com/sia-sanjeevaniai/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Schedule Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyDetail
