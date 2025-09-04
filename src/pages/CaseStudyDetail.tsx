import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { caseStudiesService, CaseStudy } from '@/lib/caseStudies'
import { ArrowLeft, TrendingUp, Shield, DollarSign, Clock, CheckCircle, Users, Home } from 'lucide-react'

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
                        <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                            {caseStudy.content}
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
